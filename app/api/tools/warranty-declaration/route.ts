import {
  AlignmentType,
  Document,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

import PizZip from "pizzip";

export const runtime = "nodejs";

const DOCX_MIME =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

type DeclarationData = {
  companyName: string;
  companyAddress: string;
  bidNumber: string;
  tenderTitle: string;
  departmentName: string;
  productName: string;
  warrantyPeriod: string;
  signatoryName: string;
  designation: string;
  place: string;
  date: string;
};

function cleanFilename(value: string) {
  return (
    value
      .trim()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "") || "BidAxis"
  );
}

function formatDate(value: string) {
  if (!value) return "";

  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${day}/${month}/${year}`;
}

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function xmlParagraph(
  text: string,
  options: {
    bold?: boolean;
    center?: boolean;
    underline?: boolean;
    after?: number;
  } = {}
) {
  return `
<w:p>
  <w:pPr>
    ${
      options.center
        ? '<w:jc w:val="center"/>'
        : '<w:jc w:val="both"/>'
    }
    <w:spacing
      w:before="0"
      w:after="${options.after ?? 120}"
      w:line="276"
      w:lineRule="auto"
    />
  </w:pPr>
  <w:r>
    <w:rPr>
      ${options.bold ? "<w:b/>" : ""}
      ${
        options.underline
          ? '<w:u w:val="single"/>'
          : ""
      }
      <w:sz w:val="22"/>
      <w:szCs w:val="22"/>
    </w:rPr>
    <w:t xml:space="preserve">${xmlEscape(text)}</w:t>
  </w:r>
</w:p>`;
}

function buildDeclarationXml(
  data: DeclarationData
) {
  const date = formatDate(data.date);

  return `
<!-- BIDAXIS-WARRANTY-START -->

<w:p>
  <w:pPr>
    <w:spacing w:after="0"/>
  </w:pPr>
</w:p>

${xmlParagraph(
  "WARRANTY DECLARATION",
  {
    bold: true,
    center: true,
    underline: true,
    after: 260,
  }
)}

${xmlParagraph("To,", {
  after: 40,
})}

${xmlParagraph(data.departmentName, {
  bold: true,
  after: 180,
})}

${xmlParagraph(
  `Subject: Warranty Declaration against Bid No. ${data.bidNumber}`,
  {
    bold: true,
    after: 220,
  }
)}

${xmlParagraph("Dear Sir/Madam,", {
  after: 180,
})}

${xmlParagraph(
  `We, ${data.companyName}, having our registered / office address at ${data.companyAddress}, hereby submit this Warranty Declaration in connection with Bid No. ${data.bidNumber} for "${data.tenderTitle}".`,
  {
    after: 180,
  }
)}

${xmlParagraph(
  `We hereby declare that the product "${data.productName}" offered by us against the above-mentioned bid shall be covered by a warranty period of ${data.warrantyPeriod}, subject to the specifications, scope and applicable terms and conditions of the tender / contract.`,
  {
    after: 180,
  }
)}

${xmlParagraph(
  "During the applicable warranty period, we undertake to fulfil the warranty obligations applicable to our offer in accordance with the tender specifications, contract conditions and the warranty terms accepted by us.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "Where repair, replacement, rectification, support or other warranty obligations are applicable under the tender / contract, the same shall be carried out in accordance with those applicable conditions.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "This declaration shall be read together with the technical specifications, warranty requirements and contractual conditions of the referenced tender and shall not be interpreted as replacing or modifying those requirements.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We confirm that the product and warranty information furnished in this declaration is true and correct to the best of our knowledge and belief.",
  {
    after: 300,
  }
)}

${xmlParagraph(`For ${data.companyName}`, {
  bold: true,
  after: 360,
})}

${xmlParagraph(data.signatoryName, {
  bold: true,
  after: 20,
})}

${xmlParagraph(data.designation, {
  after: 100,
})}

${xmlParagraph(`Place: ${data.place}`, {
  after: 20,
})}

${xmlParagraph(`Date: ${date}`, {
  after: 0,
})}

<!-- BIDAXIS-WARRANTY-END -->
`;
}

function removePreviousDeclaration(
  xml: string
) {
  return xml.replace(
    /<!-- BIDAXIS-WARRANTY-START -->[\s\S]*?<!-- BIDAXIS-WARRANTY-END -->/g,
    ""
  );
}

function removeExplicitPageBreaks(
  xml: string
) {
  return xml
    .replace(
      /<w:br\b[^>]*w:type=["']page["'][^>]*\/>/gi,
      ""
    )
    .replace(
      /<w:lastRenderedPageBreak\b[^>]*\/>/gi,
      ""
    )
    .replace(
      /<w:pageBreakBefore\b[^>]*\/>/gi,
      ""
    );
}

function removeTrailingBlankParagraphs(
  xml: string
) {
  let output = xml;

  for (let index = 0; index < 30; index += 1) {
    const updated = output.replace(
      /<w:p(?:\s[^>]*)?>\s*(?:<w:pPr>[\s\S]*?<\/w:pPr>)?\s*(?:<w:r(?:\s[^>]*)?>\s*(?:<w:rPr>[\s\S]*?<\/w:rPr>)?\s*(?:<w:t(?:\s[^>]*)?>\s*<\/w:t>)?\s*<\/w:r>)?\s*<\/w:p>\s*$/i,
      ""
    );

    if (updated === output) {
      break;
    }

    output = updated;
  }

  return output;
}

async function createBidAxisDocument(
  data: DeclarationData
) {
  const date = formatDate(data.date);

  const bodyParagraph = (
    text: string,
    after = 170
  ) =>
    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,

      spacing: {
        after,
        line: 276,
      },

      children: [
        new TextRun({
          text,
          size: 22,
        }),
      ],
    });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 650,
              right: 850,
              bottom: 650,
              left: 850,
            },
          },
        },

        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,

            spacing: {
              after: 70,
            },

            children: [
              new TextRun({
                text: "BIDAXIS",
                bold: true,
                size: 28,
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,

            spacing: {
              after: 280,
            },

            children: [
              new TextRun({
                text: "WARRANTY DECLARATION",
                bold: true,
                size: 26,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 40,
            },

            children: [
              new TextRun({
                text: "To,",
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 170,
            },

            children: [
              new TextRun({
                text: data.departmentName,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 210,
            },

            children: [
              new TextRun({
                text:
                  `Subject: Warranty Declaration against Bid No. ` +
                  `${data.bidNumber}`,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 170,
            },

            children: [
              new TextRun({
                text: "Dear Sir/Madam,",
                size: 22,
              }),
            ],
          }),

          bodyParagraph(
            `We, ${data.companyName}, having our registered / office ` +
              `address at ${data.companyAddress}, hereby submit this ` +
              `Warranty Declaration in connection with Bid No. ` +
              `${data.bidNumber} for "${data.tenderTitle}".`
          ),

          bodyParagraph(
            `We hereby declare that the product "${data.productName}" ` +
              `offered by us against the above-mentioned bid shall be ` +
              `covered by a warranty period of ${data.warrantyPeriod}, ` +
              `subject to the specifications, scope and applicable terms ` +
              `and conditions of the tender / contract.`
          ),

          bodyParagraph(
            "During the applicable warranty period, we undertake to " +
              "fulfil the warranty obligations applicable to our offer " +
              "in accordance with the tender specifications, contract " +
              "conditions and the warranty terms accepted by us."
          ),

          bodyParagraph(
            "Where repair, replacement, rectification, support or other " +
              "warranty obligations are applicable under the tender / " +
              "contract, the same shall be carried out in accordance " +
              "with those applicable conditions."
          ),

          bodyParagraph(
            "This declaration shall be read together with the technical " +
              "specifications, warranty requirements and contractual " +
              "conditions of the referenced tender and shall not be " +
              "interpreted as replacing or modifying those requirements."
          ),

          bodyParagraph(
            "We confirm that the product and warranty information " +
              "furnished in this declaration is true and correct to the " +
              "best of our knowledge and belief.",
            280
          ),

          new Paragraph({
            spacing: {
              after: 330,
            },

            children: [
              new TextRun({
                text: `For ${data.companyName}`,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 20,
            },

            children: [
              new TextRun({
                text: data.signatoryName,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 80,
            },

            children: [
              new TextRun({
                text: data.designation,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 20,
            },

            children: [
              new TextRun({
                text: `Place: ${data.place}`,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: `Date: ${date}`,
                size: 22,
              }),
            ],
          }),
        ],
      },
    ],
  });

  return Packer.toBuffer(doc);
}

async function createLetterheadDocument(
  letterhead: File,
  data: DeclarationData
) {
  const input = Buffer.from(
    await letterhead.arrayBuffer()
  );

  let zip: PizZip;

  try {
    zip = new PizZip(input);
  } catch {
    throw new Error(
      "Unable to open the uploaded Word letterhead. Please upload a valid .docx file."
    );
  }

  const documentFile =
    zip.file("word/document.xml");

  if (!documentFile) {
    throw new Error(
      "Invalid Word letterhead. The document body could not be found."
    );
  }

  let xml = documentFile.asText();

  xml = removePreviousDeclaration(xml);
  xml = removeExplicitPageBreaks(xml);

  const bodyMatch = xml.match(
    /<w:body(?:\s[^>]*)?>([\s\S]*?)<\/w:body>/
  );

  if (!bodyMatch) {
    throw new Error(
      "Unable to read the uploaded Word document body."
    );
  }

  let body = bodyMatch[1];

  /*
   * Preserve the final section properties so that
   * headers, footers, margins and other letterhead
   * settings remain connected to the document.
   */
  const sectionMatches = [
    ...body.matchAll(
      /<w:sectPr\b[\s\S]*?<\/w:sectPr>/g
    ),
  ];

  const sectionProperties =
    sectionMatches.length > 0
      ? sectionMatches[
          sectionMatches.length - 1
        ][0]
      : "";

  if (sectionProperties) {
    const sectionIndex =
      body.lastIndexOf(sectionProperties);

    if (sectionIndex >= 0) {
      body =
        body.slice(0, sectionIndex) +
        body.slice(
          sectionIndex +
            sectionProperties.length
        );
    }
  }

  body = removeTrailingBlankParagraphs(body);

  const generatedContent =
    buildDeclarationXml(data);

  const newBody =
    `${body}${generatedContent}${sectionProperties}`;

  xml = xml.replace(
    /<w:body(?:\s[^>]*)?>[\s\S]*?<\/w:body>/,
    `<w:body>${newBody}</w:body>`
  );

  zip.file("word/document.xml", xml);

  return zip.generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
}

export async function POST(
  request: Request
) {
  try {
    const formData =
      await request.formData();

    const mode = String(
      formData.get("mode") || "bidaxis"
    );

    const accuracyAccepted =
      String(
        formData.get("accuracyAccepted") || ""
      ) === "true";

    if (
      mode !== "bidaxis" &&
      mode !== "letterhead"
    ) {
      return Response.json(
        {
          error: "Invalid document mode.",
        },
        {
          status: 400,
        }
      );
    }

    if (!accuracyAccepted) {
      return Response.json(
        {
          error:
            "Please confirm the accuracy of the product and warranty information before generating the document.",
        },
        {
          status: 400,
        }
      );
    }

    const get = (field: string) =>
      String(
        formData.get(field) || ""
      ).trim();

    const data: DeclarationData = {
      companyName:
        get("companyName"),

      companyAddress:
        get("companyAddress"),

      bidNumber:
        get("bidNumber"),

      tenderTitle:
        get("tenderTitle"),

      departmentName:
        get("departmentName"),

      productName:
        get("productName"),

      warrantyPeriod:
        get("warrantyPeriod"),

      signatoryName:
        get("signatoryName"),

      designation:
        get("designation"),

      place:
        get("place"),

      date:
        get("date"),
    };

    const required:
      Array<keyof DeclarationData> = [
        "companyName",
        "companyAddress",
        "bidNumber",
        "tenderTitle",
        "departmentName",
        "productName",
        "warrantyPeriod",
        "signatoryName",
        "designation",
        "place",
        "date",
      ];

    for (const field of required) {
      if (!data[field]) {
        return Response.json(
          {
            error:
              `Missing required field: ${field}`,
          },
          {
            status: 400,
          }
        );
      }
    }

    let buffer: Buffer;

    if (mode === "letterhead") {
      const uploaded =
        formData.get("letterhead");

      if (
        !uploaded ||
        typeof uploaded === "string" ||
        typeof uploaded.arrayBuffer !== "function"
      ) {
        return Response.json(
          {
            error:
              "Please upload your company Word letterhead.",
          },
          {
            status: 400,
          }
        );
      }

      const file = uploaded as File;

      if (
        !file.name
          .toLowerCase()
          .endsWith(".docx")
      ) {
        return Response.json(
          {
            error:
              "Only Microsoft Word .docx letterheads are supported.",
          },
          {
            status: 400,
          }
        );
      }

      if (
        file.size >
        15 * 1024 * 1024
      ) {
        return Response.json(
          {
            error:
              "The uploaded Word letterhead is too large. Maximum supported size is 15 MB.",
          },
          {
            status: 400,
          }
        );
      }

      buffer =
        await createLetterheadDocument(
          file,
          data
        );
    } else {
      buffer =
        await createBidAxisDocument(
          data
        );
    }

    const filename =
      `Warranty-Declaration-${cleanFilename(
        data.companyName
      )}.docx`;

    return new Response(
      new Uint8Array(buffer),
      {
        status: 200,

        headers: {
          "Content-Type":
            DOCX_MIME,

          "Content-Disposition":
            `attachment; filename="${filename}"`,

          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "Warranty Declaration generation error:",
      error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate Warranty Declaration.",
      },
      {
        status: 500,
      }
    );
  }
}
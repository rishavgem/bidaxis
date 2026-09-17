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
<!-- BIDAXIS-NON-CONVICTION-START -->

<w:p>
  <w:pPr>
    <w:spacing w:after="0"/>
  </w:pPr>
</w:p>

${xmlParagraph("NON-CONVICTION DECLARATION", {
  bold: true,
  center: true,
  underline: true,
  after: 260,
})}

${xmlParagraph("To,", {
  after: 40,
})}

${xmlParagraph(data.departmentName, {
  bold: true,
  after: 180,
})}

${xmlParagraph(
  `Subject: Non-Conviction Declaration against Bid No. ${data.bidNumber}`,
  {
    bold: true,
    after: 220,
  }
)}

${xmlParagraph("Dear Sir/Madam,", {
  after: 180,
})}

${xmlParagraph(
  `We, ${data.companyName}, having our registered / office address at ${data.companyAddress}, hereby submit this declaration in connection with Bid No. ${data.bidNumber} for "${data.tenderTitle}".`,
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We hereby declare that, to the best of our knowledge and belief, the company has not been convicted of an offence that renders it ineligible to participate in the above-mentioned tender.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We further confirm that this declaration is being furnished for the purpose of establishing our eligibility in accordance with the applicable conditions of the referenced bid.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We understand that the procuring authority may verify the information furnished in this declaration in accordance with the applicable tender conditions.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We confirm that the information furnished in this declaration is true and correct to the best of our knowledge and belief.",
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

<!-- BIDAXIS-NON-CONVICTION-END -->
`;
}

function removePreviousDeclaration(xml: string) {
  return xml.replace(
    /<!-- BIDAXIS-NON-CONVICTION-START -->[\s\S]*?<!-- BIDAXIS-NON-CONVICTION-END -->/g,
    ""
  );
}

function removeExplicitPageBreaks(xml: string) {
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

function removeTrailingBlankParagraphs(xml: string) {
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
    after = 180
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
              top: 700,
              right: 850,
              bottom: 700,
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
              after: 300,
            },

            children: [
              new TextRun({
                text: "NON-CONVICTION DECLARATION",
                bold: true,
                underline: {},
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
              after: 180,
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
              after: 220,
            },

            children: [
              new TextRun({
                text:
                  `Subject: Non-Conviction Declaration ` +
                  `against Bid No. ${data.bidNumber}`,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 180,
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
              `declaration in connection with Bid No. ${data.bidNumber} ` +
              `for "${data.tenderTitle}".`
          ),

          bodyParagraph(
            "We hereby declare that, to the best of our knowledge " +
              "and belief, the company has not been convicted of an " +
              "offence that renders it ineligible to participate in " +
              "the above-mentioned tender."
          ),

          bodyParagraph(
            "We further confirm that this declaration is being " +
              "furnished for the purpose of establishing our " +
              "eligibility in accordance with the applicable " +
              "conditions of the referenced bid."
          ),

          bodyParagraph(
            "We understand that the procuring authority may verify " +
              "the information furnished in this declaration in " +
              "accordance with the applicable tender conditions."
          ),

          bodyParagraph(
            "We confirm that the information furnished in this " +
              "declaration is true and correct to the best of our " +
              "knowledge and belief.",
            300
          ),

          new Paragraph({
            spacing: {
              after: 350,
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
              after: 90,
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
   * Preserve section properties. These may contain
   * header/footer references, margins and page settings
   * belonging to the uploaded letterhead.
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

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const mode = String(
      formData.get("mode") || "bidaxis"
    );

    const confirmed =
      String(
        formData.get("confirmed") || ""
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

    if (!confirmed) {
      return Response.json(
        {
          error:
            "You must confirm the accuracy of the declaration before generating it.",
        },
        {
          status: 400,
        }
      );
    }

    const get = (name: string) =>
      String(
        formData.get(name) || ""
      ).trim();

    const data: DeclarationData = {
      companyName: get("companyName"),
      companyAddress: get("companyAddress"),
      bidNumber: get("bidNumber"),
      tenderTitle: get("tenderTitle"),
      departmentName: get("departmentName"),
      signatoryName: get("signatoryName"),
      designation: get("designation"),
      place: get("place"),
      date: get("date"),
    };

    const required:
      Array<keyof DeclarationData> = [
        "companyName",
        "companyAddress",
        "bidNumber",
        "tenderTitle",
        "departmentName",
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
      const file =
        formData.get("letterhead");

      if (!(file instanceof File)) {
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
      `Non-Conviction-Declaration-${cleanFilename(
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
      "Non-Conviction generation error:",
      error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate Non-Conviction Declaration.",
      },
      {
        status: 500,
      }
    );
  }
}
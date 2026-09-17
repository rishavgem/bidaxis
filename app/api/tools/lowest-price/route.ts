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

type PriceData = {
  companyName: string;
  companyAddress: string;
  bidNumber: string;
  tenderTitle: string;
  departmentName: string;
  productName: string;
  offeredPrice: string;
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

function buildPriceDeclarationXml(
  data: PriceData
) {
  const date = formatDate(data.date);

  return `
<!-- BIDAXIS-LOWEST-PRICE-START -->

<w:p>
  <w:pPr>
    <w:spacing w:after="0"/>
  </w:pPr>
</w:p>

${xmlParagraph(
  "LOWEST PRICE / PRICE DECLARATION",
  {
    bold: true,
    center: true,
    underline: true,
    after: 240,
  }
)}

${xmlParagraph("To,", {
  after: 40,
})}

${xmlParagraph(data.departmentName, {
  bold: true,
  after: 170,
})}

${xmlParagraph(
  `Subject: Price Declaration against Bid No. ${data.bidNumber}`,
  {
    bold: true,
    after: 200,
  }
)}

${xmlParagraph("Dear Sir/Madam,", {
  after: 160,
})}

${xmlParagraph(
  `We, ${data.companyName}, having our registered / office address at ${data.companyAddress}, hereby submit this price declaration in connection with Bid No. ${data.bidNumber} for "${data.tenderTitle}".`,
  {
    after: 170,
  }
)}

${xmlParagraph(
  `Product / Item: ${data.productName}`,
  {
    bold: true,
    after: 100,
  }
)}

${xmlParagraph(
  `Offered Price: ${data.offeredPrice}`,
  {
    bold: true,
    after: 190,
  }
)}

${xmlParagraph(
  "We declare that the above price is the price offered by us for the identified product / item against the referenced bid, subject to the commercial terms, taxes, duties, freight, quantity basis, inclusions and other conditions stated in our bid and the tender documents.",
  {
    after: 170,
  }
)}

${xmlParagraph(
  "This declaration records the bidder-provided offered price for the referenced procurement and does not, by itself, represent an independent comparison with prices offered in other procurements, markets, catalogues or transactions.",
  {
    after: 170,
  }
)}

${xmlParagraph(
  "Where the bid conditions require any specific price certification, comparison, supporting document or additional declaration, the applicable tender requirement shall govern.",
  {
    after: 170,
  }
)}

${xmlParagraph(
  "We confirm that the information furnished in this declaration is true and correct to the best of our knowledge and belief.",
  {
    after: 280,
  }
)}

${xmlParagraph(`For ${data.companyName}`, {
  bold: true,
  after: 340,
})}

${xmlParagraph(data.signatoryName, {
  bold: true,
  after: 20,
})}

${xmlParagraph(data.designation, {
  after: 80,
})}

${xmlParagraph(`Place: ${data.place}`, {
  after: 20,
})}

${xmlParagraph(`Date: ${date}`, {
  after: 0,
})}

<!-- BIDAXIS-LOWEST-PRICE-END -->
`;
}

function removePreviousDeclaration(
  xml: string
) {
  return xml.replace(
    /<!-- BIDAXIS-LOWEST-PRICE-START -->[\s\S]*?<!-- BIDAXIS-LOWEST-PRICE-END -->/g,
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

  for (
    let index = 0;
    index < 30;
    index += 1
  ) {
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
  data: PriceData
) {
  const date = formatDate(data.date);

  const bodyParagraph = (
    text: string,
    after = 155,
    bold = false
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
          bold,
        }),
      ],
    });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 620,
              right: 820,
              bottom: 620,
              left: 820,
            },
          },
        },

        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,

            spacing: {
              after: 60,
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
              after: 240,
            },

            children: [
              new TextRun({
                text:
                  "LOWEST PRICE / PRICE DECLARATION",
                bold: true,
                size: 25,
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
              after: 160,
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
              after: 190,
            },

            children: [
              new TextRun({
                text:
                  `Subject: Price Declaration against Bid No. ` +
                  `${data.bidNumber}`,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 150,
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
              `price declaration in connection with Bid No. ` +
              `${data.bidNumber} for "${data.tenderTitle}".`
          ),

          bodyParagraph(
            `Product / Item: ${data.productName}`,
            90,
            true
          ),

          bodyParagraph(
            `Offered Price: ${data.offeredPrice}`,
            180,
            true
          ),

          bodyParagraph(
            "We declare that the above price is the price offered by us " +
              "for the identified product / item against the referenced " +
              "bid, subject to the commercial terms, taxes, duties, " +
              "freight, quantity basis, inclusions and other conditions " +
              "stated in our bid and the tender documents."
          ),

          bodyParagraph(
            "This declaration records the bidder-provided offered price " +
              "for the referenced procurement and does not, by itself, " +
              "represent an independent comparison with prices offered " +
              "in other procurements, markets, catalogues or transactions."
          ),

          bodyParagraph(
            "Where the bid conditions require any specific price " +
              "certification, comparison, supporting document or " +
              "additional declaration, the applicable tender requirement " +
              "shall govern."
          ),

          bodyParagraph(
            "We confirm that the information furnished in this declaration " +
              "is true and correct to the best of our knowledge and belief.",
            260
          ),

          new Paragraph({
            spacing: {
              after: 320,
            },

            children: [
              new TextRun({
                text:
                  `For ${data.companyName}`,
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
                text:
                  data.signatoryName,
                bold: true,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 70,
            },

            children: [
              new TextRun({
                text:
                  data.designation,
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
                text:
                  `Place: ${data.place}`,
                size: 22,
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({
                text:
                  `Date: ${date}`,
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
  data: PriceData
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
      body.lastIndexOf(
        sectionProperties
      );

    if (sectionIndex >= 0) {
      body =
        body.slice(0, sectionIndex) +
        body.slice(
          sectionIndex +
            sectionProperties.length
        );
    }
  }

  body =
    removeTrailingBlankParagraphs(body);

  const generatedContent =
    buildPriceDeclarationXml(data);

  const newBody =
    `${body}${generatedContent}${sectionProperties}`;

  xml = xml.replace(
    /<w:body(?:\s[^>]*)?>[\s\S]*?<\/w:body>/,
    `<w:body>${newBody}</w:body>`
  );

  zip.file(
    "word/document.xml",
    xml
  );

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
        formData.get(
          "accuracyAccepted"
        ) || ""
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
            "Please confirm the accuracy of the pricing information before generating the document.",
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

    const data: PriceData = {
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

      offeredPrice:
        get("offeredPrice"),

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
      Array<keyof PriceData> = [
        "companyName",
        "companyAddress",
        "bidNumber",
        "tenderTitle",
        "departmentName",
        "productName",
        "offeredPrice",
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
        typeof uploaded.arrayBuffer !==
          "function"
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

      const file =
        uploaded as File;

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
      `Price-Declaration-${cleanFilename(
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
      "Price Declaration generation error:",
      error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate Price Declaration.",
      },
      {
        status: 500,
      }
    );
  }
}
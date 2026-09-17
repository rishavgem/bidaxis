import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";

import PizZip from "pizzip";

export const runtime = "nodejs";

const DOCX_MIME =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

type MatrixData = {
  companyName: string;
  companyAddress: string;
  bidNumber: string;
  departmentName: string;

  level1Name: string;
  level1Designation: string;
  level1Phone: string;
  level1Email: string;

  level2Name: string;
  level2Designation: string;
  level2Phone: string;
  level2Email: string;

  level3Name: string;
  level3Designation: string;
  level3Phone: string;
  level3Email: string;

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

  if (!year || !month || !day) return value;

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
        : '<w:jc w:val="left"/>'
    }
    <w:spacing w:after="${options.after ?? 100}"/>
  </w:pPr>

  <w:r>
    <w:rPr>
      ${options.bold ? "<w:b/>" : ""}
      ${options.underline ? '<w:u w:val="single"/>' : ""}
      <w:sz w:val="21"/>
      <w:szCs w:val="21"/>
    </w:rPr>

    <w:t xml:space="preserve">${xmlEscape(text)}</w:t>
  </w:r>
</w:p>`;
}

function xmlCell(
  text: string,
  bold = false
) {
  return `
<w:tc>
  <w:tcPr>
    <w:tcW w:w="0" w:type="auto"/>
    <w:tcMar>
      <w:top w:w="90" w:type="dxa"/>
      <w:left w:w="90" w:type="dxa"/>
      <w:bottom w:w="90" w:type="dxa"/>
      <w:right w:w="90" w:type="dxa"/>
    </w:tcMar>
  </w:tcPr>

  <w:p>
    <w:pPr>
      <w:spacing w:after="0"/>
    </w:pPr>

    <w:r>
      <w:rPr>
        ${bold ? "<w:b/>" : ""}
        <w:sz w:val="19"/>
        <w:szCs w:val="19"/>
      </w:rPr>

      <w:t xml:space="preserve">${xmlEscape(text)}</w:t>
    </w:r>
  </w:p>
</w:tc>`;
}

function xmlRow(values: string[], bold = false) {
  return `
<w:tr>
  ${values.map((value) => xmlCell(value, bold)).join("")}
</w:tr>`;
}

function buildMatrixXml(data: MatrixData) {
  const date = formatDate(data.date);

  return `
<!-- BIDAXIS-ESCALATION-START -->

<w:p>
  <w:pPr>
    <w:spacing w:after="0"/>
  </w:pPr>
</w:p>

${xmlParagraph("ESCALATION MATRIX", {
  bold: true,
  center: true,
  underline: true,
  after: 240,
})}

${xmlParagraph(`Company: ${data.companyName}`, {
  bold: true,
  after: 60,
})}

${xmlParagraph(`Bid No.: ${data.bidNumber}`, {
  after: 60,
})}

${xmlParagraph(`Department / Buyer: ${data.departmentName}`, {
  after: 220,
})}

<w:tbl>
  <w:tblPr>
    <w:tblW w:w="10000" w:type="pct"/>

    <w:tblBorders>
      <w:top w:val="single" w:sz="6" w:color="B8C5D2"/>
      <w:left w:val="single" w:sz="6" w:color="B8C5D2"/>
      <w:bottom w:val="single" w:sz="6" w:color="B8C5D2"/>
      <w:right w:val="single" w:sz="6" w:color="B8C5D2"/>
      <w:insideH w:val="single" w:sz="6" w:color="D6DEE6"/>
      <w:insideV w:val="single" w:sz="6" w:color="D6DEE6"/>
    </w:tblBorders>
  </w:tblPr>

  ${xmlRow(
    [
      "Level",
      "Contact Person",
      "Designation",
      "Phone",
      "Email",
    ],
    true
  )}

  ${xmlRow([
    "Level 1",
    data.level1Name,
    data.level1Designation,
    data.level1Phone,
    data.level1Email,
  ])}

  ${xmlRow([
    "Level 2",
    data.level2Name,
    data.level2Designation,
    data.level2Phone,
    data.level2Email,
  ])}

  ${xmlRow([
    "Level 3",
    data.level3Name,
    data.level3Designation,
    data.level3Phone,
    data.level3Email,
  ])}
</w:tbl>

${xmlParagraph(
  "The above contacts shall be approached sequentially for matters requiring escalation in connection with the referenced bid / contract.",
  {
    after: 260,
  }
)}

${xmlParagraph(`For ${data.companyName}`, {
  bold: true,
  after: 320,
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

<!-- BIDAXIS-ESCALATION-END -->
`;
}

function removePreviousMatrix(xml: string) {
  return xml.replace(
    /<!-- BIDAXIS-ESCALATION-START -->[\s\S]*?<!-- BIDAXIS-ESCALATION-END -->/g,
    ""
  );
}

function removeExplicitPageBreaks(xml: string) {
  return xml
    .replace(
      /<w:br\b[^>]*w:type=["']page["'][^>]*\/>/gi,
      ""
    )
    .replace(/<w:lastRenderedPageBreak\b[^>]*\/>/gi, "")
    .replace(/<w:pageBreakBefore\b[^>]*\/>/gi, "");
}

function removeTrailingBlankParagraphs(xml: string) {
  let output = xml;

  for (let index = 0; index < 30; index += 1) {
    const updated = output.replace(
      /<w:p(?:\s[^>]*)?>\s*(?:<w:pPr>[\s\S]*?<\/w:pPr>)?\s*(?:<w:r(?:\s[^>]*)?>\s*(?:<w:rPr>[\s\S]*?<\/w:rPr>)?\s*(?:<w:t(?:\s[^>]*)?>\s*<\/w:t>)?\s*<\/w:r>)?\s*<\/w:p>\s*$/i,
      ""
    );

    if (updated === output) break;

    output = updated;
  }

  return output;
}

function tableCell(
  text: string,
  bold = false
) {
  return new TableCell({
    margins: {
      top: 90,
      bottom: 90,
      left: 90,
      right: 90,
    },

    children: [
      new Paragraph({
        spacing: {
          after: 0,
        },

        children: [
          new TextRun({
            text,
            bold,
            size: 19,
          }),
        ],
      }),
    ],
  });
}

function tableRow(
  values: string[],
  bold = false
) {
  return new TableRow({
    children: values.map((value) =>
      tableCell(value, bold)
    ),
  });
}

async function createBidAxisDocument(
  data: MatrixData
) {
  const date = formatDate(data.date);

  const borders = {
    top: {
      style: BorderStyle.SINGLE,
      size: 6,
      color: "B8C5D2",
    },
    bottom: {
      style: BorderStyle.SINGLE,
      size: 6,
      color: "B8C5D2",
    },
    left: {
      style: BorderStyle.SINGLE,
      size: 6,
      color: "B8C5D2",
    },
    right: {
      style: BorderStyle.SINGLE,
      size: 6,
      color: "B8C5D2",
    },
    insideHorizontal: {
      style: BorderStyle.SINGLE,
      size: 4,
      color: "D6DEE6",
    },
    insideVertical: {
      style: BorderStyle.SINGLE,
      size: 4,
      color: "D6DEE6",
    },
  };

  const matrix = new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },

    borders,

    rows: [
      tableRow(
        [
          "Level",
          "Contact Person",
          "Designation",
          "Phone",
          "Email",
        ],
        true
      ),

      tableRow([
        "Level 1",
        data.level1Name,
        data.level1Designation,
        data.level1Phone,
        data.level1Email,
      ]),

      tableRow([
        "Level 2",
        data.level2Name,
        data.level2Designation,
        data.level2Phone,
        data.level2Email,
      ]),

      tableRow([
        "Level 3",
        data.level3Name,
        data.level3Designation,
        data.level3Phone,
        data.level3Email,
      ]),
    ],
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 650,
              right: 650,
              bottom: 650,
              left: 650,
            },
          },
        },

        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 80,
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
                text: "ESCALATION MATRIX",
                bold: true,
                underline: {},
                size: 26,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 60,
            },

            children: [
              new TextRun({
                text: "Company: ",
                bold: true,
              }),

              new TextRun({
                text: data.companyName,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 60,
            },

            children: [
              new TextRun({
                text: "Company Address: ",
                bold: true,
              }),

              new TextRun({
                text: data.companyAddress,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 60,
            },

            children: [
              new TextRun({
                text: "Bid No.: ",
                bold: true,
              }),

              new TextRun({
                text: data.bidNumber,
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 220,
            },

            children: [
              new TextRun({
                text: "Department / Buyer: ",
                bold: true,
              }),

              new TextRun({
                text: data.departmentName,
              }),
            ],
          }),

          matrix,

          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
              before: 220,
              after: 280,
              line: 260,
            },

            children: [
              new TextRun({
                text:
                  "The above contacts shall be approached sequentially " +
                  "for matters requiring escalation in connection with " +
                  "the referenced bid / contract.",
              }),
            ],
          }),

          new Paragraph({
            spacing: {
              after: 330,
            },

            children: [
              new TextRun({
                text: `For ${data.companyName}`,
                bold: true,
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
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: `Date: ${date}`,
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
  data: MatrixData
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

  xml = removePreviousMatrix(xml);
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

  body =
    removeTrailingBlankParagraphs(body);

  const generated =
    buildMatrixXml(data);

  const newBody =
    `${body}${generated}${sectionProperties}`;

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

    const get = (name: string) =>
      String(
        formData.get(name) || ""
      ).trim();

    const data: MatrixData = {
      companyName: get("companyName"),
      companyAddress: get("companyAddress"),
      bidNumber: get("bidNumber"),
      departmentName: get("departmentName"),

      level1Name: get("level1Name"),
      level1Designation: get("level1Designation"),
      level1Phone: get("level1Phone"),
      level1Email: get("level1Email"),

      level2Name: get("level2Name"),
      level2Designation: get("level2Designation"),
      level2Phone: get("level2Phone"),
      level2Email: get("level2Email"),

      level3Name: get("level3Name"),
      level3Designation: get("level3Designation"),
      level3Phone: get("level3Phone"),
      level3Email: get("level3Email"),

      signatoryName: get("signatoryName"),
      designation: get("designation"),
      place: get("place"),
      date: get("date"),
    };

    const required: Array<keyof MatrixData> = [
      "companyName",
      "companyAddress",
      "bidNumber",
      "departmentName",

      "level1Name",
      "level1Designation",
      "level1Phone",
      "level1Email",

      "level2Name",
      "level2Designation",
      "level2Phone",
      "level2Email",

      "level3Name",
      "level3Designation",
      "level3Phone",
      "level3Email",

      "signatoryName",
      "designation",
      "place",
      "date",
    ];

    for (const field of required) {
      if (!data[field]) {
        return Response.json(
          {
            error: `Missing required field: ${field}`,
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
      `Escalation-Matrix-${cleanFilename(
        data.companyName
      )}.docx`;

    const bytes =
      new Uint8Array(buffer);

    return new Response(
      bytes,
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
      "Escalation Matrix generation error:",
      error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate Escalation Matrix.",
      },
      {
        status: 500,
      }
    );
  }
}
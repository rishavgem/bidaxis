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

type ATCData = {
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

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

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
      ${options.underline ? '<w:u w:val="single"/>' : ""}
      <w:sz w:val="22"/>
      <w:szCs w:val="22"/>
    </w:rPr>
    <w:t xml:space="preserve">${xmlEscape(text)}</w:t>
  </w:r>
</w:p>`;
}

function buildATCXml(data: ATCData) {
  const date = formatDate(data.date);

  return `
<!-- BIDAXIS-ATC-START -->

<w:p>
  <w:pPr>
    <w:spacing w:before="0" w:after="0"/>
  </w:pPr>
</w:p>

${xmlParagraph("ACCEPTANCE OF ADDITIONAL TERMS & CONDITIONS", {
  bold: true,
  center: true,
  underline: true,
  after: 260,
})}

${xmlParagraph("To,", { after: 40 })}

${xmlParagraph(data.departmentName, {
  bold: true,
  after: 180,
})}

${xmlParagraph(
  `Subject: Acceptance of Additional Terms and Conditions against Bid No. ${data.bidNumber}`,
  {
    bold: true,
    after: 220,
  }
)}

${xmlParagraph("Dear Sir/Madam,", {
  after: 180,
})}

${xmlParagraph(
  `We, ${data.companyName}, having our registered / office address at ${data.companyAddress}, hereby confirm that we have carefully read and understood the Additional Terms and Conditions (ATC), specifications and other applicable conditions forming part of Bid No. ${data.bidNumber} for "${data.tenderTitle}".`,
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We hereby accept and agree to comply with the applicable Additional Terms and Conditions and other requirements of the above-mentioned bid, subject to any deviation expressly disclosed by us and permitted under the bid documents.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "We further undertake that, in the event of award, we shall perform our obligations in accordance with the accepted bid terms, applicable ATC and the resulting contract / purchase order.",
  {
    after: 180,
  }
)}

${xmlParagraph(
  "This declaration is submitted for the purpose of participation in the above-mentioned bid and the information furnished herein is true and correct to the best of our knowledge and belief.",
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

<!-- BIDAXIS-ATC-END -->
`;
}

function removePreviousATC(xml: string) {
  return xml.replace(
    /<!-- BIDAXIS-ATC-START -->[\s\S]*?<!-- BIDAXIS-ATC-END -->/g,
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

  for (let i = 0; i < 30; i += 1) {
    const updated = output.replace(
      /<w:p(?:\s[^>]*)?>\s*(?:<w:pPr>[\s\S]*?<\/w:pPr>)?\s*(?:<w:r(?:\s[^>]*)?>\s*(?:<w:rPr>[\s\S]*?<\/w:rPr>)?\s*(?:<w:t(?:\s[^>]*)?>\s*<\/w:t>)?\s*<\/w:r>)?\s*<\/w:p>\s*$/i,
      ""
    );

    if (updated === output) break;

    output = updated;
  }

  return output;
}

async function createBidAxisDocument(data: ATCData) {
  const date = formatDate(data.date);

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 900,
              bottom: 720,
              left: 900,
            },
          },
        },

        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
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
            spacing: { after: 320 },
            children: [
              new TextRun({
                text: "ACCEPTANCE OF ADDITIONAL TERMS & CONDITIONS",
                bold: true,
                underline: {},
                size: 26,
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 60 },
            children: [new TextRun({ text: "To," })],
          }),

          new Paragraph({
            spacing: { after: 220 },
            children: [
              new TextRun({
                text: data.departmentName,
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 240 },
            children: [
              new TextRun({
                text:
                  `Subject: Acceptance of Additional Terms and ` +
                  `Conditions against Bid No. ${data.bidNumber}`,
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 180 },
            children: [
              new TextRun({
                text: "Dear Sir/Madam,",
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
              after: 180,
              line: 276,
            },
            children: [
              new TextRun({
                text:
                  `We, ${data.companyName}, having our registered / office ` +
                  `address at ${data.companyAddress}, hereby confirm that we ` +
                  `have carefully read and understood the Additional Terms ` +
                  `and Conditions (ATC), specifications and other applicable ` +
                  `conditions forming part of Bid No. ${data.bidNumber} for ` +
                  `"${data.tenderTitle}".`,
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
              after: 180,
              line: 276,
            },
            children: [
              new TextRun({
                text:
                  "We hereby accept and agree to comply with the applicable " +
                  "Additional Terms and Conditions and other requirements of " +
                  "the above-mentioned bid, subject to any deviation expressly " +
                  "disclosed by us and permitted under the bid documents.",
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
              after: 180,
              line: 276,
            },
            children: [
              new TextRun({
                text:
                  "We further undertake that, in the event of award, we shall " +
                  "perform our obligations in accordance with the accepted bid " +
                  "terms, applicable ATC and the resulting contract / purchase order.",
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            spacing: {
              after: 320,
              line: 276,
            },
            children: [
              new TextRun({
                text:
                  "This declaration is submitted for the purpose of participation " +
                  "in the above-mentioned bid and the information furnished herein " +
                  "is true and correct to the best of our knowledge and belief.",
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 360 },
            children: [
              new TextRun({
                text: `For ${data.companyName}`,
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 20 },
            children: [
              new TextRun({
                text: data.signatoryName,
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: data.designation,
              }),
            ],
          }),

          new Paragraph({
            spacing: { after: 20 },
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
  data: ATCData
) {
  const input = Buffer.from(await letterhead.arrayBuffer());

  let zip: PizZip;

  try {
    zip = new PizZip(input);
  } catch {
    throw new Error(
      "Unable to open the uploaded Word letterhead. Please upload a valid .docx file."
    );
  }

  const documentFile = zip.file("word/document.xml");

  if (!documentFile) {
    throw new Error(
      "Invalid Word letterhead. The Word document body could not be found."
    );
  }

  let xml = documentFile.asText();

  xml = removePreviousATC(xml);
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
   * Keep the final section properties because they can contain
   * header/footer relationships, margins and page-size settings.
   */
  const sectionMatches = [
    ...body.matchAll(/<w:sectPr\b[\s\S]*?<\/w:sectPr>/g),
  ];

  const sectionProperties =
    sectionMatches.length > 0
      ? sectionMatches[sectionMatches.length - 1][0]
      : "";

  if (sectionProperties) {
    const sectionIndex = body.lastIndexOf(sectionProperties);

    if (sectionIndex >= 0) {
      body =
        body.slice(0, sectionIndex) +
        body.slice(sectionIndex + sectionProperties.length);
    }
  }

  body = removeTrailingBlankParagraphs(body);

  const generatedContent = buildATCXml(data);

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

    const mode = String(formData.get("mode") || "bidaxis");

    if (mode !== "bidaxis" && mode !== "letterhead") {
      return Response.json(
        { error: "Invalid document mode." },
        { status: 400 }
      );
    }

    const data: ATCData = {
      companyName: String(
        formData.get("companyName") || ""
      ).trim(),

      companyAddress: String(
        formData.get("companyAddress") || ""
      ).trim(),

      bidNumber: String(
        formData.get("bidNumber") || ""
      ).trim(),

      tenderTitle: String(
        formData.get("tenderTitle") || ""
      ).trim(),

      departmentName: String(
        formData.get("departmentName") || ""
      ).trim(),

      signatoryName: String(
        formData.get("signatoryName") || ""
      ).trim(),

      designation: String(
        formData.get("designation") || ""
      ).trim(),

      place: String(
        formData.get("place") || ""
      ).trim(),

      date: String(
        formData.get("date") || ""
      ).trim(),
    };

    const required: Array<keyof ATCData> = [
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
      const file = formData.get("letterhead");

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

      if (!file.name.toLowerCase().endsWith(".docx")) {
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

      if (file.size > 15 * 1024 * 1024) {
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

      buffer = await createLetterheadDocument(file, data);
    } else {
      buffer = await createBidAxisDocument(data);
    }

    const filename =
      `ATC-Certificate-${cleanFilename(data.companyName)}.docx`;

    /*
     * Use Uint8Array rather than Buffer directly in Response.
     * This avoids the Next.js BodyInit/Buffer TypeScript error.
     */
    const bytes = new Uint8Array(buffer);

    return new Response(bytes, {
      status: 200,
      headers: {
        "Content-Type": DOCX_MIME,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("ATC certificate generation error:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate ATC Certificate.",
      },
      {
        status: 500,
      }
    );
  }
}
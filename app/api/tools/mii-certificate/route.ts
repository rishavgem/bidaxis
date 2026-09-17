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

/* ==========================================================
   HELPERS
========================================================== */

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
      .replace(/^-+|-+$/g, "") ||
    "BidAxis"
  );
}

function formatDate(value: string) {
  if (!value) {
    return "";
  }

  const parts = value.split("-");

  if (parts.length !== 3) {
    return value;
  }

  const [year, month, day] = parts;

  return `${day}/${month}/${year}`;
}

/* ==========================================================
   XML PARAGRAPH
========================================================== */

function textParagraph(
  text: string,
  options?: {
    bold?: boolean;
    center?: boolean;
    underline?: boolean;
    before?: number;
    after?: number;
  }
) {
  const safe = xmlEscape(text);

  const alignment =
    options?.center
      ? '<w:jc w:val="center"/>'
      : '<w:jc w:val="both"/>';

  const bold =
    options?.bold
      ? "<w:b/>"
      : "";

  const underline =
    options?.underline
      ? '<w:u w:val="single"/>'
      : "";

  return `
<w:p>
  <w:pPr>
    ${alignment}

    <w:spacing
      w:before="${options?.before ?? 0}"
      w:after="${options?.after ?? 120}"
      w:line="276"
      w:lineRule="auto"
    />
  </w:pPr>

  <w:r>
    <w:rPr>
      ${bold}
      ${underline}
      <w:sz w:val="22"/>
      <w:szCs w:val="22"/>
    </w:rPr>

    <w:t xml:space="preserve">${safe}</w:t>
  </w:r>
</w:p>`;
}

/* ==========================================================
   MII XML CONTENT
========================================================== */

function buildCertificateXml(
  data: Record<string, string>
) {
  const date =
    formatDate(data.date);

  return `
<!-- BIDAXIS-MII-START -->

<w:p>
  <w:pPr>
    <w:spacing
      w:before="0"
      w:after="0"
    />
  </w:pPr>
</w:p>

${textParagraph(
  "MAKE IN INDIA / LOCAL CONTENT DECLARATION",
  {
    bold: true,
    center: true,
    underline: true,
    after: 260,
  }
)}

${textParagraph(
  "To,",
  {
    after: 40,
  }
)}

${textParagraph(
  data.departmentName,
  {
    bold: true,
    after: 180,
  }
)}

${textParagraph(
  `Subject: Declaration regarding Local Content / Make in India compliance against Bid No. ${data.bidNumber}`,
  {
    bold: true,
    after: 220,
  }
)}

${textParagraph(
  "Dear Sir/Madam,",
  {
    after: 180,
  }
)}

${textParagraph(
  `We, ${data.companyName}, having our registered / office address at ${data.companyAddress}, hereby declare that the product offered by us against Bid No. ${data.bidNumber}, namely ${data.productName}, under the brand / make ${data.brandName}, contains ${data.localContent}% local content.`,
  {
    after: 180,
  }
)}

${textParagraph(
  `The location at which the local value addition is carried out is ${data.manufacturingLocation}.`,
  {
    after: 180,
  }
)}

${textParagraph(
  "We certify that the information furnished above is true and correct to the best of our knowledge and belief and is being submitted for the purpose of the above-mentioned bid.",
  {
    after: 300,
  }
)}

${textParagraph(
  `For ${data.companyName}`,
  {
    bold: true,
    after: 360,
  }
)}

${textParagraph(
  data.signatoryName,
  {
    bold: true,
    after: 20,
  }
)}

${textParagraph(
  data.designation,
  {
    after: 100,
  }
)}

${textParagraph(
  `Place: ${data.place}`,
  {
    after: 20,
  }
)}

${textParagraph(
  `Date: ${date}`,
  {
    after: 0,
  }
)}

<!-- BIDAXIS-MII-END -->
`;
}

/* ==========================================================
   REMOVE PREVIOUS GENERATED MII CONTENT
========================================================== */

function removePreviousCertificate(
  xml: string
) {
  return xml.replace(
    /<!-- BIDAXIS-MII-START -->[\s\S]*?<!-- BIDAXIS-MII-END -->/g,
    ""
  );
}

/* ==========================================================
   REMOVE PAGE BREAKS
========================================================== */

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

/* ==========================================================
   REMOVE TRAILING EMPTY PARAGRAPHS
========================================================== */

function removeTrailingBlankParagraphs(
  xml: string
) {
  let output = xml;

  for (
    let index = 0;
    index < 30;
    index += 1
  ) {
    const updated =
      output.replace(
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

/* ==========================================================
   BIDAXIS TEMPLATE
========================================================== */

async function createBidAxisDocument(
  data: Record<string, string>
) {
  const date =
    formatDate(data.date);

  const document =
    new Document({
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
            /* BRAND */

            new Paragraph({
              alignment:
                AlignmentType.CENTER,

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
              alignment:
                AlignmentType.CENTER,

              spacing: {
                after: 320,
              },

              children: [
                new TextRun({
                  text:
                    "MAKE IN INDIA / LOCAL CONTENT DECLARATION",

                  bold: true,

                  underline: {},

                  size: 26,
                }),
              ],
            }),

            /* TO */

            new Paragraph({
              spacing: {
                after: 60,
              },

              children: [
                new TextRun({
                  text: "To,",
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
                    data.departmentName,

                  bold: true,
                }),
              ],
            }),

            /* SUBJECT */

            new Paragraph({
              spacing: {
                after: 240,
              },

              children: [
                new TextRun({
                  text:
                    `Subject: Declaration regarding Local Content / ` +
                    `Make in India compliance against Bid No. ${data.bidNumber}`,

                  bold: true,
                }),
              ],
            }),

            /* GREETING */

            new Paragraph({
              spacing: {
                after: 180,
              },

              children: [
                new TextRun({
                  text:
                    "Dear Sir/Madam,",
                }),
              ],
            }),

            /* PARA 1 */

            new Paragraph({
              alignment:
                AlignmentType.JUSTIFIED,

              spacing: {
                after: 180,
                line: 276,
              },

              children: [
                new TextRun({
                  text:
                    `We, ${data.companyName}, having our registered / office ` +
                    `address at ${data.companyAddress}, hereby declare that the ` +
                    `product offered by us against Bid No. ${data.bidNumber}, ` +
                    `namely ${data.productName}, under the brand / make ` +
                    `${data.brandName}, contains ${data.localContent}% local content.`,
                }),
              ],
            }),

            /* PARA 2 */

            new Paragraph({
              alignment:
                AlignmentType.JUSTIFIED,

              spacing: {
                after: 180,
                line: 276,
              },

              children: [
                new TextRun({
                  text:
                    `The location at which the local value addition is carried ` +
                    `out is ${data.manufacturingLocation}.`,
                }),
              ],
            }),

            /* PARA 3 */

            new Paragraph({
              alignment:
                AlignmentType.JUSTIFIED,

              spacing: {
                after: 320,
                line: 276,
              },

              children: [
                new TextRun({
                  text:
                    "We certify that the information furnished above is true " +
                    "and correct to the best of our knowledge and belief and " +
                    "is being submitted for the purpose of the above-mentioned bid.",
                }),
              ],
            }),

            /* SIGNATURE */

            new Paragraph({
              spacing: {
                after: 360,
              },

              children: [
                new TextRun({
                  text:
                    `For ${data.companyName}`,

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
                  text:
                    data.signatoryName,

                  bold: true,
                }),
              ],
            }),

            new Paragraph({
              spacing: {
                after: 100,
              },

              children: [
                new TextRun({
                  text:
                    data.designation,
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
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text:
                    `Date: ${date}`,
                }),
              ],
            }),
          ],
        },
      ],
    });

  return Packer.toBuffer(document);
}

/* ==========================================================
   COMPANY LETTERHEAD
========================================================== */

async function createLetterheadDocument(
  letterhead: File,
  data: Record<string, string>
) {
  const input =
    Buffer.from(
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
    zip.file(
      "word/document.xml"
    );

  if (!documentFile) {
    throw new Error(
      "Invalid Word letterhead. The document body could not be found."
    );
  }

  let xml =
    documentFile.asText();

  /*
   * Remove content generated previously
   * by this MII generator.
   */

  xml =
    removePreviousCertificate(
      xml
    );

  /*
   * Remove explicit page breaks that
   * can force generated content onto
   * another page.
   */

  xml =
    removeExplicitPageBreaks(
      xml
    );

  /*
   * Locate the Word document body.
   */

  const bodyMatch =
    xml.match(
      /<w:body(?:\s[^>]*)?>([\s\S]*?)<\/w:body>/
    );

  if (!bodyMatch) {
    throw new Error(
      "Unable to read the uploaded Word document body."
    );
  }

  let body =
    bodyMatch[1];

  /*
   * Preserve final section properties.
   * These may contain:
   *
   * - margins
   * - page size
   * - header references
   * - footer references
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

  /*
   * Temporarily remove the final sectPr.
   */

  if (sectionProperties) {
    const sectionIndex =
      body.lastIndexOf(
        sectionProperties
      );

    if (sectionIndex >= 0) {
      body =
        body.slice(
          0,
          sectionIndex
        ) +
        body.slice(
          sectionIndex +
            sectionProperties.length
        );
    }
  }

  /*
   * Clean empty paragraphs at the
   * end of the uploaded letterhead.
   *
   * This allows the generated MII
   * content to begin close to the
   * existing company details.
   */

  body =
    removeTrailingBlankParagraphs(
      body
    );

  /*
   * Generate MII certificate XML.
   */

  const certificate =
    buildCertificateXml(
      data
    );

  /*
   * Existing letterhead
   * +
   * generated MII content
   * +
   * original section settings.
   */

  const newBody =
    `${body}` +
    `${certificate}` +
    `${sectionProperties}`;

  /*
   * Replace Word body.
   */

  xml = xml.replace(
    /<w:body(?:\s[^>]*)?>[\s\S]*?<\/w:body>/,
    `<w:body>${newBody}</w:body>`
  );

  /*
   * Put updated XML back
   * inside the .docx archive.
   */

  zip.file(
    "word/document.xml",
    xml
  );

  return zip.generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
}

/* ==========================================================
   API
========================================================== */

export async function POST(
  request: Request
) {
  try {
    const formData =
      await request.formData();

    /* MODE */

    const mode =
      String(
        formData.get("mode") ||
          "bidaxis"
      );

    if (
      mode !== "bidaxis" &&
      mode !== "letterhead"
    ) {
      return Response.json(
        {
          error:
            "Invalid document mode.",
        },
        {
          status: 400,
        }
      );
    }

    /* FORM DATA */

    const data: Record<
      string,
      string
    > = {
      companyName:
        String(
          formData.get(
            "companyName"
          ) || ""
        ).trim(),

      companyAddress:
        String(
          formData.get(
            "companyAddress"
          ) || ""
        ).trim(),

      bidNumber:
        String(
          formData.get(
            "bidNumber"
          ) || ""
        ).trim(),

      productName:
        String(
          formData.get(
            "productName"
          ) || ""
        ).trim(),

      brandName:
        String(
          formData.get(
            "brandName"
          ) || ""
        ).trim(),

      localContent:
        String(
          formData.get(
            "localContent"
          ) || ""
        ).trim(),

      manufacturingLocation:
        String(
          formData.get(
            "manufacturingLocation"
          ) || ""
        ).trim(),

      departmentName:
        String(
          formData.get(
            "departmentName"
          ) || ""
        ).trim(),

      signatoryName:
        String(
          formData.get(
            "signatoryName"
          ) || ""
        ).trim(),

      designation:
        String(
          formData.get(
            "designation"
          ) || ""
        ).trim(),

      place:
        String(
          formData.get(
            "place"
          ) || ""
        ).trim(),

      date:
        String(
          formData.get(
            "date"
          ) || ""
        ).trim(),
    };

    /* VALIDATION */

    const required = [
      "companyName",
      "companyAddress",
      "bidNumber",
      "productName",
      "brandName",
      "localContent",
      "manufacturingLocation",
      "departmentName",
      "signatoryName",
      "designation",
      "place",
      "date",
    ];

    for (
      const field of required
    ) {
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

    /* LOCAL CONTENT */

    const localContent =
      Number(
        data.localContent
      );

    if (
      !Number.isFinite(
        localContent
      ) ||
      localContent < 0 ||
      localContent > 100
    ) {
      return Response.json(
        {
          error:
            "Local content percentage must be a number between 0 and 100.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Normalize percentage.
     */

    data.localContent =
      String(localContent);

    /* GENERATE */

    let buffer: Buffer;

    if (
      mode === "letterhead"
    ) {
      const file =
        formData.get(
          "letterhead"
        );

      if (
        !(file instanceof File)
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

      /*
       * Basic size protection:
       * 15 MB maximum.
       */

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

    /* RESPONSE */

    const filename =
      `MII-Certificate-${cleanFilename(
        data.companyName
      )}.docx`;

    /*
     * Next.js Response accepts
     * Uint8Array reliably.
     *
     * This avoids the Buffer type
     * issue you encountered earlier.
     */

    const bytes =
      new Uint8Array(
        buffer
      );

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
      "MII certificate generation error:",
      error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate MII certificate.",
      },
      {
        status: 500,
      }
    );
  }
}
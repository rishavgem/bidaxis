import {
  AlignmentType,
  Document,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import PizZip from "pizzip";

export const runtime = "nodejs";

const MIME =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

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

  return `
<w:p>
  <w:pPr>
    ${
      options?.center
        ? '<w:jc w:val="center"/>'
        : '<w:jc w:val="both"/>'
    }
    <w:spacing
      w:before="${options?.before ?? 0}"
      w:after="${options?.after ?? 120}"
      w:line="276"
      w:lineRule="auto"
    />
  </w:pPr>
  <w:r>
    <w:rPr>
      ${options?.bold ? "<w:b/>" : ""}
      ${options?.underline ? '<w:u w:val="single"/>' : ""}
      <w:sz w:val="22"/>
      <w:szCs w:val="22"/>
    </w:rPr>
    <w:t xml:space="preserve">${safe}</w:t>
  </w:r>
</w:p>`;
}

function buildCertificateXml(data: Record<string, string>) {
  const {
    companyName,
    companyAddress,
    bidNumber,
    tenderTitle,
    departmentName,
    signatoryName,
    designation,
    place,
  } = data;

  const date = formatDate(data.date);

  const tenderReference = tenderTitle
    ? ` for "${tenderTitle}"`
    : "";

  return `
<!-- BIDAXIS-NON-BLACKLIST-START -->

<w:p>
  <w:pPr>
    <w:spacing w:before="0" w:after="0"/>
  </w:pPr>
</w:p>

${textParagraph("NON-BLACKLIST CERTIFICATE", {
  bold: true,
  center: true,
  underline: true,
  after: 260,
})}

${textParagraph("To,", { after: 40 })}
${textParagraph(departmentName, {
  bold: true,
  after: 180,
})}

${textParagraph(
  `Subject: Non-Blacklist Declaration against Bid No. ${bidNumber}${tenderReference}`,
  {
    bold: true,
    after: 220,
  }
)}

${textParagraph("Dear Sir/Madam,", {
  after: 180,
})}

${textParagraph(
  `We, ${companyName}, having our registered / office address at ${companyAddress}, hereby declare that our company has not been blacklisted, debarred, banned or otherwise declared ineligible by any Central Government Department, State Government Department, Public Sector Undertaking, Autonomous Body or other government organization, as applicable to the eligibility requirements of the above-mentioned bid.`,
  {
    after: 180,
  }
)}

${textParagraph(
  `We further declare that there is no subsisting order of blacklisting or debarment against ${companyName} that would render us ineligible to participate in the above bid.`,
  {
    after: 180,
  }
)}

${textParagraph(
  "We confirm that the information furnished in this declaration is true and correct to the best of our knowledge and belief. We understand that any false declaration or material misrepresentation may be dealt with in accordance with the applicable terms and conditions of the bid.",
  {
    after: 300,
  }
)}

${textParagraph(`For ${companyName}`, {
  bold: true,
  after: 360,
})}

${textParagraph(signatoryName, {
  bold: true,
  after: 20,
})}

${textParagraph(designation, {
  after: 100,
})}

${textParagraph(`Place: ${place}`, {
  after: 20,
})}

${textParagraph(`Date: ${date}`, {
  after: 0,
})}

<!-- BIDAXIS-NON-BLACKLIST-END -->
`;
}

function removePreviousCertificate(xml: string) {
  return xml.replace(
    /<!-- BIDAXIS-NON-BLACKLIST-START -->[\s\S]*?<!-- BIDAXIS-NON-BLACKLIST-END -->/g,
    ""
  );
}

function removeExplicitPageBreaks(xml: string) {
  return xml
    .replace(/<w:br\b[^>]*w:type=["']page["'][^>]*\/>/gi, "")
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

  for (let i = 0; i < 20; i += 1) {
    const updated = output.replace(
      /<w:p(?:\s[^>]*)?>\s*(?:<w:pPr>[\s\S]*?<\/w:pPr>)?\s*(?:<w:r(?:\s[^>]*)?>\s*(?:<w:rPr>[\s\S]*?<\/w:rPr>)?\s*(?:<w:t(?:\s[^>]*)?>\s*<\/w:t>)?\s*<\/w:r>)?\s*<\/w:p>\s*$/i,
      ""
    );

    if (updated === output) break;

    output = updated;
  }

  return output;
}

async function createBidAxisDocument(
  data: Record<string, string>
) {
  const tenderReference = data.tenderTitle
    ? ` for "${data.tenderTitle}"`
    : "";

  const date = formatDate(data.date);

  const body = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 120,
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
        after: 320,
      },
      children: [
        new TextRun({
          text: "NON-BLACKLIST CERTIFICATE",
          bold: true,
          underline: {},
          size: 26,
        }),
      ],
    }),

    new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun("To,")],
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
          text: `Subject: Non-Blacklist Declaration against Bid No. ${data.bidNumber}${tenderReference}`,
          bold: true,
        }),
      ],
    }),

    new Paragraph({
      spacing: { after: 180 },
      children: [new TextRun("Dear Sir/Madam,")],
    }),

    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: {
        after: 180,
        line: 276,
      },
      children: [
        new TextRun(
          `We, ${data.companyName}, having our registered / office address at ${data.companyAddress}, hereby declare that our company has not been blacklisted, debarred, banned or otherwise declared ineligible by any Central Government Department, State Government Department, Public Sector Undertaking, Autonomous Body or other government organization, as applicable to the eligibility requirements of the above-mentioned bid.`
        ),
      ],
    }),

    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: {
        after: 180,
        line: 276,
      },
      children: [
        new TextRun(
          `We further declare that there is no subsisting order of blacklisting or debarment against ${data.companyName} that would render us ineligible to participate in the above bid.`
        ),
      ],
    }),

    new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: {
        after: 320,
        line: 276,
      },
      children: [
        new TextRun(
          "We confirm that the information furnished in this declaration is true and correct to the best of our knowledge and belief. We understand that any false declaration or material misrepresentation may be dealt with in accordance with the applicable terms and conditions of the bid."
        ),
      ],
    }),

    new Paragraph({
      spacing: { after: 380 },
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
      children: [new TextRun(data.designation)],
    }),

    new Paragraph({
      spacing: { after: 20 },
      children: [new TextRun(`Place: ${data.place}`)],
    }),

    new Paragraph({
      children: [new TextRun(`Date: ${date}`)],
    }),
  ];

  const document = new Document({
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
        children: body,
      },
    ],
  });

  return Packer.toBuffer(document);
}

async function createLetterheadDocument(
  letterhead: File,
  data: Record<string, string>
) {
  const input = Buffer.from(await letterhead.arrayBuffer());

  const zip = new PizZip(input);

  const documentFile = zip.file("word/document.xml");

  if (!documentFile) {
    throw new Error(
      "Invalid Word letterhead. word/document.xml was not found."
    );
  }

  let xml = documentFile.asText();

  xml = removePreviousCertificate(xml);
  xml = removeExplicitPageBreaks(xml);

  const bodyMatch = xml.match(
    /<w:body(?:\s[^>]*)?>([\s\S]*?)<\/w:body>/
  );

  if (!bodyMatch) {
    throw new Error("Unable to read the Word document body.");
  }

  let body = bodyMatch[1];

  const sectPrMatches = [
    ...body.matchAll(/<w:sectPr\b[\s\S]*?<\/w:sectPr>/g),
  ];

  const sectPr =
    sectPrMatches.length > 0
      ? sectPrMatches[sectPrMatches.length - 1][0]
      : "";

  if (sectPr) {
    const lastIndex = body.lastIndexOf(sectPr);

    if (lastIndex >= 0) {
      body =
        body.slice(0, lastIndex) +
        body.slice(lastIndex + sectPr.length);
    }
  }

  body = removeTrailingBlankParagraphs(body);

  const certificate = buildCertificateXml(data);

  const newBody = `${body}${certificate}${sectPr}`;

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

    const data: Record<string, string> = {
      companyName: String(formData.get("companyName") || "").trim(),
      companyAddress: String(
        formData.get("companyAddress") || ""
      ).trim(),
      bidNumber: String(formData.get("bidNumber") || "").trim(),
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
      place: String(formData.get("place") || "").trim(),
      date: String(formData.get("date") || "").trim(),
    };

    const required = [
      "companyName",
      "companyAddress",
      "bidNumber",
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
            error: "Please upload a Word letterhead.",
          },
          {
            status: 400,
          }
        );
      }

      if (!file.name.toLowerCase().endsWith(".docx")) {
        return Response.json(
          {
            error: "Only .docx Word letterheads are supported.",
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

    const bytes = new Uint8Array(buffer);

    const filename = `Non-Blacklist-Certificate-${cleanFilename(
      data.companyName
    )}.docx`;

    return new Response(bytes, {
      status: 200,
      headers: {
        "Content-Type": MIME,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Non-blacklist generator error:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to generate certificate.",
      },
      {
        status: 500,
      }
    );
  }
}
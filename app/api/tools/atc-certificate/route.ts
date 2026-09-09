import { NextRequest, NextResponse } from "next/server";
import PizZip from "pizzip";

export const runtime = "nodejs";

/* =========================================================
   HELPERS
========================================================= */

function getText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function paragraph(
  text = "",
  options?: {
    bold?: boolean;
    center?: boolean;
    fontSize?: number;
    spaceAfter?: number;
  }
) {
  const {
    bold = false,
    center = false,
    fontSize = 22,
    spaceAfter = 120,
  } = options || {};

  const alignment = center
    ? `<w:jc w:val="center"/>`
    : "";

  const boldXml = bold ? "<w:b/>" : "";

  if (!text) {
    return `
      <w:p>
        <w:pPr>
          <w:spacing w:after="${spaceAfter}"/>
        </w:pPr>
      </w:p>
    `;
  }

  return `
    <w:p>
      <w:pPr>
        ${alignment}
        <w:spacing
          w:after="${spaceAfter}"
          w:line="276"
          w:lineRule="auto"
        />
      </w:pPr>

      <w:r>
        <w:rPr>
          ${boldXml}
          <w:sz w:val="${fontSize}"/>
          <w:szCs w:val="${fontSize}"/>
        </w:rPr>

        <w:t xml:space="preserve">${escapeXml(text)}</w:t>
      </w:r>
    </w:p>
  `;
}

/* =========================================================
   API
========================================================= */

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const letterhead = formData.get("letterhead");

    /* =====================================================
       VALIDATE FILE
    ====================================================== */

    if (!(letterhead instanceof File)) {
      return NextResponse.json(
        {
          error: "Please upload a Word letterhead.",
        },
        {
          status: 400,
        }
      );
    }

    if (!letterhead.name.toLowerCase().endsWith(".docx")) {
      return NextResponse.json(
        {
          error: "Only .DOCX Word documents are supported.",
        },
        {
          status: 400,
        }
      );
    }

    if (letterhead.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        {
          error:
            "The uploaded Word document must be smaller than 10 MB.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       GET ATC DATA
    ====================================================== */

    const recipient = getText(
      formData.get("recipient")
    );

    const organization = getText(
      formData.get("organization")
    );

    const organizationAddress = getText(
      formData.get("organizationAddress")
    );

    const tenderNumber = getText(
      formData.get("tenderNumber")
    );

    const companyName = getText(
      formData.get("companyName")
    );

    const companyAddress = getText(
      formData.get("companyAddress")
    );

    const signatoryName = getText(
      formData.get("signatoryName")
    );

    const designation = getText(
      formData.get("designation")
    );

    const place = getText(
      formData.get("place")
    );

    const certificateDate = getText(
      formData.get("certificateDate")
    );

    /* =====================================================
       VALIDATE REQUIRED FIELDS
    ====================================================== */

    if (
      !recipient ||
      !organization ||
      !organizationAddress ||
      !tenderNumber ||
      !companyName ||
      !companyAddress ||
      !signatoryName ||
      !designation
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required ATC certificate details.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       OPEN WORD DOCUMENT
    ====================================================== */

    const arrayBuffer = await letterhead.arrayBuffer();

    let zip: PizZip;

    try {
      zip = new PizZip(arrayBuffer);
    } catch {
      return NextResponse.json(
        {
          error:
            "The uploaded file is not a valid Word .DOCX document.",
        },
        {
          status: 400,
        }
      );
    }

    const documentFile = zip.file(
      "word/document.xml"
    );

    if (!documentFile) {
      return NextResponse.json(
        {
          error:
            "Unable to read the uploaded Word document.",
        },
        {
          status: 400,
        }
      );
    }

    let documentXml = documentFile.asText();

    /* =====================================================
       BUILD ATC CERTIFICATE
    ====================================================== */

    const blankSpace = [
      paragraph("", { spaceAfter: 120 }),
      paragraph("", { spaceAfter: 120 }),
      paragraph("", { spaceAfter: 120 }),
      paragraph("", { spaceAfter: 120 }),
    ].join("");

    const certificateXml = `

      ${blankSpace}

      ${paragraph(
        "ACCEPTANCE OF TERMS AND CONDITIONS",
        {
          bold: true,
          center: true,
          fontSize: 28,
          spaceAfter: 120,
        }
      )}

      ${paragraph(
        "ATC CERTIFICATE",
        {
          bold: true,
          center: true,
          fontSize: 22,
          spaceAfter: 320,
        }
      )}

      ${paragraph(
        `To,`,
        {
          fontSize: 22,
          spaceAfter: 80,
        }
      )}

      ${paragraph(
        recipient,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 80,
        }
      )}

      ${paragraph(
        organization,
        {
          fontSize: 22,
          spaceAfter: 80,
        }
      )}

      ${paragraph(
        organizationAddress,
        {
          fontSize: 22,
          spaceAfter: 260,
        }
      )}

      ${paragraph(
        `Subject: Acceptance of Terms and Conditions for Tender / Bid No. ${tenderNumber}`,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 260,
        }
      )}

      ${paragraph(
        "Dear Sir / Madam,",
        {
          fontSize: 22,
          spaceAfter: 220,
        }
      )}

      ${paragraph(
        `We, ${companyName}, having our registered office at ${companyAddress}, hereby confirm that we have carefully read and understood all the terms and conditions, specifications, requirements and other provisions contained in Tender / Bid No. ${tenderNumber}.`,
        {
          fontSize: 22,
          spaceAfter: 220,
        }
      )}

      ${paragraph(
        "We hereby accept the applicable terms and conditions of the above-mentioned tender and agree to comply with the requirements specified in the tender document, including any corrigenda, amendments or clarifications issued by the buyer or competent authority.",
        {
          fontSize: 22,
          spaceAfter: 220,
        }
      )}

      ${paragraph(
        "We further confirm that the information, declarations and documents submitted by us in connection with the tender are true and correct to the best of our knowledge and belief.",
        {
          fontSize: 22,
          spaceAfter: 220,
        }
      )}

      ${paragraph(
        "This certificate is being issued as confirmation of our acceptance of the applicable tender terms and conditions.",
        {
          fontSize: 22,
          spaceAfter: 380,
        }
      )}

      ${paragraph(
        `Tender / Bid No.: ${tenderNumber}`,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 320,
        }
      )}

      ${paragraph(
        `Place: ${place || "________________"}`,
        {
          fontSize: 22,
          spaceAfter: 120,
        }
      )}

      ${paragraph(
        `Date: ${certificateDate || "________________"}`,
        {
          fontSize: 22,
          spaceAfter: 400,
        }
      )}

      ${paragraph(
        "Authorized Signatory",
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 100,
        }
      )}

      ${paragraph(
        signatoryName,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 80,
        }
      )}

      ${paragraph(
        designation,
        {
          fontSize: 22,
          spaceAfter: 80,
        }
      )}

      ${paragraph(
        companyName,
        {
          fontSize: 22,
          spaceAfter: 100,
        }
      )}
    `;

    /* =====================================================
       INSERT BEFORE SECTION PROPERTIES
    ====================================================== */

    const sectionPropertiesIndex =
      documentXml.lastIndexOf("<w:sectPr");

    if (sectionPropertiesIndex !== -1) {
      documentXml =
        documentXml.slice(
          0,
          sectionPropertiesIndex
        ) +
        certificateXml +
        documentXml.slice(
          sectionPropertiesIndex
        );
    } else {
      const bodyEndIndex =
        documentXml.lastIndexOf("</w:body>");

      if (bodyEndIndex === -1) {
        return NextResponse.json(
          {
            error:
              "Unable to locate the document body in the uploaded Word file.",
          },
          {
            status: 400,
          }
        );
      }

      documentXml =
        documentXml.slice(0, bodyEndIndex) +
        certificateXml +
        documentXml.slice(bodyEndIndex);
    }

    /* =====================================================
       SAVE MODIFIED DOCUMENT
    ====================================================== */

    zip.file(
      "word/document.xml",
      documentXml
    );

    /* =====================================================
       GENERATE DOCX
    ====================================================== */

    const output = zip.generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    /* =====================================================
       SAFE DOWNLOAD NAME
    ====================================================== */

    const safeTenderNumber =
      tenderNumber
        .replace(/[^a-zA-Z0-9-_]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") ||
      "Tender";

    return new NextResponse(output, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        "Content-Disposition":
          `attachment; filename="ATC-Certificate-${safeTenderNumber}.docx"`,

        "Cache-Control":
          "no-store",
      },
    });
  } catch (error) {
    console.error(
      "ATC Word generation error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to generate the ATC Word certificate. Please verify that the uploaded file is a valid .DOCX document.",
      },
      {
        status: 500,
      }
    );
  }
}
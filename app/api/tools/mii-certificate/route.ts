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
       GET CERTIFICATE DATA
    ====================================================== */

    const tenderNumber = getText(
      formData.get("tenderNumber")
    );

    const companyName = getText(
      formData.get("companyName")
    );

    const companyAddress = getText(
      formData.get("companyAddress")
    );

    const localContent = getText(
      formData.get("localContent")
    );

    const supplierClass = getText(
      formData.get("supplierClass")
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
      !tenderNumber ||
      !companyName ||
      !companyAddress ||
      !localContent ||
      !supplierClass ||
      !signatoryName ||
      !designation
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required certificate details.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       VALIDATE LOCAL CONTENT
    ====================================================== */

    const localContentNumber = Number(localContent);

    if (
      Number.isNaN(localContentNumber) ||
      localContentNumber < 0 ||
      localContentNumber > 100
    ) {
      return NextResponse.json(
        {
          error:
            "Local content must be between 0 and 100.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      supplierClass === "Class I" &&
      localContentNumber < 50
    ) {
      return NextResponse.json(
        {
          error:
            "Class I requires at least 50% local content.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      supplierClass === "Class II" &&
      (localContentNumber < 20 ||
        localContentNumber >= 50)
    ) {
      return NextResponse.json(
        {
          error:
            "Class II requires at least 20% and less than 50% local content.",
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
       BUILD MII CERTIFICATE

       Four empty Word paragraphs are inserted before
       the certificate.
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
        "MAKE IN INDIA / LOCAL CONTENT CERTIFICATE",
        {
          bold: true,
          center: true,
          fontSize: 28,
          spaceAfter: 160,
        }
      )}

      ${paragraph(
        "SELF DECLARATION",
        {
          bold: true,
          center: true,
          fontSize: 20,
          spaceAfter: 300,
        }
      )}

      ${paragraph(
        `Tender / Bid No.: ${tenderNumber}`,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 240,
        }
      )}

      ${paragraph(
        `This is to certify that ${companyName}, having its registered office at ${companyAddress}, hereby declares the local content in relation to Tender / Bid No. ${tenderNumber} as ${localContent}%.`,
        {
          fontSize: 22,
          spaceAfter: 220,
        }
      )}

      ${paragraph(
        `Based on the information declared above, the bidder has selected the classification ${supplierClass} Local Supplier.`,
        {
          fontSize: 22,
          spaceAfter: 220,
        }
      )}

      ${paragraph(
        "We certify that the information stated in this declaration is true and correct to the best of our knowledge and is being furnished for participation in the above-mentioned tender.",
        {
          fontSize: 22,
          spaceAfter: 320,
        }
      )}

      ${paragraph(
        `Declared Local Content: ${localContent}%`,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 160,
        }
      )}

      ${paragraph(
        `Supplier Classification: ${supplierClass} Local Supplier`,
        {
          bold: true,
          fontSize: 22,
          spaceAfter: 420,
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
       INSERT BEFORE WORD SECTION PROPERTIES

       sectPr normally sits at the end of document body.
       We insert certificate immediately before it so
       existing header/footer relationships remain intact.
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
      /* ===================================================
         FALLBACK

         If no sectPr is found, insert immediately before
         closing document body.
      ==================================================== */

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
       SAVE MODIFIED XML
    ====================================================== */

    zip.file(
      "word/document.xml",
      documentXml
    );

    /* =====================================================
       GENERATE NEW DOCX
    ====================================================== */

    const output = zip.generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    /* =====================================================
       SAFE FILE NAME
    ====================================================== */

    const safeTenderNumber =
      tenderNumber
        .replace(/[^a-zA-Z0-9-_]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") ||
      "Tender";

    /* =====================================================
       RETURN WORD FILE
    ====================================================== */

    return new NextResponse(new Uint8Array(output), {
      status: 200,

      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        "Content-Disposition":
          `attachment; filename="MII-Certificate-${safeTenderNumber}.docx"`,

        "Cache-Control":
          "no-store",
      },
    });
  } catch (error) {
    console.error(
      "MII Word generation error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to generate the Word certificate. Please verify that the uploaded file is a valid .DOCX document.",
      },
      {
        status: 500,
      }
    );
  }
}
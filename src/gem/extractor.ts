import { prisma } from "../lib/prisma";
import { getBidPDF } from "./pdf";
import { parseTender } from "./parser";

// pdf-parse v2.4.5
// TypeScript's module resolution in this project is resolving the
// default export as the old pdf-parse(buffer) function, so we load
// PDFParse from the runtime module explicitly.
const pdfParseModule = require("pdf-parse") as {
  PDFParse: new (options: {
    data: Buffer | Uint8Array;
  }) => {
    getText: () => Promise<{
      text: string;
    }>;
    destroy: () => Promise<void>;
  };
};

const PDFParse = pdfParseModule.PDFParse;

/*
|--------------------------------------------------------------------------
| CLEAN TEXT
|--------------------------------------------------------------------------
*/

function cleanText(value: unknown): unknown {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/\u0000/g, "")
    .replace(/\uFFFD/g, "")
    .trim();
}

/*
|--------------------------------------------------------------------------
| CLEAN PARSED DATA
|--------------------------------------------------------------------------
*/

function cleanParsedData(parsed: any) {
  const cleaned: any = {};

  for (const [key, value] of Object.entries(parsed)) {
    cleaned[key] = cleanText(value);
  }

  return cleaned;
}

/*
|--------------------------------------------------------------------------
| EXTRACTION WARNINGS
|--------------------------------------------------------------------------
|
| IMPORTANT:
|
| EMD and Tender Fee are OPTIONAL.
|
| We intentionally DO NOT include:
|
|   emdAmount
|   tenderFee
|
| in the required/missing-field warning list.
|
|--------------------------------------------------------------------------
*/

function logExtractionWarnings(parsed: any) {
  const requiredFields = [
    "ministry",
    "department",
    "organisation",
    "office",
    "quantity",
    "itemCategory",
    "estimatedValue",
    "openingDate",
    "closingDate",
    "buyerEmail",
    "grievanceEmail",
  ];

  const missing = requiredFields.filter((field) => {
    const value = parsed[field];

    return (
      value === undefined ||
      value === null ||
      value === ""
    );
  });

  if (missing.length > 0) {
    console.warn(
      `⚠ Missing extracted fields: ${missing.join(", ")}`
    );
  }
}

/*
|--------------------------------------------------------------------------
| EXTRACT BID
|--------------------------------------------------------------------------
*/

export async function extractBid(
  gemId: number
): Promise<boolean> {
  const tender = await prisma.tender.findUnique({
    where: {
      gemId,
    },
  });

  if (!tender) {
    throw new Error(
      `Tender with GeM ID ${gemId} not found.`
    );
  }

  let parser: InstanceType<typeof PDFParse> | null = null;

  try {
    console.log(
      `\nDownloading PDF for ${tender.tenderNumber}...`
    );

    const pdfBuffer = await getBidPDF(gemId);

    if (!pdfBuffer || pdfBuffer.length === 0) {
      throw new Error(
        "Downloaded PDF is empty."
      );
    }

    console.log(
      `PDF downloaded: ${pdfBuffer.length} bytes`
    );

    console.log("Parsing PDF...");

    parser = new PDFParse({
      data: pdfBuffer,
    });

    const pdfData = await parser.getText();

    if (!pdfData || !pdfData.text) {
      throw new Error(
        "PDF contains no extractable text."
      );
    }

    console.log(
      `Extracted text: ${pdfData.text.length} characters`
    );

    console.log("Extracting fields...");

    /*
     * IMPORTANT:
     *
     * PDF extraction is already working.
     * Field extraction is handled by parser.ts.
     */
    const parsed = parseTender(pdfData.text);

    const cleaned = cleanParsedData(parsed);

    logExtractionWarnings(cleaned);

    console.log("Parsed fields:");

    console.dir(
      {
        ministry: cleaned.ministry,
        department: cleaned.department,
        organisation: cleaned.organisation,
        office: cleaned.office,

        quantity: cleaned.quantity,
        itemCategory: cleaned.itemCategory,

        estimatedValue: cleaned.estimatedValue,

        /*
         * These are optional.
         *
         * If the bid contains EMD/Tender Fee,
         * the parser extracts them.
         *
         * If not present, they remain undefined.
         */
        emdAmount: cleaned.emdAmount,
        tenderFee: cleaned.tenderFee,

        openingDate: cleaned.openingDate,
        closingDate: cleaned.closingDate,

        buyerEmail: cleaned.buyerEmail,
        grievanceEmail: cleaned.grievanceEmail,
      },
      {
        depth: null,
      }
    );

    /*
     * ----------------------------------------------------------------------
     * BID DATE SANITY CHECK
     * ----------------------------------------------------------------------
     *
     * GeM PDF:
     *
     *   Bid End       = 09:00 IST
     *   Bid Opening   = 09:30 IST
     *
     * JavaScript Date displays these as:
     *
     *   Closing = 03:30 UTC
     *   Opening = 04:00 UTC
     *
     * Therefore openingDate being later than closingDate is correct.
     */

    if (
      cleaned.openingDate &&
      cleaned.closingDate
    ) {
      const opening =
        new Date(cleaned.openingDate).getTime();

      const closing =
        new Date(cleaned.closingDate).getTime();

      if (opening < closing) {
        console.warn(
          "⚠ Bid opening date is earlier than closing date."
        );
      }
    }

    console.log(
      `Updating ${tender.tenderNumber}...`
    );

    await prisma.tender.update({
      where: {
        id: tender.id,
      },

      data: {
        ministry: cleaned.ministry,
        department: cleaned.department,
        organisation: cleaned.organisation,
        office: cleaned.office,

        buyerName: cleaned.buyerName,
        buyerEmail: cleaned.buyerEmail,
        grievanceEmail: cleaned.grievanceEmail,

        quantity: cleaned.quantity,
        itemCategory: cleaned.itemCategory,

        openingDate: cleaned.openingDate,
        closingDate: cleaned.closingDate,

        bidValidity: cleaned.bidValidity,
        deliveryPeriod: cleaned.deliveryPeriod,

        estimatedValue: cleaned.estimatedValue,

        /*
         * OPTIONAL:
         *
         * Only saved when parser.ts actually finds
         * an EMD amount / tender fee.
         */
        emdAmount: cleaned.emdAmount,
        tenderFee: cleaned.tenderFee,

        searchedStrings:
          cleaned.searchedStrings,

        technicalSpecification:
          cleaned.technicalSpecification,

        eligibilityCriteria:
          cleaned.eligibilityCriteria,

        bidDocumentText:
          cleaned.bidDocumentText,

        pdfExtracted: true,
        extractedAt: new Date(),

        extractAttempts: {
          increment: 1,
        },

        extractError: null,
      },
    });

    console.log(
      `${tender.tenderNumber} extracted successfully.`
    );

    return true;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    console.error(
      `${tender.tenderNumber} failed:`,
      errorMessage
    );

    try {
      await prisma.tender.update({
        where: {
          id: tender.id,
        },

        data: {
          extractAttempts: {
            increment: 1,
          },

          extractError:
            cleanText(errorMessage) as string,
        },
      });
    } catch (updateError: unknown) {
      console.error(
        `Could not save extraction error for ${tender.tenderNumber}:`,
        updateError instanceof Error
          ? updateError.message
          : updateError
      );
    }

    return false;
  } finally {
    if (parser) {
      try {
        await parser.destroy();
      } catch (destroyError: unknown) {
        console.error(
          "Could not destroy PDF parser:",
          destroyError instanceof Error
            ? destroyError.message
            : destroyError
        );
      }
    }
  }
}
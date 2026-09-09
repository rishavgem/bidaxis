import pdf from "pdf-parse";
import { prisma } from "../src/lib/prisma";
import { getBidPDF } from "../src/gem/pdf";
import { extractBid } from "../src/gem/extractor";

const TENDER_NUMBER = "GEM/2026/B/7881821";
const GEM_ID = 9715075;

async function main() {
  console.log("================================");
  console.log("BidAxis PDF Extraction Test");
  console.log("================================");

  try {
    console.log(`\nDownloading PDF for ${TENDER_NUMBER}...`);

    const pdfBuffer = await getBidPDF(GEM_ID);

    if (!pdfBuffer || pdfBuffer.length === 0) {
      throw new Error("Downloaded PDF is empty.");
    }

    console.log(`✔ PDF downloaded: ${pdfBuffer.length} bytes`);

    console.log("\nParsing PDF...");

    const pdfData = await pdf(pdfBuffer);

    if (!pdfData.text) {
      throw new Error("PDF contains no extractable text.");
    }

    console.log(
      `✔ Extracted text: ${pdfData.text.length} characters`
    );

    // =====================================================
    // TEMPORARY DEBUG OUTPUT
    // =====================================================

    console.log("\n================================");
    console.log("EXTRACTED PDF TEXT");
    console.log("================================\n");

    console.log(pdfData.text);

    console.log("\n================================");
    console.log("END EXTRACTED PDF TEXT");
    console.log("================================\n");

    // =====================================================
    // NORMAL EXTRACTION
    // =====================================================

    console.log("Running normal extraction...");

    const result = await extractBid(GEM_ID);

    console.log("\n================================");
    console.log("RESULT");
    console.log("================================");

    console.log("Extraction successful:", result);

  } catch (error) {
    console.error("\n❌ Test failed:");

    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    } else {
      console.error(error);
    }

    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
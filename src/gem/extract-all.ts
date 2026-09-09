import { prisma } from "../lib/prisma";
import { extractBid } from "./extractor";

async function extractAllBids(): Promise<void> {
  console.log("");
  console.log("========================================");
  console.log("GeM BID EXTRACTION BACKFILL");
  console.log("========================================");
  console.log("");

  /*
   * Only process GeM BIDS.
   *
   * Included:
   *   GEM/2026/B/...
   *
   * Excluded:
   *   GEM/2026/R/...
   *
   * Also skip bids that have already
   * been successfully extracted.
   */
  const tenders = await prisma.tender.findMany({
    where: {
      pdfExtracted: false,

      tenderNumber: {
        startsWith: "GEM/2026/B/",
      },
    },

    select: {
      id: true,
      gemId: true,
      tenderNumber: true,
      pdfExtracted: true,
    },

    orderBy: {
      id: "asc",
    },
  });

  console.log(
    `Found ${tenders.length} B bids to extract.`
  );

  if (tenders.length === 0) {
    console.log("Nothing to extract.");
    return;
  }

  let successful = 0;
  let failed = 0;

  const failures: Array<{
    gemId: number;
    tenderNumber: string | null;
  }> = [];

  /*
   * Process sequentially.
   *
   * Do NOT use Promise.all here.
   *
   * This avoids sending hundreds of
   * simultaneous requests to GeM.
   */
  for (
    let i = 0;
    i < tenders.length;
    i++
  ) {
    const tender = tenders[i];

    const gemId = tender.gemId;

    const displayName =
      tender.tenderNumber ??
      (gemId !== null
        ? String(gemId)
        : `Tender ID ${tender.id}`);

    console.log("");
    console.log(
      "----------------------------------------"
    );

    console.log(
      `[${i + 1}/${tenders.length}] ${displayName}`
    );

    console.log(
      "----------------------------------------"
    );

    /*
     * gemId is required by extractBid().
     *
     * Skip rows where gemId is missing.
     */
    if (gemId === null) {
      failed++;

      console.warn(
        `SKIPPED: ${displayName} because gemId is null.`
      );

      continue;
    }

    try {
      const result =
        await extractBid(gemId);

      if (result === true) {
        successful++;

        console.log(
          `SUCCESS: ${displayName}`
        );
      } else {
        failed++;

        failures.push({
          gemId,
          tenderNumber:
            tender.tenderNumber,
        });

        console.log(
          `FAILED: ${displayName}`
        );
      }
    } catch (
      error: unknown
    ) {
      failed++;

      failures.push({
        gemId,
        tenderNumber:
          tender.tenderNumber,
      });

      console.error(
        `ERROR: ${displayName}`
      );

      console.error(
        error instanceof Error
          ? error.message
          : String(error)
      );
    }
  }

  console.log("");
  console.log(
    "========================================"
  );

  console.log(
    "EXTRACTION COMPLETE"
  );

  console.log(
    "========================================"
  );

  console.log(
    `Total:      ${tenders.length}`
  );

  console.log(
    `Successful: ${successful}`
  );

  console.log(
    `Failed:     ${failed}`
  );

  if (failures.length > 0) {
    console.log("");
    console.log(
      "Failed bids:"
    );

    for (
      const failure of failures
    ) {
      console.log(
        `- ${
          failure.tenderNumber ??
          "Unknown"
        } (${failure.gemId})`
      );
    }
  }

  console.log(
    "========================================"
  );
}

extractAllBids()
  .catch(
    (error: unknown) => {
      console.error(
        "Fatal extraction error:"
      );

      console.error(
        error instanceof Error
          ? error.message
          : String(error)
      );

      process.exitCode = 1;
    }
  )
  .finally(
    async () => {
      await prisma.$disconnect();
    }
  );
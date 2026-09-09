import { prisma } from "../lib/prisma";
import { fetchTenderList } from "./client";

const TOTAL_PAGES = 4932;
const CONCURRENT_PAGES = 5;
const MAX_RETRIES = 3;

// LIVE MODE
const DRY_RUN = false;

// Safety
const MIN_EXPECTED_GEM_TENDERS = 40000;

// Safer deletion
const DELETE_CHUNK_SIZE = 100;
const DELETE_DELAY_MS = 500;

let processedPages = 0;
let failedPages: number[] = [];
let inserted = 0;
let updated = 0;
let skipped = 0;

const currentGemIds = new Set<number>();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processPage(page: number): Promise<void> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await fetchTenderList(page);

      if (!result.docs || result.docs.length === 0) {
        processedPages++;

        console.log(
          `Page ${page} empty | Current GeM /B/: ${currentGemIds.size}`
        );

        return;
      }

      for (const doc of result.docs) {
        const tenderNumber = doc.b_bid_number?.[0] ?? null;

        // Only /B/
        if (!tenderNumber || !tenderNumber.includes("/B/")) {
          skipped++;
          continue;
        }

        const gemId = Number(doc.id);

        if (!Number.isFinite(gemId)) {
          skipped++;
          continue;
        }

        currentGemIds.add(gemId);

        const title =
          doc.bd_category_name?.[0] ||
          doc.b_category_name?.[0] ||
          "Untitled Tender";

        const quantity =
          doc.b_total_quantity?.[0] ?? null;

        const ministry =
          doc.ba_official_details_minName?.[0] ?? null;

        const department =
          doc.ba_official_details_deptName?.[0] ?? null;

        const publishDate =
          doc.final_start_date_sort?.[0]
            ? new Date(doc.final_start_date_sort[0])
            : null;

        const closingDate =
          doc.final_end_date_sort?.[0]
            ? new Date(doc.final_end_date_sort[0])
            : null;

        const exists = await prisma.tender.findUnique({
          where: {
            gemId,
          },
          select: {
            id: true,
          },
        });

        if (!DRY_RUN) {
          await prisma.tender.upsert({
            where: {
              gemId,
            },

            create: {
              gemId,
              tenderId: tenderNumber,
              tenderNumber,
              title,
              department,

              // only used for newly created rows
              buyerName: ministry,

              quantity,
              publishDate,
              closingDate,

              source: "GeM",

              sourceUrl:
                `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,

              documentUrl:
                `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,
            },

            update: {
              tenderId: tenderNumber,
              tenderNumber,
              title,
              department,
              quantity,
              publishDate,
              closingDate,

              sourceUrl:
                `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,

              documentUrl:
                `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,

              lastSyncedAt: new Date(),

              // do not overwrite buyerName
              // PDF extraction may already have better data
            },
          });
        }

        if (exists) {
          updated++;
        } else {
          inserted++;
        }
      }

      processedPages++;

      console.log(
        `Page ${page} done | Current GeM /B/: ${currentGemIds.size}`
      );

      return;
    } catch (error) {
      console.error(
        `Page ${page} failed (attempt ${attempt}/${MAX_RETRIES})`
      );

      if (attempt < MAX_RETRIES) {
        const delay = attempt * 2000;

        console.log(
          `Retrying page ${page} in ${delay / 1000}s...`
        );

        await sleep(delay);
        continue;
      }

      console.error(
        `Page ${page} permanently failed after ${MAX_RETRIES} attempts.`
      );

      failedPages.push(page);

      return;
    }
  }
}

export async function syncCurrentGemTenders() {
  console.log("\n==================================");
  console.log("GeM Current Tender Sync");
  console.log("==================================");
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}`);
  console.log(`Pages: ${TOTAL_PAGES}`);
  console.log(`Concurrency: ${CONCURRENT_PAGES}`);
  console.log(`Retries: ${MAX_RETRIES}`);
  console.log("");

  /*
   * Crawl GeM
   */
  for (
    let page = 1;
    page <= TOTAL_PAGES;
    page += CONCURRENT_PAGES
  ) {
    const jobs: Promise<void>[] = [];

    for (
      let i = 0;
      i < CONCURRENT_PAGES &&
      page + i <= TOTAL_PAGES;
      i++
    ) {
      jobs.push(processPage(page + i));
    }

    await Promise.all(jobs);
  }

  console.log("\n==================================");
  console.log("GeM crawl completed");
  console.log("==================================");
  console.log("Pages processed :", processedPages);
  console.log("Failed pages    :", failedPages.length);
  console.log("Current GeM /B/ :", currentGemIds.size);
  console.log("Existing        :", updated);
  console.log("New             :", inserted);
  console.log("Skipped         :", skipped);

  /*
   * Never delete if any page failed
   */
  if (failedPages.length > 0) {
    console.error("\n==================================");
    console.error("SYNC INCOMPLETE — DELETION DISABLED");
    console.error("==================================");

    console.error(
      `Failed pages: ${failedPages.join(", ")}`
    );

    await prisma.$disconnect();
    return;
  }

  /*
   * Safety against broken/partial GeM crawl
   */
  if (
    currentGemIds.size <
    MIN_EXPECTED_GEM_TENDERS
  ) {
    console.error("\n==================================");
    console.error("SAFETY ABORT");
    console.error("==================================");

    console.error(
      `Only ${currentGemIds.size} GeM /B/ tenders found.`
    );

    console.error(
      `Expected at least ${MIN_EXPECTED_GEM_TENDERS}.`
    );

    console.error("Deletion disabled.");

    await prisma.$disconnect();
    return;
  }

  /*
   * Load current DB /B/ tenders
   */
  console.log(
    "\nLoading existing database tenders..."
  );

  const dbTenders =
    await prisma.tender.findMany({
      where: {
        source: "GeM",

        tenderNumber: {
          contains: "/B/",
        },

        gemId: {
          not: null,
        },
      },

      select: {
        id: true,
        gemId: true,
        tenderNumber: true,
      },
    });

  /*
   * Find rows that are no longer on GeM
   */
  const missingFromGem =
    dbTenders.filter(
      (tender) =>
        tender.gemId !== null &&
        !currentGemIds.has(
          tender.gemId
        )
    );

  console.log("\n==================================");
  console.log("Database comparison");
  console.log("==================================");

  console.log(
    "DB /B/ tenders       :",
    dbTenders.length
  );

  console.log(
    "Current GeM /B/      :",
    currentGemIds.size
  );

  console.log(
    "Missing from GeM     :",
    missingFromGem.length
  );

  /*
   * Preview
   */
  if (missingFromGem.length > 0) {
    console.log(
      "\nSample tenders missing from GeM:"
    );

    for (
      const tender of
      missingFromGem.slice(0, 25)
    ) {
      console.log(
        `${tender.tenderNumber} | gemId ${tender.gemId}`
      );
    }
  }

  /*
   * Dry run
   */
  if (DRY_RUN) {
    console.log("\n==================================");
    console.log("DRY RUN — NOTHING WAS CHANGED");
    console.log("==================================");

    console.log(
      `Would delete ${missingFromGem.length} tenders.`
    );

    console.log(
      `Would insert ${inserted} new tenders.`
    );

    console.log(
      `Would update ${updated} existing tenders.`
    );

    await prisma.$disconnect();
    return;
  }

  /*
   * Nothing to delete
   */
  if (missingFromGem.length === 0) {
    console.log("\nNothing to delete.");

    console.log("\n==================================");
    console.log("SYNC FINISHED");
    console.log("==================================");

    console.log("Deleted : 0");
    console.log("Inserted:", inserted);
    console.log("Updated :", updated);

    await prisma.$disconnect();
    return;
  }

  /*
   * Safe resumable deletion
   */
  let deleted = 0;

  console.log("\n==================================");
  console.log("Starting deletion");
  console.log("==================================");

  console.log(
    `To delete   : ${missingFromGem.length}`
  );

  console.log(
    `Chunk size  : ${DELETE_CHUNK_SIZE}`
  );

  console.log(
    `Delay       : ${DELETE_DELAY_MS}ms`
  );

  for (
    let i = 0;
    i < missingFromGem.length;
    i += DELETE_CHUNK_SIZE
  ) {
    const chunk =
      missingFromGem.slice(
        i,
        i + DELETE_CHUNK_SIZE
      );

    const ids =
      chunk.map(
        (tender) => tender.id
      );

    try {
      const result =
        await prisma.tender.deleteMany({
          where: {
            source: "GeM",

            tenderNumber: {
              contains: "/B/",
            },

            id: {
              in: ids,
            },
          },
        });

      deleted += result.count;

      const percent =
        (
          (deleted /
            missingFromGem.length) *
          100
        ).toFixed(1);

      console.log(
        `Deleted ${deleted}/${missingFromGem.length} (${percent}%)`
      );

      await sleep(
        DELETE_DELAY_MS
      );
    } catch (error: any) {
      console.error("\n==================================");
      console.error("DELETION STOPPED");
      console.error("==================================");

      console.error(
        `Successfully deleted this run: ${deleted}`
      );

      console.error(
        `Remaining from this run: ${
          missingFromGem.length -
          deleted
        }`
      );

      const message =
        error?.message ?? String(error);

      if (
        message.includes(
          "read-only transaction"
        ) ||
        message.includes("25006")
      ) {
        console.error(
          "\nSupabase entered read-only mode again."
        );

        console.error(
          "No reset is needed."
        );

        console.error(
          "Already-deleted rows stay deleted."
        );

        console.error(
          "Run this sync again after the database becomes writable."
        );
      } else {
        console.error(
          "\nUnexpected delete error:"
        );

        console.error(error);
      }

      await prisma
        .$disconnect()
        .catch(() => {});

      return;
    }
  }

  console.log("\n==================================");
  console.log("SYNC FINISHED");
  console.log("==================================");

  console.log(
    "Current GeM /B/ :",
    currentGemIds.size
  );

  console.log(
    "Inserted        :",
    inserted
  );

  console.log(
    "Updated         :",
    updated
  );

  console.log(
    "Deleted         :",
    deleted
  );

  await prisma.$disconnect();
}
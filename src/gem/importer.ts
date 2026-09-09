import { PrismaClient } from "@prisma/client";
import { fetchTenderList } from "./client";

const prisma = new PrismaClient();

const TOTAL_PAGES = 4932;
const CONCURRENT_PAGES = 5;

let inserted = 0;
let updated = 0;
let skipped = 0;
let processedPages = 0;

const startedAt = Date.now();

function progress() {
  const percent = ((processedPages / TOTAL_PAGES) * 100).toFixed(1);

  const elapsed = (Date.now() - startedAt) / 1000;

  const speed = processedPages / Math.max(elapsed, 1);

  const remaining = TOTAL_PAGES - processedPages;

  const eta = remaining / Math.max(speed, 0.001);

  process.stdout.write(
    `\rPages ${processedPages}/${TOTAL_PAGES} (${percent}%) | ` +
      `Inserted ${inserted} | Updated ${updated} | Skipped ${skipped} | ` +
      `Elapsed ${Math.round(elapsed)}s | ETA ${Math.round(eta)}s`
  );
}

async function importPage(page: number): Promise<boolean> {
  try {
    const result = await fetchTenderList(page);

    if (!result.docs || result.docs.length === 0) {
      return false;
    }

    await Promise.all(
      result.docs.map(async (doc: any) => {
        const tenderNumber = doc.b_bid_number?.[0] ?? null;

        // Skip Reverse Auctions (GEM/.../R/...)
        if (
          !tenderNumber ||
          !tenderNumber.includes("/B/")
        ) {
          skipped++;
          return;
        }

        const gemId = Number(doc.id);

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

        const publishDate = doc.final_start_date_sort?.[0]
          ? new Date(doc.final_start_date_sort[0])
          : null;

        const closingDate = doc.final_end_date_sort?.[0]
          ? new Date(doc.final_end_date_sort[0])
          : null;

        const exists = await prisma.tender.findUnique({
          where: { gemId },
          select: { id: true },
        });

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
            buyerName: ministry,
            quantity,
            publishDate,
            closingDate,
            source: "GeM",
            sourceUrl: `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,
            documentUrl: `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,
          },

          update: {
            title,
            department,
            buyerName: ministry,
            quantity,
            publishDate,
            closingDate,
            sourceUrl: `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,
            documentUrl: `https://bidplus.gem.gov.in/showbidDocument/${gemId}`,
            lastSyncedAt: new Date(),
          },
        });

        if (exists) {
          updated++;
        } else {
          inserted++;
        }
      })
    );

    processedPages++;
    progress();

    return true;
  } catch (err) {
    console.error(`\nPage ${page} failed`, err);

    processedPages++;
    progress();

    return true;
  }
}

export async function importGemTenders() {
  let page = 1;

  console.log("\n==================================");
  console.log("Starting GeM Import");
  console.log("==================================\n");

  while (page <= TOTAL_PAGES) {
    const batch: Promise<boolean>[] = [];

    for (
      let i = 0;
      i < CONCURRENT_PAGES && page <= TOTAL_PAGES;
      i++, page++
    ) {
      batch.push(importPage(page));
    }

    const results = await Promise.all(batch);

    if (results.every((r) => r === false)) {
      break;
    }
  }

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);

  console.log("\n\n==================================");
  console.log("GeM Import Finished");
  console.log("==================================");
  console.log("Pages Processed :", processedPages);
  console.log("Inserted        :", inserted);
  console.log("Updated         :", updated);
  console.log("Skipped (R)     :", skipped);
  console.log("Elapsed         :", `${elapsed}s`);

  await prisma.$disconnect();
}
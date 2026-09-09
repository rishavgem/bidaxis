import { prisma } from "../src/lib/prisma";
import { extractBid } from "../src/gem/extractor";

const WORKERS = 10;
const BATCH_SIZE = 500;

let TOTAL_TENDERS = 0;

let processed = 0;
let success = 0;
let failed = 0;

const startedAt = Date.now();

type TenderQueueItem = {
  id: string;
  gemId: number;
  tenderNumber: string;
};

let queue: TenderQueueItem[] = [];

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "--";
  }

  const totalSeconds = Math.round(seconds);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }

  return `${secs}s`;
}

function printProgress() {
  const elapsedSeconds =
    (Date.now() - startedAt) / 1000;

  const percentage =
    TOTAL_TENDERS > 0
      ? (processed / TOTAL_TENDERS) * 100
      : 100;

  const speedPerSecond =
    processed / Math.max(elapsedSeconds, 1);

  const speedPerMinute =
    speedPerSecond * 60;

  const remaining =
    Math.max(TOTAL_TENDERS - processed, 0);

  const etaSeconds =
    processed > 0
      ? remaining / speedPerSecond
      : Infinity;

  const line =
    `Progress: ${processed}/${TOTAL_TENDERS} ` +
    `(${percentage.toFixed(2)}%) | ` +
    `Remaining: ${remaining} | ` +
    `✔ ${success} | ` +
    `✖ ${failed} | ` +
    `Speed: ${speedPerMinute.toFixed(1)}/min | ` +
    `Elapsed: ${formatTime(elapsedSeconds)} | ` +
    `ETA: ${formatTime(etaSeconds)}`;

  process.stdout.write("\r" + line.padEnd(180));
}

async function loadBatch() {
  const rows = await prisma.tender.findMany({
    where: {
      // Only pending PDFs
      pdfExtracted: false,

      // Must have GeM document ID
      gemId: {
        not: null,
      },

      // ONLY normal GeM bids
      // Do NOT extract /R/ tenders
      tenderNumber: {
        contains: "/B/",
      },

      // Skip permanently failing PDFs
      extractAttempts: {
        lt: 3,
      },
    },

    select: {
      id: true,
      gemId: true,
      tenderNumber: true,
    },

    orderBy: {
      publishDate: "desc",
    },

    take: BATCH_SIZE,
  });

  queue = rows.filter(
    (
      tender
    ): tender is TenderQueueItem =>
      tender.gemId !== null &&
      tender.tenderNumber !== null
  );

  return queue.length;
}

async function worker(workerId: number) {
  while (true) {
    const tender = queue.shift();

    if (!tender) {
      break;
    }

    try {
      const result =
        await extractBid(tender.gemId);

      if (result === true) {
        success++;
      } else {
        failed++;
      }
    } catch (error) {
      failed++;

      console.error(
        `\nWorker ${workerId} error ` +
        `for ${tender.tenderNumber}:`,
        error
      );
    }

    processed++;

    printProgress();
  }
}

async function main() {
  console.log("==========================================");
  console.log("BidAxis - GeM PDF EXTRACTION ENGINE");
  console.log("==========================================");
  console.log(`Workers : ${WORKERS}`);
  console.log(`Batch   : ${BATCH_SIZE}`);
  console.log(`Filter  : /B/ ONLY`);
  console.log(`Status  : pdfExtracted = false`);
  console.log(`Retries : extractAttempts < 3`);
  console.log("==========================================");

  TOTAL_TENDERS =
    await prisma.tender.count({
      where: {
        pdfExtracted: false,

        gemId: {
          not: null,
        },

        tenderNumber: {
          contains: "/B/",
        },

        extractAttempts: {
          lt: 3,
        },
      },
    });

  console.log(
    `Pending /B/ PDFs : ${TOTAL_TENDERS}`
  );

  console.log("==========================================");

  if (TOTAL_TENDERS === 0) {
    console.log(
      "No pending /B/ PDFs to extract."
    );

    await prisma.$disconnect();
    return;
  }

  while (true) {
    const count = await loadBatch();

    if (count === 0) {
      break;
    }

    console.log(
      `\nLoaded ${count} pending /B/ PDFs`
    );

    await Promise.all(
      Array.from(
        {
          length: Math.min(
            WORKERS,
            count
          ),
        },
        (_, i) => worker(i + 1)
      )
    );

    console.log(
      `\nBatch complete | ` +
      `Processed ${processed}/${TOTAL_TENDERS} | ` +
      `${(
        (processed / TOTAL_TENDERS) *
        100
      ).toFixed(2)}% | ` +
      `Success ${success} | ` +
      `Failed ${failed}`
    );
  }

  const elapsedSeconds =
    (Date.now() - startedAt) / 1000;

  const averageSpeed =
    processed /
    Math.max(elapsedSeconds / 60, 0.01);

  console.log("\n");
  console.log("==========================================");
  console.log("EXTRACTION FINISHED");
  console.log("==========================================");

  console.log(
    `Total Queue    : ${TOTAL_TENDERS}`
  );

  console.log(
    `Processed      : ${processed}`
  );

  console.log(
    `Completed      : ${(
      (processed /
        Math.max(TOTAL_TENDERS, 1)) *
      100
    ).toFixed(2)}%`
  );

  console.log(
    `Success        : ${success}`
  );

  console.log(
    `Failed         : ${failed}`
  );

  console.log(
    `Elapsed        : ${formatTime(
      elapsedSeconds
    )}`
  );

  console.log(
    `Average Speed  : ${averageSpeed.toFixed(
      1
    )} tenders/min`
  );

  console.log("==========================================");

  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(
    "\nFatal extraction error:",
    error
  );

  await prisma.$disconnect();

  process.exit(1);
});
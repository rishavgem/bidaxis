import { chromium } from "playwright";
import { prisma } from "../lib/prisma";

export async function crawlDocumentIds() {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  console.log("Opening GeM...");

  await page.goto("https://bidplus.gem.gov.in/all-bids", {
    waitUntil: "networkidle",
  });

  await page.waitForTimeout(3000);

  const links = await page.$$eval(
    'a[href*="/showbidDocument/"]',
    (anchors) =>
      anchors.map((a) => ({
        href: (a as HTMLAnchorElement).getAttribute("href") || "",
        text: (a.textContent || "").trim(),
      }))
  );

  console.log(`Found ${links.length} bid links\n`);

  let updated = 0;

  for (const link of links) {
    const bidNumber = link.text;

    const match = link.href.match(/showbidDocument\/(\d+)/);

    if (!match) continue;

    const documentId = Number(match[1]);

    console.log(`${bidNumber} -> ${documentId}`);

    try {
      await prisma.tender.update({
        where: {
          tenderNumber: bidNumber,
        },
        data: {
          documentId,
        },
      });

      updated++;
    } catch {
      console.log(`Not found in DB: ${bidNumber}`);
    }
  }

  console.log("\n======================");
  console.log(`Updated ${updated} tenders`);
  console.log("======================");

  await browser.close();
}
import { chromium } from "playwright";

const GEM_ID = 9694542;

async function main() {
  const url = `https://bidplus.gem.gov.in/showbidDocument/${GEM_ID}`;

  console.log("================================");
  console.log("GeM Playwright PDF Diagnostic");
  console.log("================================");
  console.log(`GEM ID : ${GEM_ID}`);
  console.log(`URL    : ${url}`);
  console.log("");

  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();

    console.log("Waiting for GeM download...");

    const downloadPromise = page.waitForEvent("download", {
      timeout: 30000,
    });

    await page.goto(url, {
      waitUntil: "commit",
    }).catch(() => {
      // GeM may immediately turn the navigation into a download.
    });

    const download = await downloadPromise;

    console.log("Download started.");
    console.log("Suggested filename:", download.suggestedFilename());

    const failure = await download.failure();

    if (failure) {
      console.log("❌ Download failed:", failure);
      return;
    }

    const pdfPath = await download.path();

    if (!pdfPath) {
      console.log("❌ Playwright returned no downloaded file.");
      return;
    }

    const fs = await import("fs");

    const buffer = fs.readFileSync(pdfPath);

    console.log("Downloaded bytes:", buffer.length);

    const header = buffer.subarray(0, 8).toString("ascii");

    console.log("First bytes:", header);

    if (buffer.length === 0) {
      console.log("❌ EMPTY PDF");
      return;
    }

    if (!buffer.subarray(0, 5).toString("ascii").startsWith("%PDF")) {
      console.log("❌ Response is not a valid PDF.");
      return;
    }

    console.log("✔ Valid PDF received.");
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error("❌ Diagnostic failed:");
  console.error(error);
});
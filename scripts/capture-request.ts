import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  page.on("request", req => {
    if (req.url().includes("all-bids-data")) {
      console.log("\n====================");
      console.log(req.method());
      console.log(req.url());

      console.log("\nHEADERS");
      console.log(req.headers());

      console.log("\nPOST DATA");
      console.log(req.postData());

      console.log("====================\n");
    }
  });

  await page.goto("https://bidplus.gem.gov.in/all-bids");

  console.log("\nSelect:");
  console.log("✓ Ongoing Bids");
  console.log("✓ Latest First");
  console.log("Then wait 5 seconds...");

  await page.waitForTimeout(300000);
}

main();
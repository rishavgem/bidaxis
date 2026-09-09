import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  page.on("request", (req) => {
    if (req.url().includes("all-bids-data")) {
      console.log("\n========== REQUEST ==========");
      console.log(req.method());
      console.log(req.url());
      console.log(req.postData());
      console.log("=============================\n");
    }
  });

  await page.goto("https://bidplus.gem.gov.in/all-bids", {
    waitUntil: "networkidle",
  });

  console.log("👉 Click NEXT PAGE manually...");

  await page.waitForTimeout(60000);

  await browser.close();
}

main();
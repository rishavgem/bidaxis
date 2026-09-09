import { chromium, Browser, BrowserContext, Page } from "playwright";

let browser: Browser | null = null;
let context: BrowserContext | null = null;
let page: Page | null = null;

async function getPage() {
  if (page) {
    return page;
  }

  browser = await chromium.launch({
    headless: true,
  });

  context = await browser.newContext();

  page = await context.newPage();

  console.log("Opening GeM...");

  await page.goto(
    "https://bidplus.gem.gov.in/all-bids",
    {
      waitUntil: "networkidle",
    }
  );

  return page;
}

export async function fetchTenderList(
  pageNumber = 1
) {
  const currentPage = await getPage();

  const csrfName =
    await currentPage
      .locator("#cname")
      .inputValue();

  const csrfValue =
    await currentPage
      .locator("#chash")
      .inputValue();

  const payload = {
    page: pageNumber,

    param: {
      searchBid: "",
      searchType: "fullText",
    },

    filter: {
      bidStatusType: "ongoing_bids",
      byType: "all",
      highBidValue: "",

      byEndDate: {
        from: "",
        to: "",
      },

      sort: "Bid-End-Date-Oldest",
    },
  };

  const body = new URLSearchParams();

  body.append(
    "payload",
    JSON.stringify(payload)
  );

  body.append(
    csrfName,
    csrfValue
  );

  const json = await currentPage.evaluate(
    async (bodyString) => {
      const response = await fetch(
        "https://bidplus.gem.gov.in/all-bids-data",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body: bodyString,
        }
      );

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}`
        );
      }

      return await response.json();
    },
    body.toString()
  );

  if (!json?.response?.response) {
    throw new Error(
      "Unexpected GeM response"
    );
  }

  return json.response.response;
}

export async function closeGemBrowser() {
  if (browser) {
    await browser.close();
  }

  browser = null;
  context = null;
  page = null;
}
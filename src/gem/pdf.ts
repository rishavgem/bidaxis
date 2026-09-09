import { chromium, Browser, BrowserContext } from "playwright";

const PDF_BASE_URL =
  "https://bidplus.gem.gov.in/showbidDocument";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

let browser: Browser | null = null;
let context: BrowserContext | null = null;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Keep one shared browser + context.
 * Each PDF download gets its OWN page.
 */
async function getPDFContext(): Promise<BrowserContext> {
  if (context && browser?.isConnected()) {
    return context;
  }

  console.log("Opening GeM browser session...");

  browser = await chromium.launch({
    headless: true,
  });

  context = await browser.newContext({
    acceptDownloads: true,

    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
      "AppleWebKit/537.36 (KHTML, like Gecko) " +
      "Chrome/131.0.0.0 Safari/537.36",

    extraHTTPHeaders: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9," +
        "image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  /**
   * Warm up session once.
   */
  const warmupPage = await context.newPage();

  try {
    console.log("Opening GeM...");

    await warmupPage.goto(
      "https://bidplus.gem.gov.in/all-bids",
      {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      }
    );

    await warmupPage.waitForTimeout(1500);

    console.log("GeM browser session ready.");
  } finally {
    await warmupPage.close().catch(() => {});
  }

  return context;
}

/**
 * Download ONE PDF using its own isolated Playwright page.
 */
async function downloadPDF(
  documentId: number
): Promise<Buffer> {
  const currentContext = await getPDFContext();

  /**
   * CRITICAL:
   * Every worker gets its own page.
   */
  const page = await currentContext.newPage();

  const url =
    `${PDF_BASE_URL}/${documentId}`;

  try {
    console.log(
      `Opening PDF download: ${url}`
    );

    const downloadPromise =
      page.waitForEvent("download", {
        timeout: 60000,
      });

    try {
      await page.goto(url, {
        waitUntil: "commit",
        timeout: 60000,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : String(error);

      /**
       * ERR_ABORTED is normal when navigation
       * becomes a file download.
       */
      if (
        !message.includes("ERR_ABORTED") &&
        !message.includes("Download")
      ) {
        console.warn(
          `Navigation warning for PDF ${documentId}:`,
          message
        );
      }
    }

    const download =
      await downloadPromise;

    console.log(
      `Download received for ${documentId}: ` +
      download.suggestedFilename()
    );

    /**
     * Extra safety check:
     * make sure GeM gave us the expected file name.
     */
    const filename =
      download.suggestedFilename();

    if (
      filename.includes("GeM-Bidding-") &&
      !filename.includes(String(documentId))
    ) {
      throw new Error(
        `PDF mismatch. Requested ${documentId}, ` +
        `but GeM returned "${filename}".`
      );
    }

    const failure =
      await download.failure();

    if (failure) {
      throw new Error(
        `GeM download failed: ${failure}`
      );
    }

    const downloadedPath =
      await download.path();

    if (!downloadedPath) {
      throw new Error(
        "Playwright did not provide a downloaded PDF path."
      );
    }

    console.log(
      `Downloaded ${documentId} -> ${downloadedPath}`
    );

    const fs =
      await import("node:fs/promises");

    const buffer =
      await fs.readFile(downloadedPath);

    console.log(
      `PDF ${documentId} -> Bytes: ${buffer.length}`
    );

    if (buffer.length === 0) {
      throw new Error(
        "GeM browser download returned an empty PDF."
      );
    }

    const header =
      buffer
        .subarray(0, 5)
        .toString("ascii");

    if (header !== "%PDF-") {
      const preview =
        buffer
          .subarray(0, 100)
          .toString("utf8")
          .replace(/\s+/g, " ")
          .trim();

      throw new Error(
        `Downloaded file is not a valid PDF. ` +
        `Header="${header}" ` +
        `Preview="${preview}"`
      );
    }

    console.log(
      `✔ Valid PDF ${documentId}: ` +
      `${buffer.length} bytes`
    );

    return buffer;
  } finally {
    /**
     * Always close only THIS worker's page.
     */
    await page.close().catch(() => {});
  }
}

/**
 * Public downloader.
 */
export async function getBidPDF(
  documentId: number
): Promise<Buffer> {
  let lastError: Error | null = null;

  for (
    let attempt = 1;
    attempt <= MAX_RETRIES;
    attempt++
  ) {
    try {
      console.log(
        `Fetching PDF ${documentId} ` +
        `(attempt ${attempt}/${MAX_RETRIES})`
      );

      return await downloadPDF(documentId);
    } catch (error: unknown) {
      lastError =
        error instanceof Error
          ? error
          : new Error(String(error));

      console.error(
        `PDF ${documentId} attempt ${attempt} failed:`,
        lastError.message
      );

      if (attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS);
      }
    }
  }

  throw new Error(
    `Unable to download valid PDF ${documentId} ` +
    `after ${MAX_RETRIES} attempts. ` +
    `${lastError?.message || ""}`
  );
}

/**
 * Close shared browser/context.
 */
export async function closePDFBrowser() {
  try {
    if (context) {
      await context.close();
    }
  } catch (error) {
    console.error(
      "Error closing GeM context:",
      error
    );
  }

  try {
    if (browser) {
      await browser.close();
    }
  } catch (error) {
    console.error(
      "Error closing GeM browser:",
      error
    );
  }

  context = null;
  browser = null;
}
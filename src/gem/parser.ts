export interface ParsedTender {
  bidNumber?: string;

  ministry?: string;
  department?: string;
  organisation?: string;
  office?: string;

  buyerName?: string;
  buyerEmail?: string;
  grievanceEmail?: string;

  openingDate?: Date;
  closingDate?: Date;

  bidValidity?: string;

  quantity?: number;

  itemCategory?: string;
  searchedStrings?: string;

  estimatedValue?: string;
  emdAmount?: string;
  tenderFee?: string;

  deliveryPeriod?: string;

  technicalSpecification?: string;
  eligibilityCriteria?: string;

  bidDocumentText?: string;
}

/*
|--------------------------------------------------------------------------
| CLEANING
|--------------------------------------------------------------------------
*/

function clean(value?: string): string | undefined {
  if (!value) {
    return undefined;
  }

  const result = value
    .replace(/\u0000/g, "")
    .replace(/\u0001/g, "")
    .replace(/\uFFFD/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return result || undefined;
}

/*
|--------------------------------------------------------------------------
| GENERIC EXTRACTION
|--------------------------------------------------------------------------
*/

function extract(
  regex: RegExp,
  text: string
): string | undefined {
  const match = regex.exec(text);

  if (!match?.[1]) {
    return undefined;
  }

  return clean(match[1]);
}

function extractNumber(
  regex: RegExp,
  text: string
): number | undefined {
  const value = extract(regex, text);

  if (!value) {
    return undefined;
  }

  const cleaned = value
    .replace(/[₹,\s]/g, "")
    .replace(/[^\d.-]/g, "");

  if (!cleaned) {
    return undefined;
  }

  const num = Number(cleaned);

  return Number.isNaN(num)
    ? undefined
    : num;
}

/*
|--------------------------------------------------------------------------
| MONEY
|--------------------------------------------------------------------------
*/

function cleanMoney(
  value: string
): string | undefined {
  const result = value
    .replace(/[₹,\s]/g, "")
    .replace(/[^\d.]/g, "");

  return result || undefined;
}

/*
|--------------------------------------------------------------------------
| DATE
|--------------------------------------------------------------------------
*/

function parseDate(
  value?: string
): Date | undefined {
  if (!value) {
    return undefined;
  }

  const match = value.match(
    /(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/
  );

  if (!match) {
    return undefined;
  }

  const [
    ,
    day,
    month,
    year,
    hour,
    minute,
    second,
  ] = match;

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  );

  return Number.isNaN(date.getTime())
    ? undefined
    : date;
}

function extractDateAfterLabel(
  label: RegExp,
  text: string
): Date | undefined {
  const match = label.exec(text);

  if (!match) {
    return undefined;
  }

  /*
   * Only search a short distance after the label.
   */
  const remaining = text.slice(
    match.index,
    match.index + 300
  );

  const dateMatch = remaining.match(
    /(\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}:\d{2})/
  );

  return parseDate(dateMatch?.[1]);
}

/*
|--------------------------------------------------------------------------
| EMAIL
|--------------------------------------------------------------------------
*/

function extractEmail(
  label: RegExp,
  text: string
): string | undefined {
  const match = label.exec(text);

  if (!match) {
    return undefined;
  }

  const remaining = text.slice(
    match.index,
    match.index + 250
  );

  return remaining.match(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
  )?.[0];
}

/*
|--------------------------------------------------------------------------
| MONEY AFTER LABEL
|--------------------------------------------------------------------------
|
| Only search a short distance after a known label.
|
| This prevents unrelated numbers elsewhere in the PDF
| from being incorrectly assigned to a field.
|--------------------------------------------------------------------------
*/

function extractMoneyAfterLabel(
  label: RegExp,
  text: string
): string | undefined {
  const match = label.exec(text);

  if (!match) {
    return undefined;
  }

  const start =
    match.index + match[0].length;

  const remaining = text.slice(
    start,
    start + 120
  );

  /*
   * Valid examples:
   *
   * ₹ 1,62,000
   * ₹162000
   * 162000
   * 1,62,000
   */

  const amount = remaining.match(
    /(?:₹\s*)?([0-9]{1,3}(?:,[0-9]{2,3})+|[0-9]{3,}(?:\.\d+)?)/ 
  );

  if (!amount?.[1]) {
    return undefined;
  }

  return cleanMoney(amount[1]);
}

/*
|--------------------------------------------------------------------------
| LABEL -> NEXT LABEL
|--------------------------------------------------------------------------
*/

function extractBetweenLabels(
  startLabel: RegExp,
  endLabel: RegExp,
  text: string
): string | undefined {
  const start = startLabel.exec(text);

  if (!start) {
    return undefined;
  }

  const from =
    start.index + start[0].length;

  const remaining = text.slice(from);

  const end = endLabel.exec(remaining);

  const value = end
    ? remaining.slice(0, end.index)
    : remaining.slice(0, 250);

  return clean(value);
}

/*
|--------------------------------------------------------------------------
| CLEAN ENGLISH FIELD
|--------------------------------------------------------------------------
*/

function cleanField(
  value?: string
): string | undefined {
  if (!value) {
    return undefined;
  }

  let result = clean(value);

  if (!result) {
    return undefined;
  }

  /*
   * Remove broken Hindi OCR after the English value.
   *
   * Example:
   *
   * Ministry Of Education वभाग...
   *
   * becomes:
   *
   * Ministry Of Education
   */

  const hindiIndex = result.search(
    /[\u0900-\u097F]/
  );

  if (hindiIndex > 0) {
    result = result
      .slice(0, hindiIndex)
      .trim();
  }

  return result || undefined;
}

/*
|--------------------------------------------------------------------------
| ITEM CATEGORY CLEANING
|--------------------------------------------------------------------------
*/

function cleanItemCategory(
  value?: string
): string | undefined {
  if (!value) {
    return undefined;
  }

  let result = clean(value);

  if (!result) {
    return undefined;
  }

  /*
   * Stop before common sections that can get attached
   * to the item category.
   */

  result = result
    .split(/MSE\s+Relaxation/i)[0]
    .split(/Startup\s+Relaxation/i)[0]
    .split(/Document\s+required\s+from\s+seller/i)[0]
    .split(/GeMARPTS/i)[0]
    .trim();

  /*
   * Remove broken Hindi OCR after the English category.
   */

  const hindiIndex = result.search(
    /[\u0900-\u097F]/
  );

  if (hindiIndex > 0) {
    result = result
      .slice(0, hindiIndex)
      .trim();
  }

  return clean(result);
}

/*
|--------------------------------------------------------------------------
| MAIN PARSER
|--------------------------------------------------------------------------
*/

export function parseTender(
  rawText: string
): ParsedTender {

  /*
   * Normalize control characters.
   *
   * Keep the document structure otherwise intact.
   */

  const text = rawText
    .replace(/\u0000/g, "")
    .replace(/\u0001/g, "")
    .replace(/\uFFFD/g, "")
    .replace(/\r/g, "\n");

  /*
   * --------------------------------------------------
   * BID NUMBER
   * --------------------------------------------------
   */

  const bidNumber =
    text.match(
      /GEM\/\d{4}\/B\/\d+/i
    )?.[0];

  /*
   * --------------------------------------------------
   * MINISTRY
   * --------------------------------------------------
   */

  const ministry =
    cleanField(
      extractBetweenLabels(
        /Ministry\/State\s+Name/i,
        /Department\s+Name/i,
        text
      )
    );

  /*
   * --------------------------------------------------
   * DEPARTMENT
   * --------------------------------------------------
   */

  const department =
    cleanField(
      extractBetweenLabels(
        /Department\s+Name/i,
        /Organisation\s+Name/i,
        text
      )
    );

  /*
   * --------------------------------------------------
   * ORGANISATION
   * --------------------------------------------------
   */

  const organisation =
    cleanField(
      extractBetweenLabels(
        /Organisation\s+Name/i,
        /Office\s+Name/i,
        text
      )
    );

  /*
   * --------------------------------------------------
   * OFFICE
   * --------------------------------------------------
   */

  const office =
    cleanField(
      extractBetweenLabels(
        /Office\s+Name/i,
        /Contact\s+details\s+of\s+Grievance\s+redressal/i,
        text
      )
    );

  /*
   * --------------------------------------------------
   * QUANTITY
   * --------------------------------------------------
   */

  const quantity =
    extractNumber(
      /Total\s+Quantity\s*[:\-]?\s*([0-9][0-9,]*)/i,
      text
    );

  /*
   * --------------------------------------------------
   * ITEM CATEGORY
   * --------------------------------------------------
   */

  const itemCategory =
    cleanItemCategory(
      extractBetweenLabels(
        /Item\s+Category/i,
        /GeMARPTS|MSE\s+Relaxation|Startup\s+Relaxation|Document\s+required\s+from\s+seller/i,
        text
      )
    );

  /*
   * --------------------------------------------------
   * SEARCHED STRINGS
   * --------------------------------------------------
   */

  const searchedStrings =
    extractBetweenLabels(
      /Searched\s+Strings\s+used\s+in\s+GeMARPTS/i,
      /Searched\s+Result\s+generated\s+in\s+GeMARPTS|Relevant\s+Categories\s+selected/i,
      text
    );

  /*
   * --------------------------------------------------
   * ESTIMATED VALUE
   * --------------------------------------------------
   *
   * OPTIONAL.
   *
   * We extract it when the PDF has a recognizable
   * estimated-value label and an amount immediately
   * following that label.
   *
   * If the bid does not contain an estimated value,
   * undefined is correct.
   */

  const estimatedValue =
    extractMoneyAfterLabel(
      /Estimated\s+Bid\s+Value/i,
      text
    ) ??
    extractMoneyAfterLabel(
      /Estimated\s+Value/i,
      text
    ) ??
    extractMoneyAfterLabel(
      /Estimated\s+Value\s+of\s+Bid/i,
      text
    );

  /*
   * --------------------------------------------------
   * EMD
   * --------------------------------------------------
   *
   * OPTIONAL.
   *
   * Only extract when an actual EMD Amount label
   * is followed by an amount.
   *
   * Never infer EMD from another amount.
   */

  const emdAmount =
    extractMoneyAfterLabel(
      /EMD\s+Amount\s*[:\-]?\s*/i,
      text
    );

  /*
   * --------------------------------------------------
   * TENDER FEE
   * --------------------------------------------------
   *
   * OPTIONAL.
   *
   * Only capture a value when "Tender Fee" appears
   * as an actual field label.
   *
   * This avoids false positives such as:
   *
   * "Asking for any Tender fee..."
   */

  const tenderFee =
    extractMoneyAfterLabel(
      /(?:^|[\n\/])\s*Tender\s+Fee\s*[:\-]?\s*/im,
      text
    );

  /*
   * --------------------------------------------------
   * CLOSING DATE
   * --------------------------------------------------
   */

  const closingDate =
    extractDateAfterLabel(
      /Bid\s+End\s+Date\s*\/\s*Time/i,
      text
    );

  /*
   * --------------------------------------------------
   * OPENING DATE
   * --------------------------------------------------
   */

  const openingDate =
    extractDateAfterLabel(
      /Bid\s+Opening[\s\S]{0,100}?Date\s*\/\s*Time/i,
      text
    );

  /*
   * --------------------------------------------------
   * BID VALIDITY
   * --------------------------------------------------
   */

  const bidValidity =
    extract(
      /Bid\s+Offer\s+Validity\s*\(From\s+End\s+Date\)\s*([0-9]+\s*\(Days\))/i,
      text
    );

  /*
   * --------------------------------------------------
   * BUYER EMAIL
   * --------------------------------------------------
   */

  const buyerEmail =
    extractEmail(
      /Buyer\s+Email\s*(?:id)?\s*:?\s*/i,
      text
    );

  /*
   * --------------------------------------------------
   * GRIEVANCE EMAIL
   * --------------------------------------------------
   */

  const grievanceEmail =
    extractEmail(
      /HOD\s+Email\s*(?:id)?\s*:?\s*/i,
      text
    );

  /*
   * --------------------------------------------------
   * BUYER NAME
   * --------------------------------------------------
   */

  const buyerName =
    extract(
      /Buyer\s+Name\s*:?\s*([^\n]+)/i,
      text
    );

  /*
   * --------------------------------------------------
   * DELIVERY PERIOD
   * --------------------------------------------------
   */

  const deliveryPeriod =
    extract(
      /Delivery\s+Period\s*:?\s*([^\n]+)/i,
      text
    );

  /*
   * --------------------------------------------------
   * DEBUG
   * --------------------------------------------------
   *
   * Only genuinely important fields are warned here.
   *
   * EMD, Tender Fee and Estimated Value are optional.
   */

  const missing: string[] = [];

  if (!ministry) {
    missing.push("ministry");
  }

  if (!department) {
    missing.push("department");
  }

  if (!organisation) {
    missing.push("organisation");
  }

  if (!itemCategory) {
    missing.push("itemCategory");
  }

  /*
   * DO NOT warn for:
   *
   * estimatedValue
   * emdAmount
   * tenderFee
   *
   * These can legitimately be absent from a GeM bid.
   */

  if (missing.length > 0) {
    console.warn(
      `⚠ Missing extracted fields: ${missing.join(", ")}`
    );
  }

  /*
   * --------------------------------------------------
   * RESULT
   * --------------------------------------------------
   */

  return {
    bidNumber,

    ministry,
    department,
    organisation,
    office,

    buyerName,
    buyerEmail,
    grievanceEmail,

    openingDate,
    closingDate,

    bidValidity,

    quantity,

    itemCategory,
    searchedStrings,

    estimatedValue,
    emdAmount,
    tenderFee,

    deliveryPeriod,

    technicalSpecification:
      undefined,

    eligibilityCriteria:
      undefined,

    bidDocumentText:
      rawText,
  };
}
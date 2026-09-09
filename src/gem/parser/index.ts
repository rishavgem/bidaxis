import { cleanText } from "./clean";
import { parseBuyer } from "./buyer-details";
import { parseFinancial } from "./financial";

export function parseTender(raw: string) {
  const text = cleanText(raw);

  return {
    ...parseBid(text),
    ...parseBuyer(text),
    ...parseFinancial(text),
    bidDocumentText: text,
  };
}

function parseBid(text: string) {
  const bidNumber =
    text.match(
      /Bid Number\s*:\s*([A-Z0-9/.-]+)/i
    )?.[1]?.trim() ?? null;

  const ministry =
    text.match(
      /Ministry\/State Name\s*([^\n]+)/i
    )?.[1]?.trim() ?? null;

  const department =
    text.match(
      /Department Name\s*([^\n]+)/i
    )?.[1]?.trim() ?? null;

  const organisation =
    text.match(
      /Organisation Name\s*([^\n]+)/i
    )?.[1]?.trim() ?? null;

  const office =
    text.match(
      /Office Name\s*([^\n]+)/i
    )?.[1]?.trim() ?? null;

  const quantityMatch =
    text.match(
      /Total Quantity\s*(\d+)/i
    );

  const quantity = quantityMatch
    ? Number(quantityMatch[1])
    : null;

  const itemCategory =
    text.match(
      /Item Category\s*([\s\S]*?)GeMARPTS/i
    )?.[1]
      ?.replace(/\s+/g, " ")
      .trim() ?? null;

  const openingDate =
    text.match(
      /Bid Opening\s*Date\/Time\s*(\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}:\d{2})/i
    )?.[1] ?? null;

  const closingDate =
    text.match(
      /Bid End Date\/Time\s*(\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}:\d{2})/i
    )?.[1] ?? null;

  const bidValidity =
    text.match(
      /Bid Offer\s*Validity\s*\(From End Date\)\s*(\d+)\s*\(Days\)/i
    )?.[1] ?? null;

  const deliveryPeriod =
    text.match(
      /Delivery\s*Days\s*(\d+)/i
    )?.[1] ?? null;

  return {
    bidNumber,
    ministry,
    department,
    organisation,
    office,
    quantity,
    itemCategory,
    openingDate,
    closingDate,
    bidValidity,
    deliveryPeriod,
  };
}
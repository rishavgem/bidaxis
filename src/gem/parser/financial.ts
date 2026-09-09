function extractNumber(value: string | null | undefined): string | null {
  if (!value) return null;

  const match = value.match(/([\d,]+(?:\.\d+)?)/);

  return match?.[1]?.replace(/,/g, "") ?? null;
}

export function parseFinancial(text: string) {
  const estimatedValue =
    text.match(
      /Estimated\s+Bid\s+Value\s*[:\-]?\s*([\d,]+(?:\.\d+)?)/i
    )?.[1] ?? null;

  const emdRequired =
    text.match(
      /EMD\s+Detail[\s\S]{0,100}?Required\s*(Yes|No)/i
    )?.[1] ?? null;

  const tenderFee =
    text.match(
      /Tender\s+Fee[\s\S]{0,100}?([\d,]+(?:\.\d+)?)/i
    )?.[1] ?? null;

  return {
    estimatedValue: extractNumber(estimatedValue),

    emdAmount:
      emdRequired?.toLowerCase() === "no"
        ? null
        : null,

    tenderFee: extractNumber(tenderFee),
  };
}
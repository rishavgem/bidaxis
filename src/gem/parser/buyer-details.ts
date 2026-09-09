export function parseBuyer(text: string) {
  const emails =
    text.match(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
    ) || [];

  const buyerMatch = text.match(
    /Buyer Email id\s*:\s*([^\s]+)/i
  );

  const grievanceMatch = text.match(
    /HOD Email id\s*:\s*([^\s]+)/i
  );

  return {
    buyerEmail:
      buyerMatch?.[1] ??
      emails.find((email) =>
        email.toLowerCase().includes("gembuyer")
      ) ??
      null,

    grievanceEmail:
      grievanceMatch?.[1] ??
      emails.find(
        (email) =>
          !email.toLowerCase().includes("gembuyer")
      ) ??
      null,
  };
}
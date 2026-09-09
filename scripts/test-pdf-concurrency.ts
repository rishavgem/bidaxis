import {
  getBidPDF,
  closePDFBrowser,
} from "../src/gem/pdf";

const ids = [
  9805376,
  9805309,
  9805116,
  9799376,
  9695828,
  9801189,
  9805388,
  9716827,
  9805474,
  9803409,
];

async function main() {
  console.log("START TEST");

  const results = await Promise.all(
    ids.map(async (id) => {
      const pdf = await getBidPDF(id);
      return { id, bytes: pdf.length };
    })
  );

  console.log("RESULTS");
  console.table(results);
}

main()
  .catch((err) => {
    console.error("TEST FAILED:", err);
  })
  .finally(async () => {
    await closePDFBrowser();
    console.log("DONE");
  });

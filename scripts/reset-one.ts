import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.tender.update({
    where: {
      tenderNumber: "GEM/2026/B/7714532",
    },
    data: {
      pdfExtracted: false,
    },
  });

  console.log("Reset done.");
}

main().finally(async () => {
  await prisma.$disconnect();
});
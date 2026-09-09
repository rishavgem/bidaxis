import { prisma } from "../src/lib/prisma";

async function main() {
  const tender = await prisma.tender.findFirst({
    select: {
      tenderNumber: true,
      title: true,

      ministry: true,
      department: true,
      organisation: true,
      office: true,

      buyerEmail: true,
      grievanceEmail: true,

      quantity: true,

      emdAmount: true,

      bidValidity: true,

      itemCategory: true,

      pdfExtracted: true,
    },
  });

  console.dir(tender, {
    depth: null,
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
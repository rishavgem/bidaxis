import { prisma } from "../src/lib/prisma";

async function main() {
  const total = await prisma.tender.count();

  const extracted = await prisma.tender.count({
    where: {
      pdfExtracted: true,
    },
  });

  const pending = await prisma.tender.count({
    where: {
      pdfExtracted: false,
    },
  });

  console.log({
    total,
    extracted,
    pending,
  });
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
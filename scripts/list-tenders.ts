// scripts/list-tenders.ts

import { prisma } from "../src/lib/prisma";

async function main() {
  const tenders = await prisma.tender.findMany({
    select: {
      tenderNumber: true,
      gemId: true,
      title: true,
    },
    take: 10,
  });

  console.table(tenders);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
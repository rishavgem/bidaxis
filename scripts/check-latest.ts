import { prisma } from "../src/lib/prisma";

async function main() {
  const tenders = await prisma.tender.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      tenderNumber: true,
      title: true,
      createdAt: true,
    },
  });

  console.table(tenders);
}

main();
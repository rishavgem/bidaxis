import { prisma } from "../src/lib/prisma";

async function main() {
  const count = await prisma.tender.count();
  console.log("Tender Count:", count);
}

main()
  .then(() => process.exit(0))
  .catch(console.error);
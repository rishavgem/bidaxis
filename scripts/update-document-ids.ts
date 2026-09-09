import { crawlDocumentIds } from "../src/gem/documentCrawler";

async function main() {
  await crawlDocumentIds();
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
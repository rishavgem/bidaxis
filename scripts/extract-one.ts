import { extractBid } from "../src/gem/extractor";

async function main() {
  const parsed = await extractBid(9541990);

  console.log(parsed);
}

main();
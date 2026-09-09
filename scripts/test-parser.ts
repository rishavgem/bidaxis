import { extractBid } from "../src/gem/extractor";

async function main() {
  const data = await extractBid(9541990);

  console.log(data);
}

main();
import { fetchTenderList } from "../src/gem/client";

async function hasData(page: number) {
  const result = await fetchTenderList(page);
  return result.docs.length > 0;
}

async function main() {
  let low = 1;
  let high = 10000; // increase if needed

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);

    console.log(`Checking page ${mid}...`);

    if (await hasData(mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  console.log("\n========================");
  console.log(`Last page: ${low}`);
  console.log(`Approx tenders: ${low * 10}`);
  console.log("========================");
}

main().catch(console.error);
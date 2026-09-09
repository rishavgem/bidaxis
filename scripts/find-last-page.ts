import { fetchTenderList } from "../src/gem/client";

async function main() {
  let page = 1;

  while (true) {
    const result = await fetchTenderList(page);

    console.log(`Page ${page}: ${result.docs.length} tenders`);

    if (result.docs.length === 0) {
      console.log("\n=======================");
      console.log(`Last page is ${page - 1}`);
      console.log("=======================");
      break;
    }

    page++;
  }
}

main().catch(console.error);
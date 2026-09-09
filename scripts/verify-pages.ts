import { fetchTenderList } from "../src/gem/client";

async function main() {
  const seen = new Set<number>();

  for (let page = 1; page <= 20; page++) {
    const result = await fetchTenderList(page);

    console.log(`Page ${page} -> ${result.docs.length} tenders`);

    for (const doc of result.docs) {
      const id = Number(doc.id);

      if (seen.has(id)) {
        console.log("❌ Duplicate:", id);
      }

      seen.add(id);
    }
  }

  console.log("\n======================");
  console.log("Unique:", seen.size);
  console.log("======================");
}

main().catch(console.error);
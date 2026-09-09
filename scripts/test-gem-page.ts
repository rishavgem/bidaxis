// scripts/test-gem-page.ts
import { fetchTenderList } from "../src/gem/client";

async function main() {
  const page = 1788;

  const result = await fetchTenderList(page);

  console.log("Page:", page);
  console.log("Docs:", result.docs?.length ?? 0);

  for (const doc of result.docs ?? []) {
    console.log(
      doc.id,
      doc.b_bid_number?.[0] ?? null
    );
  }
}

main().catch(console.error);
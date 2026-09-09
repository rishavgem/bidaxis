import { fetchTenderList } from "../src/gem/client";

async function main() {
  const result = await fetchTenderList(1);

  for (const doc of result.docs) {
    console.log({
      tender: doc.b_bid_number?.[0],
      status: doc.b_status?.[0],
      buyerStatus: doc.b_buyer_status?.[0],
      bidType: doc.b_bid_type?.[0],
      gemId: doc.id,
    });
  }
}

main();
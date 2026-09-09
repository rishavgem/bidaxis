import { fetchTenderList } from "../src/gem/client";

async function main() {
  const page1 = await fetchTenderList(1);
  const page2 = await fetchTenderList(2);
  const page3 = await fetchTenderList(3);

  console.log("\n========== PAGE 1 ==========");
  page1.docs.forEach((d: any, i: number) =>
    console.log(i + 1, d.b_bid_number?.[0], d.id)
  );

  console.log("\n========== PAGE 2 ==========");
  page2.docs.forEach((d: any, i: number) =>
    console.log(i + 1, d.b_bid_number?.[0], d.id)
  );

  console.log("\n========== PAGE 3 ==========");
  page3.docs.forEach((d: any, i: number) =>
    console.log(i + 1, d.b_bid_number?.[0], d.id)
  );
}

main();
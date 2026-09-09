import { ImportedTender } from "./types";

export async function importCPPP(): Promise<ImportedTender[]> {
  console.log("Importing CPPP tenders...");

  // Sample data (replace later with live scraping/API)
  return [
    {
      tenderId: "CPPP-1001",
      title: "Supply of Electrical Equipment",
      department: "CPWD",
      category: "Electrical",
      location: "Delhi",
      closingDate: new Date("2026-08-15"),
      estimatedValue: "₹50,00,000",
      source: "CPPP",
      sourceUrl: "https://eprocure.gov.in",
    },
    {
      tenderId: "CPPP-1002",
      title: "Road Construction Work",
      department: "NHAI",
      category: "Civil",
      location: "Lucknow",
      closingDate: new Date("2026-08-18"),
      estimatedValue: "₹2,50,00,000",
      source: "CPPP",
      sourceUrl: "https://eprocure.gov.in",
    },
  ];
}
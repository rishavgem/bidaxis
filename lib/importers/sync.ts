import { prisma } from "@/lib/prisma";
import { ImportedTender } from "./types";

export async function syncTenders(
  tenders: ImportedTender[]
) {
  let imported = 0;
  let updated = 0;
  let failed = 0;

  for (const tender of tenders) {
    try {
      const existing = await prisma.tender.findUnique({
        where: {
          tenderId: tender.tenderId,
        },
      });

      if (existing) {
        await prisma.tender.update({
          where: {
            tenderId: tender.tenderId,
          },
          data: {
            title: tender.title,
            department: tender.department,
            category: tender.category,
            location: tender.location,
            closingDate: tender.closingDate,
            estimatedValue: tender.estimatedValue,
            source: tender.source,
            sourceUrl: tender.sourceUrl,
            status: "ACTIVE",
          },
        });

        updated++;
      } else {
        await prisma.tender.create({
          data: {
            tenderId: tender.tenderId,
            title: tender.title,
            department: tender.department,
            category: tender.category,
            location: tender.location,
            closingDate: tender.closingDate,
            estimatedValue: tender.estimatedValue,
            source: tender.source,
            sourceUrl: tender.sourceUrl,
            status: "ACTIVE",
          },
        });

        imported++;
      }
    } catch (error) {
      console.error(
        "Sync failed:",
        tender.tenderId,
        error
      );

      failed++;
    }
  }

  return {
    imported,
    updated,
    failed,
    total: tenders.length,
  };
}
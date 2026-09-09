import { prisma } from "@/lib/prisma";

export type ImportResult = {
  imported: number;
  updated: number;
  failed: number;
};

export async function runImport(
  source: string,
  importer: () => Promise<ImportResult>
) {
  const started = Date.now();

  const log = await prisma.importLog.create({
    data: {
      source,
      status: "RUNNING",
    },
  });

  try {
    const result = await importer();

    const duration = Math.floor((Date.now() - started) / 1000);

    await prisma.importLog.update({
      where: {
        id: log.id,
      },
      data: {
        status: "SUCCESS",
        imported: result.imported,
        updated: result.updated,
        failed: result.failed,
        duration,
        finishedAt: new Date(),
      },
    });

    return result;
  } catch (error) {
    const duration = Math.floor((Date.now() - started) / 1000);

    await prisma.importLog.update({
      where: {
        id: log.id,
      },
      data: {
        status: "FAILED",
        duration,
        finishedAt: new Date(),
        message: String(error),
      },
    });

    throw error;
  }
}

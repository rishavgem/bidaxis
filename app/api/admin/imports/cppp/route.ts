import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { importCPPP } from "@/lib/importers/cppp";
import { syncTenders } from "@/lib/importers/sync";

export async function GET() {
  return NextResponse.json({
    message: "CPPP API is working!",
  });
}

export async function POST() {
  const log = await prisma.importLog.create({
    data: {
      source: "CPPP",
      status: "RUNNING",
    },
  });

  try {
    const tenders = await importCPPP();

    const result = await syncTenders(tenders);

    await prisma.importLog.update({
      where: {
        id: log.id,
      },
      data: {
        imported: result.imported,
        updated: result.updated,
        failed: 0,
        status: "SUCCESS",
        finishedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error(error);

    await prisma.importLog.update({
      where: {
        id: log.id,
      },
      data: {
        status: "FAILED",
        finishedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        success: false,
        error: "Unable to import CPPP tenders",
      },
      {
        status: 500,
      }
    );
  }
}
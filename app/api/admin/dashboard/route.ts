import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      totalUsers,
      totalTenders,
      totalSavedTenders,
      totalAlerts,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.tender.count(),
      prisma.savedTender.count(),
      prisma.tenderAlert.count(),
    ]);

    return NextResponse.json({
      totalUsers,
      totalTenders,
      totalSavedTenders,
      totalAlerts,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to load dashboard data" },
      { status: 500 }
    );
  }
}
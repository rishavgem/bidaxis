import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const totalTenders = await prisma.tender.count();

    const savedTenders = await prisma.savedTender.count({
      where: {
        userId: user.id,
      },
    });

    const today = new Date();

    const next7Days = new Date();
    next7Days.setDate(today.getDate() + 7);

    const closingSoon = await prisma.tender.count({
      where: {
        closingDate: {
          gte: today,
          lte: next7Days,
        },
      },
    });

    return NextResponse.json({
      totalTenders,
      savedTenders,
      closingSoon,
      memberSince: user.createdAt,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to load dashboard" },
      { status: 500 }
    );
  }
}
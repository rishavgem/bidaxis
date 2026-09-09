import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 }
      );
    }

    const savedTenders = await prisma.savedTender.findMany({
      where: {
        userId: user.id,
      },
      include: {
        tender: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(savedTenders);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch saved tenders" },
      { status: 500 }
    );
  }
}
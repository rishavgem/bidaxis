import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/getUser";

// Get all alerts
export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 }
      );
    }

    const alerts = await prisma.tenderAlert.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(alerts);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch alerts" },
      { status: 500 }
    );
  }
}

// Create a new alert
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 }
      );
    }

    const {
      keyword,
      category,
      department,
      location,
      emailEnabled,
    } = await req.json();

    const alert = await prisma.tenderAlert.create({
      data: {
        keyword,
        category,
        department,
        location,
        emailEnabled,
        userId: user.id,
      },
    });

    return NextResponse.json(alert);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create alert" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/getUser";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 }
      );
    }

    const { tenderId } = await req.json();

    if (!tenderId) {
      return NextResponse.json(
        { error: "Tender ID is required" },
        { status: 400 }
      );
    }

    const existing = await prisma.savedTender.findFirst({
      where: {
        userId: user.id,
        tenderId,
      },
    });

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "Tender already saved",
      });
    }

    await prisma.savedTender.create({
      data: {
        userId: user.id,
        tenderId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Tender saved successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to save tender" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 }
      );
    }

    const { tenderId } = await req.json();

    if (!tenderId) {
      return NextResponse.json(
        { error: "Tender ID is required" },
        { status: 400 }
      );
    }

    const deleted = await prisma.savedTender.deleteMany({
      where: {
        userId: user.id,
        tenderId,
      },
    });

    if (deleted.count === 0) {
      return NextResponse.json(
        { error: "Saved tender not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Tender removed successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to remove tender" },
      { status: 500 }
    );
  }
}
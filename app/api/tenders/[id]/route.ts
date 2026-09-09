import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await params;

    const tender = await prisma.tender.findUnique({
      where: {
        tenderId: id,
      },
    });

    if (!tender) {
      return NextResponse.json(
        {
          error: "Tender not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(tender);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch tender",
      },
      {
        status: 500,
      }
    );
  }
}
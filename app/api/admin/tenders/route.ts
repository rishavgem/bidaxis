import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const tenders = await prisma.tender.findMany();

    return NextResponse.json(tenders);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch tenders" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const tender = await prisma.tender.create({
      data: {
        tenderId: body.tenderId,
        title: body.title,
        department: body.department,
        category: body.category,
        location: body.location,
        closingDate: new Date(body.closingDate),
        estimatedValue: body.estimatedValue || null,
      },
    });

    return NextResponse.json(tender);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create tender" },
      { status: 500 }
    );
  }
}
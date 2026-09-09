import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const tender = await prisma.tender.findUnique({
      where: {
        id,
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

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const tender = await prisma.tender.update({
      where: {
        id,
      },
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
      {
        error: "Unable to update tender",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.tender.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to delete tender",
      },
      {
        status: 500,
      }
    );
  }
}
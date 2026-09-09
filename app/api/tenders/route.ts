import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const keyword = searchParams.get("keyword") || "";
    const category = searchParams.get("category") || "";
    const department = searchParams.get("department") || "";
    const location = searchParams.get("location") || "";
    const sort = searchParams.get("sort") || "closing";

    const tenders = await prisma.tender.findMany({
      where: {
        AND: [
          keyword
            ? {
                OR: [
                  {
                    title: {
                      contains: keyword,
                      mode: "insensitive",
                    },
                  },
                  {
                    tenderId: {
                      contains: keyword,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {},

          category
            ? {
                category: {
                  equals: category,
                  mode: "insensitive",
                },
              }
            : {},

          department
            ? {
                department: {
                  contains: department,
                  mode: "insensitive",
                },
              }
            : {},

          location
            ? {
                location: {
                  contains: location,
                  mode: "insensitive",
                },
              }
            : {},
        ],
      },

      orderBy:
        sort === "latest"
          ? {
              closingDate: "desc",
            }
          : {
              closingDate: "asc",
            },
    });

    return NextResponse.json(tenders);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch tenders",
      },
      {
        status: 500,
      }
    );
  }
}
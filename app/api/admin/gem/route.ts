import { NextResponse } from "next/server";
import { importGemTenders } from "@/src/gem/importer";

export async function GET() {
  try {
    await importGemTenders();

    return NextResponse.json({
      success: true,
      message: "GeM import completed successfully",
    });
  } catch (error) {
    console.error("GeM Import Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Import failed",
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server"
import {
  APPLICATION_PDF_FILENAME,
  buildApplicationPdf,
  buildFilledApplicationPdf,
  filledApplicationPdfFilename,
} from "@/lib/application-pdf"
import { applicationFormSchema, createApplicationReference } from "@/lib/application-schema"

export const runtime = "nodejs"

/** Blank printable application form. */
export async function GET() {
  try {
    const pdf = buildApplicationPdf()
    return new NextResponse(new Uint8Array(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${APPLICATION_PDF_FILENAME}"`,
        "Cache-Control": "public, max-age=86400",
      },
    })
  } catch (err) {
    console.error("Application PDF error:", err)
    return NextResponse.json({ error: "Could not generate application PDF." }, { status: 500 })
  }
}

/**
 * Filled application PDF for a parent who just submitted online —
 * so they can keep a copy or email it to the school as a backup.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const reference =
      String(body.applicationReference ?? body.reference ?? "").trim() || createApplicationReference()

    const parsed = applicationFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid application data for PDF", details: parsed.error.issues },
        { status: 400 }
      )
    }

    const pdf = buildFilledApplicationPdf(parsed.data, reference)
    const filename = filledApplicationPdfFilename(reference)

    return new NextResponse(new Uint8Array(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    })
  } catch (err) {
    console.error("Filled application PDF error:", err)
    return NextResponse.json({ error: "Could not generate your filled application PDF." }, { status: 500 })
  }
}

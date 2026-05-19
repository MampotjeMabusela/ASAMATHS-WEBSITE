import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import {
  buildContactEmailContent,
  getContactFromAddress,
  getContactInbox,
  isContactEmailConfigured,
} from "@/lib/contact-email"
import { SCHOOL_INFO } from "@/lib/constants"

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  subject: z.string().min(3),
  message: z.string().min(10),
  gradeInterested: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    if (!isContactEmailConfigured()) {
      console.error(
        "Contact form: missing RESEND_API_KEY and/or CONTACT_FORM_FROM_EMAIL (verified sender in Resend)"
      )
      return NextResponse.json(
        {
          error: `Email service is not configured yet. Please email us directly at ${SCHOOL_INFO.email}.`,
          fallbackEmail: SCHOOL_INFO.email,
        },
        { status: 503 }
      )
    }

    const body = await request.json()
    const data = contactSchema.parse(body)
    const inbox = getContactInbox()
    const from = getContactFromAddress()!
    const { subject, text, html } = buildContactEmailContent(data)

    const resend = new Resend(process.env.RESEND_API_KEY!)
    const { error } = await resend.emails.send({
      from,
      to: [inbox],
      replyTo: data.email,
      subject,
      text,
      html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          error: `We could not send your message. Please email ${SCHOOL_INFO.email} or call ${SCHOOL_INFO.phone}.`,
          fallbackEmail: SCHOOL_INFO.email,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Your inquiry was sent to ${inbox}. We will reply during school hours.`,
    })
  } catch (err) {
    console.error("Contact form error:", err)
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: err.issues },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

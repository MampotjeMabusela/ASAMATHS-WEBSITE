import { SCHOOL_INFO } from "@/lib/constants"

/** Inbox for all website contact / inquiry form submissions. */
export function getContactInbox(): string {
  const override = process.env.CONTACT_FORM_TO_EMAIL?.trim()
  return override || SCHOOL_INFO.email
}

export function getContactFromAddress(): string | null {
  const from = process.env.CONTACT_FORM_FROM_EMAIL?.trim()
  if (!from) return null
  return `Asamaths Website <${from}>`
}

export function isContactEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim() && getContactFromAddress())
}

export type ContactSubmission = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  gradeInterested?: string
}

export function buildContactEmailContent(data: ContactSubmission) {
  const grade = data.gradeInterested?.trim() || "Not specified"
  const text = [
    "New website inquiry",
    "====================",
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Subject: ${data.subject}`,
    `Grade interested: ${grade}`,
    "",
    "Message:",
    data.message,
  ].join("\n")

  const html = `
    <h2>New website inquiry</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>
      <tr><td><strong>Subject</strong></td><td>${escapeHtml(data.subject)}</td></tr>
      <tr><td><strong>Grade</strong></td><td>${escapeHtml(grade)}</td></tr>
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  `.trim()

  const subject = `Website Inquiry: ${data.subject} — ${data.firstName} ${data.lastName}`

  return { subject, text, html }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

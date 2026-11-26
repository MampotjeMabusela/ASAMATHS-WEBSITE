import { buildApplicationFormData, buildApplicationJsonPayload } from "@/lib/web3forms-application"
import {
  WEB3FORMS_SUBMIT_URL,
  getWeb3FormsAccessKey,
  getWeb3FormsPublicAccessKey,
} from "@/lib/web3forms"
import type { ApplicationFiles, ApplicationFormValues } from "@/types/application"

type Web3FormsResponse = {
  success?: boolean
  message?: string
  body?: { message?: string }
}

async function parseWeb3FormsResponse(res: Response) {
  const json = (await res.json().catch(() => ({}))) as Web3FormsResponse
  const apiMessage = json.message ?? json.body?.message
  if (res.ok && json.success) {
    return { ok: true as const }
  }
  if (res.status === 403) {
    return {
      ok: false as const,
      status: 403,
      detail:
        apiMessage ||
        "Server email delivery is blocked on the free email plan. Use the browser form (public Web3Forms key).",
    }
  }
  return {
    ok: false as const,
    status: res.status,
    detail: apiMessage || "Could not send your application. Please try again.",
  }
}

/**
 * Server-side application email (fallback only).
 *
 * Web3Forms Free requires browser-side submit and does not support attachments.
 * Prefer client submit via submitApplicationToWeb3FormsClient. Set
 * WEB3FORMS_ALLOW_ATTACHMENTS=true only on a Pro plan with IP safelist.
 */
export async function submitApplicationWithPdf(
  data: ApplicationFormValues,
  files: ApplicationFiles,
  reference: string
): Promise<{ ok: true } | { ok: false; status?: number; detail: string }> {
  const accessKey = getWeb3FormsAccessKey() || getWeb3FormsPublicAccessKey()
  if (!accessKey) {
    return { ok: false, detail: "Application form is not configured yet." }
  }

  const allowAttachments = process.env.WEB3FORMS_ALLOW_ATTACHMENTS === "true"

  try {
    if (allowAttachments) {
      try {
        const { buildFilledApplicationPdf, filledApplicationPdfFilename } = await import(
          "@/lib/application-pdf"
        )
        const pdfBuffer = buildFilledApplicationPdf(data, reference, files)
        const pdfBlob = new Blob([new Uint8Array(pdfBuffer)], { type: "application/pdf" })
        const formData = buildApplicationFormData(data, files, accessKey, reference, {
          includeAttachments: true,
          pdfBlob,
          pdfFilename: filledApplicationPdfFilename(reference),
        })
        const res = await fetch(WEB3FORMS_SUBMIT_URL, {
          method: "POST",
          body: formData,
        })
        return parseWeb3FormsResponse(res)
      } catch (pdfErr) {
        console.warn("Application PDF attachment skipped; sending JSON body only:", pdfErr)
      }
    }

    const res = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(buildApplicationJsonPayload(data, accessKey, reference)),
    })
    return parseWeb3FormsResponse(res)
  } catch (err) {
    console.error("Application email error:", err)
    return {
      ok: false,
      detail: "Could not reach the email service. Please try again or email the school directly.",
    }
  }
}

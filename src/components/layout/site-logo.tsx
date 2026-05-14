"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { BRAND } from "@/lib/constants"

type SiteLogoVariant = "header" | "footer"

const logoSrcWithCache = `${BRAND.logoSrc}?v=${BRAND.logoAssetVersion}`

/**
 * Crest sits directly on the header/footer — no card, border, or shadow.
 * Header & footer marks are ~25% larger than original baseline; corner trim on the `<img>` only (`rounded-2xl`).
 */
const imageShell: Record<
  SiteLogoVariant,
  { wrap: string; img: string; sizes: string; quality: number; priority?: boolean }
> = {
  header: {
    wrap: "relative h-[3.75rem] w-[165px] shrink-0 sm:h-[3.9rem] sm:w-[185px] md:h-[4.375rem] md:w-[198px]",
    img: "object-contain object-center rounded-2xl",
    sizes: "(max-width:768px) 250px, 300px",
    quality: 95,
    priority: true,
  },
  footer: {
    wrap: "relative h-[4.53rem] w-[190px] shrink-0 sm:h-[4.375rem] sm:w-[212px]",
    img: "object-contain object-center rounded-2xl",
    sizes: "(max-width:768px) 275px, 320px",
    quality: 95,
  },
}

const placeholderShell: Record<SiteLogoVariant, string> = {
  header:
    "flex h-[3.75rem] w-[165px] shrink-0 flex-col items-center justify-center rounded-2xl sm:h-[3.9rem] sm:w-[185px] md:h-[4.375rem] md:w-[198px]",
  footer:
    "flex h-[4.53rem] w-[190px] shrink-0 flex-col items-center justify-center rounded-2xl sm:h-[4.375rem] sm:w-[212px]",
}

export function SiteLogo({
  variant,
  className,
}: {
  variant: SiteLogoVariant
  className?: string
}) {
  if (BRAND.showLogoPlaceholder) {
    return (
      <div
        className={cn(
          placeholderShell[variant],
          variant === "header" && "border border-dashed border-gray-300/70 text-primary-700/75",
          variant === "footer" && "border border-dashed border-white/30 text-primary-200/90",
          className
        )}
        role="img"
        aria-label="School crest — final artwork will appear here"
      >
        <span
          className={cn(
            "max-w-[11rem] text-center text-[0.625rem] font-semibold uppercase leading-snug tracking-[0.14em]",
            variant === "header" && "text-primary-700/80",
            variant === "footer" && "text-primary-200/95"
          )}
        >
          Crest
          <span className="mt-0.5 block font-normal normal-case tracking-normal text-[0.55rem] opacity-80">
            placeholder
          </span>
        </span>
      </div>
    )
  }

  const img = imageShell[variant]
  return (
    <div className={cn(img.wrap, className)}>
      <Image
        src={logoSrcWithCache}
        alt={BRAND.logoAlt}
        fill
        className={img.img}
        sizes={img.sizes}
        quality={img.quality}
        priority={img.priority}
      />
    </div>
  )
}

import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { STUDENT_PHOTO_BLUR_DATA_URL } from "@/lib/student-photo-blur"

type PageBannerVariant = "hero" | "wide" | "compact"

export type PageBannerProps = {
  src: string
  alt: string
  headline: string
  subline?: string
  badge?: string
  variant?: PageBannerVariant
  objectPosition?: string
  /** Use contain for logos or artwork with padding; default is cover for photos. */
  imageFit?: "cover" | "contain"
  className?: string
  priority?: boolean
}

const variantStyles: Record<PageBannerVariant, string> = {
  hero: "aspect-[21/10] min-h-[200px] md:min-h-[260px] lg:min-h-[300px]",
  wide: "aspect-[21/9] min-h-[180px] md:min-h-[220px]",
  compact: "aspect-[21/11] min-h-[160px] sm:min-h-[180px]",
}

export function PageBanner({
  src,
  alt,
  headline,
  subline,
  badge,
  variant = "wide",
  objectPosition = "center",
  imageFit = "cover",
  className,
  priority = false,
}: PageBannerProps) {
  const isLogoBanner = imageFit === "contain"
  const gradient = isLogoBanner
    ? "from-primary-950/55 via-primary-900/15 to-transparent"
    : variant === "compact"
      ? "from-primary-950/70 via-primary-900/35 to-primary-800/20"
      : "from-primary-950/80 via-primary-900/45 to-primary-700/25"

  return (
    <BannerFrame variant={variant} className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={STUDENT_PHOTO_BLUR_DATA_URL}
        className={cn(
          imageFit === "contain" ? "object-contain bg-white p-6 sm:p-10" : "object-cover",
        )}
        style={{ objectPosition }}
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, white 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden
      />
      <div className={cn("absolute inset-0 bg-gradient-to-r", gradient)} />
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-8">
        {badge ? (
          <span className="mb-3 inline-flex w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {badge}
          </span>
        ) : null}
        <p className="max-w-3xl font-display text-xl font-bold leading-tight text-white drop-shadow-md sm:text-2xl md:text-3xl">
          {headline}
        </p>
        {subline ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-100/95 sm:text-base">{subline}</p>
        ) : null}
      </div>
    </BannerFrame>
  )
}

function BannerFrame({
  variant,
  className,
  children,
}: {
  variant: PageBannerVariant
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-primary-200/80",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Printed address and map search string — keep in sync everywhere (footer, contact, fees, maps). */
export const SCHOOL_MAP_ADDRESS = "1287, 7th Road, Winterveldt, Pretoria, Pretoria" as const

export const SCHOOL_INFO = {
  name: "Asamaths Institute Of Learning – Pretoria",
  shortName: "Asamaths Institute",
  address: SCHOOL_MAP_ADDRESS,
  phone: "+27 12 725 8044",
  rawPhone: "+27127258044",
  phoneAlt: "+27 11 925 8074",
  rawPhoneAlt: "+27119258074",
  whatsapp: "+27 61 530 9416",
  /** Digits only — for https://wa.me/ links */
  rawWhatsApp: "27615309416",
  email: "asamathsinstituteoflearning@gmail.com",
  officeHours: "Mon–Fri: 06:45 – 16:00",
  officeHoursLong: "Monday – Friday: 06:45 – 16:00",
  principal: "Makeche Brighton",
  principalYear: 2023,
  natEmis: "700400979",
  phase: "Combined School",
  sector: "Independent",
  specialisation: "Ordinary",
  province: "Gauteng",
  city: "Pretoria",
  suburb: "Winterveldt",
  neighbourhood: "Winterveldt",
  totalLearners: 1017,
  totalEducators: 35,
  studentTeacherRatio: "29:1",
  surveyYear: 2026,
  /**
   * OSM embed pin (residential “7th Road”, Tshwane Ward 24 — OpenStreetMap way centroid).
   * For building-level accuracy in the iframe, set `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` so the map uses Google’s embed with `q` = `address`.
   */
  coordinates: { lat: -25.4600697, lng: 28.0352826 },
  /** Google Maps search for the exact `address` (authoritative for directions). */
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL_MAP_ADDRESS)}`,
}

/** Official crest — file: /public/images/logo-official.png */
export const BRAND = {
  logoSrc: "/images/logo-official.png",
  /** Bust browser/CDN cache when the crest file is replaced. */
  logoAssetVersion: "9",
  logoAlt:
    "Asamath's Institute of Learning — official crest: Knowledge, Wisdom, Humanity",
  motto: "Knowledge · Wisdom · Humanity",
  /** When true, header/footer show a text placeholder instead of the crest image. */
  showLogoPlaceholder: false,
}

export type NavLinkItem = {
  label: string
  href: string
  highlight?: boolean
}

export const NAV_HOME: NavLinkItem = { label: "Home", href: "/" }

export const NAV_LEARN: NavLinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Subjects", href: "/subjects" },
  { label: "Gallery", href: "/gallery" },
]

export const NAV_JOIN: NavLinkItem[] = [
  { label: "Admissions", href: "/admissions", highlight: true },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
]

export const NAV_CONDUCT: NavLinkItem = { label: "Code of Conduct", href: "/code-of-conduct" }

/** Flat list for footer and legacy consumers */
export const NAV_LINKS: NavLinkItem[] = [
  NAV_HOME,
  ...NAV_LEARN,
  ...NAV_JOIN,
  NAV_CONDUCT,
]

/**
 * Optional link to a sibling campus (duplicate site). Set in `.env.local` / Vercel:
 * `NEXT_PUBLIC_SISTER_SCHOOL_URL` — full URL, e.g. https://other-campus.vercel.app
 * `NEXT_PUBLIC_SISTER_SCHOOL_LABEL` — button text (default: "Our other campus")
 */
export const SISTER_SCHOOL_LINK = {
  url: (process.env.NEXT_PUBLIC_SISTER_SCHOOL_URL ?? "").trim(),
  label: (process.env.NEXT_PUBLIC_SISTER_SCHOOL_LABEL ?? "Thembisa campus").trim() || "Thembisa campus",
} as const

export function hasSisterSchoolLink(): boolean {
  return SISTER_SCHOOL_LINK.url.length > 0
}

export const VALUES = [
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in academic achievement and personal development.",
    icon: "Trophy",
  },
  {
    title: "Discipline",
    description:
      "Fostering self-discipline and respect through our structured uniform policy and code of conduct.",
    icon: "Shield",
  },
  {
    title: "Community",
    description: "Building strong bonds between learners, educators, and the Winterveldt community.",
    icon: "Users",
  },
  {
    title: "Innovation",
    description: "Embracing modern teaching methodologies while honoring traditional values.",
    icon: "Lightbulb",
  },
]

export const TESTIMONIALS = [
  {
    name: "Nomsa M.",
    initials: "NM",
    role: "Parent",
    roleDetail: "Grade R",
    text: "Asamaths has transformed my child's educational journey. The dedicated teachers and structured environment make all the difference.",
    rating: 5,
  },
  {
    name: "Thabo N.",
    initials: "TN",
    role: "Former learner",
    roleDetail: "Alumni",
    text: "The foundation I received at Asamaths prepared me exceptionally well for high school. I'm forever grateful.",
    rating: 5,
  },
  {
    name: "Nomvula S.",
    initials: "NS",
    role: "Parent",
    roleDetail: "Grade 6",
    text: "This school is a pillar of the Winterveldt community, providing quality education to our children.",
    rating: 5,
  },
]

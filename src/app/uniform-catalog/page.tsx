import type { Metadata } from "next"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Info, ShoppingBag } from "lucide-react"
import { FadeIn } from "@/components/shared/fade-in"
import { PageIntro } from "@/components/shared/page-intro"
import { PageBanner } from "@/components/shared/page-banner"
import { CTABanner } from "@/components/sections/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SCHOOL_INFO } from "@/lib/constants"
import { TEMPORARY_VISIBILITY } from "@/lib/feature-flags"
import {
  UNIFORM_POLICY_NOTES,
  UNIFORM_PRICE_LISTS,
} from "@/lib/uniform-catalog"
import { UniformPriceListSection } from "@/components/uniform/uniform-price-list"
import { CAMPUS_PHOTOS } from "@/lib/student-photos"

export const metadata: Metadata = {
  title: "Uniform Catalog",
  description: `Official school uniform price list for ${SCHOOL_INFO.shortName} — items and prices by grade band.`,
}

export default function UniformCatalogPage() {
  if (!TEMPORARY_VISIBILITY.uniformCatalogPage) redirect("/")

  return (
    <>
      <section
        id="asa-uniform-catalog"
        className="scroll-mt-28 bg-gradient-to-br from-primary-50 to-white pb-16 pt-32"
      >
        <div className="container-custom">
          <FadeIn>
            <PageIntro
              eyebrow="Dress code"
              title="Uniform Catalog"
              subtitle="Official uniform price lists by grade band for Asamaths learners"
              breadcrumbs={[{ label: "Uniform Catalog" }]}
            />
          </FadeIn>

          <FadeIn delay={0.04}>
            <PageBanner
              src={CAMPUS_PHOTOS.friends}
              alt={`Learners in school uniform at ${SCHOOL_INFO.shortName}, ${SCHOOL_INFO.suburb}`}
              headline="Neat, proud, and ready to learn"
              subline="Our uniform reflects discipline, identity, and belonging."
              variant="compact"
              objectPosition="center 40%"
              className="mb-10"
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="mb-10 border-primary-100 bg-white/90">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="font-display text-xl">How to order</CardTitle>
                    <CardDescription className="mt-1 text-sm leading-relaxed">
                      Visit the school office during office hours ({SCHOOL_INFO.officeHours}) to
                      confirm sizes in stock, place orders, and collect uniform items. For
                      questions, call{" "}
                      <a href={`tel:${SCHOOL_INFO.rawPhone}`} className="font-medium text-primary-700 underline">
                        {SCHOOL_INFO.phone}
                      </a>{" "}
                      or email{" "}
                      <a
                        href={`mailto:${SCHOOL_INFO.email}`}
                        className="font-medium text-primary-700 underline"
                      >
                        {SCHOOL_INFO.email}
                      </a>
                      .
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </FadeIn>

          <div className="space-y-10">
            {UNIFORM_PRICE_LISTS.map((list, index) => (
              <FadeIn key={list.id} delay={0.1 + index * 0.04}>
                <UniformPriceListSection list={list} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.28}>
            <Card className="mt-10 border-amber-100 bg-amber-50/60">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden />
                  <div>
                    <CardTitle className="font-display text-lg text-amber-950">
                      Uniform policy reminders
                    </CardTitle>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-amber-900/80">
                      {UNIFORM_POLICY_NOTES.map((note) => (
                        <li key={note} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Link href="/code-of-conduct">
                  <Button variant="outline" className="gap-2 border-amber-200 bg-white hover:bg-amber-50">
                    Read the Code of Conduct
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="New to Asamaths?"
        description="View our admissions process and download the application form to join our school community."
        buttonText="Apply for Admission"
        buttonHref="/admissions"
      />
    </>
  )
}

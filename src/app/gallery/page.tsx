import type { Metadata } from "next"
import Link from "next/link"
import { FadeIn } from "@/components/shared/fade-in"
import { PageIntro } from "@/components/shared/page-intro"
import { GalleryFeatured } from "@/components/gallery/gallery-featured"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { PageBanner } from "@/components/shared/page-banner"
import {
  CAMPUS_PHOTOS,
  GALLERY_ITEMS,
  SCHOOL_TRIP_PE_GALLERY_ITEMS,
  TOP_PERFORMING_LEARNERS_GALLERY_ITEMS,
} from "@/lib/student-photos"
import { CTABanner } from "@/components/sections/cta-banner"
import { SCHOOL_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Gallery",
  description: `View photos and images from ${SCHOOL_INFO.name} in Winterveldt, Pretoria.`,
}

export default function GalleryPage() {
  return (
    <>
      <section id="asa-gallery" className="scroll-mt-28 bg-gradient-to-br from-primary-50 to-white pb-16 pt-32">
        <div className="container-custom">
          <FadeIn>
            <PageIntro
              eyebrow="Campus life"
              title="Our Gallery"
              subtitle="A glimpse into life at Asamaths Institute"
              breadcrumbs={[{ label: "Gallery" }]}
            />
          </FadeIn>

          <FadeIn delay={0.04}>
            <PageBanner
              src={CAMPUS_PHOTOS.building}
              alt={`Campus buildings and courtyard at ${SCHOOL_INFO.shortName}, ${SCHOOL_INFO.suburb}`}
              headline="Campus, classrooms, and community"
              subline="Tap any photo below to view it larger."
              variant="compact"
              objectPosition="center 45%"
              className="mb-8"
            />
          </FadeIn>

          <GalleryFeatured />

          <GalleryGrid items={GALLERY_ITEMS} />

          <FadeIn delay={0.15}>
            <div id="top-performing-learners" className="mt-14 scroll-mt-28">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">Achievements</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                  Top Performing Learners
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
                  Celebrating excellence — awards ceremony moments and Mathematics Olympiad provincial achievers.
                </p>
              </div>
              <GalleryGrid items={TOP_PERFORMING_LEARNERS_GALLERY_ITEMS} />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div id="school-trip-pe" className="mt-14 scroll-mt-28">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">Highlights</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                  School Trip To P.E
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
                  Moments from our learners&apos; and staff trip to Port Elizabeth — travel day, coastal walks, and
                  beach time.
                </p>
              </div>
              <GalleryGrid items={SCHOOL_TRIP_PE_GALLERY_ITEMS} />
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="mt-10 text-center text-gray-600">
              Want to see more of our facilities?{" "}
              <Link href="/contact" className="font-medium text-primary-600 hover:underline">
                Book a visit
              </Link>{" "}
              or send us a message.
            </p>
          </FadeIn>
        </div>
      </section>
      <CTABanner
        title="Want to See More?"
        description="Schedule a visit to tour our campus and experience the Asamaths environment firsthand."
        buttonText="Book a Visit"
        buttonHref="/contact"
      />
    </>
  )
}

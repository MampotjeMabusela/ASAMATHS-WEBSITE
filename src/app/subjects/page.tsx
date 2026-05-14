import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Info } from "lucide-react"
import { SectionHeading } from "@/components/shared/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { CTABanner } from "@/components/sections/cta-banner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SCHOOL_INFO } from "@/lib/constants"
import { STUDENT_PHOTO_BLUR_DATA_URL } from "@/lib/student-photo-blur"
import { STUDENT_PHOTOS } from "@/lib/student-photos"

export const metadata: Metadata = {
  title: "Subjects",
  description: `${SCHOOL_INFO.name} — subjects by grade from Grade R through Grade 9.`,
}

const subjectBands: { badge: string; title: string; items: readonly string[]; imageSrc: string; imageAlt: string; imageClass: string }[] = [
  {
    badge: "Grade R",
    title: "Grade R",
    items: ["Life Skills", "English", "Mathematics"],
    imageSrc: STUDENT_PHOTOS.foundation,
    imageAlt: `Foundation-phase learning at ${SCHOOL_INFO.shortName}`,
    imageClass: "object-cover object-center",
  },
  {
    badge: "Grades 1–3",
    title: "Grade 1–3",
    items: ["Life Skills", "English", "Mathematics", "Afrikaans"],
    imageSrc: STUDENT_PHOTOS.classroom,
    imageAlt: `Classroom learning for Grades 1–3 at ${SCHOOL_INFO.shortName}`,
    imageClass: "object-cover object-[center_35%]",
  },
  {
    badge: "Grades 4–6",
    title: "Grade 4–6",
    items: [
      "English",
      "Mathematics",
      "Afrikaans",
      "Social Sciences",
      "Natural Sciences",
      "Life-Skills/L.O",
    ],
    imageSrc: STUDENT_PHOTOS.mathWhiteboardStudent,
    imageAlt: `Intermediate-phase learners at ${SCHOOL_INFO.shortName}`,
    imageClass: "object-cover object-[center_35%]",
  },
  {
    badge: "Grades 7–9",
    title: "Grade 7–9",
    items: [
      "English",
      "Mathematics",
      "Afrikaans",
      "Social Sciences",
      "Natural Sciences",
      "Life-Skills/L.O",
      "EMS",
      "Creative Arts",
      "Technology",
    ],
    imageSrc: STUDENT_PHOTOS.scienceLesson,
    imageAlt: `Senior-phase science and technology learning at ${SCHOOL_INFO.shortName}`,
    imageClass: "object-cover object-[center_45%]",
  },
]

export default function SubjectsPage() {
  return (
    <>
      <section id="asa-subjects" className="scroll-mt-28 bg-gradient-to-br from-primary-50 to-white pb-16 pt-32">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              title="Subjects"
              subtitle={`Learning areas by grade at ${SCHOOL_INFO.shortName}`}
            />
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="relative mb-12 h-52 w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-primary-200 sm:h-56 md:h-64">
              <Image
                src={STUDENT_PHOTOS.classroom}
                alt={`Classroom activity across grades at ${SCHOOL_INFO.shortName}`}
                fill
                placeholder="blur"
                blurDataURL={STUDENT_PHOTO_BLUR_DATA_URL}
                className="object-cover object-[center_35%]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/75 via-primary-800/45 to-primary-600/25" />
              <p className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white drop-shadow sm:bottom-6 sm:left-6 sm:text-2xl">
                Subjects from Grade R through Grade 9
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mb-12 w-full rounded-xl border border-primary-100 bg-white/80 p-6 shadow-sm md:p-8">
              <div className="flex gap-3">
                <BookOpen className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>{SCHOOL_INFO.name}</strong> lists the subjects below by grade band. For timetables,
                    optional streams, or the latest offering, contact the school office.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    For more information about subjects offered, email us or call Asamaths Institute offices.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="mb-12 w-full space-y-6">
            {subjectBands.map((band, index) => (
              <FadeIn key={band.title} delay={0.06 + index * 0.03}>
                <Card className="border-gray-100">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={index % 2 === 1 ? "accent" : "default"}>{band.badge}</Badge>
                      <CardTitle className="text-lg sm:text-xl">{band.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-6 lg:grid-cols-2 lg:items-start">
                    <NumberedSubjectList items={band.items} />
                    <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-200">
                      <Image
                        src={band.imageSrc}
                        alt={band.imageAlt}
                        fill
                        placeholder="blur"
                        blurDataURL={STUDENT_PHOTO_BLUR_DATA_URL}
                        className={band.imageClass}
                        sizes="(max-width:1024px)100vw,50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.18}>
            <div className="mb-10 flex w-full gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 md:p-5">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
              <div className="text-sm leading-relaxed text-amber-900">
                <p className="mb-3">
                  <strong>Important:</strong> The exact timetable and subject choices may vary depending on the
                  school&apos;s resources and staffing.
                </p>
                <p>
                  If you have questions about a specific grade,{" "}
                  <Link href="/contact" className="font-medium underline hover:text-amber-950">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700">
                  Ask About Our Offering
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <CTABanner />
    </>
  )
}

function NumberedSubjectList({ items }: { items: readonly string[] }) {
  return (
    <ol className="list-decimal space-y-1.5 pl-5 text-sm text-gray-700 marker:font-semibold marker:text-primary-600 md:text-[15px]">
      {items.map((item) => (
        <li key={item} className="pl-1 leading-snug md:leading-relaxed">
          {item}
        </li>
      ))}
    </ol>
  )
}

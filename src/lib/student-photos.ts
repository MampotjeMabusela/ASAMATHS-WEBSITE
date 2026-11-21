/** Public paths for on-site student photography (see /public/images/students). */

export const STUDENT_PHOTOS = {
  hero: "/images/students/hero-primary.png",
  classroom: "/images/students/classroom-energy.png",
  reading: "/images/students/student-reading.png",
  focus: "/images/students/student-focus.png",
  smile: "/images/students/student-smile.png",
  foundation: "/images/students/foundation-sepedi.png",
  playground: "/images/students/playground.png",
  sports: "/images/students/sports-field.png",
  joy: "/images/students/students-joy.png",
  scienceLesson: "/images/students/science-lesson.png",
  studentReadingPortrait: "/images/students/student-reading-portrait.png",
  mathWhiteboardStudent: "/images/students/math-whiteboard-student.png",
  mathChalkboardLesson: "/images/students/math-chalkboard-lesson.png",
  productiveCollaborations: "/images/students/productive-collaborations.png",
  classroomCelebration: "/images/students/classroom-celebration.png",
  /** Homepage Our Core Values — top learners awards group photo */
  coreValuesAwardsGroup: "/images/gallery/top-performing-learners/tpl-01-group-awards-ceremony.jpg",
} as const

/** Bump when any public site photo is reprocessed so browsers fetch fresh files. */
export const SITE_PHOTOS_VERSION = "4k10"

export function photoSrc(path: string): string {
  const base = path.split("?")[0] ?? path
  return `${base}?v=${SITE_PHOTOS_VERSION}`
}

/** @deprecated Use photoSrc — kept for gallery imports */
export const GALLERY_PHOTOS_VERSION = SITE_PHOTOS_VERSION

export function galleryPhotoSrc(path: string): string {
  return photoSrc(path)
}

/** Campus and page-specific photography (see /public/images/campus). */
export const CAMPUS_PHOTOS = {
  friends: "/images/campus/campus-friends.png",
  courtyardWalk: "/images/campus/campus-courtyard-walk.png",
  adminOffice: "/images/campus/admin-office.png",
  building: "/images/campus/campus-building.png",
  classroomGroup: "/images/campus/classroom-group.png",
  /** Subjects page — Curriculum banner */
  curriculumPlayground: "/images/campus/curriculum-playground.png",
  literacyNotebook: "/images/campus/literacy-notebook.png",
  /** Fees page — major SA bank brands (payment context) */
  bankLogos: "/images/campus/fee-bank-logos.png",
} as const

export type GalleryItem = {
  src: string
  title: string
  caption: string
  /** Descriptive alt text: subject, activity, phase (not just “students”). */
  alt: string
}

export const CAMPUS_GALLERY_ITEMS: GalleryItem[] = [
  {
    src: CAMPUS_PHOTOS.building,
    title: "Our campus",
    caption: "Brick buildings, courtyards, and space to learn and play.",
    alt: "Exterior view of Asamaths Institute brick school buildings and paved courtyard under a clear sky.",
  },
  {
    src: CAMPUS_PHOTOS.friends,
    title: "Friendships at school",
    caption: "Learners who support and encourage one another every day.",
    alt: "Two primary learners in Asamaths tracksuit uniform smiling together in a bright classroom.",
  },
  {
    src: CAMPUS_PHOTOS.courtyardWalk,
    title: "Life on campus",
    caption: "Staff and learners moving between lessons with purpose.",
    alt: "Educator and learner walking across the school courtyard in uniform, carrying books and folders.",
  },
  {
    src: CAMPUS_PHOTOS.classroomGroup,
    title: "Focused classrooms",
    caption: "Structured lessons across the foundation and intermediate phases.",
    alt: "Group of learners in grey school sweaters seated at desks during an attentive classroom lesson.",
  },
  {
    src: CAMPUS_PHOTOS.literacyNotebook,
    title: "Literacy in action",
    caption: "Confident reading and writing in every grade.",
    alt: "Smiling learner in blue school jacket writing in an open notebook during an English lesson.",
  },
  {
    src: CAMPUS_PHOTOS.adminOffice,
    title: "Here to help",
    caption: "Our office team supports admissions, fees, and family enquiries.",
    alt: "School administrator working at a desk in the Asamaths Institute office with awards displayed nearby.",
  },
]

/** School trip to Port Elizabeth (P.E.) — see /public/images/gallery/school-trip-pe. */
export const SCHOOL_TRIP_PE_PHOTOS = {
  departureSuitcase: "/images/gallery/school-trip-pe/pe-01-departure-suitcase.jpg",
  learnerTracksuitParking: "/images/gallery/school-trip-pe/pe-02-learner-tracksuit-parking.jpg",
  learnerSuitcaseParking: "/images/gallery/school-trip-pe/pe-03-learner-suitcase-parking.jpg",
  learnerAirportOrangeSuitcase: "/images/gallery/school-trip-pe/pe-04-learner-airport-orange-suitcase.jpg",
  staffIndoorArchway: "/images/gallery/school-trip-pe/pe-05-staff-indoor-archway.jpg",
  learnerShellCoast: "/images/gallery/school-trip-pe/pe-06-learner-shell-coast.jpg",
  learnerAirportPinkLuggage: "/images/gallery/school-trip-pe/pe-07-learner-airport-pink-luggage.jpg",
  learnerCoastalWalk: "/images/gallery/school-trip-pe/pe-08-learner-coastal-walk.jpg",
  learnerSandDrawing: "/images/gallery/school-trip-pe/pe-09-learner-sand-drawing.jpg",
  learnerBeachSitting: "/images/gallery/school-trip-pe/pe-10-learner-beach-sitting.jpg",
  learnerBeachTurquoise: "/images/gallery/school-trip-pe/pe-11-learner-beach-turquoise.jpg",
  staffBeachSundress: "/images/gallery/school-trip-pe/pe-12-staff-beach-sundress.jpg",
} as const

export const SCHOOL_TRIP_PE_GALLERY_ITEMS: GalleryItem[] = [
  {
    src: SCHOOL_TRIP_PE_PHOTOS.departureSuitcase,
    title: "Ready for the journey",
    caption: "Departing for the school trip to Port Elizabeth.",
    alt: "Staff member with blue suitcase ready for the Asamaths school trip to Port Elizabeth.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerTracksuitParking,
    title: "Travel day",
    caption: "Learners in school tracksuit arriving for the trip.",
    alt: "Learner in blue and white Asamaths tracksuit standing in a sunny parking lot before the Port Elizabeth trip.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerSuitcaseParking,
    title: "Packed and ready",
    caption: "Suitcases packed for the Port Elizabeth adventure.",
    alt: "Learner in blue tracksuit with a black suitcase standing on a crosswalk during the school trip departure.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerAirportOrangeSuitcase,
    title: "At the airport",
    caption: "Checking in and boarding for Port Elizabeth.",
    alt: "Learner in blue and white school tracksuit holding an orange suitcase at the airport terminal.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.staffIndoorArchway,
    title: "Exploring P.E.",
    caption: "Staff and learners enjoying local venues on the trip.",
    alt: "Staff member posing in a wooden arched doorway during the Asamaths school trip to Port Elizabeth.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerShellCoast,
    title: "Coastal discovery",
    caption: "Finding shells along the Port Elizabeth shoreline.",
    alt: "Learner in green school shirt holding a large seashell on a coastal path with the ocean behind.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerAirportPinkLuggage,
    title: "Arriving safely",
    caption: "Happy faces at the terminal with trip luggage.",
    alt: "Smiling learner in blue and white tracksuit with pink Hello Kitty luggage at the airport baggage claim.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerCoastalWalk,
    title: "Coastal walk",
    caption: "Walking the dunes and paths near the beach.",
    alt: "Learner in green shirt and blue tracksuit walking a sandy coastal path during the Port Elizabeth trip.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerSandDrawing,
    title: "Beach play",
    caption: "Drawing in the sand by the ocean.",
    alt: "Learner kneeling on the beach drawing a circle in the sand with the ocean waves behind.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerBeachSitting,
    title: "By the waves",
    caption: "A sunny moment on the Port Elizabeth beach.",
    alt: "Young learner sitting on the sand in a swimsuit with ocean waves rolling behind during the school trip.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.learnerBeachTurquoise,
    title: "Seaside smiles",
    caption: "Enjoying the beach on the school trip to P.E.",
    alt: "Learner smiling on the Port Elizabeth beach in turquoise swimwear with the ocean in the background.",
  },
  {
    src: SCHOOL_TRIP_PE_PHOTOS.staffBeachSundress,
    title: "Beach day",
    caption: "Sunshine and sea air on the Port Elizabeth trip.",
    alt: "Staff member in a colourful sundress and sun hat standing on the beach during the school trip to Port Elizabeth.",
  },
]

/** Top performing learners — awards & Mathematics Olympiad (see /public/images/gallery/top-performing-learners). */
export const TOP_PERFORMING_LEARNERS_PHOTOS = {
  awardsGroup: "/images/gallery/top-performing-learners/tpl-01-group-awards-ceremony.jpg",
  mathsOlympiadGroup: "/images/gallery/top-performing-learners/tpl-02-maths-olympiad-group.jpg",
  learnerTrophy: "/images/gallery/top-performing-learners/tpl-03-learner-trophy.png",
  lethaboKoetle: "/images/gallery/top-performing-learners/tpl-04-lethabo-koetle.png",
  karaboLedwaba: "/images/gallery/top-performing-learners/tpl-05-karabo-ledwaba.png",
  agnesOnyekachi: "/images/gallery/top-performing-learners/tpl-06-agnes-onyekachi.png",
  reabotsweJanatwala: "/images/gallery/top-performing-learners/tpl-07-reabotswe-janatwala.png",
  agnesAdegbotu: "/images/gallery/top-performing-learners/tpl-08-agnes-adegbotu.png",
  beatriceJowelawala: "/images/gallery/top-performing-learners/tpl-09-beatrice-jowelawala.png",
  mstBagsGroup: "/images/gallery/top-performing-learners/tpl-10-mst-bags-group.png",
  classroomCertificatesGroup: "/images/gallery/top-performing-learners/tpl-11-classroom-certificates-group.png",
  meritCertificatesClass: "/images/gallery/top-performing-learners/tpl-12-merit-certificates-class.jpg",
} as const

export const TOP_PERFORMING_LEARNERS_GALLERY_ITEMS: GalleryItem[] = [
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.awardsGroup,
    title: "Top learners celebrated",
    caption: "Proud achievers with certificates at our awards ceremony.",
    alt: "Group of Asamaths top performing learners in school uniform holding certificates at an outdoor awards celebration.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.mathsOlympiadGroup,
    title: "Mathematics Olympiad team",
    caption: "Provincial Mathematics Olympiad winners with trophies and prizes.",
    alt: "Four Asamaths learners holding Mathematics Olympiad trophies, certificates, and ZENO prize boxes.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.learnerTrophy,
    title: "Proud champion",
    caption: "A top learner celebrating with trophy and prize.",
    alt: "Asamaths learner in school uniform holding a trophy and prize box against a stone wall.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.lethaboKoetle,
    title: "Lethabo Koetle",
    caption: "Mathematics Olympiad provincial certificate and trophy.",
    alt: "Learner Lethabo Koetle in Asamaths uniform holding a Mathematics Olympiad provincial certificate, trophy, and ZENO 1 prize.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.karaboLedwaba,
    title: "Karabo Ledwaba — 2nd Place",
    caption: "Mathematics Olympiad provincial 2nd place.",
    alt: "Learner Karabo Ledwaba smiling with a Mathematics Olympiad 2nd Place provincial certificate and trophy.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.agnesOnyekachi,
    title: "Agnes A. Onyekachi — 3rd Place",
    caption: "Mathematics Olympiad provincial 3rd place.",
    alt: "Learner Agnes A. Onyekachi with a Mathematics Olympiad 3rd Place provincial certificate and trophy.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.reabotsweJanatwala,
    title: "Reabotswe Janatwala — 1st Place",
    caption: "Mathematics Olympiad provincial 1st place.",
    alt: "Learner Reabotswe Janatwala holding a Mathematics Olympiad 1st Place provincial certificate and trophy.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.agnesAdegbotu,
    title: "Agnes Adegbotu — 5th Place",
    caption: "Mathematics Olympiad provincial 5th place.",
    alt: "Learner Agnes Adegbotu with a Mathematics Olympiad 5th Place provincial certificate and trophy.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.beatriceJowelawala,
    title: "Beatrice Jowelawala — 1st Place",
    caption: "Mathematics Olympiad provincial 1st place.",
    alt: "Learner Beatrice Jowelawala with a Mathematics Olympiad 1st Place provincial certificate, trophy, and ZENO 1 prize.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.mstBagsGroup,
    title: "MST bag recognition",
    caption: "Top learners receiving MST bags with a staff member.",
    alt: "Three Asamaths learners in school uniform holding MST bags beside a staff member in school tracksuit.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.classroomCertificatesGroup,
    title: "Certificate celebration",
    caption: "Learners recognised with certificates in class.",
    alt: "Three Asamaths learners holding certificates with a staff member in a classroom.",
  },
  {
    src: TOP_PERFORMING_LEARNERS_PHOTOS.meritCertificatesClass,
    title: "Merit certificate class",
    caption: "A proud class of merit certificate recipients.",
    alt: "Large group of Asamaths learners holding Certificate of Merit awards with a staff member in a classroom.",
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  ...CAMPUS_GALLERY_ITEMS,
  {
    src: STUDENT_PHOTOS.hero,
    title: "Our learners",
    caption: "Proud, happy faces in the Asamaths family.",
    alt: "Two primary learners in school uniform smiling together outdoors at Asamaths Institute.",
  },
  {
    src: STUDENT_PHOTOS.classroom,
    title: "Learning together",
    caption: "Focused classrooms across the phases.",
    alt: "Primary-phase learners in uniform working diligently at their desks in a bright classroom.",
  },
  {
    src: STUDENT_PHOTOS.focus,
    title: "Learning spaces",
    caption: "Bright, structured environments for study.",
    alt: "Learner focused at a desk during independent classwork in Winterveldt, Pretoria.",
  },
  {
    src: STUDENT_PHOTOS.smile,
    title: "Proud moment",
    caption: "Confidence grows with every small success.",
    alt: "Learners in grey and blue school uniform during a calm, focused lesson in class.",
  },
  {
    src: STUDENT_PHOTOS.foundation,
    title: "Foundation-phase work",
    caption: "Home language and foundational skills (e.g. Sepedi literacy resources).",
    alt: "Foundation-phase learner working with literacy and language materials in class.",
  },
  {
    src: STUDENT_PHOTOS.playground,
    title: "Play and movement",
    caption: "Break time energy and teamwork outdoors.",
    alt: "Learners in school uniform playing on the outdoor playground with a red slide.",
  },
  {
    src: STUDENT_PHOTOS.sports,
    title: "Guided learning",
    caption: "Educators and learners working side by side.",
    alt: "Educators reviewing work with learners at a desk in a well-equipped classroom.",
  },
  {
    src: STUDENT_PHOTOS.joy,
    title: "Together we grow",
    caption: "Friendships and smiles across the phases we offer.",
    alt: "Senior-phase learners in uniform seated at desks during an attentive classroom lesson.",
  },
  {
    src: STUDENT_PHOTOS.scienceLesson,
    title: "Senior-phase classroom",
    caption: "Focused lessons across Grades 7–9 with educators at the front of the room.",
    alt: "Senior-phase learners in blue school uniform seated at desks during a lesson while an educator writes on the chalkboard.",
  },
  {
    src: STUDENT_PHOTOS.productiveCollaborations,
    title: "Productive Collaborations",
    caption: "Learners working together, sharing ideas, and supporting one another in class.",
    alt: "Senior-phase learners in school uniform collaborating at their desks during a positive classroom lesson.",
  },
  {
    src: STUDENT_PHOTOS.classroomCelebration,
    title: "We celebrate progress",
    caption: "Joint success when effort turns into breakthrough moments.",
    alt: "Busy classroom of learners in uniform with colourful educational posters on the walls.",
  },
]

export type HeroSlide = {
  src: string
  alt: string
  objectPosition?: string
}

/** Home hero slideshow — gallery photos only (last five bonus slides removed per site request). */
function buildHeroSlideshow(): HeroSlide[] {
  const seen = new Set<string>()
  const slides: HeroSlide[] = []

  const add = (src: string, alt: string, objectPosition = "center 25%") => {
    const base = src.split("?")[0] ?? src
    if (seen.has(base)) return
    seen.add(base)
    slides.push({ src, alt, objectPosition })
  }

  for (const item of GALLERY_ITEMS) {
    add(item.src, item.alt)
  }

  return slides
}

export const HERO_SLIDESHOW = buildHeroSlideshow()

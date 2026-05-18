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
  classroomCelebration: "/images/students/classroom-celebration.png",
} as const

/** Campus and page-specific photography (see /public/images/campus). */
export const CAMPUS_PHOTOS = {
  friends: "/images/campus/campus-friends.png",
  courtyardWalk: "/images/campus/campus-courtyard-walk.png",
  adminOffice: "/images/campus/admin-office.png",
  building: "/images/campus/campus-building.png",
  classroomGroup: "/images/campus/classroom-group.png",
  literacyNotebook: "/images/campus/literacy-notebook.png",
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
    src: STUDENT_PHOTOS.reading,
    title: "Focus on literacy",
    caption: "Building strong reading habits every day.",
    alt: "Learner concentrating on literacy work at a desk in a bright classroom.",
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
    title: "Science in action",
    caption: "Hands-on investigations with educators alongside our learners.",
    alt: "Natural sciences exploration: educator and learner with magnets during a lesson.",
  },
  {
    src: STUDENT_PHOTOS.studentReadingPortrait,
    title: "Every reader matters",
    caption: "Confident literacy habits in calm, purposeful classrooms.",
    alt: "Portrait-style photo of a primary learner reading attentively from a book.",
  },
  {
    src: STUDENT_PHOTOS.mathWhiteboardStudent,
    title: "Numeracy confidence",
    caption: "Learners practising mathematics with focus and perseverance.",
    alt: "Learner solving two-digit addition on a classroom whiteboard for numeracy practice.",
  },
  {
    src: STUDENT_PHOTOS.mathChalkboardLesson,
    title: "Mathematics explained",
    caption: "Clear teaching guided by caring, experienced educators.",
    alt: "Mathematics educator pointing to sums on the chalkboard while learners look on.",
  },
  {
    src: STUDENT_PHOTOS.classroomCelebration,
    title: "We celebrate progress",
    caption: "Joint success when effort turns into breakthrough moments.",
    alt: "Busy classroom of learners in uniform with colourful educational posters on the walls.",
  },
]

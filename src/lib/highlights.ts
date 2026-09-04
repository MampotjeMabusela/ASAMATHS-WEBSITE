/**
 * Weekly Highlights — update this file each week with school announcements.
 *
 * Categories: sports | culture | academic | general
 * Set `weekLabel` to the current week (e.g. "Week of 2–6 September 2026").
 * Replace `items` with that week's notices; newest or most important items first.
 */

export type HighlightCategory = "sports" | "culture" | "academic" | "general"

export type Highlight = {
  id: string
  category: HighlightCategory
  title: string
  description: string
  /** Optional — e.g. "Wed 4 Sep" or "This Friday, 14:00" */
  when?: string
}

export type HighlightsWeek = {
  weekLabel: string
  /** ISO date when this list was last updated (YYYY-MM-DD) */
  updatedAt: string
  /** Human-readable update label — keep in sync with `updatedAt`. */
  updatedLabel: string
  items: Highlight[]
}

export const HIGHLIGHT_CATEGORY_LABELS: Record<HighlightCategory, string> = {
  sports: "Sports",
  culture: "Culture",
  academic: "Academic",
  general: "General",
}

/** Current week's highlights — edit weekly */
export const CURRENT_HIGHLIGHTS: HighlightsWeek = {
  weekLabel: "Week of 31 August – 4 September 2026",
  updatedAt: "2026-09-04",
  updatedLabel: "4 Sep 2026",
  items: [
    {
      id: "sports-athletics",
      category: "sports",
      title: "Inter-house athletics trials",
      description: "Trials for the upcoming athletics season. All learners in sports uniform.",
      when: "Wed 2 Sep · 08:00",
    },
    {
      id: "culture-heritage",
      category: "culture",
      title: "Heritage Day dress rehearsal",
      description: "Cultural groups rehearse performances for Heritage Day celebrations.",
      when: "Fri 4 Sep · 13:30",
    },
    {
      id: "academic-grade12",
      category: "academic",
      title: "Grade 12 prelim timetable",
      description: "The September preliminary examination timetable is now available from the office.",
      when: "From Mon 31 Aug",
    },
    {
      id: "general-parents",
      category: "general",
      title: "Parents' information meeting",
      description: "Term updates, fee reminders, and Q&A with the principal and SGB.",
      when: "Thu 3 Sep · 15:00",
    },
  ],
}

"use client"

import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

type ThemeToggleProps = {
  className?: string
  compact?: boolean
}

export function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
        compact ? "h-9 w-9" : "h-8 gap-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-wide",
        "border-primary-200 bg-white text-primary-800 shadow-sm hover:bg-primary-50",
        "dark:border-primary-700 dark:bg-primary-950 dark:text-primary-100 dark:hover:bg-primary-900",
        "dark:focus-visible:ring-offset-primary-950",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun className="h-3.5 w-3.5" aria-hidden /> : <Moon className="h-3.5 w-3.5" aria-hidden />}
      {!compact ? <span>{isDark ? "Light" : "Dark"}</span> : null}
    </button>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

type AnimatedStatValueProps = {
  value: string
  suffix?: string
  className?: string
}

function parseNumericValue(raw: string): number | null {
  const digits = raw.replace(/[^\d]/g, "")
  if (!digits) return null
  const n = parseInt(digits, 10)
  return Number.isFinite(n) ? n : null
}

export function AnimatedStatValue({ value, suffix = "", className }: AnimatedStatValueProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduceMotion = useReducedMotion()
  const numeric = parseNumericValue(value)
  const [display, setDisplay] = useState(numeric ?? 0)

  useEffect(() => {
    if (numeric === null) return
    if (reduceMotion || !inView) {
      setDisplay(numeric)
      return
    }

    const duration = 1400
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setDisplay(Math.round(numeric * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric, reduceMotion])

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
        {suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-ZA")}
      {suffix}
    </span>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { NavLink } from "@/types"

const linkClass = (active: boolean) =>
  cn(
    "flex min-h-[52px] items-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg",
    active ? "bg-primary-50 text-primary-800" : "text-gray-700 hover:bg-gray-50 hover:text-primary-700"
  )

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
  /** External link to sibling campus site */
  sisterSchool?: { href: string; label: string }
  /** Measured height (px) of the fixed header chrome so overlay + drawer sit flush below it */
  anchorHeight: number
}

export function MobileNav({ isOpen, onClose, links, sisterSchool, anchorHeight }: MobileNavProps) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const top = Math.max(anchorHeight, 56)

  const overlayStyle = { top } as const
  const panelClass =
    "fixed bottom-0 left-0 right-0 z-50 flex w-full max-w-full flex-col overflow-y-auto overflow-x-hidden bg-white shadow-2xl md:hidden " +
    "pb-[max(1rem,env(safe-area-inset-bottom))] pt-2"

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {reduceMotion ? (
            <>
              <div
                className="fixed right-0 z-40 bg-black/50 md:hidden"
                style={{ ...overlayStyle, left: 0 }}
                onClick={onClose}
                aria-hidden
              />
              <div className={panelClass} style={{ ...overlayStyle, maxHeight: `calc(100dvh - ${top}px)` }} id="mobile-menu-panel">
                <nav className="flex flex-col gap-2 px-4 sm:px-6" aria-label="Mobile menu">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={linkClass(pathname === link.href)}
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {sisterSchool ? (
                    <a
                      href={sisterSchool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(linkClass(false), "gap-2")}
                      onClick={onClose}
                    >
                      <ExternalLink className="h-5 w-5 shrink-0" aria-hidden />
                      <span className="leading-snug">{sisterSchool.label}</span>
                    </a>
                  ) : null}
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <Link href="/admissions" onClick={onClose} className="block">
                      <Button className="h-12 w-full text-base sm:h-14 sm:text-lg" size="lg">
                        Apply for Admission
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed right-0 z-40 bg-black/50 md:hidden"
                style={{ ...overlayStyle, left: 0 }}
                onClick={onClose}
                aria-hidden
              />

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                className={panelClass}
                style={{ ...overlayStyle, maxHeight: `calc(100dvh - ${top}px)` }}
                id="mobile-menu-panel"
              >
                <div className="mx-auto mb-3 h-1.5 w-10 shrink-0 rounded-full bg-gray-200" aria-hidden />
                <nav className="flex flex-col gap-2 px-4 sm:px-6" aria-label="Mobile menu">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link href={link.href} className={linkClass(pathname === link.href)} onClick={onClose}>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  {sisterSchool ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: links.length * 0.04 }}
                    >
                      <a
                        href={sisterSchool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(linkClass(false), "gap-2")}
                        onClick={onClose}
                      >
                        <ExternalLink className="h-5 w-5 shrink-0" aria-hidden />
                        <span className="leading-snug">{sisterSchool.label}</span>
                      </a>
                    </motion.div>
                  ) : null}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (sisterSchool ? 0.04 : 0) }}
                    className="mt-4 border-t border-gray-100 pt-4"
                  >
                    <Link href="/admissions" onClick={onClose} className="block">
                      <Button className="h-12 w-full text-base sm:h-14 sm:text-lg" size="lg">
                        Apply for Admission
                      </Button>
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  )
}

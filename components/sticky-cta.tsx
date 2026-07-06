'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero section (around 600px)
      const scrollThreshold = 600
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex-1">
          <p className="font-heading font-bold text-foreground">
            Get Your Free Roofing Inspection & Quote Today
          </p>
          <p className="text-sm text-muted-foreground">
            Licensed, insured, and backed by a 25-year workmanship warranty
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-2">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

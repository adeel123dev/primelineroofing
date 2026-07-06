'use client'

import { useState, useEffect } from 'react'
import { X, ShieldCheck, ArrowRight } from 'lucide-react'
import { Stars } from '@/components/stars'

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 600)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 hidden md:block animate-in slide-in-from-bottom-2 duration-300"
      role="banner"
      aria-label="Get a free roofing quote"
    >
      {/* Accent top border */}
      <div className="h-[3px] w-full bg-accent" />

      <div className="bg-foreground/97 backdrop-blur-md shadow-[0_-8px_32px_-4px_rgba(0,0,0,0.4)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">

          {/* Left — brand trust badges */}
          <div className="flex items-center gap-5 min-w-0">
            {/* Shield icon */}
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-accent/15 ring-1 ring-accent/30">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="font-heading font-bold text-white text-sm sm:text-base leading-tight truncate">
                Get Your Free Roofing Inspection &amp; Quote Today
              </p>
              <p className="text-xs text-white/55 mt-0.5 truncate">
                Licensed &amp; insured · 25-year workmanship warranty · No obligation
              </p>
            </div>
          </div>

          {/* Center — Google stars */}
          <div className="hidden lg:flex flex-shrink-0 flex-col items-center gap-0.5">
            <Stars className="h-4 w-4" />
            <p className="text-[11px] text-white/50 leading-none">5.0 · 21 Google Reviews</p>
          </div>

          {/* Right — CTA + dismiss */}
          <div className="flex flex-shrink-0 items-center gap-3">
            <a
              href="#quote-form"
              className="btn-pulse inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-accent/50 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              onClick={handleDismiss}
              className="flex-shrink-0 inline-flex items-center justify-center rounded-lg p-2 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

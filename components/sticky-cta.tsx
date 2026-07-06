'use client'

import { useEffect, useState } from 'react'

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 animate-in slide-in-from-bottom-3 duration-300"
      role="complementary"
      aria-label="Quick actions"
    >
      <div className="flex flex-row items-center gap-1 rounded-full bg-foreground p-1.5 shadow-2xl shadow-black/40">
        <a
          href="#quote-form"
          className="btn-pulse whitespace-nowrap inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-extrabold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
        >
          Get A Free Quote
        </a>
        <a
          href="#services"
          className="whitespace-nowrap inline-flex items-center justify-center rounded-full bg-card px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-muted active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
        >
          View Services
        </a>
      </div>
    </div>
  )
}

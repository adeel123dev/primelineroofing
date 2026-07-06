'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { GoogleLogo } from '@/components/google-logo'
import { Stars } from '@/components/stars'

export function FloatingGoogleRating() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 left-3 z-40 animate-in fade-in slide-in-from-left-4 duration-500 sm:bottom-8 sm:left-6">
      <div
        className="relative flex items-center gap-2 rounded-full bg-white pl-2 pr-8 py-1.5 btn-pulse border border-accent/25"
        style={{ boxShadow: '0 4px 20px -2px rgb(0 0 0 / 0.15)' }}
      >
        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close Google rating"
        >
          <X className="h-3 w-3 text-gray-400" />
        </button>

        {/* Google G */}
        <GoogleLogo className="h-5 w-5 shrink-0" />

        {/* Score */}
        <span className="text-sm font-extrabold text-gray-900 leading-none">5.0</span>

        {/* Stars */}
        <Stars className="h-3.5 w-3.5" />

        {/* Count */}
        <span className="text-xs text-gray-500 leading-none pr-1">21 reviews</span>
      </div>
    </div>
  )
}

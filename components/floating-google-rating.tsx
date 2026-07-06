'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { GoogleLogo } from '@/components/google-logo'
import { Stars } from '@/components/stars'

export function FloatingGoogleRating() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-8 z-40 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="relative bg-white rounded-2xl border border-accent/30 p-4 w-64 transition-shadow btn-pulse" style={{ boxShadow: '0 8px 32px -4px rgb(0 0 0 / 0.18)' }}>
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-3.5 w-3.5 text-gray-400" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3 pt-0.5">
          {/* Google Logo */}
          <div className="flex-shrink-0 mt-0.5">
            <GoogleLogo className="h-8 w-8" />
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide leading-none mb-1">
              Google Rating
            </p>

            {/* Score + Stars */}
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-gray-900 leading-none">5.0</span>
              <Stars className="h-4 w-4" />
            </div>

            {/* Review Count */}
            <p className="text-xs text-gray-500 mt-1">Based on 21 reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

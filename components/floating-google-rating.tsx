'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Stars } from '@/components/stars'
import Image from 'next/image'

export function FloatingGoogleRating() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-8 z-40 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 w-72 hover:shadow-3xl transition-shadow">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>

        {/* Content */}
        <div className="flex items-center gap-4 pt-1">
          {/* Google Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/google-logo.svg"
              alt="Google"
              width={48}
              height={48}
              className="h-12 w-12"
              crossOrigin="anonymous"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">Google Rating</p>
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1 my-1">
              <span className="text-2xl font-bold text-orange-500">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-orange-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Count */}
            <p className="text-xs text-gray-600">Based on 73 reviews</p>
          </div>
        </div>

        {/* Hover Effect Background */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-50 to-transparent opacity-0 hover:opacity-50 transition-opacity pointer-events-none" />
      </div>
    </div>
  )
}

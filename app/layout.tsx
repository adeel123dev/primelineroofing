import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Metal Roofing Illewong | ★5.0 Rated | Free Quote 24hrs | Primeline Roofing',
  description:
    'Metal roofing Illewong. 5.0★ Google rated Colorbond® specialists. Licensed & insured, 25-yr written warranty. Free quote in 24hrs. Call (02) 4217 7737.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1c2433',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'Primeline Roofing',
  image: 'https://nsw.primelineroofing.com.au/hero-colorbond-roof.png',
  telephone: '+61242177737',
  email: 'office@primelineroofing.com.au',
  areaServed: ['Illewong', 'Wollongong', 'Illawarra', 'South Coast NSW'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '21',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James Mitchell' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Full roof replacement done professionally and completed exactly on schedule. Clean, tidy crew and excellent communication throughout.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Robert Wilson' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Called on a Sunday with an emergency leak and they came out same-day. Sorted the problem quickly and saved us from major water damage.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Trevor Holmes' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'I verified their licence before starting and they provided all warranty documents. Beautiful new Colorbond roof, highly recommend.',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

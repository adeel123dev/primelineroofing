import Image from 'next/image'
import { Stars } from '@/components/stars'
import { GoogleLogo } from '@/components/google-logo'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#quote-form' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/primeline-logo.webp"
            alt="Primeline Roofing logo"
            width={40}
            height={40}
            className="h-9 w-9 rounded-md object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="font-heading text-sm font-extrabold text-foreground sm:text-base">
              Primeline Roofing
            </p>
            <p className="hidden text-[11px] text-muted-foreground sm:block">
              Metal Roofing Specialists
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 rounded-full border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 xl:flex">
            <GoogleLogo className="h-5 w-5" />
            <div className="flex items-center gap-1">
              <Stars className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="flex flex-col items-start gap-0">
              <span className="text-sm font-bold text-blue-900">5.0 Stars</span>
              <span className="text-xs text-blue-700">21 Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

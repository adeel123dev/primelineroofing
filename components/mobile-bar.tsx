import { Phone } from 'lucide-react'

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-card/95 p-2 shadow-[0_-8px_24px_-6px_rgba(0,0,0,0.5)] backdrop-blur md:hidden">
      <a
        href="tel:+61242177737"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-card px-3 py-3 text-sm font-bold text-primary transition-colors active:bg-primary/10"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call Now
      </a>
      <a
        href="#quote-form"
        className="btn-pulse inline-flex items-center justify-center rounded-lg bg-accent px-3 py-3 text-sm font-bold text-accent-foreground"
      >
        Free Quote
      </a>
    </div>
  )
}

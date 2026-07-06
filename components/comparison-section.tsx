import { Check, X } from 'lucide-react'

const rows = [
  { label: 'Specialisation', us: 'Metal roofing only', them: '“Also does roofs”' },
  { label: 'Workmanship warranty', us: '25 years, in writing', them: '1–5 years, if any' },
  { label: 'Quoting', us: 'Fixed upfront pricing', them: 'Estimates that grow' },
  { label: 'Who does the work', us: 'Our own trained team', them: 'Subcontracted out' },
  { label: 'Licensing & insurance', us: 'Fully licensed & insured', them: 'Often unverified' },
  { label: 'Reputation', us: '5.0★ on Google', them: 'Hit or miss' },
]

const benefits = [
  'Warranty-backed workmanship on all installs and repairs',
  'Free inspections and transparent quotes across Illewong',
  'Licensed & fully insured with NSW Fair Trading credentials',
  'Genuine Colorbond® steel made by BlueScope in Australia',
  'Same-day emergency response across the Illawarra',
  'Upfront, fixed pricing with no estimates that grow',
]

const stats = [
  { value: '3,500+', label: 'Roofs installed' },
  { value: '25 yr', label: 'Written warranty' },
  { value: '5.0★', label: 'Google rating' },
  { value: '24/7', label: 'Emergency response' },
]

export function ComparisonSection() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-secondary/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Why Choose Us</p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            How Primeline Compares to Other Roofers
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Comparison table */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-primary text-xs font-bold text-primary-foreground sm:text-sm">
              <div className="px-4 py-3.5" />
              <div className="border-l border-primary-foreground/15 px-3 py-3.5 text-center">
                Primeline
              </div>
              <div className="border-l border-primary-foreground/15 px-3 py-3.5 text-center text-primary-foreground/70">
                Typical Roofer
              </div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.4fr_1fr_1fr] text-sm ${
                  i % 2 === 1 ? 'bg-secondary/40' : ''
                }`}
              >
                <div className="px-4 py-3.5 font-medium text-foreground">{row.label}</div>
                <div className="flex items-center gap-1.5 border-l border-border px-3 py-3.5 text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-pretty">{row.us}</span>
                </div>
                <div className="flex items-center gap-1.5 border-l border-border px-3 py-3.5 text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 text-destructive/70" aria-hidden="true" />
                  <span className="text-pretty">{row.them}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits + stats */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              What You Get Working With Us
            </h3>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">
              Expert metal roofing and cladding solutions backed by 25+ years of experience and
              proven results serving Illewong and the Illawarra.
            </p>
            <ul className="mt-5 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-pretty text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
                >
                  <p className="font-heading text-2xl font-extrabold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

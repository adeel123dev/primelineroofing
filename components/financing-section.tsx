import { CreditCard, Zap, Clock, TrendingUp } from 'lucide-react'

const financingOptions = [
  {
    icon: CreditCard,
    title: 'Flexible Payment Plans',
    body: 'We work with multiple finance partners offering interest-free terms on approved credit. No hidden fees.',
  },
  {
    icon: Zap,
    title: 'Fast Approval',
    body: 'Same-day decision on finance applications. Get your roof installed quickly without the upfront stress.',
  },
  {
    icon: Clock,
    title: 'Extended Terms',
    body: 'Spread the cost over up to 60 months with fixed rates. Pay only when the work is complete.',
  },
  {
    icon: TrendingUp,
    title: 'Tax & Grant Eligible',
    body: 'Check your eligibility for government grants and tax deductions. We help with all the paperwork.',
  },
]

export function FinancingSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Flexible Options</p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            Financing Your Roof Doesn&apos;t Have to Be Stressful
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Explore our flexible payment plans and financing options. Everyone deserves a quality
            roof without breaking the bank.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {financingOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-accent/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <option.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{option.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                {option.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 text-center">
          <p className="font-heading text-lg font-bold text-foreground">
            Ready to finance your roof project?
          </p>
          <p className="mt-2 text-muted-foreground">
            Get a free quote and we&apos;ll discuss all available financing options with you.
          </p>
          <a
            href="#quote-form"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Your Free Quote & Financing Details
          </a>
        </div>
      </div>
    </section>
  )
}

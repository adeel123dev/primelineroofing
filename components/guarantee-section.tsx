import { CheckCircle, Shield, AlertCircle, Heart } from 'lucide-react'

const guaranteePoints = [
  {
    icon: CheckCircle,
    title: '25-Year Workmanship Warranty',
    body: 'Written guarantee on every installation. If anything fails within 25 years, we fix it at no cost.',
  },
  {
    icon: Shield,
    title: 'Material Warranties Up to 50 Years',
    body: 'BlueScope Colorbond® and Zincalume® materials carry their own lifetime warranties, plus our extended options.',
  },
  {
    icon: AlertCircle,
    title: 'No-Show Guarantee',
    body: 'We commit to scheduled appointments. If we don&apos;t show, the first 2 hours of work are free.',
  },
  {
    icon: Heart,
    title: 'Satisfaction Guarantee',
    body: 'If you&apos;re not 100% satisfied with our work, we&apos;ll make it right. Your peace of mind comes first.',
  },
]

export function GuaranteeSection() {
  return (
    <section className="bg-secondary py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Peace of Mind</p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            Comprehensive Guarantees & Warranties
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Your roof is a major investment. We back every project with industry-leading guarantees
            so you can have complete peace of mind for decades to come.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {guaranteePoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <point.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border-2 border-accent/30 bg-accent/5 p-8">
          <h3 className="text-center font-heading text-lg font-bold text-foreground">
            Every Guarantee Includes:
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Free annual inspections',
              'Detailed warranty documentation',
              'No fine print or exclusions',
              '24/7 emergency support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

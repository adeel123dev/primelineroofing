import { Search, FileText, Hammer, ClipboardCheck, ShieldCheck, Phone, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Free Roof Assessment',
    body: 'We start with a comprehensive, obligation-free inspection. Our licensed team assesses the condition, identifies any issues, and documents everything with detailed photos.',
  },
  {
    icon: FileText,
    title: 'Transparent Quote & Planning',
    body: 'You receive a clear, itemised quote with no hidden costs. We explain exactly what is needed and why, so you can make an informed decision. No surprises, just honest advice.',
  },
  {
    icon: Hammer,
    title: 'Expert Installation',
    body: 'Our certified team handles the work with precision, using premium Colorbond® and Zincalume® materials built for Australian coastal conditions, safely and efficiently.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    body: 'Colorbond® sheets are custom cut to your roof and installed to manufacturer specification by Primeline’s own trained installers. Premium materials, guaranteed.',
  },
  {
    icon: ShieldCheck,
    title: 'Cleanup, Walkthrough & Warranty',
    body: 'We tidy the site, walk you through the finished job, and back it with an extended written warranty, plus ongoing support and 24/7 emergency calls.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 bg-secondary/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Our Process</p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            Premium Metal Roofing Solutions Serving Illewong
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            A clear, straightforward process that ensures your project is completed safely, on time,
            and to the highest standard, from first call to final handover.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-bold text-accent">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}

          {/* Booking CTA card: glaring, continuously animated */}
          <li className="cta-card group rounded-2xl border border-accent/50 bg-card p-6 shadow-sm">
            <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground">
              Book Now
            </span>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Phone className="cta-ring-icon h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-sm font-bold text-accent">Ready?</span>
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
              Book Your Free Roof Quote
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
              Skip the wait and lock in your obligation-free inspection today. Licensed, insured, and
              backed by a 25-year written warranty with a reply within 24 hours.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <a
                href="#quote-form"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-transform duration-300 hover:scale-[1.03] hover:bg-[oklch(0.63_0.2_41.5)]"
              >
                Get My Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+61242177737"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-accent/60 px-4 py-2.5 text-sm font-bold text-accent transition-colors duration-300 hover:bg-accent/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { Phone } from 'lucide-react'

const services = [
  {
    image: '/hero-colorbond-roof.png',
    title: 'Genuine Colorbond® Steel Roofing',
    body: 'Premium Colorbond® and Zincalume® steel for new installations and full replacements. We specialise in coastal-grade and cyclone-rated profiles built to withstand Illewong’s harsh coastal and escarpment conditions, with every roof backed by extended warranty options.',
  },
  {
    image: '/architectural-cladding.png',
    title: 'Architectural Cladding',
    body: 'Design-led metal cladding for renovations and new builds. Our material knowledge and installation precision deliver a striking, durable facade that lifts the entire property while coordinating cleanly with your other trades.',
  },
  {
    image: '/roof-restoration.png',
    title: 'Roof Restorations',
    body: 'Sheets folded to your roof’s exact profile, with ridges, valleys and penetrations sealed properly. This is where cheap jobs leak; ours don’t. Full restorations that add decades of life to your roof.',
  },
  {
    image: '/roofer-installing.png',
    title: 'Roof Repairs & Leak Detection',
    body: 'Fast, reliable repairs for leaks, damaged sheets, rust, fastener and gutter issues, and storm damage. Same-day emergency response with thorough diagnostics that find the root cause, not just the symptom. Available 24/7.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Our Services</p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            Why Homeowners Choose Primeline Roofing
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Metal roofing specialists serving Illewong, the Illawarra &amp; South Coast, supplied,
            installed and guaranteed by one licensed team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-primary px-6 py-6 text-center text-primary-foreground sm:flex-row sm:justify-between sm:text-left">
          <p className="font-heading text-lg font-bold text-balance">
            Not sure which service you need? Get a free inspection.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Get Free Quote →
            </a>
            <a
              href="tel:+61242177737"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> (02) 4217 7737
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

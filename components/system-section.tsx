import Image from 'next/image'
import { Award, Wrench, BadgeCheck, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    body: 'Decades of metal roofing mastery using genuine Colorbond® and Zincalume® steel made by BlueScope, including coastal-grade and cyclone-rated profiles built to last 50+ years.',
  },
  {
    icon: Wrench,
    title: 'The Workmanship',
    body: 'Sheets measured and cut for your roof specifically, with custom-folded flashings at every ridge, valley and penetration, the exact failure points where budget jobs leak.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Certified',
    body: 'Fully compliant with NSW standards, licensed and insured with comprehensive public liability and workers’ compensation cover. Every project meets building codes and regulations.',
  },
  {
    icon: ShieldCheck,
    title: 'The Guarantee',
    body: 'Every installation carries Primeline’s 25-year workmanship warranty in writing, on top of BlueScope’s own material warranty: two layers of protection on product and install.',
  },
]

export function SystemSection() {
  return (
    <section className="bg-primary py-14 text-primary-foreground sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/roof-restoration.png"
              alt="Freshly installed Colorbond metal roof with crisp ridge capping"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">Why Choose Us</p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-balance sm:text-3xl">
              A Complete Colorbond® Roofing System: Supplied, Installed &amp; Guaranteed By One Team
            </h2>
            <p className="mt-3 text-pretty text-primary-foreground/80">
              We&apos;ve protected over 3,500 roofs across the Illawarra and South Coast with 25+
              years of combined expertise, 24/7 emergency response, and a no-show guarantee, so you
              get reliability and peace of mind on every job.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-heading text-base font-bold">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-pretty text-primary-foreground/75">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

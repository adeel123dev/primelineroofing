import { Phone, Mail } from 'lucide-react'
import { Stars } from '@/components/stars'

export function FinalCta() {
  return (
    <section className="bg-accent py-12 text-accent-foreground sm:py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Stars className="mx-auto h-5 w-5" />
        <h2 className="mt-4 font-heading text-2xl font-extrabold text-balance sm:text-3xl">
          Need a Roof Specialist Near Illewong?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-accent-foreground/90">
          Servicing the Illawarra &amp; South Coast. Call us on (02) 4217 7737 or email
          office@primelineroofing.com.au for a free inspection and a fixed written quote within 24
          hours.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+61242177737"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden="true" /> Call (02) 4217 7737
          </a>
          <a
            href="#quote-form"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-card px-6 py-3.5 text-base font-bold text-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Get My Free Quote
          </a>
        </div>
        <a
          href="mailto:office@primelineroofing.com.au"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-foreground/90 underline-offset-2 hover:underline"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> office@primelineroofing.com.au
        </a>
      </div>
    </section>
  )
}

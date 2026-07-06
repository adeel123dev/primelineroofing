import Image from 'next/image'
import { Phone, ShieldCheck, BadgeCheck, Clock, Star } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { MobileBar } from '@/components/mobile-bar'
import { LeadForm } from '@/components/lead-form'
import { Stars } from '@/components/stars'
import { GoogleLogo } from '@/components/google-logo'
import { ProcessSection } from '@/components/process-section'
import { ServicesSection } from '@/components/services-section'
import { ComparisonSection } from '@/components/comparison-section'
import { ReviewsSection } from '@/components/reviews-section'
import { SystemSection } from '@/components/system-section'
import { FinancingSection } from '@/components/financing-section'
import { GuaranteeSection } from '@/components/guarantee-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { StickyCta } from '@/components/sticky-cta'
import { FloatingGoogleRating } from '@/components/floating-google-rating'

const usps = [
  {
    icon: ShieldCheck,
    title: '25-Year Warranty',
    body: 'Workmanship guaranteed in writing on every install.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Insured',
    body: 'Fully certified NSW roofing contractors, fully covered.',
  },
  {
    icon: Clock,
    title: 'Free Quotes in 24hrs',
    body: 'Fast, no-obligation inspections and detailed quotes.',
  },
]

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background pb-16 md:pb-0">
      <SiteHeader />

      {/* Announcement bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-2 text-[13px] font-bold sm:px-6 sm:text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Stars className="h-3.5 w-3.5" />
              <span>5.0</span>
              <span className="font-medium text-accent-foreground/80">· 21 Reviews</span>
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Available 24/7 For Quotes
            </span>
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Licensed &amp; Fully Insured
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              FREE Roof Inspection &amp; Written Quote
            </span>
          </div>
          <a
            href="tel:+61242177737"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent-foreground/10 px-3 py-1 transition-colors hover:bg-accent-foreground/20"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" /> (02) 4217 7737
          </a>
        </div>
      </div>

      {/* HERO: everything above the fold */}
      <section className="relative overflow-hidden">
        <Image
          src="/hero-colorbond-roof.png"
          alt="New charcoal Colorbond metal roof on a modern NSW home"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-7 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" />
              5.0 Rated · Illewong Metal Roofing Specialists
            </div>
            <h1 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.08] text-balance text-foreground sm:text-5xl">
              Premium Colorbond® Roofing{' '}
              <span className="text-accent">Done Right</span>, First Time
            </h1>
            <p className="mt-3 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
              Licensed, insured local roofers for re-roofs, restorations, cladding and leak repairs,
              backed by a written 25-year workmanship warranty.
            </p>

            {/* Hero CTA pill */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-primary p-1.5">
              <a
                href="#quote-form"
                className="btn-pulse inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Get A Free Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
              >
                View Services
              </a>
            </div>

            {/* Trust strip, visible without scrolling */}
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {usps.map((usp) => (
                <li
                  key={usp.title}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card/80 px-3 py-2.5 backdrop-blur sm:flex-col sm:items-start sm:gap-1"
                >
                  <usp.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-heading text-sm font-bold leading-tight text-foreground">
                      {usp.title}
                    </p>
                    <p className="hidden text-xs leading-snug text-muted-foreground sm:block">
                      {usp.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Google review proof */}
            <figure className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
              <GoogleLogo className="mt-0.5 h-6 w-6 shrink-0" />
              <div>
                <Stars className="h-4 w-4" />
                <blockquote className="mt-1.5 text-sm leading-relaxed text-pretty text-foreground">
                  “Would most definitely recommend Sam and his company. The problem was identified
                  straight away and sorted fast.”
                </blockquote>
                <figcaption className="mt-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Cathryn O.</span> · Verified Google
                  Review · <span className="font-semibold text-accent">21 five-star reviews</span>
                </figcaption>
              </div>
            </figure>
          </div>

          {/* RIGHT: form */}
          <div className="lg:sticky lg:top-6">
            <LeadForm />
          </div>
        </div>
      </section>

      <ProcessSection />
      <ServicesSection />
      <ComparisonSection />
      <ReviewsSection />
      <SystemSection />
      <FinancingSection />
      <GuaranteeSection />
      <FinalCta />
      <SiteFooter />

      <MobileBar />
      <StickyCta />
      <FloatingGoogleRating />
    </div>
  )
}

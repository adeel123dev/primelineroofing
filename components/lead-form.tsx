'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronDown, Lock, ShieldCheck } from 'lucide-react'
import { Stars } from '@/components/stars'
import { GoogleLogo } from '@/components/google-logo'

const inputClass =
  'w-full rounded-lg border border-input bg-surface-2 px-3.5 py-2.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30'

export function LeadForm({
  id = 'quote-form',
  compact = false,
}: {
  id?: string
  compact?: boolean
}) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      id={id}
      className="cta-card form-glow scroll-mt-24 overflow-hidden rounded-2xl border border-accent/50 bg-card ring-1 ring-accent/20"
    >
      <div className="border-b border-border bg-surface-2 px-5 py-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
          Free · No Obligation
        </p>
        <h2 className="mt-1 font-heading text-xl font-extrabold text-balance text-foreground sm:text-2xl">
          Get Your Free Roof Quote
        </h2>
        <div className="mt-2 flex items-center justify-center gap-2">
          <GoogleLogo className="h-4 w-4" />
          <Stars className="h-4 w-4" />
          <span className="text-sm font-bold text-foreground">5.0</span>
          <span className="text-sm text-muted-foreground">· 21 reviews</span>
        </div>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
          <h3 className="font-heading text-lg font-bold text-foreground">Request received!</h3>
          <p className="text-sm text-muted-foreground text-pretty">
            Thanks! A Primeline Roofing specialist will call you within 24 hours with your free,
            no-obligation quote. Need us sooner?{' '}
            <a href="tel:+61242177737" className="font-semibold text-accent underline">
              Call (02) 4217 7737
            </a>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 px-5 py-5 sm:px-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="First name *"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                placeholder="Last name *"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Mobile Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Mobile number *"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email address *"
              className={inputClass}
            />
          </div>

          <div className="relative">
            <label htmlFor="service" className="sr-only">
              Service Required
            </label>
            <select id="service" name="service" defaultValue="" className={`${inputClass} appearance-none`}>
              <option value="" disabled>
                What do you need? (optional)
              </option>
              <option value="metal-roofing">Metal Roofing / Re-Roof</option>
              <option value="cladding">Architectural Cladding</option>
              <option value="restoration">Roof Restoration</option>
              <option value="repair">Roof Repair / Leak</option>
              <option value="emergency">Emergency / Storm Damage</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
          </div>

          <button
            type="submit"
            className="btn-pulse w-full rounded-lg bg-accent px-4 py-3.5 text-base font-extrabold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
          >
            Get My Free Quote →
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-0.5 text-center text-[11px] font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Lock className="h-3 w-3" aria-hidden="true" /> Your details stay private
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-accent" aria-hidden="true" /> Reply within 24hrs
            </span>
          </div>
        </form>
      )}

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 border-t border-border bg-surface-2 px-4 py-2.5 text-[11px] font-semibold text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <GoogleLogo className="h-3.5 w-3.5" /> Google 5.0
        </span>
        <span className="text-border">•</span>
        <span>Colorbond®</span>
        <span className="text-border">•</span>
        <span>HiPages Verified</span>
        <span className="text-border">•</span>
        <span>Licensed NSW</span>
      </div>
    </div>
  )
}

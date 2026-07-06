import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Get Free Quote', href: '#quote-form' },
]

const serviceLinks = [
  'Metal Roofing',
  'Architectural Cladding',
  'Roof Restorations',
  'Roof Repairs & Leak Detection',
  'Emergency Storm Response',
]

const serviceAreas = [
  'Wollongong',
  'Illawarra',
  'Shellharbour',
  'Oak Flats',
  'Kiama',
  'Nowra',
  'Ulladulla',
  'Moss Vale',
  'Bowral',
  'Mittagong',
  'Southern Highlands',
  'Camden',
  'Narellan',
  'Campbelltown',
  'Penrith',
  'Emu Plains',
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/primeline-logo.webp"
                alt="Primeline Roofing logo"
                width={40}
                height={40}
                className="h-9 w-9 rounded-md object-contain"
              />
              <span className="font-heading text-base font-extrabold text-foreground">
                Primeline Roofing
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
              South Coast owned &amp; operated. Premium metal roofing, cladding &amp; restorations.
              Licensed &amp; fully insured. We follow SafeWork NSW guidance and WHS requirements.
            </p>
            <p className="mt-4 inline-flex rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground">
              Licensed &amp; Fully Insured
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-sm font-bold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+61242177737"
                  className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" /> (02) 4217 7737
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@primelineroofing.com.au"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                  office@primelineroofing.com.au
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  PO Box 4016 Towradgi NSW 2518
                  <br />
                  Servicing Wollongong, Illawarra, South Coast NSW &amp; Western Sydney
                </span>
              </li>
              <li className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
                Emergency: 24/7 Available
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">Service Areas</h3>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Primeline Roofing. Licensed &amp; Fully Insured (NSW Fair
            Trading). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-accent">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

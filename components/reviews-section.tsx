import { Stars } from '@/components/stars'
import { GoogleLogo } from '@/components/google-logo'

const reviews = [
  {
    name: 'James Mitchell',
    initials: 'JM',
    when: '2 months ago',
    quote:
      'Primeline handled our metal roof replacement with absolute professionalism. The team arrived on schedule, communicated clearly throughout, and the finish is exceptional. Highly recommended for any roofing work around Illewong.',
  },
  {
    name: 'Sarah Mitchell',
    initials: 'SM',
    when: '1 year ago',
    quote:
      'Had a leak during last month’s storm and they came out within hours. Fixed it properly and explained what caused the issue. Worth every penny for peace of mind.',
  },
  {
    name: 'David Chen',
    initials: 'DC',
    when: 'Verified review',
    quote:
      'Storm damage after the East Coast Low left our roof in terrible shape. Primeline attended same-day, tarped everything safely, then came back for a full restoration. Outstanding emergency response.',
  },
  {
    name: 'James & Linda Patterson',
    initials: 'JP',
    when: '3 months ago',
    quote:
      'Engaged Primeline for architectural cladding on a renovation. Their design expertise and installation precision exceeded our expectations, giving us a stunning facade that elevated the whole property. Truly professional.',
  },
  {
    name: 'Robert Wilson',
    initials: 'RW',
    when: '2 months ago',
    quote:
      'Emergency call on a Sunday afternoon and they showed up the same day to stop a roof leak before serious damage. Friendly, professional, and reasonably priced. That’s the kind of service you hope exists.',
  },
  {
    name: 'Trevor Holmes',
    initials: 'TH',
    when: '6 months ago',
    quote:
      'Licensed and fully insured, and we verified their credentials before booking. The new Colorbond roof looks fantastic and they provided extended warranty documentation. Best decision we made for our property.',
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <GoogleLogo className="h-5 w-5" />
            <span className="font-heading text-lg font-extrabold text-foreground">5.0</span>
            <Stars className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">· 21 reviews</span>
          </div>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-balance text-foreground sm:text-3xl">
            What Illawarra &amp; South Coast Homeowners Say
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Real, verified reviews from customers across the region.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {review.initials}
                  </span>
                  <div className="leading-tight">
                    <figcaption className="text-sm font-semibold text-foreground">
                      {review.name}
                    </figcaption>
                    <span className="text-xs text-muted-foreground">{review.when}</span>
                  </div>
                </div>
                <GoogleLogo className="h-5 w-5" />
              </div>
              <Stars className="mt-4 h-4 w-4" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-foreground">
                “{review.quote}”
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=Primeline+Roofing+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
          >
            <GoogleLogo className="h-4 w-4" /> Read all 21 reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}

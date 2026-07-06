import { Star } from 'lucide-react'

export function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-gold text-gold`} aria-hidden="true" />
      ))}
    </span>
  )
}

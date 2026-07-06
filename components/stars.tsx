export function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={className}
          viewBox="0 0 20 20"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FBBC04"
            d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.01l-4.94 2.69.94-5.49-4-3.9 5.53-.8z"
          />
        </svg>
      ))}
    </span>
  )
}

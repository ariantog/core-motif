type LogoMarkProps = {
  className?: string
  title?: string
}

export function LogoMark({ className = '', title = 'Corenation' }: LogoMarkProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label={`${title} CN logo`}
    >
      <path
        d="M 82 24 L 35 15 L 15 60 L 35 105 L 82 96"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M 40 32 L 40 88 M 40 32 L 72 88 M 72 32 L 72 88"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

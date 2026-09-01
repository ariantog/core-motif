export type LogoVariant =
  | 'continuum'
  | 'fold'
  | 'counterform'
  | 'linea'
  | 'oblique'
  | 'crossbrace'

type LogoMarkProps = {
  className?: string
  title?: string
  variant?: LogoVariant
}

const marks = {
  continuum: (
    <path
      d="M90 38H70C42 38 24 55 24 80s18 42 46 42h4l42-84v84"
      fill="none"
      stroke="currentColor"
      strokeWidth="19"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  ),
  fold: (
    <g>
      <path d="M22 28h100l-22 24H52v48l18 18-18 18-30-28Z" />
      <path d="m62 62 18-14 34 42V48h24v84h-22L86 94v30l-24 16Z" />
    </g>
  ),
  counterform: (
    <g>
      <path d="M22 24h54C60 42 52 58 52 80s8 38 24 56H22Z" />
      <path d="M86 24h52v72L86 48Z" />
      <path d="m86 64 52 48v24H86Z" />
    </g>
  ),
  linea: (
    <g>
      <path d="M24 18c12 20 28 34 44 42v16c-10 7-16 18-18 32-7 12-17 24-30 34 9-25 14-45 14-62S30 43 24 18Z" />
      <path
        d="M24 18c12 20 28 34 44 42v16c-10 7-16 18-18 32-7 12-17 24-30 34 9-25 14-45 14-62S30 43 24 18Z"
        transform="translate(160) scale(-1 1)"
      />
      <path d="m74 30 6-12 6 12v100l-6 12-6-12Z" />
    </g>
  ),
  oblique: (
    <g>
      <path d="m20 22 52 30v20L30 48Z" />
      <path d="m30 58 42 24v20L38 82Z" />
      <path d="m40 94 32 18v28l-22-12Z" />
      <path d="m20 22 52 30v20L30 48Z" transform="translate(160) scale(-1 1)" />
      <path d="m30 58 42 24v20L38 82Z" transform="translate(160) scale(-1 1)" />
      <path d="m40 94 32 18v28l-22-12Z" transform="translate(160) scale(-1 1)" />
    </g>
  ),
  crossbrace: (
    <g>
      <path d="M24 18c23 20 38 37 40 56v18c-2 20-17 37-42 52 11-23 17-44 17-64S33 41 24 18Z" />
      <path
        d="M24 18c23 20 38 37 40 56v18c-2 20-17 37-42 52 11-23 17-44 17-64S33 41 24 18Z"
        transform="translate(160) scale(-1 1)"
      />
      <path d="m50 48 16-10 44 74-16 10Z" />
    </g>
  ),
} as const

export function LogoMark({
  className = '',
  title = 'Corenation',
  variant = 'continuum',
}: LogoMarkProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 160"
      fill="currentColor"
      role="img"
      aria-label={`${title} ${variant} logo concept`}
    >
      {marks[variant]}
    </svg>
  )
}

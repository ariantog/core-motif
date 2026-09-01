export type LogoVariant =
  | 'continuum'
  | 'fold'
  | 'counterform'
  | 'linea'
  | 'oblique'
  | 'crossbrace'
  | 'hex-heritage'
  | 'hex-emboss'
  | 'hex-inline'
  | 'hex-facet'
  | 'hex-sideline'

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
  'hex-heritage': (
    <g>
      <path fillRule="evenodd" d="M80 16l55 32v64l-55 32-55-32V48Zm0 11L34 54v52l46 27 46-27V54Z" />
      <path fillRule="evenodd" d="M80 32l42 24v48l-42 24-42-24V56Zm0 3L41 58v44l39 23 39-23V58Z" />
      <path d="M54 100V56h14l24 32V60l14-8v52h-14L68 76v28Z" />
    </g>
  ),
  'hex-emboss': (
    <path
      fillRule="evenodd"
      d="M80 16l55 32v64l-55 32-55-32V48ZM50 108h17V76l24 32h17V52h-16v33L67 52H50Z"
    />
  ),
  'hex-inline': (
    <g>
      <path fillRule="evenodd" d="M80 16l55 32v64l-55 32-55-32V48Zm0 6L30 51v58l50 29 50-29V51Z" />
      <path fillRule="evenodd" d="M80 28l45 26v52l-45 26-45-26V54Zm0 3L38 56v48l42 25 42-25V56Z" />
      <path d="M56 104V56h9l30 38V56h9v48h-9L65 66v38Z" />
    </g>
  ),
  'hex-facet': (
    <g>
      <path
        fillRule="evenodd"
        d="M70 22h20l35 20 10 18v40l-10 18-35 20H70l-35-20-10-18V60l10-18Zm10 5L34 54v52l46 27 46-27V54Z"
      />
      <path d="M54 104V56h14l24 32V56h14v48h-14L68 72v32Z" />
    </g>
  ),
  'hex-sideline': (
    <g>
      <path fillRule="evenodd" d="M144 80l-32 55H48L16 80l32-55h64Zm-11 0-26-46H53L27 80l26 46h54Z" />
      <path d="M54 104V56h14l24 32V56h14v48h-14L68 72v32Z" />
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

type LogoMarkProps = {
  className?: string
  title?: string
  variant?: 'core-cut' | 'interlock' | 'velocity' | 'core-block'
}

const marks = {
  'core-cut': (
    <>
      <path d="M143 40 88 8 25 39 12 80l13 41 63 31 55-32-13-22-43 25-38-19-6-24 6-24 38-19 43 25Z" />
      <path d="M58 106V54h18l28 39V54h18v52h-18L76 67v39Z" />
    </>
  ),
  interlock: (
    <>
      <path d="m20 42 56-32 69 28-13 22-55-23-35 21Zm0 0 22 16v44l-22 16Zm0 76 22-16 35 21 55-23 13 22-69 28Z" />
      <path d="M58 108V52h18l34 40V52h19v56h-19L77 68v40Z" />
    </>
  ),
  velocity: (
    <>
      <path d="M150 14H64L21 43 8 107l29 39h84l17-25H51l-16-20 9-43 29-19h62Z" />
      <path d="m58 112 12-62h19l22 39 8-39h22l-12 62h-20L87 72l-8 40Z" />
    </>
  ),
  'core-block': (
    <>
      <path d="M137 12H65L17 43v74l48 31h72l-14-26H75l-30-18V56l30-18h48Z" />
      <path d="M61 108V52h18l30 37V52h20v56h-18L81 71v37Z" />
    </>
  ),
} as const

export function LogoMark({
  className = '',
  title = 'Corenation',
  variant = 'core-cut',
}: LogoMarkProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 160"
      fill="currentColor"
      role="img"
      aria-label={`${title} CN ${variant} logo concept`}
    >
      {marks[variant]}
    </svg>
  )
}

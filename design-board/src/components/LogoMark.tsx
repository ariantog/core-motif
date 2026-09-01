type LogoVariant =
  | 'core-cut'
  | 'interlock'
  | 'velocity'
  | 'core-block'
  | 'seal'
  | 'shield'
  | 'lockbar'
  | 'stamp'
  | 'orbit'
  | 'wedge'

type LogoMarkProps = {
  className?: string
  title?: string
  variant?: LogoVariant
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
  seal: (
    <>
      <path d="M118 44A56 56 0 1 0 118 116L100 104A36 36 0 1 1 100 56Z" />
      <path d="M56 50h16l22 36V50h16v60h-16L72 74v36H56Z" />
    </>
  ),
  shield: (
    <>
      <path d="M128 46 80 16 32 46 20 100l60 44 28-20-12-16-16 12-40-28 8-40 32-18 36 20Z" />
      <path d="M58 56h16l20 30V56h16v56H94L74 82v30H58Z" />
    </>
  ),
  lockbar: (
    <>
      <path d="M132 28H60L22 56v48l38 28h72l-14-22H70L48 92V68l22-16h50Z" />
      <path d="M72 50h16l26 36V50h16v60H98L72 74Z" />
    </>
  ),
  stamp: (
    <>
      <path d="M140 22H22v116h118V118H44V42h96Z" />
      <path d="M58 52h14l22 34V52h14v56H94L72 74v34H58Z" />
    </>
  ),
  orbit: (
    <>
      <path d="M128 38A64 48 0 1 0 128 122L110 110A44 32 0 1 1 110 50Z" />
      <path d="M62 48h14l24 40V48h16v64H96L72 72v40H62Z" />
    </>
  ),
  wedge: (
    <>
      <path d="M148 18 52 8 12 80l40 72 96-10-16-24-70 8-26-46 26-46 70 8Z" />
      <path d="M58 48h16l26 40V48h16v64H96L70 72v40H58Z" />
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

import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const piece = (gender: 'men' | 'women', story: string, file: string) =>
  asset(`assets/pace/${gender}/${story}/${file}`)

export const paceRules = [
  {
    lock: 'Standard machines only',
    flower: 'Lockstitch, 4-thread overlock, 2-needle coverstitch, elastic, coil zip, and bartack / narrow zigzag',
  },
  {
    lock: 'Bought mesh',
    flower: 'Eyelet and pinhole ventilation comes from supplier mesh yardage cut into panels - never from laser cutting',
  },
  {
    lock: 'No bonding',
    flower: 'Turned hems, coverstitch, fold-over binding, piping, and topstitch replace glued or heat-sealed edges',
  },
  {
    lock: 'No prints',
    flower: 'No kanji, hex C, wordmark, dye-sub graphic, printed dots, flowers, waves, or fake printed seams',
  },
  {
    lock: 'Run block',
    flower: 'Hip-length tee, race tank, 5-6 inch men short, or 3-4 inch women short - no polo, skirt, or lifting short',
  },
  {
    lock: 'One build idea',
    flower: 'Mesh zone, panel, cape vent, rib channel, cross flap, or pleat - do not stack several on one SKU',
  },
]

export const paceMenPalette = [
  { hex: '#1C2228', name: 'Air Grid ink #1C2228' },
  { hex: '#3D454C', name: 'Air Grid slate #3D454C' },
  { hex: '#C45C38', name: 'Stride rust #C45C38' },
  { hex: '#E6E2D8', name: 'Cloud bone #E6E2D8' },
  { hex: '#9AA3A8', name: 'Cloud gray #9AA3A8' },
  { hex: '#273B46', name: 'Draft storm #273B46' },
  { hex: '#73838A', name: 'Draft mineral #73838A' },
  { hex: '#302C2A', name: 'Relay espresso #302C2A' },
  { hex: '#657068', name: 'Relay moss #657068' },
  { hex: '#202327', name: 'Axis charcoal #202327' },
  { hex: '#315B62', name: 'Axis teal #315B62' },
  { hex: '#BBC6C4', name: 'Axis mist #BBC6C4' },
]

export const paceWomenPalette = [
  { hex: '#E6D4C4', name: 'Swift sand #E6D4C4' },
  { hex: '#D8B8B4', name: 'Swift blush #D8B8B4' },
  { hex: '#D4A090', name: 'Aero clay #D4A090' },
  { hex: '#F2EBE4', name: 'Aero pearl #F2EBE4' },
  { hex: '#F0E8DC', name: 'Curve bone #F0E8DC' },
  { hex: '#E4B090', name: 'Curve apricot #E4B090' },
  { hex: '#5B4B57', name: 'Crossflow plum #5B4B57' },
  { hex: '#B79AA4', name: 'Crossflow mauve #B79AA4' },
  { hex: '#574741', name: 'Rib cocoa #574741' },
  { hex: '#AE8E86', name: 'Rib rose taupe #AE8E86' },
  { hex: '#7E8C82', name: 'Tempo sage #7E8C82' },
  { hex: '#D7A184', name: 'Tempo apricot #D7A184' },
]

export const paceStories = [
  {
    id: 'air-grid',
    gender: 'men' as const,
    name: 'Air Grid',
    fade: 'Supplier eyelet mesh / ink + slate + mist',
    note: 'Sewn side and back ventilation panels; overlock plus mist coverstitch. No holes cut in-house.',
  },
  {
    id: 'stride-panel',
    gender: 'men' as const,
    name: 'Stride Panel',
    fade: 'Angular side block / black + slate + rust',
    note: 'Rust panel wraps underarm to rear hem. Standard overlock and visible coverstitch.',
  },
  {
    id: 'cloud-yoke',
    gender: 'men' as const,
    name: 'Cloud Yoke',
    fade: 'Mesh shoulder cape / bone + cool gray + ink',
    note: 'Bought mesh yoke and sew-in piping. Fold-over binding and coverstitched hems.',
  },
  {
    id: 'back-draft',
    gender: 'men' as const,
    name: 'Back Draft',
    fade: 'Overlap cape / storm + mineral + bone',
    note: 'A free yoke edge opens over mesh; three bartacks hold it without closing airflow.',
  },
  {
    id: 'relay-rib',
    gender: 'men' as const,
    name: 'Relay Rib',
    fade: 'Stretch-rib channels / espresso + moss + sand',
    note: 'Rib side panels provide mobility; 2 mm piping and coverstitch define the seam.',
  },
  {
    id: 'axis-split',
    gender: 'men' as const,
    name: 'Axis Split',
    fade: 'Offset saddle / charcoal + teal + mist',
    note: 'One asymmetric saddle wraps front to back; supplier mesh sits at the opposite gusset.',
  },
  {
    id: 'swift-map',
    gender: 'women' as const,
    name: 'Swift Map',
    fade: 'Mapped seams / sand + blush + fog',
    note: 'Princess, shoulder, and spine seams use inward overlock plus fog coverstitch.',
  },
  {
    id: 'aero-racer',
    gender: 'women' as const,
    name: 'Aero Racer',
    fade: 'Mesh spine / rose clay + pearl + slate',
    note: 'Supplier mesh runs down the spine. Openings use sewn binding, never bonded edges.',
  },
  {
    id: 'curve-pace',
    gender: 'women' as const,
    name: 'Curve Pace',
    fade: 'Curved panel / bone + apricot + charcoal',
    note: 'Separate apricot panel sweeps hip to opposite shoulder and wraps the back.',
  },
  {
    id: 'crossflow',
    gender: 'women' as const,
    name: 'Crossflow',
    fade: 'Crossed overlap vents / plum + mauve + shell',
    note: 'Turned and topstitched flaps cross over mesh; only the ends are bartacked.',
  },
  {
    id: 'rib-trace',
    gender: 'women' as const,
    name: 'Rib Trace',
    fade: 'Contour rib panels / cocoa + rose taupe + oat',
    note: 'Rib follows waist and shoulder; oat piping sits only on the front panel edge.',
  },
  {
    id: 'tempo-pleat',
    gender: 'women' as const,
    name: 'Tempo Pleat',
    fade: 'Mesh-backed box pleat / sage + fog + apricot',
    note: 'Pleat lies closed at rest and opens over a sewn mesh gusset during movement.',
  },
]

export const paceProductionDetails = [
  {
    lock: 'J1 / M1 / M2',
    flower: 'Tops: 120-135 gsm micro-birdseye jersey. Vents: 90-115 gsm supplier eyelet or pinhole mesh.',
  },
  {
    lock: 'W1 / L1',
    flower: 'Shorts: 90-110 gsm stretch woven shell + 75-90 gsm tricot brief liner.',
  },
  {
    lock: 'Main seam',
    flower: '6 mm 4-thread overlock. Visible maps add 5-6 mm gauge two-needle coverstitch.',
  },
  {
    lock: 'Open edge',
    flower: 'Overlock, turn 6 mm once, single-needle topstitch. Use on capes, crossed flaps, and pleats.',
  },
  {
    lock: 'Stress point',
    flower: '8-10 mm bartack at split tops, vent ends, pleat stops, and both zipper ends.',
  },
  {
    lock: 'Waist / pocket',
    flower: '35 mm fully encased elastic; #3 nylon coil rear zipper, 12-14 cm opening.',
  },
]

export const paceMenMockups: Mockup[] = [
  { src: piece('men', 'air-grid', 'tee.png'), title: 'Air Grid tee', type: 'Men tee / sewn eyelet-mesh zones + detail', line: 'pace' },
  { src: piece('men', 'air-grid', 'tank.png'), title: 'Air Grid tank', type: 'Men tank / sewn eyelet-mesh zones + detail', line: 'pace' },
  { src: piece('men', 'air-grid', 'shorts.png'), title: 'Air Grid shorts', type: 'Men shorts / mesh panels, liner, zip + detail', line: 'pace' },
  { src: piece('men', 'stride-panel', 'tee.png'), title: 'Stride Panel tee', type: 'Men tee / angular rust block', line: 'pace' },
  { src: piece('men', 'stride-panel', 'tank.png'), title: 'Stride Panel tank', type: 'Men tank / angular rust block', line: 'pace' },
  { src: piece('men', 'stride-panel', 'shorts.png'), title: 'Stride Panel shorts', type: 'Men shorts / angular rust block', line: 'pace' },
  { src: piece('men', 'cloud-yoke', 'tee.png'), title: 'Cloud Yoke tee', type: 'Men tee / mesh shoulder cape', line: 'pace' },
  { src: piece('men', 'cloud-yoke', 'tank.png'), title: 'Cloud Yoke tank', type: 'Men tank / mesh shoulder cape', line: 'pace' },
  { src: piece('men', 'cloud-yoke', 'shorts.png'), title: 'Cloud Yoke shorts', type: 'Men shorts / mesh side panel', line: 'pace' },
  { src: piece('men', 'back-draft', 'tee.png'), title: 'Back Draft tee', type: 'Men tee / overlap cape + mesh close-up', line: 'pace' },
  { src: piece('men', 'back-draft', 'tank.png'), title: 'Back Draft tank', type: 'Men tank / overlap cape + mesh close-up', line: 'pace' },
  { src: piece('men', 'back-draft', 'shorts.png'), title: 'Back Draft shorts', type: 'Men shorts / vented yoke + zip close-up', line: 'pace' },
  { src: piece('men', 'relay-rib', 'tee.png'), title: 'Relay Rib tee', type: 'Men tee / rib channel + piping close-up', line: 'pace' },
  { src: piece('men', 'relay-rib', 'tank.png'), title: 'Relay Rib tank', type: 'Men tank / rib channel + piping close-up', line: 'pace' },
  { src: piece('men', 'relay-rib', 'shorts.png'), title: 'Relay Rib shorts', type: 'Men shorts / rib insert + piping close-up', line: 'pace' },
  { src: piece('men', 'axis-split', 'tee.png'), title: 'Axis Split tee', type: 'Men tee / offset saddle tech board', line: 'pace' },
  { src: piece('men', 'axis-split', 'tank.png'), title: 'Axis Split tank', type: 'Men tank / offset saddle tech board', line: 'pace' },
  { src: piece('men', 'axis-split', 'shorts.png'), title: 'Axis Split shorts', type: 'Men shorts / diagonal panel detail', line: 'pace' },
]

export const paceWomenMockups: Mockup[] = [
  { src: piece('women', 'swift-map', 'tee.png'), title: 'Swift Map tee', type: 'Women tee / mapped seams', line: 'pace' },
  { src: piece('women', 'swift-map', 'tank.png'), title: 'Swift Map tank', type: 'Women tank / mapped seams', line: 'pace' },
  { src: piece('women', 'swift-map', 'shorts.png'), title: 'Swift Map shorts', type: 'Women shorts / mapped seams', line: 'pace' },
  { src: piece('women', 'aero-racer', 'tee.png'), title: 'Aero Racer tee', type: 'Women tee / mesh spine', line: 'pace' },
  { src: piece('women', 'aero-racer', 'tank.png'), title: 'Aero Racer tank', type: 'Women tank / mesh spine racer', line: 'pace' },
  { src: piece('women', 'aero-racer', 'shorts.png'), title: 'Aero Racer shorts', type: 'Women shorts / mesh side split', line: 'pace' },
  { src: piece('women', 'curve-pace', 'tee.png'), title: 'Curve Pace tee', type: 'Women tee / hip-to-shoulder curve', line: 'pace' },
  { src: piece('women', 'curve-pace', 'tank.png'), title: 'Curve Pace tank', type: 'Women tank / hip-to-shoulder curve', line: 'pace' },
  { src: piece('women', 'curve-pace', 'shorts.png'), title: 'Curve Pace shorts', type: 'Women shorts / curved side panel', line: 'pace' },
  { src: piece('women', 'crossflow', 'tee.png'), title: 'Crossflow tee', type: 'Women tee / crossed vent + mesh close-up', line: 'pace' },
  { src: piece('women', 'crossflow', 'tank.png'), title: 'Crossflow tank', type: 'Women tank / crossed mesh back close-up', line: 'pace' },
  { src: piece('women', 'crossflow', 'shorts.png'), title: 'Crossflow shorts', type: 'Women shorts / crossover split detail', line: 'pace' },
  { src: piece('women', 'rib-trace', 'tee.png'), title: 'Rib Trace tee', type: 'Women tee / contour rib + piping detail', line: 'pace' },
  { src: piece('women', 'rib-trace', 'tank.png'), title: 'Rib Trace tank', type: 'Women tank / contour rib tech board', line: 'pace' },
  { src: piece('women', 'rib-trace', 'shorts.png'), title: 'Rib Trace shorts', type: 'Women shorts / rib insert tech board', line: 'pace' },
  { src: piece('women', 'tempo-pleat', 'tee.png'), title: 'Tempo Pleat tee', type: 'Women tee / expandable mesh pleat detail', line: 'pace' },
  { src: piece('women', 'tempo-pleat', 'tank.png'), title: 'Tempo Pleat tank', type: 'Women tank / expandable mesh pleat detail', line: 'pace' },
  { src: piece('women', 'tempo-pleat', 'shorts.png'), title: 'Tempo Pleat shorts', type: 'Women shorts / mesh kick-pleat detail', line: 'pace' },
]

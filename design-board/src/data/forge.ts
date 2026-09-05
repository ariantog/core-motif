import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const piece = (gender: 'men' | 'women', story: string, file: string) =>
  asset(`assets/forge/${gender}/${story}/${file}`)

export const forgeRules = [
  {
    lock: 'Standard machines only',
    flower: 'Lockstitch, 4-thread overlock, 2-needle coverstitch, webbing, eyelet, #5 coil zip, and bartack / narrow zigzag',
  },
  {
    lock: 'Gym fabric',
    flower: '165-185 gsm interlock or pique tops (J2). 130-150 gsm stretch-woven shorts (W2). Not Pace 120 gsm race jersey.',
  },
  {
    lock: 'Gym block',
    flower: 'Men regular/boxy, drop-arm tank, 8 inch short. Women fitted hip-length, scoop tank, 5 inch high-rise. No crop, polo, or race split.',
  },
  {
    lock: 'No prints',
    flower: 'No kanji, hex C, wordmark, flowers, waves, or dye-sub. Design is panel, webbing, welt pocket, and bartack.',
  },
  {
    lock: 'No race kit',
    flower: 'No purchased mesh maps, laser holes, bonded edges, drop-tail, or 3-5 inch run shorts. Pace stays the run wall.',
  },
  {
    lock: 'One build idea',
    flower: 'Rust block, webbing channel, welt / bellows pocket, mapped industrial seam, or webbing bind - one idea per SKU',
  },
]

export const forgeMenPalette = [
  { hex: '#1A1C1E', name: 'Cinder charcoal #1A1C1E' },
  { hex: '#8A8680', name: 'Cinder concrete #8A8680' },
  { hex: '#C45C38', name: 'Cinder rust #C45C38' },
  { hex: '#0E1012', name: 'Rack black #0E1012' },
  { hex: '#4A5240', name: 'Rack olive #4A5240' },
  { hex: '#D6CFB5', name: 'Rack cream #D6CFB5' },
  { hex: '#202327', name: 'Plate ink #202327' },
  { hex: '#4A5258', name: 'Plate slate #4A5258' },
  { hex: '#9AA0A4', name: 'Plate steel #9AA0A4' },
]

export const forgeWomenPalette = [
  { hex: '#C47854', name: 'Kiln clay #C47854' },
  { hex: '#C8C2B8', name: 'Kiln concrete #C8C2B8' },
  { hex: '#6A6460', name: 'Kiln pewter #6A6460' },
  { hex: '#2A2A2A', name: 'Anvil charcoal #2A2A2A' },
  { hex: '#C45C38', name: 'Anvil rust #C45C38' },
  { hex: '#E6E2D8', name: 'Anvil bone #E6E2D8' },
  { hex: '#B8B0A6', name: 'Slab concrete #B8B0A6' },
  { hex: '#B86A4A', name: 'Slab rust #B86A4A' },
  { hex: '#2A2A2A', name: 'Slab ink #2A2A2A' },
]

export const forgeStories = [
  {
    id: 'cinder-block',
    gender: 'men' as const,
    name: 'Cinder Block',
    fade: 'Angular rust block / charcoal + concrete + rust',
    note: 'Rust panel wraps underarm to rear hem. Concrete wedge at the side. Heavy rust bartacks.',
  },
  {
    id: 'rack-web',
    gender: 'men' as const,
    name: 'Rack Web',
    fade: '25 mm webbing channel / black + olive + cream',
    note: 'Cream webbing across the back yoke with gunmetal eyelets. Olive is a saddle, not a kanji print.',
  },
  {
    id: 'plate-pocket',
    gender: 'men' as const,
    name: 'Plate Pocket',
    fade: 'Welt / bellows phone pocket / ink + slate + steel',
    note: 'Slate yoke. Right-side welt on tops. 20 mm bellows zip on the short thigh plus a rear zip.',
  },
  {
    id: 'kiln-seam',
    gender: 'women' as const,
    name: 'Kiln Seam',
    fade: 'Mapped industrial seams / clay + concrete + pewter',
    note: 'Princess and spine seams with pewter coverstitch. Shape from seams, not a floral.',
  },
  {
    id: 'anvil-strap',
    gender: 'women' as const,
    name: 'Anvil Strap',
    fade: 'Webbing bind + back strap / charcoal + rust + bone',
    note: '20 mm rust webbing binds neck and armholes. A bartacked bridge or hip channel. No jewelry hardware.',
  },
  {
    id: 'slab-pocket',
    gender: 'women' as const,
    name: 'Slab Pocket',
    fade: 'Hip welt + rust sides / concrete + rust + ink',
    note: 'Rust side panels wrap front to back. Right-hip welt on tops. Bellows zip on the short thigh.',
  },
]

export const forgeProductionDetails = [
  {
    lock: 'J2 / W2 / L1',
    flower: 'Tops: 165-185 gsm interlock or pique. Shorts: 130-150 gsm stretch woven + 75-90 gsm tricot liner.',
  },
  {
    lock: 'WB / EY / Z3',
    flower: '20-25 mm woven nylon webbing. 6-8 mm gunmetal eyelets. #5 nylon coil zip, 14-16 cm opening.',
  },
  {
    lock: 'Main seam',
    flower: '8 mm 4-thread overlock on heavier gym fabric. Visible maps add 5-6 mm gauge two-needle coverstitch.',
  },
  {
    lock: 'Webbing / eyelet',
    flower: 'Twin-needle or lockstitch box. Catch both ends into a seam or bartack. Washers on the inside of every eyelet.',
  },
  {
    lock: 'Pocket',
    flower: 'Lockstitch welt, 80-90 x 150-160 mm bag, corner bartacks. Bellows uses a 15-20 mm gusset. Hip / thigh only.',
  },
  {
    lock: 'Stress point',
    flower: '8-10 mm bartack at splits, webbing ends, welt corners, and both zipper ends.',
  },
  {
    lock: 'Waist / hem',
    flower: 'Men short: 50 mm encased elastic. Women short: 35 mm. Tee/tank hem: 20 mm coverstitch turnback.',
  },
]

export const forgeMenMockups: Mockup[] = [
  { src: piece('men', 'cinder-block', 'tee.png'), title: 'Cinder Block tee', type: 'Men tee / rust block + bartacks', line: 'forge' },
  { src: piece('men', 'cinder-block', 'tank.png'), title: 'Cinder Block tank', type: 'Men tank / drop-arm rust block', line: 'forge' },
  { src: piece('men', 'cinder-block', 'shorts.png'), title: 'Cinder Block shorts', type: 'Men shorts / 8 inch rust block', line: 'forge' },
  { src: piece('men', 'rack-web', 'tee.png'), title: 'Rack Web tee', type: 'Men tee / cream webbing + eyelets', line: 'forge' },
  { src: piece('men', 'rack-web', 'tank.png'), title: 'Rack Web tank', type: 'Men tank / webbing yoke + eyelets', line: 'forge' },
  { src: piece('men', 'rack-web', 'shorts.png'), title: 'Rack Web shorts', type: 'Men shorts / webbing hip channels', line: 'forge' },
  { src: piece('men', 'plate-pocket', 'tee.png'), title: 'Plate Pocket tee', type: 'Men tee / slate yoke + hip welt', line: 'forge' },
  { src: piece('men', 'plate-pocket', 'tank.png'), title: 'Plate Pocket tank', type: 'Men tank / slate yoke + hip welt', line: 'forge' },
  { src: piece('men', 'plate-pocket', 'shorts.png'), title: 'Plate Pocket shorts', type: 'Men shorts / thigh bellows + rear zip', line: 'forge' },
]

export const forgeWomenMockups: Mockup[] = [
  { src: piece('women', 'kiln-seam', 'tee.png'), title: 'Kiln Seam tee', type: 'Women tee / mapped industrial seams', line: 'forge' },
  { src: piece('women', 'kiln-seam', 'tank.png'), title: 'Kiln Seam tank', type: 'Women tank / mapped industrial seams', line: 'forge' },
  { src: piece('women', 'kiln-seam', 'shorts.png'), title: 'Kiln Seam shorts', type: 'Women shorts / 5 inch mapped seams', line: 'forge' },
  { src: piece('women', 'anvil-strap', 'tee.png'), title: 'Anvil Strap tee', type: 'Women tee / rust webbing bind', line: 'forge' },
  { src: piece('women', 'anvil-strap', 'tank.png'), title: 'Anvil Strap tank', type: 'Women tank / webbing bind + back strap', line: 'forge' },
  { src: piece('women', 'anvil-strap', 'shorts.png'), title: 'Anvil Strap shorts', type: 'Women shorts / rust webbing channel', line: 'forge' },
  { src: piece('women', 'slab-pocket', 'tee.png'), title: 'Slab Pocket tee', type: 'Women tee / hip welt + rust sides', line: 'forge' },
  { src: piece('women', 'slab-pocket', 'tank.png'), title: 'Slab Pocket tank', type: 'Women tank / hip welt + rust sides', line: 'forge' },
  { src: piece('women', 'slab-pocket', 'shorts.png'), title: 'Slab Pocket shorts', type: 'Women shorts / hip welt + bellows zip', line: 'forge' },
]

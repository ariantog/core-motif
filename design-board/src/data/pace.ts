import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const piece = (gender: 'men' | 'women', story: string, file: string) =>
  asset(`assets/pace/${gender}/${story}/${file}`)

export const paceRules = [
  { lock: 'No prints', flower: 'No kanji, no hex C, no wordmark, no dye-sub graphic. Construction is the design' },
  { lock: 'One build', flower: 'Laser-cut map, angular block, mesh yoke, mapped seams, mesh spine, or curve panel — one per SKU' },
  { lock: 'Run cut', flower: 'Tee, race tank, split running short. No polo, no padel skirt, no lifting short' },
  { lock: 'Light fabric', flower: 'Jersey + air-mesh + pin-dot knit. If it photographs like a lifting tee, recut' },
  { lock: 'Split the pack', flower: 'Men stay ink / rust / bone-gray. Women stay sand / clay / apricot. Never share one panel map' },
]

export const paceMenPalette = [
  { hex: '#1C2228', name: 'Ink #1C2228' },
  { hex: '#3D454C', name: 'Slate #3D454C' },
  { hex: '#C5CDD1', name: 'Mist #C5CDD1' },
  { hex: '#0E1012', name: 'Black #0E1012' },
  { hex: '#C45C38', name: 'Rust #C45C38' },
  { hex: '#E6E2D8', name: 'Bone #E6E2D8' },
  { hex: '#9AA3A8', name: 'Cool gray #9AA3A8' },
  { hex: '#2A3138', name: 'Yoke ink #2A3138' },
]

export const paceWomenPalette = [
  { hex: '#E6D4C4', name: 'Sand #E6D4C4' },
  { hex: '#D8B8B4', name: 'Blush #D8B8B4' },
  { hex: '#C8C2BC', name: 'Fog #C8C2BC' },
  { hex: '#D4A090', name: 'Rose clay #D4A090' },
  { hex: '#F2EBE4', name: 'Pearl #F2EBE4' },
  { hex: '#6A6460', name: 'Slate #6A6460' },
  { hex: '#F0E8DC', name: 'Bone #F0E8DC' },
  { hex: '#E4B090', name: 'Apricot #E4B090' },
  { hex: '#3A3A3A', name: 'Charcoal #3A3A3A' },
]

export const paceStories = [
  {
    id: 'vent-map',
    gender: 'men' as const,
    name: 'Vent Map',
    fade: 'Laser-cut heat map · ink / slate / mist',
    note: 'Holes go through the fabric at underarm, saddle, and upper back. Bonded hem.',
  },
  {
    id: 'stride-panel',
    gender: 'men' as const,
    name: 'Stride Panel',
    fade: 'Angular side block · black / slate / rust',
    note: 'Rust panel runs underarm to hem and wraps the back. Contrast flatlock.',
  },
  {
    id: 'cloud-yoke',
    gender: 'men' as const,
    name: 'Cloud Yoke',
    fade: 'Mesh shoulder cape · bone / cool gray / ink',
    note: 'Open air-mesh yoke across shoulders. 2mm reflective pinline at the yoke seam.',
  },
  {
    id: 'swift-map',
    gender: 'women' as const,
    name: 'Swift Map',
    fade: 'Mapped seams · sand / blush / fog',
    note: 'Princess and shoulder seams follow the body. Fog coverstitch is the graphic.',
  },
  {
    id: 'aero-racer',
    gender: 'women' as const,
    name: 'Aero Racer',
    fade: 'Mesh spine · rose clay / pearl / slate',
    note: 'Pearl air-mesh down the spine. Bonded neck and armhole. Racerback on the tank.',
  },
  {
    id: 'curve-pace',
    gender: 'women' as const,
    name: 'Curve Pace',
    fade: 'Hip-to-shoulder curve · bone / apricot / charcoal',
    note: 'One apricot panel sweeps hip to opposite shoulder and wraps the back.',
  },
]

export const paceMenMockups: Mockup[] = [
  { src: piece('men', 'vent-map', 'tee.png'), title: 'Vent Map tee', type: 'Men tee · laser-cut heat map', line: 'pace' },
  { src: piece('men', 'vent-map', 'tank.png'), title: 'Vent Map tank', type: 'Men tank · laser-cut heat map', line: 'pace' },
  { src: piece('men', 'vent-map', 'shorts.png'), title: 'Vent Map shorts', type: 'Men shorts · laser-cut heat map', line: 'pace' },
  { src: piece('men', 'stride-panel', 'tee.png'), title: 'Stride Panel tee', type: 'Men tee · angular rust block', line: 'pace' },
  { src: piece('men', 'stride-panel', 'tank.png'), title: 'Stride Panel tank', type: 'Men tank · angular rust block', line: 'pace' },
  { src: piece('men', 'stride-panel', 'shorts.png'), title: 'Stride Panel shorts', type: 'Men shorts · angular rust block', line: 'pace' },
  { src: piece('men', 'cloud-yoke', 'tee.png'), title: 'Cloud Yoke tee', type: 'Men tee · mesh shoulder cape', line: 'pace' },
  { src: piece('men', 'cloud-yoke', 'tank.png'), title: 'Cloud Yoke tank', type: 'Men tank · mesh shoulder cape', line: 'pace' },
  { src: piece('men', 'cloud-yoke', 'shorts.png'), title: 'Cloud Yoke shorts', type: 'Men shorts · mesh side cape', line: 'pace' },
]

export const paceWomenMockups: Mockup[] = [
  { src: piece('women', 'swift-map', 'tee.png'), title: 'Swift Map tee', type: 'Women tee · mapped seams', line: 'pace' },
  { src: piece('women', 'swift-map', 'tank.png'), title: 'Swift Map tank', type: 'Women tank · mapped seams', line: 'pace' },
  { src: piece('women', 'swift-map', 'shorts.png'), title: 'Swift Map shorts', type: 'Women shorts · mapped seams', line: 'pace' },
  { src: piece('women', 'aero-racer', 'tee.png'), title: 'Aero Racer tee', type: 'Women tee · mesh spine', line: 'pace' },
  { src: piece('women', 'aero-racer', 'tank.png'), title: 'Aero Racer tank', type: 'Women tank · mesh spine racer', line: 'pace' },
  { src: piece('women', 'aero-racer', 'shorts.png'), title: 'Aero Racer shorts', type: 'Women shorts · mesh side split', line: 'pace' },
  { src: piece('women', 'curve-pace', 'tee.png'), title: 'Curve Pace tee', type: 'Women tee · hip-to-shoulder curve', line: 'pace' },
  { src: piece('women', 'curve-pace', 'tank.png'), title: 'Curve Pace tank', type: 'Women tank · hip-to-shoulder curve', line: 'pace' },
  { src: piece('women', 'curve-pace', 'shorts.png'), title: 'Curve Pace shorts', type: 'Women shorts · curved side panel', line: 'pace' },
]

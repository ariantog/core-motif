import type { Mockup } from './kanji'

export const floralMockups: Mockup[] = [
  { src: '/assets/women-floral/sakura/belt-sakura-pink.png', title: 'Gym Belt — Sakura Pink', type: 'Belt', line: 'women' },
  { src: '/assets/women-floral/sakura/gloves-sakura-pink.png', title: 'Gym Gloves — Sakura', type: 'Accessory', line: 'women' },
  { src: '/assets/women-floral/sakura/tee-sakura-pink.png', title: 'Training Tee — Sakura Branch', type: 'Apparel', line: 'women' },
  { src: '/assets/women-floral/sakura/shorts-sakura-pink.png', title: 'Training Shorts — Sakura', type: 'Apparel', line: 'women' },
  { src: '/assets/women-floral/sakura/knee-sakura-pink.png', title: 'Knee Support — Sakura', type: 'Accessory', line: 'women' },
  { src: '/assets/women-floral/lavender/belt-lavender-lilac.png', title: 'Gym Belt — Lavender Lilac', type: 'Belt', line: 'women' },
  { src: '/assets/women-floral/lavender/gloves-lavender-lilac.png', title: 'Gym Gloves — Lavender', type: 'Accessory', line: 'women' },
  { src: '/assets/women-floral/lavender/tank-lavender-lilac.png', title: 'Training Tank — Lavender Spray', type: 'Apparel', line: 'women' },
]

export const floralRules = [
  { lock: 'Pink / blush / rose SKUs', flower: 'Sakura — five-petal cherry blossom + thin branch' },
  { lock: 'Lilac / purple SKUs', flower: 'Lavender — spikes, not round sakura heads' },
  { lock: 'Never', flower: 'Kanji patches, gold-foil script, mixed bouquet on one SKU' },
]

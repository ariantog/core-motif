import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const piece = (gender: 'men' | 'women', story: string, file: string) =>
  asset(`assets/padel/${gender}/${story}/${file}`)

export const padelRules = [
  { lock: 'No marks', flower: 'No kanji, no hex C, no CORENATION wordmark, no club badge' },
  { lock: 'Pastel fade only', flower: 'All-over dye-sub gradient. No floral, no marble, no wave graphic' },
  { lock: 'Split the court', flower: 'Men = cool glass / harbor. Women = warm clay / lemon. Never mix on one SKU' },
  { lock: 'Women extras', flower: 'Skirt / skort is women-only. Men stay polo, tee, tank, shorts' },
]

export const padelMenPalette = [
  { hex: '#F2FAFC', name: 'Ice #F2FAFC' },
  { hex: '#B8E8D8', name: 'Mint glass #B8E8D8' },
  { hex: '#C8EEF0', name: 'Soft cyan #C8EEF0' },
  { hex: '#EEF4F6', name: 'Pearl fog #EEF4F6' },
  { hex: '#C4D8E0', name: 'Dusty sky #C4D8E0' },
  { hex: '#8FB8B8', name: 'Harbor teal #8FB8B8' },
]

export const padelWomenPalette = [
  { hex: '#FAF4EC', name: 'Ivory #FAF4EC' },
  { hex: '#F5D8C0', name: 'Apricot #F5D8C0' },
  { hex: '#F0C4A8', name: 'Peach clay #F0C4A8' },
  { hex: '#F8F6EC', name: 'Cream #F8F6EC' },
  { hex: '#E4F0C8', name: 'Honeydew #E4F0C8' },
  { hex: '#F0E8A8', name: 'Lemon #F0E8A8' },
]

export const padelStories = [
  {
    id: 'glass-court',
    gender: 'men' as const,
    name: 'Glass Court',
    fade: 'Ice → mint glass → soft cyan',
    note: 'Cool morning glass. Men polo, tee, tank, shorts.',
  },
  {
    id: 'harbor-haze',
    gender: 'men' as const,
    name: 'Harbor Haze',
    fade: 'Pearl fog → dusty sky → harbor teal',
    note: 'Muted sea haze. Men polo, tee, tank, shorts.',
  },
  {
    id: 'sunrise-clay',
    gender: 'women' as const,
    name: 'Sunrise Clay',
    fade: 'Ivory → apricot → peach clay',
    note: 'Warm clay-court sunrise. Women polo, tee, tank, shorts, skirt.',
  },
  {
    id: 'lemon-sherbet',
    gender: 'women' as const,
    name: 'Lemon Sherbet',
    fade: 'Cream → honeydew → pale lemon',
    note: 'Soft citrus. Women polo, tee, tank, shorts, skirt.',
  },
]

export const padelMenMockups: Mockup[] = [
  { src: piece('men', 'glass-court', 'polo.png'), title: 'Glass Court polo', type: 'Men polo · ice → mint', line: 'padel' },
  { src: piece('men', 'glass-court', 'tee.png'), title: 'Glass Court tee', type: 'Men tee · ice → mint', line: 'padel' },
  { src: piece('men', 'glass-court', 'tank.png'), title: 'Glass Court tank', type: 'Men tank · ice → mint', line: 'padel' },
  { src: piece('men', 'glass-court', 'shorts.png'), title: 'Glass Court shorts', type: 'Men shorts · ice → mint', line: 'padel' },
  { src: piece('men', 'harbor-haze', 'polo.png'), title: 'Harbor Haze polo', type: 'Men polo · fog → teal', line: 'padel' },
  { src: piece('men', 'harbor-haze', 'tee.png'), title: 'Harbor Haze tee', type: 'Men tee · fog → teal', line: 'padel' },
  { src: piece('men', 'harbor-haze', 'tank.png'), title: 'Harbor Haze tank', type: 'Men tank · fog → teal', line: 'padel' },
  { src: piece('men', 'harbor-haze', 'shorts.png'), title: 'Harbor Haze shorts', type: 'Men shorts · fog → teal', line: 'padel' },
]

export const padelWomenMockups: Mockup[] = [
  { src: piece('women', 'sunrise-clay', 'polo.png'), title: 'Sunrise Clay polo', type: 'Women polo · ivory → clay', line: 'padel' },
  { src: piece('women', 'sunrise-clay', 'tee.png'), title: 'Sunrise Clay tee', type: 'Women tee · ivory → clay', line: 'padel' },
  { src: piece('women', 'sunrise-clay', 'tank.png'), title: 'Sunrise Clay tank', type: 'Women tank · ivory → clay', line: 'padel' },
  { src: piece('women', 'sunrise-clay', 'shorts.png'), title: 'Sunrise Clay shorts', type: 'Women shorts · ivory → clay', line: 'padel' },
  { src: piece('women', 'sunrise-clay', 'skirt.png'), title: 'Sunrise Clay skirt', type: 'Women skirt · ivory → clay', line: 'padel' },
  { src: piece('women', 'lemon-sherbet', 'polo.png'), title: 'Lemon Sherbet polo', type: 'Women polo · cream → lemon', line: 'padel' },
  { src: piece('women', 'lemon-sherbet', 'tee.png'), title: 'Lemon Sherbet tee', type: 'Women tee · cream → lemon', line: 'padel' },
  { src: piece('women', 'lemon-sherbet', 'tank.png'), title: 'Lemon Sherbet tank', type: 'Women tank · cream → lemon', line: 'padel' },
  { src: piece('women', 'lemon-sherbet', 'shorts.png'), title: 'Lemon Sherbet shorts', type: 'Women shorts · cream → lemon', line: 'padel' },
  { src: piece('women', 'lemon-sherbet', 'skirt.png'), title: 'Lemon Sherbet skirt', type: 'Women skirt · cream → lemon', line: 'padel' },
]

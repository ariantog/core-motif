import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const piece = (gender: 'men' | 'women', story: string, file: string) =>
  asset(`assets/padel/${gender}/${story}/${file}`)

export const padelRules = [
  { lock: 'No marks', flower: 'No kanji, no hex C, no CORENATION wordmark, no club badge' },
  { lock: '2–3 hues', flower: 'New drops must show two or three distinct pastels. White-to-one-color is v1 only' },
  { lock: 'Split the court', flower: 'Men stay cool mint / teal / periwinkle. Women stay peach / rose / pistachio. Never mix on one SKU' },
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

export const padelMenMultiPalette = [
  { hex: '#8ED9C4', name: 'Seafoam #8ED9C4' },
  { hex: '#8CC4E8', name: 'Sky aqua #8CC4E8' },
  { hex: '#B8B0E8', name: 'Periwinkle #B8B0E8' },
  { hex: '#6FB8B0', name: 'Teal #6FB8B0' },
  { hex: '#A098D8', name: 'Lilac-blue #A098D8' },
]

export const padelWomenMultiPalette = [
  { hex: '#F0B898', name: 'Peach #F0B898' },
  { hex: '#E8A8C4', name: 'Dusty rose #E8A8C4' },
  { hex: '#C8B0E0', name: 'Lilac #C8B0E0' },
  { hex: '#E8B888', name: 'Apricot #E8B888' },
  { hex: '#C8D888', name: 'Pistachio #C8D888' },
]

export const padelStories = [
  {
    id: 'glass-court',
    gender: 'men' as const,
    name: 'Glass Court',
    fade: 'v1 · ice → mint (one-hue wash)',
    note: 'Cool morning glass. Men polo, tee, tank, shorts.',
  },
  {
    id: 'harbor-haze',
    gender: 'men' as const,
    name: 'Harbor Haze',
    fade: 'v1 · fog → teal (one-hue wash)',
    note: 'Muted sea haze. Men polo, tee, tank, shorts.',
  },
  {
    id: 'sunrise-clay',
    gender: 'women' as const,
    name: 'Sunrise Clay',
    fade: 'v1 · ivory → peach clay (one-hue wash)',
    note: 'Warm clay-court sunrise. Women polo, tee, tank, shorts, skirt.',
  },
  {
    id: 'lemon-sherbet',
    gender: 'women' as const,
    name: 'Lemon Sherbet',
    fade: 'v1 · cream → lemon (one-hue wash)',
    note: 'Soft citrus. Women polo, tee, tank, shorts, skirt.',
  },
  {
    id: 'reef-trio',
    gender: 'men' as const,
    name: 'Reef Trio',
    fade: 'v2 · 3 color · seafoam → sky aqua → periwinkle',
    note: 'Three equal bands. Men polo, tee, tank, shorts.',
  },
  {
    id: 'dual-glass',
    gender: 'men' as const,
    name: 'Dual Glass',
    fade: 'v2 · 2 color · teal → periwinkle',
    note: 'Two-hue split. Men polo, tee, tank, shorts.',
  },
  {
    id: 'clay-bloom',
    gender: 'women' as const,
    name: 'Clay Bloom',
    fade: 'v2 · 3 color · peach → dusty rose → lilac',
    note: 'Three equal bands. Women polo, tee, tank, shorts, skirt.',
  },
  {
    id: 'dual-sherbet',
    gender: 'women' as const,
    name: 'Dual Sherbet',
    fade: 'v2 · 2 color · apricot → pistachio',
    note: 'Two-hue split. Women polo, tee, tank, shorts, skirt.',
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

export const padelMenMultiMockups: Mockup[] = [
  { src: piece('men', 'reef-trio', 'polo.png'), title: 'Reef Trio polo', type: 'Men polo · 3 color · mint → sky → periwinkle', line: 'padel' },
  { src: piece('men', 'reef-trio', 'tee.png'), title: 'Reef Trio tee', type: 'Men tee · 3 color · mint → sky → periwinkle', line: 'padel' },
  { src: piece('men', 'reef-trio', 'tank.png'), title: 'Reef Trio tank', type: 'Men tank · 3 color · mint → sky → periwinkle', line: 'padel' },
  { src: piece('men', 'reef-trio', 'shorts.png'), title: 'Reef Trio shorts', type: 'Men shorts · 3 color · mint → sky → periwinkle', line: 'padel' },
  { src: piece('men', 'dual-glass', 'polo.png'), title: 'Dual Glass polo', type: 'Men polo · 2 color · teal → periwinkle', line: 'padel' },
  { src: piece('men', 'dual-glass', 'tee.png'), title: 'Dual Glass tee', type: 'Men tee · 2 color · teal → periwinkle', line: 'padel' },
  { src: piece('men', 'dual-glass', 'tank.png'), title: 'Dual Glass tank', type: 'Men tank · 2 color · teal → periwinkle', line: 'padel' },
  { src: piece('men', 'dual-glass', 'shorts.png'), title: 'Dual Glass shorts', type: 'Men shorts · 2 color · teal → periwinkle', line: 'padel' },
]

export const padelWomenMultiMockups: Mockup[] = [
  { src: piece('women', 'clay-bloom', 'polo.png'), title: 'Clay Bloom polo', type: 'Women polo · 3 color · peach → rose → lilac', line: 'padel' },
  { src: piece('women', 'clay-bloom', 'tee.png'), title: 'Clay Bloom tee', type: 'Women tee · 3 color · peach → rose → lilac', line: 'padel' },
  { src: piece('women', 'clay-bloom', 'tank.png'), title: 'Clay Bloom tank', type: 'Women tank · 3 color · peach → rose → lilac', line: 'padel' },
  { src: piece('women', 'clay-bloom', 'shorts.png'), title: 'Clay Bloom shorts', type: 'Women shorts · 3 color · peach → rose → lilac', line: 'padel' },
  { src: piece('women', 'clay-bloom', 'skirt.png'), title: 'Clay Bloom skirt', type: 'Women skirt · 3 color · peach → rose → lilac', line: 'padel' },
  { src: piece('women', 'dual-sherbet', 'polo.png'), title: 'Dual Sherbet polo', type: 'Women polo · 2 color · apricot → pistachio', line: 'padel' },
  { src: piece('women', 'dual-sherbet', 'tee.png'), title: 'Dual Sherbet tee', type: 'Women tee · 2 color · apricot → pistachio', line: 'padel' },
  { src: piece('women', 'dual-sherbet', 'tank.png'), title: 'Dual Sherbet tank', type: 'Women tank · 2 color · apricot → pistachio', line: 'padel' },
  { src: piece('women', 'dual-sherbet', 'shorts.png'), title: 'Dual Sherbet shorts', type: 'Women shorts · 2 color · apricot → pistachio', line: 'padel' },
  { src: piece('women', 'dual-sherbet', 'skirt.png'), title: 'Dual Sherbet skirt', type: 'Women skirt · 2 color · apricot → pistachio', line: 'padel' },
]

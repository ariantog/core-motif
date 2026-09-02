import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const piece = (gender: 'men' | 'women', story: string, file: string) =>
  asset(`assets/padel/${gender}/${story}/${file}`)

export const padelRules = [
  { lock: 'No marks', flower: 'No kanji, no hex C, no CORENATION wordmark, no club badge' },
  { lock: 'Directional color', flower: 'Use diagonal, curved, side-swept, or radial fields—not another stacked fade' },
  { lock: 'Stitch models', flower: 'v4 panels are sewn. Contrast flatlock, coverstitch, or double-needle is the hero — not a printed fake seam' },
  { lock: 'Split the court', flower: 'Women stay warm pastels. Men v4 is earth (terracotta / moss). Men v1–v3 stay cool mint / teal / periwinkle. Never mix on one SKU' },
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

export const padelMenDirectionalPalette = [
  { hex: '#86D2C4', name: 'Crosscourt seafoam #86D2C4' },
  { hex: '#84B9E6', name: 'Crosscourt sky #84B9E6' },
  { hex: '#AAA0DB', name: 'Crosscourt violet #AAA0DB' },
  { hex: '#8EC8D0', name: 'Orbit aqua #8EC8D0' },
  { hex: '#9BD5B1', name: 'Orbit mint #9BD5B1' },
  { hex: '#ACA4D8', name: 'Orbit violet #ACA4D8' },
]

export const padelWomenDirectionalPalette = [
  { hex: '#F1B49B', name: 'Ribbon peach #F1B49B' },
  { hex: '#E6A2C0', name: 'Ribbon rose #E6A2C0' },
  { hex: '#C0AFE0', name: 'Ribbon lilac #C0AFE0' },
  { hex: '#CAD98F', name: 'Halo pistachio #CAD98F' },
  { hex: '#F0B49D', name: 'Halo peach #F0B49D' },
  { hex: '#C7B5DF', name: 'Halo lilac #C7B5DF' },
]

export const padelWomenStitchPalette = [
  { hex: '#F4C4C8', name: 'Petal blush #F4C4C8' },
  { hex: '#FAF4EC', name: 'Petal cream #FAF4EC' },
  { hex: '#D4E8A8', name: 'Petal pistachio #D4E8A8' },
  { hex: '#F0E8A8', name: 'Citrus lemon #F0E8A8' },
  { hex: '#F0C4A0', name: 'Citrus apricot #F0C4A0' },
  { hex: '#E4F0C8', name: 'Citrus honeydew #E4F0C8' },
]

export const padelMenEarthPalette = [
  { hex: '#C47854', name: 'Clay terracotta #C47854' },
  { hex: '#D7B98E', name: 'Clay sandstone #D7B98E' },
  { hex: '#6B5344', name: 'Clay soil #6B5344' },
  { hex: '#6E7B4A', name: 'Baseline moss #6E7B4A' },
  { hex: '#8A8F5C', name: 'Baseline olive #8A8F5C' },
  { hex: '#D8C6A2', name: 'Baseline sand #D8C6A2' },
]

export const padelStories = [
  {
    id: 'petal-seam',
    gender: 'women' as const,
    name: 'Petal Seam',
    fade: 'v4 · princess / petal panels · blush / cream / pistachio',
    note: 'Sewn curved panels with cream contrast flatlock.',
  },
  {
    id: 'citrus-stitch',
    gender: 'women' as const,
    name: 'Citrus Stitch',
    fade: 'v4 · raglan + yoke · lemon / apricot / honeydew',
    note: 'Apricot contrast overlock on raglan and yoke seams.',
  },
  {
    id: 'clay-court',
    gender: 'men' as const,
    name: 'Clay Court',
    fade: 'v4 · angular panels · terracotta / sandstone / soil',
    note: 'Heavy sandstone double-needle topstitch.',
  },
  {
    id: 'moss-baseline',
    gender: 'men' as const,
    name: 'Moss Baseline',
    fade: 'v4 · raglan + side panels · moss / olive / sand',
    note: 'Sand contrast flatlock on raglan and side panels.',
  },
  {
    id: 'crosscourt-mesh',
    gender: 'men' as const,
    name: 'Crosscourt Mesh',
    fade: 'v3 · diagonal fields · seafoam / sky / periwinkle',
    note: 'Diamond-net dissolve appears only at one angled transition.',
  },
  {
    id: 'orbit-serve',
    gender: 'men' as const,
    name: 'Orbit Serve',
    fade: 'v3 · off-center radial · aqua / mint / periwinkle',
    note: 'Overlapping halos with four restrained trajectory pinlines.',
  },
  {
    id: 'rally-ribbon',
    gender: 'women' as const,
    name: 'Rally Ribbon',
    fade: 'v3 · S-curve fields · peach / rose / lilac',
    note: 'Flowing color path with a small micro-dash dissolve.',
  },
  {
    id: 'halo-serve',
    gender: 'women' as const,
    name: 'Halo Serve',
    fade: 'v3 · side-origin arcs · pistachio / peach / lilac',
    note: 'Offset oval fields with two short rows of curved ticks.',
  },
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

export const padelMenDirectionalMockups: Mockup[] = [
  { src: piece('men', 'crosscourt-mesh', 'polo.png'), title: 'Crosscourt Mesh polo', type: 'Men polo · diagonal + net dissolve', line: 'padel' },
  { src: piece('men', 'crosscourt-mesh', 'tee.png'), title: 'Crosscourt Mesh tee', type: 'Men tee · diagonal + net dissolve', line: 'padel' },
  { src: piece('men', 'crosscourt-mesh', 'tank.png'), title: 'Crosscourt Mesh tank', type: 'Men tank · diagonal + net dissolve', line: 'padel' },
  { src: piece('men', 'crosscourt-mesh', 'shorts.png'), title: 'Crosscourt Mesh shorts', type: 'Men shorts · diagonal + net dissolve', line: 'padel' },
  { src: piece('men', 'orbit-serve', 'polo.png'), title: 'Orbit Serve polo', type: 'Men polo · off-center halo + pinlines', line: 'padel' },
  { src: piece('men', 'orbit-serve', 'tee.png'), title: 'Orbit Serve tee', type: 'Men tee · off-center halo + pinlines', line: 'padel' },
  { src: piece('men', 'orbit-serve', 'tank.png'), title: 'Orbit Serve tank', type: 'Men tank · off-center halo + pinlines', line: 'padel' },
  { src: piece('men', 'orbit-serve', 'shorts.png'), title: 'Orbit Serve shorts', type: 'Men shorts · off-center halo + pinlines', line: 'padel' },
]

export const padelWomenStitchMockups: Mockup[] = [
  { src: piece('women', 'petal-seam', 'polo.png'), title: 'Petal Seam polo', type: 'Women polo · princess panels + cream stitch', line: 'padel' },
  { src: piece('women', 'petal-seam', 'tee.png'), title: 'Petal Seam tee', type: 'Women tee · princess panels + cream stitch', line: 'padel' },
  { src: piece('women', 'petal-seam', 'tank.png'), title: 'Petal Seam tank', type: 'Women tank · princess panels + cream stitch', line: 'padel' },
  { src: piece('women', 'petal-seam', 'shorts.png'), title: 'Petal Seam shorts', type: 'Women shorts · princess panels + cream stitch', line: 'padel' },
  { src: piece('women', 'petal-seam', 'skirt.png'), title: 'Petal Seam skirt', type: 'Women skirt · princess panels + cream stitch', line: 'padel' },
  { src: piece('women', 'citrus-stitch', 'polo.png'), title: 'Citrus Stitch polo', type: 'Women polo · raglan + apricot overlock', line: 'padel' },
  { src: piece('women', 'citrus-stitch', 'tee.png'), title: 'Citrus Stitch tee', type: 'Women tee · raglan + apricot overlock', line: 'padel' },
  { src: piece('women', 'citrus-stitch', 'tank.png'), title: 'Citrus Stitch tank', type: 'Women tank · yoke + apricot overlock', line: 'padel' },
  { src: piece('women', 'citrus-stitch', 'shorts.png'), title: 'Citrus Stitch shorts', type: 'Women shorts · yoke + apricot overlock', line: 'padel' },
  { src: piece('women', 'citrus-stitch', 'skirt.png'), title: 'Citrus Stitch skirt', type: 'Women skirt · yoke + apricot overlock', line: 'padel' },
]

export const padelMenEarthMockups: Mockup[] = [
  { src: piece('men', 'clay-court', 'polo.png'), title: 'Clay Court polo', type: 'Men polo · angular panels + sandstone stitch', line: 'padel' },
  { src: piece('men', 'clay-court', 'tee.png'), title: 'Clay Court tee', type: 'Men tee · angular panels + sandstone stitch', line: 'padel' },
  { src: piece('men', 'clay-court', 'tank.png'), title: 'Clay Court tank', type: 'Men tank · angular panels + sandstone stitch', line: 'padel' },
  { src: piece('men', 'clay-court', 'shorts.png'), title: 'Clay Court shorts', type: 'Men shorts · angular panels + sandstone stitch', line: 'padel' },
  { src: piece('men', 'moss-baseline', 'polo.png'), title: 'Moss Baseline polo', type: 'Men polo · raglan + sand flatlock', line: 'padel' },
  { src: piece('men', 'moss-baseline', 'tee.png'), title: 'Moss Baseline tee', type: 'Men tee · raglan + sand flatlock', line: 'padel' },
  { src: piece('men', 'moss-baseline', 'tank.png'), title: 'Moss Baseline tank', type: 'Men tank · side panels + sand flatlock', line: 'padel' },
  { src: piece('men', 'moss-baseline', 'shorts.png'), title: 'Moss Baseline shorts', type: 'Men shorts · side panels + sand flatlock', line: 'padel' },
]

export const padelWomenDirectionalMockups: Mockup[] = [
  { src: piece('women', 'rally-ribbon', 'polo.png'), title: 'Rally Ribbon polo', type: 'Women polo · S-curve + dash dissolve', line: 'padel' },
  { src: piece('women', 'rally-ribbon', 'tee.png'), title: 'Rally Ribbon tee', type: 'Women tee · S-curve + dash dissolve', line: 'padel' },
  { src: piece('women', 'rally-ribbon', 'tank.png'), title: 'Rally Ribbon tank', type: 'Women tank · S-curve + dash dissolve', line: 'padel' },
  { src: piece('women', 'rally-ribbon', 'shorts.png'), title: 'Rally Ribbon shorts', type: 'Women shorts · S-curve + dash dissolve', line: 'padel' },
  { src: piece('women', 'rally-ribbon', 'skirt.png'), title: 'Rally Ribbon skirt', type: 'Women skirt · S-curve + dash dissolve', line: 'padel' },
  { src: piece('women', 'halo-serve', 'polo.png'), title: 'Halo Serve polo', type: 'Women polo · radial arcs + transition ticks', line: 'padel' },
  { src: piece('women', 'halo-serve', 'tee.png'), title: 'Halo Serve tee', type: 'Women tee · radial arcs + transition ticks', line: 'padel' },
  { src: piece('women', 'halo-serve', 'tank.png'), title: 'Halo Serve tank', type: 'Women tank · radial arcs + transition ticks', line: 'padel' },
  { src: piece('women', 'halo-serve', 'shorts.png'), title: 'Halo Serve shorts', type: 'Women shorts · radial arcs + transition ticks', line: 'padel' },
  { src: piece('women', 'halo-serve', 'skirt.png'), title: 'Halo Serve skirt', type: 'Women skirt · radial arcs + transition ticks', line: 'padel' },
]

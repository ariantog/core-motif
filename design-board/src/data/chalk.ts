import { asset } from '../lib/assets'
import type { Mockup } from './kanji'

const print = (file: string) => asset(`assets/chalk/prints/${file}`)
const tee = (file: string) => asset(`assets/chalk/tees/${file}`)

export const chalkRules = [
  {
    lock: 'Two screens',
    flower: 'Cream #D6CFB5 and rust #C45C38 plastisol. Charcoal or olive is the shirt, not a third ink.',
  },
  {
    lock: 'Powerlifting only',
    flower: 'Squat, bench, deadlift, load, chalk. Not yoga, not race mesh, not a kanji patch.',
  },
  {
    lock: 'One stamp per tee',
    flower: 'One animal or one quote. Do not stack a gorilla on a quote. Do not add the wordmark on the same face.',
  },
  {
    lock: 'Readable at 3 m',
    flower: 'Bold outlines, no gradients, no tiny knurl, no script. Chest print about 28 cm wide.',
  },
  {
    lock: 'Blank gym tee',
    flower: 'Print on a plain charcoal or olive gym tee. Not on Pace, not on Culture Run dye-sub, not over a kanji patch.',
  },
  {
    lock: 'Own quotes',
    flower: 'Use the locked lines only. No Nike lines, no movie quotes, no conquer-nations copy.',
  },
]

export const chalkPalette = [
  { hex: '#1A1C1E', name: 'Shirt charcoal #1A1C1E' },
  { hex: '#4A5240', name: 'Shirt olive #4A5240' },
  { hex: '#D6CFB5', name: 'Print cream #D6CFB5' },
  { hex: '#C45C38', name: 'Print rust #C45C38' },
]

export const chalkStories = [
  {
    id: 'gorilla-pull',
    kind: 'animal' as const,
    name: 'Gorilla Pull',
    fade: 'Gorilla deadlift lockout',
    note: 'Cream gorilla, rust plates. Chest stamp.',
  },
  {
    id: 'bear-squat',
    kind: 'animal' as const,
    name: 'Bear Squat',
    fade: 'Bear in the hole',
    note: 'High-bar squat, cream bear, rust plates.',
  },
  {
    id: 'bull-press',
    kind: 'animal' as const,
    name: 'Bull Press',
    fade: 'Bull bench press',
    note: 'Flat bench, cream bull, rust plates.',
  },
  {
    id: 'wolf-load',
    kind: 'animal' as const,
    name: 'Wolf Load',
    fade: 'Wolf sliding a plate',
    note: 'Load-up stamp. Cream wolf, rust plates.',
  },
  {
    id: 'tiger-chalk',
    kind: 'animal' as const,
    name: 'Tiger Chalk',
    fade: 'Tiger chalking hands',
    note: 'Simple rust stripes, cream chalk dust.',
  },
  {
    id: 'rhino-lockout',
    kind: 'animal' as const,
    name: 'Rhino Lockout',
    fade: 'Rhino deadlift lockout',
    note: 'Cream rhino, rust plates, lifting belt.',
  },
  {
    id: 'lock-it-out',
    kind: 'quote' as const,
    name: 'Lock It Out',
    fade: 'LOCK / IT / OUT',
    note: 'Stacked type, rust rule, small barbell.',
  },
  {
    id: 'bar-does-not-care',
    kind: 'quote' as const,
    name: 'The Bar Does Not Care',
    fade: 'THE BAR / DOES NOT CARE',
    note: 'Type split by a cream-and-rust barbell.',
  },
  {
    id: 'stay-in-the-hole',
    kind: 'quote' as const,
    name: 'Stay In The Hole',
    fade: 'STAY IN / THE HOLE',
    note: 'Rust box knockout on THE HOLE.',
  },
  {
    id: 'chalk-then-pull',
    kind: 'quote' as const,
    name: 'Chalk Then Pull',
    fade: 'CHALK. / THEN PULL.',
    note: 'Two lines, rust rule between.',
  },
  {
    id: 'last-rep-is-the-set',
    kind: 'quote' as const,
    name: 'Last Rep Is The Set',
    fade: 'LAST REP / IS THE SET',
    note: 'Two lines, rust rule between.',
  },
]

export const chalkPrints: Mockup[] = [
  { src: print('gorilla-pull.png'), title: 'Gorilla Pull', type: 'Animal stamp / deadlift lockout', line: 'chalk' },
  { src: print('bear-squat.png'), title: 'Bear Squat', type: 'Animal stamp / squat in the hole', line: 'chalk' },
  { src: print('bull-press.png'), title: 'Bull Press', type: 'Animal stamp / bench press', line: 'chalk' },
  { src: print('wolf-load.png'), title: 'Wolf Load', type: 'Animal stamp / loading plates', line: 'chalk' },
  { src: print('tiger-chalk.png'), title: 'Tiger Chalk', type: 'Animal stamp / chalking up', line: 'chalk' },
  { src: print('rhino-lockout.png'), title: 'Rhino Lockout', type: 'Animal stamp / deadlift lockout', line: 'chalk' },
  { src: print('quote-lock-it-out.png'), title: 'Lock It Out', type: 'Quote stamp / LOCK IT OUT', line: 'chalk' },
  { src: print('quote-bar-does-not-care.png'), title: 'The Bar Does Not Care', type: 'Quote stamp / THE BAR DOES NOT CARE', line: 'chalk' },
  { src: print('quote-stay-in-the-hole.png'), title: 'Stay In The Hole', type: 'Quote stamp / STAY IN THE HOLE', line: 'chalk' },
  { src: print('quote-chalk-then-pull.png'), title: 'Chalk Then Pull', type: 'Quote stamp / CHALK. THEN PULL.', line: 'chalk' },
  { src: print('quote-last-rep-is-the-set.png'), title: 'Last Rep Is The Set', type: 'Quote stamp / LAST REP IS THE SET', line: 'chalk' },
]

export const chalkTees: Mockup[] = [
  { src: tee('gorilla-pull.png'), title: 'Gorilla Pull tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('bear-squat.png'), title: 'Bear Squat tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('bull-press.png'), title: 'Bull Press tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('wolf-load.png'), title: 'Wolf Load tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('tiger-chalk.png'), title: 'Tiger Chalk tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('rhino-lockout.png'), title: 'Rhino Lockout tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('quote-lock-it-out.png'), title: 'Lock It Out tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('quote-bar-does-not-care.png'), title: 'The Bar Does Not Care tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('quote-stay-in-the-hole.png'), title: 'Stay In The Hole tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('quote-chalk-then-pull.png'), title: 'Chalk Then Pull tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('quote-last-rep-is-the-set.png'), title: 'Last Rep Is The Set tee', type: 'Charcoal gym tee / chest stamp', line: 'chalk' },
  { src: tee('gorilla-pull-olive.png'), title: 'Gorilla Pull olive tee', type: 'Olive gym tee / chest stamp', line: 'chalk' },
  { src: tee('quote-lock-it-out-olive.png'), title: 'Lock It Out olive tee', type: 'Olive gym tee / chest stamp', line: 'chalk' },
]

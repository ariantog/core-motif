export type KanjiConcept = {
  char: string
  romanization: string
  meaning: string
  collection: string
  accent: string
  applications: string
}

export const collections: { name: string; theme: string; items: KanjiConcept[] }[] = [
  {
    name: 'Strength / Power',
    theme: '強',
    items: [
      { char: '力', romanization: 'Chikara', meaning: 'Power, force', collection: 'Strength / Power', accent: 'Red / Gold', applications: 'Belt, straps, tee' },
      { char: '剛', romanization: 'Gō', meaning: 'Strength, firmness', collection: 'Strength / Power', accent: 'Red', applications: 'Knee sleeves, shorts' },
      { char: '武', romanization: 'Bu', meaning: 'Warrior, martial', collection: 'Strength / Power', accent: 'Red / Gold', applications: 'Tee, wraps, fight shorts' },
      { char: '鉄', romanization: 'Tetsu', meaning: 'Iron', collection: 'Strength / Power', accent: 'Gold / Cream', applications: 'Belt, chalk bag' },
    ],
  },
  {
    name: 'Discipline / Focus',
    theme: '修',
    items: [
      { char: '道', romanization: 'Dō', meaning: 'The way, path', collection: 'Discipline / Focus', accent: 'Gold / Cream', applications: 'Belt, duffel, joggers' },
      { char: '心', romanization: 'Kokoro', meaning: 'Heart, spirit', collection: 'Discipline / Focus', accent: 'Cream / Red', applications: 'Recovery tee, tote' },
      { char: '忍', romanization: 'Nin', meaning: 'Endurance', collection: 'Discipline / Focus', accent: 'Gold / Red', applications: 'Knee support, wrist band' },
      { char: '静', romanization: 'Sei', meaning: 'Stillness, calm', collection: 'Discipline / Focus', accent: 'Cream / Gold', applications: 'Hoodie, belt alt' },
    ],
  },
  {
    name: 'Victory / Movement',
    theme: '動',
    items: [
      { char: '勝', romanization: 'Shō', meaning: 'Victory', collection: 'Victory / Movement', accent: 'Gold / Red', applications: 'Belt, PR tee, shorts' },
      { char: '疾', romanization: 'Shitsu', meaning: 'Swift, fast', collection: 'Victory / Movement', accent: 'Red', applications: 'Running short, agility tee' },
      { char: '流', romanization: 'Ryū', meaning: 'Flow', collection: 'Victory / Movement', accent: 'Gold / Cream', applications: 'Tee, string bag' },
      { char: '破', romanization: 'Ha', meaning: 'Break through', collection: 'Victory / Movement', accent: 'Red', applications: 'Short patch, deadlift tee' },
    ],
  },
  {
    name: 'Elements / Nature',
    theme: '元',
    items: [
      { char: '火', romanization: 'Ka', meaning: 'Fire, intensity', collection: 'Elements / Nature', accent: 'Red / Gold', applications: 'HIIT tee, straps' },
      { char: '風', romanization: 'Fū', meaning: 'Wind, speed', collection: 'Elements / Nature', accent: 'Cream / Red', applications: 'Running short, knee sleeve' },
      { char: '雷', romanization: 'Rai', meaning: 'Thunder', collection: 'Elements / Nature', accent: 'Gold / Red', applications: 'Gloves, plyo short' },
      { char: '山', romanization: 'San', meaning: 'Mountain', collection: 'Elements / Nature', accent: 'Cream', applications: 'Squat tee, hybrid short' },
    ],
  },
]

export const mockups = [
  { src: '/assets/designs/belt-kanji-chikara-power.png', title: 'Lifting Belt — 力 Power', type: 'Belt' },
  { src: '/assets/designs/belt-kanji-dō-path.png', title: 'Lifting Belt — 道 The Way', type: 'Belt' },
  { src: '/assets/designs/shorts-kanji-shō-victory.png', title: 'Training Shorts — 勝 Victory', type: 'Apparel' },
  { src: '/assets/designs/tee-kanji-bu-warrior.png', title: 'Performance Tee — 武 Warrior', type: 'Apparel' },
  { src: '/assets/designs/gloves-kanji-rai-thunder.png', title: 'Training Gloves — 雷 Thunder', type: 'Accessory' },
  { src: '/assets/designs/knee-support-kanji-fū-wind.png', title: 'Knee Support — 風 Wind', type: 'Accessory' },
]

export const referenceSamples = [
  { src: '/assets/7b4bcb20-0ba0-446a-bd24-2a69dcf633c9.jpg', title: 'Reference — Dragon Shorts (龍)' },
  { src: '/assets/79516bb4-1828-4c9b-8dd0-e15ca2d0bb7d.jpg', title: 'Reference — Dragon Belt (龍)' },
]

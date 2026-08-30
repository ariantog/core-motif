export type Concept = {
  char: string
  romanization: string
  meaning: string
  accent: string
  applications: string
}

export type Mockup = {
  src: string
  title: string
  type: string
  line: 'men' | 'women' | 'culture' | 'ref'
}

export const collections: { name: string; theme: string; items: Concept[] }[] = [
  {
    name: 'Strength / Power',
    theme: '強',
    items: [
      { char: '力', romanization: 'Chikara', meaning: 'Power, force', accent: 'Red / Gold', applications: 'Belt, straps, tee' },
      { char: '剛', romanization: 'Gō', meaning: 'Strength, firmness', accent: 'Red', applications: 'Knee sleeves, shorts' },
      { char: '武', romanization: 'Bu', meaning: 'Warrior, martial', accent: 'Red / Gold', applications: 'Tee, wraps, fight shorts' },
      { char: '鉄', romanization: 'Tetsu', meaning: 'Iron', accent: 'Gold / Cream', applications: 'Belt, chalk bag' },
    ],
  },
  {
    name: 'Discipline / Focus',
    theme: '修',
    items: [
      { char: '道', romanization: 'Dō', meaning: 'The way, path', accent: 'Gold / Cream', applications: 'Belt, duffel, joggers' },
      { char: '心', romanization: 'Kokoro', meaning: 'Heart, spirit', accent: 'Cream / Red', applications: 'Recovery tee, tote' },
      { char: '忍', romanization: 'Nin', meaning: 'Endurance', accent: 'Gold / Red', applications: 'Knee support, wrist band' },
      { char: '静', romanization: 'Sei', meaning: 'Stillness, calm', accent: 'Cream / Gold', applications: 'Hoodie, belt alt' },
    ],
  },
  {
    name: 'Victory / Movement',
    theme: '動',
    items: [
      { char: '勝', romanization: 'Shō', meaning: 'Victory', accent: 'Gold / Red', applications: 'Belt, PR tee, shorts' },
      { char: '疾', romanization: 'Shitsu', meaning: 'Swift, fast', accent: 'Red', applications: 'Running short, agility tee' },
      { char: '流', romanization: 'Ryū', meaning: 'Flow', accent: 'Gold / Cream', applications: 'Tee, string bag' },
      { char: '破', romanization: 'Ha', meaning: 'Break through', accent: 'Red', applications: 'Short patch, deadlift tee' },
    ],
  },
  {
    name: 'Elements / Nature',
    theme: '元',
    items: [
      { char: '火', romanization: 'Ka', meaning: 'Fire, intensity', accent: 'Red / Gold', applications: 'HIIT tee, straps' },
      { char: '風', romanization: 'Fū', meaning: 'Wind, speed', accent: 'Cream', applications: 'Running short, knee sleeve' },
      { char: '雷', romanization: 'Rai', meaning: 'Thunder', accent: 'Gold / Red', applications: 'Gloves, plyo short' },
      { char: '山', romanization: 'San', meaning: 'Mountain', accent: 'Cream', applications: 'Squat tee, hybrid short' },
    ],
  },
  {
    name: 'Spirit / Forge',
    theme: '精',
    items: [
      { char: '極', romanization: 'Kyoku', meaning: 'Extreme, the edge', accent: 'Gold / Red', applications: 'Hyrox bag, meet belt' },
      { char: '魂', romanization: 'Tamashii', meaning: 'Soul, spirit', accent: 'Gold', applications: 'Belt alt, gloves' },
      { char: '鍛', romanization: 'Tan', meaning: 'Forge, temper', accent: 'Red', applications: 'Shorts, straps, tee' },
      { char: '闘', romanization: 'Tō', meaning: 'Fight, struggle', accent: 'Red / Gold', applications: 'Tee, fight shorts' },
      { char: '気', romanization: 'Ki', meaning: 'Energy, spirit', accent: 'Cream', applications: 'Training tank' },
      { char: '拳', romanization: 'Ken', meaning: 'Fist', accent: 'Gold', applications: 'Gloves, wraps' },
      { char: '鋼', romanization: 'Hagane', meaning: 'Steel', accent: 'Gold / Cream', applications: 'Straps, belt alt' },
      { char: '峰', romanization: 'Mine', meaning: 'Peak', accent: 'Cream', applications: 'Squat tee, duffel' },
    ],
  },
]

export const menMockups: Mockup[] = [
  { src: '/assets/designs/belt-kanji-chikara-power.png', title: 'Lifting Belt — 力 Power', type: 'Belt', line: 'men' },
  { src: '/assets/designs/belt-kanji-dō-path.png', title: 'Lifting Belt — 道 The Way', type: 'Belt', line: 'men' },
  { src: '/assets/designs/belt-kanji-kyoku-extreme.png', title: 'Lifting Belt — 極 Extreme', type: 'Belt', line: 'men' },
  { src: '/assets/designs/belt-kanji-tamashii-soul.png', title: 'Lifting Belt — 魂 Soul', type: 'Belt', line: 'men' },
  { src: '/assets/designs/shorts-kanji-shō-victory.png', title: 'Training Shorts — 勝 Victory', type: 'Apparel', line: 'men' },
  { src: '/assets/designs/shorts-kanji-tan-forge.png', title: 'Training Shorts — 鍛 Forge', type: 'Apparel', line: 'men' },
  { src: '/assets/designs/tee-kanji-bu-warrior.png', title: 'Performance Tee — 武 Warrior', type: 'Apparel', line: 'men' },
  { src: '/assets/designs/tee-kanji-to-fight.png', title: 'Performance Tee — 闘 Fight', type: 'Apparel', line: 'men' },
  { src: '/assets/designs/tank-kanji-ki-energy.png', title: 'Training Tank — 気 Energy', type: 'Apparel', line: 'men' },
  { src: '/assets/designs/gloves-kanji-rai-thunder.png', title: 'Training Gloves — 雷 Thunder', type: 'Accessory', line: 'men' },
  { src: '/assets/designs/gloves-kanji-ken-fist.png', title: 'Training Gloves — 拳 Fist', type: 'Accessory', line: 'men' },
  { src: '/assets/designs/knee-support-kanji-fū-wind.png', title: 'Knee Support — 風 Wind', type: 'Accessory', line: 'men' },
  { src: '/assets/designs/bag-hyrox-kanji-kyoku.png', title: 'Hyrox Bag — 極 Extreme', type: 'Accessory', line: 'men' },
  { src: '/assets/designs/straps-kanji-hagane-steel.png', title: 'Lifting Straps — 鋼 Steel', type: 'Accessory', line: 'men' },
]

export const referenceSamples: Mockup[] = [
  { src: '/assets/7b4bcb20-0ba0-446a-bd24-2a69dcf633c9.jpg', title: 'Reference — Dragon Shorts (龍)', type: 'Reference', line: 'ref' },
  { src: '/assets/79516bb4-1828-4c9b-8dd0-e15ca2d0bb7d.jpg', title: 'Reference — Dragon Belt (龍)', type: 'Reference', line: 'ref' },
]

export const kanjiMarks = [
  '極-kyoku',
  '魂-tamashii',
  '鍛-tan',
  '闘-to',
  '気-ki',
  '拳-ken',
  '鋼-hagane',
  '峰-mine',
  '走-so',
  '力-chikara',
  '龍-ryu',
  '道-do',
]

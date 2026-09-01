import { useState } from 'react'
import './App.css'
import { LogoMark } from './components/LogoMark'
import { cultureBackgrounds, cultureLayers, cultureMockups, culturePrints } from './data/culture'
import { floralMockups, floralRules } from './data/floral'
import { collections, kanjiMarks, menMockups, referenceSamples } from './data/kanji'
import {
  padelMenDirectionalMockups,
  padelMenDirectionalPalette,
  padelMenMockups,
  padelMenMultiMockups,
  padelMenMultiPalette,
  padelMenPalette,
  padelRules,
  padelStories,
  padelWomenDirectionalMockups,
  padelWomenDirectionalPalette,
  padelWomenMockups,
  padelWomenMultiMockups,
  padelWomenMultiPalette,
  padelWomenPalette,
} from './data/padel'
import { asset } from './lib/assets'

type Tab = 'brand' | 'men' | 'women' | 'culture' | 'padel' | 'marks'

const TABS: { id: Tab; label: string }[] = [
  { id: 'brand', label: 'Brand' },
  { id: 'men', label: 'Men kanji' },
  { id: 'women', label: 'Women floral' },
  { id: 'culture', label: 'Culture run' },
  { id: 'padel', label: 'Padel' },
  { id: 'marks', label: 'Marks' },
]

const transitionMethods = [
  {
    id: 'A',
    name: 'Wordmark Bridge',
    tag: 'Default',
    summary: 'Hex off. CORENATION holds the brand. New CN arrives small, on new items only.',
  },
  {
    id: 'B',
    name: 'Heritage refresh',
    tag: 'Keep badge',
    summary: 'Stay in the hexagon family. Ship one H1–H5 variation in the same seat as the old badge.',
  },
  {
    id: 'C',
    name: 'Dual-run, then sunset',
    tag: 'Inventory',
    summary: 'Old hex stays on tooled lines. New CN only on new lines. One season later, hex is done.',
  },
  {
    id: 'D',
    name: 'Placement migration',
    tag: 'Quiet',
    summary: 'Wordmark takes the old badge seat. New CN starts at hem, nape, or buckle-back.',
  },
  {
    id: 'E',
    name: 'Digital first',
    tag: 'Files first',
    summary: 'IG, Shopee, hangtags switch now. Garments wait until the current cut is through.',
  },
  {
    id: 'F',
    name: 'Capsule vehicle',
    tag: 'One drop',
    summary: 'The new mark is the graphic of one named drop — not a rebrand announcement.',
  },
  {
    id: 'G',
    name: 'Split system',
    tag: 'Keep',
    summary: 'Wordmark is the face forever. CN is a hardware stamp. Motif stays the product story.',
  },
  {
    id: 'H',
    name: 'Tonal ghost',
    tag: 'Felt first',
    summary: 'CN as black-on-black emboss, then cream print, then the old hex seat if you want it.',
  },
  {
    id: 'I',
    name: 'CORE / NATION',
    tag: 'Type as mark',
    summary: 'Two-line wordmark so C and N are the logo before the monogram returns.',
  },
]

const logoConcepts = [
  {
    id: '01',
    variant: 'continuum' as const,
    name: 'Continuum',
    family: 'CN abstraction',
    description: 'One continuous line rounds into a C, then rises through an N. Open, fluid, and deliberately uncontained.',
    note: 'Fluid / minimal',
    file: '01-continuum.svg',
  },
  {
    id: '02',
    variant: 'fold' as const,
    name: 'Fold',
    family: 'CN abstraction',
    description: 'Two folded planes share their edges: a cropped C on the left and a deep N on the right.',
    note: 'Angular / apparel',
    file: '02-fold.svg',
  },
  {
    id: '03',
    variant: 'counterform' as const,
    name: 'Counterform',
    family: 'CN abstraction',
    description: 'The letters live in the white space: a curved C counter meets a diagonal N channel between two blocks.',
    note: 'Negative space',
    file: '03-counterform.svg',
  },
  {
    id: '04',
    variant: 'linea' as const,
    name: 'Linea',
    family: 'Core anatomy',
    description: 'Paired abdominal walls pull toward a narrow linea alba. This is a core symbol first, with no forced letterform.',
    note: 'Pure core symbol',
    file: '04-linea.svg',
  },
  {
    id: '05',
    variant: 'oblique' as const,
    name: 'Oblique',
    family: 'Core anatomy',
    description: 'Six compressed bands map the obliques from rib to waist. The split center keeps the mark light and technical.',
    note: 'Modular / technical',
    file: '05-oblique.svg',
  },
  {
    id: '06',
    variant: 'crossbrace' as const,
    name: 'Crossbrace',
    family: 'Core anatomy',
    description: 'Curved abdominal walls are joined by a diagonal fascial sling, revealing an N inside the torso shape.',
    note: 'Core + N hybrid',
    file: '06-crossbrace.svg',
  },
]

const readableWordmarks = [
  {
    id: 'W1',
    name: 'Slash Track',
    tag: 'Primary',
    file: '01-slash-track.png',
    svg: '01-slash-track.svg',
    description: 'One-line CORENATION. Slashed C, circular O, separated R, clipped A. Default for Shopee, IG, hangtag, and belt.',
  },
  {
    id: 'W2',
    name: 'Slash Active',
    tag: 'Hangtag',
    file: '02-slash-active.png',
    svg: '02-slash-active.svg',
    description: 'Track plus a wide ACTIVEWEAR line. Hangtags, store cards, lookbook.',
  },
  {
    id: 'W3',
    name: 'Slash Stack',
    tag: 'Square',
    file: '03-slash-stack.png',
    svg: '03-slash-stack.svg',
    description: 'CORE over NATION, same width. Avatars, hem labels, bags.',
  },
  {
    id: 'W4',
    name: 'Stack Active',
    tag: 'Packaging',
    file: '04-slash-stack-active.png',
    svg: '04-slash-stack-active.svg',
    description: 'Stack plus ACTIVEWEAR. Packaging and lookbook covers.',
  },
  {
    id: 'W5',
    name: 'Core Lead',
    tag: 'Apparel',
    file: '05-core-lead.png',
    svg: '05-core-lead.svg',
    description: 'Heavy CORE over a lighter NATION. Chest or back when CORE should lead.',
  },
  {
    id: 'W6',
    name: 'Core Block',
    tag: 'Graphic',
    file: '06-core-block.png',
    svg: '06-core-block.svg',
    description: 'CO / RE / NATION. Graphic tee and tote only. Not below 24mm.',
  },
]

const readableRefs = [
  { id: 'A', name: 'Track + Active', file: 'a-track-active.png' },
  { id: 'B', name: 'Track', file: 'b-track.png' },
  { id: 'C', name: 'Stack + Active', file: 'c-stack-active.png' },
  { id: 'D', name: 'Core lead', file: 'd-core-lead.png' },
  { id: 'E', name: 'Core block', file: 'e-core-block.png' },
]

const hexagonVariations = [
  {
    id: 'H1',
    variant: 'hex-heritage' as const,
    name: 'Heritage',
    family: 'Hexagon heritage',
    description: 'The closest redraw of the original badge: double outline, point-up stance, and the angular N with its beveled cut.',
    note: 'Faithful redraw',
    file: '01-heritage.svg',
  },
  {
    id: 'H2',
    variant: 'hex-emboss' as const,
    name: 'Emboss',
    family: 'Hexagon heritage',
    description: 'A solid badge with the N carved out as negative space. Built for the tonal black-on-black treatment in the reference photo.',
    note: 'Tonal / patches',
    file: '02-emboss.svg',
  },
  {
    id: 'H3',
    variant: 'hex-inline' as const,
    name: 'Inline',
    family: 'Hexagon heritage',
    description: 'Hairline twin outlines and a slim N. The premium version for foil stamps, embossing, and zipper pulls.',
    note: 'Premium thin',
    file: '03-inline.svg',
  },
  {
    id: 'H4',
    variant: 'hex-facet' as const,
    name: 'Facet',
    family: 'Hexagon heritage',
    description: 'Each corner is chamfered so the badge reads machined rather than heraldic. Same closed silhouette, more equipment energy.',
    note: 'Engineered edge',
    file: '04-facet.svg',
  },
  {
    id: 'H5',
    variant: 'hex-sideline' as const,
    name: 'Sideline',
    family: 'Hexagon heritage',
    description: 'The badge rotated onto its side points. A wider stance that sits better on chest prints and waistbands.',
    note: 'Wide stance',
    file: '05-sideline.svg',
  },
]

type Concept = (typeof logoConcepts)[number] | (typeof hexagonVariations)[number]

function WordmarkCard({
  mark,
}: {
  mark: (typeof readableWordmarks)[number]
}) {
  return (
    <article className={`wordmark-card${mark.id === 'W1' ? ' recommended' : ''}`}>
      <div className="wordmark-preview">
        <span className="concept-number">{mark.id}</span>
        <img src={asset(`assets/logo/readable/${mark.file}`)} alt={mark.name} />
      </div>
      <div className="concept-copy">
        <div className="concept-heading">
          <h3>{mark.name}</h3>
          <span>{mark.tag}</span>
        </div>
        <p>{mark.description}</p>
        <a className="concept-download" href={asset(`assets/logo/readable/${mark.svg}`)} download>
          Download SVG
        </a>
      </div>
    </article>
  )
}

function ConceptCard({ concept, folder }: { concept: Concept; folder: string }) {
  return (
    <article className="concept-card">
      <div className="concept-preview">
        <span className="concept-number">{concept.id}</span>
        <span className="concept-family">{concept.family}</span>
        <LogoMark className="concept-mark" title="Corenation" variant={concept.variant} />
      </div>
      <div className="concept-copy">
        <div className="concept-heading">
          <h3>{concept.name}</h3>
          <span>{concept.note}</span>
        </div>
        <p>{concept.description}</p>
        <a className="concept-download" href={asset(`${folder}/${concept.file}`)} download>
          Download SVG
        </a>
        <div className="concept-small-scale" aria-label={`${concept.name} small-size preview`}>
          <LogoMark title="Corenation" variant={concept.variant} />
          <LogoMark title="Corenation" variant={concept.variant} />
          <LogoMark title="Corenation" variant={concept.variant} />
          <strong>Small-size test</strong>
        </div>
      </div>
    </article>
  )
}

function Swatches({ items }: { items: { hex: string; name: string }[] }) {
  return (
    <div className="palette">
      {items.map((item) => (
        <div className="swatch" key={item.name}>
          <span style={{ background: item.hex }} />
          {item.name}
        </div>
      ))}
    </div>
  )
}

function MockGrid({
  items,
  cardClass,
}: {
  items: Array<{ src: string; title: string; type?: string }>
  cardClass?: string
}) {
  return (
    <div className="mockup-grid">
      {items.map((item) => (
        <article
          key={item.src}
          className={`mockup-card${cardClass ? ` ${cardClass}` : ''}${item.type === 'Apparel' && item.title.includes('Tee') ? ' tall' : item.type === 'Accessory' ? ' square' : ''}`}
        >
          <img src={item.src} alt={item.title} loading="lazy" />
          <div className="mockup-info">
            {item.type ? <div className="mockup-type">{item.type}</div> : null}
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}

function App() {
  const [tab, setTab] = useState<Tab>('brand')

  return (
    <div className={`app theme-${tab}`}>
      <header>
        <div className="brand-mark">
          <img
            className="brand-logo"
            src={asset('assets/logo/readable/slash-c.png')}
            alt="Corenation slashed C"
          />
          <div>
            <h1>Corenation Design Studio</h1>
            <p className="subtitle">
              Internal · @corenationactive · @corenationmen · @corenationhijab · shopee.co.id/corenation
            </p>
          </div>
        </div>
        <nav className="tabs" aria-label="Lines">
          {TABS.map((item) => (
            <button
              key={item.id}
              className={tab === item.id ? 'active' : ''}
              onClick={() => setTab(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {tab === 'brand' && (
        <>
          <section>
            <h2>Readable wordmarks — locked for new work</h2>
            <p className="section-lead">
              Path: <strong>drop hex and coin</strong> → use a readable <strong>CORENATION</strong> → introduce a
              new mark later, on new items only. Default lockup is Slash Track. Letter DNA from the uploaded A–E
              boards: slashed C, circular O, separated R. Spec:{' '}
              <code>docs/readable-wordmark.md</code>.
            </p>
            <div className="wordmark-grid">
              {readableWordmarks.map((mark) => (
                <WordmarkCard key={mark.id} mark={mark} />
              ))}
            </div>
            <p className="logo-note">
              Vectors in <code>assets/logo/readable/</code>. Favicon and small avatar use{' '}
              <code>slash-c</code> — a letter, not a coin.
            </p>
          </section>

          <section>
            <h2>Your uploaded references (A–E)</h2>
            <p className="section-lead">
              Source PDFs at the repo root of <code>assets/</code>. Cropped here for side-by-side. Factory files
              are the production lockups above, not these boards.
            </p>
            <div className="wordmark-grid">
              {readableRefs.map((item) => (
                <article className="wordmark-card" key={item.id}>
                  <div className="wordmark-preview ref">
                    <span className="concept-number">{item.id}</span>
                    <img
                      src={asset(`assets/logo/readable/reference/${item.file}`)}
                      alt={`Reference ${item.id} ${item.name}`}
                    />
                  </div>
                  <div className="concept-copy">
                    <div className="concept-heading">
                      <h3>{item.name}</h3>
                      <span>Uploaded</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>Later — new systems (studio only)</h2>
            <p className="section-lead">
              A clean break from the enclosed badge family. Directions 01–03 abstract <strong>CN</strong> as a
              ligature; 04–06 translate <strong>core musculature</strong> into a symbol. No hexagons, shields, or
              outer containers.
            </p>
            <div className="concept-grid">
              {logoConcepts.map((concept) => (
                <ConceptCard concept={concept} folder="assets/logo/concepts" key={concept.variant} />
              ))}
            </div>
            <p className="logo-note">
              Studio only this season. Do not put these on a shop SKU until the introduce-later phase.
            </p>
          </section>

          <section>
            <h2>Retired — hexagon and coin</h2>
            <p className="section-lead">
              Closed hexagon and coin marks are off new POs. Sell through existing stock. Do not reprint.
            </p>
            <div className="concept-grid">
              {hexagonVariations.map((concept) => (
                <ConceptCard concept={concept} folder="assets/logo/hexagon" key={concept.variant} />
              ))}
            </div>
            <p className="logo-note">
              Archive only. Path is readable word now, not a heritage hex.
            </p>
          </section>

          <section>
            <h2>Logo transition — path locked</h2>
            <p className="section-lead">
              Chosen path: drop hex and coin, use the readable word, introduce a new mark later. That is method A
              with the slash-track family as the word. Do not mix two methods on one SKU.
            </p>
            <div className="phase-row" aria-label="Locked sequence">
              <article>
                <span>Now</span>
                <strong>Hex + coin off</strong>
                <p>New POs and files. Sell through old stock.</p>
              </article>
              <article>
                <span>This season</span>
                <strong>Readable word</strong>
                <p>Slash Track holds the brand. No new badge yet.</p>
              </article>
              <article>
                <span>Later</span>
                <strong>New mark</strong>
                <p>One studio direction, on new items only.</p>
              </article>
              <article>
                <span>Keep</span>
                <strong>Split system</strong>
                <p>Word is the face. Any later mark is a stamp.</p>
              </article>
            </div>
            <div className="method-grid">
              {transitionMethods.map((method) => (
                <article
                  key={method.id}
                  className={`method-card${method.id === 'A' ? ' recommended' : ''}`}
                >
                  <div className="method-head">
                    <span className="method-id">{method.id}</span>
                    <h3>{method.name}</h3>
                    <span>{method.tag}</span>
                  </div>
                  <p>{method.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2>Positioning</h2>
            <div className="two-col">
              <div>
                <h3>Use</h3>
                <p>performance · training · built to move · quality fabric · everyday athlete</p>
              </div>
              <div>
                <h3>Brand</h3>
                <p>Corenation Active · Surabaya · men / women / hijab / Culture Run / padel</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Channels</h2>
            <ol className="channel-list">
              <li>
                <strong>Shopee</strong> — accs first (belts, gloves, straps, knee, bags). Apparel is image 4+ unless the
                SKU is apparel.
              </li>
              <li>
                <strong>Dept stores</strong> — apparel walks. Separate bays for men / women / hijab (Central GI, Muku
                Pakuwon, Cilandak).
              </li>
              <li>
                <strong>HQ padel</strong> — clubs pick fabric; readable wordmark stays. Club name is secondary only.
              </li>
            </ol>
          </section>

          <section>
            <h2>Playbook v2.0 — what staff got</h2>
            <p className="lede">
              v1.0 was men-kanji only. v2.0 adds brand direction, owners, women / hijab / Culture Run / padel, and
              channel playbooks. v2.2 adds the consumer padel pastel kit (no kanji, no logo) on the Padel tab.
              Full ticks live in <code>docs/branding-checklist.md</code>.
            </p>
          </section>
        </>
      )}

      {tab === 'men' && (
        <>
          <section>
            <h2>Men kanji — product mockups</h2>
            <Swatches
              items={[
                { hex: '#4a5240', name: 'Olive #4A5240' },
                { hex: '#0a0a0a', name: 'Black' },
                { hex: '#d6cfb5', name: 'Cream' },
                { hex: '#d4af37', name: 'Gold' },
                { hex: '#c41e3a', name: 'Red' },
              ]}
            />
            <MockGrid items={menMockups} />
          </section>
          <section>
            <h2>Your 龍 samples</h2>
            <MockGrid items={referenceSamples} />
          </section>
          <section>
            <h2>Kanji library (25 + 走)</h2>
            {collections.map((col) => (
              <div key={col.name} className="collection-block">
                <div className="collection-header">
                  <h3>{col.name}</h3>
                  <span className="collection-theme">{col.theme}</span>
                </div>
                <div className="kanji-grid">
                  {col.items.map((item) => (
                    <article key={item.char} className="kanji-card">
                      <div className="kanji-char">{item.char}</div>
                      <div className="kanji-meta">
                        <strong>{item.romanization}</strong> — {item.meaning}
                        <br />
                        Accent: {item.accent}
                        <br />
                        {item.applications}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      {tab === 'women' && (
        <>
          <section>
            <h2>Theme lock</h2>
            <div className="rule-grid">
              {floralRules.map((rule) => (
                <article key={rule.lock}>
                  <h3>{rule.lock}</h3>
                  <p>{rule.flower}</p>
                </article>
              ))}
            </div>
            <Swatches
              items={[
                { hex: '#e8a4b4', name: 'Sakura #E8A4B4' },
                { hex: '#c45b78', name: 'Deep rose' },
                { hex: '#c5b4d8', name: 'Lilac #C5B4D8' },
                { hex: '#8b6fa8', name: 'Lavender' },
                { hex: '#5c4a72', name: 'Dusk' },
              ]}
            />
          </section>
          <section>
            <h2>Sakura (pink) + Lavender (lilac)</h2>
            <MockGrid items={floralMockups} />
          </section>
        </>
      )}

      {tab === 'culture' && (
        <>
          <section>
            <h2>Running shirts &amp; tanks</h2>
            <p className="lede">
              v2: all-over dye-sub, no embroidery patches. Textures: smooth gradient, brushed gradation, liquid marble,
              heatmap, suminagashi, watercolor wash. Women&apos;s pastel capsule lives in{' '}
              <code>06-pastel</code>. Drops live under{' '}
              <code>assets/culture-run/01-wave</code> … <code>06-pastel</code>. Use{' '}
              <code>background-clean.png</code> when you need to move kanji or logos; keep{' '}
              <code>print.png</code> as the locked composite.
            </p>
            <MockGrid items={cultureMockups} />
          </section>
          <section>
            <h2>Backgrounds only (no kanji / logo)</h2>
            <p className="lede">
              Same drop, texture only — no logo, no kanji, no slogans, no flowers, no figurative
              artifacts. Place 走 / 山 and the hex C or CN mark from{' '}
              <code>assets/culture-run/layers/</code> on top in any position.
            </p>
            <MockGrid items={cultureBackgrounds} />
          </section>
          <section>
            <h2>Loose marks</h2>
            <p className="lede">Transparent PNGs — cream, ink, white, gold. Place these on a background, do not flatten yet.</p>
            <MockGrid items={cultureLayers} cardClass="layer-card" />
          </section>
          <section>
            <h2>Print placements (locked composites)</h2>
            <MockGrid items={culturePrints} />
          </section>
        </>
      )}

      {tab === 'padel' && (
        <>
          <section>
            <h2>Theme lock</h2>
            <p className="lede">
              Consumer padel court kit — no kanji, no logo. v3 moves beyond stacked fades with
              <strong> diagonal, curved, and radial color fields</strong>. Small tonal patterns may
              appear only where colors meet. Men and women stay on separate stories. Files:{' '}
              <code>assets/padel/men/</code> · <code>assets/padel/women/</code>. Spec:{' '}
              <code>docs/padel-collection.md</code>.
            </p>
            <div className="rule-grid">
              {padelRules.map((rule) => (
                <article key={rule.lock}>
                  <h3>{rule.lock}</h3>
                  <p>{rule.flower}</p>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2>Drops</h2>
            <div className="rule-grid">
              {padelStories.map((story) => (
                <article key={story.id}>
                  <h3>
                    {story.gender === 'men' ? 'Men' : 'Women'} · {story.name}
                  </h3>
                  <p>
                    {story.fade}. {story.note}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2>Men v3 — Crosscourt Mesh + Orbit Serve</h2>
            <Swatches items={padelMenDirectionalPalette} />
            <MockGrid items={padelMenDirectionalMockups} />
          </section>
          <section>
            <h2>Women v3 — Rally Ribbon + Halo Serve</h2>
            <Swatches items={padelWomenDirectionalPalette} />
            <MockGrid items={padelWomenDirectionalMockups} />
          </section>
          <section>
            <h2>Men v2 — Reef Trio (3 color) + Dual Glass (2 color)</h2>
            <Swatches items={padelMenMultiPalette} />
            <MockGrid items={padelMenMultiMockups} />
          </section>
          <section>
            <h2>Women v2 — Clay Bloom (3 color) + Dual Sherbet (2 color)</h2>
            <Swatches items={padelWomenMultiPalette} />
            <MockGrid items={padelWomenMultiMockups} />
          </section>
          <section>
            <h2>Men v1 — Glass Court + Harbor Haze</h2>
            <Swatches items={padelMenPalette} />
            <MockGrid items={padelMenMockups} />
          </section>
          <section>
            <h2>Women v1 — Sunrise Clay + Lemon Sherbet</h2>
            <Swatches items={padelWomenPalette} />
            <MockGrid items={padelWomenMockups} />
          </section>
        </>
      )}

      {tab === 'marks' && (
        <>
          <section>
            <h2>Kanji cards + patches</h2>
            <p className="lede">Correct Japanese forms for print / embroidery. Do not redraw from a phone screenshot.</p>
            <div className="mark-grid">
              {kanjiMarks.map((slug) => (
                <article key={slug} className="mark-pair">
                  <img src={asset(`assets/men-kanji/marks/card-${slug}.png`)} alt={`Card ${slug}`} loading="lazy" />
                  <img src={asset(`assets/men-kanji/marks/patch-${slug}.png`)} alt={`Patch ${slug}`} loading="lazy" />
                  <h3>{slug}</h3>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2>Floral sheets</h2>
            <MockGrid
              items={[
                { src: asset('assets/women-floral/marks/sakura-branch-sheet.png'), title: 'Sakura branch — pink SKUs' },
                { src: asset('assets/women-floral/marks/lavender-spray-sheet.png'), title: 'Lavender spray — lilac SKUs' },
              ]}
            />
          </section>
        </>
      )}

      <footer>
        Corenation Active · Design studio v2.3 · Playbook in /docs · Surabaya
      </footer>
    </div>
  )
}

export default App

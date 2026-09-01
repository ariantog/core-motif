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
          <LogoMark className="brand-logo" title="Corenation" />
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
            <h2>Logo Exploration — Two New Systems</h2>
            <p className="section-lead">
              A clean break from the enclosed badge family. Directions 01–03 abstract <strong>CN</strong> as a
              ligature; 04–06 translate <strong>core musculature</strong> into a symbol. No hexagons, shields, or
              outer containers.
            </p>
            <div className="concept-grid">
              {logoConcepts.map((concept) => (
                <article className="concept-card" key={concept.variant}>
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
                    <a
                      className="concept-download"
                      href={asset(`assets/logo/concepts/${concept.file}`)}
                      download
                    >
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
              ))}
            </div>
            <p className="logo-note">
              All six are monochrome working vectors in <code>assets/logo/concepts/</code>. They are presented as
              parallel explorations; no direction is designated as the final master yet.
            </p>
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
                <strong>HQ padel</strong> — clubs pick fabric; hex C stays. Club name is secondary only.
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
              heatmap, suminagashi, watercolor wash. Drops live under{' '}
              <code>assets/culture-run/01-wave</code> … <code>05-watercolor</code>. Use{' '}
              <code>background-clean.png</code> when you need to move kanji or logos; keep{' '}
              <code>print.png</code> as the locked composite.
            </p>
            <MockGrid items={cultureMockups} />
          </section>
          <section>
            <h2>Backgrounds only (no kanji / logo)</h2>
            <p className="lede">
              Same drop, texture only — no logo, no kanji, no slogans. Place 走 / 山 and the hex C or CN
              mark from <code>assets/culture-run/layers/</code> on top in any position.
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

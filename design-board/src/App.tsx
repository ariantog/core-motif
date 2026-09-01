import { useState } from 'react'
import './App.css'
import { LogoMark } from './components/LogoMark'
import { cultureMockups, culturePrints } from './data/culture'
import { floralMockups, floralRules } from './data/floral'
import { collections, kanjiMarks, menMockups, referenceSamples } from './data/kanji'
import { asset } from './lib/assets'

type Tab = 'brand' | 'men' | 'women' | 'culture' | 'marks'

const TABS: { id: Tab; label: string }[] = [
  { id: 'brand', label: 'Brand' },
  { id: 'men', label: 'Men kanji' },
  { id: 'women', label: 'Women floral' },
  { id: 'culture', label: 'Culture run' },
  { id: 'marks', label: 'Marks' },
]

const logoConcepts = [
  {
    id: '01',
    variant: 'core-cut' as const,
    name: 'Core Cut',
    description: 'A bold hexagonal C with a clean side cut. The N sits independently inside for maximum legibility.',
    note: 'Best all-rounder',
  },
  {
    id: '02',
    variant: 'interlock' as const,
    name: 'Interlock',
    description: 'The C is built from three locked plates while the N bridges its open side. More technical and engineered.',
    note: 'Best for equipment',
  },
  {
    id: '03',
    variant: 'velocity' as const,
    name: 'Velocity',
    description: 'A forward-leaning C and N with a compact athletic stance. Designed for apparel and performance products.',
    note: 'Best for sportswear',
  },
  {
    id: '04',
    variant: 'core-block' as const,
    name: 'Core Block',
    description: 'A wide, stable C with a heavy inset N. The simplest option for embroidery, rubber patches, and small sizes.',
    note: 'Best for production',
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

function MockGrid({ items }: { items: Array<{ src: string; title: string; type?: string }> }) {
  return (
    <div className="mockup-grid">
      {items.map((item) => (
        <article
          key={item.src}
          className={`mockup-card${item.type === 'Apparel' && item.title.includes('Tee') ? ' tall' : item.type === 'Accessory' ? ' square' : ''}`}
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
            <h2>CN Monogram — New Directions</h2>
            <p className="section-lead">
              Four rebuilt concepts using solid, intentional geometry. Each mark combines a clearly readable
              <strong> C</strong> with an angular <strong>N</strong>—without looking like a damaged hexagon.
            </p>
            <div className="concept-grid">
              {logoConcepts.map((concept) => (
                <article className="concept-card" key={concept.variant}>
                  <div className="concept-preview">
                    <span className="concept-number">{concept.id}</span>
                    <LogoMark className="concept-mark" title="Corenation" variant={concept.variant} />
                  </div>
                  <div className="concept-copy">
                    <div className="concept-heading">
                      <h3>{concept.name}</h3>
                      <span>{concept.note}</span>
                    </div>
                    <p>{concept.description}</p>
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
              All four concepts are production-ready SVGs in <code>assets/logo/concepts/</code>.
              Concept 01 is also exported as the current master in <code>assets/logo/corenation-cn-logo.svg</code>.
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
              channel playbooks. Full ticks live in <code>docs/branding-checklist.md</code>.
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
              heatmap, suminagashi, watercolor wash. 走 is printed in the dye. Each drop is a folder under{' '}
              <code>assets/culture-run/</code>.
            </p>
            <MockGrid items={cultureMockups} />
          </section>
          <section>
            <h2>Print placements (send to factory)</h2>
            <MockGrid items={culturePrints} />
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
        Corenation Active · Design studio v2.1 · Playbook in /docs · Surabaya
      </footer>
    </div>
  )
}

export default App

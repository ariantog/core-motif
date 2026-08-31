import './App.css'
import { LogoMark } from './components/LogoMark'
import { collections, mockups, referenceSamples } from './data/kanji'

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

function App() {
  return (
    <div className="app">
      <header>
        <div className="brand-mark">
          <LogoMark className="brand-logo" title="Corenation" />
          <div>
            <h1>Corenation Men — Kanji Design Board</h1>
            <p className="subtitle">Internal reference · @corenationmen · shopee.co.id/corenation</p>
          </div>
        </div>
        <div className="palette">
          <div className="swatch"><span style={{ background: '#4a5240' }} />Olive #4A5240</div>
          <div className="swatch"><span style={{ background: '#0a0a0a' }} />Black</div>
          <div className="swatch"><span style={{ background: '#d6cfb5' }} />Cream #D6CFB5</div>
          <div className="swatch"><span style={{ background: '#d4af37' }} />Gold #D4AF37</div>
          <div className="swatch"><span style={{ background: '#c41e3a' }} />Red #C41E3A</div>
        </div>
      </header>

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
                <LogoMark
                  className="concept-mark"
                  title="Corenation"
                  variant={concept.variant}
                />
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
        <h2>Design Mockups</h2>
        <div className="mockup-grid">
          {mockups.map((m) => (
            <article
              key={m.src}
              className={`mockup-card${m.type === 'Apparel' && m.title.includes('Tee') ? ' tall' : m.type === 'Accessory' ? ' square' : ''}`}
            >
              <img src={m.src} alt={m.title} loading="lazy" />
              <div className="mockup-info">
                <div className="mockup-type">{m.type}</div>
                <h3>{m.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Reference Samples</h2>
        <div className="mockup-grid">
          {referenceSamples.map((r) => (
            <article key={r.src} className="mockup-card">
              <img src={r.src} alt={r.title} loading="lazy" />
              <div className="mockup-info">
                <h3>{r.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Kanji Collection</h2>
        {collections.map((col) => (
          <div key={col.name} className="collection-block">
            <div className="collection-header">
              <h3>{col.name}</h3>
              <span className="collection-theme">{col.theme}</span>
            </div>
            <div className="kanji-grid">
              {col.items.map((k) => (
                <article key={k.char} className="kanji-card">
                  <div className="kanji-char">{k.char}</div>
                  <div className="kanji-meta">
                    <strong>{k.romanization}</strong> — {k.meaning}
                    <br />
                    Accent: {k.accent}
                    <br />
                    {k.applications}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Recommended Next Drop</h2>
        <div className="recommendations">
          <p>Top 3 kanji for next production run (continuity from 龍 hero):</p>
          <ol>
            <li><strong>力 (Chikara — Power)</strong> — Universal lifting symbol; pairs with existing belt format; highest Shopee search intent for gym accessories.</li>
            <li><strong>勝 (Shō — Victory)</strong> — Competition/PR narrative; natural shorts patch companion to 龍 dragon line.</li>
            <li><strong>道 (Dō — The Way)</strong> — Brand philosophy piece; gold-on-olive belt colorway expands assortment without new palette.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Documentation</h2>
        <div className="docs-links">
          <a href="https://github.com" onClick={(e) => e.preventDefault()} title="See repo docs/kanji-design-collection.md">
            kanji-design-collection.md
          </a>
          <a href="https://github.com" onClick={(e) => e.preventDefault()} title="See repo docs/branding-checklist.md">
            branding-checklist.md
          </a>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.75rem' }}>
          Full specs live in <code>/workspace/docs/</code> at repo root.
        </p>
      </section>

      <footer>
        Corenation Active · Men's Kanji Line · Internal design board v1.0
      </footer>
    </div>
  )
}

export default App

import './App.css'
import { LogoMark } from './components/LogoMark'
import { collections, mockups, referenceSamples } from './data/kanji'

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
        <h2>CN Logo — Hexagonal C + N</h2>
        <p className="section-lead">
          The outer frame opens on the right so the mark reads as a stylized <strong>C</strong> wrapping the existing <strong>N</strong>.
        </p>
        <div className="logo-showcase">
          <article className="logo-card">
            <div className="logo-card-label">Before — closed hexagon</div>
            <img src="/reference-original-hexagon.jpg" alt="Original Corenation hexagon logo with N inside" />
          </article>
          <article className="logo-card logo-card--new">
            <div className="logo-card-label">After — hexagonal C + N</div>
            <div className="logo-preview logo-preview--fabric">
              <LogoMark className="logo-preview-mark" title="Corenation" />
            </div>
            <div className="logo-variant-row">
              <div className="logo-variant">
                <span>Cream on black</span>
                <div className="logo-preview logo-preview--black">
                  <LogoMark className="logo-preview-mark logo-preview-mark--cream" title="Corenation" />
                </div>
              </div>
              <div className="logo-variant">
                <span>White on olive</span>
                <div className="logo-preview logo-preview--olive">
                  <LogoMark className="logo-preview-mark logo-preview-mark--white" title="Corenation" />
                </div>
              </div>
              <div className="logo-variant">
                <span>Black on cream</span>
                <div className="logo-preview logo-preview--cream">
                  <LogoMark className="logo-preview-mark logo-preview-mark--black" title="Corenation" />
                </div>
              </div>
            </div>
          </article>
        </div>
        <p className="logo-note">
          Vector files: <code>assets/logo/corenation-cn-logo.svg</code> (currentColor) plus cream, white, and black variants.
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

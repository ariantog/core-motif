import { useState } from 'react'
import './App.css'
import { collections, kanjiMarks, menMockups, referenceSamples } from './data/kanji'
import { floralMockups, floralRules } from './data/floral'
import { cultureMockups, culturePrints } from './data/culture'

type Tab = 'brand' | 'men' | 'women' | 'culture' | 'marks'

const TABS: { id: Tab; label: string }[] = [
  { id: 'brand', label: 'Brand' },
  { id: 'men', label: 'Men Kanji' },
  { id: 'women', label: 'Women Floral' },
  { id: 'culture', label: 'Culture Run' },
  { id: 'marks', label: 'Production marks' },
]

function Swatches({ items }: { items: { hex: string; name: string }[] }) {
  return (
    <div className="palette">
      {items.map((s) => (
        <div className="swatch" key={s.name}>
          <span style={{ background: s.hex }} />
          {s.name}
        </div>
      ))}
    </div>
  )
}

function MockGrid({
  items,
  tallHint,
}: {
  items: { src: string; title: string; type?: string }[]
  tallHint?: boolean
}) {
  return (
    <div className="mockup-grid">
      {items.map((m) => (
        <article
          key={m.src}
          className={`mockup-card${tallHint && (m.title.includes('Tee') || m.title.includes('Tank')) ? ' tall' : ''}`}
        >
          <img src={m.src} alt={m.title} loading="lazy" />
          <div className="mockup-info">
            {m.type ? <div className="mockup-type">{m.type}</div> : null}
            <h3>{m.title}</h3>
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
          <div className="hex-logo">C</div>
          <div>
            <h1>Corenation Design Studio</h1>
            <p className="subtitle">
              Internal · @corenationactive · @corenationmen · @corenationhijab · shopee.co.id/corenation
            </p>
          </div>
        </div>
        <nav className="tabs" aria-label="Lines">
          {TABS.map((t) => (
            <button key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => setTab(t.id)} type="button">
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {tab === 'brand' && (
        <>
          <section>
            <h2>Preferable, not premium</h2>
            <p className="lede">
              Same class of fabric as Nike / Adidas / Lululemon. Priced so people buy it twice. Styled like Adidas —
              locker room, not marble spa. Never Alo Yoga luxury language.
            </p>
            <Swatches
              items={[
                { hex: '#4a5240', name: 'Olive men' },
                { hex: '#d6cfb5', name: 'Cream' },
                { hex: '#d4af37', name: 'Gold' },
                { hex: '#c41e3a', name: 'Red' },
                { hex: '#e8a4b4', name: 'Sakura pink' },
                { hex: '#c5b4d8', name: 'Lilac' },
              ]}
            />
          </section>
          <section>
            <h2>Line walls</h2>
            <div className="rule-grid">
              <article>
                <h3>Men · @corenationmen</h3>
                <p>One Japanese kanji. Olive / black. No flowers, no simplified 龙.</p>
              </article>
              <article>
                <h3>Women · @corenationactive</h3>
                <p>Pink = sakura. Lilac = lavender. No kanji patches.</p>
              </article>
              <article>
                <h3>Hijab · @corenationhijab</h3>
                <p>Modest coverage. Floral or clean. No warrior copy.</p>
              </article>
              <article>
                <h3>Culture Run</h3>
                <p>Back graphic on a running shirt. Wave / Summit / Bloom / Dusk / Home Soil.</p>
              </article>
            </div>
          </section>
          <section>
            <h2>Words</h2>
            <div className="two-col">
              <div>
                <h3>Never</h3>
                <p>premium · luxury · exclusive · elevated · atelier · couture</p>
              </div>
              <div>
                <h3>Use</h3>
                <p>performance · training · built to move · quality fabric · everyday athlete</p>
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
        </>
      )}

      {tab === 'women' && (
        <>
          <section>
            <h2>Theme lock</h2>
            <div className="rule-grid">
              {floralRules.map((r) => (
                <article key={r.lock}>
                  <h3>{r.lock}</h3>
                  <p>{r.flower}</p>
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
              heatmap, suminagashi. 走 is printed in the dye. Each drop is a folder under <code>assets/culture-run/</code>.
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
                  <img src={`/assets/men-kanji/marks/card-${slug}.png`} alt={`Card ${slug}`} loading="lazy" />
                  <img src={`/assets/men-kanji/marks/patch-${slug}.png`} alt={`Patch ${slug}`} loading="lazy" />
                  <h3>{slug}</h3>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2>Floral sheets</h2>
            <MockGrid
              items={[
                { src: '/assets/women-floral/marks/sakura-branch-sheet.png', title: 'Sakura branch — pink SKUs' },
                { src: '/assets/women-floral/marks/lavender-spray-sheet.png', title: 'Lavender spray — lilac SKUs' },
              ]}
            />
          </section>
        </>
      )}

      <footer>
        Corenation Active · Design studio v2.0 · Playbook in /docs · Surabaya
      </footer>
    </div>
  )
}

export default App

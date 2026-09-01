const views = [...document.querySelectorAll('.view')]
const navItems = [...document.querySelectorAll('.nav-item')]
const jumpCards = [...document.querySelectorAll('[data-jump]')]

const logos = [
  { title: 'Slash Track', note: 'Primary readable · one-line CORENATION', path: 'assets/logo/readable/01-slash-track.png' },
  { title: 'Slash Active', note: 'Track + ACTIVEWEAR', path: 'assets/logo/readable/02-slash-active.png' },
  { title: 'Slash Stack', note: 'CORE over NATION', path: 'assets/logo/readable/03-slash-stack.png' },
  { title: 'Stack Active', note: 'Stack + ACTIVEWEAR', path: 'assets/logo/readable/04-slash-stack-active.png' },
  { title: 'Core Lead', note: 'Heavy CORE over NATION', path: 'assets/logo/readable/05-core-lead.png' },
  { title: 'Core Block', note: 'CO / RE / NATION', path: 'assets/logo/readable/06-core-block.png' },
  { title: 'Slash C', note: 'Letter only · favicon / pull', path: 'assets/logo/readable/slash-c.png' },
  { title: 'Ref A', note: 'Uploaded · track + active', path: 'assets/logo/readable/reference/a-track-active.png' },
  { title: 'Ref B', note: 'Uploaded · track', path: 'assets/logo/readable/reference/b-track.png' },
  { title: 'Ref C', note: 'Uploaded · stack + active', path: 'assets/logo/readable/reference/c-stack-active.png' },
  { title: 'Ref D', note: 'Uploaded · core lead', path: 'assets/logo/readable/reference/d-core-lead.png' },
  { title: 'Ref E', note: 'Uploaded · core block', path: 'assets/logo/readable/reference/e-core-block.png' },
  { title: 'Continuum', note: 'Later · CN abstraction · fluid', path: 'assets/logo/concepts/01-continuum.svg' },
  { title: 'Fold', note: 'CN abstraction · angular', path: 'assets/logo/concepts/02-fold.svg' },
  { title: 'Counterform', note: 'CN abstraction · negative space', path: 'assets/logo/concepts/03-counterform.svg' },
  { title: 'Linea', note: 'Core anatomy · pure symbol', path: 'assets/logo/concepts/04-linea.svg' },
  { title: 'Oblique', note: 'Core anatomy · modular', path: 'assets/logo/concepts/05-oblique.svg' },
  { title: 'Crossbrace', note: 'Core anatomy · hidden N', path: 'assets/logo/concepts/06-crossbrace.svg' },
  { title: 'Hex Heritage', note: 'Hexagon heritage · faithful redraw', path: 'assets/logo/hexagon/01-heritage.svg' },
  { title: 'Hex Emboss', note: 'Hexagon heritage · tonal knockout', path: 'assets/logo/hexagon/02-emboss.svg' },
  { title: 'Hex Inline', note: 'Hexagon heritage · premium thin', path: 'assets/logo/hexagon/03-inline.svg' },
  { title: 'Hex Facet', note: 'Hexagon heritage · engineered edge', path: 'assets/logo/hexagon/04-facet.svg' },
  { title: 'Hex Sideline', note: 'Hexagon heritage · wide stance', path: 'assets/logo/hexagon/05-sideline.svg' },
  { title: 'Original reference', note: 'Closed hexagon', path: 'assets/logo/reference-original-hexagon.jpg' },
]

const designFilters = [
  { id: 'all', label: 'All assets' },
  { id: 'men-kanji', label: 'Men kanji' },
  { id: 'women-floral', label: 'Women floral' },
  { id: 'culture-run', label: 'Culture run' },
  { id: 'padel', label: 'Padel' },
  { id: 'references', label: 'References' },
]

const docs = [
  { title: 'Readable wordmark', path: 'docs/readable-wordmark.md' },
  { title: 'Logo transition', path: 'docs/logo-transition.md' },
  { title: 'Padel collection', path: 'docs/padel-collection.md' },
  { title: 'Culture run collection', path: 'docs/culture-run-collection.md' },
  { title: 'Kanji design collection', path: 'docs/kanji-design-collection.md' },
  { title: 'Branding checklist', path: 'docs/branding-checklist.md' },
  { title: 'CN logo spec', path: 'docs/cn-logo-spec.md' },
  { title: 'Assets map', path: 'assets/README.md' },
  { title: 'Deploy guide', path: 'docs/deploy.md' },
  { title: 'README', path: 'README.md' },
  { title: 'Design board README', path: 'design-board/README.md' },
]

let manifestImages = []
let activeDesignFilter = 'all'

function showView(name) {
  views.forEach((view) => view.classList.toggle('active', view.id === `view-${name}`))
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.view === name))
  history.replaceState(null, '', `#${name}`)
  if (name === 'design-board') revealDesignBoard()
}

function designBoardEls() {
  return {
    frame: document.querySelector('#view-design-board iframe'),
    link: document.querySelector('#view-design-board .btn'),
  }
}

function isBuiltBoardHtml(html) {
  // The Vite source entry also 200s at /design-board/ when the domain is the
  // repo root. It has an empty #root and /src/main.tsx, which 404s in the hub.
  return html.includes('id="root"') && !html.includes('/src/main.tsx')
}

async function resolveDesignBoardHref() {
  const { frame } = designBoardEls()
  const markup = frame?.getAttribute('src')
  const candidates = [markup, 'site/design-board/index.html', 'design-board/index.html'].filter(Boolean)
  const seen = new Set()

  for (const candidate of candidates) {
    if (seen.has(candidate)) continue
    seen.add(candidate)
    try {
      const res = await fetch(assetUrl(candidate), { cache: 'no-store' })
      if (!res.ok) continue
      if (isBuiltBoardHtml(await res.text())) return candidate
    } catch {
      /* try the next path */
    }
  }

  return markup || 'site/design-board/index.html'
}

function applyDesignBoardHref(href) {
  const { frame, link } = designBoardEls()
  if (!frame || !link) return
  frame.removeAttribute('loading')
  frame.src = href
  link.href = href
}

function revealDesignBoard() {
  const { frame } = designBoardEls()
  if (!frame) return
  frame.removeAttribute('loading')
  const href = frame.getAttribute('src') || frame.src
  if (href) frame.src = href
}

async function wireDesignBoard() {
  const { frame, link } = designBoardEls()
  if (!frame || !link) return
  applyDesignBoardHref(await resolveDesignBoardHref())
}

function hubBase() {
  const script = document.querySelector('script[src*="browser/app.js"]')
  if (script && script.src) {
    return new URL('.', script.src.replace(/browser\/app\.js.*$/, ''))
  }
  return new URL('.', window.location.href)
}

function assetUrl(path) {
  return new URL(path.replace(/#/g, '%23'), hubBase()).href
}

function humanizeFilename(path) {
  const name = path.split('/').pop() || path
  return name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
}

function collectImages(entries) {
  const images = []
  for (const entry of entries) {
    if (entry.type === 'dir') {
      images.push(...collectImages(entry.children || []))
    } else if (entry.type === 'image' && entry.path.startsWith('assets/')) {
      images.push({
        path: entry.path,
        title: humanizeFilename(entry.path),
        group: entry.path.split('/')[1] || 'assets',
      })
    }
  }
  return images
}

function renderGallery(containerId, items) {
  const container = document.getElementById(containerId)
  if (!items.length) {
    container.innerHTML = '<p class="muted">No images found for this section.</p>'
    return
  }

  container.innerHTML = items
    .map((item) => {
      const url = assetUrl(item.path)
      return `
      <figure class="gallery-item">
        <img src="${url}" alt="${item.title}" loading="lazy" />
        <figcaption>
          <strong>${item.title}</strong>
          ${item.note ? `<span>${item.note}</span><br />` : ''}
          <span>${item.path}</span><br />
          <a href="${url}" download>Download</a>
        </figcaption>
      </figure>
    `
    })
    .join('')
}

function renderDesignFilters() {
  const container = document.getElementById('design-filters')
  if (!container) return

  container.innerHTML = designFilters
    .map(
      (filter) =>
        `<button type="button" class="filter-btn${filter.id === activeDesignFilter ? ' active' : ''}" data-filter="${filter.id}">${filter.label}</button>`,
    )
    .join('')

  container.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      activeDesignFilter = button.dataset.filter
      renderDesignFilters()
      renderDesignGallery()
    })
  })
}

function renderDesignGallery() {
  const items =
    activeDesignFilter === 'all'
      ? manifestImages
      : manifestImages.filter((item) => item.group === activeDesignFilter)
  renderGallery('design-grid', items)
}

async function loadDoc(path, button) {
  const target = document.getElementById('doc-content')
  target.innerHTML = '<p class="muted">Loading…</p>'
  document.querySelectorAll('#doc-list button').forEach((el) => el.classList.remove('active'))
  button.classList.add('active')

  try {
    const res = await fetch(path)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const text = await res.text()
    target.innerHTML = window.marked.parse(text)
  } catch (err) {
    target.innerHTML = `<p class="muted">Could not load ${path}: ${err.message}</p>`
  }
}

function renderDocs() {
  const list = document.getElementById('doc-list')
  list.innerHTML = docs
    .map((doc) => `<button type="button" data-path="${doc.path}">${doc.title}</button>`)
    .join('')

  list.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => loadDoc(button.dataset.path, button))
    if (index === 0) loadDoc(button.dataset.path, button)
  })
}

function renderTree(entries, depth = 0) {
  return entries
    .map((entry) => {
      if (entry.type === 'dir') {
        return `
          <div class="tree-dir" style="padding-left:${depth * 0.75 + 0.85}rem">${entry.name}</div>
          ${renderTree(entry.children || [], depth + 1)}
        `
      }

      return `
        <div class="tree-item">
          <button type="button" data-path="${entry.path}" data-kind="${entry.type}" style="padding-left:${depth * 0.75 + 0.85}rem">
            ${entry.name}
          </button>
        </div>
      `
    })
    .join('')
}

async function previewFile(path, kind) {
  const target = document.getElementById('file-preview')
  const url = assetUrl(path)

  if (kind === 'image') {
    target.innerHTML = `
      <h2>${path}</h2>
      <img src="${url}" alt="${path}" />
      <p><a class="btn" href="${url}" download>Download</a></p>
    `
    return
  }

  if (kind === 'markdown') {
    try {
      const res = await fetch(url)
      const text = await res.text()
      target.innerHTML = `<h2>${path}</h2>${window.marked.parse(text)}`
    } catch (err) {
      target.innerHTML = `<p class="muted">${err.message}</p>`
    }
    return
  }

  if (kind === 'html') {
    target.innerHTML = `
      <h2>${path}</h2>
      <p><a class="btn" href="${url}">Open page</a></p>
    `
    return
  }

  target.innerHTML = `
    <h2>${path}</h2>
    <p class="muted">Preview not available for this file type.</p>
    <p><a class="btn" href="${url}" download>Download</a></p>
  `
}

async function loadManifest() {
  const tree = document.getElementById('file-tree')
  try {
    const res = await fetch('browser/manifest.json')
    const manifest = await res.json()
    manifestImages = collectImages(manifest.root)
    tree.innerHTML = renderTree(manifest.root)
    tree.querySelectorAll('button[data-path]').forEach((button) => {
      button.addEventListener('click', () =>
        previewFile(button.dataset.path, button.dataset.kind),
      )
    })
    renderDesignGallery()
  } catch (err) {
    tree.innerHTML = `<p class="muted">Could not load manifest: ${err.message}</p>`
    renderGallery('design-grid', [])
  }
}

navItems.forEach((item) => {
  item.addEventListener('click', () => showView(item.dataset.view))
})

jumpCards.forEach((card) => {
  card.addEventListener('click', () => showView(card.dataset.jump))
})

wireDesignBoard()
renderGallery('logo-grid', logos)
renderDesignFilters()
renderDocs()
loadManifest()

const initial = location.hash.replace('#', '')
if (initial && document.getElementById(`view-${initial}`)) {
  showView(initial)
}

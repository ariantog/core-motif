const views = [...document.querySelectorAll('.view')]
const navItems = [...document.querySelectorAll('.nav-item')]
const jumpCards = [...document.querySelectorAll('[data-jump]')]

const logos = [
  { title: 'Core Cut', note: 'Best all-rounder', path: 'assets/logo/concepts/01-core-cut.svg' },
  { title: 'Interlock', note: 'Best for equipment', path: 'assets/logo/concepts/02-interlock.svg' },
  { title: 'Velocity', note: 'Best for sportswear', path: 'assets/logo/concepts/03-velocity.svg' },
  { title: 'Core Block', note: 'Best for production', path: 'assets/logo/concepts/04-core-block.svg' },
  { title: 'Master (cream)', note: 'Primary export', path: 'assets/logo/corenation-cn-logo-cream.svg' },
  { title: 'Original reference', note: 'Closed hexagon', path: 'assets/logo/reference-original-hexagon.jpg' },
]

const designFilters = [
  { id: 'all', label: 'All assets' },
  { id: 'men-kanji', label: 'Men kanji' },
  { id: 'women-floral', label: 'Women floral' },
  { id: 'culture-run', label: 'Culture run' },
  { id: 'references', label: 'References' },
]

const docs = [
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
}

function wireDesignBoard() {
  const frame = document.querySelector('#view-design-board iframe')
  const link = document.querySelector('#view-design-board .btn')
  if (!frame || !link) return
  const nested = /\/site\/?$/i.test(hubBase().pathname)
  const href = nested ? 'design-board/index.html' : 'site/design-board/index.html'
  frame.src = href
  link.href = href
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

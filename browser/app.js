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

const designs = [
  { title: 'Belt — 力 Power', path: 'assets/designs/belt-kanji-chikara-power.png' },
  { title: 'Belt — 道 Path', path: 'assets/designs/belt-kanji-dō-path.png' },
  { title: 'Gloves — 雷 Thunder', path: 'assets/designs/gloves-kanji-rai-thunder.png' },
  { title: 'Knee — 風 Wind', path: 'assets/designs/knee-support-kanji-fū-wind.png' },
  { title: 'Shorts — 勝 Victory', path: 'assets/designs/shorts-kanji-shō-victory.png' },
  { title: 'Tee — 武 Warrior', path: 'assets/designs/tee-kanji-bu-warrior.png' },
  { title: 'Hero sample — shorts', path: 'assets/79516bb4-1828-4c9b-8dd0-e15ca2d0bb7d.jpg' },
  { title: 'Hero sample — belt', path: 'assets/7b4bcb20-0ba0-446a-bd24-2a69dcf633c9.jpg' },
]

const docs = [
  { title: 'Kanji design collection', path: 'docs/kanji-design-collection.md' },
  { title: 'Branding checklist', path: 'docs/branding-checklist.md' },
  { title: 'CN logo spec', path: 'docs/cn-logo-spec.md' },
  { title: 'README', path: 'README.md' },
  { title: 'Deploy guide', path: 'docs/deploy.md' },
  { title: 'Design board README', path: 'design-board/README.md' },
]

function showView(name) {
  views.forEach((view) => view.classList.toggle('active', view.id === `view-${name}`))
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.view === name))
  history.replaceState(null, '', `#${name}`)
}

function renderGallery(containerId, items) {
  const container = document.getElementById(containerId)
  container.innerHTML = items
    .map(
      (item) => `
      <figure class="gallery-item">
        <img src="${item.path}" alt="${item.title}" loading="lazy" />
        <figcaption>
          <strong>${item.title}</strong>
          ${item.note ? `<span>${item.note}</span><br />` : ''}
          <a href="${item.path}" download>Download</a>
        </figcaption>
      </figure>
    `,
    )
    .join('')
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
    .map(
      (doc, index) =>
        `<button type="button" data-path="${doc.path}">${doc.title}</button>`,
    )
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
  const url = encodeURI(path)

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
    tree.innerHTML = renderTree(manifest.root)
    tree.querySelectorAll('button[data-path]').forEach((button) => {
      button.addEventListener('click', () =>
        previewFile(button.dataset.path, button.dataset.kind),
      )
    })
  } catch (err) {
    tree.innerHTML = `<p class="muted">Could not load manifest: ${err.message}</p>`
  }
}

navItems.forEach((item) => {
  item.addEventListener('click', () => showView(item.dataset.view))
})

jumpCards.forEach((card) => {
  card.addEventListener('click', () => showView(card.dataset.jump))
})

renderGallery('logo-grid', logos)
renderGallery('design-grid', designs)
renderDocs()
loadManifest()

const initial = location.hash.replace('#', '')
if (initial && document.getElementById(`view-${initial}`)) {
  showView(initial)
}

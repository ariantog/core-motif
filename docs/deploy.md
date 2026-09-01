# Serve Corenation design hub on your domain

Point your web server at the **repository root** (the folder containing `index.html`).

## Quick start (local test)

```bash
# After git pull, build static assets once:
bash scripts/build-site.sh

# Serve locally:
python3 -m http.server 8080
```

Open **http://localhost:8080**

## Deploy workflow

```bash
git pull origin main
bash scripts/build-site.sh   # rebuilds design board + file manifest
```

Then reload your web server (if needed). No Node.js required at runtime — only for the build step.

## Nginx example

```nginx
server {
    listen 80;
    server_name designs.example.com;

    root /var/www/core-motif;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Replace `/var/www/core-motif` with the path where you `git pull`.

## What's included

| URL path | Content |
|----------|---------|
| `/` | Design hub — logos, docs, assets, file browser |
| `/site/design-board/` | Interactive kanji design board |
| `/assets/` | Logo SVGs and product artwork |
| `/docs/` | Markdown specs (viewable in browser) |

## GitHub Pages

If using GitHub Pages from the repo root, set **Source** to deploy from branch `main` and folder `/ (root)`. Run `bash scripts/build-site.sh` before pushing so `site/design-board/` and `browser/manifest.json` are up to date.

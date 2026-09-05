# Serve the design hub on your domain

The public website lives in the **`site/`** folder. Point your domain at `site/`, not the git repo root.

```
core-motif/
  site/                 ← web root
    index.html          ← #home #logos #designs #docs #browse
    assets/             ← logos, mockups, including assets/designs/ aliases
    browser/
    docs/
    design-board/       ← interactive studio
```

## After every git pull

```bash
git pull
bash scripts/build-site.sh
```

That rebuilds `site/` so image paths stay current.

## Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/core-motif/site;
    index index.html;
}
```

## Local test

```bash
bash scripts/build-site.sh
python3 -m http.server -d site 8080
```

Open http://localhost:8080

## Old URLs

These still work (copies of the current files):

- `/assets/designs/belt-kanji-chikara-power.png`
- `/assets/designs/belt-kanji-do-path.png`
- `/assets/designs/gloves-kanji-rai-thunder.png`
- `/assets/designs/knee-support-kanji-fu-wind.png`
- `/assets/designs/shorts-kanji-sho-victory.png`
- `/assets/designs/tee-kanji-bu-warrior.png`

Current files also live under `/assets/men-kanji/`, `/assets/women-floral/`, `/assets/culture-run/`, `/assets/pace/`, `/assets/forge/`, `/assets/chalk/`, `/assets/padel/`, and `/assets/logo/`.

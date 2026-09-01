#!/usr/bin/env bash
# Regenerate browser/manifest.json after adding files.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/browser/manifest.json"
export ROOT OUT

python3 <<'PY'
import json
import os
from pathlib import Path

root = Path(os.environ["ROOT"])
ignore = {".git", "node_modules", "dist", "dist-ssr", ".vite", ".tmp", "browser", "site"}

def should_skip(path: Path) -> bool:
    parts = set(path.parts)
    if parts & ignore:
        return True
    if path.name.startswith("."):
        return True
    return False

def walk(base: Path, rel: Path | None = None) -> list[dict]:
    rel = rel or Path(".")
    current = base / rel
    if not current.is_dir():
        return []
    entries: list[dict] = []
    for child in sorted(current.iterdir(), key=lambda p: (not p.is_dir(), p.name.lower())):
        if should_skip(child.relative_to(base)):
            continue
        child_rel = child.relative_to(base)
        if child.is_dir():
            entries.append({
                "type": "dir",
                "name": child.name,
                "path": child_rel.as_posix(),
                "children": walk(base, child_rel),
            })
        else:
            ext = child.suffix.lower().lstrip(".")
            kind = "file"
            if ext in {"png", "jpg", "jpeg", "gif", "webp", "svg"}:
                kind = "image"
            elif ext in {"md", "markdown"}:
                kind = "markdown"
            elif ext in {"html", "htm"}:
                kind = "html"
            entries.append({
                "type": kind,
                "name": child.name,
                "path": child_rel.as_posix(),
            })
    return entries

manifest = {
    "generatedAt": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
    "root": walk(root),
}
Path(os.environ["OUT"]).write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {os.environ['OUT']}")
PY

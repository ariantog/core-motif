# Repository agent instructions

## No GUI demos or walkthrough artifacts

- Never create demo videos, screen recordings, screenshots, or GUI walkthrough artifacts.
- Never use `RecordScreen`, `computerUse`, or browser-driven “prove it works” sessions for this repository.
- Do not upload, embed, or attach walkthrough media to pull requests or final responses.
- Do not launch a graphical browser solely for manual validation. The maintainer performs all GUI testing.

## Verification

- Verify changes with command-line checks only.
- Use the checks appropriate to the project, such as `npm run lint`, `npm run build`, `node --check`, `curl`, `./vendor/bin/pest`, or `php artisan tinker`.
- Report test commands and their textual results. Keep verification focused on the requested change.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page website for **FoodSafe Solutions** — a food safety and quality consulting business. No build step, no framework, no package manager. Open `index.html` directly in a browser to run.

## Running the site

```powershell
Start-Process "C:\Users\Petko\ClaudeCodeTester\index.html"
```

## Git workflow

**Commit and push after every completed task — no exceptions.** The goal is that GitHub always reflects the latest working state so no work is ever lost and any change can be reverted.

Rules:
- Commit as soon as a task is done, not batched at the end of a session.
- Always push immediately after committing (`git push` every time).
- Stage only the files relevant to the change — never `git add .` blindly.
- Write commit messages that describe **what changed and why**, not just "update files".

```powershell
Set-Location "C:\Users\Petko\ClaudeCodeTester"
git add <specific files>
git commit -m "concise description of what changed and why"
git push
```

Good commit message examples:
- `Add EN/SR language switcher with localStorage persistence`
- `Fix hero image URL — short-form Unsplash IDs don't resolve on CDN`
- `Update stat: 15+ years experience → 25+`

## Architecture

Three files, no dependencies:

- **`index.html`** — all markup. Every visible text element carries a `data-i18n="key"` attribute (or `data-i18n-html` for elements containing HTML tags like `<br>`/`<em>`, or `data-i18n-placeholder` for inputs). The language switcher in the header reads these attributes at runtime.
- **`style.css`** — single stylesheet using CSS custom properties (`--primary`, `--accent`, `--bg-alt`, etc.) defined in `:root`. Layout is CSS Grid + Flexbox. Responsive breakpoints at 1024px, 900px, 768px, 480px.
- **`main.js`** — contains the full `translations` object (`en` and `sr` keys), the `applyLanguage(lang)` function that drives the switcher, sticky header, mobile menu, smooth scroll, form validation, and IntersectionObserver scroll animations. Language preference persists via `localStorage`.

## Internationalisation (EN/SR)

To add or change any user-facing text:
1. Update the text in `index.html` (English default).
2. Add/update the matching key in **both** `translations.en` and `translations.sr` inside `main.js`.
3. Use `data-i18n="key"` for plain text, `data-i18n-html="key"` when the value contains HTML, `data-i18n-placeholder="key"` for input placeholders.

## Images

Images are loaded from the Unsplash CDN. Always verify a URL works before committing — use a confirmed `images.unsplash.com/photo-{timestamp-hash}` ID. The short-form Unsplash IDs (e.g. `TGEB0RZA31M`) do **not** reliably resolve on the standard CDN.

## Prettier

`index.html` is excluded from Prettier via `.prettierignore` to prevent the formatter from splitting inline `<span>` tags across lines (which introduces unwanted whitespace in rendered text).

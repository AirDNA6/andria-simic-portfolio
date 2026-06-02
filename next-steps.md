# Next Steps

Plan of work for the **Andria Simić** portfolio (Angular 19 SPA in `portfolio-site/`).

This is based on the current state of the repo:

- ✅ Single-page site with sections: header, hero, about, journey, skills, projects, contact, footer
- ✅ Content centralized in a data layer (`portfolio.en.ts`, `portfolio.srb.ts`, `portfolio.types.ts`)
- ✅ Bilingual support (EN / SRB) via `LanguageService` with signals + `localStorage` persistence
- ✅ Scroll directives (`reveal-on-scroll`, `scroll-background`)
- ❌ No deployment / hosting set up
- ❌ Almost no tests (only the default `app.component.spec.ts`)
- ❌ No CV download, SEO meta, or social preview

---

## 0. Quick fixes (do first — low effort, visible impact)

- [ ] **Fix the name inconsistency.** `index.html` title and `README.md` say *"Andrias Simić"*, but the data files say *"Andria Simić"*. Pick the correct spelling and make it consistent across:
  - `portfolio-site/src/index.html` (`<title>` + `<meta name="description">`)
  - `README.md`
  - `tutorial.md`
- [ ] **Localize the document `<meta name="description">`.** The title is already updated at runtime by `LanguageService` (via `document.title`), but the meta description in `index.html` is static English. Either update it in the service effect or accept English-only for SEO.
- [ ] **Verify a production build works.** Run `npm run build` and confirm the output path (`dist/portfolio-site/browser/`) — needed for every deploy option below.

---

## 1. Deployment & hosting (highest priority)

The site currently only runs locally. Getting it live is the most valuable next step.

- [ ] **Choose a host** — Vercel, Netlify, GitHub Pages, or Azure Static Web Apps.
  - Build command: `npm run build`
  - Publish directory: `dist/portfolio-site/browser`
- [ ] **Add SPA fallback routing** so deep links / refresh don't 404 (the `**` route redirects to `''` client-side, but the host must serve `index.html` for unknown paths).
  - Netlify: `_redirects` with `/* /index.html 200`
  - Vercel: `vercel.json` rewrite to `/index.html`
  - GitHub Pages: copy `index.html` to `404.html`
- [ ] **Add a CI workflow** (`.github/workflows/deploy.yml`) to build and deploy on push to `main`.
- [ ] **Custom domain** (optional) once hosting is confirmed.

## 2. CV download

The repo root has `CV.pdf` but it is not reachable from the site.

- [ ] Copy `CV.pdf` into `portfolio-site/public/` so it ships with the build.
- [ ] Add a **"Download CV"** button in the hero and/or header (`<a href="CV.pdf" download>`).
- [ ] Add the matching label to the `ui` block in **both** `portfolio.en.ts` and `portfolio.srb.ts`.

## 3. SEO & social sharing

- [ ] Add **Open Graph + Twitter Card** meta tags to `index.html` (title, description, image, URL) for LinkedIn/Twitter previews.
- [ ] Create an **OG preview image** (1200×630) and place it in `public/`.
- [ ] Add `robots.txt` and `sitemap.xml` to `public/`.
- [ ] Add **JSON-LD `Person` structured data** for richer search results.
- [ ] Replace the default `favicon.ico` with a personal/branded icon (plus `apple-touch-icon`).

## 4. Accessibility & polish

- [ ] Run an audit (Lighthouse / axe) and fix contrast, focus states, and landmark roles.
- [ ] Honor `prefers-reduced-motion` — disable scroll-darkening and reveal animations for users who request reduced motion.
- [ ] Verify the language toggle and mobile menu are keyboard-navigable and announced to screen readers (`aria-pressed`, `aria-expanded`).
- [ ] Confirm all interactive elements have visible focus outlines.

## 5. Testing & quality

Right now only the scaffolded `app.component.spec.ts` exists.

- [ ] Add a unit test for **`LanguageService`** (default language, toggle, persistence, `content()` switching).
- [ ] Add light render tests for the section components (they render data without errors).
- [ ] Add **lint + format** tooling (ESLint + Prettier) and an npm script.
- [ ] Wire `npm test` (headless) and lint into the CI workflow as gates before deploy.

## 6. Content review

- [ ] Re-read `portfolio.srb.ts` for natural Serbian phrasing (tech terms especially).
- [ ] Confirm career dates, project links, and the email address are current.
- [ ] Consider adding 1–2 more projects or a "Certifications" section (the tutorial documents how).

---

## Backlog / nice-to-have

- **Contact form** — Formspree, Netlify Forms, or a small serverless function.
- **Analytics** — privacy-friendly option like Plausible, or GA4.
- **Theme toggle** — light/dark via extra CSS variables (architecture already uses design tokens).
- **Blog route** — second route in `app.routes.ts` for articles/notes.
- **Animations pass** — subtle hover/parallax refinements on cards.
- **Performance** — confirm font loading strategy and bundle budgets in `angular.json`.

---

## Suggested order

1. Quick fixes (§0) → 2. Deploy (§1) → 3. CV download (§2) → 4. SEO (§3) → 5. A11y (§4) → 6. Tests/CI (§5) → 7. Content review (§6).

Sections §1–§3 get a polished, shareable site live fast; §4–§6 harden it for the long term.

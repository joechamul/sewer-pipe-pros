# CONTENT.md — Where every piece of copy lives

This is the single source of truth for "where do I go to change X?" on the Sewer Pipe Pros site. If you need to update copy, phone numbers, services, or imagery, find it here first.

---

## 🔁 Site-wide constants

### Phone number `(310) 780-0362`

Appears in 15+ places. It's hardcoded rather than centralized so search is straightforward. If Robert's number ever changes, do a project-wide find/replace for:

- `(310) 780-0362` (display format)
- `310 780-0362`
- `tel:+13107800362` (tel links)
- `+1-310-780-0362` (JSON-LD)

### Business name / license / tagline

Hardcoded in:

- [`src/components/TopStrip.astro`](src/components/TopStrip.astro) — license line in the black top bar
- [`src/components/Header.astro`](src/components/Header.astro) — brand wordmark + tagline
- [`src/components/Footer.astro`](src/components/Footer.astro) — brand block + license chip
- [`src/pages/index.astro`](src/pages/index.astro) — JSON-LD LocalBusiness schema
- [`src/pages/about.astro`](src/pages/about.astro) — About page hero copy
- [`README.md`](README.md)

### Yelp link

- [`src/components/Footer.astro`](src/components/Footer.astro) — Company column
- [`src/components/ContactSection.astro`](src/components/ContactSection.astro) — contact blocks
- [`src/pages/index.astro`](src/pages/index.astro) — JSON-LD `sameAs`

---

## 🏠 Homepage (`/`)

Composed in [`src/pages/index.astro`](src/pages/index.astro). Each section is its own component:

| Section | File |
|---|---|
| Top strip (24/7 banner) | [`src/components/TopStrip.astro`](src/components/TopStrip.astro) |
| Main header / nav | [`src/components/Header.astro`](src/components/Header.astro) |
| Hero + request form | [`src/components/Hero.astro`](src/components/Hero.astro) |
| Trust bar (5-item strip) | [`src/components/TrustBar.astro`](src/components/TrustBar.astro) |
| About section (Robert + license) | [`src/components/AboutSection.astro`](src/components/AboutSection.astro) |
| Services grid (with category filter) | [`src/components/ServicesGrid.astro`](src/components/ServicesGrid.astro) + [`src/components/ServiceCard.astro`](src/components/ServiceCard.astro) |
| Emergency banner (24/7) | [`src/components/EmergencyBanner.astro`](src/components/EmergencyBanner.astro) |
| Why Us (6 numbered cards) | [`src/components/WhyUs.astro`](src/components/WhyUs.astro) |
| Service areas (chip grid) | [`src/components/ServiceAreas.astro`](src/components/ServiceAreas.astro) |
| Contact section (info + form) | [`src/components/ContactSection.astro`](src/components/ContactSection.astro) |
| Footer | [`src/components/Footer.astro`](src/components/Footer.astro) |
| Mobile sticky call bar | [`src/components/StickyCall.astro`](src/components/StickyCall.astro) |

---

## 🛠 Services

**Every service lives in one array** in [`src/data/services.ts`](src/data/services.ts).

Fields per service:

- `slug` — URL path (`/services/<slug>/`)
- `title` — display name
- `category` — `sewer` | `water` | `pipe` | `fixture`
- `icon` — icon name from [`src/components/Icon.astro`](src/components/Icon.astro)
- `shortDescription` — 1–2 sentences on the grid card
- `longDescription` — full detail-page copy (supports `### heading`, `- bullet`, `**bold**`)

Change this file → every service grid, the footer, and the auto-generated `/services/<slug>/` pages update.

**Category labels** (displayed in filter chips, form selects, and pill badges) are in the `categories` array in the same file.

**Service detail page template:** [`src/pages/services/[slug].astro`](src/pages/services/[slug].astro) — uses [`src/layouts/ServiceLayout.astro`](src/layouts/ServiceLayout.astro).

---

## 📍 Service Areas

**Every area lives in** [`src/data/areas.ts`](src/data/areas.ts).

Fields:

- `slug` — URL path (`/areas/<slug>/`)
- `name` — display name
- `blurb` — optional custom first paragraph for that area's page (falls back to a templated default)

**Area detail page template:** [`src/pages/areas/[slug].astro`](src/pages/areas/[slug].astro) — includes a hero, localized copy, the full services grid, and a contact section.

---

## 📄 Other pages

| Page | File |
|---|---|
| About | [`src/pages/about.astro`](src/pages/about.astro) |
| Contact | [`src/pages/contact.astro`](src/pages/contact.astro) |
| All services listing | [`src/pages/services/index.astro`](src/pages/services/index.astro) |
| All areas listing | [`src/pages/areas/index.astro`](src/pages/areas/index.astro) |

---

## 🎨 Colors, fonts, spacing

Everything is a CSS variable in [`src/styles/global.css`](src/styles/global.css) at the top under `:root`. Change once → propagates everywhere.

Most important variables:

- `--ink` — brand dark charcoal
- `--red` / `--red-dark` — primary CTAs
- `--cyan` / `--blue` / `--deep-blue` — accents
- `--paper` — page background
- `--font-display` — Barlow Condensed (headings, buttons)
- `--font-body` — Inter (body text)

---

## 📝 Forms

The request form (`src/components/RequestForm.astro`) currently **does not send anywhere** — it validates and shows a confirmation alert. See the `TODO:` comment at the top of the `<script>` block for where to wire up Formspree / Web3Forms / Netlify Forms.

---

## 🔍 SEO

- Per-page `<title>`, `<meta description>`, canonical, Open Graph, Twitter Card — handled in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) (pass `title` and `description` as props).
- `LocalBusiness` / `Plumber` JSON-LD — in [`src/pages/index.astro`](src/pages/index.astro).
- Sitemap auto-generated by `@astrojs/sitemap` (configured in [`astro.config.mjs`](astro.config.mjs)).
- Robots.txt — [`public/robots.txt`](public/robots.txt).

---

## 📸 Images

- **Logo (main):** [`public/logo.png`](public/logo.png) — used in JSON-LD, OG tags, favicon fallback.
- **Favicon:** [`public/favicon.svg`](public/favicon.svg) — simplified brand mark.
- The header/footer/about section use inline SVG versions of the logo motif (colors come from CSS variables) so they scale cleanly without raster assets.

To optimize new raster images, drop them in `src/assets/` and use Astro's `<Image />` component from `astro:assets` inside any `.astro` file.

---

## ⚠️ Analytics

Intentionally none included. A commented-out placeholder lives in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) — look for `<!-- TODO: analytics/tracking scripts go here -->`.

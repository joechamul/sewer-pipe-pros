# Sewer Pipe Pros Inc. — Website

Static marketing site for **Sewer Pipe Pros Inc.**, a licensed Los Angeles plumbing, drain, and sewer contractor.

- **Owner:** Robert Manuel Chamul
- **License:** #1126184 · C36 &amp; C42
- **Phone:** (310) 780-0362
- **Tagline:** "We Serve Differently"
- **Yelp:** <https://www.yelp.com/biz/sewer-pipe-pros-los-angeles>

Built with [Astro](https://astro.build), deployed to GitHub Pages.

---

## Run locally

You need **Node.js 20 or newer** and **npm**.

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server (http://localhost:4321)
npm run dev

# 3. Build the production site to ./dist
npm run build

# 4. Preview the production build
npm run preview
```

If you use `nvm`, the repo includes an `.nvmrc` so `nvm use` picks the right version.

---

## Deploying

Deployment is fully automated by GitHub Actions.

1. Push to the `main` branch.
2. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will build the site with Node 20 and publish it to GitHub Pages.
3. The site will be available at **https://joechamul.github.io/sewer-pipe-pros/**.

> One-time setup in GitHub: **Settings → Pages → Source: GitHub Actions**.

### Custom domain (when ready)

1. Add your domain to the repo (Settings → Pages → Custom domain).
2. In [`astro.config.mjs`](astro.config.mjs):
   - Change `site` to your custom domain (e.g. `'https://sewerpipepros.com'`)
   - **Remove** the `base: '/sewer-pipe-pros'` line.
3. Add a `public/CNAME` file containing just your domain (e.g. `sewerpipepros.com`).
4. Commit and push — GitHub Actions will deploy to the new domain.

---

## Editing content

All editable site copy is catalogued in [`CONTENT.md`](CONTENT.md). Start there.

### Add a new service

1. Open [`src/data/services.ts`](src/data/services.ts).
2. Add a new entry to the `services` array with:
   - `slug` — URL-safe (kebab-case, lowercase)
   - `title`
   - `category` — one of `sewer`, `water`, `pipe`, `fixture`
   - `icon` — an icon name from [`src/components/Icon.astro`](src/components/Icon.astro)
   - `shortDescription` — 1–2 sentences for the grid card
   - `longDescription` — full page copy (supports `### heading`, `- list`, `**bold**`)
3. Save — the service grid, the footer, and a dedicated detail page at `/services/<slug>/` will update automatically.

### Add a new service area

1. Open [`src/data/areas.ts`](src/data/areas.ts).
2. Add `{ slug: 'city-name', name: 'City Name', blurb: 'Optional custom paragraph…' }`.
3. Save — a new page at `/areas/<slug>/` will generate.

### Add a deep-dive markdown page (optional)

Content collections are set up in [`src/content/`](src/content/) for longer-form pieces. Drop a `.md` file in `src/content/services/` or `src/content/areas/` and reference the schema in [`src/content/config.ts`](src/content/config.ts).

### Hook up the request form to a real email endpoint

The form in [`src/components/RequestForm.astro`](src/components/RequestForm.astro) currently runs client-side validation and shows a confirmation alert on submit. To send real emails, pick one of these (no backend required):

- **Formspree** — set `form.action = "https://formspree.io/f/YOUR_ID"` and remove the `preventDefault` block.
- **Web3Forms** — similar flow, free tier, single `access_key` field.
- **Netlify Forms** — add `data-netlify="true"` if you deploy to Netlify instead of Pages.

Search for `TODO:` in `src/components/RequestForm.astro` for exact line to edit.

---

## Project structure

```
sewer-pipe-pros/
├── .github/workflows/deploy.yml   # GitHub Pages deploy
├── public/                        # static assets (logo, favicon, robots)
├── src/
│   ├── assets/                    # images handled by astro:assets
│   ├── components/                # header, footer, hero, services grid, forms…
│   ├── content/                   # optional markdown collections
│   ├── data/
│   │   ├── services.ts            # EDIT ME to manage services
│   │   └── areas.ts               # EDIT ME to manage service areas
│   ├── layouts/                   # BaseLayout + ServiceLayout
│   ├── pages/
│   │   ├── index.astro            # homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services/
│   │   │   ├── index.astro        # all-services listing
│   │   │   └── [slug].astro       # dynamic per-service page
│   │   └── areas/
│   │       ├── index.astro
│   │       └── [slug].astro       # dynamic per-area page
│   └── styles/global.css          # brand tokens, typography, buttons
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Design tokens

All brand colors, fonts, and spacing live in CSS variables at the top of [`src/styles/global.css`](src/styles/global.css). Edit once, propagates everywhere.

---

## Questions?

Open an issue, or call Robert at **(310) 780-0362**.

# Sewer Pipe Pros — Astro Site Build

Build a production-ready Astro static site for **Sewer Pipe Pros Inc.**, a licensed Los Angeles plumbing, drain, and sewer contractor. The site will be deployed to GitHub Pages.

---

## Business Information

- **Company:** Sewer Pipe Pros Inc.
- **Owner:** Robert Manuel Chamul
- **Phone:** (310) 780-0362 (tel: +13107800362)
- **Tagline:** "We Serve Differently"
- **Category line:** Plumbing | Drains | Sewer
- **License:** Lic. #1126184 · C36 & C42
- **Service area:** Greater Los Angeles
- **Yelp:** https://www.yelp.com/biz/sewer-pipe-pros-los-angeles

### Brand identity (from the logo)

- Logo: red eagle wing + blue water droplet with white eagle silhouette, on dark charcoal background
- Primary ink: `#1a1c24` (dark charcoal)
- Red accent: `#e5202a` (primary CTAs, alerts, emphasis)
- Red dark: `#b3141c` (shadow/hover)
- Cyan accent: `#3fc2ee` (secondary accent, highlights)
- Blue: `#1e7bd6` (links, form focus)
- Deep blue: `#0f3d7a`
- Paper background: `#f6f4ef`
- Muted text: `#6b7080`
- Line/border: `#e6e1d7`

### Typography

- Display (headings): **Barlow Condensed** (weights 600–900), uppercase, tight letter-spacing
- Body: **Inter** (weights 400–700)
- Load from Google Fonts with preconnect

---

## Tech Stack & Requirements

- **Framework:** Astro (latest stable)
- **Styling:** Plain CSS with CSS variables in a global stylesheet. No Tailwind. No CSS-in-JS.
- **Package manager:** npm
- **Node version:** 20+
- **Output:** `static` (default for Astro)
- **Interactivity:** Vanilla JS only. No React integration unless strictly needed. Use Astro's `<script>` tags for mobile menu toggle, service category filter, and scroll reveal.
- **Images:** Use Astro's `<Image />` component from `astro:assets` for any raster images in `src/assets/`.
- **Accessibility:** Semantic HTML, aria-labels on icon-only buttons, visible focus states, sufficient contrast.
- **Performance:** Lighthouse score 95+ across the board. Preconnect fonts, lazy-load images, no layout shift.
- **SEO:** Unique `<title>` and meta description per page, Open Graph tags, JSON-LD LocalBusiness schema on homepage, sitemap via `@astrojs/sitemap`, robots.txt.

---

## Project Structure

```
sewer-pipe-pros/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deploy workflow
├── public/
│   ├── logo.png                 # Main logo (user will provide)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                  # Optimized images via astro:assets
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── TopStrip.astro
│   │   ├── Hero.astro
│   │   ├── TrustBar.astro
│   │   ├── AboutSection.astro
│   │   ├── ServicesGrid.astro
│   │   ├── ServiceCard.astro
│   │   ├── EmergencyBanner.astro
│   │   ├── WhyUs.astro
│   │   ├── ServiceAreas.astro
│   │   ├── ContactSection.astro
│   │   ├── RequestForm.astro
│   │   ├── StickyCall.astro
│   │   └── Icon.astro           # Inline SVG icon component
│   ├── content/
│   │   ├── config.ts            # Content collection schema
│   │   ├── services/            # One .md file per service
│   │   └── areas/               # One .md file per service area
│   ├── data/
│   │   ├── services.ts          # Canonical service list
│   │   └── areas.ts             # Canonical service area list
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML shell, SEO, fonts, global CSS
│   │   └── ServiceLayout.astro  # Layout for service detail pages
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services/
│   │   │   ├── index.astro      # All services listing
│   │   │   └── [slug].astro     # Dynamic service detail page
│   │   └── areas/
│   │       ├── index.astro      # All areas listing
│   │       └── [slug].astro     # Dynamic area detail page
│   └── styles/
│       └── global.css           # CSS variables, typography, utilities
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## Services Data

Create `src/data/services.ts` with all 23 services, each with: `slug`, `title`, `category`, `shortDescription` (for grid cards), `longDescription` (for detail pages), `icon` (string name for SVG lookup).

**Categories:** `sewer` (Sewer & Drain), `water` (Water & Heaters), `pipe` (Piping & Gas), `fixture` (Fixtures & Appliances)

Services to include:

**Sewer & Drain:**

- Trenchless Sewer Line Repair
- Hydro-Jetting
- Sewer Video Camera Inspection
- Drain Cleaning & Clearing
- Sewer Line Repair
- Septic Tank Repair Service

**Water & Heaters:**

- Water Heater Installation & Repair
- Tankless Hot Water Heater Installation
- Noritz Tankless Water Heaters
- Water Lines & Pipe Work
- Sump Pump Installation
- Sprinkler System Installation & Repair

**Piping & Gas:**

- Copper Piping, Repiping & Installation
- PEX Pipe Installation
- PVC Piping for Plumbing
- Pipe Bursting
- Gas Line Repair

**Fixtures & Appliances:**

- Toilet Repair & Service
- Shower & Bathtub Repair
- Garbage Disposal Repair & Installation
- Dishwashers & Kitchen Water Lines
- Residential Plumbing
- Commercial Plumbing
- Plumbing for Property Managers

Generate a dynamic route at `/services/[slug]` that renders a detail page for each — H1 with service name, long description, relevant services aside, and a CTA + request form.

---

## Service Areas Data

Create `src/data/areas.ts` with these LA-area neighborhoods, each with `slug` and `name`:

Los Angeles, Downtown LA, Hollywood, West LA, Culver City, Santa Monica, Venice, Beverly Hills, Brentwood, Westwood, Pacific Palisades, Mar Vista, Inglewood, El Segundo, Torrance, Manhattan Beach, Hermosa Beach, Redondo Beach, Hawthorne, Gardena, Long Beach, Burbank, Glendale, Pasadena, Studio City, Sherman Oaks, Van Nuys, Encino.

Generate `/areas/[slug]` pages — for SEO, each should have a unique H1 like "Plumbing in {Area}" with a short paragraph, the services list, and a contact CTA.

---

## Page Requirements

### Homepage (`/`)

Sections in order: TopStrip → Header → Hero (with request form) → TrustBar → AboutSection → ServicesGrid (with category filter) → EmergencyBanner → WhyUs → ServiceAreas → ContactSection → Footer → StickyCall (mobile).

### Hero

- Headline: "LA's Licensed Plumbing, Drain & Sewer Experts" with "Licensed" in red and "Sewer" in cyan
- Sub: "Sewer Pipe Pros Inc. delivers honest, expert plumbing for homes and businesses across Los Angeles. From trenchless sewer repair to tankless water heaters — we serve differently."
- Live "24/7 Emergency Service Available" kicker with pulsing red dot
- Two CTAs: Call Now (red, primary) and Request Service (ghost)
- Four trust checkmarks: Licensed & Insured, Residential & Commercial, Upfront Honest Pricing, Same-Day Service
- Right column: white request form card with red top border and cyan accent bar

### Services Grid

- Category filter pills (All, Sewer & Drain, Water & Heaters, Piping & Gas, Fixtures)
- Cards with icon, title, short description, "Learn More →" link to `/services/[slug]`
- On hover: lift, shadow, red left border grows, icon background becomes red gradient
- Implement filter with vanilla JS in a `<script>` tag

### Why Us

Six numbered cards (01–06): Licensed & Accountable, Honest Upfront Pricing, Fast Respectful Service, Full-Service Plumbing, Modern Technology, Residential & Commercial.

### Emergency Banner

Dark background with huge "24/7" watermark behind content. Headline with "Plumbing Emergency?" in red. Giant red-bordered phone number CTA.

### About

Two-column: left is a dark card with a custom SVG re-drawing of the logo motif (blue droplet + red wing + white eagle silhouette) and a license badge overlay. Right is copy introducing Robert Manuel Chamul and the business, ending with a signature block (initials avatar + name + "Owner · Sewer Pipe Pros Inc.").

### Service Areas

Dark section with cyan-dot chip grid linking to each `/areas/[slug]` page.

### Contact

Two-column: contact info blocks (phone, service area, licenses, Yelp) on left; full request form on right.

### Footer

Four columns: brand (logo + blurb + license), Core Services, More Services, Company. Bottom bar with copyright, "We Serve Differently" slogan in red, and "Plumbing · Drains · Sewer".

### Sticky Mobile Call Bar

Fixed bottom red bar with phone icon and number, only shown on screens <560px.

---

## Request Form Component

- Fields: name, phone, email, service (select with full service list), address/zip, message
- Client-side validation
- `onsubmit` currently shows a confirmation alert; leave a clear `TODO` comment pointing to where a Formspree/Web3Forms/Netlify endpoint should go
- Include a "Or call us directly at (310) 780-0362" footnote under the submit button

---

## Styling Notes

- Buttons use chunky bottom-shadow style: `box-shadow: 0 6px 0 var(--red-dark)` that reduces to `0 4px 0` on hover with a `translateY(-2px)` lift
- Section headers use an "eyebrow" pattern: red horizontal lines on either side of uppercase kicker text
- Scroll-reveal: elements with `.reveal` class fade up when they enter viewport (IntersectionObserver in a global script)
- Hero background: layered radial gradients (blue top-right, red bottom-left) over dark base, plus a faint grid pattern masked with a radial fade
- All transitions 0.2s–0.25s ease, no bouncy spring animations

---

## GitHub Pages Deployment

1. In `astro.config.mjs`:

   ```js
   import { defineConfig } from 'astro/config'
   import sitemap from '@astrojs/sitemap'

   export default defineConfig({
     site: 'https://joechamul.github.io', // replace USERNAME
     base: '/sewer-pipe-pros', // remove if using custom domain
     integrations: [sitemap()],
   })
   ```

2. Create `.github/workflows/deploy.yml` using Astro's official GitHub Pages workflow (withastro/action). Workflow triggers on push to `main`, builds with Node 20, and deploys to Pages.
3. Add a README section explaining: how to run locally (`npm install`, `npm run dev`), how to deploy (just push to main), and how to add a new service or area (edit the data file + optionally add a markdown file).

---

## Deliverables

1. Fully working Astro project I can `npm install && npm run dev` to preview
2. All 23 service pages generated from the data file
3. All 28 area pages generated from the data file
4. Deploy workflow in `.github/workflows/deploy.yml`
5. README with local dev, deploy, and content-update instructions
6. A `CONTENT.md` in the project root listing every place copy lives, so Robert (or anyone) can find what to edit without spelunking the codebase

---

## Build Order

1. Scaffold Astro project, install `@astrojs/sitemap`
2. Set up `global.css` with CSS variables, typography, utility classes
3. Build `BaseLayout.astro` with fonts, meta tags, SEO defaults
4. Build shared components (Header, Footer, TopStrip, StickyCall, RequestForm)
5. Build homepage sections as components, compose in `index.astro`
6. Set up `src/data/services.ts` and `src/data/areas.ts`
7. Build dynamic `[slug].astro` pages for services and areas
8. Add `about.astro`, `contact.astro`, listing pages for services/areas
9. Add GitHub Actions workflow
10. Write README and CONTENT.md
11. Run `npm run build` and verify zero errors, then `npm run preview` to sanity-check the built output

---

## Don't

- Don't add a CMS, database, or backend
- Don't add React, Vue, or Svelte integrations
- Don't use Tailwind or any CSS framework
- Don't invent review content, testimonials, or fake photos — leave clear placeholder comments where real content should go
- Don't add analytics/tracking scripts — leave a commented placeholder in BaseLayout
- Don't use AI-generic fonts (Inter is used only for body; avoid Space Grotesk, Poppins, etc.)

Begin.

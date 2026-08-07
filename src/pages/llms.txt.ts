// Generates /llms.txt — a clean, plain-text summary of the business for large
// language models and AI answer engines (ChatGPT, Perplexity, Google AI
// Overviews, Claude, etc.). Follows the llms.txt convention (llmstxt.org):
// an H1 title, a blockquote summary, then link/fact sections.
//
// It's built from the same data files that drive the site, so it never drifts
// out of sync with the actual services, areas, and FAQs.

import type { APIRoute } from 'astro';
import { services, categories } from '../data/services';
import { areas } from '../data/areas';
import { faqs } from '../data/faqs';
import { BUSINESS, KNOWS_ABOUT } from '../data/business';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://sewerpipepros.com/').replace(/\/$/, '');

  const lines: string[] = [];

  // ── Title + summary ──────────────────────────────────────────────
  lines.push(`# ${BUSINESS.name}`);
  lines.push('');
  lines.push(
    `> Licensed Los Angeles plumbing, drain, and sewer contractor serving Greater LA. ` +
      `Specialists in trenchless sewer line repair, hydro-jetting, and HD sewer camera inspections, ` +
      `plus full residential and commercial plumbing. 24/7 emergency service. ` +
      `California license #${BUSINESS.licenseNumber} (C36 & C42). Phone: ${BUSINESS.telDisplay}.`
  );
  lines.push('');
  lines.push(
    `${BUSINESS.name} (also "${BUSINESS.alternateName}") is a licensed, insured plumbing company ` +
      `based in Los Angeles, California. We focus on sewer and drain work — trenchless sewer line ` +
      `repair and replacement, hydro-jetting, and video camera inspections — alongside water heaters, ` +
      `repipes, gas lines, and fixtures. We serve homeowners, home buyers, businesses, realtors, and ` +
      `property managers across the Los Angeles metro. Company slogan: "${BUSINESS.slogan}."`
  );
  lines.push('');

  // ── Key facts ────────────────────────────────────────────────────
  lines.push('## Key facts');
  lines.push(`- Business name: ${BUSINESS.name}`);
  lines.push(`- Phone (call or text): ${BUSINESS.telDisplay}`);
  lines.push(
    `- License: California Contractor License #${BUSINESS.licenseNumber} ` +
      `(C36 Plumbing, C42 Sanitation Systems; Class A General Engineering)`
  );
  lines.push('- Hours: Open 24/7, including emergency service');
  lines.push('- Service model: Service-area business across Greater Los Angeles (no walk-in storefront)');
  lines.push('- Pricing: Upfront, flat-rate quotes; free estimates; no hourly creep');
  lines.push('- Serves: Residential, commercial, home buyers (escrow sewer inspections), realtors, and property managers');
  lines.push(`- Website: ${base}/`);
  lines.push('- Reviews: 5-star rated on Yelp');
  lines.push('');

  // ── Areas of expertise ───────────────────────────────────────────
  lines.push('## Areas of expertise');
  for (const topic of KNOWS_ABOUT) lines.push(`- ${topic}`);
  lines.push('');

  // ── Services (grouped by category) ───────────────────────────────
  lines.push('## Services');
  for (const cat of categories) {
    lines.push('');
    lines.push(`### ${cat.label}`);
    for (const s of services.filter((x) => x.category === cat.id)) {
      lines.push(`- [${s.title}](${base}/services/${s.slug}/): ${s.shortDescription}`);
    }
  }
  lines.push('');

  // ── Service areas ────────────────────────────────────────────────
  lines.push('## Service areas (Greater Los Angeles)');
  for (const a of areas) {
    lines.push(`- [${a.name}](${base}/areas/${a.slug}/)`);
  }
  lines.push('');

  // ── FAQs ─────────────────────────────────────────────────────────
  lines.push('## Frequently asked questions');
  for (const f of faqs) {
    lines.push('');
    lines.push(`### ${f.question}`);
    lines.push(f.answer);
  }
  lines.push('');

  // ── Contact ──────────────────────────────────────────────────────
  lines.push('## Contact');
  lines.push(`- Call or text: ${BUSINESS.telDisplay}`);
  lines.push(`- Request service online: ${base}/#request-form`);
  lines.push(`- Service areas: ${base}/areas/`);
  lines.push(`- All services: ${base}/services/`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

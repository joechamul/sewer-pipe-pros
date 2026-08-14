// Canonical business facts + JSON-LD builders.
// Everything about "who we are" for structured data lives here so the homepage,
// area pages, and service pages all describe ONE consistent business entity
// (same NAP, same @id). Edit business details in one place.

import { reviews, type Review } from './reviews';
import { services } from './services';

export const BUSINESS = {
  name: 'Sewer Pipe Pros Inc.',
  alternateName: 'Sewer Pipe Pros',
  telephone: '+1-310-780-0362',
  telDisplay: '(310) 780-0362',
  priceRange: '$$',
  slogan: 'We Serve Differently',
  licenseNumber: '1126184',
  licenseDetail: 'C36 Plumbing Contractor, C42 Sanitation Systems Contractor',

  // Service-area business: no public storefront. We still anchor the entity to a
  // geographic point (central Los Angeles) so Google can associate it with the
  // metro. Update if a primary service center is established.
  geo: { latitude: 34.0522, longitude: -118.2437 },

  // City where the business is based (region-level NAP, no street address).
  addressLocality: 'Los Angeles',
  addressRegion: 'CA',
  addressCountry: 'US',

  // External profiles. Adding the Google Business Profile + social URLs here is
  // one of the higher-impact quick wins — fill these in as they become available.
  // TODO: add real Google Business Profile, Facebook, Instagram, BBB URLs.
  sameAs: [
    'https://www.yelp.com/biz/sewer-pipe-pros-los-angeles',
    // 'https://www.google.com/maps/place/?q=place_id:YOUR_GOOGLE_PLACE_ID',
    // 'https://www.facebook.com/YOUR_PAGE',
    // 'https://www.instagram.com/YOUR_HANDLE',
    // 'https://www.bbb.org/us/ca/los-angeles/profile/...',
  ],
} as const;

/** Strip a trailing slash so `${siteUrl}${base}` never doubles up. */
export function businessId(siteUrl: string, base: string): string {
  return `${siteUrl}${base}/#business`;
}

/**
 * AggregateRating computed from the reviews we display.
 *
 * NOTE ON POLICY: these reviews are sourced from Yelp. Google's rich-results
 * policy expects review markup to reflect reviews collected by the business
 * itself. The compliant long game is to collect native Google reviews and let
 * Google's own systems surface the star rating. We emit AggregateRating here so
 * the star data exists, but prioritize gathering first-party reviews to back it.
 */
export function aggregateRating() {
  if (reviews.length === 0) return undefined;
  const total = reviews.reduce((sum, r) => sum + r.stars, 0);
  const avg = total / reviews.length;
  return {
    '@type': 'AggregateRating',
    ratingValue: Number(avg.toFixed(1)),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}

/** Individual Review nodes for the business schema. */
export function reviewSchema() {
  return reviews.map((r: Review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    datePublished: r.date,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.stars,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.body,
    ...(r.service ? { name: r.service } : {}),
  }));
}

/** OfferCatalog listing every service, so Google sees the full offering. */
export function offerCatalog(siteUrl: string, base: string) {
  return {
    '@type': 'OfferCatalog',
    name: 'Plumbing, Drain & Sewer Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        url: `${siteUrl}${base}/services/${s.slug}/`,
      },
    })),
  };
}

/** The California contractor license as a credential node. */
export function licenseCredential() {
  return {
    '@type': 'EducationalOccupationalCredential',
    name: `California Contractor License #${BUSINESS.licenseNumber}`,
    credentialCategory: 'License',
    educationalLevel: BUSINESS.licenseDetail,
  };
}

/** 24/7 opening hours node (open every day). */
export function alwaysOpenHours() {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  };
}

/** Region-level postal address (no street — service-area business). */
export function postalAddress() {
  return {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  };
}

/**
 * Topics the business is an authority on. Search + AI answer engines use
 * `knowsAbout` to understand entity expertise and decide what to recommend it
 * for. Keep every item to something we genuinely do.
 */
export const KNOWS_ABOUT = [
  'Sewer repair',
  'Sewer line repair',
  'Trenchless sewer line repair',
  'Sewer line replacement',
  'Plumbing repair',
  'Emergency plumbing',
  'Drain cleaning',
  'Drain and sewer cleaning',
  'Hydro-jetting',
  'Sewer video camera inspection',
  'Water heater installation and repair',
  'Tankless water heaters',
  'Copper and PEX repiping',
  'Gas line repair',
  'Slab leak detection and repair',
  'Residential plumbing',
  'Commercial plumbing',
] as const;

/**
 * Comma-separated head keywords for the `keywords` schema property. These are
 * the literal phrases people search — kept in sync with what we actually do.
 */
export const SEO_KEYWORDS = [
  'Los Angeles plumber',
  'plumbing repair Los Angeles',
  'sewer repair Los Angeles',
  'sewer line repair',
  'trenchless sewer repair',
  'drain cleaning Los Angeles',
  'hydro jetting',
  'sewer camera inspection',
  'water heater repair',
  'emergency plumber Los Angeles',
] as const;

/** Contact point node for the business. */
export function contactPoint() {
  return {
    '@type': 'ContactPoint',
    telephone: BUSINESS.telephone,
    contactType: 'customer service',
    areaServed: 'US-CA',
    availableLanguage: ['English'],
  };
}

/** Geo point for the business (central LA). */
export function geoCoordinates() {
  return {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  };
}

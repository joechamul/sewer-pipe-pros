// Canonical service area list. Edit here to add or rename a city / neighborhood.

export interface Area {
  slug: string;
  name: string;
  blurb?: string;
}

export const areas: Area[] = [
  { slug: 'los-angeles', name: 'Los Angeles', blurb: 'Citywide plumbing, drain, and sewer service across LA proper.' },
  { slug: 'downtown-la', name: 'Downtown LA', blurb: 'Commercial and residential plumbing in DTLA lofts, offices, and retail.' },
  { slug: 'hollywood', name: 'Hollywood', blurb: 'Historic Hollywood homes and multi-unit buildings — repipes and sewer.' },
  { slug: 'west-la', name: 'West LA', blurb: 'Full-service plumbing from Sawtelle to Westwood.' },
  { slug: 'culver-city', name: 'Culver City' },
  { slug: 'santa-monica', name: 'Santa Monica', blurb: 'Beach-adjacent plumbing — salt air, older mains, and tight access.' },
  { slug: 'venice', name: 'Venice' },
  { slug: 'beverly-hills', name: 'Beverly Hills' },
  { slug: 'brentwood', name: 'Brentwood' },
  { slug: 'westwood', name: 'Westwood' },
  { slug: 'pacific-palisades', name: 'Pacific Palisades' },
  { slug: 'mar-vista', name: 'Mar Vista' },
  { slug: 'inglewood', name: 'Inglewood' },
  { slug: 'el-segundo', name: 'El Segundo' },
  { slug: 'torrance', name: 'Torrance' },
  { slug: 'manhattan-beach', name: 'Manhattan Beach' },
  { slug: 'hermosa-beach', name: 'Hermosa Beach' },
  { slug: 'redondo-beach', name: 'Redondo Beach' },
  { slug: 'hawthorne', name: 'Hawthorne' },
  { slug: 'gardena', name: 'Gardena' },
  { slug: 'long-beach', name: 'Long Beach' },
  { slug: 'burbank', name: 'Burbank' },
  { slug: 'glendale', name: 'Glendale' },
  { slug: 'pasadena', name: 'Pasadena' },
  { slug: 'studio-city', name: 'Studio City' },
  { slug: 'sherman-oaks', name: 'Sherman Oaks' },
  { slug: 'van-nuys', name: 'Van Nuys' },
  { slug: 'encino', name: 'Encino' },
];

// Canonical service area list. Edit here to add or rename a city / neighborhood.
//
// `blurb`   — short hero line (1 sentence).
// `context` — a UNIQUE body paragraph describing the real plumbing character of
//             that area (housing age, pipe materials, terrain, access). This is
//             what keeps each area page from reading as thin/duplicate content
//             to Google, so keep every entry genuinely different.

export interface Area {
  slug: string;
  name: string;
  blurb?: string;
  context?: string;
}

export const areas: Area[] = [
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    blurb: 'Citywide plumbing, drain, and sewer service across LA proper.',
    context:
      "Los Angeles housing runs the gamut — 1910s Craftsman bungalows with clay sewer laterals, mid-century homes on slab, and new construction and ADUs going in citywide. That range is exactly why a camera inspection matters here: what's under a Highland Park lot looks nothing like what's under a South LA duplex. We work all of it.",
  },
  {
    slug: 'downtown-la',
    name: 'Downtown LA',
    blurb: 'Commercial and residential plumbing in DTLA lofts, offices, and retail.',
    context:
      "DTLA is dominated by older commercial stock and converted lofts, which means aging cast iron drains and vertical stacks that scale up and channel over decades. In occupied buildings, downtime is money, so we schedule around your tenants and operations, hydro-jet grease and scale out of the mains, and camera-verify before we call a line clean.",
  },
  {
    slug: 'hollywood',
    name: 'Hollywood',
    blurb: 'Historic Hollywood homes and multi-unit buildings: repipes and sewer.',
    context:
      "Hollywood's 1920s bungalows, courtyard apartments, and hillside homes were plumbed with clay laterals and galvanized supply lines that are now well past their service life. The mature ficus and palm roots along these streets are relentless on sewer joints, so recurring backups here usually trace back to root intrusion rather than a simple clog.",
  },
  {
    slug: 'west-la',
    name: 'West LA',
    blurb: 'Full-service plumbing from Sawtelle to Westwood.',
    context:
      "From Sawtelle's older single-family homes to the dense apartment blocks around Westwood, West LA is a mix of aging infrastructure and constant remodeling. We handle everything from a slow kitchen drain in a Palms fourplex to a full copper repipe on a Rancho Park home that's still running original galvanized pipe.",
  },
  {
    slug: 'culver-city',
    name: 'Culver City',
    context:
      "Culver City pairs charming pre-war homes with a wave of new studio-adjacent development, so we see both original clay sewer laterals and brand-new tie-ins. Older neighborhoods near downtown Culver frequently need trenchless sewer work, while the newer builds mostly call us for water heaters, fixtures, and gas line work.",
  },
  {
    slug: 'santa-monica',
    name: 'Santa Monica',
    blurb: 'Beach-adjacent plumbing: salt air, older mains, and tight access.',
    context:
      "Santa Monica's coastal air accelerates corrosion on galvanized and cast iron, and many North of Montana and Sunset Park homes still run their original mains. Tight lots and alley-access garages make excavation awkward here, which is exactly where trenchless sewer replacement and pipe bursting save the driveway and the landscaping.",
  },
  {
    slug: 'venice',
    name: 'Venice',
    context:
      "Venice is a challenge worth respecting: a high water table near the canals, tight walk-street lots, and a mix of century-old cottages and modern rebuilds. Older sewer laterals here sit in wet soil and shift over time, so bellies and root intrusion are common — we camera-locate the exact failure before recommending a spot repair versus a full liner.",
  },
  {
    slug: 'beverly-hills',
    name: 'Beverly Hills',
    context:
      "Beverly Hills estates come with long private sewer laterals running under mature landscaping, hardscape, and circular drives no owner wants torn up. That makes trenchless lining and pipe bursting the go-to here — we restore the line with two small access pits instead of trenching a manicured yard, and we camera-document the whole run.",
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    context:
      "Many Brentwood homes sit on hillsides and slab foundations, where slab leaks and long, deep sewer laterals are the recurring themes. Hillside runs mean more pipe between the house and the city main, so we locate precisely and quote the least-invasive fix rather than assuming a full dig.",
  },
  {
    slug: 'westwood',
    name: 'Westwood',
    context:
      "Westwood is condo, high-rise, and student-rental territory around UCLA, so our calls skew toward shared drain stacks, water heater changeouts, and fixture work in occupied units. In older buildings near the Village we hydro-jet cast iron mains that have scaled down over decades of grease and use.",
  },
  {
    slug: 'pacific-palisades',
    name: 'Pacific Palisades',
    context:
      "The Palisades mixes canyon and hillside homes with long utility runs and challenging access, and recent rebuilds sit right next to homes with decades-old plumbing. Grade and distance to the main matter a lot here, so we camera-inspect and locate before recommending trenchless repair versus replacement.",
  },
  {
    slug: 'mar-vista',
    name: 'Mar Vista',
    context:
      "Mar Vista is largely post-war single-family homes, many still on their original clay sewer laterals with cast iron drains inside. The neighborhood's mature street trees are a frequent culprit in root-choked lines, so hydro-jetting and trenchless replacement are among our most common jobs here.",
  },
  {
    slug: 'inglewood',
    name: 'Inglewood',
    context:
      "Inglewood's older housing stock and aging municipal infrastructure mean cast iron drains and clay laterals that are reaching the end of their life. With all the recent development around the stadium and transit lines, we also handle a steady stream of remodel rough-ins, repipes, and sewer upgrades.",
  },
  {
    slug: 'el-segundo',
    name: 'El Segundo',
    context:
      "El Segundo's tidy older homes sit on small lots with tight access, and much of the original plumbing is now decades old. We handle a lot of drain cleaning, water heater replacement, and repipe work here, plus commercial plumbing for the businesses near the aerospace and tech corridor.",
  },
  {
    slug: 'torrance',
    name: 'Torrance',
    context:
      "Torrance is dominated by 1950s and 60s tract homes on slab foundations, so slab leaks and under-slab drain failures are a familiar call. These homes commonly still have galvanized supply lines that restrict flow and rust through — a copper or PEX repipe is one of our staple jobs in the area.",
  },
  {
    slug: 'manhattan-beach',
    name: 'Manhattan Beach',
    context:
      "Manhattan Beach is dense, high-value, and constantly under renovation, with sandy soil and tight walk-street lots. Between teardown rebuilds and older beach cottages, we handle everything from full rough-ins to sewer laterals that have shifted in loose coastal soil.",
  },
  {
    slug: 'hermosa-beach',
    name: 'Hermosa Beach',
    context:
      "Hermosa's tightly packed lots and narrow walk streets make access the hardest part of any job, and the older cottages here often hide undersized or corroded drain lines. Trenchless methods and careful locating let us replace failing sewer laterals without tearing up shared walkways and neighbors' hardscape.",
  },
  {
    slug: 'redondo-beach',
    name: 'Redondo Beach',
    context:
      "Redondo spans everything from older single-family homes to dense townhome and condo developments, so we see both private sewer laterals and shared building drains. Coastal corrosion on older galvanized and cast iron is common, and repipes and water heater replacements are steady work here.",
  },
  {
    slug: 'hawthorne',
    name: 'Hawthorne',
    context:
      "Hawthorne is largely post-war tract housing with aging sewer laterals and cast iron drains that are now prone to scale, corrosion, and root intrusion. We handle a lot of drain clearing and trenchless sewer work here, along with repipes on homes still running original galvanized supply.",
  },
  {
    slug: 'gardena',
    name: 'Gardena',
    context:
      "Gardena's older single-family homes and small multi-unit properties commonly run cast iron drains that have channeled and scaled over the decades. Recurring kitchen and main-line clogs here often need hydro-jetting rather than snaking, and we camera-inspect to catch cast iron that's ready for replacement.",
  },
  {
    slug: 'long-beach',
    name: 'Long Beach',
    context:
      "Long Beach has some of the oldest and most varied housing in the region — historic Craftsman and Spanish homes with clay laterals, cast iron drains, and everything up to modern construction. Neighborhoods like Belmont Shore and Rose Park see heavy root intrusion, so sewer camera inspections and trenchless repair are core to what we do here.",
  },
  {
    slug: 'burbank',
    name: 'Burbank',
    context:
      "Burbank is mostly well-kept post-war homes plus the commercial and media district, so we split our time between residential repipes and drain work and commercial service that has to fit around business hours. Original galvanized and clay lines are still common in the older residential pockets.",
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    context:
      "Glendale ranges from hillside homes to dense apartment blocks and older flats, and the mature trees throughout the city are hard on aging clay sewer laterals. Hillside properties mean longer, deeper runs to the main, so we locate carefully and lean on trenchless methods to avoid tearing up terraced yards.",
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    context:
      "Pasadena has some of the oldest housing stock we work on — historic Craftsman, Victorian, and Spanish homes with original clay sewer laterals and mature, aggressive tree roots. These lines crack and offset at the joints over a century of use, so camera inspection and trenchless lining are the heart of our Pasadena work.",
  },
  {
    slug: 'studio-city',
    name: 'Studio City',
    context:
      "Studio City's hillside and canyon homes sit on slab and hillside foundations with long sewer runs and tricky access off narrow roads. Root intrusion from the heavy tree canopy and shifting hillside soil make bellies and offset joints common, so we camera-locate before recommending a repair.",
  },
  {
    slug: 'sherman-oaks',
    name: 'Sherman Oaks',
    context:
      "Sherman Oaks straddles the valley floor and the hills south of Ventura Boulevard, so we see both flat-lot tract homes and hillside properties with long laterals. Older homes here frequently still run clay sewer and galvanized supply, making repipes and trenchless sewer replacement regular jobs.",
  },
  {
    slug: 'van-nuys',
    name: 'Van Nuys',
    context:
      "Van Nuys is a mix of post-war tract housing and commercial corridors, with aging sewer laterals and mains that see a lot of root and scale buildup. We handle heavy drain cleaning and hydro-jetting here alongside repipes and water heater work for homes running original plumbing.",
  },
  {
    slug: 'encino',
    name: 'Encino',
    context:
      "Encino's larger lots and hillside estates south of the boulevard come with long private sewer laterals under mature landscaping and hardscape. Like Beverly Hills, that makes trenchless lining and pipe bursting the sensible choice — we renew the line without trenching the yard and document it on camera.",
  },
];

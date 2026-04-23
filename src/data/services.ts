// Canonical service list. To add or edit a service, modify this file.
// The [slug].astro route and all listings generate from this array.

export type ServiceCategory = 'sewer' | 'water' | 'pipe' | 'fixture';

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: string; // keys defined in src/components/Icon.astro
  shortDescription: string;
  longDescription: string; // used on the /services/[slug] page
}

export const categories: Array<{ id: ServiceCategory; label: string }> = [
  { id: 'sewer', label: 'Sewer & Drain' },
  { id: 'water', label: 'Water & Heaters' },
  { id: 'pipe', label: 'Piping & Gas' },
  { id: 'fixture', label: 'Fixtures & Appliances' },
];

export const services: Service[] = [
  // ---------------- Sewer & Drain ----------------
  {
    slug: 'trenchless-sewer-line-repair',
    title: 'Trenchless Sewer Line Repair',
    category: 'sewer',
    icon: 'pipe',
    shortDescription:
      'Replace broken sewer lines without digging up your yard, driveway, or landscaping.',
    longDescription: `Trenchless sewer repair lets us restore your main line with little to no excavation — ideal for homes with mature landscaping, hardscape, or driveways you don't want to tear up.

We use pipe bursting and cured-in-place pipe (CIPP) lining to replace or reline cracked, collapsed, or root-damaged sewer lines in a fraction of the time of traditional dig-and-replace methods.

### When trenchless makes sense
- Recurring sewer clogs caused by root intrusion or belly
- Cast iron, clay, or Orangeburg pipe reaching end of life
- Lines under concrete slabs, driveways, or mature yards
- Commercial properties where downtime is costly

### Our process
1. **Camera inspection** — we scope the entire line and locate the failure
2. **Scope and quote** — clear, upfront pricing with no surprises
3. **Access points** — typically two small pits instead of a full trench
4. **Liner install or pipe burst** — new pipe pulled through or cured in place
5. **Final inspection** — we re-scope and walk you through the footage`,
  },
  {
    slug: 'hydro-jetting',
    title: 'Hydro-Jetting',
    category: 'sewer',
    icon: 'spray',
    shortDescription:
      'High-pressure water jetting scours grease, roots, and scale out of drain and sewer lines.',
    longDescription: `Hydro-jetting blasts drain and sewer lines clean with 3,500–4,000 PSI of water — safer than chemical drain cleaners and more thorough than a standard snake.

### Ideal for
- Grease-loaded kitchen lines
- Restaurant and commercial drains
- Root intrusion in sewer laterals
- Scale buildup in cast iron pipes
- Recurring slow drains that snake out but keep clogging

### What to expect
We start with a camera inspection to confirm the pipe is suitable for jetting, then match the nozzle and pressure to the line material. After the job, we re-scope to prove the pipe is clean — not just flowing.`,
  },
  {
    slug: 'sewer-video-camera-inspection',
    title: 'Sewer Video Camera Inspection',
    category: 'sewer',
    icon: 'camera',
    shortDescription:
      'See exactly what\'s wrong inside your sewer line with HD video and pinpoint locating.',
    longDescription: `A sewer camera inspection is the only way to know with certainty what's happening inside your pipes. We feed a self-leveling HD camera through the line and record the entire run.

### When to get one
- Before buying a home (escrow inspections)
- Repeat clogs or backups
- After major tree work near the main line
- Sewer odors with no obvious source
- Planning a remodel or major landscaping

### You get
- HD video of the full line
- Distance markers so we can locate problem areas from the surface
- A written report with pipe material, condition, and recommended next steps`,
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning & Clearing',
    category: 'sewer',
    icon: 'drain',
    shortDescription:
      'Fast, no-mess clearing of slow or stopped-up kitchen, bathroom, and laundry drains.',
    longDescription: `Sinks, tubs, showers, floor drains, and laundry lines clog up — usually from hair, grease, soap scum, or foreign objects. We clear them the right way: mechanically, with the correct cable and head for the line.

### Why not chemical drain cleaner?
Over-the-counter drain chemicals corrode old pipes, damage finishes, and often only clear a small channel in the clog that re-closes within days. A proper mechanical cleaning removes the blockage completely.

### We clear
- Kitchen sinks and disposals
- Bathroom sinks, tubs, and showers
- Laundry standpipes
- Floor drains and area drains
- Roof vents and combination lines`,
  },
  {
    slug: 'sewer-line-repair',
    title: 'Sewer Line Repair',
    category: 'sewer',
    icon: 'tools',
    shortDescription:
      'Locate and repair breaks, bellies, and root damage in your main sewer line.',
    longDescription: `Whether you need a spot repair, a full replacement, or a trenchless liner, we diagnose sewer line failures from root cause — not just the symptom.

### Common failures
- Roots wedging joints apart and invading the line
- Belly or sag causing standing water and recurring clogs
- Collapsed clay or Orangeburg pipe sections
- Off-grade fittings failing at the city tap
- Corroded cast iron with scale and channeling

We'll walk you through the camera footage, explain what we see, and quote options from least to most invasive.`,
  },
  {
    slug: 'septic-tank-repair',
    title: 'Septic Tank Repair Service',
    category: 'sewer',
    icon: 'tank',
    shortDescription:
      'Diagnosis and repair for septic systems that are slow, backing up, or failing inspection.',
    longDescription: `If your system isn't on city sewer, a failing septic tank is a serious problem — slow drains, odors, or pooling in the yard all point to trouble.

We diagnose and repair:
- Inlet and outlet baffle failures
- Cracked tanks and lids
- Failed distribution boxes (D-boxes)
- Blocked or collapsed leach lines
- Risers and access adjustments

We work with licensed pumpers and inspectors and will coordinate the full repair from start to finish.`,
  },

  // ---------------- Water & Heaters ----------------
  {
    slug: 'water-heater-installation-repair',
    title: 'Water Heater Installation & Repair',
    category: 'water',
    icon: 'flame',
    shortDescription:
      'Same-day water heater repair or code-compliant tank replacement — gas or electric.',
    longDescription: `No hot water, rusty water, or a leaking tank? We service every major brand and carry common replacement parts in the truck.

### What we do
- Leak and corrosion diagnosis
- Thermocouple, gas valve, and heating element replacement
- Anode rod replacement to extend tank life
- T&P valve and expansion tank service
- Full tank replacement — gas or electric
- Seismic strapping and code-compliant install

All installs include proper venting, earthquake strapping, and pan/drain where required by LADBS.`,
  },
  {
    slug: 'tankless-water-heater-installation',
    title: 'Tankless Hot Water Heater Installation',
    category: 'water',
    icon: 'zap',
    shortDescription:
      'Endless hot water, more floor space, lower gas bills — properly sized and vented.',
    longDescription: `A tankless water heater heats water on demand — you get endless hot water, reclaim the footprint of an old tank, and typically cut water-heating gas usage 20–40%.

### We handle the full install
- Load calc and sizing based on your fixtures and flow rates
- Gas line upgrade if needed (tankless units need more BTU input)
- Dedicated venting — typically concentric PVC/polypropylene
- Recirculation option for instant hot at distant fixtures
- Descaling setup and annual maintenance plan

We'll walk you through brands and sizes and recommend what actually fits your home's demand.`,
  },
  {
    slug: 'noritz-tankless-water-heaters',
    title: 'Noritz Tankless Water Heaters',
    category: 'water',
    icon: 'zap',
    shortDescription:
      'Authorized Noritz installation, service, and warranty work for residential and commercial.',
    longDescription: `Noritz tankless systems are a workhorse for California homes — high efficiency, long warranties, and excellent parts availability.

### Why Noritz
- Efficiency up to 0.96 UEF
- 12–25 year heat exchanger warranty on residential models
- Built for California water conditions
- Indoor and outdoor models to fit any install

We install Noritz direct-vent and outdoor units, handle recirculation pumps and EZ-Series bundles, and perform annual descaling service.`,
  },
  {
    slug: 'water-lines-pipe-work',
    title: 'Water Lines & Pipe Work',
    category: 'water',
    icon: 'pipe',
    shortDescription:
      'New water service, main line replacements, and slab leak repair in copper or PEX.',
    longDescription: `Your water main is the lifeline of the property. We replace deteriorating galvanized and poly lines, install new services, and locate and repair slab leaks.

### Projects we take on
- Full main water service replacement (curb to house)
- Repipes with copper or PEX-A
- Slab leak detection and pinpoint repair
- Pressure regulator replacement
- Hose bibb, irrigation tie-ins, and yard branches
- Emergency shutoff and ball valve upgrades`,
  },
  {
    slug: 'sump-pump-installation',
    title: 'Sump Pump Installation',
    category: 'water',
    icon: 'drain',
    shortDescription:
      'Basement, crawlspace, and yard sump pump installs with battery backup options.',
    longDescription: `If you're dealing with standing water in a crawlspace, basement, or low yard area, the right sump pump saves you from mold, rot, and structural damage.

### We install
- Primary sump pumps (submersible and pedestal)
- Battery backup or water-powered backup pumps
- Check valves, discharge lines, and pit liners
- Float switch and alarm monitoring
- Exterior yard dry wells and French drain tie-ins`,
  },
  {
    slug: 'sprinkler-system-installation-repair',
    title: 'Sprinkler System Installation & Repair',
    category: 'water',
    icon: 'sprinkler',
    shortDescription:
      'Leaking valves, broken heads, dead zones, or a whole new system — we handle irrigation plumbing.',
    longDescription: `We work on the plumbing side of irrigation — PVC, copper, backflow preventers, valves, and controller wiring to the valves. For design-heavy landscape builds we partner with licensed landscape contractors.

### Common fixes
- Leaking valve manifolds
- Broken heads and cracked laterals
- Pressure regulator and backflow assembly replacement
- Anti-siphon valve upgrades
- New zone installation or expansion
- Winterization and drought retrofits`,
  },

  // ---------------- Piping & Gas ----------------
  {
    slug: 'copper-repiping',
    title: 'Copper Piping, Repiping & Installation',
    category: 'pipe',
    icon: 'pipe',
    shortDescription:
      'Full-home copper repipes and new copper installations — clean routing, soldered joints, code-compliant.',
    longDescription: `Old galvanized and polybutylene pipes corrode, restrict flow, and eventually leak. A whole-home copper repipe restores pressure, improves water quality, and removes a major source of insurance claims.

### What's included
- Full walkthrough and routing plan with minimal drywall impact
- Type L copper throughout
- Soldered joints or pressed fittings as appropriate
- Shutoff valves at every fixture
- Pressure test and drywall patch coordination
- LADBS rough-in and final inspections`,
  },
  {
    slug: 'pex-pipe-installation',
    title: 'PEX Pipe Installation',
    category: 'pipe',
    icon: 'pipe',
    shortDescription:
      'Flexible, freeze-resistant PEX-A installs for repipes, additions, and new construction.',
    longDescription: `PEX-A is our go-to for remodels and repipes where we need flexibility, fewer joints, and faster installs. It won't scale like copper, tolerates freeze expansion, and is quieter.

### Where PEX shines
- Whole-home repipes routed through attic or slab
- Additions and ADU rough-ins
- Manifold (home-run) distribution systems
- Recirculation loops
- Radiant floor heating

We use expansion-style fittings (Uponor ProPEX) for long-term, leak-resistant connections.`,
  },
  {
    slug: 'pvc-piping',
    title: 'PVC Piping for Plumbing',
    category: 'pipe',
    icon: 'pipe',
    shortDescription:
      'Schedule 40 DWV installs and repairs for drain, waste, and vent systems.',
    longDescription: `PVC is the modern standard for drain, waste, and vent (DWV) systems. We install new DWV rough-ins, replace cast iron sections, and repair broken underslab lines.

### Projects
- Cast iron replacement with PVC DWV
- Vent stack additions and repairs
- Underslab DWV repair
- New construction and addition rough-ins
- Floor drain and area drain piping`,
  },
  {
    slug: 'pipe-bursting',
    title: 'Pipe Bursting',
    category: 'pipe',
    icon: 'hammer',
    shortDescription:
      'Replace sewer or water lines in place — no full trench, no yard destruction.',
    longDescription: `Pipe bursting pulls a new HDPE or PE pipe through the path of the old one, fracturing the original pipe outward as it goes. The result: a brand-new line with only two small access pits.

### Why choose pipe bursting over open-cut?
- No full-length trench through yards or driveways
- Typically finished in a single day
- Upsizes the pipe (go from 4\" to 6\" if needed)
- Far less restoration cost afterward`,
  },
  {
    slug: 'gas-line-repair',
    title: 'Gas Line Repair',
    category: 'pipe',
    icon: 'flame',
    shortDescription:
      'Licensed gas line repair, extensions, and leak diagnosis for homes and businesses.',
    longDescription: `Gas leaks are a safety issue — we respond fast, perform a proper leak search, and repair or replace the affected line with black iron or CSST.

### Services
- Pressure testing and leak isolation
- Line repair and full service replacement
- New line runs for ranges, dryers, water heaters, fire pits, BBQs
- CSST (corrugated stainless) bonding and compliance
- SoCalGas coordination for shutoffs and re-lights

All gas work is performed by licensed techs under the C36 classification.`,
  },

  // ---------------- Fixtures & Appliances ----------------
  {
    slug: 'toilet-repair-service',
    title: 'Toilet Repair & Service',
    category: 'fixture',
    icon: 'toilet',
    shortDescription:
      'Leaks, running, rocking, or weak flush — we repair or replace any toilet, any brand.',
    longDescription: `A constantly running or leaking toilet wastes water and can damage your floor and subfloor. We diagnose and fix the issue — not just replace the flapper and hope.

### Common fixes
- Running toilet and flapper/fill valve replacement
- Leaking wax ring and re-set on a new flange
- Loose or rocking toilet — we check the flange height and floor condition
- Cracked tank or bowl — replacement recommendations
- Elongated, ADA-height, and dual-flush installs`,
  },
  {
    slug: 'shower-bathtub-repair',
    title: 'Shower & Bathtub Repair',
    category: 'fixture',
    icon: 'shower',
    shortDescription:
      'Valve replacement, clog clearing, leak diagnosis, and fixture upgrades.',
    longDescription: `We service shower and tub plumbing — valves, diverters, drains, and supply lines — for every major brand (Moen, Delta, Kohler, Grohe, Hansgrohe).

### Services
- Drippy or frozen shower/tub valve rebuilds
- Full shower valve replacement behind the wall
- Tub spout, shower head, and trim upgrades
- Hair clog removal and drain resurfacing
- Leak isolation (valve vs. pan vs. drain)
- Pressure balance and thermostatic valve upgrades`,
  },
  {
    slug: 'garbage-disposal-repair-installation',
    title: 'Garbage Disposal Repair & Installation',
    category: 'fixture',
    icon: 'cog',
    shortDescription:
      'Jammed, leaking, or dead disposal? We repair or replace with the right size unit.',
    longDescription: `A garbage disposal should last 8–12 years. When yours goes, we'll size the replacement to your household and install it right — no leaks, no hums.

### Services
- Disposal unjamming and reset
- Leak diagnosis (top flange, side flange, bottom housing)
- Full unit replacement — 1/2, 3/4, or 1 HP
- Dishwasher tie-in and air gap work
- Hardwired or plug-in conversion`,
  },
  {
    slug: 'dishwasher-kitchen-water-lines',
    title: 'Dishwashers & Kitchen Water Lines',
    category: 'fixture',
    icon: 'kitchen',
    shortDescription:
      'Dishwasher install and removal, hot/cold supply lines, shutoffs, and ice maker lines.',
    longDescription: `We handle the plumbing side of kitchen appliances — supply lines, shutoff valves, drain tie-ins, and air gaps.

### Scope
- Dishwasher install and haul-away
- Hot/cold supply line upgrades (SharkBite, braided stainless)
- Angle stop and isolation valve replacement
- Ice maker and refrigerator water line runs
- Pot filler installation
- Under-sink reverse osmosis tie-ins`,
  },
  {
    slug: 'residential-plumbing',
    title: 'Residential Plumbing',
    category: 'fixture',
    icon: 'home',
    shortDescription:
      'Full-service plumbing for single-family homes, condos, townhomes, and ADUs.',
    longDescription: `Whether you need a quick fix or a full remodel rough-in, we handle residential plumbing from top to bottom — fixtures, water, drains, gas, water heaters, and sewer.

### How we work with homeowners
- Upfront flat-rate pricing before work starts
- Clean, respectful technicians — shoe covers, drop cloths, we clean up
- Proper permits pulled for work that requires them
- Warranty on parts and labor
- Single point of contact from quote to completion`,
  },
  {
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    category: 'fixture',
    icon: 'building',
    shortDescription:
      'Restaurants, offices, retail, and industrial plumbing with minimal downtime.',
    longDescription: `Commercial plumbing has different stakes — downtime costs revenue, code compliance is stricter, and the work has to fit around your operations.

### Commercial specialties
- Restaurant grease lines and hydro-jetting maintenance plans
- Backflow preventer certification and repair
- Water heater and boiler service
- Tenant improvement rough-ins
- After-hours emergency response
- Service agreements with scheduled maintenance`,
  },
  {
    slug: 'plumbing-for-property-managers',
    title: 'Plumbing for Property Managers',
    category: 'fixture',
    icon: 'key',
    shortDescription:
      'One call, one reliable crew — for every unit and every property in your portfolio.',
    longDescription: `Managing multiple properties means you can't chase down a different plumber for every call. We work with property managers across LA to handle tenant calls, turnovers, and capital improvements.

### What you get
- Dedicated point of contact
- Consolidated invoicing by property or portfolio
- Direct-to-tenant scheduling with status updates
- Turnover punch lists and pre-lease inspections
- Capital planning for aging systems (mains, sewer laterals, water heaters)
- Preferred response windows on emergencies`,
  },
];

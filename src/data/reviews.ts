// ─── Yelp reviews shown on the homepage ─────────────────────────────────────
// Source: https://www.yelp.com/biz/sewer-pipe-pros-los-angeles
// Keep names to "First name + last initial" (Yelp's convention).
// Sorted newest-first below — the Reviews component features the most recent
// one automatically (by `date`) and shows the rest in the grid.

export interface Review {
  name: string;
  location: string;
  stars: 1 | 2 | 3 | 4 | 5;
  date: string;
  service: string;
  body: string;
}

export const reviews: Review[] = [
  {
    name: 'A H.',
    location: 'Santa Monica, CA',
    stars: 5,
    date: '2026-04-07',
    service: 'Sewer Drain Cleaning',
    body: "This firm is the real deal — professional and committed to providing a valuable service. The crew showed up on time and really worked hard to resolve our completely clogged sewer pipe overwhelmed by my ficus tree roots. There was no upsell, just honest and earnest attempts to provide highest level of service. I was looking at a possible line replacement; they were able to spare me of that very costly effort. I will be using them for install of a two-way clean out and for routine hydrojetting service. I would recommend them to anyone in need of sewer line servicing.",
  },
  {
    name: 'Hao T.',
    location: 'Marble Estates, Torrance, CA',
    stars: 5,
    date: '2026-04-03',
    service: 'Hydro-Jetting',
    body: "My kitchen sewer pipe was clogged up and required hydro jetting work. After making an inquiry online, I received several offers from various plumbing companies. Upon reviewing all proposals and Yelp reviews, I decided to go with Sewer Pipe Pros. Schedule with the owner Robert was done promptly and two technicians from Sewer Pipe Pros showed up the next day and completed the work quickly.\n\nI am very happy with Sewer Pipe Pros. They performed the work in a professional manner and their fee is reasonable!",
  },
  {
    name: 'Iliana R.',
    location: 'Inglewood, CA',
    stars: 5,
    date: '2026-03-19',
    service: 'Emergency Drain Cleaning',
    body: "We just bought our house in Inglewood, CA last year and had a plumbing emergency in the fall. We had guests at the time and called the first emergency plumbing service that took our call. They spent hours at our home and charged what we felt were extremely high rates to clear a clog. When we had another line blockage issue in March, I asked our realtor for help finding a good plumber. She recommended Sewer Pipe Pros. We called and Roberto sent workers to the house right away. They quickly flushed the line and then pressure washed the side of our home and yard to be sure we had no waste residue near our yard or our neighbor's yard. They charged us a much lower rate than the emergency plumbers we had to use in the past while showing great professionalism, speed and attention to detail. We are hiring Sewer Pipe Pros to give us a quote for repairs of the underlying issue and are confident they will do great work at a fair price. I highly recommend Sewer Pipe Pros to anyone in need of a plumber. They do excellent work at a fair price.",
  },
  {
    name: 'Alondra F.',
    location: 'South Los Angeles, CA',
    stars: 5,
    date: '2026-03-04',
    service: 'Trenchless Pipe Lining',
    body: "We hired Sewer Pipe Pros to fulfill an S-permit for our ADUs and they were very professional and fast with all the work that needed to be done. We had some damage to our pipes and they were able to fix it very quickly with a pipe lining. Their representative Robert was very detailed and was always available to answer any of our concerns. If you're looking for a licensed plumber, this company is a great choice.",
  },
  {
    name: 'Daniel L.',
    location: 'San Fernando Valley, CA',
    stars: 5,
    date: '2026-02-27',
    service: 'Sewer Inspection & Repair',
    body: "Robert was great to work with. He did the sewer scope during our home inspection and found a collapsed section of pipe that could have turned into a serious problem. He clearly explained what was going on and walked us through the repair options without pressure.\n\nHe and his crew handled the repair professionally and kept me updated the entire time with texts, photos, and video footage of the work being done. Communication was excellent, and everything was completed as discussed. Would recommend 100%!!\n\nAs first-time homeowners, that kind of transparency and professionalism gave us a lot of peace of mind. I'd definitely recommend Robert if you need a sewer inspection or repair.",
  },
];

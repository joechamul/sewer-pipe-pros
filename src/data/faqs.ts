// Homepage FAQ content. These target high-intent, question-shaped searches
// ("how much does trenchless sewer repair cost in LA", "signs of a broken sewer
// line") and feed both the on-page FAQ section and FAQPage structured data.
//
// Keep answers accurate to how the business actually operates. Where exact
// pricing depends on the job, we describe the cost drivers and point to a free
// upfront quote rather than inventing a dollar figure.

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How much does trenchless sewer line repair cost in Los Angeles?',
    answer:
      "Trenchless sewer repair cost depends on the length of the line, how deep it sits, the pipe diameter, and whether we line the pipe (CIPP) or burst and replace it. Because there is little to no digging, you usually save significantly on landscaping, concrete, and driveway restoration compared with traditional dig-and-replace. We always scope the line with a camera first and give you a clear, upfront quote before any work starts, no hourly surprises.",
  },
  {
    question: 'Do you offer 24/7 emergency plumbing in Los Angeles?',
    answer:
      "Yes. We answer the phone around the clock, every day, for burst pipes, sewer backups, gas smells, water heater failures, and other plumbing emergencies across Greater Los Angeles. Call (310) 780-0362 and we'll dispatch a licensed technician, often the same day.",
  },
  {
    question: 'What areas of Los Angeles do you serve?',
    answer:
      "We serve Greater Los Angeles, including Downtown LA, Hollywood, West LA, Santa Monica, Culver City, Venice, Beverly Hills, Brentwood, Westwood, the South Bay (Torrance, El Segundo, the beach cities, Inglewood, Gardena, Hawthorne), Long Beach, and the eastern and Valley cities of Pasadena, Glendale, Burbank, Studio City, Sherman Oaks, Van Nuys, and Encino.",
  },
  {
    question: 'Should I get a sewer camera inspection before buying a home in LA?',
    answer:
      "Absolutely, especially with LA's older housing stock. Many homes still have clay, cast iron, or Orangeburg sewer laterals that crack, corrode, or fill with tree roots. A camera inspection during escrow shows you the true condition of the line so a collapsed or root-choked pipe doesn't become a five-figure surprise after closing. We provide HD video and a written report you can use in negotiations.",
  },
  {
    question: 'What are the signs of a broken or failing sewer line?',
    answer:
      "Common warning signs include multiple slow or gurgling drains at once, sewage odors inside or in the yard, backups when you run water or flush, unusually lush or sunken patches in the lawn, and recurring clogs that keep coming back after snaking. Any of these is worth a camera inspection to catch the problem before it becomes a full backup.",
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      "Yes. Sewer Pipe Pros Inc. is a licensed and insured California contractor, license #1126184, holding both the C36 (plumbing) and C42 (sanitation systems) classifications. All work is performed by licensed technicians and permitted through LADBS where required.",
  },
  {
    question: 'Do I need a permit for sewer replacement or a repipe in Los Angeles?',
    answer:
      "Most sewer replacements, water main replacements, water heater changeouts, gas line work, and whole-home repipes require a permit and inspection through LADBS (or your city's building department). We pull the proper permits and coordinate inspections as part of the job so the work is done to code and documented for your records.",
  },
  {
    question: 'How soon can you come out?',
    answer:
      "We offer same-day availability in most of the LA area and respond immediately to true emergencies. Call (310) 780-0362 or request service online and we'll confirm the soonest window, often the same day.",
  },
];

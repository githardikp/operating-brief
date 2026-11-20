/** Replace this string with the Cal.com or Calendly URL. Every "Work with me" link reads it. */
export const TODO_BOOKING_URL = "TODO_BOOKING_URL";

export const site = {
  name: "Hardik Pandey",
  role: "Business consultant",
  url: "https://hardikpandey.com",
  email: "hardikp1351@gmail.com",
  phoneTel: "+91-9028408407",
  phoneDisplay: "+91 90284 08407",
  location: "Bangalore, India",
  locality: "Bangalore",
  country: "IN",
  linkedin: "https://www.linkedin.com/in/hardik-pandey-622621213/",
  x: "https://x.com/lifeseemsaloha",
  xHandle: "@lifeseemsaloha",
  bookingUrl: TODO_BOOKING_URL,
  title: "Hardik Pandey — Business Consultant",
  description:
    "Hardik Pandey is a business consultant in Bangalore. He works with founders and leadership teams on strategy, go-to-market, sales and brand, so the whole business moves in one direction.",
  ogTitle: "Hardik Pandey — Business Consultant",
  ogDescription: "One advisor for the whole of your business.",
  twitterCreator: "@lifeseemsaloha",
  jobTitle: "Business Consultant",
  alumniOf: "RCOEM Nagpur",
  signature: "Hardik P.",
  signatureLine: "Working with teams in India and abroad",
  bookingLabel: "Work with me",
  writeLabel: "Write to me",
  colophon: "© {year} Hardik Pandey · Business consultant · Bangalore, India · Set in EB Garamond.",
} as const;

export const nav = [
  { href: "#practice", numeral: "ii.", label: "Practice" },
  { href: "#record", numeral: "iii.", label: "Record" },
  { href: "#work", numeral: "iv.", label: "Work" },
  { href: "#contact", numeral: "v.", label: "Contact" },
] as const;

export const hero = {
  folio: "Folio I",
  place: "Bangalore, India",
  headingBefore: "One advisor for the",
  headingEm: "whole",
  headingAfter: "of your business.",
  sub: "I work with founders and leadership teams on strategy, go-to-market, sales and the brand that carries it, so the whole business moves in one direction.",
} as const;

export const figures = [
  {
    id: "1",
    fig: "Fig. 1",
    numeral: "I.",
    caption: "Of direction",
    note: "set the heading before the pace",
    stagger: 0,
  },
  {
    id: "2",
    fig: "Fig. 2",
    numeral: "II.",
    caption: "Of the market",
    note: "where the right customers are",
    stagger: 1,
  },
  {
    id: "3",
    fig: "Fig. 3",
    numeral: "III.",
    caption: "Of the deal",
    note: "weigh value before price",
    stagger: 2,
  },
  {
    id: "4",
    fig: "Fig. 4",
    numeral: "IV.",
    caption: "Of reputation",
    note: "seen the same way everywhere",
    stagger: 3,
  },
] as const;

export const practice = {
  folio: "Folio II · The practice",
  headingBefore: "One practice, the",
  headingEm: "whole",
  headingAfter: "business.",
  intro:
    "Growth problems rarely sit in one department. I look at the strategy, the market, the sales conversation and the brand together, then help your team act on the few things that matter.",
  rows: [
    {
      numeral: "i.",
      question: "Where are we going?",
      answer: "Direction, priorities, and what to stop doing to get there.",
      figure: "Fig. 1",
      href: "#fig-1",
    },
    {
      numeral: "ii.",
      question: "Who are we for?",
      answer: "The right customers, how to reach them, and in what order.",
      figure: "Fig. 2",
      href: "#fig-2",
    },
    {
      numeral: "iii.",
      question: "How do we win the room?",
      answer: "Turning conversations with decision-makers into revenue.",
      figure: "Fig. 3",
      href: "#fig-3",
    },
    {
      numeral: "iv.",
      question: "How are we seen?",
      answer: "A brand that tells the same story the strategy does.",
      figure: "Fig. 4",
      href: "#fig-4",
    },
  ],
} as const;

export const record = {
  folio: "Folio III · The record",
  heading: "Where I've done the work.",
  more: "Read the full record",
} as const;

export const work = {
  folio: "Folio IV · Selected work",
  heading: "Selected work.",
  intro: "Brand and go-to-market studies for fictional companies, and products I have built and shipped.",
  groups: [
    { id: "brand-gtm" as const, title: "Brand & GTM work" },
    { id: "products" as const, title: "Products I've built" },
  ],
  view: "View the project",
  hiddenTags: ["Brand & GTM", "Product"] as const,
} as const;

export const contact = {
  folio: "Folio V · Correspondence",
  headingBefore: "Bring me the",
  headingEm: "whole",
  headingAfter: "problem.",
  sub: "Tell me where the business is stuck. If I can help, we'll set up a 30-minute call.",
  nextLabel: "What happens next",
  steps: [
    {
      title: "Diagnose",
      body: "A focused conversation to understand the business, the market and where it is stuck.",
    },
    {
      title: "Plan",
      body: "A clear plan with priorities, not a slide deck that sits in a drawer.",
    },
    {
      title: "Work alongside",
      body: "I work with your team to put it into motion, and adjust as results come in.",
    },
  ],
} as const;

export const notFoundCopy = {
  heading: "This page is not in the notebook.",
  body: "The page you asked for is not here. If you were hoping to start a conversation, write to me.",
  home: "Back to the first page",
} as const;

export const resumeCopy = {
  title: "Record",
  download: "Download PDF",
} as const;

export const plateNumerals = ["I", "II", "III", "IV", "V"] as const;

export type ProjectGroup = "brand-gtm" | "products";

export type Project = {
  name: string;
  outcome: string;
  url: string;
  group: ProjectGroup;
  label?: "Concept project";
  whatItShows: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Saanjh",
    group: "brand-gtm",
    label: "Concept project",
    outcome:
      "A complete brand and D2C website for a fictional Kannauj attar house, built to show how a premium consumer brand can use digital touchpoints from first visit through to a discovery-set purchase.",
    whatItShows:
      "Brand positioning, offer design (four scents plus a discovery set), a scent-finder quiz, and a conversion path for a heritage consumer brand.",
    tags: ["Brand & GTM", "Consumer"],
    url: "https://saanjh-nu.vercel.app/",
  },
  {
    name: "Kizashi",
    group: "brand-gtm",
    label: "Concept project",
    outcome:
      "A brand and product website for a fictional Japanese-philosophy stationery house, built around a 90-day Kotodama journaling practice and three physical objects.",
    whatItShows:
      "Brand positioning rooted in Kotodama, a three-object offer (Witness Book, Kotodama Journal, Release Cards) that maps onto a morning-to-evening ritual, and a waitlist-led site for a premium consumer brand.",
    tags: ["Brand & GTM", "Consumer"],
    url: "https://bykizashi.vercel.app/",
  },
  {
    name: "Isotope",
    group: "brand-gtm",
    label: "Concept project",
    outcome:
      "A brand and product-led marketing site for a fictional B2B AI startup, built to show how a technical company can explain a complex offer and convert a specialist buyer through an interactive demo.",
    whatItShows:
      "Category and messaging for an interpretability product, a self-serve demo, and a GTM narrative from problem to trial. Every customer and metric on the site is fictional.",
    tags: ["Brand & GTM", "B2B"],
    url: "https://isotope-nu.vercel.app/",
  },
  {
    name: "PM Path",
    group: "products",
    outcome:
      "A free 14-week product-management prep app I built and shipped: daily lessons and exercises, ten practice tools, interview practice, and an optional Gemini integration for live prompt work. No account required; it works offline.",
    whatItShows: "A clear user problem (scattered PM prep), a complete product, and the ability to ship, not only advise.",
    tags: ["Product"],
    url: "https://pm-path.vercel.app/",
  },
  {
    name: "Axon Map",
    group: "products",
    outcome:
      "A visual thinking and note-taking web app I built and shipped: a canvas for capturing messy ideas, shaping them into an outline, and exporting a clean draft, with accounts, cloud sync and backlinks.",
    whatItShows: "Product thinking and end-to-end execution on a tool people can sign into and use.",
    tags: ["Product"],
    url: "https://www.axonmap.tech/",
  },
];

export type ExperienceEntry = {
  id: string;
  dates: string;
  org: string;
  role: string;
  detail?: string;
  bullets?: readonly string[];
};

export const experience: readonly ExperienceEntry[] = [
  {
    id: "stealth",
    dates: "Apr 2025 – Oct 2026",
    org: "Stealth startup",
    role: "Founder's Office",
    bullets: [
      "Ran outbound to CXOs and leadership teams through cold calling, opening senior conversations and moving them to meetings.",
      "Built consultant onboarding from a blank page, including training with internal trainers. Onboarded 40+ consultants, and sourced and interviewed 20+ of them through cold outreach, referrals and direct messages.",
      "Defined the offer after reading four competitors: three PRDs, the implementation plans for the core flows, and an MVP of 20+ features, including the platform's unique selling proposition.",
      "Kept the investor story steady through a close, with consistent progress updates. Created and revised three pitch decks, pitched two investors directly, and contributed to the close of the round.",
      "Launched on Google Play and the App Store, including compliance and financial setup. Resolved 50+ complaints, took feedback from 10+ users, and kept contractors and vendors on schedule.",
      "Set up AI workflows with design and development partners, and wrote social scripts with marketing and UGC creators.",
    ],
  },
  {
    id: "accenture",
    dates: "2024 – 2025",
    org: "Accenture",
    role: "Cybersecurity Associate",
    bullets: [
      "Security analysis on production code for a Global 100 client. Reverse engineered applications to flag malware, on a program meant to protect a user base in the millions.",
      "Application security across dynamic and static testing, the OWASP Top 10, Burp Suite and OWASP ZAP: risk-aware, enterprise-grade delivery.",
    ],
  },
  {
    id: "rcoem",
    dates: "2020 – 2024",
    org: "RCOEM Nagpur",
    role: "B.Tech, Information Technology",
    detail: "Shri Ramdeobaba College of Engineering & Management, Nagpur.",
  },
];

import type { Metadata, Viewport } from "next";
import { Caveat, EB_Garamond } from "next/font/google";
import { Motion } from "@/components/Motion";
import { site } from "@/content/site";
import "./globals.css";

const eb = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-eb",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-caveat",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Hardik Pandey",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.ogTitle,
    description: site.ogDescription,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    creator: site.twitterCreator,
    title: site.ogTitle,
    description: site.ogDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#F1E6CF",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.jobTitle,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressCountry: site.country,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: site.alumniOf,
  },
  sameAs: [site.x, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${eb.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Motion />
        {children}
      </body>
    </html>
  );
}

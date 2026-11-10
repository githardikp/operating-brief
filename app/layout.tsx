import type { Metadata, Viewport } from "next";
import { Besley, Commissioner } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const serif = Besley({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Commissioner({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const title = "Hardik Pandey — Founder's Office, GTM";
const description =
  "Hardik Pandey works in the Founder's Office at Finifi, on GTM. He sells to CXOs and finance leaders, from cold outreach to the close.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description:
      "Founder's Office, GTM at Finifi. Enterprise sales to CXOs and finance leaders, and notes on the work.",
    type: "profile",
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#ECEEEF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: site.url,
              email: site.email,
              telephone: site.phoneTel,
              jobTitle: "Founder's Office, GTM",
              worksFor: {
                "@type": "Organization",
                name: "Finifi",
                url: site.finifi,
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              sameAs: [site.linkedin, site.x],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

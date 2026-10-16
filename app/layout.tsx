import type { Metadata, Viewport } from "next";
import { Besley, Commissioner } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Hardik Pandey — Founder's Office, Chief of Staff, Strategy",
  description:
    "Hardik Pandey is a Founder's Office operator in Bangalore, open to Founder's Office, Chief of Staff, and strategy consulting roles.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Hardik Pandey — Founder's Office, Chief of Staff, Strategy",
    description:
      "Operator for product, capital, people, and launch. Open to Founder's Office, Chief of Staff, and strategy consulting.",
    type: "profile",
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
              name: "Hardik Pandey",
              email: "hardikp1351@gmail.com",
              telephone: "+91-9028408407",
              jobTitle: "Founder's Office",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              sameAs: ["https://www.linkedin.com/in/hardik-pandey-622621213"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

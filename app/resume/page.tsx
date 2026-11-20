import type { Metadata } from "next";
import { ResumeDocument } from "@/components/ResumeDocument";
import { resumeCopy, site } from "@/content/site";

export const metadata: Metadata = {
  title: resumeCopy.title,
  description: site.description,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: `${resumeCopy.title} — ${site.name}`,
    description: site.ogDescription,
    url: `${site.url}/resume`,
  },
};

export default function ResumePage() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <main id="content" className="resume-wrap" tabIndex={-1}>
        <div className="resume-toolbar no-print">
          <a className="wordmark" href="/">
            {site.name}
          </a>
          <a className="btn" href="/Hardik-Pandey-Resume.pdf" download>
            {resumeCopy.download}
          </a>
        </div>
        <ResumeDocument />
      </main>
    </>
  );
}

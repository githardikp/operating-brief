import type { Metadata } from "next";
import { notFoundCopy, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Not found",
  description: notFoundCopy.heading,
};

export default function NotFound() {
  return (
    <main className="missing">
      <div className="container">
        <p className="label">{site.name}</p>
        <div className="hairline" />
        <div className="hero-text">
          <h1>{notFoundCopy.heading}</h1>
          <p className="sub follow">{notFoundCopy.body}</p>
          <div className="actions">
            <a className="btn" href="/">
              {notFoundCopy.home}
            </a>
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.writeLabel}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

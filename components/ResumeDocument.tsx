import { experience } from "@/content/experience";
import { hero, site } from "@/content/site";

export function ResumeDocument() {
  return (
    <article className="resume-sheet">
      <h1>{site.name}</h1>
      <p className="resume-kicker">{site.role}</p>
      <p className="small">{site.location}</p>
      <p className="sub">{hero.sub}</p>
      <p className="resume-contact">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={site.x} target="_blank" rel="noopener noreferrer">
          {site.xHandle}
        </a>
      </p>
      {experience.map((entry) => (
        <section className="resume-entry" key={entry.id}>
          <p className="dates resume-meta">
            {entry.dates}
            <span aria-hidden="true"> · </span>
            {entry.org}
          </p>
          <h2>{entry.role}</h2>
          {entry.detail ? <p className="small">{entry.detail}</p> : null}
          {entry.bullets ? (
            <ul>
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}

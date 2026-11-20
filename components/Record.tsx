import { experience } from "@/content/experience";
import { record } from "@/content/site";

export function Record() {
  return (
    <section className="section" id="record" data-reveal aria-labelledby="record-heading">
      <div className="container">
        <div className="folio-row">
          <p className="label">{record.folio}</p>
        </div>
        <div className="hairline" />
        <div className="section-head">
          <h2 id="record-heading">{record.heading}</h2>
        </div>
        <div className="section-body">
          {experience.map((entry) => (
            <article className="record-row" key={entry.id}>
              <p className="dates">{entry.dates}</p>
              <p className="org">{entry.org}</p>
              <h3>{entry.role}</h3>
              <div className="record-body">
                {entry.detail ? <p className="small">{entry.detail}</p> : null}
                {entry.bullets ? (
                  <ul>
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
          <p className="more-link">
            <a className="text-link" href="/resume">
              {record.more}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import { Linkedin, Mail, X } from "lucide-react";
import { TODO_BOOKING_URL, contact, site } from "@/content/site";

export function Correspondence() {
  return (
    <section className="section band" id="contact" data-reveal aria-labelledby="contact-heading">
      <div className="container">
        <div className="folio-row">
          <p className="label">{contact.folio}</p>
        </div>
        <div className="hairline" />
        <div className="section-head">
          <h2 id="contact-heading">
            {contact.headingBefore} <em>{contact.headingEm}</em> {contact.headingAfter}
          </h2>
          <p className="sub follow">{contact.sub}</p>
        </div>
        <div className="section-body">
          <p className="label next-label">{contact.nextLabel}</p>
          <ol className="steps">
            {contact.steps.map((step) => (
              <li className="step" key={step.title}>
                <span className="step-mark" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="actions">
            <a className="btn" href={TODO_BOOKING_URL}>
              {site.bookingLabel}
            </a>
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.writeLabel}
            </a>
          </div>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail aria-hidden="true" strokeWidth={1.5} size={18} />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" strokeWidth={1.5} size={18} />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.x} target="_blank" rel="noopener noreferrer">
                <X aria-hidden="true" strokeWidth={1.5} size={18} />
                {site.xHandle}
                <span className="sr-only"> on X (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

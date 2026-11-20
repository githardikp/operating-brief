import { TODO_BOOKING_URL, figures, hero, site } from "@/content/site";
import { Compass } from "./sketches/Compass";
import { Construction } from "./sketches/Construction";
import { FoldedMap } from "./sketches/FoldedMap";
import { Loupe } from "./sketches/Loupe";
import { Scales } from "./sketches/Scales";

const drawings = [Compass, FoldedMap, Scales, Loupe];

export function Hero() {
  return (
    <section className="hero spread" id="top" aria-labelledby="hero-heading">
      <div className="container grid-12 hero-grid">
        <div className="hero-copy">
          <div className="folio-row">
            <p className="label">{hero.folio}</p>
            <p className="label">{hero.place}</p>
          </div>
          <div className="hairline" />
          <div className="hero-text">
            <h1 id="hero-heading">
              {hero.headingBefore} <em>{hero.headingEm}</em> {hero.headingAfter}
            </h1>
            <p className="sub">{hero.sub}</p>
            <div className="actions">
              <a className="btn" href={TODO_BOOKING_URL}>
                {site.bookingLabel}
              </a>
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.writeLabel}
              </a>
            </div>
            <div className="sign">
              <p className="signature">{site.signature}</p>
              <p className="small">{site.signatureLine}</p>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-frame">
            <div className="art-canvas">
              <Construction />
            </div>
            {figures.map((figure, index) => {
              const Drawing = drawings[index];
              return (
                <figure className={`hero-fig fig-${figure.id}`} id={`fig-${figure.id}`} key={figure.id}>
                  <span className="fig-label">{figure.fig}</span>
                  <Drawing stagger={figure.stagger} />
                  <figcaption className="caption">
                    <b>{figure.numeral}</b> {figure.caption}
                  </figcaption>
                </figure>
              );
            })}
            {figures.map((figure) => (
              <p className={`margin-note note-${figure.id}`} data-note-for={figure.id} aria-hidden="true" key={figure.note}>
                {figure.note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

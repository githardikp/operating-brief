import { practice } from "@/content/site";

export function Practice() {
  return (
    <section className="section band" id="practice" data-reveal aria-labelledby="practice-heading">
      <div className="container">
        <div className="folio-row">
          <p className="label">{practice.folio}</p>
        </div>
        <div className="hairline" />
        <div className="section-head paired grid-12">
          <h2 className="g-6" id="practice-heading">
            {practice.headingBefore} <em>{practice.headingEm}</em> {practice.headingAfter}
          </h2>
          <p className="intro g-6">{practice.intro}</p>
        </div>
        <div className="section-body">
          <ol>
            {practice.rows.map((row) => (
              <li className="practice-row" key={row.numeral}>
                <span className="practice-num">{row.numeral}</span>
                <h3>{row.question}</h3>
                <p className="answer">{row.answer}</p>
                <a className="fig-ref" href={row.href}>
                  {row.figure}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

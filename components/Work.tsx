import { projects } from "@/content/projects";
import { work } from "@/content/site";
import { Plate } from "./Plate";

export function Work() {
  return (
    <section className="section" id="work" data-reveal aria-labelledby="work-heading">
      <div className="container">
        <div className="folio-row">
          <p className="label">{work.folio}</p>
        </div>
        <div className="hairline" />
        <div className="section-head">
          <h2 id="work-heading">{work.heading}</h2>
          <p className="work-intro">{work.intro}</p>
        </div>
        {work.groups.map((group) => {
          const items = projects.filter((project) => project.group === group.id);
          return (
            <div className="work-group" key={group.id}>
              <p className="label group-label">{group.title}</p>
              <div className="plate-grid">
                {items.map((project, index) => {
                  const overall = projects.findIndex((item) => item.name === project.name);
                  return (
                    <Plate
                      key={project.url}
                      project={project}
                      index={overall}
                      wide={group.id === "brand-gtm" && index === items.length - 1 && items.length === 3}
                      stagger={index}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

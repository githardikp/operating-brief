import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { plateNumerals, work } from "@/content/site";
import { AxonMap } from "./sketches/AxonMap";
import { Isotope } from "./sketches/Isotope";
import { Kizashi } from "./sketches/Kizashi";
import { PmPath } from "./sketches/PmPath";
import { Saanjh } from "./sketches/Saanjh";

const sketches = {
  Saanjh,
  Kizashi,
  Isotope,
  "PM Path": PmPath,
  "Axon Map": AxonMap,
} as const;

const hiddenTags = new Set<string>(work.hiddenTags);

export function Plate({
  project,
  index,
  wide = false,
  stagger = 0,
}: {
  project: Project;
  index: number;
  wide?: boolean;
  stagger?: number;
}) {
  const Sketch = sketches[project.name as keyof typeof sketches];
  const tags = project.tags.filter((tag) => !hiddenTags.has(tag));
  const numeral = plateNumerals[index] ?? String(index + 1);

  const art = (
    <>
      <span className="fig-label">Plate {numeral}</span>
      <span className="plate-art">{Sketch ? <Sketch stagger={stagger} /> : null}</span>
    </>
  );

  const copy = (
    <>
      {project.label ? <p className="label">{project.label}</p> : null}
      <h3>{project.name}</h3>
      <p>{project.outcome}</p>
      <p className="small what">{project.whatItShows}</p>
      {tags.length > 0 ? <p className="small tags">{tags.join(" · ")}</p> : null}
      <span className="more">
        {work.view}
        <ArrowUpRight className="arrow" aria-hidden="true" strokeWidth={1.5} size={18} />
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
    </>
  );

  return (
    <a className={wide ? "plate plate-wide" : "plate"} href={project.url} target="_blank" rel="noopener noreferrer">
      {wide ? (
        <>
          <div className="plate-side">{art}</div>
          <div className="plate-side">{copy}</div>
        </>
      ) : (
        <>
          {art}
          {copy}
        </>
      )}
    </a>
  );
}

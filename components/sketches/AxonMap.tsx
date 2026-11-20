import { SketchSvg } from "./SketchSvg";

export function AxonMap({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 160 160" stagger={stagger}>
      <path
        className="thin"
        pathLength="1"
        d="M80 78 L34 40 M80 78 L128 36 M80 78 L28 110 M80 78 L132 112 M80 78 L90 136 M34 40 L128 36 M28 110 L90 136"
      />
      <circle className="stroke" pathLength="1" cx="34" cy="40" r="8" />
      <circle className="stroke" pathLength="1" cx="128" cy="36" r="8" />
      <circle className="stroke" pathLength="1" cx="28" cy="110" r="8" />
      <circle className="stroke" pathLength="1" cx="132" cy="112" r="8" />
      <circle className="stroke" pathLength="1" cx="90" cy="136" r="8" />
      <circle className="stroke" pathLength="1" cx="80" cy="78" r="10" />
      <circle className="fill" cx="80" cy="78" r="2.4" />
      <circle className="red" cx="80" cy="78" r="18" />
    </SketchSvg>
  );
}

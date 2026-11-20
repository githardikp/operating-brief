import { SketchSvg } from "./SketchSvg";

export function Isotope({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 160 160" stagger={stagger}>
      <path className="stroke" pathLength="1" d="M26 22 H122 V38 H26 Z" />
      <path className="stroke" pathLength="1" d="M26 44 H122 V60 H26 Z" />
      <path className="stroke" pathLength="1" d="M26 66 H122 V82 H26 Z" />
      <path className="stroke" pathLength="1" d="M26 88 H122 V104 H26 Z" />
      <path className="stroke" pathLength="1" d="M26 110 H122 V126 H26 Z" />
      <path className="red" d="M20 62 H128 V86 H20 Z" />
      <path className="thin" pathLength="1" d="M128 74 H148" />
      <path className="thin" pathLength="1" d="M144 70 L148 74 L144 78" />
    </SketchSvg>
  );
}

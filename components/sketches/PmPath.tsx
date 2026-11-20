import { SketchSvg } from "./SketchSvg";

export function PmPath({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 160 160" stagger={stagger}>
      <path
        className="stroke"
        pathLength="1"
        d="M18 132 C34 116, 40 124, 52 112 S74 118, 86 100 S108 104, 118 82 S136 78, 138 40"
      />
      <circle className="stroke" pathLength="1" cx="18" cy="132" r="4" />
      <circle className="fill" cx="18" cy="132" r="1.4" />
      <path className="stroke" pathLength="1" d="M138 40 V20" />
      <path className="stroke" pathLength="1" d="M138 20 H152 L146 28 L152 36 H138" />
      <path
        className="thin"
        pathLength="1"
        d="M28 122 l-5 4 M36 116 l-5 3 M46 114 l-4 5 M56 108 l-2 6 M66 110 l5 3 M76 104 l4 -4 M86 98 l2 -6 M96 92 l5 -2 M106 88 l4 4 M114 80 l5 1 M124 74 l4 -4 M132 64 l5 -2 M138 52 l4 -5 M144 42 l3 -5"
      />
    </SketchSvg>
  );
}

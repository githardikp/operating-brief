import { SketchSvg } from "./SketchSvg";

export function Compass({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 250 270" stagger={stagger} id="1">
      <circle className="stroke" pathLength="1" cx="125" cy="140" r="104" />
      <circle className="thin" pathLength="1" cx="125" cy="140" r="90" />
      <circle className="thin" pathLength="1" cx="125" cy="140" r="8" />
      <path
        className="thin"
        pathLength="1"
        d="M125 36v14M125 230v14M21 140h14M215 140h14M52 67l9 9M189 204l9 9M52 213l9-9M189 76l9-9"
      />
      <g fontSize="15" textAnchor="middle">
        <text x="125" y="66">N</text>
        <text x="125" y="226">S</text>
        <text x="198" y="145">E</text>
        <text x="52" y="145">W</text>
      </g>
      <path className="stroke" pathLength="1" d="M125 72 L136 140 L125 208 L114 140 Z" />
      <path className="fill" d="M125 72 L136 140 L114 140 Z" />
      <path className="ghost" d="M77 92 L173 188 M173 92 L77 188" />
      <path className="red" d="M150 38 A104 104 0 0 1 226 110" />
      <path className="red solid" d="M226 110 l-2 -10 M226 110 l-10 -2" />
    </SketchSvg>
  );
}

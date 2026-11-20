import { SketchSvg } from "./SketchSvg";

export function Scales({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 250 270" stagger={stagger} id="3">
      <path className="stroke" pathLength="1" d="M38 222 H212" />
      <path className="stroke" pathLength="1" d="M56 222 L80 202 H170 L194 222" />
      <path className="stroke" pathLength="1" d="M125 202 V86" />
      <circle className="fill" cx="125" cy="82" r="3.5" />
      <path className="stroke" pathLength="1" d="M30 96 H220" />
      <path className="stroke" pathLength="1" d="M114 96 L125 80 L136 96" />
      <path className="thin" pathLength="1" d="M52 96 V146 M74 96 V146" />
      <path className="thin" pathLength="1" d="M176 96 V146 M198 96 V146" />
      <path className="stroke" pathLength="1" d="M40 146 H86" />
      <path className="stroke" pathLength="1" d="M40 146 Q63 174 86 146" />
      <path className="stroke" pathLength="1" d="M164 146 H210" />
      <path className="stroke" pathLength="1" d="M164 146 Q187 174 210 146" />
      <path className="red" d="M22 146 H228" />
      <path className="red" d="M22 140 V152 M228 140 V152" />
    </SketchSvg>
  );
}

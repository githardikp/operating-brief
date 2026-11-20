import { SketchSvg } from "./SketchSvg";

export function Loupe({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 250 270" stagger={stagger} id="4">
      <path className="stroke" pathLength="1" d="M158 162 L210 232" />
      <path className="stroke" pathLength="1" d="M174 150 L226 220" />
      <path className="stroke" pathLength="1" d="M210 232 L226 220" />
      <circle className="stroke" pathLength="1" cx="108" cy="118" r="64" />
      <circle className="thin" pathLength="1" cx="108" cy="118" r="52" />
      <path className="thin" pathLength="1" d="M74 90 l18 8 M84 76 l8 18" />
      <circle className="stroke" pathLength="1" cx="210" cy="40" r="22" />
      <circle className="thin" pathLength="1" cx="210" cy="40" r="13" />
      <path className="thin" pathLength="1" d="M200 34 L220 46 M200 40 L218 52 M206 30 L222 42" />
      <path className="red" d="M158 76 L192 52" />
    </SketchSvg>
  );
}

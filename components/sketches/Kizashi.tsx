import { SketchSvg } from "./SketchSvg";

export function Kizashi({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 160 160" stagger={stagger}>
      <path className="stroke" pathLength="1" d="M20 32 H74 V132 H20 Z" />
      <path className="stroke" pathLength="1" d="M86 32 H140 V132 H86 Z" />
      <path className="thin" pathLength="1" d="M74 32 C77 80, 77 88, 74 132" />
      <path className="thin" pathLength="1" d="M86 32 C83 80, 83 88, 86 132" />
      <path className="thin" pathLength="1" d="M78 48 H82 M78 64 H82 M78 80 H82 M78 96 H82 M78 112 H82" />
      <path className="stroke" pathLength="1" d="M106 32 V114" />
      <path className="stroke" pathLength="1" d="M100 108 L106 124 L112 108" />
      <path className="thin" pathLength="1" d="M32 62 H64 M32 76 H64 M32 90 H64" />
    </SketchSvg>
  );
}

import { SketchSvg } from "./SketchSvg";

export function FoldedMap({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 250 270" stagger={stagger} id="2">
      <path className="stroke" pathLength="1" d="M32 64 L84 48 V206 L32 222 Z" />
      <path className="stroke" pathLength="1" d="M84 48 H166 V206 H84 Z" />
      <path className="stroke" pathLength="1" d="M166 48 L218 64 V222 L166 206 Z" />
      <path className="thin" pathLength="1" d="M84 48 V206 M166 48 V206" />
      <path
        className="thin"
        pathLength="1"
        d="M46 96 C66 86, 76 108, 102 98 S136 86, 156 104 S188 98, 206 112"
      />
      <path
        className="thin"
        pathLength="1"
        d="M44 128 C68 114, 90 140, 116 126 S152 114, 178 134 S198 126, 208 140"
      />
      <path className="thin" pathLength="1" d="M48 162 C72 150, 96 174, 122 160 S158 148, 188 170" />
      <path className="thin" pathLength="1" d="M108 82 C124 74, 142 90, 160 80" />
      <circle className="stroke" pathLength="1" cx="108" cy="132" r="5" />
      <circle className="fill" cx="108" cy="132" r="1.7" />
      <path className="red" d="M114 128 C140 108, 160 148, 188 122" />
      <path className="stroke" pathLength="1" d="M178 112 l14 16 M192 112 l-14 16" />
    </SketchSvg>
  );
}

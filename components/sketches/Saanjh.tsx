import { SketchSvg } from "./SketchSvg";

export function Saanjh({ stagger = 0 }: { stagger?: number }) {
  return (
    <SketchSvg viewBox="0 0 160 160" stagger={stagger}>
      <path className="stroke" pathLength="1" d="M70 14 h20 v10 h-20 z" />
      <path className="thin" pathLength="1" d="M74 18 h12" />
      <path className="stroke" pathLength="1" d="M74 24 v28 M86 24 v28" />
      <path className="stroke" pathLength="1" d="M66 52 h28" />
      <path
        className="stroke"
        pathLength="1"
        d="M74 52 C74 64 44 70 40 96 C36 122 52 140 80 142 C108 140 124 122 120 96 C116 70 86 64 86 52"
      />
      <path className="thin" pathLength="1" d="M52 128 C64 136, 96 136, 108 128" />
      <path className="thin" pathLength="1" d="M56 96 H104 M54 106 H106 M58 116 H102" />
    </SketchSvg>
  );
}

import type { ReactNode } from "react";

type SketchSvgProps = {
  children: ReactNode;
  viewBox: string;
  stagger?: number;
  id?: string;
};

export function SketchSvg({ children, viewBox, stagger = 0, id }: SketchSvgProps) {
  return (
    <svg
      className="sk"
      viewBox={viewBox}
      data-sketch=""
      data-stagger={stagger}
      data-sketch-id={id}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

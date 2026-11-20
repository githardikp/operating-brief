import { site } from "@/content/site";

export function Colophon() {
  const year = new Date().getFullYear();
  return (
    <footer className="colophon">
      <div className="container">
        <div className="hairline" />
        <p className="colophon-line">{site.colophon.replace("{year}", String(year))}</p>
      </div>
    </footer>
  );
}

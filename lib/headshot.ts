import fs from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/** Public URL of the headshot, or null when the file is not in /public yet. */
export function headshotSrc(): string | null {
  const src = site.headshot.trim();
  if (!src.startsWith("/") || src.includes("..") || src.includes("\\") || src.includes("\0")) return null;

  const publicDir = path.resolve(process.cwd(), "public");
  const file = path.resolve(publicDir, `.${src}`);
  if (file !== publicDir && !file.startsWith(publicDir + path.sep)) return null;

  try {
    if (!fs.statSync(file).isFile()) return null;
  } catch {
    return null;
  }
  return src;
}

import { readFile } from "node:fs/promises";
import { join } from "node:path";

export function loadFont(file: string) {
  return readFile(join(process.cwd(), "fonts", file));
}

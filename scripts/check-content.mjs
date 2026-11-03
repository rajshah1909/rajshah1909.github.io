// Fails the build if portfolio.json still contains placeholders.
import { readFileSync } from "node:fs";
const text = readFileSync(new URL("../src/data/portfolio.json", import.meta.url), "utf8");
const hits = [...text.matchAll(/.*\b(TODO|REPLACE ME)\b.*/g)].map((m) => m[0].trim());
if (hits.length) {
  console.error(`portfolio.json has ${hits.length} unfilled placeholder(s):\n` + hits.join("\n"));
  process.exit(1);
}

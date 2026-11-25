// The 3 AM Excuse — the most creative excuse a hardware wallet gives for refusing to sign at 3 AM.
// Writes the single line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// Run with: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Sorry — at 3 AM my buttons are off the clock, my screen's gone dark, and your transaction smells like a decision you'll regret by breakfast.";
const MAX_CHARS = 200;

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");

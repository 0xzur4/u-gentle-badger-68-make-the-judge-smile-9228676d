// main.ts — writes one line about a small good thing that happened today
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At 7 a.m. the stray cat that hisses at me every morning followed me to the gate, then flopped onto my shoe and purred like we'd signed a peace treaty.";

// Guard: the entry must be one line of 1-200 Unicode code points.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200 || line.includes("\n")) {
  throw new Error(`line is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

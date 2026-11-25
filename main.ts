import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line roasting the agent that built this entry.
// Kept as a single constant so both runs produce byte-identical output.
const LINE =
  "My agent spawned three subagents to write one line, rewrote it from scratch to prove it wrote it, and bundled the transcripts — all for $2.";

// Gate: the entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; gate needs 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

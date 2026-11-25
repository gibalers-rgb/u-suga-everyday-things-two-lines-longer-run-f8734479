// Everyday Things, Two Lines, Longer Run — make.fun entry.
// Writes one two-line explanation of a traffic jam to /output/entry.txt.
// Node 22, standard library only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A traffic jam is a parking lot that forgot it was a road.";
const LINE_2 =
  "It maps the cars sitting still bumper to bumper, but it leaves out " +
  "that every driver still wants to move and that nobody meant to park there.";

const entry = `${LINE_1}\n${LINE_2}\n`;

// Gate check, mirroring the sealed scorer: UTF-8 text, 1-400 characters,
// not only whitespace, exactly two lines, each a single sentence.
const text = entry.replace(/\n$/, "");
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry is ${text.length} characters, must be 1-400`);
}
if (!text.trim()) {
  throw new Error("entry is only whitespace");
}
const lines = text.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry has ${lines.length} lines, must have exactly 2`);
}
for (const line of lines) {
  const sentences = line.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`line is not a single sentence: ${line}`);
  }
  if (!/[.!?]$/.test(line.trim())) {
    throw new Error(`line does not end with terminal punctuation: ${line}`);
  }
}
// The brief's pair shape: line 1 carries the analogy, line 2 accounts
// for it — it must name what the analogy maps and what it leaves out.
if (!/maps/i.test(lines[1]) || !/leaves out/i.test(lines[1])) {
  throw new Error("line 2 must say what the analogy maps and what it leaves out");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${text.length} characters)`);
console.log(text);

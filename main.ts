import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You describe the app in plain words, an AI agent builds it while you watch, and your idea stops being a note on your phone.";

if (!TEXT.trim() || TEXT.length > 240) throw new Error("entry text out of range");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

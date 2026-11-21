import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to stop and to stay.
const poem = `stop is a verb i practise
the way other people practise scales.

not the slammed door.
the small one—
hand lifted off the keys
in the middle of a word,

and the room still holds
its breath because i
decided it could.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

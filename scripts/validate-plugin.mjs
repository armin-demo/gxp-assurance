import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

function mustExist(rel) {
  if (!fs.existsSync(path.join(root, rel))) errors.push(`missing: ${rel}`);
}

mustExist(".cursor-plugin/plugin.json");
mustExist("README.md");
mustExist("package.json");
mustExist("examples/gxp.yml");
mustExist("rules/gxp-change-hygiene.mdc");
mustExist("scripts/validate-plugin.mjs");

const skills = [
  "csa-risk-classify",
  "part11-checklist",
  "oq-scaffold",
  "rtm-update",
  "change-control-pack",
];
for (const s of skills) mustExist(`skills/${s}/SKILL.md`);

const commands = ["gxp-risk", "gxp-oq", "gxp-rtm", "gxp-change"];
for (const c of commands) mustExist(`commands/${c}.md`);

const plugin = JSON.parse(
  fs.readFileSync(path.join(root, ".cursor-plugin/plugin.json"), "utf8"),
);
if (plugin.name !== "gxp-assurance") errors.push("plugin.json name must be gxp-assurance");

if (errors.length) {
  console.error("validate-plugin failed:\n" + errors.map((e) => ` - ${e}`).join("\n"));
  process.exit(1);
}
console.log("validate-plugin: ok");

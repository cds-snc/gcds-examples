#!/usr/bin/env node
// Checks that every relative href/src in a static HTML template resolves to a
// real file on disk. Used by validate-starter-templates.yml for starter apps
// that have no build step (and so no bundler to catch a broken link).
//
// Usage: node check-html-links.js <path-to-template-root>

const fs = require("fs");
const path = require("path");

const root = process.argv[2];
if (!root) {
  console.error("Usage: node check-html-links.js <path-to-template-root>");
  process.exit(1);
}

function walk(dir) {
  let results = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(full));
    else if (entry.name.endsWith(".html")) results.push(full);
  }

  return results;
}

const files = walk(path.resolve(root));
let errors = 0;

for (const file of files) {
  // Strip HTML comments before scanning, so intentionally-commented-out
  // example links (e.g. an optional custom stylesheet) aren't flagged.
  const content = fs.readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const dir = path.dirname(file);
  const attrRegex = /(?:href|src)="([^"]+)"/g;
  let match;

  while ((match = attrRegex.exec(content))) {
    const val = match[1];

    if (val.startsWith("http") || val === "#" || val.startsWith("mailto:"))
      continue;

    const cleanVal = val.split("#")[0].split("?")[0];

    if (!cleanVal) continue;

    const resolved = path.resolve(dir, cleanVal);
    let exists = fs.existsSync(resolved);

    if (!exists && (cleanVal.endsWith("/") || !path.extname(cleanVal))) {
      exists = fs.existsSync(path.join(resolved, "index.html"));
    }

    if (!exists) {
      console.error(`BROKEN: ${file} -> "${val}" (resolved: ${resolved})`);
      errors++;
    }
  }
}

console.log(`Checked ${files.length} HTML file(s). ${errors} broken link(s).`);
process.exit(errors > 0 ? 1 : 0);

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "node22",
  clean: true,
  // Keep deps external; they ship via the published package's dependencies.
  external: ["@clack/prompts", "giget", "picocolors"],
  // Prepend a shebang so the built file is directly executable as a bin.
  banner: { js: "#!/usr/bin/env node" },
});

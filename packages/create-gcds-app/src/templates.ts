/**
 * The single source of truth for which starter apps the CLI can scaffold.
 *
 * The interactive prompt and the giget fetch spec derive from this array.
 * When adding a framework, also update the hard-coded CI matrix in
 * `.github/workflows/validate-starter-templates.yml` to keep it in sync.
 */
export interface Template {
  /** Stable id, also accepted via `--template <id>`. */
  id: string;
  /** Human-readable label shown in the framework picker. */
  label: string;
  /** Path to the template inside the gcds-examples repo. */
  repoPath: string;
}

/** GitHub repo that holds the starter apps (owner/name). */
export const REPO = "cds-snc/gcds-examples";

/**
 * Branch/tag/commit to pull templates from.
 *
 * The starter apps are not published anywhere today, so we always pull the tip
 * of `main`. If/when the starters get versioned releases, switch this default
 * to a tag and expose `--ref` for opting into `main`.
 */
export const DEFAULT_REF = "main";

export const TEMPLATES: Template[] = [
  {
    id: "react",
    label: "React (TypeScript)",
    repoPath: "starter-apps/react/react-template",
  },
  {
    id: "vue",
    label: "Vue 3",
    repoPath: "starter-apps/vue/vue-template",
  },
  // Coming soon — uncomment once the starter app lands in the repo:
  // { id: "html",    label: "HTML",    repoPath: "starter-apps/html/html-template" },
  // { id: "angular", label: "Angular", repoPath: "starter-apps/angular/angular-template" },
];

export function findTemplate(id: string): Template | undefined {
  return TEMPLATES.find((t) => t.id === id);
}

/**
 * Build the giget source spec for a template at a given ref, e.g.
 * `github:cds-snc/gcds-examples/starter-apps/react/react-template#main`.
 */
export function gigetSource(template: Template, ref: string): string {
  return `github:${REPO}/${template.repoPath}#${ref}`;
}

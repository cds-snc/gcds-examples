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
  /**
   * Whether this template has its own package.json / npm tooling. Templates
   * without one (e.g. HTML starter) skip the install prompt/step and get
   * different "next steps" guidance.
   */
  hasPackageJson: boolean;
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
    hasPackageJson: true,
  },
  {
    id: "vue",
    label: "Vue 3",
    repoPath: "starter-apps/vue/vue-template",
    hasPackageJson: true,
  },
  {
    id: "html",
    label: "HTML",
    repoPath: "starter-apps/html/html-basic-template",
    hasPackageJson: false,
  },
  // Coming soon — uncomment once the starter app lands in the repo:
  // { id: "angular", label: "Angular", repoPath: "starter-apps/angular/angular-template", hasPackageJson: true },
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

// GCDS version numbers come from npm at build time: see versions.ts.
export const DOCS = "https://design-system.canada.ca/en";
export const REPO = "https://github.com/cds-snc/gcds-components";

export const FRAMEWORKS = [
  { id: "html", label: "HTML (no framework)" },
  { id: "react", label: "React" },
  { id: "vue", label: "Vue" },
  { id: "angular", label: "Angular" },
] as const;

export type FrameworkId = (typeof FRAMEWORKS)[number]["id"];

/** The onboarding path, in order. `slug` doubles as the progress key. */
export const STEPS = [
  {
    slug: "how-it-works",
    title: "How GCDS works",
    time: "15 min",
    summary: "Web components, shadow DOM, flexibility and accessibility.",
  },
  {
    slug: "setup",
    title: "Set up your project",
    time: "10 min",
    summary:
      "Install GCDS in HTML, React, Vue or Angular and confirm it works.",
  },
  {
    slug: "first-page",
    title: "Build your first page",
    time: "30 min",
    summary: "Build a real GC page, one component at a time.",
  },
  {
    slug: "tokens",
    title: "Design tokens and CSS Shortcuts",
    time: "10 min",
    summary: "Style your own markup without leaving the GC brand.",
  },
  {
    slug: "playground",
    title: "Component playground",
    time: "As long as you like",
    summary: "Change attributes and copy working code for your framework.",
  },
  {
    slug: "next-steps",
    title: "Next steps",
    time: "5 min",
    summary: "Starter apps, docs, and where to get help.",
  },
] as const;

export const url = (slug = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${slug ? slug + "/" : ""}`;

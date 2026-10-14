/**
 * Global design tokens, read at build time from the @gcds-core/tokens package
 * (keep its version in step with @gcds-core/components). Upgrading the package
 * updates the token explorer on the tokens page.
 */
import colourCss from '@gcds-core/tokens/build/web/css/global/color.css?raw';
import spacingCss from '@gcds-core/tokens/build/web/css/global/spacing.css?raw';

export interface Token {
  name: string;
  /** From the token's comment, e.g. "danger background". */
  description: string;
}

/** Reads `--gcds-name: value; /** Global …: description *\/` lines from a token file. */
function parse(css: string): Token[] {
  return [...css.matchAll(/(--gcds-[a-z0-9-]+)\s*:[^;]*;(?:\s*\/\*\*\s*([^*]*?)\s*\*\/)?/g)].map(([, name, comment]) => ({
    name,
    description: comment?.replace(/^.*?:\s*/, '') ?? '',
  }));
}

const GROUP_LABELS: Record<string, string> = { bg: 'Background' };
// Most-used first. Any group not listed here (e.g. one added in a later release) goes at the end.
const GROUP_ORDER = ['text', 'bg', 'link', 'border', 'focus', 'active', 'danger', 'disabled'];
const rank = (key: string) => (GROUP_ORDER.includes(key) ? GROUP_ORDER.indexOf(key) : GROUP_ORDER.length);
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Global colour tokens grouped by purpose: text, background, link… */
export const colourGroups: [string, Token[]][] = Object.entries(
  parse(colourCss).reduce<Record<string, Token[]>>((groups, token) => {
    const key = token.name.split('-')[3];
    (groups[key] ??= []).push({ ...token, description: capitalize(token.description) });
    return groups;
  }, {}),
)
  .sort(([a], [b]) => rank(a) - rank(b))
  .map(([key, tokens]) => [GROUP_LABELS[key] ?? capitalize(key), tokens]);

/** Selected when the page loads: main text colour, or the first token if that ever goes away. */
const allColours = colourGroups.flatMap(([, tokens]) => tokens.map(t => t.name));
export const defaultColour = allColours.includes('--gcds-text-primary') ? '--gcds-text-primary' : allColours[0];

/** Global spacing tokens, smallest first. */
export const spacingTokens: Token[] = parse(spacingCss).sort(
  (a, b) => Number(a.name.split('-').pop()) - Number(b.name.split('-').pop()),
);

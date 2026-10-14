/**
 * Shiki version of Prism's "a11y-dark" theme, the one <gcds-ext-code-display>
 * uses, so static code blocks look the same as the live examples.
 */
export const a11yDark = {
  name: 'gcds-a11y-dark',
  type: 'dark' as const,
  colors: { 'editor.background': '#2b2b2b', 'editor.foreground': '#f8f8f2' },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#d4d0ab' } },
    { scope: ['punctuation', 'meta.brace', 'punctuation.definition.tag'], settings: { foreground: '#fefefe' } },
    {
      scope: ['entity.name.tag', 'support.type.property-name', 'constant.other', 'support.constant', 'variable.other.constant'],
      settings: { foreground: '#ffa07a' },
    },
    { scope: ['constant.numeric', 'constant.language', 'keyword', 'storage', 'keyword.operator', 'variable'], settings: { foreground: '#00e0e0' } },
    { scope: ['entity.other.attribute-name', 'string', 'support.function.builtin', 'entity.name.selector'], settings: { foreground: '#abe338' } },
    {
      scope: ['string.quoted.double.html', 'string.quoted.single.html', 'meta.attribute string', 'entity.name.function', 'support.function', 'keyword.control.at-rule'],
      settings: { foreground: '#ffd700' },
    },
  ],
};

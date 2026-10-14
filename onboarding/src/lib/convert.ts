/**
 * Turns an HTML snippet that uses <gcds-*> tags into the equivalent
 * React JSX using @gcds-core/components-react. Used at build time for code
 * samples and in the browser by the playground, so it stays dependency-free.
 *
 * Vue and Angular templates accept the same kebab-case tags as HTML, so
 * they don't need converting.
 */
const pascal = (tag: string) =>
  tag.replace(/(^|-)([a-z])/g, (_, __, c: string) => c.toUpperCase());

const camel = (attr: string) => attr.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

export function toReact(html: string): string {
  const used = new Set<string>();

  let jsx = html
    .replace(/<!--\s*([\s\S]*?)\s*-->/g, '{/* $1 */}')
    .replace(/<(\/?)(gcds-[a-z-]+)/g, (_, slash: string, tag: string) => {
      const name = pascal(tag);
      used.add(name);
      return `<${slash}${name}`;
    })
    // Rewrite attribute names inside each opening tag, skipping quoted values.
    .replace(/<([A-Za-z][\w-]*)((?:\s+[^\s=>]+(?:=(?:"[^"]*"|'[^']*'))?)*)(\s*\/?)>/g, (_, tag: string, attrs: string, end: string) => {
      const renamed = attrs.replace(/(\s+)([^\s=>]+)((?:=(?:"[^"]*"|'[^']*'))?)/g, (__, sp: string, name: string, value: string) => {
        if (name === 'class') name = 'className';
        else if (name === 'for') name = 'htmlFor';
        else if (name === 'novalidate') name = 'noValidate';
        else if (!/^(aria|data)-/.test(name)) name = camel(name);
        return sp + name + value;
      });
      return `<${tag}${renamed}${end}>`;
    });

  const names = [...used].sort();
  if (!names.length) return jsx;
  const imports =
    names.length > 3
      ? `import {\n  ${names.join(',\n  ')},\n} from '@gcds-core/components-react';`
      : `import { ${names.join(', ')} } from '@gcds-core/components-react';`;
  return `${imports}\n\n${jsx}`;
}

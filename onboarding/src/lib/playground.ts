/**
 * Playground data, generated at build time from the GCDS component specs, in
 * the shape <gcds-ext-code-display> expects for its Attributes, Slots and
 * Events tabs.
 *
 * The specs are a copy of packages/web/specs/components.json from the
 * cds-snc/gcds-components release that matches the installed
 * @gcds-core/components. Replace the file when you upgrade that package.
 */
import specs from '../data/gcds-components-1.6.0.json';

/** Matches AttributesType in @gcds-extensions/code-display. */
export interface PlaygroundAttr {
  name: string;
  control: 'select' | 'text' | 'none';
  options?: string[];
  required?: boolean;
  defaultValue?: string;
  type?: string;
}

export interface PlaygroundComponent {
  tag: string;
  docsSlug: string;
  /** Starting markup: one root element. */
  markup: string;
  attrs: PlaygroundAttr[];
  slots: { name: string; description: string }[];
  events: { name: string; description: string; details: string }[];
}

const STARTERS: Record<string, string> = {
  'gcds-button': `<gcds-button type="button">Continue</gcds-button>`,
  'gcds-link': `<gcds-link href="#">Read the eligibility criteria</gcds-link>`,
  'gcds-notice': `<gcds-notice notice-role="info" notice-title="Processing times" notice-title-tag="h2"><gcds-text margin-bottom="0">Apply at least 4 weeks before your visit.</gcds-text></gcds-notice>`,
  'gcds-alert': `<gcds-alert heading="Scheduled maintenance" alert-role="warning">Online services will be unavailable Saturday from 1 to 3 am.</gcds-alert>`,
  'gcds-card': `<gcds-card card-title="Apply for a parks pass" href="#" description="Get a year of entry to all national parks."></gcds-card>`,
  'gcds-details': `<gcds-details details-title="What you need before you start"><gcds-text margin-bottom="0">Your email address and a payment card.</gcds-text></gcds-details>`,
  'gcds-input': `<gcds-input input-id="playground-input" name="email" label="Email address" hint="We’ll send your pass here."></gcds-input>`,
  'gcds-heading': `<gcds-heading tag="h2">Your details</gcds-heading>`,
  'gcds-stepper': `<gcds-stepper current-step="1" total-steps="3" tag="h2">Your details</gcds-stepper>`,
};

const SKIP = new Set(['autofocus', 'form']);
const firstLine = (s?: string) => (s ?? '').split('\n')[0];

function toAttr(p: any): PlaygroundAttr | null {
  if (!p.attr || SKIP.has(p.attr)) return null;
  const type: string = p.type;
  const literals = [...type.matchAll(/"([^"]+)"/g)].map(m => m[1]);
  const base = {
    name: p.attr,
    required: !!p.required,
    defaultValue: p.default?.replace(/^'|'$/g, ''),
    type,
  };

  if (type === 'boolean') return { ...base, control: 'select', options: ['true', 'false'] };
  if (literals.length && /^"[^"]+"(?:\s*\|\s*"[^"]+")*\s*$/.test(type)) return { ...base, control: 'select', options: literals };
  if (type === 'string' || type === 'number') return { ...base, control: 'text' };
  // Objects, arrays and functions can't be edited as a plain attribute.
  return { ...base, control: 'none' };
}

export const PLAYGROUND: PlaygroundComponent[] = Object.entries(STARTERS).flatMap(([tag, markup]) => {
  const spec = (specs as any).components.find((c: any) => c.tag === tag);
  if (!spec) return [];
  return [
    {
      tag,
      docsSlug: tag.replace('gcds-', ''),
      markup,
      attrs: spec.props.map(toAttr).filter(Boolean) as PlaygroundAttr[],
      slots: spec.slots.map((s: any) => ({ name: s.name, description: firstLine(s.docs) })),
      events: spec.events.map((e: any) => ({ name: e.event, description: firstLine(e.docs), details: e.detail })),
    },
  ];
});

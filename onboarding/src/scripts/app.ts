import { defineCustomElements } from '@gcds-core/components/loader';
import { defineCustomElements as defineCodeDisplay } from '@gcds-extensions/code-display/loader';

// Registers every <gcds-*> tag. Components load lazily as they appear on the page.
defineCustomElements();

// <gcds-ext-code-display>: live preview + generated HTML/React/Vue/Angular code.
defineCodeDisplay();

const FW_KEY = 'gcds-onboarding:framework';
const DONE_KEY = 'gcds-onboarding:done';

const store = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* Storage unavailable: preferences just won't persist. */
    }
  },
};

/* ---------- Framework preference ---------- */

/** Code displays start in the reader's framework and follow the picker. */
function syncCodeDisplays(fw: string) {
  document.querySelectorAll<HTMLElement & { framework?: string }>('gcds-ext-code-display').forEach(el => {
    el.setAttribute('framework', fw);
    // Before registration a property would shadow the component's own setter.
    if (customElements.get('gcds-ext-code-display')) el.framework = fw;
  });
}

function setFramework(fw: string) {
  document.documentElement.dataset.framework = fw;
  store.set(FW_KEY, fw);
  syncCodeDisplays(fw);
  document.querySelectorAll<HTMLElement & { value?: string }>('[data-framework-picker]').forEach(el => {
    if (el.value !== fw) el.value = fw;
  });
  document.dispatchEvent(new CustomEvent('framework-change', { detail: fw }));
}

syncCodeDisplays(document.documentElement.dataset.framework ?? 'html');

document.querySelectorAll<HTMLElement & { value?: string }>('[data-framework-picker]').forEach(el => {
  el.value = document.documentElement.dataset.framework ?? 'html';
  el.addEventListener('gcdsChange', () => {
    if (el.value) setFramework(el.value);
  });
});

/* ---------- Progress ---------- */

function getDone(): string[] {
  try {
    return JSON.parse(store.get(DONE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function renderProgress() {
  const done = new Set(getDone());

  document.querySelectorAll<HTMLElement>('[data-nav-step]').forEach(link => {
    const mark = link.querySelector('.nav-done');
    if (mark) {
      mark.innerHTML = done.has(link.dataset.navStep!)
        ? '<gcds-icon name="checkmark-circle" label="Done" size="h5" margin-left="100"></gcds-icon>'
        : '';
    }
  });

  document.querySelectorAll<HTMLElement>('[data-step-card]').forEach(card => {
    if (done.has(card.dataset.stepCard!)) card.setAttribute('badge', 'Done');
    else card.removeAttribute('badge');
  });

  document.querySelectorAll<HTMLElement>('[data-complete-toggle]').forEach(btn => {
    const isDone = done.has(btn.dataset.completeToggle!);
    btn.textContent = isDone ? 'Mark as not done' : 'Mark this section as done';
    btn.setAttribute('button-role', isDone ? 'secondary' : 'primary');
    const status = document.getElementById(`status-${btn.dataset.completeToggle}`);
    if (status) status.textContent = isDone ? 'You marked this section as done.' : '';
  });

  const count = document.querySelector('[data-progress-count]');
  if (count) count.textContent = String(done.size);
}

document.querySelectorAll<HTMLElement>('[data-complete-toggle]').forEach(btn => {
  btn.addEventListener('gcdsClick', () => {
    const slug = btn.dataset.completeToggle!;
    const done = new Set(getDone());
    done.has(slug) ? done.delete(slug) : done.add(slug);
    store.set(DONE_KEY, JSON.stringify([...done]));
    renderProgress();
  });
});

renderProgress();

/* ---------- Copy buttons ---------- */

document.addEventListener('gcdsClick', async e => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-copy]');
  if (!btn) return;
  const code = btn.closest('.code-block')?.querySelector('pre');
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code.textContent ?? '');
    btn.textContent = 'Copied';
  } catch {
    btn.textContent = 'Select the code and copy it manually';
  }
  setTimeout(() => (btn.textContent = 'Copy code'), 2000);
});

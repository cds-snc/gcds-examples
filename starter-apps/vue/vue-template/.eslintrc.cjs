/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Slots used in GCDS Components (web components) are valid usage
    // source: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/multi-word-component-names': ['error', {
      // TODO: Remove About1 from the list if it is no longer needed
      'ignores': ['Header', 'Footer', 'About1']
    }]
  }
}

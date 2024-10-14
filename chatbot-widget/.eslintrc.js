/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: { max: 1 } }],
    'vue/first-attribute-linebreak': ['error', { singleline: 'ignore', multiline: 'ignore' }],
  },
}

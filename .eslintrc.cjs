/** @type {import('eslint').Linter.Config} */
const Config = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],

  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',

  env: {
    node: true,
  },

  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-extra-semi': 'warn',
  },
};

module.exports = Config;

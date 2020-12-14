module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-debugger': 'off', //remove it after
    'no-unused-vars': [1, { varsIgnorePattern: '^_' }], //remove it after
    'no-unused-variable': 'off', //remove it after
    '@typescript-eslint/no-unused-vars': [1, { varsIgnorePattern: '^_' }], //remove it after
    '@typescript-eslint/explicit-module-boundary-types': 'off', //remove it after
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    document: false,
    Promise: false,
  },
};

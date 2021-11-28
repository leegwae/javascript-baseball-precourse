module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-tabs': 'off',
    'no-new': 'off',
    'import/extensions': 'off',
    'linebreak-style': ['error', 'windows'],
  },
};
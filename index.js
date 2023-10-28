const rules = require('./src/rules');
// const reactRules = require('./src/reactRules.js');

module.exports = {
  env: {
    // this is for es6 globals like Set
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    // this is for syntax like object / array rest and spread
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
  ],
  plugins: [
    // 'react',
    // 'react-hooks',
  ],
  rules: {
    ...rules,
  },
};

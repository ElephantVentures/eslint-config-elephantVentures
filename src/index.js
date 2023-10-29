const rules = require('./rules');

const parserOptions = {
  // this is for updated syntax like object / array rest and spread
  ecmaVersion: 'latest',
};

// env sets global types like Set
const env = {
  es6: true,
  node: true,
};

module.exports = {
  env,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions,
  rules: { ...rules },
};

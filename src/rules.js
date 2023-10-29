//  See list of rules here: https://eslint.org/docs/latest/rules/
const MAX_LINES = 300;

module.exports = {
  'no-use-before-define': 'error',
  complexity: 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'dot-notation': 'error',
  eqeqeq: 'error',
  'max-lines': ['error', MAX_LINES],
  'no-magic-numbers': ['error', { ignore: [0, 1] }],
  'no-multi-assign': 'error',
  'no-nested-ternary': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-undef-init': 'error',
  'no-unused-expressions': 'error',
  'no-useless-call': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'prefer-const': 'error',
  'require-await': 'error',
  'line-comment-position': ['error', { position: 'above' }],
};

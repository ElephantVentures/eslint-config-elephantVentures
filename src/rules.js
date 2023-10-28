//  See list of rules here: https://eslint.org/docs/latest/rules/
const MAX_LINES = 300;
const INDENT = 2;

module.exports = {
  'max-len': [
    'warn',
    {
      code: 100,
      ignoreRegExpLiterals: true,
    },
  ],
  'no-use-before-define': 'error',
  'complexity': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'dot-notation': 'error',
  'eqeqeq': 'error',
  'max-lines': ['error', MAX_LINES],
  'no-floating-decimal': 'error',
  'no-magic-numbers': 'error',
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
  'spaced-comment': [
    'error',
    'always',
    {
      markers: [
        '/',
      ],
    },
  ],
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': 'error',
  'array-element-newline': ['error', 'consistent'],
  'arrow-spacing': 'error',
  'block-spacing': 'error',
  'brace-style': 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': 'error',
  'comma-style': 'error',
  'computed-property-spacing': 'error',
  'dot-location': ['error', 'property'],
  'eol-last': 'error',
  'func-call-spacing': 'error',
  'function-paren-newline': ['error', 'consistent'],
  'generator-star-spacing': 'error',
  'implicit-arrow-linebreak': 'error',
  'indent': ['error', INDENT],
  'jsx-quotes': 'error',
  'keyword-spacing': 'error',
  'line-comment-position': ['error', { position: 'above' }],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-parens': 'error',
  'newline-per-chained-call': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': 'error',
  'no-tabs': 'error',
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': 'error',
  'object-curly-spacing': ['error', 'always'],
  'object-curly-newline': ['error', { consistent: true }],
  'quotes': ['error', 'single', { avoidEscape: true }],
  'rest-spread-spacing': ['error', 'never'],
  'semi': ['error', 'always'],
  'semi-style': 'error',
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': 'error',
  'switch-colon-spacing': 'error',
  'template-curly-spacing': 'error',
  'template-tag-spacing': ['error', 'never'],
  'yield-star-spacing': ['error', 'after'],
};

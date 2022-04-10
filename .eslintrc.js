const path = require('path')
const resolve = _path => path.resolve(__dirname, _path)

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
	rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    'consistent-return': 'off',
    'no-dupe-class-members': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'eqeqeq': ['warn', 'always'],
    'no-empty-pattern': 'error',
    'no-floating-decimal': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'no-redeclare': 'error',
    'no-return-assign': [
      'error',
      'always'
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
      ],
      'arrow-parens': 'off',
    "@typescript-eslint/ban-ts-comment": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  }
}

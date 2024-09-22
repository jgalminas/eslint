const js = require('@eslint/js');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  js.configs.recommended,
  react.configs.flat.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/key-spacing': [
        'error',
      ],

      '@stylistic/keyword-spacing': [
        'error',
      ],

      '@stylistic/jsx-quotes': [
        'error',
        'prefer-double',
      ],

      '@stylistic/template-curly-spacing': [
        'error',
        'never',
      ],

      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],

      '@stylistic/linebreak-style': [
        'error',
        'windows',
      ],

      '@stylistic/quotes': [
        'error',
        'single',
      ],

      '@stylistic/semi': [
        'error',
        'never',
      ],

      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: true,
        },
      ],

      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],

      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 2,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],

      '@stylistic/eol-last': [
        'error',
      ],

      'no-undef': [
        'off',
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_', // Ignore variables starting with _
          argsIgnorePattern: '^_', // Ignore arguments starting with _
        },
      ],

      '@stylistic/func-call-spacing': [
        'error',
        'never',
      ],

      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],

      '@stylistic/array-bracket-spacing': [
        'error',
        'never',
      ],

      '@stylistic/space-infix-ops': [
        'error',
      ],

      '@stylistic/space-before-blocks': [
        'error',
        'always',
      ],

      '@stylistic/arrow-spacing': [
        'error',
      ],

      '@stylistic/switch-colon-spacing': [
        'error',
      ],

      '@stylistic/space-in-parens': [
        'error',
        'never',
      ],

      '@stylistic/no-trailing-spaces': [
        'error',
      ],

      curly: [
        'error',
      ],

      '@stylistic/multiline-ternary': ['error', 'always-multiline'],

      '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '&&': 'after' } }],

      // React
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
      'react/react-in-jsx-scope': 'off',
    },
  },
]
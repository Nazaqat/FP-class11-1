module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/camelcase': ['warn', { properties: 'never' }],
    camelcase: 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-unexpected-multiline': 'off',
    'no-use-before-define': 'off',
    quotes: 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/state-in-constructor': 'off',
  },
};

module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      spread: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack/webpack.config.js"
      }
    }
  },
  rules: {
    'react/prefer-stateless-function': 1,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,

    'jsx-a11y/label-has-for': 0,
    'jsx-quotes': [1, 'prefer-single'],

    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'semi': ['error', 'always'],
    'comma-dangle': [0, 'never'],
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
  }
};

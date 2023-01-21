module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
  },
}

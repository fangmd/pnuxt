module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

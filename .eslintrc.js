module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "semi": "off",
    "no-console": "off",
    "quotes": ["off", "double"],
    "comma-dangle": "off",
    "no-trailing-spaces": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/order-in-components": "off",
    "vue/require-default-prop": "off"
  }
}

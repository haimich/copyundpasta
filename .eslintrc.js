module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'vue',
  ],
  parserOptions: {},
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
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
    "vue/require-default-prop": "off",
    '@typescript-eslint/no-unused-vars': "error",
    "vue/html-self-closing": "off",
    "indent": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "object-shorthand": "off",
    "no-unused-vars": "off",
    "padded-blocks": "off",
    "no-multiple-empty-lines": "off",
    "spaced-comment": "off",
    "prefer-const": "off",
    "object-curly-spacing": "off",
    "eol-last": "off",
    "vue/singleline-html-element-content-newline": "off",
    "import/no-duplicates": "off",
    "no-useless-return": "off",
    "no-irregular-whitespace": "off",
    "vue/attributes-order": "off",
    "vue/no-v-html": "off",
    "vue/attribute-hyphenation": "off",
    "import/order": "off",
    "space-unary-ops": "off",
    "quote-props": "off",
    "space-before-function-paren": "off",
    "arrow-parens": "off"
  }
}

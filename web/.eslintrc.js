module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/no-named-as-default': 0,
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': 0,
    'vue/no-v-html': 'off'
  }
}

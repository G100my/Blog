module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'no-console': process.env.NODE_MODE === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_MODE === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/valid-template-root': 'warn',
  },
}

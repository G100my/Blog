module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
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

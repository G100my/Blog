module.exports = {
  // jit mode 無法正常。
  // mode: 'jit',
  purge: {
    content: ['./docs/.vuepress/*.vue', './docs/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
    float: false,
    accessibility: false,
    clear: false,
    tableLayout: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./docs/.vuepress/*.vue', './docs/**/*.vue', './src/**/*.vue'],
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

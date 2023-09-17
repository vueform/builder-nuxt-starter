/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './vueform.config.js',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    './node_modules/@vueform/builder/**/*.js',
    './node_modules/@vueform/builder/**/*.css',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('@vueform/vueform/tailwind'),
    require('@vueform/builder/tailwind'),
  ],
}
// vueform.config.js

import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'
import builder from '@vueform/builder/plugin'

export default defineConfig({
  theme: tailwind,
  locales: { en },
  locale: 'en',
  apiKey: 'YOUR_API_KEY',
  plugins: [
    builder,
  ],
})
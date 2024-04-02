// vueform.config.js

import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/dist/tailwind'
import builder from '@vueform/builder/plugin'

export default {
  theme: tailwind,
  locales: { en },
  locale: 'en',
  apiKey: 'YOUR_API_KEY',
  plugins: [
    builder,
  ],
}
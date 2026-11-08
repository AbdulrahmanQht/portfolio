import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://abdulrahmanqht.pages.dev',
  output: 'static',
  i18n: { defaultLocale: 'en', locales: ['en', 'ar'], routing: 'manual' },
  integrations: [tailwind()]
});

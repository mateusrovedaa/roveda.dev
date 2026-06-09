// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://roveeb.com',
  // Inlina CSS no HTML — remove os requests render-blocking de CSS no critical path
  build: { inlineStylesheets: 'always' },
  integrations: [pagefind(), sitemap()],
});

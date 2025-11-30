import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://opinioneselectronicas.com',
  integrations: [sitemap()],
  adapter: netlify({
    edgeMiddleware: false,
    imageCDN: false
  }),
  build: {
    format: 'directory'
  }
});

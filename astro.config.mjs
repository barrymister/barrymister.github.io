import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://barrymister.com',
  outDir: './docs',  // GitHub Pages will serve from /docs
  integrations: [tailwind(), mdx()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});

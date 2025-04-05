import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://barrymister.com',
  integrations: [tailwind(), mdx()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});

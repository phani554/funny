import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://yourusername.github.io',
  base: '/cyber-scavenger-hunt',
  trailingSlash: 'always',
});

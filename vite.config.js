import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const getPort = () => {
  const port = process.env.PORT
  if (port) {
    return Number(port)
  }
  return 4000;
}

const config = defineConfig({
  server: {
    port: getPort(),
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    })
  ],

  optimizeDeps: {
    exclude: ['svelte-navigator'],
  },
});

export default config;

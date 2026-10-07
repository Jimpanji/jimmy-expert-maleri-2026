// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ['alien-roulette-surgeon-burn.trycloudflare.com']
    }
  }
});

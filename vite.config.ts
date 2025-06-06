// vite.config.ts
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // No args here
    reactRouter(),
    tsconfigPaths(),
    tailwindcss()
  ],
  root: '.',
  publicDir: 'public',
});

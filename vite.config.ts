// vite.config.ts
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    // No args here
    reactRouter(),
    tsconfigPaths(),
  ],
  root: '.',
  publicDir: 'public',
});

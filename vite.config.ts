import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'payday2-bigoil',
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});

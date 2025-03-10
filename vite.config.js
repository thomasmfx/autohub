import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  test: {
    setupFiles: './tests/setup.js',
    environment: 'jsdom',
  },
  plugins: [react()],
});

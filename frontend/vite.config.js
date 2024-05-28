import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: false,
      failOnError: false
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    },
  // To automatically open the app in the browser whenever the server starts,
  // uncomment the following lines:
  // server: {
  //   open: true
   },
   build: {
    outDir: '../public',
    emptyOutDir: true
    }
}));

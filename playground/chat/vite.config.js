import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Root directory for Vite
  server: {
    port: 3000, // Port for the development server
  },
});

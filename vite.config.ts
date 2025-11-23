import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Project uses a `Public` directory (capital P). Vite defaults to `public` (lowercase)
  // On case-sensitive build environments this causes 404s for static assets.
  // Point Vite to the existing folder so assets are included in the production build.
  publicDir: 'Public',
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'swiper'],
          utils: ['@faker-js/faker', 'class-variance-authority', 'clsx', 'tailwind-merge']
        }
      }
    }
  },
  
  base: '/',
});
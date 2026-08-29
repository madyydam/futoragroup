import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei', 'maath'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['lucide-react', 'cmdk', '@emailjs/browser']
        }
      }
    }
  }
});

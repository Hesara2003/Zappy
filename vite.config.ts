import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      // Enable minification
      minify: 'esbuild',
      cssMinify: true,
      // Chunk splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Core React vendor chunk (changes rarely)
            'vendor-react': ['react', 'react-dom'],
            // Router chunk
            'vendor-router': ['react-router-dom'],
            // Icons chunk (lucide-react is large)
            'vendor-icons': ['lucide-react'],
          }
        }
      },
      // Target modern browsers for smaller bundle
      target: 'es2020',
      // Generate source maps for debugging
      sourcemap: false,
    }
  };
});

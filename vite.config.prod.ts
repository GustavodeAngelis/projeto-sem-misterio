import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Configuração otimizada para produção
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Chunks otimizados para produção
          vendor: ['react', 'react-dom'],
          ui: [
            '@radix-ui/react-slot', 
            '@radix-ui/react-toast', 
            '@radix-ui/react-tooltip',
            'lucide-react'
          ],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          router: ['react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge']
        },
        // Nomes de arquivos otimizados
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
      // Tree shaking agressivo
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    // Otimizações de build
    chunkSizeWarningLimit: 300,
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true
      },
      mangle: {
        toplevel: true,
        safari10: true
      }
    },
    // Otimizações de CSS
    cssTarget: 'esnext'
  },
  // Otimizações de dependências
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [
      '@radix-ui/react-accordion', 
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group'
    ]
  }
});

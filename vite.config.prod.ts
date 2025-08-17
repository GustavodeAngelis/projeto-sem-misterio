import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Configuração otimizada para produção - mais segura
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
          // Chunks simplificados e seguros
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-toast', 'lucide-react'],
        },
        // Nomes de arquivos otimizados
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
      // Tree shaking mais conservador
      treeshake: {
        moduleSideEffects: true,
        propertyReadSideEffects: true,
        unknownGlobalSideEffects: true
      }
    },
    // Configurações de build mais conservadoras
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 1
      },
      mangle: {
        toplevel: false,
        safari10: false
      }
    },
    // Otimizações de CSS
    cssTarget: 'esnext'
  },
  // Otimizações de dependências mais seguras
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: []
  }
});

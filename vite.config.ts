import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Chunks simplificados e seguros
        manualChunks: {
          // Vendor chunk principal para React
          vendor: ['react', 'react-dom'],
          // UI components essenciais
          ui: ['@radix-ui/react-slot', '@radix-ui/react-toast', 'lucide-react'],
        },
        // Nomes de arquivos otimizados
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
      // Tree shaking mais conservador
      treeshake: {
        moduleSideEffects: true, // Mais seguro
        propertyReadSideEffects: true, // Preserva propriedades
        unknownGlobalSideEffects: true // Preserva globais
      }
    },
    // Configurações de build mais conservadoras
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'], // Menos agressivo
        passes: 1 // Apenas uma passada
      },
      mangle: {
        toplevel: false, // Mais seguro
        safari10: false
      }
    },
    // Otimizações de CSS
    cssTarget: 'esnext'
  },
  // Otimizações de desenvolvimento mais seguras
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [] // Não excluir nada por enquanto
  }
}));
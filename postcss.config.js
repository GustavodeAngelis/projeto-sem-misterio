export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Otimizações de performance mais seguras
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: false, // Preservar comentários importantes
          },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: false, // Mais seguro
        }]
      }
    } : {})
  },
}

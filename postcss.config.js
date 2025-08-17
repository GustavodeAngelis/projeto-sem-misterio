export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Otimizações de performance
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: true,
        }]
      }
    } : {})
  },
}

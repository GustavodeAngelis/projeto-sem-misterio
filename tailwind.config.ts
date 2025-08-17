
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cores customizadas do projeto
        coral: "#FF6B4A",
        "coral-dark": "#E04A3F",
        offwhite: "#FAFAFA",
        textcolor: "#1A1A1A",
        graylight: "#E5E7EB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      // Otimizações de performance
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Reduzir valores de spacing para otimização
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
  // Otimizações de performance
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Reduzir variantes para otimização
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
} satisfies Config;

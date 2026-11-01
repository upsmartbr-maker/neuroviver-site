// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF8F5",
          sand: "#EFECE6",
          darkNavy: "#0B192C",
          navy: "#1E3E62",
          softBlue: "#2563EB",
          amber: "#D97706",
          amberLight: "#FEF3C7",
          coral: "#EA580C",
          sage: "#059669",
          sageLight: "#ECFDF5",
        },
        solucao: {
          tea: {
            DEFAULT: "#1D4ED8",
            light: "#EFF6FF",
            border: "#BFDBFE",
          },
          k12: {
            DEFAULT: "#EA580C",
            light: "#FFF7ED",
            border: "#FED7AA",
          },
          educadores: {
            DEFAULT: "#059669",
            light: "#ECFDF5",
            border: "#A7F3D0",
          },
          nr1: {
            DEFAULT: "#7C3AED",
            light: "#F5F3FF",
            border: "#DDD6FE",
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
        'box': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 25, 44, 0.05)',
        'elevated': '0 12px 32px -4px rgba(11, 25, 44, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;

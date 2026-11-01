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
          sand: "#F3EFEA",
          darkNavy: "#0F1E36",
          navy: "#1B3A60",
          softBlue: "#3B82F6",
          amber: "#D97706",
          amberLight: "#FEF3C7",
          coral: "#EA580C",
          sage: "#059669",
          sageLight: "#ECFDF5",
        },
      },
      borderRadius: {
        'pill': '9999px',
        'box': '1.25rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 30, 54, 0.06)',
        'elevated': '0 10px 30px -4px rgba(15, 30, 54, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fade: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        fall: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fallfall: {
          '0%': { transform: 'translateY(-150%)' },
          '10%': { transform: 'translateY(0)' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        fade: 'fade 1s forwards',
        fall: 'fall 1s forwards',
        fallfall: 'fallfall 7s forwards',
      }
    },
  },
  plugins: [],
};
export default config;

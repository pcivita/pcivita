import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          light: "#F4F9FC",
          dark: "#AADCEC",
        },
        text: {
          light: "#F4F9FC",
          sub: "#4D6899",
          dark: "#0F1B61",
        },
        purple: "#7F00E0",
      },
    },
  },
  plugins: [],
};
export default config;

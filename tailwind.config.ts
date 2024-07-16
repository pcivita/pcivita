import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ["CircularStd", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        background: {
          light: "#F4F9FC",
          dark: "#41916C",
          card: "#1C4332",
          black: "#081C14",
        },
        text: {
          light: "#FFFFF1",
          light_green: "#41916C",
          dark: "#081C14",
        },
        purple: "#7F00E0",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;

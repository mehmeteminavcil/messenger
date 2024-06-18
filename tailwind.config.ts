import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2489ff",
        green: "#02cf18",
        dark: "#292a25",
        bg: "#fafafa",
        gray: {
          1: "#f8f8f8",
          2: "#f5f5f5",
          3: "#acada8",
          4: "#464741",
        },
      },
      animation: {
        wiggle: "wiggle .4s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

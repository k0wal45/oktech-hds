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
        primary: "#ff9c1d",
        primarylight: "#ffb250",
        primarydark: "#e98300",
        secondary: "#0b1b47",
      },
    },
  },
  plugins: [],
};
export default config;

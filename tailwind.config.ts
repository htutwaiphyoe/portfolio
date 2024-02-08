import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#FEC857",
        dark: "#feb724",
        darker: "#EEA101",
      },
      white: "#ffffff",
      black: "#010101",
      gray: {
        lightest: "#f7f7f7",
        dark: "#f7f7f8",
        DEFAULT: "#ebebeb",
      },
    },
  },
  plugins: [],
};
export default config;

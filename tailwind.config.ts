import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#FEC857",
        dark: "#feb724",
        darker: "#EEA101",
        darkest: "#c38101",
      },
      green: {
        DEFAULT: "#3EDD50",
      },
      white: "#ffffff",
      black: "#010101",
      gray: {
        lightest: "#f7f7f8",
        light: "#e6e6e6",
        dark: "#5d5c5c",
        DEFAULT: "#c4c4c4",
      },
      purple: {
        DEFAULT: "#6D57E0",
        lighter: "#F5F3FD",
      },
    },
  },
  plugins: [],
};
export default config;

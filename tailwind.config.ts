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
        gradient: "linear-gradient(180deg, #FFF 0%, #F4F4F4 100%)",
        gradientII: "linear-gradient(180deg, #FFF 0%, #F4F4F4 100%)",
        gradientIII: "linear-gradient(180deg, #2F5478 0%, #22405C 100%)",
      },
      colors: {
        grey: "#F8F8F8",
        blue: "#10202E",
        blueII: '#294F74',
        blueIII: '#1D2939',
        blueIV: '#475467',
        light: "#98A2B3",
        whiteII: "#EDF2F5",
        greyII: '#F2F4F7',
        blackI: '#667085',
        blackII: '#344054'
      },
      screens: {
        xl: "1440px",
        xxl: "1920px",
      },
      boxShadow: {
        box1: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
        boxII: "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      },
    },
  },
  plugins: [],
};
export default config;

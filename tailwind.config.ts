import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        academy: {
          burgundy: "#a51f3d",
          blue: "#173d70",
          navy: "#12325f",
          red: "#b12040",
        },
      },
    },
  },
  plugins: [],
};

export default config;

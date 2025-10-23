import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        solarized: {
          dark: "#000000",
          dark2: "#073642",
          dark3: "#586e75",
          light: "#ffffff",
          light2: "#eee8d5",
          light3: "#93a1a1",
          yellow: "#b58900",
          orange: "#cb4b16",
          red: "#dc322f",
          magenta: "#d33682",
          violet: "#6c71c4",
          blue: "#268bd2",
          cyan: "#2aa198",
          green: "#859900",
        },
        // Deprecated - use solarized colors instead
      },
    },
  },
  plugins: [],
};
export default config;

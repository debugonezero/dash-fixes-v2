import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        solarized: {
          dark: "#002b36",
          dark2: "#073642",
          dark3: "#586e75",
          light: "#fdf6e3",
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
        lightOrange: {
          DEFAULT: "#FFF0E0",
          dark: "#FFE0C0",
        },
        textLight: "#E0E0E0",
        textDark: "#333333",
        textSubtleLight: "#808080",
        textSubtleDark: "#707070",
        accentBlue: "#00BFFF",
        accentGreen: "#32CD32",
        accentMagenta: "#FF00FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

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
          dark: "#1a1a1a",
          dark2: "#073642",
          dark3: "#586e75",
          light: "#f5f5f5",
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
        accentBlue: "#268bd2",
        accentGreen: "#859900",
        accentMagenta: "#d33682",
        textDark: "#073642",
        textLight: "#fdf6e3",
        textSubtleDark: "#586e75",
        textSubtleLight: "#93a1a1",
        "light-orange-dark": "#cb4b16",
        "dark-teal": "#002b36",
        "dark-teal-light": "#073642",
      },
    },
  },
  plugins: [],
};
export default config;

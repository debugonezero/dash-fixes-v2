"use client";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      suppressHydrationWarning
      className="w-10 h-10 rounded-full flex items-center justify-center border border-solarized-light3 dark:border-solarized-dark3 hover:bg-accentBlue/10 transition-colors"
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;

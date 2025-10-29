"use client";

import Link from "next/link";
import { Wrench, Phone, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDarkMode = savedTheme === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 glassmorphism-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-solarized-blue flex items-center justify-center">
            <Wrench className="text-solarized-light" size={20} />
          </div>
          <h1 className="text-2xl font-heading font-bold dark:text-solarized-light">
            <span className="gradient-text">Dash Fixes</span>
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/about"
            className="font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            Services
          </Link>
          <Link
            href="/mail-in-repair"
            className="font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            Mail-in Repair
          </Link>
          <Link
            href="/faq"
            className="font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            FAQ
          </Link>
          <Link
            href="/donate"
            className="font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className="font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="tel:626-622-0196"
            className="hidden md:flex items-center font-medium hover:text-solarized-blue transition dark:text-solarized-light dark:hover:text-solarized-light"
          >
            <Phone className="w-4 h-4 mr-2" size={16} />
            (626) 622-0196
          </a>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-solarized-light3 dark:border-solarized-dark3 hover:bg-solarized-blue/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link
            href="/contact"
            className="hidden md:block px-4 py-2 bg-solarized-blue text-solarized-light rounded-lg font-medium hover:bg-opacity-90 transition dark:text-solarized-light"
          >
            Get Help Now
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition dark:text-solarized-light"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition dark:text-solarized-light"
          >
            Services
          </Link>
          <Link
            href="/mail-in-repair"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition dark:text-solarized-light"
          >
            Mail-in Repair
          </Link>
          <Link
            href="/faq"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition dark:text-solarized-light"
          >
            FAQ
          </Link>
          <Link
            href="/donate"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition dark:text-solarized-light"
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-solarized-light2 dark:hover:bg-solarized-dark2 transition dark:text-solarized-light"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Wrench, PhoneOutgoing, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/mail-in-repair", label: "Mail-In Repair" },
    { href: "/faq", label: "FAQ" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 glassmorphism-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-accentBlue flex items-center justify-center">
            <Wrench className="text-white" size={20} />
          </div>
          <h1 className="text-2xl font-heading font-bold">
            <span className="gradient-text">Dash Fixes</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 rounded-md font-medium hover:bg-accentBlue/10 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:626-622-0196" className="hidden lg:flex items-center font-medium hover:text-accentBlue transition-colors">
            <PhoneOutgoing className="w-4 h-4 mr-2" />
            (626) 622-0196
          </a>
          <Link href="/contact" className="hidden md:block px-4 py-2 bg-accentBlue text-textDark rounded-lg font-medium hover:bg-opacity-90 transition-all">
            Get Help Now
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu" 
            className="md:hidden p-2 rounded-md hover:bg-accentBlue/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lightOrange-dark transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="tel:626-622-0196" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-lightOrange-dark transition-colors">
              (626) 622-0196
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
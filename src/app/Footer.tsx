import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-darkTeal-light text-textLight">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-heading">
          &copy; 2025 Dash Fixes | Crafted with love{" "}
          <span className="text-accentMagenta">❤️</span> by your local Tech
          Alchemist! 🧪
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.youtube.com/@DashFixes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
            aria-label="Visit our YouTube channel"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/dash.fixes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61580755575702"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@dashfixes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accentBlue"
            aria-label="Visit our TikTok page"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

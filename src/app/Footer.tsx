const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-solarized-dark3 text-solarized-light">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-heading">
          &copy; 2025 Dash Fixes | Crafted with love{" "}
          <span className="text-solarized-red">❤️</span> by your local Tech
          Alchemist! 🧪
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.youtube.com/@DashFixes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-solarized-blue"
            aria-label="Visit our YouTube channel"
          >
            <i className="fa-brands fa-youtube w-6 h-6"></i>
          </a>
          <a
            href="https://www.instagram.com/dash.fixes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-solarized-blue"
            aria-label="Visit our Instagram page"
          >
            <i className="fa-brands fa-instagram w-6 h-6"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61580755575702"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-solarized-blue"
            aria-label="Visit our Facebook page"
          >
            <i className="fa-brands fa-facebook w-6 h-6"></i>
          </a>
          <a
            href="https://www.tiktok.com/@dashfixes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-solarized-blue"
            aria-label="Visit our TikTok page"
          >
            <i className="fa-brands fa-tiktok w-6 h-6"></i>
          </a>
          <a
            href="https://www.yelp.com/biz/dash-fixes-pasadena"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-solarized-blue"
            aria-label="Visit our Yelp page"
          >
            <i className="fa-brands fa-yelp w-6 h-6"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

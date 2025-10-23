'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-consent');
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-solarized-light dark:bg-solarized-dark2 border-t border-solarized-light3 dark:border-solarized-dark3 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-solarized-blue mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="text-solarized-dark3 dark:text-solarized-light3 mb-2">
                <strong>Cookies & Privacy</strong>
              </p>
              <p className="text-solarized-dark3 dark:text-solarized-light3 mb-3">
                We use essential cookies to ensure our website functions properly and to process your repair requests securely.
                We do not use tracking or analytics cookies.
              </p>
              <p className="text-solarized-dark3 dark:text-solarized-light3 text-xs">
                By continuing to use our site, you agree to our use of essential cookies.
                <a
                  href="/privacy"
                  className="text-solarized-blue hover:text-solarized-blue/80 underline ml-1"
                >
                  Learn more about our privacy policy
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-3 py-1.5 text-xs text-solarized-dark3 dark:text-solarized-light3 hover:text-solarized-dark dark:hover:text-solarized-light border border-solarized-light3 dark:border-solarized-dark3 rounded-md hover:bg-solarized-light2 dark:hover:bg-solarized-dark transition"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-3 py-1.5 text-xs bg-solarized-blue text-solarized-light rounded-md hover:bg-solarized-blue/90 transition"
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-solarized-dark3 dark:text-solarized-light3 hover:text-solarized-dark dark:hover:text-solarized-light transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
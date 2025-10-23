import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "Dash Fixes | Campus Tech Repairs",
  description:
    "Your trusted campus expert for fast, affordable repairs on iPhones, MacBooks, and game consoles. Serving PCC, Caltech, and Pasadena with on-campus pickup and nationwide mail-in service. Get your free quote from the Tech Alchemist today!",
  other: {
    "robots": "index, follow",
    "googlebot": "index, follow",
    "bingbot": "index, follow",
  },
  openGraph: {
    title: "Dash Fixes | Campus Tech Repairs",
    description: "Expert tech repair services for iPhones, MacBooks, and game consoles. On-campus pickup in Pasadena and nationwide mail-in service.",
    url: "https://www.dashfixes.com",
    siteName: "Dash Fixes",
    type: "website",
    images: [
      {
        url: "/graphics/logo.svg",
        width: 1200,
        height: 630,
        alt: "Dash Fixes Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash Fixes | Campus Tech Repairs",
    description: "Expert tech repair services for iPhones, MacBooks, and game consoles. On-campus pickup in Pasadena and nationwide mail-in service.",
    images: ["/graphics/logo.svg"],
  },
  alternates: {
    canonical: "https://www.dashfixes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dash Fixes",
    "url": "https://www.dashfixes.com",
    "logo": "https://www.dashfixes.com/graphics/logo.svg",
    "description": "Expert tech repair services for iPhones, MacBooks, and game consoles. Serving PCC, Caltech, and Pasadena with on-campus pickup and nationwide mail-in service.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pasadena",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-626-622-0196",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.yelp.com/biz/dash-fixes-pasadena"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dash Fixes",
    "url": "https://www.dashfixes.com",
    "description": "Campus tech repair services for iPhones, MacBooks, and game consoles",
    "publisher": {
      "@type": "Organization",
      "name": "Dash Fixes"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.dashfixes.com/services",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-solarized-light text-solarized-dark dark:bg-solarized-dark dark:text-solarized-light font-sans transition-colors duration-300 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WTJ1VLTLF2"
        ></Script>
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WTJ1VLTLF2');
          `}
        </Script>
      </body>
    </html>
  );
}

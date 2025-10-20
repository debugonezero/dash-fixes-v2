import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import AnimationWrapper from "./AnimationWrapper";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dash Fixes | Campus Tech Repairs",
  description:
    "Your trusted campus expert for fast, affordable repairs on iPhones, MacBooks, and game consoles. Serving PCC, Caltech, and Pasadena with on-campus pickup and nationwide mail-in service. Get your free quote from the Tech Alchemist today!",
  other: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans transition-colors duration-300 antialiased`}
      >
        <div className="bg-white text-textDark">
          <Header />
          <main><AnimationWrapper>{children}</AnimationWrapper></main>
          <Footer />
        </div>
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

import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import Quality from "./Quality";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Dash Fixes | Expert Tech Repairs in Pasadena",
  description:
    "Expert iPhone, MacBook, and gaming console repairs in Pasadena. On-campus service at PCC & Caltech. Nationwide mail-in repairs with free shipping and insured return. Get your free quote today!",
  keywords: "iPhone repair Pasadena, MacBook repair, laptop repair, game console repair, phone repair, tech repair California, PCC tech support, Caltech repairs, mail-in repair, affordable tech repair, Pasadena CA, Samsung repair, Google Pixel repair",
  openGraph: {
    title: "Dash Fixes | Expert Tech Repairs in Pasadena",
    description: "Professional iPhone, MacBook, and gaming console repairs. On-campus service at PCC & Caltech. Nationwide mail-in repairs with free shipping.",
    url: "https://www.dashfixes.com",
    siteName: "Dash Fixes",
    type: "website",
    images: [
      {
        url: "/graphics/hero-image-large.webp",
        width: 1200,
        height: 630,
        alt: "Dash Fixes - Expert Tech Repairs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash Fixes | Expert Tech Repairs in Pasadena",
    description: "Professional iPhone, MacBook, and gaming console repairs. On-campus service at PCC & Caltech.",
    images: ["/graphics/hero-image-large.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dash Fixes",
  "image": "https://www.dashfixes.com/graphics/logo.svg",
  "description": "Expert tech repair services for iPhones, MacBooks, laptops, and gaming consoles. Serving Pasadena, PCC, and Caltech with on-campus pickup and nationwide mail-in service.",
  "url": "https://www.dashfixes.com",
  "telephone": "+1-626-622-0196",
  "email": "contact@dashfixes.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pasadena",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.1478,
    "longitude": -118.1445
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card",
  "currenciesAccepted": "USD",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tech Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "iPhone Repair",
          "description": "Screen replacement, battery replacement, charging port repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MacBook Repair",
          "description": "Hardware repair, software issues, component replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gaming Console Repair",
          "description": "PS5, Xbox, Nintendo Switch repair services"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.yelp.com/biz/dash-fixes-pasadena"
  ]
};

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Hero />
      <Services />
      <Process />
      <Quality />
      <Testimonials />
      <Pricing />
      <FAQ />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-solarized-light">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-xl text-solarized-light2 mb-8">
            Join hundreds of satisfied customers who trust Dash Fixes with their tech repairs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/mail-in-repair">
              <button className="px-8 py-4 bg-solarized-light text-solarized-blue rounded-lg font-semibold text-lg text-center hover:bg-solarized-light2 transition">
                Start Mail-in Repair
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-solarized-light text-solarized-light rounded-lg font-semibold text-lg text-center hover:bg-solarized-light hover:text-solarized-blue transition">
                In-Person Service
              </button>
            </Link>
            <Link href="/track">
              <button className="px-8 py-4 border-2 border-solarized-light text-solarized-light rounded-lg font-semibold text-lg text-center hover:bg-solarized-light hover:text-solarized-blue transition">
                Track Repair
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

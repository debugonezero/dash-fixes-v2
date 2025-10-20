# Full Migration Plan: Dash Fixes Website v2

This document combines the project vision, website structure blueprint, and initial setup steps into a single, unified guide to rebuild the Dash Fixes website from scratch using Next.js and Tailwind CSS.

## 1. Project Vision

### Core Technologies

-   **Framework:** Next.js (for React-based, server-rendered application)
-   **Styling:** Tailwind CSS (for a utility-first, highly customizable design)
-   **Deployment:** Vercel (or similar modern hosting platform)

### Design Philosophy

Our goal is a clean, modern, and trustworthy design that makes it incredibly easy for a stressed-out student with a broken device to get help. We will use the **Solarized color palette** as our foundation, applied in a professional and tech-savvy manner. The site will incorporate subtle, polished animations to feel dynamic and engaging without being distracting.

---

## 2. Proposed Website Structure (Blueprint)

1.  **Hero Section:**
    *   **Headline:** A powerful, reassuring headline.
    *   **Primary Call-to-Action:** A prominent "Get a Free Quote" button that smoothly scrolls to the contact form.

2.  **"Why Dash Fixes?" Trust Bar:**
    *   A compact section below the hero with three key value propositions, each with an icon:
        *   Fast & Convenient
        *   Affordable Prices
        *   Expert Quality

3.  **Our Services Section:**
    *   Interactive cards for each main category: Phones, Laptops, Game Consoles, and a "Something Else?" card for custom inquiries.
    *   Subtle hover effects to reveal more details or add a visual glow.

4.  **Our Simple 4-Step Process Section:**
    *   A clear, visual timeline illustrating the repair process:
        *   Step 1: Get a Quote
        *   Step 2: Drop Off or Mail It In
        *   Step 3: We Repair
        *   Step 4: Device Returned!

5.  **Mail-In Repair & Donations Section:**
    *   A dedicated, clean section explaining the mail-in process and the donation program, with clear calls-to-action for each.

6.  **Testimonials Section:**
    *   A scrolling or grid-based display of customer reviews to build social proof and trust.

7.  **FAQ Section:**
    *   An accordion-style FAQ to cleanly answer common questions about part quality, repair times, and Apple's serialization messages.

8.  **Contact & Quote Form:**
    *   A simple, user-friendly form that serves as the central point for all service inquiries.

---

## 3. Initial Project Setup

Follow these steps to configure the new Next.js project.

### Step 3.1: Update Tailwind Configuration

Copy the code below and paste it into `/Users/admin/dash_fixes/dash-fixes-app/tailwind.config.ts`, completely replacing the existing content.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        solarized: {
            dark: '#002b36',
            dark2: '#073642',
            dark3: '#586e75',
            light: '#fdf6e3',
            light2: '#eee8d5',
            light3: '#93a1a1',
            yellow: '#b58900',
            orange: '#cb4b16',
            red: '#dc322f',
            magenta: '#d33682',
            violet: '#6c71c4',
            blue: '#268bd2',
            cyan: '#2aa198',
            green: '#859900'
        }
      },
      fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
          heading: ['var(--font-space-grotesk)', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
```

### Step 2.2: Set Up Custom Fonts & External Libraries

Next.js has a built-in system for optimizing fonts. We'll also add links for Font Awesome (icons) and AOS (animations) here.

Copy the code below and paste it into `/Users/admin/dash_fixes/dash-fixes-app/app/layout.tsx`, completely replacing the existing content.

```typescript
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import AnimationWrapper from "./AnimationWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: "Dash Fixes | Campus Tech Repairs",
  description: "Your trusted campus expert for fast, affordable repairs on iPhones, MacBooks, and game consoles. Serving PCC, Caltech, and Pasadena with on-campus pickup and nationwide mail-in service. Get your free quote from the Tech Alchemist today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnFMfV7oQPJkl9O4==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Header />
        <main><AnimationWrapper>{children}</AnimationWrapper></main>
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WTJ1VLTLF2"></Script>
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
```

### Step 3.3: Copy Image Assets

Run the following command in your terminal to copy the `graphics` folder from your old project into the `public` directory of your new project. The `public` folder in Next.js is where all static assets like images are stored.

*(Note: You will need to replace `/path/to/old/project/` with the actual path to your old project's assets.)*

```bash
cp -r /path/to/old/project/graphics /Users/admin/dash_fixes/dash-fixes-app/public/
```

cp -r /path/to/old/project/graphics /Users/admin/dash_fixes/dash-fixes-app/public/
```

### Step 3.4: Preview Your New Website

Once you have completed all the steps above, you can start the development server.


Once you have completed all the steps above, you can start the development server.

In your terminal, navigate to the new project's directory:

```bash
cd /Users/admin/dash_fixes/dash-fixes-app
```

Then, run the development server:

```bash
npm run dev
```

Open the URL it gives you (usually `http://localhost:3000`) in your browser. You should see a blank page, correctly configured and ready for development.

---


---

+## 4. Migration Checklist

Use this checklist to build the components and features for the site.


Use this checklist to build the components and features for the site.

### Foundational Components
-   [ ] **Header Component:** Create `Header.tsx` with navigation and theme toggle placeholders.
-   [ ] **Hero Section Component:** Create `Hero.tsx` with headline, sub-headline, and calls-to-action.
-   [ ] **"Why Dash Fixes?" Trust Bar:** Create `TrustBar.tsx` with key value propositions.
-   [ ] **Our Services Section:** Create `Services.tsx` with a grid of service cards.
-   [ ] **Our Simple 4-Step Process Section:** Create `Process.tsx` with a timeline layout.
-   [ ] **Mail-In Repair & Donations Section:** Create `MailAndDonations.tsx`.
-   [ ] **Testimonials Section:** Create `Testimonials.tsx` with star ratings and Yelp link.
-   [ ] **FAQ Section:** Create `Faq.tsx` with an interactive accordion.
-   [ ] **Contact & Quote Form:** Create `ContactForm.tsx` with Formspree integration.
-   [ ] **Pricing Section:** Create `Pricing.tsx` with pricing cards.
-   [ ] **Disclaimer Section:** Create `Disclaimer.tsx` with iPhone serialization notice.
-   [ ] **Part Quality Section:** Create `Quality.tsx` explaining screen quality tiers.
-   [ ] **Footer Component:** Create `Footer.tsx` with social media links.

### Polishing and Integration
-   [ ] **Icon Replacement:** Install `react-icons` and replace all placeholder icons.
-   [ ] **Theme Switching:** Install `next-themes` and implement dark/light mode toggle in the Header.
-   [x] **Mail-In Repair Page:** Create dedicated page at `/mail-in-repair`.
-   [ ] **Donation Page:** Create a dedicated page at `/donate`.
-   [ ] **Finalize Hero Section Content:** Copy `hero-image.webp` to `public` and implement the Next.js `<Image>` component.
-   [x] **Animation Library:** Replaced AOS with Framer Motion for improved performance and React compatibility.

---


---

+## 5. Future Features (Post-Launch Roadmap)

These features are planned for future development phases after the initial site is launched.


These features are planned for future development phases after the initial site is launched.

-   [ ] **Inventory & Pricing Integration:** Connect to a parts database for real-time quotes.
-   [ ] **Appointment Booking System:** Implement a calendar for scheduling local drop-offs.
-   [ ] **Mail-In Repair Tracking Portal:** Develop a customer portal to check repair status.
-   [ ] **E-commerce for DIY Parts:** Build a small store to sell common repair parts.
-   [ ] **Content Hub / Blog:** Add a blog for SEO and to establish expertise.

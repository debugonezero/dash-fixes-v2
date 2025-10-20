# Project Roadmap: Dash Fixes Website v2

This document outlines the development roadmap for migrating the Dash Fixes website to a new Next.js application. We will track our progress here.

## Phase 1: Foundational Components

- [x] **Header Component:** Create `Header.tsx` with navigation and theme toggle placeholders.
- [x] **Hero Section Component:** Create `Hero.tsx` with headline, sub-headline, and calls-to-action.
- [x] **"Why Dash Fixes?" Trust Bar:** Create `TrustBar.tsx` with key value propositions.
- [x] **Our Services Section:** Create `Services.tsx` with a grid of service cards.
- [x] **Our Simple 4-Step Process Section:** Create `Process.tsx` with a timeline layout.
- [x] **Mail-In Repair & Donations Section:** Logic implemented in `mail-in-repair/page.tsx` and `donate/page.tsx`.
- [x] **Testimonials Section:** Create `Testimonials.tsx` with star ratings and Yelp link.
- [x] **FAQ Section:** Create `Faq.tsx` with an interactive accordion.
- [x] **Contact & Quote Form:** Create `ContactForm.tsx` with Formspree integration.
- [x] **Pricing Section:** Create `Pricing.tsx` with pricing cards.
- [x] **Disclaimer Section:** Create `Disclaimer.tsx` with iPhone serialization notice.
- [x] **Part Quality Section:** Create `Quality.tsx` explaining screen quality tiers.
- [x] **Footer Component:** Create `Footer.tsx` with social media links.

## Phase 2: Polishing and Integration

- [x] **Icon Replacement:** Replaced Font Awesome with Lucide React icons.
- [ ] **Theme Switching:** Install `next-themes` and implement dark/light mode toggle in the Header.
- [x] **Mail-In Repair Page:** Create dedicated page at `/mail-in-repair`.
- [x] **Donation Page:** Create a dedicated page at `/donate`.
- [ ] **Finalize Hero Section Content:** Copy `hero-image.webp` to `public` and implement the Next.js `<Image>` component.
- [x] **Animation Library:** Replaced AOS with Framer Motion for improved performance and React compatibility.
- [ ] **UI/UX Refinement:** Ongoing process of applying new color palette and design system.

## Phase 3: Future Features (Post-Launch)

- [ ] **Inventory & Pricing Integration:** Connect to a parts database for real-time quotes.
- [ ] **Appointment Booking System:** Implement a calendar for scheduling local drop-offs.
- [ ] **Mail-In Repair Tracking Portal:** Develop a customer portal to check repair status.
- [ ] **E-commerce for DIY Parts:** Build a small store to sell common repair parts.
- [ ] **Content Hub / Blog:** Add a blog for SEO and to establish expertise.

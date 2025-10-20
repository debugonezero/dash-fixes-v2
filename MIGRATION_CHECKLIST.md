# Migration Checklist

This checklist tracks the migration of pages from the old static site to the new Next.js architecture, based on the `sitemap.xml`.

## Page Migration

- [x] **Homepage (`/`)**
  - [x] Header Component
  - [x] Footer Component
  - [x] Hero Section Component
  - [x] "Why Dash Fixes?" Trust Bar
  - [x] Our Services Section
  - [x] Our Simple 4-Step Process Section
  - [x] Testimonials Section
- [x] **About Page (`/about`)**
- [x] **Services Page (`/services`)**
- [x] **Phone Repairs Page (`/phone-repairs`)**
- [x] **Laptop Repairs Page (`/laptop-repairs`)**
- [x] **Game Console Repairs Page (`/game-console-repairs`)**
- [x] **Mail-In Repair Page (`/mail-in-repair`)**
- [x] **Contact Page (`/contact`)**
- [x] **FAQ Page (`/faq`)**
- [x] **Donate Page (`/donate`)**

## Polishing and Integration

- [ ] **Icon Replacement:** Install `react-icons` and replace all placeholder icons.
- [ ] **Theme Switching:** Install `next-themes` and implement dark/light mode toggle in the Header.
- [x] **Animation Library:** Replaced AOS with Framer Motion for improved performance and React compatibility.
- [ ] **Dynamic Sitemap:** Implement automatic sitemap generation.
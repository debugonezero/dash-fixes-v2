# Dash Fixes v2 - Tech Repair Website

A modern, AI-discoverable Next.js website for Dash Fixes, a professional tech repair service specializing in iPhones, MacBooks, and gaming consoles. Located in Pasadena, CA, serving PCC, Caltech, and nationwide clients.

## 🚀 Features

### Core Functionality
- **Mail-in Repair System**: Complete online repair request and payment processing
- **Service Tracking**: Real-time repair status updates with unique service numbers
- **Stripe Payment Integration**: Secure payment processing for repair services
- **Multi-device Support**: iPhones, MacBooks, laptops, and gaming consoles
- **Responsive Design**: Mobile-first design with dark/light theme support

### AI & SEO Optimization
- **Comprehensive JSON-LD Schema**: Organization, LocalBusiness, and Service structured data
- **Advanced Meta Tags**: Open Graph, Twitter Cards, and canonical URLs
- **Dynamic Sitemap**: Auto-generated sitemap with proper priorities
- **Robots.txt**: Optimized search engine crawling directives
- **Privacy Compliance**: GDPR/CCPA compliant with cookie consent

### User Experience
- **Progressive Web App**: Fast loading with optimized images
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Internationalization Ready**: Clean code structure for multi-language support
- **Performance Optimized**: Lighthouse score optimized

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.4**: React framework with App Router
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5.9.3**: Type-safe development
- **Tailwind CSS 3.4.18**: Utility-first CSS framework
- **Framer Motion 12.23.24**: Smooth animations and transitions

### Backend & APIs
- **Prisma 6.18.0**: Database ORM with type safety
- **Stripe 19.1.0**: Payment processing and webhooks
- **Formspree**: Contact form handling
- **Shippo Ready**: Shipping label integration (planned)

### Development Tools
- **ESLint 9.38.0**: Code linting and quality
- **PostCSS 8.5.6**: CSS processing
- **Autoprefixer 10.4.21**: CSS vendor prefixing

## 📁 Project Structure

```
dash-fixes-v2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── create-payment-intent/
│   │   │   └── webhooks/
│   │   │       └── stripe/
│   │   ├── components/        # Reusable components
│   │   │   ├── CookieConsent.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   └── RepairRequestForm.tsx
│   │   ├── lib/               # Utility libraries
│   │   │   ├── prisma.ts
│   │   │   ├── service-number.ts
│   │   │   └── stripe.ts
│   │   ├── [page]/            # Dynamic routes
│   │   │   └── track/[serviceNumber]/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── donate/
│   │   ├── faq/
│   │   ├── game-console-repairs/
│   │   ├── laptop-repairs/
│   │   ├── mail-in-repair/
│   │   ├── phone-repairs/
│   │   ├── privacy/
│   │   ├── services/
│   │   ├── track/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── middleware.ts
├── public/                    # Static assets
│   ├── graphics/
│   └── robots.txt
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🗄️ Database Schema

### ServiceRequest Model
```prisma
model ServiceRequest {
  id                String   @id @default(cuid())
  serviceNumber     String   @unique
  customerName      String?
  customerEmail     String
  deviceType        String?
  serviceType       String?
  issueDescription  String?
  shippingAddress   Json?
  paymentStatus     String   @default("pending")
  status            String   @default("PENDING")
  stripePaymentId   String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  completedAt       DateTime?
}
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database
- Stripe account

### Installation
```bash
# Clone the repository
git clone https://github.com/debugonezero/dash-fixes-v2.git
cd dash-fixes-v2

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Set up database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dashfixes"

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Formspree
FORMSPREE_ID=your_formspree_id

# Google Analytics (optional)
GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Cloudflare Pages
```bash
npm run build
# Upload the .next/static and public folders
```

## 🔍 SEO & AI Discoverability

### Structured Data Implementation
- **Organization Schema**: Business information and contact details
- **LocalBusiness Schema**: Location, hours, services, and ratings
- **Service Schemas**: Individual service offerings with descriptions
- **Website Schema**: Site structure and search functionality

### Meta Tags
- Comprehensive title and description tags
- Open Graph tags for social media sharing
- Twitter Card optimization
- Canonical URLs to prevent duplicate content

### Sitemap & Robots
- Dynamic sitemap generation with proper priorities
- Robots.txt with appropriate crawling directives
- XML sitemap submission ready

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals
- **LCP**: <2.5s
- **FID**: <100ms
- **CLS**: <0.1

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Build for production
npm run build

# Type checking
npm run type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary to Dash Fixes.

## 📞 Support

For support or questions:
- Email: contact@dashfixes.com
- Phone: (626) 622-0196
- Address: Pasadena, CA

## 🔄 Recent Updates

### v2.0.0 - Complete Website Overhaul
- ✅ AI-discoverable with comprehensive structured data
- ✅ Privacy policy and cookie consent implementation
- ✅ Enhanced mail-in repair flow
- ✅ Performance optimizations
- ✅ Mobile-first responsive design
- ✅ TypeScript migration completed
- ✅ Stripe payment integration
- ✅ Service tracking system

### Previous Versions
- v1.0.0: Initial HTML website (1K visits)
- v2.0.0: Complete Next.js rebuild with AI optimization

---

**Built with ❤️ for the Pasadena tech repair community**
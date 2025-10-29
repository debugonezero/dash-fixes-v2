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

### Backend & Database
- **Supabase**: PostgreSQL database with real-time capabilities
- **Stripe 19.1.0**: Payment processing and webhooks
- **Resend**: Email delivery service
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
│   │   │   ├── test-supabase/
│   │   │   ├── webhooks/
│   │   │   │   └── stripe/
│   │   │   └── test-email/
│   │   ├── components/        # Reusable components
│   │   │   ├── CookieConsent.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   ├── RepairRequestForm.tsx
│   │   │   └── ShippingLabelEmail.tsx
│   │   ├── lib/               # Utility libraries
│   │   │   ├── supabase.ts
│   │   │   ├── service-number.ts
│   │   │   ├── stripe.ts
│   │   │   ├── email.ts
│   │   │   ├── shipping-label.ts
│   │   │   └── shippo.ts
│   │   ├── [page]/            # Dynamic routes
│   │   │   └── track/[serviceNumber]/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── donate/
│   │   ├── faq/
│   │   ├── game-console-repairs/
│   │   ├── google-pixel-repair/
│   │   ├── iphone-repair/
│   │   ├── laptop-repairs/
│   │   ├── mail-in-repair/
│   │   ├── mail-in-thank-you/
│   │   ├── phone-repairs/
│   │   ├── privacy/
│   │   ├── samsung-galaxy-repair/
│   │   ├── services/
│   │   ├── thank-you/
│   │   ├── track/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   └── middleware.ts
├── public/                    # Static assets
│   ├── graphics/
│   └── robots.txt
├── supabase-migration.sql     # Database migration script
├── AGENTS.md                  # Agent guidelines
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🗄️ Database Schema

### Supabase Tables

#### Service Requests Table
```sql
CREATE TABLE service_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_number TEXT UNIQUE NOT NULL,
  status service_status DEFAULT 'PENDING',
  device_type TEXT,
  service_type TEXT,
  issue_description TEXT,
  customer_name TEXT,
  customer_email TEXT,
  shipping_address JSONB,
  payment_amount DECIMAL(10, 2),
  payment_status TEXT DEFAULT 'unpaid',
  stripe_payment_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);
```

#### Users Table
```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Service Status Enum
```sql
CREATE TYPE service_status AS ENUM (
  'PENDING',
  'PAID',
  'SHIPPED',
  'RECEIVED',
  'REPAIRING',
  'COMPLETED',
  'CANCELLED',
  'SHIPPING_LABEL_GENERATED',
  'PAID_SHIPPING_ERROR'
);
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
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

# Set up Supabase database
# 1. Create a new Supabase project at https://supabase.com
# 2. Go to SQL Editor in your Supabase dashboard
# 3. Run the contents of supabase-migration.sql

# Start development server
npm run dev
```

### Environment Variables
```env
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Stripe (required for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_STRIPE_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Resend (required for emails)
RESEND_API_KEY=re_YOUR_RESEND_API_KEY_HERE

# Shippo (required for shipping labels)
SHIPPO_API_KEY=shippo_test_YOUR_SHIPPO_TEST_API_KEY_HERE
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Cloudflare Deployment

#### Cloudflare Pages (Recommended)
```bash
npm i -g wrangler
wrangler pages deploy .next --compatibility-date 2024-01-01
```

#### Environment Variables Setup
In Cloudflare Pages dashboard → Your Project → Settings → Environment variables:

**🔓 Variables (Plain text - visible in build logs):**
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_YOUR_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
FROM_EMAIL = web@dashfixes.com
NEXT_PUBLIC_BASE_URL = https://www.dashfixes.com
```

**🔒 Secrets (Encrypted - not visible in build logs):**
```bash
STRIPE_SECRET_KEY = sk_live_YOUR_STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET = whsec_YOUR_WEBHOOK_SECRET
RESEND_API_KEY = re_YOUR_RESEND_API_KEY
SHIPPO_API_KEY = shippo_test_YOUR_SHIPPO_API_KEY
```

#### API Routes with Node.js Runtime
**Important**: Routes using Node.js runtime (PDF generation, webhooks) require special handling:

- Use Cloudflare Workers with Node.js compatibility for `/api/webhooks/stripe` and `/api/test-shipping-label`
- Or deploy these routes to a separate service that supports full Node.js runtime

**Benefits**: Global CDN, excellent performance, built-in security

### Database Hosting
- **Supabase**: Managed PostgreSQL with real-time features
- **Auto-scaling**: Handles traffic spikes automatically
- **99.9% uptime SLA**: Enterprise-grade reliability

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

### v2.1.0 - Supabase Migration & Enhanced Reliability
- ✅ **Database Migration**: Migrated from Neon + Prisma to Supabase
- ✅ **Real-time Features**: Live repair status updates for customers
- ✅ **Improved Reliability**: Eliminated deployment failures and edge runtime issues
- ✅ **Enhanced Performance**: 3x faster development cycle
- ✅ **Auto-scaling Database**: Enterprise-grade PostgreSQL with Supabase
- ✅ **Email Integration**: Professional shipping labels via Resend
- ✅ **Shipping Labels**: PDF generation with @react-pdf/renderer

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
- v2.1.0: Supabase migration with real-time capabilities

---

**Built with ❤️ for the Pasadena tech repair community**
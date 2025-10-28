# Pre-Deployment Testing Checklist

## 🚀 Quick Test Commands
```bash
# Development testing
npm run dev          # Test locally with hot reload
npm run build        # Verify production build
npm run start        # Test production server locally
npm run lint         # Check code quality

# Performance testing
npm run build && npm run start  # Full production test
```

## 📋 Manual Testing Checklist

### Core Functionality
- [ ] Homepage loads correctly
- [ ] Navigation menu works on all pages
- [ ] Dark/light theme toggle functions
- [ ] Responsive design on mobile/tablet/desktop
- [ ] All service pages load (phones, laptops, consoles)

### Mail-in Repair Flow
- [ ] Repair form displays all fields
- [ ] Form validation works (required fields)
- [ ] Form submission succeeds
- [ ] Thank you page displays after submission
- [ ] Email functionality works (test with real data)

### Payment Integration
- [ ] Stripe payment intent creation works
- [ ] Webhook endpoints respond correctly
- [ ] Payment flow completes successfully

### Tracking System
- [ ] Service tracking page loads
- [ ] Dynamic routes work (/track/[serviceNumber])
- [ ] Tracking displays correct status

### SEO & Performance
- [ ] Page titles and meta descriptions present
- [ ] Open Graph tags work (test with social media debugger)
- [ ] Sitemap generates correctly
- [ ] Robots.txt accessible

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG standards
- [ ] Alt text on all images

### Cross-Browser Testing
- [ ] Chrome/Chromium (primary)
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Error Handling
- [ ] 404 page displays for invalid routes
- [ ] Error boundaries catch JavaScript errors
- [ ] API errors handled gracefully
- [ ] Network failures don't crash the app

## 🔧 Environment Testing

### Development
```bash
npm run dev  # http://localhost:3000
```

### Production (Local)
```bash
npm run build && npm run start  # http://localhost:3000
```

### Staging (Recommended)
Deploy to Vercel/Netlify staging environment for final testing

## 📊 Performance Benchmarks

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

## 🧪 API Testing

### Stripe Webhooks
```bash
# Test webhook endpoint
curl -X POST http://localhost:3000/api/webhooks/stripe \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

### Email Testing
```bash
# Test email endpoint
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"to": "test@example.com", "subject": "Test"}'
```

## 🚨 Pre-Launch Checks

### Security
- [ ] Environment variables properly set
- [ ] No sensitive data in client-side code
- [ ] HTTPS enabled in production
- [ ] CORS properly configured

### Database
- [ ] Database connection works
- [ ] Migrations applied
- [ ] Seed data (if needed) loaded

### External Services
- [ ] Stripe keys configured
- [ ] Email service (Resend) working
- [ ] Shipping API (Shippo) configured
- [ ] Domain DNS configured

### Monitoring
- [ ] Error tracking set up (Sentry, etc.)
- [ ] Analytics configured (Google Analytics, etc.)
- [ ] Performance monitoring active

## 🎯 Go-Live Checklist

- [ ] All manual tests pass
- [ ] Performance benchmarks met
- [ ] Security audit completed
- [ ] Backup strategy in place
- [ ] Rollback plan documented
- [ ] Team notified of deployment
- [ ] Post-launch monitoring active

## 📞 Support Contacts

- **Emergency Rollback**: [Your contact info]
- **Technical Support**: [Your contact info]
- **Business Impact**: [Stakeholder contacts]

---

**Last Updated**: $(date)
**Tested By**: [Your name]
**Environment**: Development/Production
# Agent Guidelines for dash-fixes-v2

## Commands
- **Build**: `npm run build` (Next.js production build)
- **Lint**: `npm run lint` (ESLint with Next.js rules)
- **Dev**: `npm run dev` (Next.js dev server with Turbopack)
- **Start**: `npm run start` (Next.js production server)
- **Test**: No test framework configured yet

## Code Style
- **Framework**: Next.js 15 with React 19, TypeScript strict mode
- **Imports**: External libraries first, then relative imports with `@/` path alias
- **Components**: PascalCase, default export functions, `"use client"` directive for client components
- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Types**: Define interfaces for data structures, use explicit typing
- **Styling**: Tailwind CSS with Solarized color scheme (solarized-dark/light/blue/green/etc.)
- **Error Handling**: try/catch in async functions, proper error propagation
- **Comments**: JSDoc for exported functions, minimal inline comments
- **ESLint**: Extends next/core-web-vitals, disables: no-unescaped-entities, no-unused-vars, no-explicit-any, ban-ts-comment

## Project Structure
- `src/app/`: Next.js app router with pages and API routes
- `src/app/components/`: Reusable React components
- `src/app/lib/`: Utility functions and configurations
- `prisma/`: Database schema and migrations

## Shipping & Logistics

### Dynamic Shipping Labels
**Implementation**: Shipping labels automatically scale based on device category with 3 standardized sizes:
- **Cell Phones** (iPhone, Android, etc.): 4×6 inch labels, 6×4×2 inch boxes, 1 lb
- **Laptops/Tablets** (MacBook, iPad, etc.): 6×9 inch labels, 16×12×4 inch boxes, 3 lbs
- **Gaming Consoles** (PS4/5, Xbox, etc.): 8×11 inch labels, 18×14×8 inch boxes, 5 lbs

**Reasoning**:
- **Cost Optimization**: Right-sized packaging reduces shipping costs and material waste
- **Professional Standards**: Appropriate label sizes for each device category
- **Carrier Integration**: Dimensions ready for USPS/FedEx/UPS API integration
- **Scalability**: Easy to maintain 3 standardized box sizes vs. custom sizing per device

**Technical Details**:
- Smart device detection using keyword matching in device names
- Responsive label layout that scales fonts and positioning proportionally
- Package dimensions included for shipping cost calculations
- ✅ **Migrated from jsPDF to @react-pdf/renderer** for better React integration and maintainability
- Removed unused PDF libraries (`html2canvas`, `jsPDF`) - now using only `@react-pdf/renderer`
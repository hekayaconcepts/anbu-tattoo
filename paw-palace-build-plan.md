# 🐾 PAW PALACE PET GROOMING — WEBSITE BUILD PLAN

## MASTERPIECE BUILD PLAN
**Lead ID:** CA-2026-06-10-012  
**Business:** Paw Palace Pet Grooming  
**Location:** Canada  
**Maps:** https://maps.google.com/?cid=6059977217728605837  
**Pricing Tier:** Small business (custom quote)

---

## 1. HOW I APPROACHED EACH INSTRUCTION

### 1.1 Skill Adoption (ui-ux-agent)
I searched the ui-uv-agent databases across multiple domains:
- **Product type:** "pet grooming veterinary" → Found Veterinary Clinic and Pet Tech App categories
- **Style search:** "claymorphism soft UI" → Found 5 styles (Claymorphism, Neumorphism, Soft UI Evolution, Bento Grids, Dark Mode)
- **Color search:** "warm friendly pet" → Found 5 color palettes (Pet Tech App orange+blue, Recipe warm terracotta, etc.)
- **Landing page patterns:** "landing page hero CTA" → Found 5 patterns (Pricing, Storytelling, AI Personalization, Community)

### 1.2 Reference Website Analysis (wooof.com.au)
I approached the wooof.com.au website analysis in multiple ways since the site is JavaScript-rendered (Squarespace/Next.js):
- **HTML fetch** → Got the shell (204KB of JS-rendered content)
- **JSON-LD structured data** → Extracted business info: WOOOF Dog Grooming, Canberra/Sydney, natural/hydrospa treatments
- **Meta description** → "WOOOF is a premium dog grooming salon... natural products, no synthetic perfumes or chemicals"
- **H2 headings extracted:**
  - "Sydney Welcome Offer"
  - "Hey, you there. Your dog is stinky."
  - "Natural, healthy, happy dog grooming."
  - "New family member?"
  - "What WOOOF clients are saying"
  - "See our work"

**What I borrowed from wooof.com.au:**
- **Hero text approach:** The "Hey, you there. Your dog is stinky." line is conversational and attention-grabbing — I'll adapt this for Paw Palace's hero
- **Value proposition clarity:** "Natural, healthy, happy dog grooming" — short, benefit-driven
- **Social proof section:** "What clients are saying" — testimonials are critical for pet services
- **Visual gallery:** "See our work" — before/after grooming results

### 1.3 Lead Data
- Lead ID CA-2026-06-10-012 confirmed in the CA leads sheet (sheet ID: 17MZkOELXWdIhjDLS2bg6fAzgcVtkNbMWSz7GzlEf78)
- Google Maps CID: 6059977217728605837

### 1.4 Tool Stack (same as Anbu Tattoo)
- **Frontend:** Next.js 16 + React 19 + TypeScript
- **Styling:** Inline styles only (no Tailwind — per Anbu Tattoo learnings)
- **Hosting:** Vercel (Free tier → Pro at $20/mo when needed)
- **Email:** Resend API ($0 for first 100 emails/day)
- **Image storage:** Vercel Blob (public store, Montréal region)
- **Database:** Supabase (Free tier → Pro at $25/mo)
- **AI/Content:** Gemini API (free tier) + OpenRouter
- **Analytics:** Google Analytics 4 + Vercel Analytics
- **Version control:** GitHub (hekayaconcepts org)
- **Browser testing:** Browserless.io

---

## 2. SITE MAP

### Pages (7 total)
```
/
├── / (Home)
│   ├── Hero section
│   ├── Services preview
│   ├── About snippet
│   ├── Testimonials
│   ├── Gallery preview
│   └── CTA → /booking
├── /services (Services & Pricing)
│   ├── Service cards
│   ├── Pricing tiers
│   └── Add-ons section
├── /gallery (Before & After)
│   ├── Filter by breed/size
│   └── Masonry grid
├── /about (About Us)
│   ├── Story
│   ├── Team
│   └── Values (natural, gentle, safe)
├── /blog (Blog)
│   ├── Listing with excerpts
│   └── Single post template
├── /booking (Book Appointment)
│   ├── Form (name, email, pet info, service, date)
│   └── Calendly embed or date picker
└── /contact (Contact)
    ├── Contact info
    ├── Contact form
    └── Map embed
```

### Blog Categories (for SEO & ecom future)
- Pet grooming guides
- Breed-specific care tips
- Seasonal pet care
- Product reviews (future ecom)
- Customer stories

---

## 3. DESIGN SYSTEM — "Warm Claymorphism Bento"

### 3.1 Style Selection & Why

After searching the ui-ux-agent databases, I settled on a **hybrid style: "Warm Claymorphism Bento"** that combines:

**Primary: Claymorphism (adapted for web)**
- **Why:** The data shows Claymorphism is best for "educational apps, children's apps, SaaS platforms, creative tools, fun-focused" — pet grooming is fun-focused and family-oriented
- **Adaptation:** Instead of the mobile-only pastel clay, I'm adapting it for web with warmer tones
- **Key traits:** Soft 3D elements, rounded corners (16-20px), double shadows, tactile feel
- **But NOT pure claymorphism** — that can look immature. I'm keeping it sophisticated.

**Secondary: Soft UI Evolution**
- **Why:** The data shows it's the "evolved" version with better contrast (WCAG AA+), modern aesthetics, and accessibility focus — critical for a professional pet business
- **Key traits:** Improved shadows (softer than flat, clearer than pure neumorphism), better color hierarchy, 200-300ms animations

**Layout: Bento Grids**
- **Why:** "Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft" — perfect for showcasing multiple services, testimonials, and gallery items
- **Key traits:** CSS Grid, varied card spans (1x1, 2x1, 2x2), rounded corners (20-24px), soft backgrounds

**NOT chosen:**
- Pure Neumorphism: "Low contrast" warning — not accessible enough
- Dark Mode: Pet grooming should feel warm and inviting, not dark
- Brutalism: Too harsh for a pet business

### 3.2 Color Palette

**Source:** Pet Tech App palette from ui-ux-agent (Product Type: Pet Tech)
- **Primary:** #F97316 (Warm Orange) — playful, energetic, pet-friendly
- **On Primary:** #0F172A (Dark Navy) — text on orange buttons
- **Secondary:** #FB923C (Light Orange) — hover states, secondary buttons
- **Accent:** #2563EB (Trust Blue) — CTAs, links (builds trust)
- **Background:** #FFF7ED (Warm Cream) — not sterile white
- **Foreground:** #9A3412 (Rich Brown) — readable text
- **Card:** #FFFFFF (Clean White) — card backgrounds
- **Muted:** #F1F0F0 (Soft Grey) — borders, dividers
- **Border:** #FED7AA (Peach) — subtle borders
- **Success:** #10B981 (Green) — confirmations
- **Warning:** #F59E0B (Amber) — warnings
- **Destructive:** #DC2626 (Red) — errors

**Why this palette:**
- Orange = warmth, playfulness, energy (pet-friendly)
- Blue = trust, professionalism (critical for pet owners letting you near their animals)
- Cream background = not sterile, welcoming
- High contrast text (rich brown on cream) = WCAG AA+ compliant

### 3.3 Typography

**Headings:** Nunito Black (Google Fonts)
- **Why:** The Claymorphism (Mobile) data recommends "Nunito Black for headings" — it's rounded, friendly, and bold
- **Fallback:** Inter, system-ui

**Body:** DM Sans (Google Fonts)
- **Why:** Recommended alongside Nunito in the claymorphism data — clean, readable, modern
- **Fallback:** Inter, system-ui

**Accent/CTA:** Inter Bold
- **Why:** Consistent with Anbu Tattoo's tool stack — we know it works

### 3.4 Visual Language

**Photography style:** Warm, natural light, genuine moments (not stock-photo-perfect)
- Dogs mid-groom, before/after transformations
- Happy pet owners with their freshly groomed pets
- Clean, bright grooming studio environment
- Natural textures (wood, plants, soft fabrics)

**Illustration style:** Minimal, rounded, hand-drawn feel
- Paw prints as section dividers
- Subtle dog breed silhouettes
- Organic shapes (not geometric)

**Icon style:** Rounded line icons, 2px stroke, warm tones

---

## 4. PAGE-BY-PAGE BUILD PLAN

### 4.1 HOME PAGE (`/`)

**Hero Section:**
- **Layout:** Full-width background image (happy dog) with gradient overlay
- **Headline style (borrowed from wooof.com.au):** Conversational hero text
  - H1: "Your dog deserves to feel amazing."
  - Sub: "Premium pet grooming that's gentle on your pup and the planet."
- **CTA Button:** "Book Now" (Trust Blue #2563EB) + "Our Services" (outline)
- **Trust badges below CTA:** "All Natural Products" | "100% Satisfaction" | "Licensed Groomers"

**Services Bento Grid (Section 2):**
- 4 cards in Bento layout (2x2 grid on desktop, 1 column on mobile)
- Cards: "Full Grooming" | "Bath & Brush" | "Nail Trim" | "Spa Treatments"
- Each card: Icon + Title + Short description + "Learn More" link
- Claymorphism style: rounded 20px, double shadow, warm background

**About Snippet (Section 3):**
- 2-column layout: Image (groomer with dog) + Text
- "Meet the team" + story snippet
- CTA: "Learn More →"

**Testimonials (Section 4):**
- H2: "What Pet Parents Say" (borrowed from Wooof's "What WOOOF clients are saying")
- 3 testimonial cards in a row (carousel on mobile)
- Each: Quote + Owner name + Pet name + Star rating
- Claymorphism cards with warm cream background

**Gallery Preview (Section 5):**
- H2: "See Our Work"
- masonry grid of 6 before/after images
- Hover effect: subtle scale + shadow expansion
- CTA: "View Full Gallery →"

**Final CTA (Section 6):**
- Background: Trust Blue gradient
- "Ready for a happier, healthier pup?"
- CTA: "Book Your Appointment" (large, warm orange)

### 4.2 SERVICES PAGE (`/services`)

**Layout:** Hero banner → Service cards → Pricing → Add-ons

**Service Cards (Claymorphism Bento):**
- Full Grooming (bath, haircut, nails, ears, teeth)
- Bath & Brush (basic refresh)
- Nail Trim (quick service)
- Spa Treatment (hydrospa, aromatherapy)
- Puppy First Visit (gentle introduction)
- Senior Gentle Care (for older dogs)

**Pricing:** 
- Displayed per-service with starting prices
- "Book Now" button per service
- Note: "Final price depends on breed, size, and coat condition"

**Add-ons:**
- Teeth cleaning
- Flea treatment
- De-shedding
- Nail pawlish
- Bandana/bow

### 4.3 GALLERY PAGE (`/gallery`)

**Layout:** Filter bar → Masonry grid → Lightbox

**Filters:** All | Before & After | By Breed | By Service

**Masonry Grid:**
- CSS Grid with varied card sizes (Bento style)
- Hover: scale 1.02 + shadow expansion
- Click: lightbox with before/after slider

### 4.4 ABOUT PAGE (`/about`)

**Layout:** Story → Team → Values

**Story Section:**
- Brand story: Why Paw Palace exists
- "Founded with a simple belief: every dog deserves gentle, stress-free grooming"

**Team Section:**
- Groomer photos with bios
- Certifications and experience

**Values (Bento Grid):**
- "All Natural Products" — no harsh chemicals
- "Stress-Free Environment" — gentle handling
- "Every Dog Welcome" — all breeds, all sizes
- "Eco-Conscious" — sustainable practices

### 4.5 BLOG PAGE (`/blog`)

**Layout:** Category filter → Featured post → Post grid

**Blog Post Template:**
- Title, date, author, category
- Featured image
- Content (rich text)
- Share buttons
- Related posts
- CTA: "Book Your Appointment"

**Initial Blog Posts (SEO-focused):**
1. "10 Signs Your Dog Needs a Grooming Appointment"
2. "How Often Should You Groom Your Dog? A Breed-by-Breed Guide"
3. "Benefits of Natural Grooming Products for Your Pet"
4. "What to Expect at Your First Grooming Visit"
5. "Seasonal Pet Care: Summer Grooming Tips"

### 4.6 BOOKING PAGE (`/booking`)

**Layout:** Form + Booking Info sidebar

**Form Fields:**
- Owner Name (required)
- Email (required)
- Phone (required)
- Pet Name (required)
- Pet Breed (dropdown)
- Pet Size (Small/Medium/Large)
- Service (dropdown from services)
- Preferred Date (date picker)
- Special Notes (textarea)

**Booking Info sidebar:**
- Business hours
- Location
- CTA: "Call Us"

**Spam Protection:** honeypot field + basic validation

### 4.7 CONTACT PAGE (`/contact`)

**Layout:** Contact info + Form + Map

**Contact Info:**
- Address
- Phone
- Email
- Hours

**Contact Form:**
- Name, Email, Phone, Message

**Map:** Google Maps embed

---

## 5. CYBERSECURITY BEST PRACTICES

### 5.1 HTTPS & Headers
- Vercel provides HTTPS by default
- Security headers in `next.config.ts`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (restrictive)
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`

### 5.2 Form Security
- Honeypot spam protection (hidden field)
- Server-side validation on API route
- Rate limiting on booking form (Supabase)
- No sensitive data stored in plain text
- API route sanitizes all inputs before processing

### 5.3 Data Protection
- Form data sent to Resend for email notification
- No data stored unless user opts into newsletter
- Newsletter signup (future) via Supabase with consent
- Privacy policy page (GDPR/PIPEDA compliant)

### 5.4 Image Security
- Vercel Blob public store (for public assets only)
- No user-uploaded images stored without validation
- File type validation (jpg, png, webp only)
- 5MB size limit

### 5.5 Dependency Management
- Regular `npm audit` checks
- Dependabot enabled on GitHub
- No secrets in code (all env vars on Vercel)

---

## 6. IMAGES NEEDED (Stock Photos)

### Hero & Key Visuals (6 images)
1. Hero image: Happy dog being groomed (warm, natural light)
2. About section: Groomer with dog in studio
3. Services collateral: Close-up of grooming process
4. Before/after: Freshly groomed happy dog
5. Environment: Clean, bright grooming studio
6. Team: Groomer portrait

### Gallery (12 images)
- 6 before/after pairs (12 images total)
- Various breeds and sizes

### Blog (5 images)
- One per initial blog post
- Educational, lifestyle-oriented

### UI Elements (3 images)
- Logo (already exists — need file from client)
- Icon set (custom SVG — no stock needed)
- Texture/background pattern

**TOTAL: 26 images needed from stock photo sources**

**Recommended sources (free):**
- Unsplash (pet/dog images)
- Pexels (grooming studio)
- Custom photography (preferred for authenticity)

---

## 7. TOOL STACK

| Tool | Purpose | Cost |
|---|---|---|
| **Next.js 16** | Frontend framework | Free |
| **React 19** | UI library | Free |
| **TypeScript** | Type safety | Free |
| **Vercel** | Hosting + CDN | Free tier |
| **Resend** | Email notifications | Free (100/day) |
| **Vercel Blob** | Image storage | Free tier |
| **Supabase** | Database + auth | Free tier |
| **GitHub** | Version control | Free |
| **Gemini API** | AI content generation | Free tier |
| **Google Analytics 4** | Analytics | Free |
| **Vercel Analytics** | Performance monitoring | Free |
| **Google Maps Embed** | Location display | Free |
| **Browserless.io** | Browser testing | Existing subscription |
| **ui-ux-agent skill** | Design intelligence | Installed |

### Development Tools
- **Hermes Agent** (this assistant) — code generation, deployment, testing
- **Terminal** — git, npm, Vercel CLI
- **vision_analyze** — screenshot analysis

---

## 8. FUTURE ECOM INTEGRATION (Phase 2)

The site is architected to support future ecom:
- Blog categories include "Product reviews"
- Supabase schema supports product tables
- Vercel Blob can store product images
- Payment integration ready (PayPal/Stripe)

### Ecom Features (Future)
- Pet product store (shampoo, brushes, treats)
- Gift cards
- Membership/loyalty program
- Subscription boxes

---

## 9. RESPONSIVE DESIGN REQUIREMENTS

### Mobile (375px)
- Single column layout
- Hamburger menu
- Stacked Bento grid
- Full-width hero image
- Touch-friendly buttons (min 44px)
- Collapsible sections

### Tablet (768px)
- 2-column grid where appropriate
- Hamburger menu
- 2-column Bento grid
- Medium hero image

### Desktop (1024px+)
- Full grid layouts
- Horizontal navigation
- 3-4 column Bento grid
- Full hero section
- Hover effects enabled

---

## 10. BUILD SEQUENCE

1. Setup project (Next.js + Vercel + GitHub) — 10 min
2. Design system (CSS variables, fonts, components) — 30 min
3. Home page — 45 min
4. Services page — 30 min
5. Gallery page — 20 min
6. About page — 20 min
7. Blog (listing + 5 posts) — 45 min
8. Booking page — 30 min
9. Contact page — 15 min
10. SEO & meta tags — 15 min
11. Security headers — 10 min
12. Browser testing (Browserless.io) — 20 min
13. Deploy to Vercel — 5 min

**Total estimated build time: ~5-6 hours**

# Project Journal — Gwambo Digital Website Development Service

## Project Overview
- **Service:** Website Development for businesses without websites
- **Target:** Businesses with Google Profiles but no websites
- **Countries:** New Zealand (Phase 1), Canada (Phase 2), South Africa, Australia, Kenya
- **Pricing:** NZD 1,500 one-time / NZD 1,500 + NZD 665/month maintenance (varies by country)

---

## Deployment Info
- **Live URL:** https://anbu-tattoo.vercel.app
- **GitHub:** https://github.com/hekayaconcepts/anbu-tattoo
- **Vercel Project ID:** prj_eUQ74cmbVQx9GzxHyElOpHEFCS88
- **Vercel Token:** (set via Vercel CLI, stored in Vercel dashboard)
- **Deploy command:** `npx vercel --token=$VERCEL_TOKEN --prod --yes`

---

## Agent Build Phase

| # | Agent | Status | Location |
|---|---|---|---|
| 1 | **Scraper Agent** | ✅ Complete | `AGENTS/scraper-agent.md` |
| 2 | **Developer Agent** | ✅ Complete | `AGENTS/developer-agent.md` |
| 3 | **Outreach Agent** | ✅ Complete | `AGENTS/outreach-agent.md` |
| 4 | **PDF Generator Agent** | ✅ Complete | `AGENTS/pdf-generator-agent.md` |
| 5 | **Site Manager Agent** | ✅ Complete | `AGENTS/site-manager-agent.md` |

---

## Lead Tracking
- **NZ Leads:** 98 verified | **CA Leads:** 39 verified | **Total:** 137
- **NZ Sheet:** https://docs.google.com/spreadsheets/d/1IUbBYhmr7hf-AlRDQbGUTFu8dc-BQg2Sl7h57aba4Us/edit
- **CA Sheet:** https://docs.google.com/spreadsheets/d/17MZkOELXWdIhjDLS2bg6fAzgcVtkNbMWSz7GzlEf7N8/edit

---

## Sample Site: Anbu Tattoo Studio
- **Client:** Anbu Tattoo Studio, Toronto, Canada
- **Live URL:** https://anbu-tattoo.vercel.app
- **Pages:** Home, Portfolio, About, Services, Booking, Blog, Contact (all ✅)
- **Design:** Dark Cinematic Minimal — Black (#0A0A0A), Gold (#C8A97E), White
- **Fonts:** Playfair Display, Inter, Bebas Neue

---

## Project Timeline
- **June 14:** Project started, scraper built, 137 leads collected
- **June 15:** Anbu Tattoo site built and deployed, mobile fixes applied
- **Friday (June 20):** Build phase begins (Ethan & Moses onboarded)
- **Monday (June 23):** Outreach begins

---

## Team
- **Owner:** Gwambo Digital (hekayaconcepts@gmail.com)
- **Founders:** hekayaconcepts@gmail.com, moyosray@gmail.com, sharonkihu624@gmail.com
- **Developers:** Ethan + Moses (commission-based)
- **Primary email:** gwamboconsults@gmail.com

---

## Agent Build Phase

| # | Agent | Status | Location |
|---|---|---|---|
| 1 | **Scraper Agent** | ✅ Complete | `AGENTS/scraper-agent.md` — Scrapes businesses via Places API, verifies no website via web search, qualifies leads (rating, reviews, phone) |
| 2 | **Developer Agent** | ✅ Complete | `AGENTS/developer-agent.md` — Builds Next.js sites, deploys previews to Vercel (no domain needed), handles handover/maintenance |
| 3 | **Outreach Agent** | ✅ Complete | `AGENTS/outreach-agent.md` — Sends personalized emails at 9 AM local time, 3-email sequence, tracks replies |
| 4 | **PDF Generator Agent** | ✅ Complete | `AGENTS/pdf-generator-agent.md` — Generates PDF proposals with live preview screenshot |
| 5 | **Site Manager Agent** | ✅ Complete | `AGENTS/site-manager-agent.md` — Quarterly maintenance, blog posts, analytics |

---

## Lead Tracking

### New Zealand
- **Sheet:** https://docs.google.com/spreadsheets/d/1IUbBYhmr7hf-AlRDQbGUTFu8dc-BQg2Sl7h57aba4Us/edit
- **Leads:** 98 verified (after removing 21 false positives)
- **Top Categories:** Beauty salon, nail technician, makeup artist, driving instructor, personal trainer, dog groomer, music teacher, tutor, dietitian, event decorator

### Canada
- **Sheet:** https://docs.google.com/spreadsheets/d/17MZkOELXWdIhjDLS2bg6fAzgcVtkNbMWSz7GzlEf7N8/edit
- **Leads:** 39 verified
- **Top Categories:** Dog groomer (7), event decorator (7), tattoo artist (3), personal trainer (3), music teacher (3)

### Total: 136 leads across 2 countries

---

## Data Quality Fix (June 15, 2026)
- **Issue:** Places API only checks main `website` field. Businesses can have websites on booking platforms (Fresha, Wheree), directories (ServiceFinder, CompanyHub), and listing sites.
- **Discovery:** ALL 20 top NZ leads had hidden websites that Places API missed
- **Fix:** Added `verify_no_website()` function to scraper that uses Tavily web search to check for hidden websites before confirming a lead
- **Impact:** Removed 21 false positives from NZ sheet

---

## Sample Site Build: Anbu Tattoo Studio

### Client Details
- **Name:** Anbu Tattoo Studio
- **Location:** Toronto, Canada
- **Industry:** Tattoo artist
- **Instagram:** https://www.instagram.com/anbu.ink
- **GMB:** https://maps.google.com/?cid=6254460599440337687
- **Phone:** +1 (416) 533-0941

### Site Details
- **Live URL:** https://anbu-tattoo.vercel.app
- **GitHub:** https://github.com/hekayaconcepts/anbu-tattoo
- **Status:** LIVE ✅ (June 15, 2026)

### Pages (all verified working)
- `/` — Home with hero, featured work carousel, about preview, booking CTA
- `/portfolio` — Full portfolio gallery
- `/about` — Artist bio, studio story, stats
- `/services` — Services with pricing cards
- `/booking` — Booking form with file upload
- `/blog` — Blog listing with excerpts, "Read More" expands inline (client-side)
- `/contact` — Contact form, location, social links

### Design
- **Style:** Dark Cinematic Minimal
- **Colors:** Black (#0A0A0A), Gold accent (#C8A97E), White text
- **Fonts:** Playfair Display (headings), Inter (body), Bebas Neue (CTA)
- **Images:** 8 client images uploaded (logo, studio interior, artwork wall, storefront, tattoo work)

### Fixes Applied (June 15, 2026)
1. **Mobile carousel:** Added touch/swipe gesture support + arrow buttons + dot indicators to portfolio grid
2. **Blog excerpts:** Blog listing shows excerpt preview with "Read More" button that expands full post inline (replaced static blog sub-pages that Vercel couldn't route)
3. **Vercel deployment:** Changed blog from static sub-pages to client-side rendering to work with Vercel's routing

### Image Analysis
- **Logo:** Minimalist geometric triangle (white on black)
- **Studio aesthetic:** White walls, black furniture, art gallery vibe
- **Tattoo style:** Black ink, detailed, illustrative (floral + bold graphics)
- **Brand colors:** Black, white, confirmed gold accent from design doc

---

## What Happens Next

### Friday: Build Phase Begins
- Ethan and Moses onboarded as developers (commission-based)
- Developer agent will build preview sites for interested leads
- Each preview deployed to Vercel free tier (no domain needed)
- Preview URL included in outreach email

### Monday: Outreach Begins
- Outreach agent sends personalized emails to all 136 leads
- Email includes: business name, live preview link, pricing, calendar booking
- Sent at 9 AM each prospect's local timezone
- Follow-up sequence: Day 1, Day 4, Day 11
- Max 3 emails per prospect

### Team
- **Gwambo Digital** (hekayaconcepts@gmail.com) — Project owner
- **Founders:** hekayaconcepts@gmail.com, moyosray@gmail.com, sharonkihu624@gmail.com
- **Developers:** Ethan + Moses (commission-based, TBD)
- **Primary email:** gwamboconsults@gmail.com

---

## Lessons Learned
1. **Places API limitation:** `website` field doesn't include booking platforms/directories. Always verify with web search.
2. **Vercel static export:** Nested routes (like blog posts) don't work well with static export on Vercel. Use client-side rendering instead.
3. **Mobile UX:** Carousel needs touch/swipe + arrows + dots. Mobile users expect swipe gestures.
4. **Blog UX:** Excerpts with "Read More" is better UX than listing full posts.

---

## Pending Tasks
- [ ] Configure Vercel project settings (framework, build command, output dir)
- [ ] Set up custom domain for production sites
- [ ] Create email templates per category
- [ ] Outreach agent cron job setup
- [ ] Follow-up sequence automation

### June 15, 2026 — Mobile Fixes
- **Removed About section from home page** — Simplified to Hero + FeaturedWork + ServicesPreview + BookingCTA
- **Fixed mobile header** — Compact logo (ANBU text only), proper hamburger positioning, reduced padding (12px 16px)
- **Fixed mobile hero** — Separate mobile layout with single main image + text overlay, thumbnail strip below
- **Fixed FeaturedWork** — Single column on mobile (1fr), 2-col on tablet, 3-col on desktop
- **Removed carousel complexity** — Simple single-column stack on mobile, no swipe/arrows needed
- **All 7 pages verified live after Vercel redeployment**

### June 15, 2026 — Header & Hero Mobile Fix
- **Issue:** Hamburger menu appearing on left instead of right, header overlapping hero, horizontal overflow on mobile
- **Root cause:** Tailwind CSS classes (md:hidden, hidden md:flex) not working properly in Vercel deployment. The header and hero were sharing the same space.
- **Fix:** 
  - Completely rewrote Header with inline styles only (no Tailwind classes)
  - Hamburger on LEFT, logo CENTERED, spacer on RIGHT for balance
  - Added explicit 56px height to header
  - Added spacer div below header to push hero content down
  - Removed Tailwind visibility classes, using single responsive layout
  - Reduced mobile hero padding and font sizes to fit better
- **Verified:** All 7 pages working after redeployment

### June 15, 2026 — Mobile Header & Overflow Fix (Research-Based)
- **Researched mobile navigation patterns** using Tavily:
  - Hamburger menu: top-left OR top-right are both standard. Left aligns with reading patterns, right is thumb-friendly. Most common: logo LEFT, hamburger RIGHT.
  - Overflow prevention: `overflow-x: hidden` on body/html, use `width: 100%` not fixed widths, check for negative margins.
  - Header pattern: Logo on left, hamburger on right is the most standard pattern.
- **Fixed header:** Logo LEFT, hamburger RIGHT (standard pattern)
- **Fixed overflow:** Added `overflow-x: hidden` and `max-width: 100%` to html/body and all major elements
- **Fixed hero:** Reduced font sizes, added `overflow: hidden` wrapper, ensured all content fits within viewport
- **Sources:**
  - IxDF: ixdf.org/literature/article/hamburger-menu-ux
  - Justinmind: justinmind.com/ui-design/hamburger-menu
  - Figma: figma.com/resource-library/hamburger-menu
  - Stack Overflow: stackoverflow.com/questions/15086908 (overflow prevention)
  - Polypane: polypane.app/blog/strategies-for-dealing-with-horizontal-overflows
  - Chen Hui Jing: chenhuijing.com/blog/the-horizontal-overflow-problem

### June 15, 2026 — Final Deployment
- Connected GitHub repo to Vercel manually by user
- Removed output:"export" from next.config.ts (was conflicting with Vercel's Next.js build)
- Changed blog from static sub-pages to client-side rendered single page
- Blog listing shows excerpts with "Read More" button that expands inline
- All 7 pages verified returning 200 on Vercel
- Site live at: https://anbu-tattoo.vercel.app
- **Known issues:** None currently — all pages working
- **Next:** Friday build phase begins, Monday outreach begins

### June 15, 2026 — Legal Pages & Booking Fix
- **Privacy Policy** (`/privacy`): PIPEDA, Quebec Law 25, GDPR compliant. Covers data collection, usage, storage/security, user rights, CASL compliance.
- **Terms of Service** (`/terms`): Ontario law. Covers age/consent, bookings/deposits, health/safety, artwork ownership, liability, governing law.
- **Footer updated:** Mobile-first stack layout, quick links wrap on mobile, 3-column on desktop. Links to privacy/terms.
- **Booking page fixed:** Replaced `className="font-playfair"` with `style={{ fontFamily: 'var(--font-playfair)' }}` (inline style). Added demo console.log. File upload shows selected filename + size. Responsive grid: 1fr mobile, 1.2fr/0.8fr desktop.
- **Layout.tsx:** Added `export const viewport` for proper mobile scaling.
- **All 9 pages verified live** (Home, Portfolio, About, Services, Booking, Blog, Contact, Privacy, Terms)

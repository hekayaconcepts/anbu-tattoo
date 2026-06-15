# Project Journal — Gwambo Digital Website Development Service

## Project Overview
- **Service:** Website Development for businesses without websites
- **Target:** Businesses with Google Profiles but no websites
- **Countries:** New Zealand (Phase 1), Canada (Phase 2), South Africa, Australia, Kenya
- **Pricing:** NZD 1,500 one-time / NZD 1,500 + NZD 665/month maintenance (varies by country)

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

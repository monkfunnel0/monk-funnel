# Monk Funnel

**Performance marketing & website design agency — Delhi, India.**

We design and build conversion-focused websites for Indian startups, paired with SEO and paid ads (Meta & Google) to drive real revenue. This is the marketing site for the agency — [monkfunnel.com](https://monkfunnel.com).

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) — see `AGENTS.md` before writing Next-specific code |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Geist (sans) · Cormorant Garamond (serif), via `next/font` |
| Bundler | Turbopack |
| Analytics | Google Tag Manager (`app/layout.tsx`) |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, services, process, why us, pricing, testimonials, tools, FAQ, CTA |
| `/work` | Portfolio gallery, filterable by category (data in `lib/work-items.ts`) |
| `/careers` | Open roles |
| `/contact` | Contact form → `/api/contact` |
| `/api/contact` | Sends leads by email (Resend) and/or to Google Sheets |
| `/privacy-policy`, `/terms`, `/refund` | Legal pages |

---

## Getting Started

```bash
npm install
cp .env.example .env.local   # contact form destinations; see comments inside
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). In development, the contact form just logs leads if no destination is configured.

```bash
npm run build     # production build
npm run lint      # ESLint
npx tsc --noEmit  # type check
```

---

## Project Structure

```
app/
  page.tsx              # Home (composes components/sections/*)
  work/ careers/ contact/
  privacy-policy/ terms/ refund/
  api/contact/route.ts  # Contact form handler
  not-found.tsx         # 404 page
  globals.css           # Tailwind + brand colour tokens (@theme)
components/
  layout/               # Navbar, Footer
  sections/             # Homepage sections (Hero, Services, Pricing, FAQ, …)
  widgets/              # FloatingNPC, dashboard mockup, work cards
  ui/                   # shadcn / navbar primitives
lib/
  site.ts               # Contact details & booking links — edit here, used site-wide
  theme.ts              # Brand colours for inline styles (values in globals.css)
  work-items.ts         # Portfolio entries
public/                 # Pixel-art imagery, portfolio screenshots
```

**Changing contact details:** edit `lib/site.ts`.
**Changing brand colours:** edit the `@theme static` block in `app/globals.css`; both Tailwind classes (`text-ink`, `border-line`, …) and `lib/theme.ts` pick it up.

---

## Deployment

Deployed on **Vercel**. Every push to `main` triggers an automatic deploy. Set the contact-form env vars from `.env.example` in the Vercel project settings.

---

## Contact

**Monk Funnel** · Delhi, India
monkfunnel0@gmail.com · +91 86799 95506

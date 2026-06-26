# Klao — Personal Brand Website

A modern, soft-premium one-page website for **Klao**, a financial and insurance advisor at AIA. Built as a personal brand site (not a corporate insurance template) — trustworthy, approachable, and editorial.

## Sections

- **Hero** — headline, portrait, primary CTAs (LINE, phone)
- **Services** — 4 service areas (risk planning, health, retirement/investment, personal advisory)
- **About / Profile** — bio, stats, brand values (เข้าใจ · ใส่ใจ · ไม่ทิ้ง)
- **Contact** — LINE, phone, email channels

## Stack

- React 18 + Vite 5 + TypeScript
- Tailwind CSS v3 with semantic design tokens
- Framer Motion for animations
- shadcn/ui primitives
- Fonts: **Prompt** (display) + **IBM Plex Sans Thai** (body)

## Configuration

Edit real contact details in **`src/config/contact.ts`**:

```ts
export const contact = {
  lineUrl: "https://line.me/ti/p/~your-line-id",
  lineId: "@your-line-id",
  phone: "+66812345678",
  phoneDisplay: "081 234 5678",
  email: "you@example.com",
};
```

All CTAs across the site (Hero, Contact section) read from this single file.

## Setup

```bash
bun install      # or: npm install
bun run dev      # start dev server (http://localhost:8080)
bun run build    # production build → dist/
bun run preview  # preview the production build
```

## Design tokens

Brand palette lives in `src/index.css` as HSL CSS variables and is exposed through `tailwind.config.ts`:

- `navy` — deep navy (primary)
- `cloud` / `cream` / `beige` — warm neutral surfaces
- `gold` — muted gold accent

Never hardcode colors in components — use the semantic Tailwind classes (`bg-navy`, `text-gold`, etc.).

## Deployment

The project builds to a static `dist/` folder and can be deployed to any static host:

- **Lovable** — click *Publish* in the editor
- **Vercel / Netlify** — connect the repo; build command `bun run build`, output `dist`
- **Custom domain** — configure in your host's dashboard

## Accessibility & performance

- Respects `prefers-reduced-motion`
- Semantic landmarks (`<header>`, `<main>`, `<section>` with ids)
- Smooth scroll for in-page navigation
- Lazy-loaded imagery below the fold
- Google Fonts preconnected in `index.html`

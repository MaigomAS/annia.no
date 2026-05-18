# ANNIA product-facing website

Premium, Nordic, Web 2.0-inspired frontend for ANNIA: a strategic collaboration infrastructure connecting people, institutions, territories, talent, capital and applied innovation.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- React Router
- Local TypeScript data files for editable content

## Project structure

```text
public/assets/
  hero/         Fjord and platform atmosphere placeholders
  challenges/   Spring Challenge placeholder imagery
  partners/     Partner imagery placeholder directory
  ecosystem/    Ecosystem explorer placeholders
  insights/     Report and insight placeholder imagery
  logos/        Partner logo placeholders
src/
  components/   Reusable design-system components
  data/         Editable content for challenges, partners, ecosystem, insights and stats
  pages/        Route-level pages
```

## Routes

- `/` — full platform homepage
- `/spring-challenges` — filterable Spring Challenges portfolio
- `/ecosystem` — ecosystem explorer view
- `/insights` — reports and brief previews
- `/contact` — static application/contact interface

## Setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Editing content

Most platform content is intentionally data-driven so the ANNIA team can replace copy, images and logos without changing card components:

- `src/data/challenges.ts`
- `src/data/partners.ts`
- `src/data/ecosystem.ts`
- `src/data/insights.ts`
- `src/data/stats.ts`

## Future platform TODOs

- Add authentication and user accounts for partners, talent and administrators.
- Replace static contact UI with challenge submission, partner application and talent onboarding workflows.
- Build partner dashboard views for active pilots, countries, partners, opportunities and milestones.
- Add talent profiles, expertise tagging and availability states.
- Add opportunity marketplace with filters for pilots, investment needs, procurement and residencies.
- Implement matchmaking logic between challenges, partner capabilities, capital pathways and talent profiles.
- Add CMS or database-backed content for insights, reports and public challenge portfolios.
- Add analytics, accessibility audits, SEO metadata per route and internationalization.

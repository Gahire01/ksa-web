# Kigali Safety Academy — Website

A multi-page Next.js 15 website for Kigali Safety Academy. The site covers the public training catalogue, course and program detail pages, upcoming events, safety alerts, a resource library, account previews, and supporting business pages.

The front end is complete and passes a production build. All data currently comes from a typed seed layer, and every form already posts to a Next.js API route. When a real backend is available, replace the functions in `lib/api.ts` and the route handlers under `app/api/` — the pages and components do not need to change.

## Pages and routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with featured training, upcoming events, and active safety alerts |
| `/courses` | Searchable/filterable course catalogue |
| `/courses/[slug]` | Course detail, modules, outcomes, audience, related courses |
| `/programs` | Structured training programs |
| `/programs/[slug]` | Program detail and included courses |
| `/events` | Upcoming events with format filters, plus past events |
| `/events/[slug]` | Event detail and registration form |
| `/alerts` | Active and archived safety alerts |
| `/alerts/[slug]` | Full alert guidance and action checklist |
| `/resources` | Safety library with featured article |
| `/resources/[slug]` | Full article |
| `/about` | Mission, values, approach, instructors |
| `/business` | Team and organization training + inquiry form |
| `/partnerships` | Learning partnership information + inquiry form |
| `/students` | Student hub with quick links and updates |
| `/verify` | Certificate verification (backend-ready) |
| `/contact` | Contact details, message form, quick FAQs |
| `/faq` | Grouped FAQ accordion |
| `/login`, `/register` | Account previews (backend-ready) |
| `/privacy`, `/terms` | Privacy information and terms |
| `/sitemap.xml`, `/robots.txt` | SEO routes |
| `/api/*` | Form/API endpoints ready for backend replacement |

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4000` (the dev script uses port 4000). For a production check:

```bash
npm run build
npm run start
```

`npm run typecheck` runs TypeScript without emitting files.

## Architecture

```
app/                  Route handlers, pages, metadata, sitemap, robots
components/           Shared server and client components
lib/
  types.ts            Domain types used by pages and API stubs
  site.ts             Site config, navigation, footer links
  api.ts              Data access + form submission layer (replace for backend)
  client.ts           Small client-side POST helper
  format.ts           Date formatting helpers
  validation.ts       Shared form validation helpers
  data/               Typed seed content (courses, programs, events, alerts, resources, FAQs)
public/assets/        Logo and locally stored training photographs
```

- Server components read data through `lib/api.ts`; the seed arrays are never imported by pages directly.
- Interactive pieces (menus, filters, forms, dismissible notices) are the only client components.
- Forms post JSON to `/api/contact`, `/api/newsletter`, `/api/events/[slug]/register`, `/api/auth/*`, and `/api/verify`.
- Route handlers validate input and currently return a clearly labelled preview response. Replace the handler body / `lib/api.ts` submission function with your real service.
- Dismissible notices and alert banners use browser `localStorage` only.

## Backend integration checklist

1. Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) for canonical URLs, Open Graph, sitemap, and robots.
2. Replace `app/api/contact/route.ts` and `subscribeToUpdates()` with email/CRM delivery.
3. Replace the auth preview handlers with real sessions (httpOnly cookies) and connect `/login`, `/register`, `/students`.
4. Replace event registration/`registerForEvent()` with your event or ticketing service.
5. Replace certificate verification with the certificate registry lookup.
6. Replace the read functions in `lib/api.ts` with database or API calls. Keep the exported function signatures; pages will continue to work.
7. Remove the preview notes from forms after real services are connected.
8. Update placeholder content: contact phone/email, instructor names, dates, prices, and event details in `lib/data/`.

## Deployment

The site builds cleanly with `npm run build` and can be deployed to Vercel, a Node host, or a container.

- Vercel: import the repository and set `NEXT_PUBLIC_SITE_URL` to the production URL.
- Node host: run `npm ci && npm run build && npm run start`.
- Do not deploy with placeholder contact details or preview wording if the site is intended to accept real inquiries.
- Choose one package manager before wiring CI or deployment. The repository currently contains both `package-lock.json` and `pnpm-lock.yaml`; delete the one you do not use so installs are reproducible.

## Content maintenance

- Add/edit courses: `lib/data/courses.ts`
- Programs: `lib/data/programs.ts`
- Events: `lib/data/events.ts`
- Alerts: `lib/data/alerts.ts`
- Articles: `lib/data/resources.ts`
- Instructors + FAQs: `lib/data/site-content.ts`
- Navigation/footer: `lib/site.ts`

Seed dates are ISO strings (`YYYY-MM-DD`). Upcoming vs. past events and active alerts are derived in `lib/api.ts`, so the site stays current without manual updates.

## Notes

- The supplied logo is used as provided. Several training photographs remain sourced from the public reference page for this class exercise; follow your instructor's rules for attribution and reuse of third-party imagery.
- Team names, contact details, prices, and dates are sample content and should be confirmed before launch.

# Kigali Safety Academy Website — Plan and Implementation

## Overview

Kigali Safety Academy now has a complete multi-page public website built with Next.js App Router, React, TypeScript, and Tailwind CSS. The site covers training discovery, course and program details, upcoming events, safety alerts, resources, organization inquiries, student tools, and supporting company information.

The public experience is complete and deployment-ready in preview mode. Content comes from a typed seed layer, and every interactive form already posts to a real Next.js API route. Services such as email delivery, authentication, ticketing, and certificate lookup can be connected behind the existing data and API boundaries without redesigning pages.

## Scope

- Rebuild the supplied Kigali Safety Academy homepage identity as a full public website.
- Replace reference-site branding with the academy's name, shield logo, navy/burgundy palette, and own copy.
- Provide every destination implied by the header, footer, and calls to action.
- Add dedicated upcoming events and safety alerts experiences.
- Route all page data and form submissions through a backend-ready layer.
- Preserve responsive, accessible behavior across desktop and mobile.
- Keep preview messaging honest while external services are not yet connected.

## Information architecture

| Route | Purpose |
| --- | --- |
| `/` | Homepage with featured training, upcoming events, alerts, resources, and academy stats |
| `/courses` | Searchable and filterable course catalogue |
| `/courses/[slug]` | Course overview, modules, outcomes, audience, certificate, related courses |
| `/programs` | Structured training pathways |
| `/programs/[slug]` | Program details and included courses |
| `/events` | Upcoming events, format filters, and past events |
| `/events/[slug]` | Event agenda, logistics, and registration form |
| `/alerts` | Active and archived safety alerts |
| `/alerts/[slug]` | Full alert guidance and action checklist |
| `/resources` | Safety library with featured article |
| `/resources/[slug]` | Full article and related reading |
| `/about` | Mission, values, approach, and instructors |
| `/business` | Organization training and inquiry form |
| `/partnerships` | Learning partnership information and inquiry form |
| `/students` | Student hub and quick links |
| `/verify` | Certificate verification form |
| `/contact` | Contact details, message form, and quick FAQs |
| `/faq` | Grouped FAQ accordion |
| `/login`, `/register` | Account previews wired to API routes |
| `/privacy`, `/terms` | Privacy information and terms |
| `/sitemap.xml`, `/robots.txt` | SEO routes |
| `/api/*` | Contact, newsletter, event registration, auth, and verification endpoints |
| `not-found.tsx` | Branded 404 page |

Navigation and footer definitions live in `lib/site.ts`. The route manifest in `public/manus-routes.json` is synchronized with the public pages.

## Architecture

```
app/                  Pages, route handlers, metadata, sitemap, robots, 404
components/           Shared server and client components
lib/
  types.ts            Domain types
  site.ts             Site config, navigation, footer links
  api.ts              Data access + form submission layer
  client.ts           Client-side JSON POST helper
  format.ts           Date formatting helpers
  validation.ts       Shared form validation
  data/               Typed seed content
public/assets/        Logo and training photography
```

### Data flow

- Server components call async functions in `lib/api.ts`; page files never import seed arrays directly.
- Seed content is typed and stored in `lib/data/courses.ts`, `programs.ts`, `events.ts`, `alerts.ts`, `resources.ts`, and `site-content.ts`.
- Upcoming versus past events are derived from ISO dates. Active versus archived alerts are derived from the alert flag, with active alerts ordered by severity and recency.
- Replacing a read function in `lib/api.ts` with a database or remote API call keeps page components unchanged.

### API routes

- `POST /api/contact` — validate and process contact inquiries.
- `POST /api/newsletter` — validate newsletter subscriptions.
- `POST /api/events/[slug]/register` — validate event registration requests and confirm the event exists and is open.
- `POST /api/auth/login` — auth preview with validation.
- `POST /api/auth/register` — account preview with validation and terms acceptance.
- `POST /api/verify` — certificate verification preview.

All routes validate JSON input and return `{ ok, message }`. They currently use clearly labelled preview behavior; real CRM, mailing, session, ticketing, and certificate services should replace the corresponding handlers or submission functions.

## Design direction

- **Design movement:** practical occupational safety education with an institutional identity.
- **Core principles:** strong legibility, clear training discovery, orderly navigation, accessible responsive controls.
- **Color philosophy:** the shield supplies deep navy and burgundy; white and pale-gray surfaces support legibility, with burgundy for primary accents and calls to action.
- **Layout paradigm:** broad full-width bands inside a centered container, a strong safety hero, a horizontal category strip, training-discovery lists, and compact card grids.
- **Signature elements:** the Kigali Safety Academy shield, navy/burgundy treatment, training-topic imagery, alert-severity labels, and event cards.
- **Interaction philosophy:** functional navigation and mega menus, filters, accordions, dismissible notices, form feedback, keyboard focus, and reduced-motion support.
- **Typography:** clean sans-serif body text with bold compact navigation to retain a practical training-portal feel.
- **Brand essence:** accessible safety learning for workers and organizations; practical, trustworthy, and supportive.
- **Brand voice:** clear, encouraging, and benefit-led. Examples: “Kigali Safety Academy Makes Training Easy!” and “Learn well. Work safely.”
- **Logo:** use the supplied Kigali Safety Academy crest with a readable text wordmark.

Responsive styling and the shared design system live in `app/globals.css`. Existing desktop layouts are retained, with stacked and touch-scrollable equivalents on mobile.

## Global experience

- Header with home link, training/events/resources/about mega menus, contact link, account links, and accessible mobile menu.
- Site-wide dismissible banner for the highest-priority active safety alert.
- Footer with newsletter signup, contact information, training/student/updates/company links, legal links, and social icons.
- Skip link, semantic landmarks, descriptive image alt text, keyboard-focusable controls, and visible focus states.
- Newsletter and alert dismissals use browser `localStorage` only.
- Metadata, canonical URLs, Open Graph data, and route-specific titles across public pages.

## Verification completed

- `npx tsc --noEmit` passes.
- `npm run build` succeeds (53 generated pages).
- Primary routes and sample dynamic course, program, event, alert, and resource routes return 200.
- Unknown routes return 404.
- API smoke tests cover contact success and validation failure, newsletter, event registration, login, registration, and certificate verification.
- Desktop and mobile visual QA completed, including a 390px viewport check.
- No backend or deployment blockers found; remaining dependencies are external services and content confirmation.

## Before launch

1. Confirm contact details, social links, instructor profiles, course/event copy, prices, dates, seat counts, and legal text.
2. Refresh event dates so upcoming events remain upcoming.
3. Set `NEXT_PUBLIC_SITE_URL` for the production domain.
4. Connect contact/CRM, newsletter, auth, event registration, and certificate verification services.
5. Replace preview wording once real delivery and storage are live.
6. Add spam protection, rate limiting, monitoring, and legal/compliance review.
7. Deploy and verify links, forms, metadata, sitemap, robots, and 404 behavior on the production host.

See `README.md` for setup, deployment, and maintenance instructions, and `TODO.md` for the detailed launch checklist.

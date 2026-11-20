# TODO — Kigali Safety Academy Website

## Current status

The public multi-page website is implemented. It type-checks, builds successfully, and has been smoke-tested at desktop and mobile widths. Pages read through a typed data-access layer, and every form posts to a Next.js API route. The remaining work is content confirmation, service integration, and launch operations.

## Completed

- [x] **Rebrand the site for Kigali Safety Academy:** Use the supplied shield logo and the navy/burgundy identity across the masthead, hero, promotional bands, footer, and browser metadata.
- [x] **Build the complete public information architecture:** Add working pages for courses, programs, events, alerts, resources, about, business training, partnerships, students, certificate verification, contact, FAQ, privacy, terms, login, register, and a custom 404.
- [x] **Add course and program catalogues:** Provide searchable/filterable course listings, detailed course pages with modules and outcomes, program pages with included courses, and related-content links.
- [x] **Add upcoming events:** Separate upcoming and past events, format filters, event detail pages, agendas, venue/pricing details, and a registration form.
- [x] **Add safety alerts:** Active and archived alerts, severity ordering and labels, effective dates, action checklists, detail pages, and a site-wide dismissible active-alert banner.
- [x] **Add the safety resource library:** Article listings, a featured article, full article pages, and related reading.
- [x] **Add organization and learner support pages:** Business training inquiries, learning partnerships, a student hub, certificate verification, grouped FAQs, and contact options.
- [x] **Create a backend-ready data layer:** Centralize reads in `lib/api.ts`; keep typed seed content in `lib/data/`; ensure pages do not import seed arrays directly.
- [x] **Wire all forms:** Contact, newsletter, event registration, login, registration, and certificate verification post JSON to API routes with shared validation and transparent preview responses.
- [x] **Complete global navigation and footer:** Mega menus, mobile menu, account links, newsletter signup, contact details, legal links, and a site-wide alert banner.
- [x] **Add SEO and deployment support:** Page metadata, canonical URLs, Open Graph data, `sitemap.xml`, `robots.txt`, a route manifest, `.env.example`, and deployment documentation.
- [x] **Verify responsive and accessible behavior:** Keyboard-focusable navigation and filters, skip link, semantic landmarks, visible focus states, reduced-motion support, and mobile layouts at 390px.
- [x] **Verify the build:** `npx tsc --noEmit` passes; `npm run build` succeeds with 53 generated pages; primary and dynamic routes return 200; unknown routes return 404; API success and validation responses were smoke-tested.

## Before launch — content and ownership

- [ ] Confirm the public phone number, email address, street address, office hours, and social profile URLs in `lib/site.ts`.
- [ ] Review all course, program, event, alert, resource, instructor, FAQ, and statistic copy for accuracy.
- [ ] Confirm event dates, prices, seat counts, registration-open flags, and delivery formats. Seed events currently begin on 27 November 2026; refresh or add dates before launch so upcoming events do not become past.
- [ ] Confirm instructor names and biographies, or replace them with approved profiles.
- [ ] Review privacy and terms content with the academy's legal/privacy owner.
- [ ] Confirm rights and attribution for training photography stored in `public/assets/`.
- [ ] Decide whether the certificate lookup will use real records at launch or remain a contact-based service.
- [ ] Check that the logo and all brand claims are approved for public use.

## Backend integration

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Connect contact submissions to the academy's email/CRM workflow and send confirmations.
- [ ] Connect newsletter signup to the mailing provider with consent, unsubscribe, and retention handling.
- [ ] Replace auth previews with real accounts, email verification, password reset, and httpOnly sessions; connect the student hub.
- [ ] Connect event registration to a registration/ticketing service; add payment only if required.
- [ ] Connect certificate verification to the certificate registry.
- [ ] Replace read functions in `lib/api.ts` with database or API calls while preserving return types.
- [ ] Add error, loading, and empty states appropriate to real network requests.
- [ ] Remove preview notices from forms once delivery and storage are live.
- [ ] Add rate limiting, bot protection, and spam controls to public endpoints.
- [ ] Define backups, monitoring, audit logging, and data-retention procedures.

## Quality and operations

- [ ] Choose one package manager for CI/deployment and remove the unused lockfile; the repository currently contains both `package-lock.json` and `pnpm-lock.yaml`.
- [ ] Add automated tests for primary routes, dynamic routes, and API validation.
- [ ] Add a CI workflow for type-checking and production builds.
- [ ] Add analytics only after updating the cookie/privacy notice for the chosen tools.
- [ ] Run a final screen-reader and keyboard pass on the deployed site.
- [ ] Verify canonical URLs, Open Graph previews, sitemap, and 404 behavior on the production domain.
- [ ] Commit the completed work and deploy through the chosen host.

## Notes

- Several forms intentionally state that delivery or account creation is not yet connected. Keep this wording until the relevant service is live.
- Events are derived into upcoming/past by ISO date, and active alerts are derived from their `active` flag; no manual list reordering is required.
- The supplied logo is used as provided. Confirm third-party image attribution under the course/instructor rules before launch.

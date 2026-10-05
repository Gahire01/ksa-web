# Kigali Safety Academy Homepage — Plan

## Scope
Rebrand the public homepage recreation for a class assignment as **Kigali Safety Academy**, using the logo supplied by the user. Retain the reference page's broad homepage layout and training-discovery structure, but remove the original organization's visible name, old logo, source-branded banners, and links from the rendered page. The original account, enrollment, certificate, and checkout backends are not part of this static educational recreation.

## Implementation
- Use **Next.js** with **Tailwind CSS**.
- Implement the page in the App Router with reusable header/navigation, training-category, benefits, discovery, and footer sections.
- Use the supplied Kigali Safety Academy logo in the masthead, promotional band, learning-partnership block, and footer. Keep locally stored occupational-safety photographs for the class reference layout.
- Keep navigation and calls to action within the page for this static study version; preserve the accessible mobile menu and dismissible cookie notice.
- Keep `public/manus-routes.json` synchronized with the single homepage route.

## Design direction
- **Design Movement:** practical occupational safety education with a clear, institutional identity.
- **Core Principles:** strong legibility; orderly wide navigation; clear training discovery; accessible responsive controls.
- **Color Philosophy:** the user's shield supplies a deep navy and burgundy palette; use white and pale-gray surfaces for legibility and burgundy for the primary action/accent.
- **Layout Paradigm:** broad full-width content bands with a centered max-width container, a strong safety hero, a horizontal brand strip, industry category cards, and compact training lists.
- **Signature Elements:** the Kigali Safety Academy shield in the masthead; navy/burgundy treatment; practical safety-topic cards.
- **Interaction Philosophy:** local anchor navigation, accessible dropdown menus, keyboard focus, and a dismissible cookie notice.
- **Animation:** subtle hover feedback; respect reduced-motion preferences.
- **Typography System:** clean sans-serif body and bold compact navigation to preserve a practical training-portal feel.
- **Brand Essence:** accessible safety learning for workers and organizations; **practical, trustworthy, supportive**.
- **Brand Voice:** clear, encouraging, and benefit-led. Examples: “Kigali Safety Academy Makes Training Easy!” and “Learn well. Work safely.”
- **Wordmark & Logo:** use the supplied Kigali Safety Academy crest, paired with a readable text wordmark in the header.
- **Signature Brand Color:** burgundy and deep navy sampled visually from the supplied logo.

## Project structure
- `app/`: Next.js App Router page, metadata, and global styling.
- `components/`: site header/menu, cookie notice, and footer.
- `public/assets/`: supplied logo and locally stored training photographs.
- `public/manus-routes.json`: route manifest for the one-page site.


## Visual refinement
The industry/program cards use a single horizontal, touch-scrollable strip with four cards visible on desktop and two on phones, reflecting the reference homepage's carousel-like row while retaining all six categories and keeping the Kigali Safety Academy brand.

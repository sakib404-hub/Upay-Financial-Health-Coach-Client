# Upay Financial Coach

Upay is a financial-coaching web app concept for people managing money in Bangladesh. The current project delivers the public-facing product site and an interactive financial assessment prototype, with example figures shown in Bangladeshi taka (BDT).

## Implemented So Far

- **Home page (`/`)**: responsive product landing page with a hero, trust indicators, problem framing, core product pillars, AI-coaching showcase, workflow overview, feature grid, security messaging, and calls to action.
- **About page (`/about`)**: product overview, explanation of how the concept works, FAQs, and a call to action.
- **Onboarding (`/onboarding`)**: five-step assessment for a user's primary goal, income, essential commitments, and savings target. It calculates an example financial-health score, estimated surplus, suggested savings, and goal timeline from values held in the browser during the session.
- **Shared interface**: reusable navigation, footer, animated text/components, responsive layouts, and motion-enhanced interactions.

## Current Scope

This is a frontend prototype. The assessment calculations run in the client and are not saved to a profile or database. Authentication, persistent storage, live bank or mobile-wallet connections, and a production AI coaching service are not implemented yet. Security and AI claims in the interface describe the product concept, not verified production integrations.

## Technology

- Next.js `16.3.8` App Router and React `19`
- TypeScript
- Tailwind CSS `4`
- Framer Motion for UI animation
- Lucide React icons
- Lenis dependency for smooth scrolling

Routes are under `src/app`. The home page's sections live in `src/app/_components`; route-specific onboarding and about components are colocated with their pages. Shared navigation, footer, and animation components live in `src/components`.

## Run Locally

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Checks

```bash
npm run lint
npm run build
```

## Author

[Sakib404-hub](https://github.com/sakib404-hub)
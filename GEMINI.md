# Gemini Code Rules

## Project Baseline

- This project uses Next.js `16.3.8`, React `19`, TypeScript, the App Router, and Tailwind CSS `4`.
- Application routes live under `src/app`. Follow the installed Next.js APIs and conventions, not examples written for older versions.
- Before using an unfamiliar Next.js API or changing routing, rendering, caching, or mutation behavior, consult the relevant guide under `node_modules/next/dist/docs/`.
- Preserve existing project conventions and keep changes scoped to the requested feature.

## App Router Structure

- Keep each route's page, route-specific components, and server actions together. Use Next.js private folders (underscore-prefixed) so implementation folders do not become routes:

  ```text
  src/app/
    dashboard/
      page.tsx
      _components/
      _actions/
      loading.tsx
  ```

- Put genuinely shared components in `src/components`; put shared shadcn/ui primitives in `src/components/ui` when that matches the configured shadcn setup.
- Keep `page.tsx` focused on composing the route and loading the data it needs. Extract substantial or reusable UI into route-local components.
- Use layouts and loading, error, and not-found route files where they improve shared structure or user feedback. Do not add route files without a user-facing need.

## Server and Client Components

- Pages and layouts are Server Components by default. Keep them server-rendered unless the UI needs browser APIs, local state, effects, or event handlers.
- Mark only the smallest interactive component with `"use client"`. Avoid turning an entire page or layout into a Client Component just to support one control or animation.
- Keep secrets and server-only data access on the server. Pass Client Components only the serializable data they need; do not pass entire database records or secret-bearing objects.
- Prefer server-side data access for route rendering. Follow the project's established data-access pattern rather than introducing a second one.

## Server Actions

- Put route-specific Server Actions in that route's `_actions/` folder. Use a clear action-oriented filename, such as `_actions/update-budget.ts`.
- A file dedicated to Server Actions must start with `"use server"`. Export only `async` Server Action functions from that module; keep ordinary helpers in separate modules.
- Treat every action as a public, untrusted POST entry point. Authenticate and authorize inside the action itself, validate all submitted data, and verify ownership of referenced records. Hiding a form in the UI is not authorization.
- Accept only the input needed for the mutation, derive identity and permissions from trusted server-side state, and return only data required by the UI.
- After a successful mutation, revalidate or refresh the affected route/data as appropriate. Handle validation and expected failures with useful, user-safe feedback.
- Prefer form `action`/`formAction` integration for submissions when it fits; use client event handlers only when the interaction genuinely requires them.

## UI Components and Styling

- Use shadcn/ui components for common interface primitives when they fit the interaction. Reuse and customize the configured components instead of recreating accessible dialogs, menus, selects, tooltips, or form controls from scratch.
- Check the repository's shadcn configuration and installed dependencies before importing a component. If setup or a component is missing, use the shadcn CLI and follow its generated conventions rather than guessing paths or APIs.
- Keep styling consistent with the existing Tailwind and design-token setup. Build a clear visual hierarchy with purposeful typography, color, spacing, and relevant imagery; avoid generic, interchangeable layouts.
- Make the interface responsive from the start. Prevent overflow, clipped text, overlapping controls, and layouts that only work with a mouse.
- Use semantic HTML, accessible names, visible keyboard focus, sufficient contrast, and correct disabled/loading states.

## Animation

- Use animation to support hierarchy, feedback, and continuity, not as decoration on every element. Keep motion brief and avoid delaying access to content or controls.
- Use Framer Motion for React component transitions and layout/state animation when it suits the task. Use Anime.js for timeline-oriented DOM or SVG sequences when that is a better fit. Choose one library per feature; do not combine them without a clear requirement.
- Check the installed package and follow its current API before importing. If the chosen library is not installed, add only the dependency needed for the feature.
- Prefer transform and opacity animations; avoid repeated layout-triggering animation. Respect `prefers-reduced-motion` and provide a usable reduced-motion experience.

## Verification

- Run `npm run lint` for code changes and `npm run build` when practical, especially after changes to routing, Server Actions, or shared components.
- Exercise the primary interaction and inspect the page at both mobile and desktop sizes when the feature changes the UI.
- Fix regressions caused by the change and report any checks that could not be run.
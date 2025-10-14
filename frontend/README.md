# Roaming IT — Frontend

A modern single-page application built with React and Vite. It showcases product information, services, teams, and contact sections with smooth navigation and a polished UI.

## Tech Stack
- React 19
- Vite 7
- React Router 7
- Tailwind (utility layers integrated via `@tailwind components; @tailwind utilities;`)
- ESLint 9

## Prerequisites
- Node.js `>= 20.19` or `>= 22.12` (required by Vite)

## Getting Started
1. Install dependencies:
   - `npm install`
2. Run the development server:
   - `npm run dev`
   - The app runs on `http://localhost:5173/` (or the next free port).
3. Build for production:
   - `npm run build`
4. Preview the production build locally:
   - `npm run preview`

## Project Structure
- `src/App.jsx` — App entry, Router setup, layout shells
- `src/pages/` — Route-level pages (`Home`, `About`, `Contact`)
- `src/components/` — UI components (Navbar, Footer, Teams, Services, ContactSection)
- `src/index.css` — Global styles, utility layers, scrollbar and selection styles
- `public/` — Static assets (logos, SVGs)

## Routing & Navigation
- The `Navbar` provides links to Home (`/`), About (`/about`), and section buttons that smooth-scroll to in-page sections (`services`, `teams`, `contact`).
- Clicking the Home button or logo on the homepage scrolls smoothly to the top.

## Performance Optimizations
These changes were implemented to improve load time, responsiveness, and runtime efficiency:

- Route code-splitting:
  - `About` and `Contact` are loaded with `React.lazy` and wrapped in `<Suspense>`, reducing the initial bundle and speeding up first paint.
- Efficient scroll handling:
  - The navbar scroll listener is throttled via `requestAnimationFrame` and uses passive event listeners to decrease main-thread work.
- Image performance:
  - Team member images are marked with `loading="lazy"` and `decoding="async"` and given explicit dimensions to avoid layout shift and lower network priority.
- Avoiding unnecessary re-renders:
  - `Navbar`, `Footer`, and `Teams` components are exported as `React.memo` to skip re-rendering when props don’t change.

## Accessibility
- All interactive elements have accessible labels and states.
- Focus styles are preserved in key components (e.g., navigation, team cards).

## Deployment
1. Run `npm run build` to generate the optimized production bundle.
2. Host the `dist/` folder on any static hosting (Netlify, Vercel, GitHub Pages, Nginx, etc.).

## Troubleshooting
- If you see a Vite warning about Node version, upgrade Node to `20.19+` or `22.12+`.
- If `ERR_CONNECTION_REFUSED` occurs, ensure the dev server is running and use the URL printed in the terminal (port may differ if 5173 is occupied).

## Scripts
- `dev` — start Vite development server
- `build` — build for production
- `preview` — preview the production build locally
- `lint` — run ESLint rules

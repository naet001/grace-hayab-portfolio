# Grace Hayab Portfolio - Project Instructions

## Project Overview
Personal portfolio website built with **React 19 + TypeScript + Vite 8 + shadcn/ui v4** using the **base-nova** design system. Features an infinite image carousel, services, achievements, reviews, pricing, and contact sections.

## Tech Stack
- **Framework**: React 19.3.1 + Vite 8
- **Styling**: Tailwind CSS v4 + shadcn/ui (base-nova style)
- **TypeScript**: ~6.0.2
- **Components**: shadcn v4.23.0 with Lucide icons
- **Fonts**: Geist Variable, Recursive Variable
- **Animations**: tw-animate-css

## Project Structure
```
src/
├── App.tsx              # Main app with all page sections
├── main.tsx             # React entry point
├── index.css           # Global styles + Tailwind theme (OKLCH color space)
├── components/
│   ├── ui/             # shadcn components (button.tsx)
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Bio.tsx         # Biography section
│   ├── ImageCarousel.tsx # Infinite scrolling image carousel
│   ├── Services.tsx    # Services offered
│   ├── Achievements.tsx
│   ├── Reviews.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
└── lib/
    └── utils.ts        # Utility functions (cn helper)
```

## Path Aliases
- `@/*` → `./src/*`
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript build + Vite production build |
| `npm run lint` | Run ESLint on all files |
| `npm run format` | Format all TypeScript files with Prettier |
| `npm run typecheck` | TypeScript type checking (no emit) |
| `npm run preview` | Preview production build |

## Adding shadcn Components
```bash
npx shadcn@latest add <component-name>
```
Components are placed in `src/components/ui/` and use the `@/components/ui` import path.

## Styling Conventions
- **Color System**: OKLCH color space in `src/index.css`
- **Theme**: Light theme only via CSS variables
- **Typography**: Geist Variable (sans), Recursive Variable (headings)
- **Animations**: Use `tw-animate-css` utilities

## ESLint Configuration
- Flat config (`eslint.config.js`)
- Extends: ESLint recommended, TypeScript recommended, React Hooks, React Refresh
- Ignores: `dist/` directory
- Browser globals enabled
- Rule: `react-refresh/only-export-components: off`

## TypeScript Configuration
- Composite project with references to `tsconfig.app.json` and `tsconfig.node.json`
- Path aliases defined in root `tsconfig.json`
- Strict mode enabled via extended configs

## Git
- Single branch: `main`
- Commit style: Conventional commits (e.g., `feat:`, `Add`)

## Design System (shadcn base-nova)
- Style: `base-nova` (from `components.json`)
- Icon Library: Lucide
- Tailwind prefix: none
- CSS Variables: enabled
- Base color: neutral

## Important Notes
- Uses **Vite 8** with `@vitejs/plugin-react` and `@tailwindcss/vite`
- **Tailwind CSS v4** with new `@import` syntax
- **React 19** with new features
- **shadcn v4** (not v3) - components use new structure
- No `tailwind.config.js` - configuration via `components.json` and CSS

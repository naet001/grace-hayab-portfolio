# Grace Hayab Portfolio

A modern, responsive personal portfolio website built with React 19, TypeScript, and Vite 8.

## Preview

[Live Demo](https://grace-hayab-portfolio.vercel.app)

## Features

- **Infinite Image Carousel** - Seamless scrolling showcase
- **Services Section** - Professional offerings display
- **Achievements** - Milestones and accomplishments
- **Client Reviews** - Testimonials and feedback
- **Pricing** - Service packages and rates
- **Contact Form** - Easy way to get in touch

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19.3.1 |
| **Build Tool** | Vite 8 |
| **Language** | TypeScript 6.0.2 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui v4 (base-nova) |
| **Icons** | Lucide |
| **Typography** | Geist Variable, Recursive Variable |
| **Animations** | tw-animate-css |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx              # Main app with all page sections
├── main.tsx             # React entry point
├── index.css           # Global styles + Tailwind theme
├── components/
│   ├── ui/             # shadcn components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Bio.tsx         # Biography section
│   ├── ImageCarousel.tsx
│   ├── Services.tsx
│   ├── Achievements.tsx
│   ├── Reviews.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts        # Utility functions
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run typecheck` | TypeScript type checking |
| `npm run preview` | Preview production build |

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

Components are placed in `src/components/ui/` and use the `@/components/ui` import path.

## Styling

- **Color System**: OKLCH color space
- **Theme**: Light theme via CSS variables
- **Typography**: Geist Variable (sans), Recursive Variable (headings)

## License

MIT

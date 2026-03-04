# CodeRose

CodeRose is a Next.js App Router project with a reusable UI system based on shadcn/ui, Tailwind CSS v4, and Radix primitives.

## Features

- Next.js 16 App Router structure (`src/app`)
- Dark mode support with `next-themes` (`ThemeProvider`)
- Custom font setup with `Inter` and `IBM Plex Mono`
- Tailwind CSS v4 theme tokens and global design variables
- Reusable button variants via `class-variance-authority`
- Utility-first class merging with `clsx` + `tailwind-merge`
- 56 prebuilt UI components in `src/components/ui` (accordion, dialog, dropdown, table, tabs, tooltip, and more)
- Form-ready stack with `react-hook-form`, `zod`, and `@hookform/resolvers`
- Data visualization support through `recharts`
- Date and calendar support through `date-fns` and `react-day-picker`
- Toast/notification support with `sonner`

## Technology Stack

### Core

- Next.js `16.1.1`
- React `19.2.3`
- TypeScript `5`

### Styling and UI

- Tailwind CSS `4`
- tw-animate-css
- shadcn CLI
- Radix UI
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Forms and Validation

- react-hook-form
- zod
- @hookform/resolvers

### Component/UX Utilities

- cmdk
- embla-carousel-react
- input-otp
- react-resizable-panels
- vaul
- sonner

### Charts and Dates

- recharts
- date-fns
- react-day-picker

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    theme-provider.tsx
    ui/
  hooks/
  lib/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Open `http://localhost:3000` in your browser.

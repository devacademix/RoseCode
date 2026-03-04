# CodeRose

CodeRose is a Next.js 16 App Router project with shadcn-style reusable UI components, Tailwind CSS v4 styling, and Clerk authentication.

## Features

- Next.js App Router architecture (`src/app`)
- Clerk authentication integration (`ClerkProvider`, `SignInButton`, `SignUpButton`, `UserButton`)
- Convex database integration for project storage
- Route protection middleware in `src/proxy.ts`
- Clerk dark theme via `@clerk/themes`
- Application dark mode support via `next-themes`
- Custom fonts: `Inter` and `IBM Plex Mono`
- Tailwind CSS v4 token-driven theming in `src/app/globals.css`
- 56 reusable UI components in `src/components/ui`
- Utility-based variant system with `class-variance-authority`
- Form-ready stack with `react-hook-form` + `zod`
- Charts and date components support (`recharts`, `date-fns`, `react-day-picker`)

## Technology Stack

- Next.js `16.1.1`
- React `19.2.3`
- TypeScript `5`
- Tailwind CSS `4`
- shadcn CLI `3.8.5`
- Radix UI + base-ui primitives
- Clerk (`@clerk/nextjs`, `@clerk/themes`)
- Convex (`convex`, `convex/react`, `convex/react-clerk`)
- next-themes
- class-variance-authority, clsx, tailwind-merge
- react-hook-form, zod, @hookform/resolvers
- sonner, embla-carousel-react, cmdk, vaul, recharts

## Environment Variables

Create `.env` file with Clerk keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

If needed, also configure sign-in and sign-up URLs for custom routing.

Add Convex URL to `.env.local`:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
```

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
  proxy.ts
convex/
  schema.ts
  project.ts
```

## Part 3: Database Setup (Done)

Database setup is completed using Convex.

- Schema created in `convex/schema.ts` for `project` table.
- Index added: `by_owner` on `ownerId`.
- Mutation/query implemented in `convex/project.ts`:
  - `create` stores project with authenticated user `ownerId`.
  - `get` returns only current user's projects.
- Sample import file available: `sampleData.jsonl`.

Useful commands:

```bash
npx convex dev
```

## Setup and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start development server
- `npm run build` - build production app
- `npm run start` - start production server
- `npm run lint` - run ESLint

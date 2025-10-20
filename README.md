# PSCA Starter – Next.js + Tailwind

Reusable starter for new projects: Next.js (App Router) + Tailwind CSS, light/dark themes via CSS variables, a few common components, and a simple style guide.

## Quickstart

- Copy this folder or click “Use as template” in your Git hosting.
- Install dependencies with your preferred package manager.

```bash
pnpm install  # or: npm install / yarn
pnpm dev      # starts dev server on http://localhost:3000
```

## What’s Included

- Next.js 14 App Router + TypeScript
- Tailwind CSS with design tokens and dark mode (class)
- Theme provider without extra deps (localStorage + prefers-color-scheme)
- Common components: Button, Card, Badge, Navbar, Footer, Container
- Style guide page with colors, typography, and components

## Structure

- `src/app` – App Router pages, layout, and global styles
- `src/components` – UI, layout, and theme components
- `src/lib` – small utilities
- `tailwind.config.js` – tokens mapped to CSS variables
- `src/app/globals.css` – light/dark variables and base resets

## Theming

Colors and radii are defined as CSS variables in `src/app/globals.css`. Tailwind maps these tokens via `tailwind.config.js` so you can use classes like `bg-primary`, `text-foreground`, `border`, etc. The `ThemeProvider` toggles the `dark` class on `<html>` and persists preference in localStorage.

## Customize

- Update CSS variables in `globals.css` to match your brand.
- Extend Tailwind tokens in `tailwind.config.js`.
- Add more components in `src/components/ui`.

## Scripts

- `pnpm dev` – start dev server
- `pnpm build` – production build
- `pnpm start` – run production server
- `pnpm lint` – Next.js ESLint rules
- `pnpm typecheck` – TypeScript only

---

Enjoy building! ✨


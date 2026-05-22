# OntoUI — Coding Agent Instructions

## Project Overview

OntoUI is a React component library monorepo. It publishes `@ontoui/react` (styled components built on top of `@base-ui/react` primitives) and hosts a Starlight-powered documentation site.

## Monorepo Structure

- **`packages/react/`** — publishable component library (`@ontoui/react`)
- **`apps/docs/`** — Astro + Starlight documentation site

Managed with **pnpm workspaces** and **Turbo** for task orchestration.

## Tech Stack

| Concern         | Tool                                         |
| --------------- | -------------------------------------------- |
| Bundler         | Vite 6 (lib mode, ES + CJS output)           |
| Base primitives | `@base-ui/react` (unstyled)                  |
| Styling         | CSS Modules (non-scoped strategy)            |
| Testing         | Vitest + jsdom + React Testing Library       |
| Docs            | Astro 5 + Starlight                          |
| TypeScript      | v5, strict mode, `bundler` module resolution |

## Component Conventions

Each component lives in its own folder under `packages/react/src/components/`:

```
ComponentName/
  ComponentName.tsx        # forwardRef component, extends base-ui props
  ComponentName.module.css # CSS Modules
  ComponentName.test.tsx   # Vitest
  index.ts                 # named re-exports
```

- Props extend `React.ComponentPropsWithRef<typeof BaseUIComponent>`
- CSS classes follow BEM-like convention: BlockName-ElementName_modifierName_modifierValue
- Class names are combined with `[...].filter(Boolean).join(" ")`
- All components set `displayName`
- Public API is re-exported from `src/index.ts`

## Build & Outputs

- Dual output: `dist/index.js` (ESM) + `dist/index.cjs` (CJS) + `dist/index.d.ts`
- CSS exported separately via `@ontoui/react/styles`
- `react`, `react-dom`, `react/jsx-runtime`, and `@base-ui/react` are externalized

## Key Commands

```bash
pnpm build       # build all packages (Turbo)
pnpm test        # run tests (Turbo)
pnpm dev         # start docs dev server
```

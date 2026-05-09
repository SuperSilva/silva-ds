# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Run all tests (non-watch, CI mode)
yarn test

# Lint all packages
yarn lint

# Format all files with Prettier
yarn format

# Check formatting without writing
yarn format:check

# Run Storybook dev server (port 6006)
yarn storybook

# Build Storybook static output
yarn build-storybook

# Target a specific package with Nx
node scripts/nx-target.mjs build button
node scripts/nx-target.mjs test button
node scripts/nx-target.mjs lint button
```

## Architecture

This is a **Yarn 4 + Nx 20** monorepo with two workspace roots:

- `packages/*` — publishable React component packages
- `apps/storybook` — Storybook 8 instance for development and documentation

### Package naming and scope

All packages use the `@design-system/` scope. Every component package depends on `@design-system/theme` (via `workspace:*`) which provides design tokens, theme defaults, and a `ThemeProvider` context.

### Anatomy of a component package

Each package under `packages/` follows this layout:

```
packages/<name>/
├── src/
│   ├── <Name>.tsx           # React component
│   ├── <Name>.styles.ts     # Linaria CSS-in-JS styles
│   ├── tests/
│   │   ├── <Name>.test.tsx  # Vitest tests
│   │   └── test-setup.ts    # @testing-library/jest-dom setup
│   └── index.ts             # Public exports
├── vite.config.ts           # Vite library build + Linaria plugin + Vitest config
└── tsconfig.json            # Extends tsconfig.base.json
```

Storybook stories live in `apps/storybook/stories/<package-name>/` (not co-located) and import from package aliases (`@design-system/<name>`).

Packages are built as dual ESM/CJS libraries using Vite with `vite-plugin-dts` for declaration generation.

### Component variant pattern

Variants are exported as individual named components rather than props. Each package exports a set of variant components plus a default alias:

- **Button**: `PrimaryButton`, `SecondaryButton`, `OutlineButton`, `GhostButton`, `DestructiveButton` — `Button = PrimaryButton`
- **IconButton**: same five variants — `IconButton = GhostIconButton`
- **Image**: `Image` (no radius), `RoundedSmImage`, `RoundedImage`, `RoundedLgImage`, `CircularImage`
- **List**: `UnorderedList`, `OrderedList`, `UnstyledList` — `List = UnorderedList`
- **Text**: `TextXs`, `TextSm`, `TextMd`, `TextLg`, `TextXl` — `Text = TextMd`
- **Heading**: `H1`–`H6` — `Heading = H1`

Props that remain are orthogonal configuration, not variants: `size` (buttons), `weight`/`color`/`as`/`truncate` (text), `gap`/`nested` (lists), `fit`/`aspectRatio` (image).

### Styling

Components use **Linaria** (zero-runtime CSS-in-JS). Styles live in `<Name>.styles.ts` files and are imported into the component. The Vite build uses `@wyw-in-js/vite` to extract styles at build time.

**Preferred pattern**: Use `styled` from `@linaria/react` for base components and variant extensions (`styled(BaseComponent)`). Reserve `css` from `@linaria/core` + `cx` only for runtime-selected discrete style sets (e.g., size classes, gap classes) that cannot be embedded statically. Each styles file exports named `*Root` styled components; wrapper React components in the `.tsx` file apply the remaining runtime classes via `cx`.

### TypeScript paths

`tsconfig.base.json` defines path aliases for all packages (e.g., `@design-system/button` → `packages/button/src/index.ts`). All package-level `tsconfig.json` files extend this base.

### Testing

Tests use **Vitest** with `jsdom` and `@testing-library/react`. The test environment and globals are configured per-package in `vite.config.ts`. Run a single package's tests with:

```bash
node scripts/nx-target.mjs test <package-name>
```

### Code style

Prettier enforces formatting with `printWidth: 110`, single quotes, trailing commas, and semicolons. ESLint handles logic/quality; `eslint-config-prettier` disables any ESLint rules that conflict with Prettier. Run `yarn format` to reformat, `yarn format:check` for CI.

### Git hooks

Husky manages two hooks:

- **pre-commit** — runs `lint-staged`: ESLint (with auto-fix) + Prettier on staged `ts/tsx` files; Prettier on `js/mjs/json/md` files.
- **commit-msg** — runs `commitlint` enforcing [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject`. Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

### CI

GitHub Actions (`.github/workflows/ci.yml`) runs lint → test → build on Node 20 / Ubuntu for every push.

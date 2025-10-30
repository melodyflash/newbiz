# Smart Biz Upgrade · Multi-Theme React Showcase

This repository now ships **four** dark-themed, technology-forward website experiences for Smart Biz Upgrade. Each version lives in its own Vite + React workspace under `versions/`, sharing the same story, calls-to-action, and component architecture while presenting a distinct visual language:

| Directory | Theme | Palette & Mood |
|-----------|-------|----------------|
| `versions/neon-sapphire` | Neon Sapphire | Cyan + blue gradients with precise, crystalline energy |
| `versions/circuit-glow`  | Circuit Glow  | Emerald circuitry inspired by connected, calm automation |
| `versions/quantum-ember` | Quantum Ember | Ember-lit magentas with emotive experiential storytelling |
| `versions/stellar-violet`| Stellar Violet| Luxe indigo nebula with concierge-level polish |

Every variant keeps the copy consistent, adds subtly animated iconography and bordered buttons, and uses tailored CTAs rooted in service-design psychology.

## Prerequisites

- Ubuntu 22.04 LTS or later (instructions apply broadly to most Linux distros)
- Node.js 18 or newer (use `node -v` to confirm)
- npm 8+ (bundled with Node.js 18+)

## Install Dependencies

From the repository root run:

```bash
npm install
```

npm will install dependencies for all four workspaces in one pass.

## Run a Theme Locally

Each theme has dedicated scripts so you can explore them side-by-side.

```bash
# Neon Sapphire
npm run dev:neon
# Circuit Glow
npm run dev:circuit
# Quantum Ember
npm run dev:ember
# Stellar Violet
npm run dev:stellar
```

The Vite server prints a local URL (default http://localhost:5173). Repeat with different terminals and ports if you want multiple versions running simultaneously (`npm run dev -- --port 5174` etc.).

## Build for Production

```bash
npm run build:<theme>
```

Where `<theme>` is `neon`, `circuit`, `ember`, or `stellar`. To compile all variants in one go:

```bash
npm run build:all
```

Preview an individual build locally:

```bash
npm run preview:<theme>
```

## Project Layout

```
versions/
  neon-sapphire/
    index.html
    package.json
    postcss.config.js
    tailwind.config.js
    vite.config.js
    src/
      components/
        layout/     # Navbar, Footer, Animated background shell
        sections/   # Hero, Key Features, Services, Proof Points, Contact
      hooks/        # Intersection observer reveal helper
      App.jsx       # Theme-specific data + composition
      index.css     # Tailwind layers + bespoke palette + animations
      main.jsx      # React entry point
  circuit-glow/...
  quantum-ember/...
  stellar-violet/...
```

Each workspace inherits the same component scaffolding while applying theme-specific CSS variables, gradients, and hover states to achieve unique moods.

## Design Highlights

- **Subtle motion** – Fade-up reveals and gentle float animations respect focus while conveying movement.
- **Bordered glows everywhere** – Buttons and icons are wrapped with understated borders and highlights for tactility.
- **Micro-icon clusters** – Feature cards include supporting glyphs that pulse slightly on hover to spotlight capabilities.
- **Psychology-informed CTAs** – Each hero and services section invites action with time-boxed, value-forward phrasing.
- **Inviting backgrounds** – Layered gradients, grids, and blurred orbs create depth without overwhelming content.

## Export or Share the Source

Need to bundle everything into a portable archive or upload to GitHub? Use the provided export script from the repo root:

```bash
npm run export
```

The command creates `smart-biz-upgrade-source.tar.gz` (excluding `node_modules`, `dist`, and Git metadata). Move that archive to another machine and extract with:

```bash
tar -xzf smart-biz-upgrade-source.tar.gz
```

To publish to your own GitHub repository:

1. Create an empty repository at <https://github.com/new>.
2. Initialize Git in the extracted project (if needed):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add the remote and push:
   ```bash
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```

GitHub automatically provides downloadable ZIP files for every commit, giving you another way to distribute the sources.

## Available Root Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev:<theme>` | Start the dev server for a specific theme. |
| `npm run build:<theme>` | Generate a production build for a theme. |
| `npm run build:all` | Compile every theme at once. |
| `npm run preview:<theme>` | Preview the build output for a theme. |
| `npm run export` | Create a tarball of the repository (minus builds and dependencies). |

Inside each workspace you can also run `npm run lint` or `npm run test` if you add theme-specific tooling later.

## License

MIT

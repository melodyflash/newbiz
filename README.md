# Smart Biz Upgrade React Experience

A React + Vite single-page experience split into dedicated routes for Home, Services, and Contact. Tailwind CSS and
bespoke styles provide an animated tech background, wave-hover call-to-action buttons, and glowing feature cards with
interactive iconography.

## Getting Started

These commands assume you are on Ubuntu 22.04+ with Node.js 18 or newer installed.

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
   The Vite dev server prints a local URL (default http://localhost:5173) that you can open in the browser.
3. **Create a production build**
   ```bash
   npm run build
   ```
4. **Preview the production build locally**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
  components/
    layout/        # Global layout components such as Navbar, Footer, and the animated background
    sections/      # Reusable feature sections used across multiple pages
  hooks/           # Custom React hooks (e.g., intersection observer reveal helper)
  pages/           # Route-level views composed of section components
  App.jsx          # Route configuration
  main.jsx         # React entry point with router
  index.css        # Tailwind layers + custom animation styles
```

## Styling Highlights

- **Wave buttons**: slim pill-shaped CTAs with a left-to-right shimmer on hover.
- **Glowing cards**: glassmorphism panels with animated edge highlights and micro-icons.
- **Animated tech background**: moving grid, gradient orbs, and floating particles rendered once in the layout.
- **Lean routing**: Home, Services, and Contact pages share the same animated layout and navigation shell.

## Downloading or Sharing the Source

Need an archive you can move around or push to GitHub? Run the export script from the project root:

```bash
npm run export
```

The command produces `smart-biz-upgrade-source.tar.gz` in the root directory with the current source (excluding
`node_modules`, build output, and the Git metadata). Copy that archive to any machine where you want to work on the
project, then unpack it with:

```bash
tar -xzf smart-biz-upgrade-source.tar.gz
```

To host the project in your own GitHub repository:

1. [Create a new empty repository](https://github.com/new).
2. Initialize Git (if you are working from the exported archive):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add your GitHub remote and push:
   ```bash
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```

You can now clone from GitHub or download the ZIP GitHub automatically generates on the repository page to compile the
project anywhere.

## Available Scripts

- `npm run dev` – Start Vite in development mode.
- `npm run build` – Build the site for production.
- `npm run preview` – Preview the built assets locally.
- `npm run export` – Create a compressed archive of the current source tree for sharing.

## License

MIT

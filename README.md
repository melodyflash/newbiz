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
- **Download center**: `/downloads` route lists every key component with one-click raw file downloads.

## Downloading Files

Visit `http://localhost:5173/downloads` (or the production equivalent) to grab individual source files. Each card
displays the relative path, line count, and file size; hitting **Download** streams the current file contents as a
plain-text attachment that you can archive locally.

## Available Scripts

- `npm run dev` – Start Vite in development mode.
- `npm run build` – Build the site for production.
- `npm run preview` – Preview the built assets locally.

## License

MIT

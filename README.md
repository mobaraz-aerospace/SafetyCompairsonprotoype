
# SystemCompare — Prototype Static Web App

This is a lightweight static prototype you can deploy immediately (GitHub Pages, Netlify, Vercel static site, or any static host).

## What is included
- `index.html` — single-page UI using Chart.js for radar chart and simple SVG diagrams.
- `styles.css` — styling (dark theme).
- `app.js` — lightweight logic and illustrative product dataset (Airbus A320, Boeing 737, Hitachi CBTC, Siemens Trainguard).
- `README.md` — this file.

## How to deploy
### Option A — GitHub Pages
1. Create a new repository and upload these files to the repository root.
2. Enable GitHub Pages from the repository settings (choose main branch / root).
3. Visit the provided GitHub Pages URL.

### Option B — Netlify / Vercel
1. Drag-and-drop the project folder into Netlify's "Sites" panel or deploy via Vercel's "Import Project" and point at a repo.
2. Both platforms will serve the static site automatically.

## Next steps to turn prototype into production
- Replace the illustrative `PRODUCTS` array with a backend-driven catalog (Postgres or headless CMS).
- Implement authentication & saved comparisons if needed.
- Add precise architecture diagrams and more detailed scenario modeling.
- Validate all technical content with domain experts and watch for IP/licensing for proprietary product specs.


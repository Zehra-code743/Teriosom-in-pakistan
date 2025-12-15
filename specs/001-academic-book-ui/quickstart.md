# Quickstart: Academic Book UI Development

**Feature**: 001-academic-book-ui
**Date**: 2025-12-15

## Prerequisites

- Node.js 20.0 or higher
- npm or yarn package manager
- Git

## Setup

### 1. Clone and Install

```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd book

# Install dependencies
npm install
```

### 2. Start Development Server

```bash
npm start
```

This starts the Docusaurus development server at `http://localhost:3000` with hot-reload enabled.

### 3. Verify Current State

Open `http://localhost:3000` and confirm:
- Site loads with current Docusaurus template
- Navbar is visible
- Feature cards display

---

## Development Workflow

### Making Style Changes

1. Edit `src/css/custom.css` for global styles
2. Edit `*.module.css` files for component-specific styles
3. Changes hot-reload automatically

### Modifying Components

1. Edit TSX files in `src/pages/` or `src/components/`
2. TypeScript errors shown in browser console
3. Run `npm run typecheck` for full type validation

### Adding Content

1. Create markdown files in `docs/` directory
2. Add frontmatter with `sidebar_position`
3. Content appears in sidebar automatically

### Building for Production

```bash
npm run build
```

Output goes to `build/` directory.

### Serving Production Build

```bash
npm run serve
```

Serves the production build at `http://localhost:3000`.

---

## Key Files to Modify

| Purpose | File |
|---------|------|
| Site branding | `docusaurus.config.ts` |
| Global colors/typography | `src/css/custom.css` |
| Homepage hero | `src/pages/index.tsx` |
| Hero styles | `src/pages/index.module.css` |
| Feature cards | `src/components/HomepageFeatures/index.tsx` |
| Feature styles | `src/components/HomepageFeatures/styles.module.css` |
| Introduction | `docs/intro.md` |

---

## Testing

### Manual Testing Checklist

1. **Visual verification**
   - [ ] Hero gradient displays correctly
   - [ ] Feature cards show light gradients
   - [ ] Typography is readable

2. **Navigation**
   - [ ] All navbar links work
   - [ ] Feature cards link to chapters
   - [ ] Home logo returns to homepage

3. **Responsive**
   - [ ] Test at 320px (mobile)
   - [ ] Test at 768px (tablet)
   - [ ] Test at 1920px (desktop)

4. **Accessibility**
   - [ ] Run Lighthouse audit (target: 90+)
   - [ ] Test keyboard navigation
   - [ ] Check color contrast

### Running Lighthouse

1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run audit for "Accessibility" and "Performance"
4. Target scores: Accessibility ≥ 90, Performance ≥ 90

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm start -- --port 3001
```

### TypeScript Errors

```bash
# Run type check
npm run typecheck

# Clear cache and rebuild
npm run clear
npm start
```

### Styles Not Updating

1. Hard refresh browser (Ctrl+Shift+R)
2. Clear Docusaurus cache: `npm run clear`
3. Restart dev server

### Build Failures

```bash
# Check for errors
npm run build 2>&1 | head -50

# Common fixes
npm run clear
rm -rf node_modules
npm install
npm run build
```

---

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server |
| `npm run build` | Production build |
| `npm run serve` | Serve production build |
| `npm run clear` | Clear cache |
| `npm run typecheck` | Check TypeScript |
| `npm run swizzle` | Eject theme components |

---

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus Styling Guide](https://docusaurus.io/docs/styling-layout)
- [Infima CSS Framework](https://infima.dev/)
- [CSS Custom Properties](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)

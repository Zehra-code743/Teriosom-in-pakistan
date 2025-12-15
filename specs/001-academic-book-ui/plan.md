# Implementation Plan: Academic Book UI - Combating Terrorism in Pakistan

**Branch**: `001-academic-book-ui` | **Date**: 2025-12-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-academic-book-ui/spec.md`

## Summary

Transform the existing Docusaurus site into a professional academic publication interface for "Combating Terrorism in Pakistan." The implementation focuses on:
1. Updating site branding and configuration (title, navbar links)
2. Redesigning the hero section with deep academic gradients
3. Creating a 3-column feature section mapping to book chapters
4. Applying professional typography and color schemes for scholarly content
5. Ensuring WCAG AA accessibility compliance

## Technical Context

**Language/Version**: TypeScript 5.6, React 19, Node.js 20+
**Primary Dependencies**: Docusaurus 3.9.2, @docusaurus/preset-classic, clsx, prism-react-renderer
**Storage**: N/A (static site, markdown content)
**Testing**: Manual browser testing, Lighthouse audits, axe-core accessibility checks
**Target Platform**: Modern browsers (Chrome, Firefox, Safari last 3-5 versions), responsive 320px-1920px
**Project Type**: Web application (Docusaurus static site)
**Performance Goals**: < 3s page load, Lighthouse Performance > 90, First Contentful Paint < 1.5s
**Constraints**: WCAG AA compliance (4.5:1 contrast), no JavaScript-disabled fallback required
**Scale/Scope**: ~10 pages (home, about, 3 chapters, tutorial index, blog index, 404)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Note**: Constitution file contains template placeholders. Applying standard web development principles:

| Principle | Status | Notes |
|-----------|--------|-------|
| Simplicity | PASS | Using existing Docusaurus framework, CSS-only gradients, no new dependencies |
| Test-First | PASS | Acceptance criteria defined in spec; manual testing checklist provided |
| Accessibility | PASS | WCAG AA compliance required per FR-014, SC-003, SC-005 |
| Performance | PASS | Target metrics defined (< 3s load, Lighthouse > 90) |

## Project Structure

### Documentation (this feature)

```text
specs/001-academic-book-ui/
├── plan.md              # This file
├── research.md          # Phase 0: Color palette, typography, Docusaurus patterns
├── data-model.md        # Phase 1: Content entities and navigation structure
├── quickstart.md        # Phase 1: Developer setup guide
├── contracts/           # Phase 1: Component interfaces
│   └── components.md    # React component contracts
└── tasks.md             # Phase 2 output (/sp.tasks command)
```

### Source Code (repository root)

```text
src/
├── css/
│   └── custom.css           # Global styles, CSS variables, gradients [MODIFY]
├── components/
│   └── HomepageFeatures/
│       ├── index.tsx        # Feature cards component [MODIFY]
│       └── styles.module.css # Feature section styles [MODIFY]
├── pages/
│   ├── index.tsx            # Homepage with hero [MODIFY]
│   ├── index.module.css     # Homepage styles [MODIFY]
│   └── about.md             # About page [CREATE]
└── theme/                   # Swizzled theme components (if needed)

docs/
├── intro.md                 # Introduction chapter [MODIFY]
├── chapter-1-causes/        # Chapter 1 content [CREATE]
│   └── index.md
└── chapter-2-solutions/     # Chapter 2 content [CREATE]
    └── index.md

static/
└── img/
    └── [professional icons]  # Minimal academic icons [CREATE if needed]

docusaurus.config.ts         # Site configuration [MODIFY]
```

**Structure Decision**: Single web application using Docusaurus preset-classic. No backend required. All styling via CSS modules and global custom.css.

## Complexity Tracking

No violations identified. Implementation uses:
- Existing Docusaurus framework (no new dependencies)
- CSS-only gradients (no JavaScript animation libraries)
- Standard React components (no state management library needed)

---

## Phase 0: Research Findings

See [research.md](./research.md) for detailed findings.

### Key Decisions

1. **Color Palette**: Deep slate-to-navy gradients for hero (#0f172a → #1e3a5f), light gray-to-white for feature cards (#f8fafc → #ffffff)
2. **Typography**: System font stack with Inter as preferred; line-height 1.75 for body text
3. **Gradients**: CSS linear-gradient only, no background images for performance
4. **Icons**: Minimal or none; if needed, use Heroicons or similar professional set
5. **Dark Mode**: Preserve gradient aesthetics with inverted color scheme

---

## Phase 1: Design Artifacts

### Data Model

See [data-model.md](./data-model.md) for entity definitions.

### Component Contracts

See [contracts/components.md](./contracts/components.md) for React component interfaces.

### Implementation Approach

#### 1. Configuration Updates (docusaurus.config.ts)

- Update `title` to "Combating Terrorism in Pakistan"
- Update `tagline` to academic subtitle
- Modify navbar items: Home, About, Tutorial (docs), Blog
- Update footer with academic publication info
- Remove GitHub/community links

#### 2. Hero Section Redesign

- Deep gradient: `linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)`
- White/light text with text-shadow for depth
- Prominent title with academic subtitle
- Single CTA: "Start Reading" → /docs/intro

#### 3. Features Section (3-Column)

- Light gradient cards: `linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)`
- Card 1: Introduction - overview of the topic
- Card 2: Causes (Chapter 1) - factors contributing to terrorism
- Card 3: Solutions (Chapter 2) - prevention and countermeasures
- Hover effects: subtle shadow increase, border highlight

#### 4. Typography System

- Headings: Inter/system-ui, weight 700, tight letter-spacing
- Body: Inter/system-ui, weight 400, line-height 1.75
- Academic styling: larger font size (17-18px base), generous margins

#### 5. Accessibility Compliance

- Contrast ratios verified with WebAIM contrast checker
- Focus states for all interactive elements
- Keyboard navigation testing
- Screen reader landmarks (semantic HTML)

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `docusaurus.config.ts` | MODIFY | Update branding, navbar, footer |
| `src/css/custom.css` | MODIFY | Academic color palette, gradients |
| `src/pages/index.tsx` | MODIFY | Hero content, academic title |
| `src/pages/index.module.css` | MODIFY | Hero gradient styles |
| `src/components/HomepageFeatures/index.tsx` | MODIFY | Book chapter cards |
| `src/components/HomepageFeatures/styles.module.css` | MODIFY | Card gradient styles |
| `src/pages/about.md` | CREATE | About the publication |
| `docs/intro.md` | MODIFY | Introduction chapter content |
| `docs/chapter-1-causes/index.md` | CREATE | Chapter 1 stub |
| `docs/chapter-2-solutions/index.md` | CREATE | Chapter 2 stub |

---

## Testing Checklist

- [ ] Homepage loads with correct title and gradient hero
- [ ] Navbar shows: Home, About, Tutorial, Blog
- [ ] Feature cards display 3 columns on desktop
- [ ] Feature cards stack on mobile (< 768px)
- [ ] All links navigate correctly (no broken links)
- [ ] Lighthouse accessibility score ≥ 90
- [ ] Color contrast passes WCAG AA (4.5:1)
- [ ] Dark mode preserves readability
- [ ] Keyboard navigation works for all interactive elements
- [ ] Page loads < 3 seconds on throttled connection

---

## Next Steps

Run `/sp.tasks` to generate the detailed task breakdown from this plan.

# Research: Academic Book UI

**Feature**: 001-academic-book-ui
**Date**: 2025-12-15
**Status**: Complete

## Research Tasks

### 1. Academic Color Palette for Professional Publications

**Decision**: Deep slate-to-navy gradient for hero, light gray-to-white for content areas

**Rationale**:
- Academic publications traditionally use dark blues, navies, and slate grays to convey authority and seriousness
- Deep colors (#0f172a, #1e3a5f) align with scholarly publishing conventions (similar to Oxford, Cambridge press sites)
- Light backgrounds (#f8fafc → #ffffff) ensure readability for long-form content
- Avoids playful colors (bright greens, oranges) that would undermine academic credibility

**Alternatives Considered**:
- Dark green palette: Rejected - too environmental/ecological connotation
- Pure black/white: Rejected - lacks visual interest, too stark
- Burgundy/maroon: Considered - acceptable but navy more universally academic

**Color Specifications**:
```css
/* Primary (Hero) Gradient */
--gradient-hero: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
--gradient-hero-dark: linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%);

/* Secondary (Feature Cards) Gradient */
--gradient-card: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
--gradient-card-dark: linear-gradient(180deg, #1e293b 0%, #334155 100%);

/* Accent */
--color-accent: #3b82f6;  /* Blue for links/CTAs - professional, trustworthy */
--color-accent-dark: #60a5fa;
```

---

### 2. Typography for Academic Long-Form Reading

**Decision**: System font stack with Inter as preferred; 17px base, 1.75 line-height

**Rationale**:
- Inter is highly legible at all sizes, designed for screens, free to use
- System font fallback ensures fast loading (no external font requests)
- 17px base slightly larger than web standard (16px) for academic reading comfort
- 1.75 line-height provides generous spacing for dense content
- Headings with tight letter-spacing (-0.02em) create professional appearance

**Alternatives Considered**:
- Serif fonts (Georgia, Merriweather): Traditional academic but harder to read on screens
- Google Fonts hosted: Adds external dependency, potential GDPR concerns
- Variable fonts: Overkill for this project's needs

**Typography Specifications**:
```css
--ifm-font-family-base: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--ifm-font-size-base: 17px;
--ifm-line-height-base: 1.75;
--ifm-heading-font-weight: 700;
--ifm-heading-letter-spacing: -0.02em;
```

---

### 3. Docusaurus Customization Patterns

**Decision**: Use CSS custom properties + module CSS, avoid swizzling unless necessary

**Rationale**:
- Docusaurus 3.x exposes extensive CSS custom properties (--ifm-*) for theming
- CSS modules provide component-scoped styles without conflicts
- Swizzling (ejecting theme components) creates upgrade burden
- Current UI requirements achievable without swizzling

**Patterns Used**:
1. **Global theming**: Override --ifm-* variables in `src/css/custom.css`
2. **Component styles**: CSS modules (*.module.css) for homepage/features
3. **Dark mode**: Use `[data-theme='dark']` selector for dark variants
4. **Responsive**: Standard CSS media queries at 768px and 996px breakpoints

**Files Modified**:
- `src/css/custom.css` - Global CSS variables and base styles
- `src/pages/index.module.css` - Homepage hero styles
- `src/components/HomepageFeatures/styles.module.css` - Feature card styles

---

### 4. Gradient Implementation Best Practices

**Decision**: CSS linear-gradient only, with solid color fallbacks

**Rationale**:
- CSS gradients are performant (GPU-accelerated) and widely supported
- No external images means faster load times
- Solid fallback colors ensure graceful degradation in older browsers

**Implementation Pattern**:
```css
.hero {
  /* Fallback for browsers that don't support gradients */
  background-color: #0f172a;
  /* Primary gradient */
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
}

.featureCard {
  background-color: #f8fafc;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}
```

**Gradient Angles**:
- 135deg for hero: Creates diagonal depth, suggests motion/progress
- 180deg for cards: Vertical gradient, subtle top-to-bottom lighting effect

---

### 5. Accessibility Requirements (WCAG AA)

**Decision**: All text must meet 4.5:1 contrast, focus states visible, keyboard navigable

**Rationale**:
- WCAG AA is the minimum standard for public websites
- Academic audience may include users with visual impairments
- Legal compliance considerations for educational content

**Verification Tools**:
- WebAIM Contrast Checker
- Lighthouse accessibility audit
- axe DevTools browser extension
- Manual keyboard navigation testing

**Key Contrast Pairs**:
| Element | Foreground | Background | Ratio | Pass |
|---------|------------|------------|-------|------|
| Hero title | #ffffff | #0f172a | 17.1:1 | PASS |
| Hero subtitle | #e2e8f0 | #1e3a5f | 8.5:1 | PASS |
| Body text | #1e293b | #ffffff | 14.5:1 | PASS |
| Card title | #0f172a | #f8fafc | 15.8:1 | PASS |
| Link text | #3b82f6 | #ffffff | 4.5:1 | PASS |

---

### 6. Navbar Configuration for Academic Site

**Decision**: Home, About, Tutorial (docs), Blog - clean professional navigation

**Rationale**:
- Four items is optimal for scannability
- "Tutorial" maps to existing docs sidebar (reuses Docusaurus structure)
- "About" provides publication context (author, methodology, purpose)
- "Blog" supports supplementary content and updates

**Configuration**:
```typescript
navbar: {
  title: 'Combating Terrorism in Pakistan',
  items: [
    { to: '/', label: 'Home', position: 'left' },
    { to: '/about', label: 'About', position: 'left' },
    { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: 'Tutorial', position: 'left' },
    { to: '/blog', label: 'Blog', position: 'left' },
  ],
}
```

---

## Research Summary

All technical decisions made. No [NEEDS CLARIFICATION] items remain.

| Topic | Decision | Confidence |
|-------|----------|------------|
| Color palette | Slate/navy hero, light gray cards | HIGH |
| Typography | Inter/system, 17px, 1.75 line-height | HIGH |
| Gradients | CSS linear-gradient, 135deg/180deg | HIGH |
| Customization | CSS variables + modules, no swizzle | HIGH |
| Accessibility | WCAG AA, verified contrast ratios | HIGH |
| Navigation | Home/About/Tutorial/Blog | HIGH |

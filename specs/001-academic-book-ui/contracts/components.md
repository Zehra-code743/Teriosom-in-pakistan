# Component Contracts: Academic Book UI

**Feature**: 001-academic-book-ui
**Date**: 2025-12-15

## Overview

This document defines the React component interfaces for the academic book UI. These contracts specify the props, behavior, and styling expectations for each component.

---

## 1. HomepageHeader

**Location**: `src/pages/index.tsx`

**Purpose**: Hero section with academic title, subtitle, and CTA

### Props Interface

```typescript
// No external props - uses Docusaurus context
interface HomepageHeaderProps {
  // Component uses useDocusaurusContext() for title/tagline
}
```

### Behavior

- Renders hero section with deep gradient background
- Displays site title from `siteConfig.title`
- Displays tagline from `siteConfig.tagline`
- Includes animated background shapes (optional, accessibility-respecting)
- Contains primary CTA button linking to `/docs/intro`

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.heroBanner` | Hero container with gradient background |
| `.heroContent` | Content wrapper with fade-in animation |
| `.heroTitle` | Title styling (white, large, bold) |
| `.heroSubtitle` | Subtitle styling (off-white, medium) |
| `.buttons` | CTA button container |
| `.heroButtonPrimary` | Primary CTA styling |

### Accessibility Requirements

- Title must be `<h1>` element
- CTA button must have descriptive text (not just "Click here")
- Background animation must respect `prefers-reduced-motion`
- Contrast ratio: white text on dark gradient ≥ 7:1

---

## 2. HomepageFeatures

**Location**: `src/components/HomepageFeatures/index.tsx`

**Purpose**: 3-column feature cards showcasing book chapters

### Props Interface

```typescript
// No external props - data defined internally
interface HomepageFeaturesProps {
  // Self-contained component with internal FeatureList
}

// Internal type
interface FeatureItem {
  title: string;
  description: ReactNode;
  link: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
}
```

### Behavior

- Renders exactly 3 feature cards in a row (desktop)
- Cards stack vertically on mobile (< 768px)
- Each card is clickable, navigating to the linked chapter
- Cards display hover effect (lift + shadow)
- Section includes header with title "Explore the Book"

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.features` | Section container |
| `.sectionHeader` | Section title area |
| `.sectionTitle` | "Explore the Book" heading |
| `.featureRow` | Flexbox row for cards |
| `.featureCard` | Individual card with gradient |
| `.featureIconWrapper` | Icon container with gradient |
| `.featureSvg` | Icon styling |
| `.featureTitle` | Card title (h3) |
| `.featureDescription` | Card description text |

### Feature Data Contract

```typescript
const FeatureList: FeatureItem[] = [
  {
    title: 'Introduction',
    description: (
      <>
        An overview of terrorism in Pakistan, its historical context,
        and the scope of this academic study.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Causes of Terrorism',
    description: (
      <>
        Chapter 1 examines the socioeconomic, political, and ideological
        factors contributing to terrorism in Pakistan.
      </>
    ),
    link: '/docs/chapter-1-causes',
  },
  {
    title: 'Prevention & Solutions',
    description: (
      <>
        Chapter 2 explores evidence-based prevention strategies, policy
        recommendations, and paths toward lasting peace.
      </>
    ),
    link: '/docs/chapter-2-solutions',
  },
];
```

### Accessibility Requirements

- Cards must be keyboard navigable (tabindex, focus styles)
- Card titles must be heading elements (h3)
- Links must have descriptive text
- Hover states must also work with focus states

---

## 3. Layout (Docusaurus Theme)

**Location**: `@theme/Layout` (Docusaurus built-in)

**Purpose**: Page wrapper with navbar, footer, and metadata

### Usage

```tsx
import Layout from '@theme/Layout';

export default function Page(): ReactNode {
  return (
    <Layout
      title="Page Title"
      description="SEO description for this page">
      {/* Page content */}
    </Layout>
  );
}
```

### Props Interface (Docusaurus-provided)

```typescript
interface LayoutProps {
  title?: string;      // Page title (appended to site title)
  description?: string; // Meta description
  noFooter?: boolean;   // Hide footer
  wrapperClassName?: string; // Custom wrapper class
  children: ReactNode;
}
```

---

## 4. Feature Card (Internal Component)

**Location**: `src/components/HomepageFeatures/index.tsx`

**Purpose**: Single feature card within the features section

### Props Interface

```typescript
interface FeatureCardProps {
  title: string;
  description: ReactNode;
  link: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
}
```

### Behavior

- Renders as clickable `<article>` element
- Wraps content in `<Link>` for navigation
- Displays title, description, optional icon
- Applies hover effect on mouse/focus

### Render Structure

```tsx
function Feature({ title, description, link, Svg }: FeatureCardProps) {
  return (
    <Link to={link} className={styles.featureCard}>
      <article>
        {Svg && (
          <div className={styles.featureIconWrapper}>
            <Svg className={styles.featureSvg} role="img" aria-hidden="true" />
          </div>
        )}
        <div className="text--center">
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </article>
    </Link>
  );
}
```

---

## CSS Variable Contract

Components depend on these CSS custom properties defined in `src/css/custom.css`:

```css
/* Colors */
--ifm-color-primary: #3b82f6;
--ifm-color-primary-dark: #2563eb;
--color-surface: #ffffff;
--color-surface-elevated: #f8fafc;
--color-border: #e2e8f0;
--color-text-muted: #64748b;

/* Typography */
--ifm-font-family-base: 'Inter', system-ui, ...;
--ifm-font-size-base: 17px;
--ifm-line-height-base: 1.75;
--ifm-heading-font-weight: 700;

/* Spacing */
--ifm-spacing-horizontal: 1.5rem;
--ifm-spacing-vertical: 1rem;

/* Effects */
--ifm-global-shadow-lw: 0 1px 3px rgba(0, 0, 0, 0.08);
--ifm-global-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;

/* Gradients (custom) */
--gradient-hero: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
--gradient-card: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
```

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 768px | Single column, stacked cards |
| Tablet | 768px - 996px | 2-column cards, collapsed nav |
| Desktop | > 996px | 3-column cards, full nav |

---

## Testing Contracts

Each component must pass these tests:

### HomepageHeader
- [ ] Renders with correct title from config
- [ ] CTA button navigates to /docs/intro
- [ ] Gradient background visible
- [ ] Animation respects reduced-motion

### HomepageFeatures
- [ ] Renders exactly 3 cards
- [ ] Cards link to correct chapter paths
- [ ] Cards stack on mobile viewport
- [ ] Hover effects work with keyboard focus

### Layout
- [ ] Navbar displays all 4 items
- [ ] Footer renders with dark background
- [ ] Dark mode toggle works

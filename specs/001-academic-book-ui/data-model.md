# Data Model: Academic Book UI

**Feature**: 001-academic-book-ui
**Date**: 2025-12-15

## Overview

This document defines the content entities and their relationships for the academic book site. Since this is a static Docusaurus site, "data model" refers to content structure rather than database schema.

---

## Entities

### 1. Site Configuration

**Purpose**: Global site settings and branding

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Site title: "Combating Terrorism in Pakistan" |
| tagline | string | Yes | Academic subtitle/description |
| url | string | Yes | Production URL |
| favicon | string | Yes | Path to favicon image |
| logo | object | No | Navbar logo configuration |

**Location**: `docusaurus.config.ts`

---

### 2. Navigation Item

**Purpose**: Menu entries in the navbar

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| label | string | Yes | Display text (Home, About, Tutorial, Blog) |
| to | string | Conditional | Internal route path |
| href | string | Conditional | External URL |
| position | enum | Yes | "left" or "right" |
| type | string | No | Special type ("docSidebar" for docs) |
| sidebarId | string | Conditional | Required if type is "docSidebar" |

**Location**: `docusaurus.config.ts` → `themeConfig.navbar.items`

**Instances**:
1. Home → `/`
2. About → `/about`
3. Tutorial → docSidebar (tutorialSidebar)
4. Blog → `/blog`

---

### 3. Feature Card

**Purpose**: Homepage feature showcasing book chapters

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Card heading |
| description | ReactNode | Yes | 2-3 sentence summary |
| link | string | Yes | Target documentation path |
| icon | SVG Component | No | Optional professional icon |

**Location**: `src/components/HomepageFeatures/index.tsx`

**Instances**:
```typescript
const FeatureList: FeatureItem[] = [
  {
    title: 'Introduction',
    description: 'An overview of terrorism in Pakistan...',
    link: '/docs/intro',
  },
  {
    title: 'Causes of Terrorism',
    description: 'Chapter 1 examines the root causes...',
    link: '/docs/chapter-1-causes',
  },
  {
    title: 'Prevention & Solutions',
    description: 'Chapter 2 explores prevention strategies...',
    link: '/docs/chapter-2-solutions',
  },
];
```

---

### 4. Chapter (Documentation Page)

**Purpose**: Academic content unit in the docs section

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Auto | Derived from filename |
| title | string | Yes | Chapter title (frontmatter) |
| sidebar_label | string | No | Shorter label for sidebar |
| sidebar_position | number | Yes | Order in sidebar |
| description | string | No | SEO meta description |
| content | markdown | Yes | Chapter body text |

**Location**: `docs/` directory

**Hierarchy**:
```
docs/
├── intro.md                    (position: 1)
├── chapter-1-causes/
│   └── index.md               (position: 2)
└── chapter-2-solutions/
    └── index.md               (position: 3)
```

---

### 5. Blog Post

**Purpose**: Time-stamped articles and updates

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| slug | string | Auto | URL-friendly identifier |
| title | string | Yes | Post title |
| authors | array | Yes | Author references |
| tags | array | No | Categorization tags |
| date | date | Yes | Publication date (from filename) |
| content | markdown | Yes | Post body |

**Location**: `blog/` directory

---

### 6. Page (Standalone)

**Purpose**: Non-documentation pages like About

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Page title (frontmatter) |
| description | string | No | SEO meta description |
| content | markdown/JSX | Yes | Page content |

**Location**: `src/pages/`

**Instances**:
- `src/pages/about.md` - About the publication

---

## Relationships

```
Site Configuration
    │
    ├── Navigation Items [1:N]
    │       │
    │       └── links to → Pages, Docs, Blog
    │
    ├── Feature Cards [1:3]
    │       │
    │       └── links to → Chapters
    │
    └── Theme Config
            │
            ├── Footer Links [1:N]
            └── Color Mode Settings
```

---

## Content Flow

```
User lands on Homepage
    │
    ├── Hero Section
    │   └── CTA → docs/intro.md
    │
    ├── Feature Cards (3)
    │   ├── Card 1 → docs/intro.md
    │   ├── Card 2 → docs/chapter-1-causes/index.md
    │   └── Card 3 → docs/chapter-2-solutions/index.md
    │
    └── Navbar
        ├── Home → /
        ├── About → /about
        ├── Tutorial → docs sidebar
        └── Blog → /blog
```

---

## Validation Rules

### Feature Card
- `title`: Required, max 50 characters
- `description`: Required, 100-300 characters
- `link`: Must be valid internal path starting with `/docs/`

### Chapter
- `sidebar_position`: Must be unique within directory
- `title`: Required, displayed in sidebar and page header

### Navigation
- Maximum 5 navbar items for usability
- No duplicate `to` paths allowed

---

## State Transitions

Not applicable - static content site with no dynamic state.

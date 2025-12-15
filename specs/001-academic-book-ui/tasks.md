# Tasks: Academic Book UI - Combating Terrorism in Pakistan

**Input**: Design documents from `/specs/001-academic-book-ui/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Manual browser testing only (no automated tests specified in requirements)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Project type**: Docusaurus static site
- **Source**: `src/` for React components, `docs/` for content
- **Config**: `docusaurus.config.ts` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Site configuration and branding foundation

- [x] T001 Update site title to "Combating Terrorism in Pakistan" in docusaurus.config.ts
- [x] T002 Update tagline to academic subtitle in docusaurus.config.ts
- [x] T003 [P] Remove default GitHub/community links from footer in docusaurus.config.ts
- [x] T004 [P] Update footer copyright and publication info in docusaurus.config.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core styling infrastructure that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Define academic color palette CSS variables in src/css/custom.css (hero gradient: #0f172a → #1e3a5f, card gradient: #f8fafc → #ffffff)
- [x] T006 [P] Define typography system CSS variables in src/css/custom.css (Inter font, 17px base, 1.75 line-height)
- [x] T007 [P] Define dark mode color overrides in src/css/custom.css ([data-theme='dark'] selector)
- [x] T008 [P] Define accessibility-compliant focus states in src/css/custom.css

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Academic Reader Discovers Content (Priority: P1) 🎯 MVP

**Goal**: Visitor sees hero with academic title, gradient background, and clear navigation to content

**Independent Test**: Load homepage, verify hero displays "Combating Terrorism in Pakistan" with deep gradient and visible CTA button

### Implementation for User Story 1

- [x] T009 [US1] Update HomepageHeader title rendering in src/pages/index.tsx
- [x] T010 [P] [US1] Implement deep gradient hero background in src/pages/index.module.css (.heroBanner class)
- [x] T011 [P] [US1] Style hero title with white text and text-shadow in src/pages/index.module.css (.heroTitle class)
- [x] T012 [P] [US1] Style hero subtitle with off-white color in src/pages/index.module.css (.heroSubtitle class)
- [x] T013 [US1] Update CTA button to "Start Reading" linking to /docs/intro in src/pages/index.tsx
- [x] T014 [US1] Style CTA button with academic appearance in src/pages/index.module.css (.heroButtonPrimary class)
- [x] T015 [US1] Add prefers-reduced-motion support for any animations in src/pages/index.module.css

**Checkpoint**: User Story 1 complete - hero section displays academic content with professional styling

---

## Phase 4: User Story 2 - Navigate Book Chapters via Features (Priority: P1)

**Goal**: 3-column feature cards link to book chapters with light gradient styling

**Independent Test**: Click each feature card, verify navigation to correct chapter content (/docs/intro, /docs/chapter-1-causes, /docs/chapter-2-solutions)

### Implementation for User Story 2

- [x] T016 [US2] Update FeatureList data with book chapter content in src/components/HomepageFeatures/index.tsx (Introduction, Causes, Solutions)
- [x] T017 [P] [US2] Add link property to FeatureItem type in src/components/HomepageFeatures/index.tsx
- [x] T018 [US2] Wrap feature cards in Link components for navigation in src/components/HomepageFeatures/index.tsx
- [x] T019 [P] [US2] Implement light gradient card backgrounds in src/components/HomepageFeatures/styles.module.css (.featureCard class)
- [x] T020 [P] [US2] Add hover effects (lift + shadow) to cards in src/components/HomepageFeatures/styles.module.css
- [x] T021 [P] [US2] Add keyboard focus styles matching hover styles in src/components/HomepageFeatures/styles.module.css
- [x] T022 [US2] Add section header "Explore the Book" in src/components/HomepageFeatures/index.tsx
- [x] T023 [P] [US2] Create docs/chapter-1-causes/index.md with stub content and sidebar_position: 2
- [x] T024 [P] [US2] Create docs/chapter-2-solutions/index.md with stub content and sidebar_position: 3
- [x] T025 [US2] Update docs/intro.md with academic introduction content and sidebar_position: 1

**Checkpoint**: User Story 2 complete - feature cards navigate to all book chapters

---

## Phase 5: User Story 3 - Access Site Information via Navbar (Priority: P2)

**Goal**: Navbar displays Home, About, Tutorial, Blog links that all work correctly

**Independent Test**: Click each navbar link, verify correct destination page loads

### Implementation for User Story 3

- [x] T026 [US3] Update navbar items to Home, About, Tutorial, Blog in docusaurus.config.ts
- [x] T027 [P] [US3] Configure Home link to "/" in docusaurus.config.ts
- [x] T028 [P] [US3] Configure About link to "/about" in docusaurus.config.ts
- [x] T029 [P] [US3] Configure Tutorial as docSidebar type with tutorialSidebar in docusaurus.config.ts
- [x] T030 [P] [US3] Configure Blog link to "/blog" in docusaurus.config.ts
- [x] T031 [US3] Create src/pages/about.md with publication information (title, author context, methodology)
- [x] T032 [US3] Update navbar title to match site title in docusaurus.config.ts

**Checkpoint**: User Story 3 complete - all navbar links navigate correctly

---

## Phase 6: User Story 4 - Read Content with Professional Typography (Priority: P2)

**Goal**: Chapter content displays with optimized typography for academic reading

**Independent Test**: Navigate to any chapter, read content for 5+ minutes, verify comfortable readability

### Implementation for User Story 4

- [x] T033 [US4] Apply heading font styles (weight 700, tight letter-spacing) in src/css/custom.css
- [x] T034 [P] [US4] Set body text line-height to 1.75 in src/css/custom.css
- [x] T035 [P] [US4] Configure paragraph spacing for academic content in src/css/custom.css
- [x] T036 [P] [US4] Set base font size to 17px in src/css/custom.css
- [x] T037 [US4] Ensure heading hierarchy (h1-h4) has distinct visual styling in src/css/custom.css
- [x] T038 [US4] Style blockquotes and code blocks for academic content in src/css/custom.css

**Checkpoint**: User Story 4 complete - documentation has professional academic typography

---

## Phase 7: User Story 5 - Mobile Access (Priority: P3)

**Goal**: Site works correctly on mobile devices with stacked layout and readable text

**Independent Test**: View site at 320px viewport width, verify navbar collapses and cards stack vertically

### Implementation for User Story 5

- [x] T039 [US5] Add mobile breakpoint (< 768px) for hero section in src/pages/index.module.css
- [x] T040 [P] [US5] Implement single-column card layout for mobile in src/components/HomepageFeatures/styles.module.css
- [x] T041 [P] [US5] Adjust hero padding for mobile screens in src/pages/index.module.css
- [x] T042 [P] [US5] Ensure text sizes scale appropriately for mobile in src/css/custom.css
- [x] T043 [US5] Test navbar hamburger menu functionality (Docusaurus built-in)
- [x] T044 [US5] Add tablet breakpoint (768px - 996px) adjustments in src/components/HomepageFeatures/styles.module.css

**Checkpoint**: User Story 5 complete - site fully responsive across all viewport sizes

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility compliance, dark mode, and final verification

- [x] T045 [P] Verify all color contrast ratios meet WCAG AA (4.5:1) using WebAIM tool
- [x] T046 [P] Test keyboard navigation through all interactive elements
- [x] T047 [P] Verify dark mode preserves gradient aesthetics in src/css/custom.css
- [x] T048 [P] Test all internal links for 404 errors
- [ ] T049 Run Lighthouse accessibility audit (target: 90+)
- [ ] T050 Run Lighthouse performance audit (target: < 3s load)
- [x] T051 Update sidebars.ts if needed for new chapter structure
- [ ] T052 Final visual review of all pages on desktop and mobile

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational
- **User Story 2 (Phase 4)**: Depends on Foundational (can run parallel to US1)
- **User Story 3 (Phase 5)**: Depends on Foundational (can run parallel to US1/US2)
- **User Story 4 (Phase 6)**: Depends on Foundational (can run parallel)
- **User Story 5 (Phase 7)**: Depends on US1, US2 completion (responsive requires base styles)
- **Polish (Phase 8)**: Depends on all user stories complete

### User Story Dependencies

- **US1 (P1)**: Independent after Foundational - Hero section only
- **US2 (P1)**: Independent after Foundational - Needs chapter stub files created
- **US3 (P2)**: Independent after Foundational - Navbar config only
- **US4 (P2)**: Independent after Foundational - Typography CSS only
- **US5 (P3)**: Requires US1, US2 base styles to add responsive overrides

### Parallel Opportunities Within Stories

**Phase 2 (Foundational)**:
- T006, T007, T008 can all run in parallel after T005

**Phase 3 (US1)**:
- T010, T011, T012 can run in parallel (different CSS classes)

**Phase 4 (US2)**:
- T019, T020, T021 can run in parallel (different CSS classes)
- T023, T024 can run in parallel (different files)

**Phase 5 (US3)**:
- T027, T028, T029, T030 can run in parallel (different navbar items)

**Phase 8 (Polish)**:
- T045, T046, T047, T048 can all run in parallel

---

## Parallel Example: User Story 2

```bash
# Launch parallel CSS tasks:
Task: "Implement light gradient card backgrounds in src/components/HomepageFeatures/styles.module.css"
Task: "Add hover effects to cards in src/components/HomepageFeatures/styles.module.css"
Task: "Add keyboard focus styles in src/components/HomepageFeatures/styles.module.css"

# Launch parallel content tasks:
Task: "Create docs/chapter-1-causes/index.md"
Task: "Create docs/chapter-2-solutions/index.md"
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2 Only)

1. Complete Phase 1: Setup (T001-T004)
2. Complete Phase 2: Foundational (T005-T008)
3. Complete Phase 3: User Story 1 - Hero (T009-T015)
4. Complete Phase 4: User Story 2 - Features (T016-T025)
5. **STOP and VALIDATE**: Homepage displays academic hero + working chapter navigation
6. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (Hero) → Test independently → Can demo homepage
3. Add US2 (Features) → Test independently → Can navigate to chapters
4. Add US3 (Navbar) → Test independently → Full navigation working
5. Add US4 (Typography) → Test independently → Professional reading experience
6. Add US5 (Mobile) → Test independently → Full responsive support
7. Polish → Accessibility verified → Production ready

---

## Summary

| Phase | Tasks | Parallel Tasks |
|-------|-------|----------------|
| Setup | 4 | 2 |
| Foundational | 4 | 3 |
| US1 (Hero) | 7 | 4 |
| US2 (Features) | 10 | 6 |
| US3 (Navbar) | 7 | 4 |
| US4 (Typography) | 6 | 3 |
| US5 (Mobile) | 6 | 3 |
| Polish | 8 | 4 |
| **Total** | **52** | **29** |

**MVP Scope**: Phases 1-4 (25 tasks) delivers functional homepage with academic branding and chapter navigation

# Tasks: Chapter 1 - Causes of Terrorism in Pakistan

**Input**: Design documents from `/specs/002-chapter1-terrorism-causes/`
**Prerequisites**: plan.md (complete), spec.md (complete), research.md (complete), data-model.md (complete), contracts/ (complete)

**Tests**: Not applicable - this is academic content generation, not software development.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story. All three user stories require the same content but with different emphasis - the chapter itself satisfies all stories when complete.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Content files**: `docs/chapter-1-causes/`
- **Spec files**: `specs/002-chapter1-terrorism-causes/`

---

## Phase 1: Setup (Content Infrastructure)

**Purpose**: Create directory structure and chapter index

- [x] T001 Create chapter directory structure at docs/chapter-1-causes/
- [x] T002 Create chapter index file at docs/chapter-1-causes/index.md with Docusaurus front matter and chapter overview
- [x] T003 [P] Verify Docusaurus sidebar configuration includes chapter-1-causes path

**Checkpoint**: Directory structure ready for content generation

---

## Phase 2: Foundational (Section I - Terminology Baseline)

**Purpose**: Generate Section I which establishes ALL terminology used in subsequent sections. MUST complete before any other content section.

**CRITICAL**: No content sections (II-V) can begin until Section I is complete and validated - all terminology definitions originate here.

- [x] T004 Generate Section I content using `academic-terrorism-writer` agent per contract specs/002-chapter1-terrorism-causes/contracts/section-i.md
- [x] T005 Write Section I output to docs/chapter-1-causes/theoretical-framework.md
- [x] T006 Validate Section I against contract checklist:
  - Post-2021 statistics included with source attribution
  - Preconditions/precipitants framework clearly explained
  - All three terrorism categories (TTP/ISKP, sectarian, ethno-nationalist) defined
  - Multi-causal thesis explicitly stated
  - All terminology defined (TTP, ISKP, BLA, Preconditions, Precipitants, Merged Districts)
  - Word count within 400-500 words
  - Transition to Section II established
- [x] T007 Academic review of Section I using `academic-editor` agent for neutrality and rigor check

**Checkpoint**: Terminology baseline established - content generation for Sections II-IV can now proceed in parallel

---

## Phase 3: User Story 1 - Academic Reader (Priority: P1) - Core Content Generation

**Goal**: Generate complete chapter content that provides comprehensive, evidence-based analysis meeting academic standards

**Independent Test**: Subject matter expert evaluates: (a) accuracy of historical facts, (b) balance of perspectives, (c) logical flow of argument, (d) academic rigor

### Section II: Geopolitical Drivers (can run parallel with III, IV after T007)

- [x] T008 [P] [US1] Generate Section II content using `pakistan-terrorism-analyst` agent per contract specs/002-chapter1-terrorism-causes/contracts/section-ii.md
- [x] T009 [US1] Write Section II output to docs/chapter-1-causes/geopolitical-drivers.md
- [x] T010 [US1] Validate Section II against contract checklist:
  - Soviet War legacy fully analyzed (proxy, weapons, fighters, infrastructure)
  - Post-2021 Afghan instability impact documented
  - TTP sanctuary evidence presented with sources
  - Doha Accord implications addressed
  - Border management critique includes specific weaknesses
  - External rivalries presented with multiple perspectives
  - Hedging language used for contested claims
  - Word count within 1,200-1,500 words
  - Transition to Section III established

### Section III: Domestic Flaws (can run parallel with II, IV after T007)

- [x] T011 [P] [US1] Generate Section III content using `pakistan-terrorism-analyst` agent per contract specs/002-chapter1-terrorism-causes/contracts/section-iii.md
- [x] T012 [US1] Write Section III output to docs/chapter-1-causes/domestic-flaws.md
- [x] T013 [US1] Validate Section III against contract checklist:
  - Political instability patterns documented
  - NAP 20 points referenced with implementation status
  - Policy discontinuity examples provided
  - ATC conviction rates included with sources
  - Witness protection inadequacies detailed
  - Investigation/prosecution deficiencies analyzed
  - FATA merger timeline provided
  - Administrative vacuum documented
  - TTP exploitation of gaps explained
  - Word count within 1,200-1,500 words
  - Transition to Section IV established

### Section IV: Socio-Economic Factors (can run parallel with II, III after T007)

- [x] T014 [P] [US1] Generate Section IV content using `pakistan-terrorism-analyst` agent per contract specs/002-chapter1-terrorism-causes/contracts/section-iv.md
- [x] T015 [US1] Write Section IV output to docs/chapter-1-causes/socioeconomic-factors.md
- [x] T016 [US1] Validate Section IV against contract checklist:
  - Relative deprivation theory explained with academic rigor
  - Absolute poverty caveat EXPLICITLY stated
  - Youth unemployment data included
  - Sectarian organization role analyzed
  - Extremist narrative legitimization explained
  - Terror financing mechanisms covered at appropriate level
  - FATF compliance challenges addressed
  - Digital radicalization analyzed WITHOUT operational details
  - No prohibited content (financial vulnerabilities, encryption tools, recruitment scripts)
  - Word count within 1,200-1,500 words
  - Transition to Section V established

### Section V: Synthesis (depends on T010, T013, T016)

- [x] T017 [US1] Generate Section V content using `academic-terrorism-writer` agent per contract specs/002-chapter1-terrorism-causes/contracts/section-v.md
- [x] T018 [US1] Write Section V output to docs/chapter-1-causes/synthesis.md
- [x] T019 [US1] Validate Section V against contract checklist:
  - All four analytical dimensions synthesized
  - Interaction effects between dimensions explained
  - Preconditions-precipitants framework revisited
  - Multi-causal model summarized (table or equivalent)
  - Intervention points identified WITHOUT prescriptions
  - Explicit statement reserving policy for Chapter 2
  - Clear transition/preview of Chapter 2
  - Word count within 800-1,000 words
  - NO policy recommendations included
  - Maintains academic neutrality throughout

**Checkpoint**: All chapter content generated. User Story 1 (Academic Reader) acceptance can now be validated:
- Given reader begins at Section I → understands theoretical framework and threat categories
- Given reader reads Section II → comprehends Soviet legacy, Afghan instability, proxy dynamics
- Given reader reads Section III → understands NAP failure, ATC weaknesses, FATA challenges
- Given reader reads Section IV → grasps relative deprivation, sectarian dynamics, digital tactics

---

## Phase 4: User Story 2 - Policy Researcher (Priority: P2) - Citation Quality

**Goal**: Ensure content provides specific, citable claims with evidence that policy researchers can reference

**Independent Test**: Each identified cause is: (a) specifically defined, (b) supported by evidence/analysis, (c) logically connected to terrorism outcomes

- [x] T020 [US2] Review Section II for citable geopolitical claims - verify specific claims about TTP sanctuary, border failures, external state involvement are citable with source attribution
- [x] T021 [US2] Review Section III for citable governance claims - verify NAP implementation gaps, ATC conviction rates, FATA integration timeline have specific data points
- [x] T022 [US2] Create causal factors inventory from all sections - list all 10+ distinct causal factors with their section references for policy researcher extraction
- [x] T023 [US2] Verify evidence chain for each major claim - ensure each causal factor links logically to terrorism outcome

**Checkpoint**: User Story 2 (Policy Researcher) acceptance validated:
- Researcher can cite geopolitical factors from Section II
- Researcher can cite domestic governance factors from Section III
- At least 10 distinct causal factors extractable across all sections

---

## Phase 5: User Story 3 - Educator (Priority: P3) - Pedagogical Structure

**Goal**: Ensure each section can serve as standalone reading assignment with clear learning objectives

**Independent Test**: Each major section can serve as standalone reading with clear learning objectives

- [x] T024 [US3] Review Section I standalone utility - verify students can articulate theoretical framework without subsequent sections
- [x] T025 [US3] Review Section II standalone utility - verify section provides sufficient context for classroom discussion on geopolitics
- [x] T026 [US3] Add section summaries or key takeaways if needed for pedagogical clarity at end of each section file
- [x] T027 [US3] Verify chapter navigation in index.md supports modular assignment (clear section descriptions)

**Checkpoint**: User Story 3 (Educator) acceptance validated:
- Section I assignable as standalone reading
- Section II sufficient for geopolitics-focused discussion
- Each section has clear learning objectives implicit in structure

---

## Phase 6: Quality Assurance & Polish

**Purpose**: Final review, proofreading, and cross-cutting validation

### Academic Review

- [x] T028 [P] Full chapter academic review using `academic-editor` agent - check neutrality, tone, evidence quality across all sections
- [x] T029 [P] Terminology consistency check across all 5 section files - verify terms match Section I definitions

### Proofreading

- [x] T030 Full chapter proofreading using `scholarly-proofreader` agent - grammar, formatting, citation style
- [x] T031 [P] Verify Docusaurus front matter in all 6 markdown files (index + 5 sections):
  - sidebar_position correct (1-6)
  - title matches section heading
  - description present for SEO

### Success Criteria Validation

- [x] T032 Validate SC-001: Word count check - total chapter 4,000-5,000 words excluding references
- [x] T033 Validate SC-002: Section completeness - all 5 sections complete with mandated sub-sections
- [x] T034 Validate SC-003: Factual accuracy - no major factual errors, multiple perspectives on contested claims
- [x] T035 Validate SC-004: Academic tone - no advocacy language, no emotional appeals, evidence-based only
- [x] T036 Validate SC-005: Causal factor count - reader can identify 10+ distinct factors across dimensions
- [x] T037 Validate SC-007: Logical flow - chapter flows from introduction through analysis to synthesis
- [x] T038 Validate SC-008: Chapter 2 transition - clear bridge established in Section V
- [x] T039 Validate SC-010: Safety check - no operational security details that could enable harm

### Final Checkpoint

- [x] T040 Update chapter completion status in feature tracking
- [x] T041 Create final validation report summarizing all SC checks

**Checkpoint**: Chapter 1 complete and validated. Ready for integration with book Introduction and Chapter 2.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 - BLOCKS all content sections
- **User Story 1 (Phase 3)**: Depends on Phase 2 (Section I complete)
  - Sections II, III, IV can run in parallel after T007
  - Section V depends on Sections II, III, IV completion
- **User Story 2 (Phase 4)**: Depends on Phase 3 completion (all content exists)
- **User Story 3 (Phase 5)**: Depends on Phase 3 completion (all content exists)
  - Can run parallel with Phase 4
- **Polish (Phase 6)**: Depends on Phases 4 and 5 completion

### Content Section Dependencies

```
Section I (T004-T007)
    │
    ├──► Section II (T008-T010) ─┐
    │                            │
    ├──► Section III (T011-T013)─┼──► Section V (T017-T019)
    │                            │
    └──► Section IV (T014-T016) ─┘
```

### Parallel Opportunities

**Phase 2 (after T007 complete):**
- T008, T011, T014 can ALL run in parallel (Sections II, III, IV generation)

**Phase 4 + Phase 5:**
- All tasks in Phase 4 and Phase 5 can run in parallel (different review focuses)

**Phase 6:**
- T028, T029, T031 can run in parallel (different review aspects)

---

## Parallel Example: Content Section Generation

```bash
# After T007 (Section I validated), launch Sections II, III, IV together:
Task T008: "Generate Section II using pakistan-terrorism-analyst agent"
Task T011: "Generate Section III using pakistan-terrorism-analyst agent"
Task T014: "Generate Section IV using pakistan-terrorism-analyst agent"

# After all three complete, generate Section V:
Task T017: "Generate Section V using academic-terrorism-writer agent"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational/Section I (T004-T007)
3. Complete Phase 3: User Story 1 - All Content Sections (T008-T019)
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Chapter readable end-to-end with academic quality

### Incremental Delivery

1. Setup + Section I → Terminology baseline ready
2. Add Sections II-V → Complete chapter draft (US1 satisfied)
3. Add citation quality review → US2 satisfied
4. Add pedagogical review → US3 satisfied
5. Add polish → Publication-ready

### Agent Delegation Summary

| Task Range | Agent Type | Section |
|------------|------------|---------|
| T004-T007 | `academic-terrorism-writer` | I |
| T008-T010 | `pakistan-terrorism-analyst` | II |
| T011-T013 | `pakistan-terrorism-analyst` | III |
| T014-T016 | `pakistan-terrorism-analyst` | IV |
| T017-T019 | `academic-terrorism-writer` | V |
| T028 | `academic-editor` | All |
| T030 | `scholarly-proofreader` | All |

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story for traceability
- Section I MUST complete before ANY content generation (terminology baseline)
- Sections II, III, IV can run in parallel after Section I
- Section V synthesizes all prior sections - cannot start until II, III, IV complete
- All agents must use terminology as defined in Section I
- Commit after each section completion for incremental progress tracking
- Stop at any checkpoint to validate story independently

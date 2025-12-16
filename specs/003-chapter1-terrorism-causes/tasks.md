# Implementation Tasks: Chapter 1 - Understanding Terrorism Causes (Student Edition)

**Feature**: 003-chapter1-terrorism-causes
**Branch**: `003-chapter1-terrorism-causes`
**Created**: 2025-12-16
**Status**: Ready for Implementation

## Overview

This document defines the implementation tasks for creating student-focused educational content on terrorism causes in Pakistan. Tasks are organized by user story to enable independent, incremental delivery. Each user story maps to one content section and can be implemented and tested independently after foundational setup.

**Total Estimated Tasks**: 27 tasks across 7 phases
**Estimated Duration**: 3-4 weeks (including review cycles)
**MVP Scope**: Phase 3 (User Story 1 - Section 1 only) = 8 tasks

## Task Summary by Phase

| Phase | Description | Task Count | Parallelizable | Story |
|-------|-------------|------------|----------------|-------|
| 1 | Setup & Tools | 4 | Yes (3/4) | N/A |
| 2 | Foundational | 1 | No | N/A |
| 3 | US1 - Definition (P1) | 5 | Some (2/5) | US1 |
| 4 | US2 - Political (P2) | 4 | Some (1/4) | US2 |
| 5 | US3 - Economic (P2) | 4 | Some (1/4) | US3 |
| 6 | US4 - Education (P3) | 4 | Some (1/4) | US4 |
| 7 | US5 - Extremism (P3) | 4 | Some (1/4) | US5 |
| 8 | Index & Integration | 1 | No | All |

## Dependencies & Execution Order

```text
Phase 1: Setup (Parallel)
    ↓
Phase 2: Foundation (Section 1 must complete first)
    ↓
Phase 3: US1 - Section 1 (FOUNDATIONAL - Required for all others)
    ↓
    ├─→ Phase 4: US2 - Section 2 (Political)    ← Can run in parallel
    ├─→ Phase 5: US3 - Section 3 (Economic)     ← Can run in parallel
    ├─→ Phase 6: US4 - Section 4 (Education)    ← Can run in parallel
    └─→ Phase 7: US5 - Section 5 (Extremism)    ← Can run in parallel
         ↓
    Phase 8: Index & Integration (After ALL sections complete)
```

**Key Insight**: After US1 (Section 1) completes, US2-US5 (Sections 2-5) can be written in parallel since they are independent causes.

---

## Phase 1: Setup & Tools

**Goal**: Configure readability tools, create directory structure, and set up validation environment.

**Prerequisites**: None

**Deliverable**: Ready-to-write environment with automated validation tools

### Tasks

- [X] T001 [P] Create docs/chapter-1-causes-student/ directory structure
- [ ] T002 [P] Install and configure readability-score npm package for automated FK validation
- [ ] T003 [P] Set up Hemingway Editor workflow (download or web access) for drafting
- [ ] T004 Set up validation script to check all sections against contracts/README.md acceptance criteria

**Parallel Execution**: T001, T002, T003 can run simultaneously (different files/tools)

**Acceptance Criteria**:
- ✅ Directory exists: D:\teriosom\book\docs\chapter-1-causes-student\
- ✅ Readability-score package installed and validates markdown files
- ✅ Hemingway Editor accessible for writing
- ✅ Validation script can check: word count, FK level, required elements presence

---

## Phase 2: Foundational Prerequisites

**Goal**: Establish the foundational definition that all subsequent sections build upon.

**Prerequisites**: Phase 1 complete

**Deliverable**: Section 1 (terrorism definition) that enables understanding of Sections 2-5

**Critical Note**: This phase MUST complete before any Sections 2-5 work begins, as they all reference the terrorism definition established in Section 1.

### Tasks

- [X] T005 [US1] Review user-provided content (Section 1 from original input) and data-model.md section structure template

**Acceptance Criteria**:
- ✅ Understand 3-component definition (violence/threats, fear, goals)
- ✅ Understand standard section structure (Introduction → Concepts → Examples → Impact → Summary → Reflection)
- ✅ Ready to write Section 1 per Contract 2 (contracts/README.md:90-168)

---

## Phase 3: User Story 1 - Student Learns Core Terrorism Definition (P1)

**User Story**: A student reading the educational book needs to understand what terrorism means, how it creates fear beyond physical violence, and why it's particularly significant in Pakistan's context.

**Goal**: Create Section 1 (01-understanding-terrorism.md) that teaches terrorism definition with 90% student comprehension (SC-001).

**Prerequisites**: Phase 2 complete (review done)

**Independent Test**: "Can students define terrorism in their own words with at least 2 of 3 components (violence/threats, fear, goals)?" → 90% accuracy (SC-001)

**Contract Reference**: contracts/README.md:90-168 (Contract 2)

**File Output**: `docs/chapter-1-causes-student/01-understanding-terrorism.md`

### Tasks

- [X] T006 [US1] Write Section 1 introduction and definition paragraphs in docs/chapter-1-causes-student/01-understanding-terrorism.md (3 components: violence, fear, goals)
- [X] T007 [US1] Add example admonition illustrating how terrorism uses fear to control (2-3 sentences, no violence)
- [X] T008 [P] [US1] Write "Why Terrorism Matters" and "Pakistan Context" paragraphs showing impact and setting stage for Sections 2-5
- [X] T009 [US1] Add summary (3-4 bullets) and reflection prompt (Think About It admonition) testing definition comprehension
- [X] T010 [US1] Validate Section 1 against Contract 2 acceptance criteria: word count 400-600, FK 7.0-8.0, all required elements present, frontmatter complete

**Parallel Execution**: T008 can be written while T006-T007 are being reviewed, but must integrate after validation.

**Acceptance Criteria** (Contract 2):
- ✅ Definition includes all 3 components
- ✅ Pakistan context established without graphic details
- ✅ 1 example admonition present
- ✅ 1 reflection prompt present
- ✅ Word count: 400-600
- ✅ FK grade level: 7.0-8.0
- ✅ Frontmatter complete (sidebar_position: 2, title, description, keywords)

**Success Metric**: SC-001 → After this section, 90% of students can define terrorism with 2+ components

---

## Phase 4: User Story 2 - Student Understands Political Factors (P2)

**User Story**: A student needs to understand how political instability and corruption create conditions that enable terrorist groups to operate and recruit members in Pakistan.

**Goal**: Create Section 2 (02-political-problems.md) teaching political causes with 85% cause identification (SC-002).

**Prerequisites**: Phase 3 complete (Section 1 defines terrorism that Section 2 references)

**Independent Test**: "Can students identify political instability and corruption as terrorism enablers in scenarios?" → 85% accuracy (SC-002 component)

**Contract Reference**: contracts/README.md:171-255 (Contract 3)

**File Output**: `docs/chapter-1-causes-student/02-political-problems.md`

### Tasks

- [ ] T011 [US2] Write Section 2 introduction, political instability explanation (2 paragraphs), and first example admonition in docs/chapter-1-causes-student/02-political-problems.md
- [ ] T012 [P] [US2] Write corruption explanation (2 paragraphs) and second example admonition in docs/chapter-1-causes-student/02-political-problems.md
- [ ] T013 [US2] Write "Impact on Pakistan" paragraph ensuring academic neutrality (FR-004) - NO partisan language, systemic focus only
- [ ] T014 [US2] Add summary (3-4 bullets) and reflection prompt; validate against Contract 3: word count 500-700, FK 8.0-9.0, political neutrality maintained

**Parallel Execution**: T012 can be drafted while T011 is being reviewed (different concepts).

**Acceptance Criteria** (Contract 3):
- ✅ Both political instability AND corruption explained
- ✅ Clear connection to terrorism for each factor
- ✅ 2 example admonitions (instability + corruption)
- ✅ Academic neutrality maintained (FR-004)
- ✅ Pakistan context without blame language
- ✅ Word count: 500-700
- ✅ FK grade level: 8.0-9.0
- ✅ Educator review: Politically sensitive content handled appropriately

**Success Metric**: SC-002 → Students can identify political factors as 1 of 3+ causes in scenarios

---

## Phase 5: User Story 3 - Student Grasps Economic Root Causes (P2)

**User Story**: A student learns how poverty and unemployment create vulnerability that terrorist groups exploit for recruitment purposes.

**Goal**: Create Section 3 (03-poverty-unemployment.md) with explicit poverty-recruitment connection (SC-003: 80% comprehension).

**Prerequisites**: Phase 3 complete (Section 1 provides terrorism definition)

**Independent Test**: "Can students explain the poverty/unemployment → recruitment link in their own words?" → 80% accuracy (SC-003)

**Contract Reference**: contracts/README.md:258-348 (Contract 4)

**File Output**: `docs/chapter-1-causes-student/03-poverty-unemployment.md`

### Tasks

- [ ] T015 [US3] Write Section 3 introduction, poverty explanation (2 paragraphs), poverty example admonition, unemployment explanation (2 paragraphs), and unemployment example admonition in docs/chapter-1-causes-student/03-poverty-unemployment.md
- [ ] T016 [P] [US3] Write "The Recruitment Connection" paragraphs (KEY FOR SC-003) explicitly explaining poverty/unemployment → vulnerability → exploitation → recruitment in docs/chapter-1-causes-student/03-poverty-unemployment.md
- [ ] T017 [US3] Write "Impact on Pakistan" paragraph with aggregate economic data (no individual stories), ensuring no stigmatization of poor/unemployed
- [ ] T018 [US3] Add summary (3-4 bullets) and reflection prompt testing recruitment link; validate against Contract 4: word count 500-700, FK 8.0-9.0, recruitment connection explicit

**Parallel Execution**: T016 can be drafted while T015 is being reviewed.

**Acceptance Criteria** (Contract 4):
- ✅ Both poverty AND unemployment explained
- ✅ Recruitment connection explicitly stated (SC-003 requirement)
- ✅ 2 example admonitions (poverty + unemployment)
- ✅ Examples show vulnerability, NOT violent actions (FR-012)
- ✅ No stigmatization
- ✅ Word count: 500-700
- ✅ FK grade level: 8.0-9.0
- ✅ Educator review: Sensitive to low-income students

**Success Metric**: SC-003 → 80% of students can explain poverty-recruitment link

---

## Phase 6: User Story 4 - Student Recognizes Education and Information Gaps (P3)

**User Story**: A student understands how lack of education and misinformation contribute to terrorism by making people susceptible to manipulation and extremist propaganda.

**Goal**: Create Section 4 (04-education-awareness.md) teaching propaganda identification skills (SC-004: 75% accuracy).

**Prerequisites**: Phase 3 complete (Section 1 provides terrorism definition)

**Independent Test**: "Can students distinguish factual information from propaganda in example statements?" → 75% accuracy (SC-004)

**Contract Reference**: contracts/README.md:351-445 (Contract 5)

**File Output**: `docs/chapter-1-causes-student/04-education-awareness.md`

### Tasks

- [ ] T019 [US4] Write Section 4 introduction, education gap explanation (2 paragraphs), education example admonition, misinformation explanation (2-3 paragraphs), and propaganda example admonition in docs/chapter-1-causes-student/04-education-awareness.md
- [ ] T020 [P] [US4] Write "The Power of Awareness" paragraphs (SOLUTION-ORIENTED) showing education as both cause AND prevention, bridging to Chapter 2 in docs/chapter-1-causes-student/04-education-awareness.md
- [ ] T021 [US4] Write "Impact on Pakistan" paragraph acknowledging positive education efforts alongside challenges
- [ ] T022 [US4] Add summary (3-4 bullets) and reflection prompt testing propaganda identification (3 ways to check claims); validate against Contract 5: word count 500-700, FK 8.0-10.0, no stigmatization

**Parallel Execution**: T020 can be drafted while T019 is being reviewed.

**Acceptance Criteria** (Contract 5):
- ✅ Both education gaps AND misinformation explained
- ✅ Solution-oriented language (education as prevention)
- ✅ 2 example admonitions (education gap + misinformation)
- ✅ Teaches propaganda identification skills (SC-004)
- ✅ No stigmatization of less educated
- ✅ Acknowledges positive efforts
- ✅ Word count: 500-700
- ✅ FK grade level: 8.0-10.0
- ✅ Educator review: Empowers critical thinking

**Success Metric**: SC-004 → 75% of students can distinguish facts from propaganda

---

## Phase 7: User Story 5 - Student Identifies Extremist Group Tactics (P3)

**User Story**: A student learns to recognize how extremist groups manipulate, intimidate, and recruit people, especially youth, to serve their goals of power and control.

**Goal**: Create Section 5 (05-extremist-influence.md) teaching manipulation tactic recognition (SC-005: 70% accuracy) while ensuring NO tactical details (SC-009).

**Prerequisites**: Phase 3 complete (Section 1 provides terrorism definition)

**Independent Test**: "Can students identify at least 2 manipulation tactics in a scenario?" → 70% accuracy (SC-005)

**Critical Safety Gate**: Section 5 MUST pass safety review (SC-009) - content cannot provide operational details that could be misused

**Contract Reference**: contracts/README.md:448-551 (Contract 6)

**File Output**: `docs/chapter-1-causes-student/05-extremist-influence.md`

### Tasks

- [ ] T023 [US5] Write Section 5 introduction with safety note, brainwashing explanation (2 paragraphs), brainwashing example, fear tactics explanation (2 paragraphs), and fear example in docs/chapter-1-causes-student/05-extremist-influence.md (NO operational details per FR-012, SC-009)
- [ ] T024 [P] [US5] Write recruitment patterns (2 paragraphs connecting to Sections 2-4 vulnerabilities) and "True Goal: Power and Control" paragraph in docs/chapter-1-causes-student/05-extremist-influence.md (CRITICAL: NO tactical details)
- [ ] T025 [US5] Write "Impact on Pakistan" paragraph with aggregate impact only (no individual stories)
- [ ] T026 [US5] Add summary (4 bullets emphasizing recognizing tactics helps resist) and reflection prompt testing tactic identification; validate against Contract 6: word count 500-700, FK 9.0-10.0, safety constraints enforced

**Parallel Execution**: T024 can be drafted while T023 is being reviewed.

**Acceptance Criteria** (Contract 6):
- ✅ All three tactic types explained (brainwashing, fear, recruitment)
- ✅ Clear distinction between stated vs. true goals
- ✅ 2 example admonitions (manipulation + fear)
- ✅ Examples describe tactics conceptually, NO operational details (SC-009, FR-012)
- ✅ Empowers recognition, not replication
- ✅ Connects back to Sections 2-4 vulnerabilities
- ✅ Word count: 500-700
- ✅ FK grade level: 9.0-10.0
- ✅ **CRITICAL SAFETY REVIEW**: Content cannot be misused (SC-009)

**Success Metric**: SC-005 → 70% of students can identify 2+ manipulation tactics
**Safety Metric**: SC-009 → 80% of students articulate harm without knowing tactical details

---

## Phase 8: Index & Integration

**Goal**: Create index.md chapter overview and integrate all sections into Docusaurus navigation.

**Prerequisites**: Phases 3-7 complete (all 5 sections written and validated)

**Independent Test**: "Can students navigate the chapter, understand learning objectives, and access all sections?" → Usability check

**Contract Reference**: contracts/README.md:19-86 (Contract 1)

**File Output**: `docs/chapter-1-causes-student/index.md`

### Tasks

- [ ] T027 Write index.md with chapter title/context, 4-5 learning objectives mapped to SC-001 through SC-005, chapter contents with links to all 5 sections, reading guide, and chapter summary; validate against Contract 1: word count 300-500, FK 7.0-8.0, all sections linked, frontmatter complete in docs/chapter-1-causes-student/index.md

**Acceptance Criteria** (Contract 1):
- ✅ All 5 required elements present
- ✅ Links to all 5 sections functional
- ✅ Learning objectives align with SC-001 to SC-005
- ✅ Word count: 300-500
- ✅ FK grade level: 7.0-8.0
- ✅ Frontmatter complete (sidebar_position: 1)

**Integration Checks**:
- ✅ All 6 files in docs/chapter-1-causes-student/ (index + 5 sections)
- ✅ Docusaurus sidebar displays all sections in order
- ✅ Mobile rendering tested (paragraph lengths, no horizontal scroll)
- ✅ All internal links functional
- ✅ Total chapter word count: 3000-4000 words (within target)

---

## Review & Validation Workflow

**IMPORTANT**: Review tasks are NOT in the main task list above because reviews are conducted by external stakeholders (educators, SMEs), not by the implementation team. However, content must pass all three review tiers before publication.

### Tier 1: Internal Validation (Self-Review)

**When**: After each section is written (T010, T014, T018, T022, T026, T027)

**Checklist**: Use validation script from T004 + manual checks:
- [ ] Word count within target ±50 words
- [ ] FK grade level within target for section
- [ ] All required content elements present per contract
- [ ] Standard section structure followed
- [ ] Examples follow template (setup, vulnerability, connection)
- [ ] Admonitions properly formatted
- [ ] Frontmatter complete
- [ ] No [NEEDS CLARIFICATION] markers
- [ ] No typos/grammar errors
- [ ] Safety check for Sections 1-5: No graphic violence, no tactical details

**Output**: Pass/fail per section; revise if failures

### Tier 2: Educator Review (SC-006)

**When**: After ALL sections pass Tier 1 (after T027 complete)

**Reviewer**: Experienced grades 7-10 educator

**Timeline**: 1 week

**Checklist**: quickstart.md Section 5 "Tier 2: Educator Review Checklist"
- Age-appropriateness (grades 7-10)
- Pedagogical effectiveness
- Classroom usability
- Sensitivity (no triggers, neutral, trauma-aware)

**Output**: Approved / Approved with minor revisions / Major revisions needed

**Action**: If approved or minor revisions, incorporate feedback and proceed to Tier 3. If major revisions, fix and resubmit to Tier 2.

### Tier 3: SME + Sensitivity Review (SC-007, SC-010)

**When**: After Tier 2 approval

**Reviewers**:
1. **SME**: Terrorism studies expert or South Asia specialist
2. **Sensitivity Reviewer**: Pakistani educator or cultural consultant

**Timeline**: 1 week per reviewer (may run in parallel)

**Checklists**: quickstart.md Section 5 "Tier 3: SME Review Checklist" and "Sensitivity Review Checklist"

**SME Focus**:
- Factual accuracy (definition, causes, Pakistan context)
- Academic rigor and neutrality
- Safety (no tactical information per SC-009)

**Sensitivity Focus**:
- Cultural appropriateness (Pakistani context)
- Trauma sensitivity (no triggers)
- Political/religious/ethnic sensitivity (no bias)

**Output**: Approved / Approved with minor adjustments / Major revisions needed / Not suitable

**Action**: If all approve, incorporate minor feedback and mark ready for publication. If revisions needed, address and resubmit only to reviewers who flagged issues.

**Estimated Total Review Time**: 3 weeks (1 week Tier 1 self-checks distributed across writing, 1 week Tier 2, 1 week Tier 3)

---

## Parallel Execution Opportunities

### During Setup (Phase 1)
Run T001, T002, T003 simultaneously (3 parallel tasks):
- **Engineer A**: T001 (directory creation)
- **Engineer B**: T002 (readability-score setup)
- **Engineer C**: T003 (Hemingway Editor setup)

### During Content Writing (Phases 4-7)

**After US1 (Section 1) completes**, Sections 2-5 can be written in parallel since they are independent causes:

**Team Allocation Example** (4 writers):
- **Writer A**: T011-T014 (Section 2 - Political) = ~1-2 days
- **Writer B**: T015-T018 (Section 3 - Economic) = ~1-2 days
- **Writer C**: T019-T022 (Section 4 - Education) = ~1-2 days
- **Writer D**: T023-T026 (Section 5 - Extremism) = ~1-2 days

**Result**: Sections 2-5 complete in 1-2 days instead of 4-8 days sequential

**Within Each Section**: Some tasks can overlap:
- While introduction/first concept is being drafted, Pakistan impact paragraph can be outlined in parallel
- E.g., T012 (corruption content) can be drafted while T011 (instability content) is being reviewed

---

## MVP (Minimum Viable Product) Strategy

**Recommended MVP Scope**: **User Story 1 (Section 1) ONLY**

**Rationale**:
- Section 1 establishes the foundational terrorism definition
- Can be tested independently (SC-001: 90% definition accuracy)
- Provides immediate educational value even without other sections
- Enables early feedback before investing in Sections 2-5

**MVP Tasks**: T001-T010 (10 tasks)
- Setup (T001-T004)
- Foundational (T005)
- US1 - Section 1 (T006-T010)

**MVP Deliverable**: docs/chapter-1-causes-student/01-understanding-terrorism.md + validation tools

**MVP Timeline**: 1 week (2-3 days writing, 2-3 days review/revision, 1-2 days validation)

**Post-MVP**: After US1 validates and receives positive feedback, proceed with US2-US5 in parallel (faster delivery) or sequentially (smaller team).

---

## Implementation Strategy

### Incremental Delivery Approach

1. **Sprint 1 (Week 1)**: MVP - Section 1 Only
   - Complete T001-T010
   - Validate with small student group (10-15 students)
   - Gather feedback on language, examples, comprehension
   - Adjust approach if needed before scaling to Sections 2-5

2. **Sprint 2 (Week 2)**: Sections 2-5 (Parallel if team size allows)
   - Complete T011-T026
   - Internal validation for each section
   - Optional: Release sections incrementally as they complete validation

3. **Sprint 3 (Week 3)**: Index + Integration + Tier 1 Review
   - Complete T027
   - Run comprehensive internal validation
   - Prepare for external reviews

4. **Sprint 4-5 (Weeks 3-4)**: External Reviews
   - Educator review (Week 3)
   - SME + Sensitivity review (Week 4, can run in parallel)
   - Incorporate feedback
   - Final validation

5. **Sprint 6 (Week 4)**: Publication Ready
   - Final proofreading
   - Docusaurus integration
   - Mobile/accessibility testing
   - Publish to docs site

**Total Timeline**: 4 weeks from start to publication (with parallel execution and no major revisions)

---

## Success Criteria Mapping

Each user story maps to specific success criteria from the specification:

| User Story | Section | Success Criteria | Measurement Method |
|------------|---------|------------------|---------------------|
| US1 | Section 1 | SC-001 (90% definition accuracy) | Assessment A (quickstart.md): Define terrorism with 2/3 components |
| US2 | Section 2 | SC-002 (85% cause identification) | Assessment B (quickstart.md): Identify political factors in scenarios |
| US3 | Section 3 | SC-002 (cause ID) + SC-003 (80% poverty-recruitment link) | Assessment B + C (quickstart.md): Explain connection |
| US4 | Section 4 | SC-002 (cause ID) + SC-004 (75% propaganda distinction) | Assessment B + D (quickstart.md): Classify factual vs. propaganda |
| US5 | Section 5 | SC-002 (cause ID) + SC-005 (70% tactic ID) + SC-009 (no tactical details) | Assessment B + E (quickstart.md): Name 2+ tactics |
| All | All sections | SC-006 (grades 7-10 language) | Educator review checklist (Tier 2) |
| All | All sections | SC-007 (SME approval) | SME review checklist (Tier 3) |
| All | All sections | SC-008 (40% comprehension improvement) | Pre/post assessment (quickstart.md) |
| All | Section 5 critical | SC-009 (no tactical details) | Safety review + SME check (Tier 3) |
| All | All sections | SC-010 (sensitivity approval) | Sensitivity review checklist (Tier 3) |

---

## Task Format Validation

**Format Check**: All tasks follow required checklist format:
- ✅ **Checkbox**: All tasks start with `- [ ]`
- ✅ **Task ID**: Sequential T001-T027
- ✅ **[P] marker**: Present on parallelizable tasks (T001-T003, T008, T012, T016, T020, T024)
- ✅ **[Story] label**: Present on user story phase tasks (US1-US5)
- ✅ **Description**: Clear action with file path for content tasks

**Example Validations**:
- ✅ T001: `- [ ] T001 [P] Create docs/chapter-1-causes-student/ directory structure` → Correct (checkbox, ID, [P], file path)
- ✅ T006: `- [ ] T006 [US1] Write Section 1 introduction and definition paragraphs in docs/chapter-1-causes-student/01-understanding-terrorism.md (3 components: violence, fear, goals)` → Correct (checkbox, ID, [US1], description, file path)
- ✅ T027: `- [ ] T027 Write index.md with chapter title/context... in docs/chapter-1-causes-student/index.md` → Correct (checkbox, ID, description, file path, no [P] or [Story] since it's final integration)

---

## Notes & Considerations

### Writing Guidelines

1. **Drafting Tool**: Use Hemingway Editor (T003) to maintain readability targets during writing
2. **Example Writing**: Follow example template (data-model.md) - setup (Pakistani name), vulnerability (factor), connection (NOT violent actions)
3. **Admonition Syntax**: Docusaurus format - `:::info Example`, `:::tip Think About It`
4. **Academic Neutrality**: Especially critical for Section 2 (political) - use "systemic factors" not "Pakistan's fault"
5. **Safety First**: For Section 5, describe tactics conceptually ("repetition, isolation, us-vs-them framing") NOT operationally (specific steps to manipulate)

### Critical Success Factors

1. **Section 1 Quality**: All other sections reference terrorism definition from Section 1 - must be clear and accurate
2. **Readability Targets**: Use automated validation (T004) frequently, not just at end
3. **Parallel Writing Coordination**: If multiple writers work on Sections 2-5 simultaneously, ensure terminology consistency (use Section 1 as source of truth)
4. **Safety Review for Section 5**: Do NOT skip SC-009 validation - content must empower recognition, not provide instructions
5. **Incremental Feedback**: Consider MVP approach (Section 1 first) to validate approach before full investment

### Risk Mitigation

- **Risk**: Content too complex for target age
  - **Mitigation**: Validate FK scores frequently with T004 script; test MVP with students
- **Risk**: Examples trigger trauma in affected students
  - **Mitigation**: Follow example template (hypothetical scenarios, no graphic content); include educator guidance in quickstart.md
- **Risk**: Section 5 provides harmful tactical information
  - **Mitigation**: Emphasize conceptual descriptions; mandatory safety review (SC-009)
- **Risk**: Reviews identify major revisions needed
  - **Mitigation**: Incremental validation (self-review after each section); engage reviewers early for guidance

---

## Completion Checklist

Before marking feature complete, verify:

- [ ] All 27 tasks (T001-T027) completed
- [ ] All 6 files exist in docs/chapter-1-causes-student/ (index + 5 sections)
- [ ] Total word count: 3000-4000 words
- [ ] All sections pass internal validation (Tier 1)
- [ ] Educator review approved (Tier 2, SC-006)
- [ ] SME review approved (Tier 3, SC-007)
- [ ] Sensitivity review approved (Tier 3, SC-010)
- [ ] All acceptance criteria met per contracts (contracts/README.md)
- [ ] All success criteria testable (SC-001 through SC-010)
- [ ] Docusaurus navigation functional (sidebar, links, mobile)
- [ ] Safety validated for Section 5 (SC-009 - no tactical details)
- [ ] Ready for student use in educational settings

---

**Status**: ✅ TASKS READY FOR EXECUTION

This task breakdown enables independent implementation of each user story after foundational setup, supports parallel execution of Sections 2-5, and includes clear validation points to ensure educational quality and safety standards are met.

**Next Step**: Begin Phase 1 (Setup & Tools) to prepare the writing environment. Consider MVP approach (Section 1 only) for early validation before full implementation.

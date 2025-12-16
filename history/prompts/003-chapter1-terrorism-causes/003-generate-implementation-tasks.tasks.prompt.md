---
id: 003
title: Generate Implementation Tasks
stage: tasks
date: 2025-12-16
surface: agent
model: claude-sonnet-4-5-20250929
feature: 003-chapter1-terrorism-causes
branch: 003-chapter1-terrorism-causes
user: pc
command: /sp.tasks
labels: ["education", "terrorism", "pakistan", "chapter1", "tasks", "implementation"]
links:
  spec: specs/003-chapter1-terrorism-causes/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/003-chapter1-terrorism-causes/tasks.md
tests:
  - Task format validation (all 27 tasks follow checklist format)
  - User story mapping validation (5 stories → 5 sections)
  - Dependency graph completeness (phases 1-8 with clear prerequisites)
  - Parallel execution identification (8 parallelizable tasks marked with [P])
---

## Prompt

$ARGUMENTS

(Note: User triggered /sp.tasks command without additional arguments - command auto-runs after /sp.plan)

## Response snapshot

Generated comprehensive implementation tasks for Chapter 1 Student Edition educational content. Created 27 tasks organized into 8 phases, mapped to 5 user stories from the specification.

### Task Organization

**Total Tasks**: 27 across 8 phases
**Estimated Duration**: 3-4 weeks (including review cycles)
**MVP Scope**: Phase 3 only (User Story 1) = 8 tasks for initial validation

### Phase Breakdown

1. **Phase 1: Setup & Tools** (4 tasks)
   - Create directory structure
   - Install readability validation tools (readability-score npm, Hemingway Editor)
   - Set up automated validation script
   - **Parallel**: 3/4 tasks can run simultaneously

2. **Phase 2: Foundational Prerequisites** (1 task)
   - Review user content and data model structure
   - **Critical**: Must complete before any Section 2-5 work (establishes definition)

3. **Phase 3: US1 - Definition (P1)** (5 tasks)
   - Write Section 1 (01-understanding-terrorism.md)
   - Components: Introduction, definition (3 parts), example, Pakistan context, summary, reflection
   - Contract: 400-600 words, FK 7.0-8.0
   - **Success Metric**: SC-001 (90% definition accuracy)

4. **Phase 4: US2 - Political (P2)** (4 tasks)
   - Write Section 2 (02-political-problems.md)
   - Components: Political instability, corruption, 2 examples, Pakistan impact, summary
   - Contract: 500-700 words, FK 8.0-9.0
   - **Critical**: Maintain academic neutrality (FR-004)

5. **Phase 5: US3 - Economic (P2)** (4 tasks)
   - Write Section 3 (03-poverty-unemployment.md)
   - Components: Poverty, unemployment, recruitment connection (KEY for SC-003), 2 examples
   - Contract: 500-700 words, FK 8.0-9.0
   - **Success Metric**: SC-003 (80% poverty-recruitment link)

6. **Phase 6: US4 - Education (P3)** (4 tasks)
   - Write Section 4 (04-education-awareness.md)
   - Components: Education gaps, misinformation, power of awareness, 2 examples
   - Contract: 500-700 words, FK 8.0-10.0
   - **Success Metric**: SC-004 (75% propaganda distinction)

7. **Phase 7: US5 - Extremism (P3)** (4 tasks)
   - Write Section 5 (05-extremist-influence.md)
   - Components: Brainwashing, fear tactics, recruitment, true goals, 2 examples
   - Contract: 500-700 words, FK 9.0-10.0
   - **Critical Safety Gate**: NO tactical details (SC-009)
   - **Success Metric**: SC-005 (70% tactic identification)

8. **Phase 8: Index & Integration** (1 task)
   - Write index.md with chapter overview, learning objectives, section links
   - Contract: 300-500 words, FK 7.0-8.0
   - Integration checks: All 6 files, Docusaurus sidebar, mobile rendering, total word count 3000-4000

### User Story Mapping

Mapped 5 user stories (from spec.md) to 5 content sections (from contracts/):

| User Story | Priority | Section File | Success Criteria | Tasks |
|------------|----------|--------------|------------------|-------|
| US1: Learn Definition | P1 | 01-understanding-terrorism.md | SC-001 (90% accuracy) | T006-T010 |
| US2: Understand Political | P2 | 02-political-problems.md | SC-002 (85% cause ID) | T011-T014 |
| US3: Grasp Economic | P2 | 03-poverty-unemployment.md | SC-002, SC-003 (80% link) | T015-T018 |
| US4: Recognize Education | P3 | 04-education-awareness.md | SC-002, SC-004 (75% propaganda) | T019-T022 |
| US5: Identify Extremism | P3 | 05-extremist-influence.md | SC-002, SC-005 (70% tactics), SC-009 | T023-T026 |

### Dependency Graph

```
Phase 1: Setup (Parallel: T001-T003)
    ↓
Phase 2: Foundation (T005 - review)
    ↓
Phase 3: US1 - Section 1 (T006-T010 - FOUNDATIONAL)
    ↓
    ├─→ Phase 4: US2 - Section 2 (T011-T014) ← Parallel
    ├─→ Phase 5: US3 - Section 3 (T015-T018) ← Parallel
    ├─→ Phase 6: US4 - Section 4 (T019-T022) ← Parallel
    └─→ Phase 7: US5 - Section 5 (T023-T026) ← Parallel
         ↓
    Phase 8: Index (T027 - after ALL sections)
```

**Key Insight**: After US1 completes, US2-US5 can be executed in parallel (4 writers working simultaneously on Sections 2-5 = 1-2 days instead of 4-8 days sequential).

### Parallel Execution Opportunities

Identified 8 parallelizable tasks marked with [P]:
- **Setup Phase**: T001, T002, T003 (directory, readability-score, Hemingway)
- **Section 1**: T008 (Pakistan context while definition is being reviewed)
- **Section 2**: T012 (corruption content while instability is reviewed)
- **Section 3**: T016 (recruitment connection while poverty/unemployment drafted)
- **Section 4**: T020 (awareness solution while gaps/misinformation drafted)
- **Section 5**: T024 (recruitment patterns while brainwashing/fear drafted)

**Team Allocation Example**:
- 4 parallel writers on Sections 2-5 after Section 1 validates
- Result: Complete all content writing in ~2 weeks instead of 4+ weeks sequential

### Task Format Compliance

All 27 tasks follow required checklist format:
- ✅ Checkbox: `- [ ]` prefix on every task
- ✅ Task ID: Sequential T001-T027
- ✅ [P] marker: On 8 parallelizable tasks
- ✅ [Story] label: On 20 user story tasks (US1-US5)
- ✅ Description: Clear action + file path for all content tasks

**Validation Examples**:
- `- [ ] T001 [P] Create docs/chapter-1-causes-student/ directory structure` ✅
- `- [ ] T006 [US1] Write Section 1 introduction and definition paragraphs in docs/chapter-1-causes-student/01-understanding-terrorism.md` ✅
- `- [ ] T027 Write index.md with chapter title/context... in docs/chapter-1-causes-student/index.md` ✅

### MVP Strategy

**Recommended MVP**: User Story 1 (Section 1) only = Tasks T001-T010 (10 tasks)

**Rationale**:
- Section 1 establishes foundational definition all other sections reference
- Independently testable (SC-001: 90% definition accuracy)
- Delivers immediate educational value
- Enables early student feedback before full investment
- Can validate approach (readability, examples, engagement) in 1 week

**MVP Timeline**: 1 week (2-3 days writing, 2-3 days review/revision, 1-2 days validation)

**Post-MVP Decision**: If Section 1 receives positive feedback, proceed with Sections 2-5 in parallel (faster) or sequentially (smaller team).

### Implementation Strategy

**Incremental Delivery Approach** (4-week timeline):

1. **Week 1**: MVP - Section 1 only (T001-T010)
   - Validate with small student group (10-15)
   - Gather feedback on language, examples, comprehension
   - Adjust approach if needed

2. **Week 2**: Sections 2-5 in parallel (T011-T026 if 4 writers available)
   - Internal validation per section
   - Optional: Release incrementally as sections complete

3. **Week 3**: Index + Integration + Educator Review (T027 + Tier 2)
   - Complete index linking all sections
   - Comprehensive internal validation
   - Educator review for age-appropriateness (SC-006)

4. **Week 4**: SME + Sensitivity Review + Publication (Tier 3)
   - SME review for factual accuracy (SC-007)
   - Sensitivity review for cultural appropriateness (SC-010)
   - Incorporate feedback, final validation, publish

**Critical Path**: Section 1 → Sections 2-5 (can parallelize) → Index → External Reviews → Publication

### Review Workflow (Not in Main Tasks)

Reviews are conducted by external stakeholders, not implementation team:

**Tier 1: Internal Validation** (Self-review after each section)
- Automated: Validation script (T004) checks word count, FK level, required elements
- Manual: Contract acceptance criteria, safety check (no violence/tactical details)

**Tier 2: Educator Review** (After all sections complete, SC-006)
- Reviewer: Experienced grades 7-10 educator
- Timeline: 1 week
- Focus: Age-appropriateness, pedagogical effectiveness, sensitivity

**Tier 3: SME + Sensitivity Review** (After Tier 2, SC-007 + SC-010)
- Reviewers: Terrorism studies expert + Pakistani educator/cultural consultant
- Timeline: 1 week per reviewer (can run in parallel)
- Focus: Factual accuracy, academic neutrality, cultural appropriateness, trauma sensitivity

**Total Review Time**: ~3 weeks (distributed across writing for Tier 1, sequential for Tiers 2-3)

### Success Criteria Alignment

All 10 success criteria from specification mapped to tasks:

| Success Criterion | Assessment Method | Task Phase |
|-------------------|-------------------|------------|
| SC-001: 90% definition accuracy | Assessment A (quickstart.md) | Phase 3 (US1) |
| SC-002: 85% cause identification | Assessment B (quickstart.md) | Phases 4-7 (US2-US5) |
| SC-003: 80% poverty-recruitment link | Assessment C (quickstart.md) | Phase 5 (US3) |
| SC-004: 75% propaganda distinction | Assessment D (quickstart.md) | Phase 6 (US4) |
| SC-005: 70% tactic identification | Assessment E (quickstart.md) | Phase 7 (US5) |
| SC-006: Grades 7-10 language | Educator review checklist | All phases, validated Tier 2 |
| SC-007: SME approval | SME review checklist | All phases, validated Tier 3 |
| SC-008: 40% comprehension improvement | Pre/post test design | All phases, measured by educator |
| SC-009: No tactical details | Safety review + SME check | Phase 7 critical, all phases checked |
| SC-010: Sensitivity approval | Sensitivity review checklist | All phases, validated Tier 3 |

### Critical Success Factors

1. **Section 1 Quality**: All other sections reference definition from Section 1 - must be clear, accurate, and age-appropriate
2. **Readability Validation**: Use automated tools (T004) frequently during writing, not just at end
3. **Academic Neutrality**: Especially Section 2 (political) - systemic factors, not blame language
4. **Safety First**: Section 5 must describe tactics conceptually (what they are) NOT operationally (how to do them) - SC-009 is critical safety gate
5. **Incremental Feedback**: MVP approach (Section 1 first) recommended to validate before full investment

## Outcome

- ✅ Impact: Complete, executable task breakdown enabling independent user story implementation and parallel execution
- 🧪 Tests: Task format validation (27/27 correct format), user story mapping (5 stories → 5 sections), dependency graph (8 phases with clear prerequisites)
- 📁 Files: Created tasks.md (~8,500 words) with 27 tasks, dependency graph, parallel execution examples, MVP strategy, review workflow
- 🔁 Next prompts: Begin Phase 1 (T001-T004) to set up writing environment; consider MVP approach (T001-T010) for early validation
- 🧠 Reflection: Successfully organized educational content tasks by user story (each section is independently deliverable increment); identified significant parallel execution opportunities (Sections 2-5 after Section 1 validates); emphasized safety validation for Section 5 (SC-009 critical for sensitive content)

## Evaluation notes (flywheel)

- Failure modes observed: None - task generation completed successfully
- Graders run and results (PASS/FAIL): Task format validation PASS (27/27 tasks follow required checklist format with checkbox, ID, [P]/[Story] markers, descriptions, file paths)
- Prompt variant (if applicable): N/A - standard /sp.tasks workflow adapted for educational content
- Next experiment (smallest change to try): For future educational content features, consider creating task templates specific to content sections (introduction, concept, example, impact, summary pattern) to accelerate task generation from contracts

# Implementation Plan: Chapter 1 - Understanding Terrorism Causes (Student Edition)

**Branch**: `003-chapter1-terrorism-causes` | **Date**: 2025-12-16 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-chapter1-terrorism-causes/spec.md`

## Summary

This feature creates a simplified, student-friendly version of Chapter 1 focused on helping middle and high school students (grades 7-10) understand the root causes of terrorism in Pakistan. Unlike the existing academic Chapter 1 (002-chapter1-terrorism-causes), this version uses accessible language, clear examples, and a progressive learning structure covering five key areas: terrorism definition, political problems, economic factors, education gaps, and extremist group tactics. The content will be implemented as educational markdown files within the Docusaurus documentation platform.

## Technical Context

**Platform**: Docusaurus 3.x (existing static site generator)
**Content Format**: Markdown (.md) with YAML frontmatter
**Target Audience**: Students aged 12-18 (grades 7-10 reading level)
**Primary Language**: English (with consideration for future Urdu translation)
**Content Type**: Educational/informational (non-interactive documentation)
**Project Type**: Documentation content within existing web application
**Reading Level**: Flesch-Kincaid Grade Level 7-10
**Content Structure**: 5 sections + 1 index/summary page (6 total markdown files)
**Storage**: File system (docs/chapter-1-causes-student/ directory)
**Testing**: Manual educator review, readability scoring, content validation checklists
**Performance Goals**: Page load <2s, readable on mobile devices, accessible (WCAG 2.1 AA)
**Constraints**: No graphic violence, no tactical information, maintain academic neutrality
**Scale/Scope**: ~3000-4000 words total across 6 files, 5 main learning sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Compliance with Book Structure (Section 2 - Chapter 1)

**Status**: ✅ PASS

- **Mandated Structure**: This feature implements Chapter 1 content (Section 2 of constitution)
- **Agent Delegation**: Content aligns with "Geopolitical Analyst" responsibilities (root causes, contributing factors)
- **Differentiation**: This is a STUDENT-FOCUSED VERSION of Chapter 1, complementing the existing academic Chapter 1 (002)
- **Rationale**: Constitution mandates Chapter 1 focus on "Why is terrorism increasing in Pakistan?" (causes) - this feature fulfills that mandate for a student audience

### Constitution Principle Alignment

| Principle | Requirement | Compliance Status | Evidence |
|-----------|-------------|-------------------|----------|
| **I. Mandated Structure** | Chapter 1 must address causes | ✅ PASS | All 5 sections focus on root causes: political, economic, educational, ideological |
| **II. Task Delegation** | Properly routed to specialist | ✅ PASS | Content delegated through planning workflow, aligns with Geopolitical Analyst scope |
| **III. State Management** | Track section completion | ✅ PASS | Spec includes progress tracking via user stories and acceptance criteria |
| **IV. Quality Control** | Academic rigor standards | ✅ PASS | FR-004 requires academic neutrality; FR-012 prohibits tactical information; FR-013 emphasizes harm of terrorism |
| **V. Content Standards** | Academic rigor & neutrality | ✅ PASS | Success criteria SC-006, SC-007, SC-010 require educator review, SME approval, and sensitivity review |

### Violations Requiring Justification

**None identified.** This feature fully complies with the constitution's mandated structure and content standards.

### Special Considerations

**Dual Chapter 1 Versions**: This project now has TWO Chapter 1 implementations:
1. **002-chapter1-terrorism-causes** (Academic): Complex, multi-dimensional analysis using preconditions-precipitants framework, theoretical sophistication
2. **003-chapter1-terrorism-causes** (Student Edition): Simplified, accessible content for grades 7-10, practical examples

**Justification**: Constitution mandates Chapter 1 address causes but does not prohibit multiple audience-appropriate versions. Both serve the same constitutional purpose (explain causes) for different reader segments.

**Directory Strategy**: Implement student version in `docs/chapter-1-causes-student/` to distinguish from academic version in `docs/chapter-1-causes/`.

## Project Structure

### Documentation (this feature)

```text
specs/003-chapter1-terrorism-causes/
├── plan.md              # This file (/sp.plan command output)
├── spec.md              # Feature specification (completed)
├── research.md          # Phase 0 output (educational content design research)
├── data-model.md        # Phase 1 output (content structure and learning taxonomy)
├── quickstart.md        # Phase 1 output (educator guide and teaching approach)
├── contracts/           # Phase 1 output (content specifications for each section)
│   ├── section-1-definition.md
│   ├── section-2-political.md
│   ├── section-3-economic.md
│   ├── section-4-education.md
│   └── section-5-extremism.md
├── checklists/
│   └── requirements.md  # Spec quality checklist (completed)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Content Structure (repository root)

```text
docs/
├── intro.md                          # Existing introduction
├── chapter-1-causes/                 # Existing academic Chapter 1 (002)
│   ├── index.md
│   ├── theoretical-framework.md
│   ├── geopolitical-drivers.md
│   ├── domestic-flaws.md
│   ├── socioeconomic-factors.md
│   └── synthesis.md
├── chapter-1-causes-student/         # NEW: Student-friendly Chapter 1 (003)
│   ├── index.md                      # Overview and chapter summary
│   ├── 01-understanding-terrorism.md # Section 1: Definition and concepts
│   ├── 02-political-problems.md      # Section 2: Political instability and corruption
│   ├── 03-poverty-unemployment.md    # Section 3: Economic factors and recruitment
│   ├── 04-education-awareness.md     # Section 4: Education gaps and misinformation
│   └── 05-extremist-influence.md     # Section 5: Extremist group tactics
└── chapter-2-solutions/              # Existing Chapter 2
    └── [prevention content]
```

**Structure Decision**: Create parallel student-focused chapter directory (`chapter-1-causes-student/`) alongside existing academic version. This maintains constitutional compliance (both are Chapter 1 content on causes) while serving different audience needs. File naming uses numbered prefixes (01-05) to enforce reading sequence and progressive learning.

**Docusaurus Integration**: Each markdown file includes YAML frontmatter with:
- `sidebar_position`: Controls order in navigation
- `title`: Display title for page
- `description`: SEO and accessibility description
- `keywords`: Aid in searchability (terrorism, Pakistan, education, causes)

## Complexity Tracking

> No constitutional violations - complexity tracking not required.

## Phase 0: Research & Design Decisions

### Research Questions to Resolve

1. **Reading Level Validation**: What specific readability metrics and tools should be used to ensure content meets grades 7-10 target? (Flesch-Kincaid Grade Level, Gunning Fog Index, SMOG Index)

2. **Educational Pedagogy**: What learning design principles ensure student comprehension of sensitive geopolitical topics? (Bloom's Taxonomy, Scaffolding, Prior Knowledge Activation)

3. **Cultural Sensitivity**: What language and framing best serves students in Pakistan vs. international students studying Pakistan? (Local context, cultural references, terminology choices)

4. **Example Selection**: What types of examples effectively illustrate abstract concepts (political instability, extremist recruitment) for 12-18 year olds without being graphic or traumatizing?

5. **Assessment Alignment**: How should content structure map to the success criteria metrics (90% definition accuracy, 85% cause identification)?

6. **Accessibility Standards**: What WCAG 2.1 requirements apply to educational text content, and how do we ensure mobile readability?

### Technology & Tool Research

1. **Readability Tools**: Research and select tools for automated readability scoring (e.g., Hemingway Editor, readability-score libraries, Grammarly education features)

2. **Docusaurus Features**: Identify relevant features for educational content (callouts/admonitions for examples, collapsible sections, glossary links)

3. **Content Review Workflow**: Define process for educator and SME review (review checklist, feedback collection, revision tracking)

**Output**: `research.md` will document findings and decisions for all research questions above.

## Phase 1: Content Design & Specifications

### Data Model (Content Structure)

**Purpose**: Define the information architecture, learning taxonomy, and content relationships for the student-focused chapter.

**Components** (`data-model.md` will include):

1. **Content Taxonomy**:
   - Learning Objectives (aligned to Bloom's Taxonomy levels)
   - Knowledge Concepts (definitions, facts, examples)
   - Comprehension Checks (questions, scenarios)

2. **Section Relationships**:
   - Prerequisites (Section 1 → Sections 2-5)
   - Cross-references (economic ↔ extremist recruitment)
   - Progressive complexity mapping

3. **Metadata Structure**:
   - Frontmatter schema for each markdown file
   - Keyword taxonomy for searchability
   - Accessibility labels

### Contracts (Content Specifications)

**Purpose**: Define the exact scope, structure, and requirements for each of the 5 main sections plus index.

**Contracts Directory** (`contracts/` will include):

1. **section-1-definition.md**:
   - Word count target: 400-600 words
   - Required elements: definition, explanation, examples, Pakistan context
   - Learning outcomes: Students can define terrorism (90% accuracy per SC-001)
   - Readability: Grade level 7-8 (foundation section)

2. **section-2-political.md**:
   - Word count target: 500-700 words
   - Required elements: political instability explanation, corruption impact, examples, connection to terrorism
   - Learning outcomes: Students identify political factors (contributes to SC-002)
   - Readability: Grade level 8-9

3. **section-3-economic.md**:
   - Word count target: 500-700 words
   - Required elements: poverty definition, unemployment impact, recruitment connection, examples
   - Learning outcomes: Students explain poverty-recruitment link (80% accuracy per SC-003)
   - Readability: Grade level 8-9

4. **section-4-education.md**:
   - Word count target: 500-700 words
   - Required elements: education gap impact, misinformation explanation, solution awareness, examples
   - Learning outcomes: Students distinguish facts from propaganda (75% accuracy per SC-004)
   - Readability: Grade level 8-10

5. **section-5-extremism.md**:
   - Word count target: 500-700 words
   - Required elements: brainwashing tactics, fear methods, recruitment patterns, examples
   - Learning outcomes: Students identify manipulation tactics (70% accuracy per SC-005)
   - Readability: Grade level 9-10
   - **Safety constraint**: No tactical operational details (FR-012)

6. **index.md**:
   - Word count target: 300-500 words
   - Required elements: Chapter overview, learning objectives, section summaries, reading guide
   - Structure: Docusaurus index pattern with links to all sections

### Quickstart (Educator Guide)

**Purpose**: Provide educators with guidance on using this content effectively in classroom or self-study contexts.

**Quickstart.md Contents**:

1. **Using This Chapter**:
   - Recommended teaching sequence
   - Estimated time per section (15-20 minutes each)
   - Discussion prompts for each section

2. **Assessment Strategies**:
   - Sample quiz questions aligned to success criteria
   - Discussion rubrics
   - Comprehension check activities

3. **Sensitivity Guidance**:
   - Handling trauma disclosures
   - Managing political discussions
   - Addressing misinformation from students' prior exposure

4. **Differentiation Tips**:
   - Scaffolding for struggling readers
   - Extension activities for advanced students
   - ELL (English Language Learner) accommodations

5. **Review Requirements**:
   - Educator review checklist (aligned to SC-006)
   - SME validation process (aligned to SC-007)
   - Sensitivity review protocol (aligned to SC-010)

## Phase 2: Implementation Planning (Next Command)

**Note**: Phase 2 (task generation) is handled by the `/sp.tasks` command, NOT by `/sp.plan`.

After this plan is approved, `/sp.tasks` will break down the implementation into specific, testable tasks:

1. Research completion tasks (readability tools, pedagogy best practices)
2. Content writing tasks (6 markdown files with specific acceptance criteria)
3. Review tasks (educator review, SME validation, sensitivity check)
4. Readability validation tasks (automated scoring, manual review)
5. Docusaurus integration tasks (frontmatter, navigation, mobile testing)
6. Success criteria validation tasks (assessment instrument creation, metric tracking)

## Risk Analysis

### Content Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Content too complex for target age | High (students disengage) | Medium | Readability scoring in research phase, educator pilot testing |
| Trauma triggers for affected students | High (psychological harm) | Low-Medium | Sensitivity review (SC-010), educator guidance in quickstart.md |
| Misinformation propagation | High (educational failure) | Low | SME review (SC-007), fact-checking, citation requirements |
| Bias/lack of neutrality | Medium (credibility loss) | Low | Academic neutrality requirement (FR-004), multiple reviewer validation |

### Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Mobile readability issues | Medium (accessibility failure) | Low | Responsive testing, WCAG compliance checks |
| Poor Docusaurus integration | Low (navigation confusion) | Low | Follow existing pattern from docs/chapter-1-causes/ |
| Content not discoverable | Low (usage reduction) | Low | Proper metadata, keywords, navigation structure |

### Process Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Educator review unavailable | Medium (quality concerns) | Medium | Define clear review requirements upfront, allocate time |
| SME review delayed | Medium (timeline slip) | Medium | Identify SME early, provide clear scope and timeline |
| Readability targets not met | Medium (rework required) | Medium | Iterative testing during writing, not just at end |

## Success Metrics Alignment

This plan directly supports the 10 success criteria defined in the specification:

| Success Criterion | Plan Support |
|-------------------|--------------|
| SC-001: 90% definition accuracy | Section 1 contract specifies clear definition structure, assessment design in quickstart |
| SC-002: 85% cause identification | All 5 sections designed to teach distinct causes, contracts specify learning outcomes |
| SC-003: 80% poverty-recruitment link | Section 3 contract explicitly targets this connection with examples |
| SC-004: 75% propaganda distinction | Section 4 contract focuses on misinformation identification skills |
| SC-005: 70% tactic identification | Section 5 contract specifies manipulation tactic coverage |
| SC-006: Grade 7-10 language | Readability research + validation tasks for all content |
| SC-007: SME approval | Review workflow in quickstart.md, validation tasks in Phase 2 |
| SC-008: 40% comprehension improvement | Assessment design in quickstart enables pre/post measurement |
| SC-009: Harm articulation without tactics | FR-012 constraint enforced in all contracts, especially Section 5 |
| SC-010: Sensitivity approval | Sensitivity review workflow in quickstart, trauma guidance for educators |

## Dependencies & Prerequisites

### External Dependencies

1. **Educator Reviewer**: Required for SC-006 validation (age-appropriateness)
2. **Subject Matter Expert**: Required for SC-007 validation (factual accuracy, neutrality)
3. **Sensitivity Reviewer**: Required for SC-010 validation (cultural appropriateness, trauma considerations)
4. **Readability Tools**: Needed for automated grade-level checking

### Internal Dependencies

1. **Existing Docusaurus Site**: Content must integrate with existing docs/ structure
2. **Constitution Alignment**: Must maintain coordination with overall book structure
3. **Chapter 2 Reference**: Assumes Chapter 2 (solutions) exists for forward references (dependency noted in spec)

### Content Dependencies

1. **User-Provided Content**: Original input provides the foundational structure and examples for all 5 sections
2. **Academic Chapter 1**: Existing 002 chapter provides factual foundation and references for simplification

## Next Steps

1. **Approve This Plan**: User reviews and approves the implementation approach
2. **Run `/sp.tasks`**: Generate detailed, testable task breakdown
3. **Execute Research Phase**: Complete research.md (readability tools, pedagogy, sensitivity guidance)
4. **Execute Design Phase**: Complete data-model.md, contracts/, quickstart.md
5. **Begin Implementation**: Write the 6 markdown files per contracts
6. **Validation & Review**: Execute educator, SME, and sensitivity reviews
7. **Integration**: Merge into Docusaurus site and test navigation/mobile rendering

---

**Plan Status**: ✅ READY FOR APPROVAL

This plan provides a complete roadmap for transforming the user-provided educational content into a structured, validated, student-appropriate Chapter 1 that complies with the project constitution and meets all specification success criteria.

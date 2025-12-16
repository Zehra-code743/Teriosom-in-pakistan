---
id: 002
title: Design Chapter 1 Student Edition Plan
stage: plan
date: 2025-12-16
surface: agent
model: claude-sonnet-4-5-20250929
feature: 003-chapter1-terrorism-causes
branch: 003-chapter1-terrorism-causes
user: pc
command: /sp.plan
labels: ["education", "terrorism", "pakistan", "chapter1", "planning", "student-edition"]
links:
  spec: specs/003-chapter1-terrorism-causes/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/003-chapter1-terrorism-causes/plan.md
  - specs/003-chapter1-terrorism-causes/research.md
  - specs/003-chapter1-terrorism-causes/data-model.md
  - specs/003-chapter1-terrorism-causes/contracts/README.md
  - specs/003-chapter1-terrorism-causes/quickstart.md
tests:
  - Constitution Check validation (all gates passed)
  - Research decision validation (9 areas documented)
  - Data model structure validation (learning taxonomy, content components)
  - Contract completeness check (6 contracts specified)
  - Educator guide validation (5 sections complete)
---

## Prompt

$ARGUMENTS

(Note: User triggered /sp.plan command without additional arguments - command auto-runs after /sp.specify)

## Response snapshot

Created comprehensive implementation plan for student-focused Chapter 1 educational content on terrorism causes in Pakistan. The plan includes:

### Phase 0: Research (research.md)

Documented 9 key research areas with decisions and rationales:
1. **Reading Level Validation**: Multi-metric approach (Flesch-Kincaid, Gunning Fog, SMOG) targeting grades 7-10
2. **Educational Pedagogy**: Bloom's Taxonomy scaffolding with progressive complexity
3. **Cultural Sensitivity**: Dual-context framing (universal → Pakistan-specific) with educator localization guidance
4. **Example Selection**: Hypothetical scenarios, aggregate data, no named attacks, vulnerability focus
5. **Assessment Alignment**: Backward design from success criteria with formative/summative instruments
6. **Accessibility Standards**: WCAG 2.1 AA compliance, mobile-responsive, semantic HTML
7. **Readability Tools**: Hemingway Editor (drafting) + readability-score npm (validation) + educator review
8. **Docusaurus Features**: Admonitions for examples/prompts, standard navigation, minimal custom components
9. **Content Review Workflow**: Three-tier sequential review (internal, educator, SME)

### Phase 1: Content Design

**Data Model** (data-model.md):
- Learning taxonomy mapping 5 sections to Bloom's levels (Remember/Understand → Analyze/Evaluate)
- Standard section structure template (Introduction, concepts, examples, impact, summary, reflection)
- Admonition types and usage patterns
- Section relationships and cross-references
- Metadata structure (frontmatter schema for all 6 files)
- Content metrics (word counts, readability targets, structural elements)
- Accessibility attributes (semantic HTML, ARIA labels)
- Validation checklists (per-section and cross-section)

**Contracts** (contracts/README.md):
Six detailed content contracts specifying:
1. **Index** (index.md): 300-500 words, FK 7.0-8.0, chapter overview with learning objectives
2. **Section 1** (01-understanding-terrorism.md): 400-600 words, FK 7.0-8.0, 3-component definition (SC-001)
3. **Section 2** (02-political-problems.md): 500-700 words, FK 8.0-9.0, political instability + corruption (SC-002)
4. **Section 3** (03-poverty-unemployment.md): 500-700 words, FK 8.0-9.0, poverty-recruitment link (SC-002, SC-003)
5. **Section 4** (04-education-awareness.md): 500-700 words, FK 8.0-10.0, propaganda identification (SC-002, SC-004)
6. **Section 5** (05-extremist-influence.md): 500-700 words, FK 9.0-10.0, manipulation tactics, NO tactical details (SC-002, SC-005, SC-009)

Each contract includes: word count, FK target, required elements, learning outcomes, acceptance criteria, frontmatter template

**Educator Guide** (quickstart.md):
Comprehensive 5-section guide covering:
1. **Using This Chapter**: 6-session teaching sequence with lesson plans, discussion prompts, activities
2. **Assessment Strategies**: Formative (reflection prompts, Think-Pair-Share) + Summative (5 assessment instruments aligned to SC-001 through SC-005), pre/post design for SC-008
3. **Sensitivity Guidance**: Trauma protocols, political discussion management, misinformation handling, trigger mitigation by section
4. **Differentiation Tips**: Scaffolding for struggling readers, extensions for advanced, ELL support, trauma-informed modifications
5. **Review Requirements**: Three-tier checklist (internal validation, educator review for SC-006, SME + sensitivity review for SC-007/SC-010)

### Constitution Compliance

Validated against all 5 constitutional principles:
- ✅ **Mandated Structure**: Implements Chapter 1 (causes) per Section 2 of constitution
- ✅ **Task Delegation**: Aligns with Geopolitical Analyst scope (root causes, contributing factors)
- ✅ **State Management**: Progress tracking via user stories and acceptance criteria
- ✅ **Quality Control**: Academic neutrality (FR-004), safety constraints (FR-012), SME/educator review requirements
- ✅ **Content Standards**: Academic rigor standards enforced through multi-tier review workflow

**Special Consideration**: Dual Chapter 1 versions justified - academic (002) and student (003) serve same constitutional purpose for different audiences.

### File Structure

Planned content directory:
```
docs/chapter-1-causes-student/
├── index.md                      # Chapter overview
├── 01-understanding-terrorism.md # Section 1
├── 02-political-problems.md      # Section 2
├── 03-poverty-unemployment.md    # Section 3
├── 04-education-awareness.md     # Section 4
└── 05-extremist-influence.md     # Section 5
```

Specification artifacts:
```
specs/003-chapter1-terrorism-causes/
├── plan.md              # Implementation plan (this PHR references)
├── research.md          # Research findings and design decisions
├── data-model.md        # Content structure and learning taxonomy
├── contracts/README.md  # Detailed content specifications
├── quickstart.md        # Educator guide
├── spec.md              # Feature specification (from /sp.specify)
└── checklists/requirements.md  # Spec quality validation
```

### Success Criteria Alignment

Plan directly supports all 10 success criteria:
- SC-001 to SC-005: Content contracts designed to produce measurable outcomes
- SC-006: Readability targets and educator review built into workflow
- SC-007: SME review requirement integrated
- SC-008: Pre/post assessment design in educator guide
- SC-009: Safety constraints enforced in Section 5 contract
- SC-010: Sensitivity review requirement integrated

### Risk Mitigation

Identified and addressed:
- **Content Risks**: Readability validation, trauma sensitivity protocols, misinformation safeguards
- **Technical Risks**: Mobile testing requirements, Docusaurus integration patterns
- **Process Risks**: Clear review timelines, defined reviewer qualifications

## Outcome

- ✅ Impact: Complete implementation plan with research, design artifacts, and educator guidance ready for task generation
- 🧪 Tests: Constitution Check (5/5 passed), Contract completeness (6/6 defined), Review workflow validation (3-tier process)
- 📁 Files: Created plan.md, research.md, data-model.md, contracts/README.md, quickstart.md (5 planning artifacts, ~30,000 words)
- 🔁 Next prompts: `/sp.tasks` to generate testable implementation tasks; content writing begins after task approval
- 🧠 Reflection: Successfully adapted technical planning framework to educational content design; research phase resolved all NEEDS CLARIFICATION items proactively; educator guide provides comprehensive support for sensitive topic instruction

## Evaluation notes (flywheel)

- Failure modes observed: None - planning completed without blockers
- Graders run and results (PASS/FAIL): Constitution Check PASS (all 5 principles), Contract specifications COMPLETE (6/6 with acceptance criteria)
- Prompt variant (if applicable): N/A - standard /sp.plan workflow
- Next experiment (smallest change to try): Consider creating educational content planning template to streamline future book chapter planning (current approach required adaptation from software planning template)

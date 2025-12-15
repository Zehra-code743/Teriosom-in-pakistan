---
id: 001
title: Chapter 1 Terrorism Causes Specification
stage: spec
date: 2025-12-15
surface: agent
model: claude-sonnet-4-5-20250929
feature: 002-chapter1-terrorism-causes
branch: 002-chapter1-terrorism-causes
user: teriosom
command: /sp.specify
labels: ["terrorism", "pakistan", "academic-chapter", "specification", "causes-analysis"]
links:
  spec: specs/002-chapter1-terrorism-causes/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-chapter1-terrorism-causes/spec.md
  - specs/002-chapter1-terrorism-causes/checklists/requirements.md
tests:
  - N/A (specification phase - no code tests)
---

## Prompt

/sp.specify Chapter Goal and Structure Mandate

Goal: To deliver a multi-dimensional, analytical thesis on the primary historical, geopolitical, and domestic factors driving the current surge in terrorism in Pakistan.

Target Length: Equivalent to 10-12 pages of academic text.

Tone: Strictly academic, unbiased, and research-focused.

Mandatory Paged Structure:
- Section I: Introduction and Theoretical Framing (Page 1)
  - 1.1. Chapter Introduction & Crisis Context
  - 1.2. Defining the Threat Landscape
- Section II: Geopolitical and Regional Drivers (Pages 2-4)
  - 1.3. The Historical Continuum of Conflict (Soviet War Legacy)
  - 1.4. Instability in Afghanistan (Post-2021) - TTP Sanctuary, Border Management Failure
  - 1.5. External State Rivalries and Proxies
- Section III: Domestic Structural and Institutional Flaws (Pages 5-7)
  - 1.6. Weak Governance and Policy Deficits (NAP Failure)
  - 1.7. Institutional Weakness in Justice Sector (ATCs)
  - 1.8. Failure of Integration in Merged Districts
- Section IV: Socio-Economic, Ideological, and Operational Drivers (Pages 8-10)
  - 1.9. Socio-Economic Marginalization (Relative Deprivation)
  - 1.10. Ideological and Sectarian Fuel
  - 1.11. Financing and Digital Tactics
- Section V: Conclusion and Transition (Pages 11-12)
  - 1.12. Synthesis of Findings

## Response snapshot

Created comprehensive specification for Chapter 1: Causes of Terrorism in Pakistan with:

1. **Feature branch**: `002-chapter1-terrorism-causes`
2. **Specification file**: `specs/002-chapter1-terrorism-causes/spec.md`
3. **Quality checklist**: `specs/002-chapter1-terrorism-causes/checklists/requirements.md`

Key deliverables:
- 3 user stories (Academic Reader P1, Policy Researcher P2, Educator P3)
- 23 functional requirements covering all 5 sections and cross-cutting concerns
- 10 measurable success criteria (all technology-agnostic)
- Defined key entities, assumptions, dependencies, and out-of-scope items
- Quality validation checklist - all items PASS

Specification ready for `/sp.clarify` or `/sp.plan`.

## Outcome

- Impact: Created complete specification for 10-12 page academic chapter on terrorism causes in Pakistan
- Tests: N/A (specification phase)
- Files: 2 files created (spec.md, requirements.md checklist)
- Next prompts: /sp.clarify or /sp.plan to proceed with chapter planning
- Reflection: User provided extremely detailed structure mandate; no clarifications needed due to comprehensive input

## Evaluation notes (flywheel)

- Failure modes observed: None - user input was complete and unambiguous
- Graders run and results (PASS/FAIL): Quality checklist - PASS (all 16 items)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed to planning phase to test spec completeness for implementation guidance

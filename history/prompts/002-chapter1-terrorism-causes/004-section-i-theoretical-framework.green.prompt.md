---
id: 004
title: Generate Section I Theoretical Framework Content
stage: green
date: 2025-12-15
surface: agent
model: claude-sonnet-4-5-20250929
feature: 002-chapter1-terrorism-causes
branch: 001-academic-book-ui
user: teriosom
command: direct-request
labels: ["content-generation", "chapter-1", "section-i", "theoretical-framework"]
links:
  spec: specs/002-chapter1-terrorism-causes/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/chapter-1-causes/theoretical-framework.md
tests:
  - manual-validation-against-contract
---

## Prompt

Generate Section I (Introduction and Theoretical Framing) for Chapter 1 of an academic book on terrorism in Pakistan.

**Contract Requirements** (from specs/002-chapter1-terrorism-causes/contracts/section-i.md):

**Output File**: docs/chapter-1-causes/theoretical-framework.md
**Word Target**: 400-500 words
**Tone**: Strictly academic, evidence-based

**Functional Requirements to Address**:
- FR-001: Open with quantitative summary of post-2021 violence surge (attack frequency, casualty figures, geographic spread)
- FR-002: Introduce and explain the "preconditions vs. precipitants" analytical framework
- FR-003: Define and differentiate three terrorism categories:
  - Transnational/Regional: TTP (Tehrik-i-Taliban Pakistan), ISKP (Islamic State Khorasan Province)
  - Sectarian: Lashkar-e-Jhangvi and affiliated groups
  - Ethno-Nationalist: BLA (Balochistan Liberation Army)
- FR-004: Establish multi-causal thesis, explicitly rejecting single-cause explanations

**Required Terminology Definitions** (MUST define here for use in subsequent sections):
- TTP: Tehrik-i-Taliban Pakistan - transnational jihadist organization targeting Pakistani state, distinct from Afghan Taliban
- ISKP: Islamic State Khorasan Province - ISIS affiliate operating in Afghanistan-Pakistan region
- BLA: Balochistan Liberation Army - ethno-nationalist separatist movement
- Preconditions: Structural factors enabling terrorism emergence (governance gaps, economic marginalization)
- Precipitants: Immediate events triggering terrorism escalation (Afghan Taliban victory, policy failures)
- Merged Districts: Former FATA areas incorporated into KP province via 2018 constitutional amendment

## Response snapshot

Generated complete Section I content at `docs/chapter-1-causes/theoretical-framework.md` with the following structure:

1. **Section 1.1 - Chapter Introduction and Crisis Context**: Post-2021 surge statistics with SATP/PIPS source attribution, geographic spread documentation, and establishment of multi-causal thesis.

2. **Section 1.2 - Defining the Threat Landscape**:
   - Preconditions-precipitants framework explanation with bold-formatted definitions
   - Three terrorism categories fully defined (TTP/ISKP, Lashkar-e-Jhangvi, BLA)
   - Multi-causal thesis explicitly stated with rejection of monocausal explanations
   - Clear transition to Section II (geopolitical drivers)

All required terminology defined on first use. Academic tone maintained throughout with neutral, evidence-based language.

## Outcome

- Impact: Created foundational theoretical framework section establishing analytical lens for entire chapter
- Tests: Manual validation against section-i.md contract checklist
- Files: 1 file created (docs/chapter-1-causes/theoretical-framework.md)
- Next prompts: Generate Section II (Geopolitical Drivers), Generate Section III (Domestic Flaws)
- Reflection: Content successfully balances academic rigor with accessibility; all contract requirements addressed

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Manual contract validation - PASS
- Prompt variant (if applicable): N/A
- Next experiment: Consider adding more specific year-over-year statistics if authoritative 2024 data becomes available

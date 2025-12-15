# Quickstart Guide: Chapter 1 Content Generation

**Feature**: `002-chapter1-terrorism-causes`
**Phase**: 1 - Design & Contracts
**Date**: 2025-12-15

## Overview

This guide provides step-by-step instructions for generating Chapter 1 content on the causes of terrorism in Pakistan.

## Prerequisites

Before starting content generation:

1. **Specification reviewed**: `specs/002-chapter1-terrorism-causes/spec.md`
2. **Plan approved**: `specs/002-chapter1-terrorism-causes/plan.md`
3. **Research documented**: `specs/002-chapter1-terrorism-causes/research.md`
4. **Contracts ready**: `specs/002-chapter1-terrorism-causes/contracts/`

## Generation Workflow

### Step 1: Create Output Directory

```bash
mkdir -p docs/chapter-1-causes
```

### Step 2: Generate Sections in Order

**Critical**: Generate sections sequentially to maintain terminology consistency.

| Order | Section | Agent | Contract | Output |
|-------|---------|-------|----------|--------|
| 1 | I | `academic-terrorism-writer` | `section-i.md` | `theoretical-framework.md` |
| 2 | II | `pakistan-terrorism-analyst` | `section-ii.md` | `geopolitical-drivers.md` |
| 3 | III | `pakistan-terrorism-analyst` | `section-iii.md` | `domestic-flaws.md` |
| 4 | IV | `pakistan-terrorism-analyst` | `section-iv.md` | `socioeconomic-factors.md` |
| 5 | V | `academic-terrorism-writer` | `section-v.md` | `synthesis.md` |

### Step 3: Per-Section Generation Process

For each section:

1. **Load contract**: Read the corresponding contract from `contracts/`
2. **Invoke agent**: Use the Task tool with the specified agent type
3. **Provide context**: Include spec FR references and research decisions
4. **Validate output**: Check against contract validation checklist
5. **Save output**: Write to `docs/chapter-1-causes/[output-file]`

### Step 4: Create Index File

After all sections complete, create `docs/chapter-1-causes/index.md`:

```markdown
---
sidebar_position: 1
title: "Chapter 1: Causes of Terrorism in Pakistan"
---

# Chapter 1: Causes of Terrorism in Pakistan

This chapter examines the multi-dimensional factors driving the resurgence of terrorism in Pakistan, particularly following the August 2021 Taliban takeover of Afghanistan.

## Chapter Contents

import DocCardList from '@theme/DocCardList';

<DocCardList />
```

### Step 5: Quality Assurance

1. **Academic review**: Invoke `academic-editor` agent for content review
2. **Proofreading**: Invoke `scholarly-proofreader` agent for final polish
3. **Checklist verification**: Confirm all FRs and SCs met

## Agent Invocation Templates

### Section I (Introduction)

```
Task tool invocation:
- subagent_type: academic-terrorism-writer
- prompt: Generate Section I of Chapter 1 following the contract at
  specs/002-chapter1-terrorism-causes/contracts/section-i.md.

  Key requirements:
  - FR-001: Post-2021 violence surge statistics
  - FR-002: Preconditions/precipitants framework
  - FR-003: Define TTP, ISKP, sectarian, BLA categories
  - FR-004: Multi-causal thesis statement

  Target: 400-500 words
  Output: Docusaurus markdown with front matter
  Tone: Strictly academic
```

### Section II (Geopolitical)

```
Task tool invocation:
- subagent_type: pakistan-terrorism-analyst
- prompt: Generate Section II of Chapter 1 following the contract at
  specs/002-chapter1-terrorism-causes/contracts/section-ii.md.

  Key requirements:
  - FR-005: Soviet War legacy (proxy sponsorship, Kalashnikov Culture)
  - FR-006: Post-2021 Afghan instability (TTP sanctuary, Doha breach)
  - FR-007: Durand Line border management critique
  - FR-008: External state rivalries (multiple perspectives required)

  Target: 1,200-1,500 words
  Use terminology defined in Section I
  Apply contested claims protocol from research.md
```

### Section III (Domestic)

```
Task tool invocation:
- subagent_type: pakistan-terrorism-analyst
- prompt: Generate Section III of Chapter 1 following the contract at
  specs/002-chapter1-terrorism-causes/contracts/section-iii.md.

  Key requirements:
  - FR-009: NAP implementation failures, political instability
  - FR-010: ATC conviction rates, witness protection, investigation gaps
  - FR-011: FATA merger integration failures, TTP exploitation

  Target: 1,200-1,500 words
  Include quantitative data where available
  Maintain analytical objectivity
```

### Section IV (Socio-Economic)

```
Task tool invocation:
- subagent_type: pakistan-terrorism-analyst
- prompt: Generate Section IV of Chapter 1 following the contract at
  specs/002-chapter1-terrorism-causes/contracts/section-iv.md.

  Key requirements:
  - FR-012: Relative deprivation vs. absolute poverty (EXPLICIT CAVEAT required)
  - FR-013: Sectarian organizations, extremist narratives
  - FR-014: Terror financing (NO operational details)
  - FR-015: Digital radicalization (NO operational details)

  Target: 1,200-1,500 words
  Critical: Include explicit poverty-terrorism caveat
  Critical: No operational security information
```

### Section V (Conclusion)

```
Task tool invocation:
- subagent_type: academic-terrorism-writer
- prompt: Generate Section V of Chapter 1 following the contract at
  specs/002-chapter1-terrorism-causes/contracts/section-v.md.

  Key requirements:
  - FR-016: Synthesize all four dimensions
  - FR-017: Bridge to Chapter 2
  - FR-018: Identify intervention points WITHOUT policy prescriptions

  Target: 800-1,000 words
  Must reference all previous sections
  Must NOT prescribe specific policies
```

## Terminology Reference

All agents must use these definitions (established in Section I):

| Term | Definition |
|------|------------|
| TTP | Tehrik-i-Taliban Pakistan |
| ISKP | Islamic State Khorasan Province |
| BLA | Balochistan Liberation Army |
| Merged Districts | Former FATA areas (post-2018) |
| NAP | National Action Plan (2014) |
| ATC | Anti-Terrorism Court |
| Preconditions | Structural enabling factors |
| Precipitants | Immediate triggers |

## Success Criteria Verification

After generation, verify:

- [ ] SC-001: 4,000-5,000 words total
- [ ] SC-002: All 5 sections complete
- [ ] SC-003: Factual accuracy (no major errors)
- [ ] SC-004: Consistent academic tone
- [ ] SC-005: 10+ distinct causal factors identified
- [ ] SC-006: Evidence accompanies major claims
- [ ] SC-007: Logical flow maintained
- [ ] SC-008: Chapter 2 transition clear
- [ ] SC-009: University-level appropriateness
- [ ] SC-010: No operational security details

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Section exceeds word count | Edit for conciseness; prioritize FR coverage |
| Terminology inconsistency | Reference Section I definitions; standardize |
| Missing FR coverage | Return to contract; ensure all requirements met |
| Operational details slip in | Remove immediately; rewrite with general patterns only |
| Political bias detected | Rewrite with multiple perspectives; add hedging language |

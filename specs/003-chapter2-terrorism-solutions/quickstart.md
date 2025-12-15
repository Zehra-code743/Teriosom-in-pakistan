# Quickstart Guide: Chapter 2 Content Generation

**Feature**: `003-chapter2-terrorism-solutions`
**Phase**: 1 - Design
**Date**: 2025-12-15

## Overview

This guide provides generation instructions for Chapter 2: Prevention and Solutions for Terrorism in Pakistan. Follow this guide when executing `/sp.implement` or generating content manually.

## Pre-Generation Checklist

Before generating any content:

- [ ] Read `research.md` for policy framework decisions
- [ ] Read `data-model.md` for content structure
- [ ] Read relevant section contract in `contracts/`
- [ ] Review Chapter 1 synthesis.md for intervention points
- [ ] Confirm terminology consistency with Chapter 1

## Agent Delegation

Per `plan.md`, delegate to these agents in sequence:

| Phase | Agent | Input | Output |
|-------|-------|-------|--------|
| Content | `pakistan-terrorism-prevention-analyst` | Section contracts | Section markdown files |
| Review | `academic-editor` | Generated sections | Neutrality/tone feedback |
| Polish | `scholarly-proofreader` | Reviewed sections | Final polished content |

## Generation Sequence

### Phase 1: Index Page

**File**: `docs/chapter-2-solutions/index.md`
**Agent**: `pakistan-terrorism-prevention-analyst`

**Prompt Template**:
```
Generate the Chapter 2 index page for "Prevention and Solutions for Terrorism in Pakistan".

Requirements:
- ~300 words
- Sidebar position: 1
- Include chapter overview connecting to Chapter 1's causal analysis
- Preview all four sections
- Establish policy-oriented academic tone

Chapter 1 established these intervention points:
[Include synthesis table from Chapter 1]
```

### Phase 2: Section Content (Parallel)

Generate all four sections in parallel using `pakistan-terrorism-prevention-analyst`.

#### Section I: Strategic Reorientation

**File**: `docs/chapter-2-solutions/strategic-reorientation.md`
**Contract**: `contracts/section-i.md`

**Key Prompts**:
- FR-001: "Propose a military-civilian transition thesis for Pakistan's CT strategy"
- FR-002: "Analyze NAP implementation gaps with specific revision priorities"
- FR-003: "Design a whole-of-government strategic framework"

#### Section II: Rule of Law Reform

**File**: `docs/chapter-2-solutions/rule-of-law-reform.md`
**Contract**: `contracts/section-ii.md`

**Key Prompts**:
- FR-004: "Propose CJS capacity building measures for CT effectiveness"
- FR-005: "Design a comprehensive witness protection framework"
- FR-006: "Recommend ATC reforms to improve conviction rates"
- FR-007: "Outline CFT measures for FATF compliance"

#### Section III: CVE and Ideology

**File**: `docs/chapter-2-solutions/cve-ideology.md`
**Contract**: `contracts/section-iii.md`

**Key Prompts**:
- FR-008: "Design a whole-of-nation CVE framework with multi-stakeholder approach"
- FR-009: "Propose scaled deradicalization programs based on Sabaoon model"
- FR-010: "Recommend madrasah reform with voluntary incentives"
- FR-011: "Develop digital counter-narrative strategy"

#### Section IV: Socio-Economic and Border

**File**: `docs/chapter-2-solutions/socioeconomic-border.md`
**Contract**: `contracts/section-iv.md`

**Key Prompts**:
- FR-012: "Design development interventions addressing relative deprivation"
- FR-013: "Propose accelerated FATA/merged districts integration"
- FR-014: "Outline realistic border security measures"

### Phase 3: Academic Review

**Agent**: `academic-editor`

**Prompt**:
```
Review the generated Chapter 2 content for:
1. Political neutrality - no party-specific bias
2. Academic credibility - evidence-based claims
3. Tone consistency - scholarly but accessible
4. Chapter 1 linkage - each recommendation connects to causes
```

### Phase 4: Final Polish

**Agent**: `scholarly-proofreader`

**Prompt**:
```
Proofread Chapter 2 for publication quality:
1. Grammar and spelling
2. Terminology consistency with Chapter 1
3. Citation format consistency
4. Markdown formatting
```

## Source Hierarchy (per research.md)

When generating content, prioritize sources:

1. **Academic CVE literature**: Horgan, Sageman, Schmid
2. **Pakistani policy documents**: NAP text, NACTA reports
3. **International frameworks**: UN CTED, OSCE CVE guidance
4. **Think tank reports**: USIP, ICG, Brookings
5. **Case studies**: Sabaoon Centre, SERPAP

## Terminology Reference

### Chapter 1 Terms (maintain consistency)
- TTP: Tehrik-i-Taliban Pakistan
- ISKP: Islamic State Khorasan Province
- BLA: Balochistan Liberation Army
- Merged Districts: Former FATA (post-2018)
- NAP: National Action Plan (2014)
- ATC: Anti-Terrorism Court
- Preconditions: Structural factors
- Precipitants: Immediate triggers
- Relative Deprivation: Gurr framework

### New Chapter 2 Terms
- CVE: Countering Violent Extremism
- CFT: Counter Terrorist Financing
- CJS: Criminal Justice System
- FATF: Financial Action Task Force
- NACTA: National Counter Terrorism Authority

## Quality Gates

Each section must pass before proceeding:

### Gate 1: Contract Compliance
- [ ] Word count within tolerance
- [ ] All required subsections present
- [ ] Minimum recommendations met

### Gate 2: Chapter 1 Linkage
- [ ] Each recommendation explicitly links to causal factor
- [ ] Intervention points table addressed
- [ ] Terminology consistent

### Gate 3: Content Safety
- [ ] No operational security details
- [ ] No intelligence methods
- [ ] No exploitable vulnerabilities
- [ ] Sensitive topics handled per protocol

### Gate 4: Academic Quality
- [ ] Evidence-based claims
- [ ] Multiple perspectives where contested
- [ ] Appropriate hedging language
- [ ] Policy actionability maintained

## Output Validation

After generation, validate:

```yaml
success_criteria:
  SC-001: word_count >= 4000 AND word_count <= 5000
  SC-002: sections_count == 4
  SC-003: all_recommendations_linked_to_chapter1
  SC-004: policy_actionable_recommendations
  SC-005: recommendation_count >= 15
  SC-006: implementation_considerations_present
  SC-007: academic_tone_maintained
  SC-008: chapter1_terminology_consistent
  SC-009: docusaurus_format_valid
  SC-010: no_operational_security_content
```

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Recommendations too vague | Add implementation considerations per FR-017 |
| Missing Chapter 1 links | Reference specific synthesis.md intervention points |
| Tone too prescriptive | Add acknowledgment of political constraints |
| Sensitive topic mishandled | Apply protocol from research.md Section 5 |
| Word count off | Adjust subsection depth, not scope |

## Completion Checklist

- [ ] All 5 content files generated (index + 4 sections)
- [ ] Academic review completed
- [ ] Proofreading completed
- [ ] All success criteria validated
- [ ] PHR created for implementation

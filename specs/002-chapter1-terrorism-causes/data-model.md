# Content Data Model: Chapter 1 - Causes of Terrorism in Pakistan

**Feature**: `002-chapter1-terrorism-causes`
**Phase**: 1 - Design & Contracts
**Date**: 2025-12-15

## Overview

This document defines the content structure model for Chapter 1, mapping entities, relationships, and content flows to ensure coherent academic narrative generation.

## Content Entities

### Primary Entities

#### 1. Chapter

| Attribute | Value |
|-----------|-------|
| Title | "Chapter 1: Causes of Terrorism in Pakistan" |
| Target Length | 4,000-5,000 words |
| Sections | 5 major sections (I-V) |
| Output Path | `docs/chapter-1-causes/` |
| Format | Docusaurus-compatible Markdown |

#### 2. Section

| ID | Title | Page Equiv | Word Target | Output File |
|----|-------|------------|-------------|-------------|
| I | Introduction and Theoretical Framing | 1 | 400-500 | `theoretical-framework.md` |
| II | Geopolitical and Regional Drivers | 3 | 1,200-1,500 | `geopolitical-drivers.md` |
| III | Domestic Structural and Institutional Flaws | 3 | 1,200-1,500 | `domestic-flaws.md` |
| IV | Socio-Economic, Ideological, and Operational Drivers | 3 | 1,200-1,500 | `socioeconomic-factors.md` |
| V | Conclusion and Transition | 2 | 800-1,000 | `synthesis.md` |

#### 3. Sub-Section

| Section | Sub-Section ID | Title | FR Reference |
|---------|----------------|-------|--------------|
| I | 1.1 | Chapter Introduction & Crisis Context | FR-001 |
| I | 1.2 | Defining the Threat Landscape | FR-002, FR-003, FR-004 |
| II | 1.3 | The Historical Continuum of Conflict | FR-005 |
| II | 1.4 | Instability in Afghanistan (Post-2021) | FR-006, FR-007 |
| II | 1.5 | External State Rivalries and Proxies | FR-008 |
| III | 1.6 | Weak Governance and Policy Deficits | FR-009 |
| III | 1.7 | Institutional Weakness in the Justice Sector | FR-010 |
| III | 1.8 | Failure of Integration in Merged Districts | FR-011 |
| IV | 1.9 | Socio-Economic Marginalization | FR-012 |
| IV | 1.10 | Ideological and Sectarian Fuel | FR-013 |
| IV | 1.11 | Financing and Digital Tactics | FR-014, FR-015 |
| V | 1.12 | Synthesis of Findings | FR-016, FR-017, FR-018 |

### Analytical Entities

#### 4. Terrorist Organization

| Entity | Category | Operational Area | Ideology | First Defined |
|--------|----------|------------------|----------|---------------|
| TTP | Transnational/Regional | Pakistan-Afghanistan | Jihadist | Section I (1.2) |
| ISKP | Transnational/Regional | Afghanistan-Pakistan | Salafi-Jihadist | Section I (1.2) |
| Lashkar-e-Jhangvi | Sectarian | Punjab, Balochistan | Anti-Shia | Section I (1.2) |
| BLA | Ethno-Nationalist | Balochistan | Separatist | Section I (1.2) |

#### 5. Geographic Region

| Entity | Type | Relevance | Sections Referenced |
|--------|------|-----------|---------------------|
| FATA/Merged Districts | Administrative | Governance vacuum, TTP stronghold | I, II, III |
| Balochistan | Province | BLA operations, proxy activities | I, II, III |
| Durand Line | Border | Infiltration corridor | II |
| Afghanistan | Country | TTP sanctuary, post-2021 context | I, II |
| KP (Khyber Pakhtunkhwa) | Province | Merged districts integration | III |

#### 6. Institutional Actor

| Entity | Type | Role in Analysis | Sections Referenced |
|--------|------|------------------|---------------------|
| Anti-Terrorism Courts (ATC) | Judicial | Prosecution challenges | III |
| National Action Plan (NAP) | Policy Framework | Implementation failures | III |
| Pakistani Military | Security | Border management, operations | II, III |
| Afghan Taliban | Foreign Government | TTP sanctuary provider | II |
| FATF | International Body | CFT compliance pressure | IV |

#### 7. Analytical Concept

| Concept | Definition | Application | First Defined |
|---------|------------|-------------|---------------|
| Preconditions | Structural enabling factors | All causal analysis | Section I (1.2) |
| Precipitants | Immediate triggering events | Post-2021 surge analysis | Section I (1.2) |
| Relative Deprivation | Perceived gap between expectations and reality | Recruitment analysis | Section IV (1.9) |
| Kalashnikov Culture | Weapons proliferation and normalization | Historical legacy | Section II (1.3) |
| Strategic Depth | Pakistan's Afghanistan policy doctrine | Regional dynamics | Section II (1.5) |

## Content Relationships

### Section Dependencies

```
Section I (Intro/Framework)
    └── Defines: terminology, framework, threat categories
    └── Feeds: All subsequent sections

Section II (Geopolitical)
    ├── Requires: Section I terminology
    ├── Covers: Historical + regional factors
    └── Feeds: Section V synthesis

Section III (Domestic)
    ├── Requires: Section I terminology
    ├── Covers: Governance + institutional factors
    └── Feeds: Section V synthesis

Section IV (Socio-Economic/Ideological)
    ├── Requires: Section I terminology
    ├── Covers: Recruitment + operational factors
    └── Feeds: Section V synthesis

Section V (Conclusion)
    ├── Requires: All previous sections
    ├── Synthesizes: Cross-dimensional analysis
    └── Bridges: Chapter 2 (Solutions)
```

### Cross-Reference Matrix

| From | To | Reference Type |
|------|----|----------------|
| Section II | Section I | Uses threat landscape definitions |
| Section III | Section II | Builds on regional context |
| Section IV | Section I | Uses preconditions framework |
| Section IV | Section III | Links governance gaps to recruitment |
| Section V | All | Synthesizes all causal dimensions |
| Section V | Chapter 2 | Transition bridge (forward reference) |

## Content Flow States

### Generation Workflow

```
State: NOT_STARTED
  │
  ▼ [Agent dispatched]
State: IN_PROGRESS
  │
  ├── [Content generated] → State: DRAFT
  │
  ├── [Academic review] → State: REVIEWED
  │
  ├── [Proofreading] → State: POLISHED
  │
  └── [Final approval] → State: COMPLETE
```

### Validation Rules

| Rule | Description | Enforcement |
|------|-------------|-------------|
| Terminology Consistency | All defined terms used per Section I definitions | Post-generation review |
| Cross-Reference Validity | No forward references to undefined concepts | Section ordering |
| Word Count Target | Each section within 10% of target | Generation contract |
| FR Coverage | All functional requirements addressed | Checklist verification |
| Neutrality Check | No advocacy language, multiple perspectives | Academic review |

## Output Schema

### Markdown Front Matter (per section file)

```yaml
---
sidebar_position: [1-5]
title: "[Section Title]"
description: "[Brief description for SEO/preview]"
---
```

### Section Structure Template

```markdown
# [Section Title]

[Opening paragraph establishing context and scope]

## [Sub-Section 1.X.1 Title]

[Content addressing specific FR requirements]

## [Sub-Section 1.X.2 Title]

[Content with evidence and analysis]

[Section conclusion bridging to next section]
```

### Index File Structure (index.md)

```markdown
---
sidebar_position: 1
title: "Chapter 1: Causes of Terrorism in Pakistan"
---

# Chapter 1: Causes of Terrorism in Pakistan

[Chapter overview paragraph]

## Chapter Contents

1. [Theoretical Framework](./theoretical-framework)
2. [Geopolitical Drivers](./geopolitical-drivers)
3. [Domestic Institutional Flaws](./domestic-flaws)
4. [Socio-Economic and Ideological Factors](./socioeconomic-factors)
5. [Synthesis and Conclusion](./synthesis)

[Brief thematic introduction]
```

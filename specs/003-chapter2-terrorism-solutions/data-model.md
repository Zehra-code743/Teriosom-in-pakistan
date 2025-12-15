# Data Model: Chapter 2 - Prevention and Solutions for Terrorism in Pakistan

**Feature**: `003-chapter2-terrorism-solutions`
**Phase**: 1 - Design
**Date**: 2025-12-15

## Content Structure Overview

This document defines the content structure and data model for Chapter 2 generation.

## Chapter Architecture

```
Chapter 2: Prevention and Solutions (4,000-5,000 words total)
├── index.md (~300 words)
│   ├── Chapter overview
│   ├── Structure preview
│   └── Chapter 1 connection summary
│
├── Section I: strategic-reorientation.md (~900 words)
│   ├── I.A Military Operations Assessment
│   ├── I.B NAP Review and Revision
│   └── I.C Non-Kinetic Strategic Shift
│
├── Section II: rule-of-law-reform.md (~1,000 words)
│   ├── II.A Criminal Justice System Capacity
│   ├── II.B Witness Protection Framework
│   ├── II.C Anti-Terrorism Court Reform
│   └── II.D Counter Terrorist Financing
│
├── Section III: cve-ideology.md (~1,100 words)
│   ├── III.A Whole-of-Nation CVE Framework
│   ├── III.B Deradicalization Programs
│   ├── III.C Madrasah Reform
│   └── III.D Digital Counter-Narratives
│
└── Section IV: socioeconomic-border.md (~1,000 words)
    ├── IV.A Development Interventions
    ├── IV.B FATA/Merged Districts Integration
    └── IV.C Border Security Measures
```

## Content Components

### Index Page Structure

| Component | Description | Source |
|-----------|-------------|--------|
| Title | "Chapter 2: Prevention and Solutions for Terrorism in Pakistan" | Fixed |
| Sidebar Position | 3 (after Chapter 1) | Docusaurus config |
| Overview | 2-3 paragraph introduction to solution framework | Generated |
| Structure Preview | Bulleted list of 4 sections | Fixed |
| Linkage Statement | Explicit connection to Chapter 1's causal analysis | Generated |

### Section Content Model

Each section follows this structure:

```typescript
interface SectionContent {
  frontmatter: {
    sidebar_position: number;
    title: string;
    description: string;
  };
  introduction: string;          // 100-150 words, connects to Chapter 1
  subsections: Subsection[];     // 2-4 subsections per section
  conclusion: string;            // 50-100 words, transition to next section
}

interface Subsection {
  heading: string;               // H2 level
  causalLinkage: string;         // Explicit Chapter 1 reference
  analysis: string;              // Current state assessment
  recommendations: Recommendation[];
}

interface Recommendation {
  title: string;                 // Concise recommendation statement
  rationale: string;             // Why this addresses the cause
  implementationNotes: string;   // Key considerations (FR-017 compliance)
  linkedCause: string;           // Chapter 1 causal factor reference
}
```

## Chapter 1 Causal Linkage Model

Each recommendation MUST map to Chapter 1 intervention points:

| Chapter 2 Section | Chapter 1 Causal Factors Addressed |
|-------------------|-----------------------------------|
| I: Strategic Reorientation | Governance gaps, NAP implementation failures |
| II: Rule of Law | Justice sector weakness, Terror financing |
| III: CVE & Ideology | Ideological mobilization, Digital radicalization |
| IV: Socio-Economic/Border | Afghan sanctuary, FATA integration gaps, Socio-economic marginalization |

## Recommendation Tagging Schema

```yaml
recommendation:
  id: REC-[section]-[number]  # e.g., REC-II-03
  title: string
  domain: strategic | justice | cve | development | border
  chapter1_cause: string      # Reference to Chapter 1 factor
  implementation:
    difficulty: low | moderate | high
    stakeholders: string[]    # Key actors required
    constraints: string[]     # Political/resource limitations
```

## Word Count Distribution

| File | Target Words | Tolerance |
|------|--------------|-----------|
| index.md | 300 | ±50 |
| strategic-reorientation.md | 900 | ±100 |
| rule-of-law-reform.md | 1,000 | ±100 |
| cve-ideology.md | 1,100 | ±100 |
| socioeconomic-border.md | 1,000 | ±100 |
| **Total** | **4,300** | **4,000-5,000** |

## Quality Validation Schema

Each generated section validated against:

```yaml
validation:
  word_count:
    min: [section_min]
    max: [section_max]
  recommendations:
    min_per_section: 3
    total_chapter: 15+
  chapter1_links:
    every_recommendation_linked: true
    explicit_reference_required: true
  tone:
    academic_credibility: required
    policy_actionability: required
    political_neutrality: required
  safety:
    no_operational_details: required
    no_intelligence_methods: required
```

## Output File Format

All content files follow Docusaurus MDX format:

```markdown
---
sidebar_position: [n]
title: "[Section Title]"
description: "[Meta description for SEO]"
---

# [Section Title]

[Introduction connecting to Chapter 1...]

## [Subsection Heading]

[Analysis and recommendations...]

### Recommendation: [Title]

**Rationale**: [Why this addresses the identified cause]

**Implementation Considerations**: [Key factors per FR-017]

[Continue for each subsection...]

## Conclusion

[Transition to next section or chapter summary...]
```

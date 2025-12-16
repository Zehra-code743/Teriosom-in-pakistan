# Content Structure & Learning Taxonomy

**Feature**: 003-chapter1-terrorism-causes (Student Edition)
**Date**: 2025-12-16
**Purpose**: Define the information architecture, learning objectives, and content relationships for student-focused Chapter 1

## Overview

This data model defines the educational content structure for teaching terrorism causes to students aged 12-18. Unlike traditional data models that focus on entities and relationships in software systems, this model defines:

1. **Learning Taxonomy**: Cognitive levels and learning objectives per Bloom's Taxonomy
2. **Content Components**: Reusable elements that appear across sections
3. **Section Relationships**: Prerequisites, dependencies, and cross-references
4. **Metadata Structure**: Frontmatter, keywords, and accessibility attributes

## 1. Learning Taxonomy (Bloom's Revised)

### Cognitive Hierarchy by Section

| Section | Bloom's Levels | Learning Objectives | Assessment Method |
|---------|----------------|---------------------|-------------------|
| **Section 1: Definition** | Remember, Understand | • Define terrorism (3 components)<br/>• Explain psychological impact<br/>• Recognize Pakistan context | Recall definition, explain in own words |
| **Section 2: Political** | Understand, Apply | • Identify political instability indicators<br/>• Explain corruption-terrorism link<br/>• Apply to scenarios | Identify factors in case studies |
| **Section 3: Economic** | Understand, Apply | • Describe poverty-vulnerability connection<br/>• Explain unemployment as risk factor<br/>• Analyze recruitment mechanisms | Explain connection in written response |
| **Section 4: Education** | Analyze, Evaluate | • Distinguish factual vs. propaganda<br/>• Analyze education gap impacts<br/>• Evaluate information sources | Classify statements, assess credibility |
| **Section 5: Extremism** | Analyze, Evaluate | • Identify manipulation tactics<br/>• Analyze fear-based control<br/>• Evaluate group motivations | Recognize tactics in scenarios |

### Progressive Complexity

```text
Foundation (Section 1)
    ↓
  Remember/Understand: What is terrorism?
    ↓
Intermediate (Sections 2-3)
    ↓
  Understand/Apply: Why does it happen? (causes)
    ↓
Advanced (Sections 4-5)
    ↓
  Analyze/Evaluate: How do I recognize manipulation?
```

## 2. Content Components

### Reusable Elements Across Sections

#### A. Standard Section Structure

Every section (01-05) follows this pattern:

```markdown
---
[Frontmatter]
---

# [Section Title]

## Introduction
[Activating statement - relatable opening, 1-2 sentences]
[Learning objective - what students will understand, 1 sentence]

## [Core Concept 1]
[Definition/Explanation - 2-3 paragraphs]
[Connection to terrorism - explicit link, 1 paragraph]

:::info Example
[Concrete scenario - hypothetical, Pakistan-contextualized, 2-3 sentences]
:::

## [Core Concept 2]
[Definition/Explanation - 2-3 paragraphs]
[Connection to terrorism - explicit link, 1 paragraph]

:::info Example
[Concrete scenario - hypothetical, Pakistan-contextualized, 2-3 sentences]
:::

## Impact on Pakistan
[Synthesis of concepts - how they interact, 2-3 paragraphs]
[Statistics/aggregate data - demonstrates scale, 1 paragraph]

## Summary
[Key takeaways - 3-4 bullet points]

:::tip Think About It
[Reflection prompt - aligned to learning objective, 1 question]
:::
```

#### B. Admonition Types

**Example Admonition** (`:::info Example`):
- **Purpose**: Provide concrete scenario illustrating abstract concept
- **Format**: 2-3 sentences, hypothetical individual or situation
- **Placement**: After concept explanation, before moving to next concept
- **Frequency**: 1-2 per section

**Reflection Prompt** (`:::tip Think About It`):
- **Purpose**: Formative assessment, self-check comprehension
- **Format**: 1 open-ended question aligned to section's learning objective
- **Placement**: End of section, after summary
- **Frequency**: 1 per section

**Educator Note** (`:::caution Important for Educators`):
- **Purpose**: Sensitivity guidance, trauma awareness
- **Format**: 1-2 sentences, specific trigger or concern
- **Placement**: Quickstart.md only, NOT in student-facing content
- **Frequency**: As needed per section in quickstart.md

#### C. Example Template

All examples follow this structure:

```text
[Setup]: Introduce character/situation (neutral, relatable)
[Vulnerability]: Describe the factor being illustrated (political/economic/etc.)
[Connection]: Explain how this creates terrorism risk (NOT graphic violence)
```

**Sample Application** (from Section 3 - Economic):

```markdown
:::info Example
Hamza is a 19-year-old who graduated from secondary school but cannot find work in his region. With no income and limited prospects, he becomes frustrated watching his family struggle. When an extremist group offers him money and a sense of purpose, he becomes vulnerable to their recruitment despite not agreeing with their ideology.
:::
```

**Template Rules**:
- Use Pakistani names (Hamza, Fatima, Ali, Ayesha) for relatability
- Age 15-22 for youth-focused examples (target audience identification)
- No named terrorist groups
- No descriptions of violence
- Focus on "before recruitment" vulnerability, not "after recruitment" actions

## 3. Section Relationships

### Prerequisites & Dependencies

```text
Index (Chapter Overview)
    ↓
Section 1 (Definition)
    ↓
    ├─→ Section 2 (Political)
    ├─→ Section 3 (Economic)
    ├─→ Section 4 (Education)
    └─→ Section 5 (Extremism)
         ↓
    [All sections feed into]
         ↓
    Chapter Summary (in Index)
```

**Reading Sequence**:
1. **Required First**: Section 1 must be read before any other section (establishes terrorism definition)
2. **Flexible Middle**: Sections 2-5 can be read in any order after Section 1 (independent causes)
3. **Recommended**: Follow numbered sequence (01 → 02 → 03 → 04 → 05) for optimal comprehension

### Cross-References

| Source Section | Target Section | Relationship Type | Link Text Example |
|----------------|----------------|-------------------|-------------------|
| Section 1 | All (2-5) | Foundation | "As we defined in Section 1, terrorism uses fear..." |
| Section 2 | Section 3 | Complementary | "Political instability (see Section 2) often worsens economic conditions..." |
| Section 3 | Section 5 | Causal Chain | "Economic vulnerability makes recruitment easier (Section 5 explores these tactics)..." |
| Section 4 | Section 5 | Complementary | "Extremist groups exploit education gaps through propaganda techniques..." |
| All (2-5) | Index | Summary | "For an overview of all causes, see the Chapter Summary" |

**Cross-Reference Rules**:
- **Maximum 2 cross-references per section** (avoid over-linking)
- **Use relative links**: `[Section 2](./02-political-problems)` not absolute URLs
- **Descriptive link text**: Explain the relationship, not just "click here"
- **Non-blocking**: Cross-references enhance but aren't required for comprehension

### Conceptual Dependencies (for Educators)

**Bloom's Level Progression**:
- Section 1 teaches vocabulary needed for Sections 2-5 (terrorism, fear, goals, violence)
- Sections 2-3 establish causes (understand/apply level)
- Sections 4-5 build on causes to teach critical thinking (analyze/evaluate level)

**Thematic Connections** (implicit, not explicit links):
- **Political (2) ↔ Economic (3)**: Weak governance exacerbates poverty
- **Economic (3) → Extremism (5)**: Poverty makes recruitment offer appealing
- **Education (4) ↔ Extremism (5)**: Education gaps make propaganda effective
- **All causes → Chapter 2**: Solutions must address multiple interacting causes

## 4. Metadata Structure

### Frontmatter Schema

Every markdown file uses this YAML frontmatter:

```yaml
---
sidebar_position: <number 1-6>
title: "<Display Title>"
description: "<SEO/accessibility description, 120-160 chars>"
keywords:
  - terrorism
  - Pakistan
  - education
  - <section-specific keywords>
---
```

### Metadata by File

#### Index (index.md)
```yaml
sidebar_position: 1
title: "Chapter 1: Understanding Terrorism Causes (Student Edition)"
description: "Learn about the root causes of terrorism in Pakistan through five key factors: political, economic, educational, and extremist influences."
keywords:
  - terrorism
  - Pakistan
  - education
  - causes
  - student guide
  - chapter 1
```

#### Section 1 (01-understanding-terrorism.md)
```yaml
sidebar_position: 2
title: "Section 1: Understanding Terrorism"
description: "Learn the definition of terrorism, how it creates fear, and why it affects Pakistan. Foundation for understanding terrorism causes."
keywords:
  - terrorism
  - definition
  - fear
  - violence
  - Pakistan
  - understanding terrorism
```

#### Section 2 (02-political-problems.md)
```yaml
sidebar_position: 3
title: "Section 2: Political Problems"
description: "Explore how political instability and corruption create conditions that enable terrorist groups to operate in Pakistan."
keywords:
  - terrorism
  - political instability
  - corruption
  - governance
  - Pakistan
  - causes of terrorism
```

#### Section 3 (03-poverty-unemployment.md)
```yaml
sidebar_position: 4
title: "Section 3: Poverty and Unemployment"
description: "Understand how economic hardship makes people vulnerable to extremist recruitment and fuels terrorism in Pakistan."
keywords:
  - terrorism
  - poverty
  - unemployment
  - economic factors
  - recruitment
  - Pakistan
```

#### Section 4 (04-education-awareness.md)
```yaml
sidebar_position: 5
title: "Section 4: Education and Awareness"
description: "Learn how education gaps and misinformation contribute to terrorism and how awareness can prevent radicalization."
keywords:
  - terrorism
  - education
  - misinformation
  - propaganda
  - awareness
  - prevention
  - Pakistan
```

#### Section 5 (05-extremist-influence.md)
```yaml
sidebar_position: 6
title: "Section 5: Extremist Group Influence"
description: "Recognize how extremist groups use manipulation, fear, and recruitment tactics to spread terrorism in Pakistan."
keywords:
  - terrorism
  - extremist groups
  - manipulation
  - recruitment
  - tactics
  - Pakistan
```

### Keyword Taxonomy

**Universal Keywords** (all files):
- terrorism
- Pakistan
- education

**Category Keywords** (thematic grouping):
- **Causes**: causes, root causes, factors
- **Political**: political instability, corruption, governance
- **Economic**: poverty, unemployment, economic factors, recruitment
- **Educational**: education, misinformation, propaganda, awareness
- **Extremism**: extremist groups, manipulation, tactics, recruitment

**Functional Keywords**:
- **Student-focused**: student guide, learning, understanding
- **Chapter navigation**: chapter 1, section 1, section 2, etc.

## 5. Content Metrics & Targets

### Word Count by Section

| File | Target Word Count | Readability Target (FK) | Estimated Reading Time |
|------|-------------------|-------------------------|------------------------|
| index.md | 300-500 | 7.0-8.0 | 2-3 minutes |
| 01-understanding-terrorism.md | 400-600 | 7.0-8.0 | 3-4 minutes |
| 02-political-problems.md | 500-700 | 8.0-9.0 | 4-5 minutes |
| 03-poverty-unemployment.md | 500-700 | 8.0-9.0 | 4-5 minutes |
| 04-education-awareness.md | 500-700 | 8.0-10.0 | 4-5 minutes |
| 05-extremist-influence.md | 500-700 | 9.0-10.0 | 4-5 minutes |
| **Total** | **3000-4000** | **7.0-10.0 range** | **21-28 minutes** |

### Structural Metrics

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Paragraphs per section** | 8-12 | Mobile-friendly, digestible chunks |
| **Sentences per paragraph** | 3-5 | Readability, attention span |
| **Heading levels** | H1 (title), H2 (main), H3 (sub) | Clear hierarchy, accessibility |
| **Examples per section** | 1-2 | Concrete without overwhelming |
| **Bullet lists per section** | 2-3 | Summaries, key takeaways |
| **Admonitions per section** | 2-3 | Examples + reflection prompt |

## 6. Accessibility Attributes

### Semantic HTML (via Docusaurus)

Markdown → HTML conversion ensures:

```html
<article role="main">
  <h1 id="section-title">Section Title</h1>
  <nav aria-label="table of contents">...</nav>
  <section>
    <h2 id="core-concept">Core Concept</h2>
    <p>Content...</p>
    <aside class="admonition">Example...</aside>
  </section>
</article>
```

### ARIA Labels (Docusaurus Default)

- Navigation: `aria-label="site navigation"`, `aria-label="table of contents"`
- Main content: `role="main"`
- Landmarks: `<header>`, `<main>`, `<footer>`, `<aside>` properly used
- Skip links: "Skip to main content" automatically provided

### Readability Enhancements

- **Heading hierarchy**: Never skip levels (H1 → H2 → H3, not H1 → H3)
- **Link text**: Descriptive ("see Section 2: Political Problems" not "click here")
- **List formatting**: Parallel structure (all bullets start with verb or all start with noun)
- **Alt text**: N/A for this text-only content (no images per spec scope)

## 7. Content Validation Checklist

### Per-Section Validation

Before a section is considered complete, verify:

- ✅ **Structure**: Follows standard section template (Introduction, concepts, impact, summary, reflection)
- ✅ **Word Count**: Within target range (±50 words acceptable)
- ✅ **Readability**: FK grade level within target for that section
- ✅ **Learning Objective**: Explicitly stated in introduction
- ✅ **Examples**: 1-2 examples following example template
- ✅ **Admonitions**: Properly formatted (`:::info`, `:::tip`)
- ✅ **Summary**: 3-4 bullet points capturing key takeaways
- ✅ **Reflection Prompt**: 1 question aligned to learning objective
- ✅ **Cross-References**: Maximum 2, functional links, descriptive text
- ✅ **Frontmatter**: Complete, keywords relevant, description accurate
- ✅ **Bloom's Level**: Content matches intended cognitive level

### Cross-Section Validation

After all sections complete, verify:

- ✅ **Prerequisites**: Section 1 properly establishes foundation for 2-5
- ✅ **Progressive Complexity**: FK grade level increases from Section 1 to 5
- ✅ **Terminology Consistency**: "Terrorism" defined same way across all sections
- ✅ **Example Diversity**: Examples cover different scenarios, not repetitive
- ✅ **Thematic Coverage**: All five causes (political, economic, education, extremism, definition) addressed
- ✅ **Assessment Alignment**: Each section supports its designated success criteria
- ✅ **Total Word Count**: Chapter total within 3000-4000 range
- ✅ **Navigation**: All internal links functional, sidebar order correct

## 8. Data Model Summary

This content structure ensures:

1. **Pedagogical Soundness**: Progressive complexity aligned to Bloom's Taxonomy
2. **Consistency**: All sections follow identical template, predictable for students
3. **Accessibility**: WCAG 2.1 AA compliance through semantic HTML and clear structure
4. **Assessability**: Learning objectives map directly to success criteria
5. **Maintainability**: Reusable components (admonitions, examples, structure) ease updates
6. **Discoverability**: Comprehensive metadata enables search and navigation

## Next Artifact: Contracts (contracts/)

With this data model established, the contracts/ directory will define the specific content requirements for each of the 6 markdown files, implementing the structure, taxonomy, and metrics defined here.

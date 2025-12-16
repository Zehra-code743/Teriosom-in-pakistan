# Data Model: Chapter 2 Content Structure

**Feature**: 005-chapter2-solutions
**Date**: 2025-12-16
**Purpose**: Define content entities, structure, and relationships for Chapter 2 prevention solutions

## Content Entities

### Entity 1: Chapter

**Represents**: Top-level grouping of related prevention content

**Attributes**:
- **chapter_number**: Integer (2)
- **title**: String ("Chapter 2: Prevention and Solutions")
- **description**: String (one-sentence summary)
- **sidebar_position**: Integer (2, after Chapter 1)
- **section_count**: Integer (5 sections)

**Relationships**:
- Contains 5 Section entities (2.1-2.5)
- Follows Chapter 1 (causes) - cross-references maintained
- Precedes final Assembly & Polish phase

**Validation Rules**:
- Title must indicate "Prevention" or "Solutions" focus
- Description must be politically neutral
- Section count must equal 5 (per spec)

**Implementation**:
```json
// _category_.json
{
  "label": "Chapter 2: Prevention and Solutions",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "How can we stop terrorism in Pakistan? Strengthening law enforcement, education and awareness, socioeconomic development, community involvement, and countering online radicalization."
  }
}
```

### Entity 2: Section

**Represents**: Individual content page covering one prevention strategy

**Attributes**:
- **section_number**: String ("2.1", "2.2", "2.3", "2.4", "2.5")
- **title**: String (e.g., "Strengthening Law Enforcement")
- **description**: String (one-sentence summary)
- **sidebar_position**: Integer (1-5)
- **word_count**: Integer (target: 500-800)
- **reading_level**: Float (target: Flesch-Kincaid 7.0-8.0)
- **content**: Markdown text
- **subtopics**: Array of Subtopic entities (2-3 per section)
- **key_takeaways**: Array of strings (3-5 bullet points)

**Relationships**:
- Belongs to Chapter 2
- Contains 2-3 Subtopic entities
- Contains 1 KeyTakeaways entity
- May reference other Sections (cross-links)

**Validation Rules**:
- Word count must be between 500-800 words
- Reading level must be Flesch-Kincaid Grade 7-8
- Must have opening paragraph (60-80 words)
- Must have closing paragraph (40-60 words)
- Must have 3-5 key takeaway bullets
- Must maintain political neutrality (no parties/leaders/policies mentioned)
- Must avoid operational security details
- Must use hope-focused framing

**Implementation**:
```markdown
---
sidebar_position: 1
title: "2.1: Strengthening Law Enforcement"
description: "How police and army training, modern equipment, and information sharing help prevent terrorism"
---

# 2.1: Strengthening Law Enforcement

[Content...]
```

### Entity 3: Subtopic

**Represents**: Focused explanation of one aspect of a prevention strategy

**Attributes**:
- **heading**: String (## level heading)
- **content**: Markdown text (150-250 words)
- **examples**: Array of strings (1-2 concrete examples)
- **explanation**: Text (concept explanation)

**Relationships**:
- Belongs to one Section
- May reference concepts from other Subtopics or Sections

**Validation Rules**:
- Word count: 150-250 words per subtopic
- Must include at least 1 concrete example
- Examples must be general (not specific historical incidents)
- Must use active voice where possible
- Must avoid technical jargon (or define immediately)

**Implementation**:
```markdown
## Police and Army Training

Strong training helps police and army members respond effectively to security threats. Training includes learning about modern security techniques, understanding community relations, and practicing coordinated responses. For example, when security forces receive training in community engagement, they can build trust with local residents, making it easier to gather information about potential threats.

Well-trained security forces can also adapt to new challenges. As terrorist tactics change, ongoing training ensures that police and army members have the skills they need to protect communities effectively.
```

### Entity 4: KeyTakeaways

**Represents**: Summary of main learning points for a section

**Attributes**:
- **bullets**: Array of strings (3-5 items)
- **total_words**: Integer (target: 30-50)

**Relationships**:
- Belongs to one Section
- Synthesizes all Subtopics in that Section

**Validation Rules**:
- Must have 3-5 bullet points
- Each bullet should be one sentence (10-15 words)
- Must be actionable or memorable
- Must reinforce hope-focused framing

**Implementation**:
```markdown
## Key Takeaways

- Well-trained police and army forces are essential for preventing terrorism
- Modern equipment and technology help security agencies respond quickly to threats
- Information sharing between agencies allows coordinated and effective responses
```

### Entity 5: Example

**Represents**: Concrete illustration of an abstract concept

**Attributes**:
- **context**: String (what concept is being illustrated)
- **description**: String (1-2 sentences)
- **framing**: Enum ("positive", "neutral") - never "negative" or "fear-based"

**Relationships**:
- Embedded within Subtopic
- May appear in opening or closing paragraphs

**Validation Rules**:
- Must be general, not specific historical incident
- Must be 1-2 sentences maximum
- Must avoid graphic details
- Must use positive or neutral framing
- Must be culturally relevant to Pakistani context where appropriate

**Implementation Examples**:

✅ **Good Examples**:
- "When communities trust police, they are more likely to report suspicious activities."
- "In areas with strong schools, students learn to think critically about extremist messages."
- "Job training programs give young people skills and opportunities, reducing vulnerability to recruitment."

❌ **Bad Examples** (avoid these):
- "After the 2014 attack on XYZ, security was improved..." (specific incident, fear-focused)
- "Terrorists use social media to radicalize youth..." (fear-focused, no solution framing)
- "Without proper security, attacks happen frequently..." (fear-focused, negative framing)

## Content Structure Schema

### Section Template Structure

```
Section
├── Frontmatter (YAML)
│   ├── sidebar_position
│   ├── title
│   └── description
├── Main Heading (# level 1)
├── Opening Paragraph (60-80 words)
├── Subtopic 1 (## level 2)
│   ├── Explanation paragraph(s)
│   └── Example(s)
├── Subtopic 2 (## level 2)
│   ├── Explanation paragraph(s)
│   └── Example(s)
├── [Optional] Subtopic 3 (## level 2)
│   ├── Explanation paragraph(s)
│   └── Example(s)
├── Key Takeaways (## level 2)
│   └── 3-5 bullet points
└── Closing Paragraph (40-60 words)
```

### Chapter Directory Structure

```
docs/chapter-2-solutions/
├── _category_.json          # Chapter entity metadata
├── 01-law-enforcement.md    # Section entity (2.1)
├── 02-education-awareness.md    # Section entity (2.2)
├── 03-socioeconomic-development.md  # Section entity (2.3)
├── 04-community-involvement.md  # Section entity (2.4)
└── 05-online-counter-radicalization.md  # Section entity (2.5)
```

## Content Relationships

### Cross-References Between Sections

Sections should reference each other to show interconnections:

- **2.1 (Law Enforcement)** → references **2.4 (Community)**: "Community trust, discussed in Section 2.4, makes law enforcement more effective."

- **2.2 (Education)** → references **2.5 (Online)**: "Media literacy skills, part of education awareness, help counter online radicalization (Section 2.5)."

- **2.3 (Socioeconomic)** → references **2.2 (Education)**: "Education programs (Section 2.2) combined with job opportunities create pathways out of poverty."

- **2.4 (Community)** → references **2.1 (Law Enforcement)**: "Community programs work alongside law enforcement efforts (Section 2.1) to prevent terrorism locally."

- **2.5 (Online)** → references **2.2 (Education)**: "Schools can teach students to recognize extremist propaganda online (building on Section 2.2)."

### Links to Chapter 1 (Causes)

Each prevention section should reference corresponding cause from Chapter 1:

- **2.1 (Law Enforcement)** → addresses security gaps identified in Chapter 1
- **2.2 (Education)** → addresses education gaps and extremist ideology from Chapter 1
- **2.3 (Socioeconomic)** → addresses poverty and unemployment causes from Chapter 1
- **2.4 (Community)** → addresses community disconnection and trust deficits from Chapter 1
- **2.5 (Online)** → addresses online radicalization pathways identified in Chapter 1

## Content State Transitions

### Section Lifecycle

1. **Draft**: Initial content written (500-800 words, following template)
2. **Readability Check**: Flesch-Kincaid test run, revisions made if needed
3. **Neutrality Review**: Political neutrality checklist applied
4. **Peer Review**: Academic expert reviews factual accuracy
5. **Educational Review**: Education specialist reviews age-appropriateness
6. **Final Edit**: Incorporate feedback, final checks
7. **Published**: Integrated into Docusaurus site

### Quality Gates Between States

**Draft → Readability Check**:
- ✅ Word count 500-800
- ✅ All template sections present (opening, subtopics, takeaways, closing)
- ✅ No placeholders remaining

**Readability Check → Neutrality Review**:
- ✅ Flesch-Kincaid Grade Level 7.0-8.0
- ✅ Average sentence length 15-20 words
- ✅ No sentences over 25 words

**Neutrality Review → Peer Review**:
- ✅ No political parties, leaders, or policies mentioned
- ✅ Institutional focus maintained
- ✅ Multiple perspectives represented where applicable

**Peer Review → Educational Review**:
- ✅ Factual accuracy verified
- ✅ Claims supported by evidence
- ✅ No outdated information

**Educational Review → Final Edit**:
- ✅ Age-appropriate for 12-18 year olds
- ✅ No graphic or traumatizing content
- ✅ Sufficient concrete examples

**Final Edit → Published**:
- ✅ All feedback incorporated
- ✅ Final readability test passed
- ✅ All cross-references verified
- ✅ Git commit with academic review sign-off

## Validation Summary

### Per-Section Validation Checklist

Before marking a section as complete, verify:

**Structure**:
- [ ] YAML frontmatter complete
- [ ] Opening paragraph 60-80 words
- [ ] 2-3 subtopics present
- [ ] Each subtopic 150-250 words
- [ ] Key Takeaways section with 3-5 bullets
- [ ] Closing paragraph 40-60 words

**Content Quality**:
- [ ] Total word count 500-800
- [ ] Flesch-Kincaid Grade Level 7-8
- [ ] 1-2 examples per subtopic
- [ ] Hope-focused framing throughout
- [ ] No graphic or fear-inducing content

**Compliance**:
- [ ] Politically neutral (no parties/leaders/policies)
- [ ] No operational security details
- [ ] Age-appropriate language
- [ ] Factually accurate (reviewed)
- [ ] Cross-references valid

### Chapter-Level Validation

Before considering Chapter 2 complete:

- [ ] All 5 sections completed and validated
- [ ] `_category_.json` properly configured
- [ ] Cross-references between sections verified
- [ ] Links to Chapter 1 verified
- [ ] Consistent terminology across all sections
- [ ] Consistent tone and reading level
- [ ] Full academic review completed (2+ reviewers)
- [ ] Educational specialist approval received
- [ ] User acceptance testing completed (student pilot group)

## Implementation Notes

### Markdown File Naming Convention

Files use numbered prefixes for ordering:
- `01-law-enforcement.md` (not `01-strengthening-law-enforcement.md` - keep concise)
- `02-education-awareness.md`
- `03-socioeconomic-development.md`
- `04-community-involvement.md`
- `05-online-counter-radicalization.md`

### Frontmatter Standards

Every section file must include:
```yaml
---
sidebar_position: [1-5]
title: "2.[1-5]: [Section Name]"
description: "[One sentence, 15-20 words, explaining prevention strategy]"
---
```

### Version Control Standards

Commit messages for content changes:
- "feat(ch2): add Section 2.1 Law Enforcement draft"
- "fix(ch2): revise Section 2.2 readability (FK 8.2 → 7.5)"
- "docs(ch2): academic review feedback for Section 2.3"
- "chore(ch2): finalize Section 2.4 after educational review"

## Summary

This data model defines five entity types (Chapter, Section, Subtopic, KeyTakeaways, Example) with clear attributes, relationships, and validation rules. The structure supports the goal of creating age-appropriate, politically neutral, hope-focused terrorism prevention education through Docusaurus. Each section follows a consistent template with measurable quality gates, ensuring all content meets academic standards and reading level requirements.

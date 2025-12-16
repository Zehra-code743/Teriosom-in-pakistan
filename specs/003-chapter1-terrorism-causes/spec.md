# Feature Specification: Chapter 1 - Understanding the Root Causes of Terrorism in Pakistan

**Feature Branch**: `003-chapter1-terrorism-causes`
**Created**: 2025-12-16
**Status**: Draft
**Input**: User description: "Educational content for Chapter 1 covering understanding terrorism, political problems, poverty/unemployment, education/awareness, and extremist group influence in Pakistan"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Student Learns Core Terrorism Definition (Priority: P1)

A student reading the educational book needs to understand what terrorism means, how it creates fear beyond physical violence, and why it's particularly significant in Pakistan's context.

**Why this priority**: Foundation for all subsequent learning - students must grasp the basic definition before understanding causes and solutions.

**Independent Test**: Can be fully tested by asking students to define terrorism in their own words, provide examples, and explain its psychological impact beyond physical violence.

**Acceptance Scenarios**:

1. **Given** a student with no prior knowledge, **When** they read Section 1, **Then** they can explain terrorism as violence/threats/fear used for political/religious/personal goals
2. **Given** the student has read the definition, **When** asked about terrorism's purpose, **Then** they can articulate that it creates fear to control people and achieve goals
3. **Given** the student reads the Pakistan context, **When** asked about local impact, **Then** they can state that terrorism has affected thousands of people in Pakistan

---

### User Story 2 - Student Understands Political Factors (Priority: P2)

A student needs to understand how political instability and corruption create conditions that enable terrorist groups to operate and recruit members in Pakistan.

**Why this priority**: Political factors are primary root causes that establish the environment for terrorism to flourish.

**Independent Test**: Student can identify political problems in a scenario and explain how they create opportunities for terrorist groups.

**Acceptance Scenarios**:

1. **Given** the student reads about political instability, **When** asked about government changes, **Then** they can explain how weak leadership causes citizens to lose trust
2. **Given** information about corruption, **When** presented with an example of unfair elections, **Then** they can explain how this frustration leads some groups to use violence
3. **Given** the political context, **When** asked about government control, **Then** they can describe why political problems make it easier for terrorist groups to operate

---

### User Story 3 - Student Grasps Economic Root Causes (Priority: P2)

A student learns how poverty and unemployment create vulnerability that terrorist groups exploit for recruitment purposes.

**Why this priority**: Economic factors directly explain recruitment mechanisms and are concrete, relatable causes students can understand.

**Independent Test**: Student can explain the connection between economic hardship and terrorist recruitment through real-world examples.

**Acceptance Scenarios**:

1. **Given** reading about poverty, **When** asked about basic needs, **Then** student can explain how lack of food/clothing/shelter makes families vulnerable
2. **Given** unemployment information, **When** presented with a jobless youth scenario, **Then** student can explain why they might be recruited by extremist groups
3. **Given** the recruitment connection, **When** asked about terrorist tactics, **Then** student can describe how groups offer money and purpose to vulnerable people

---

### User Story 4 - Student Recognizes Education and Information Gaps (Priority: P3)

A student understands how lack of education and misinformation contribute to terrorism by making people susceptible to manipulation and extremist propaganda.

**Why this priority**: Important but builds on understanding of the previous causes; provides pathway to solutions discussed in Chapter 2.

**Independent Test**: Student can identify misinformation and explain how education prevents radicalization.

**Acceptance Scenarios**:

1. **Given** reading about education gaps, **When** asked about consequences, **Then** student can explain how lack of education leads people to misunderstand religion and politics
2. **Given** information about propaganda, **When** shown examples of misinformation, **Then** student can identify fake news or manipulative messaging
3. **Given** solution awareness, **When** asked about prevention, **Then** student can describe how education campaigns teach peace, tolerance, and critical thinking

---

### User Story 5 - Student Identifies Extremist Group Tactics (Priority: P3)

A student learns to recognize how extremist groups manipulate, intimidate, and recruit people, especially youth, to serve their goals of power and control.

**Why this priority**: Critical awareness for self-protection but requires understanding of previous causes to fully grasp context.

**Independent Test**: Student can identify manipulation tactics and explain the true goals of extremist groups versus their stated aims.

**Acceptance Scenarios**:

1. **Given** reading about brainwashing, **When** asked about extremist methods, **Then** student can describe how groups manipulate people to believe harmful ideologies
2. **Given** fear tactics information, **When** presented with examples of threats, **Then** student can explain how fear is used for control
3. **Given** recruitment patterns, **When** asked about vulnerable populations, **Then** student can identify that children and young adults are targeted in schools, mosques, and communities

---

### Edge Cases

- What happens when a student has pre-existing biases or misconceptions about terrorism (e.g., associating it solely with religion)?
- How does the content address students from communities directly affected by terrorism who may have trauma or strong emotional reactions?
- What if students encounter contradictory information from social media or family members that conflicts with the educational content?
- How does the content handle sensitive political discussions in a classroom environment where students may have different political backgrounds?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Content MUST provide a clear, age-appropriate definition of terrorism that includes violence, threats, and psychological fear components
- **FR-002**: Content MUST explain terrorism's goals (political, religious, personal) without promoting any ideology
- **FR-003**: Content MUST include concrete, relatable examples for each cause (political, economic, educational, extremist influence)
- **FR-004**: Content MUST maintain academic neutrality and avoid inflammatory or emotionally charged language
- **FR-005**: Content MUST contextualize terrorism within Pakistan's specific situation while acknowledging it as a global issue
- **FR-006**: Content MUST explain political instability and corruption as contributing factors with specific examples
- **FR-007**: Content MUST describe the connection between poverty/unemployment and terrorist recruitment clearly
- **FR-008**: Content MUST address education gaps and misinformation as vulnerability factors
- **FR-009**: Content MUST explain extremist group manipulation tactics (brainwashing, fear, recruitment) factually
- **FR-010**: Content MUST include a chapter summary that synthesizes all five sections into key takeaways
- **FR-011**: Content MUST be structured in progressive complexity, building from basic definitions to complex social factors
- **FR-012**: Content MUST avoid providing tactical information that could be misused (e.g., specific attack methods)
- **FR-013**: Content MUST emphasize that terrorism is harmful and wrong while maintaining educational objectivity
- **FR-014**: Content MUST be appropriate for students (assumed middle school to high school age range based on complexity)

### Key Entities *(include if feature involves data)*

- **Terrorism Definition**: Core concept encompassing violence, threats, fear, and goals (political/religious/personal); includes examples and psychological impact
- **Political Factors**: Government instability, corruption, weak law enforcement, unfair elections; relationship to enabling terrorist operations
- **Economic Factors**: Poverty (lack of basic needs), unemployment (especially youth), vulnerability to exploitation; connection to recruitment mechanisms
- **Education Factors**: Lack of formal education, misinformation/propaganda, social media influence; relationship to susceptibility to extremist ideology
- **Extremist Groups**: Organizations using brainwashing, fear tactics, and recruitment (especially of youth); goals of power and control versus stated aims
- **Student Learner**: Target audience with varying backgrounds, prior knowledge, and potential biases; age range approximately 12-18 years

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% of students can accurately define terrorism in their own words after reading Section 1, including at least two of three components (violence/threats, fear, and goals)
- **SC-002**: 85% of students can identify at least three of the four root causes (political, economic, educational, extremist influence) when presented with scenarios
- **SC-003**: Students can explain the connection between poverty and terrorist recruitment with 80% accuracy in assessment questions
- **SC-004**: 75% of students can distinguish between factual information and propaganda/misinformation after completing the education awareness section
- **SC-005**: Students demonstrate increased awareness of manipulation tactics, with 70% able to identify at least two extremist group tactics
- **SC-006**: Chapter content maintains age-appropriate language verified by educator review (target reading level: grades 7-10)
- **SC-007**: Content receives approval from subject matter experts for academic neutrality and factual accuracy
- **SC-008**: Student comprehension improves by 40% on terrorism awareness topics compared to baseline pre-chapter assessment
- **SC-009**: 80% of students can articulate that terrorism is harmful without being able to describe tactical operational details
- **SC-010**: Content sensitivity review confirms appropriateness for diverse student backgrounds with minimal risk of trauma triggers

### Additional Context

- **Target Audience**: Students in middle school through high school (approximately ages 12-18), potentially in Pakistan or studying South Asian geopolitics
- **Educational Setting**: Formal classroom environment with educator facilitation; may also be used for self-study
- **Prerequisite Knowledge**: Basic understanding of government, economics, and social structures; no prior terrorism studies required
- **Learning Objectives**: Students will understand root causes of terrorism in Pakistan's context, recognize vulnerability factors, and develop critical thinking about extremism
- **Ethical Constraints**: Must not glorify violence, provide tactical information, or promote any extremist ideology; must maintain academic objectivity while clearly stating terrorism is harmful

## Assumptions

1. **Reading Level**: Content assumes approximately 7th-10th grade reading comprehension level
2. **Educator Facilitation**: Assumes a trained educator will present and discuss this material, providing context and managing sensitive discussions
3. **Complementary Content**: Assumes this chapter is part of a larger educational resource that includes prevention/solution content (referenced as Chapter 2)
4. **Cultural Context**: Assumes readers have basic familiarity with Pakistan or will receive geographic/cultural context from educators
5. **Learning Environment**: Assumes a safe, supportive classroom where students can discuss sensitive topics without fear
6. **Assessment Methods**: Assumes standard educational assessment tools (quizzes, discussions, written responses) will be used to measure comprehension
7. **Content Review**: Assumes educational content will undergo review by subject matter experts and educators before publication
8. **Accessibility**: Assumes content will be available in appropriate languages (at minimum, English and Urdu for Pakistan context)

## Dependencies

- Chapter 2 content (prevention and solutions) for complete educational narrative
- Educator training materials for sensitive topic facilitation
- Age-appropriate examples and case studies reviewed for cultural sensitivity
- Academic review and fact-checking for terrorism studies content
- Legal/ethical review to ensure educational purpose is clear and content cannot be misused

## Scope

### In Scope
- Chapter 1 educational content covering five sections: definition, political causes, economic causes, education gaps, and extremist tactics
- Examples and explanations appropriate for middle/high school students
- Chapter summary synthesizing key causes of terrorism in Pakistan
- Age-appropriate language and academic neutrality

### Out of Scope
- Chapter 2 (prevention and solutions) - separate feature
- Detailed historical timeline of specific terrorist events in Pakistan
- Graphic descriptions of terrorist attacks or violence
- Tactical or operational information about how terrorism is conducted
- Political advocacy or policy recommendations (reserved for later chapters)
- Psychological counseling for trauma - educators should refer students to appropriate resources
- Interactive elements, videos, or multimedia content (specification focuses on written content)

---
id: 001
title: Create Chapter 1 Terrorism Causes Spec
stage: spec
date: 2025-12-16
surface: agent
model: claude-sonnet-4-5-20250929
feature: 003-chapter1-terrorism-causes
branch: 003-chapter1-terrorism-causes
user: pc
command: /sp.specify
labels: ["education", "terrorism", "pakistan", "chapter1", "specification"]
links:
  spec: specs/003-chapter1-terrorism-causes/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/003-chapter1-terrorism-causes/spec.md
  - specs/003-chapter1-terrorism-causes/checklists/requirements.md
tests:
  - Spec validation checklist (15/15 items passed)
---

## Prompt

Section 1: Understanding Terrorism

Definition: Terrorism is the use of violence, threats, and fear by individuals or groups to achieve political, religious, or personal goals.

Explanation: Terrorism is not only about fighting or bombing; it is also about creating fear in people's minds so they follow someone's orders or support their cause.

Example: When a group threatens innocent people to take control over land or resources, it is considered terrorism.

Important Point: Terrorism is a problem in many countries, but in Pakistan it has affected the lives of thousands of people.

Section 2: Political Problems

Political instability: When the government changes often, or there is weak leadership, people lose trust in the system.

Corruption: Government officials and law enforcement sometimes take bribes or fail to enforce rules. This creates frustration among citizens.

Example: If people feel elections are unfair or decisions favor only certain groups, extremist groups may use violence to push their agendas.

Impact: Political problems make it easier for terrorist groups to operate, as the government cannot control them effectively.

Section 3: Poverty and Unemployment

Poverty: Poor families often lack basic needs like food, clothing, and shelter, which makes them vulnerable to exploitation.

Unemployment: Many young people cannot find jobs, which creates frustration and hopelessness.

Connection to terrorism: Extremist groups exploit these people by offering money, shelter, or a sense of purpose.

Example: A young person leaving school because the family cannot afford education may join an extremist group for financial support.

Impact: Poverty and unemployment provide terrorist groups a way to recruit more people.

Section 4: Education and Awareness

Lack of education: People who don't receive proper education may follow wrong ideas or misunderstand religion and politics.

Misinformation: Fake news or propaganda on social media can misguide people.

Solution: Schools, TV, and social media must run awareness campaigns to educate students and citizens that terrorism is wrong and harmful.

Example: Teaching students about peace, tolerance, and the dangers of extremist thinking can prevent them from being influenced by terrorist propaganda.

Section 5: Influence of Extremist Groups

Brainwashing: Some extremist groups manipulate people to believe in their ideology, even if it is harmful.

Fear tactics: They create fear through threats, public attacks, or propaganda.

Goal: Their main aim is power and control, not the welfare of society.

Example: Extremist groups may recruit children or young adults from schools, mosques, or communities to serve their purpose.

Impact: People become scared, society becomes divided, and terrorism spreads faster.

Summary of Chapter 1:

Terrorism in Pakistan is increasing due to:

Political problems: Corruption and instability

Poverty and unemployment: People join extremist groups for money and protection

Lack of education and awareness: People follow wrong ideas

Influence of extremist groups

## Response snapshot

Created comprehensive specification for Chapter 1 educational content on understanding terrorism causes in Pakistan. The specification includes:

1. **Feature Setup**: Created branch `003-chapter1-terrorism-causes` and initialized spec directory structure

2. **User Stories (5 total, prioritized)**:
   - P1: Student learns core terrorism definition
   - P2: Student understands political factors
   - P2: Student grasps economic root causes
   - P3: Student recognizes education/information gaps
   - P3: Student identifies extremist group tactics

3. **Requirements**:
   - 14 functional requirements covering content accuracy, neutrality, age-appropriateness, and educational objectives
   - 6 key entities (terrorism definition, political factors, economic factors, education factors, extremist groups, student learner)
   - 4 edge cases addressing biases, trauma, misinformation, and political sensitivity

4. **Success Criteria**: 10 measurable outcomes including:
   - 90% student comprehension of terrorism definition
   - 85% identification of root causes
   - 80% understanding of poverty-recruitment connection
   - 75% ability to distinguish facts from propaganda
   - Age-appropriate language (grades 7-10) verified by educators
   - 40% improvement in terrorism awareness vs baseline

5. **Additional Sections**: Comprehensive assumptions (8), dependencies (5), and clear scope boundaries

6. **Quality Validation**: Created requirements checklist with 15 validation items - all passed

## Outcome

- ✅ Impact: Complete, validated specification for Chapter 1 educational content ready for planning phase
- 🧪 Tests: Spec quality checklist validation (15/15 items passed); no [NEEDS CLARIFICATION] markers required
- 📁 Files: Created spec.md (183 lines) and checklists/requirements.md
- 🔁 Next prompts: `/sp.plan` to design content structure and educational approach; `/sp.clarify` if additional stakeholder questions arise
- 🧠 Reflection: Successfully adapted software spec template for educational content context; maintained focus on learning outcomes and student comprehension metrics rather than technical implementation

## Evaluation notes (flywheel)

- Failure modes observed: None - spec generation completed without clarifications needed
- Graders run and results (PASS/FAIL): Spec quality checklist PASS (15/15 criteria)
- Prompt variant (if applicable): N/A - initial specification
- Next experiment (smallest change to try): Consider creating a separate template specifically for educational content specifications to streamline future book chapter specs

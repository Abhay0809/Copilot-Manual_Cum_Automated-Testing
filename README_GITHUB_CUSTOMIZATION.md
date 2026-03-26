# GitHub Copilot Customization Guide for This Project

This guide explains how to use your repository-level .github customizations effectively for the project:
QA-AutomationExercise-ManualTesting

Target site:
https://automationexercise.com/

## What You Have in This Repository

Your repository has three customization layers under .github:

1. Instructions
   Location: .github/instructions/
   Purpose: Always-on or file-scoped rules that shape how responses and code are generated.

2. Skills
   Location: .github/skills/
   Purpose: Task-focused playbooks loaded when the request matches the skill description.

3. Agents
   Location: .github/agents/
   Purpose: Specialized subagents for focused jobs like planning, test generation, healing flaky tests, and documentation.

## Quick Mental Model

Use Instructions for policy and standards.
Use Skills for workflows and templates.
Use Agents for specialized execution.

Short version:

- Instructions decide how to work.
- Skills decide how to solve a class of tasks.
- Agents decide who should perform the task.

## Current Instructions and How to Use Them

### Accessibility Instruction

File: [.github/instructions/a11y.instructions.md](../.github/instructions/a11y.instructions.md)
When it matters:

- UI checks
- form validations
- keyboard behavior
- readability and inclusive language

How to apply in this project:

- During manual UI validation for Signup, Login, Contact Us, and Checkout forms.
- While writing defects related to focus order, missing labels, or unclear error messages.

### Playwright TypeScript Instruction

File: [.github/instructions/playwright-typescript.instructions.md](../.github/instructions/playwright-typescript.instructions.md)
When it matters:

- converting manual scenarios into automated Playwright tests
- enforcing POM and role-based locators

How to apply in this project:

- Use after manual scenarios stabilize in 04_Test_Scenarios.
- Use for regression automation candidates in Login, Cart, and Checkout.

### Selenium Java Instruction

File: [.github/instructions/selenium-webdriver-java.instructions.md](../.github/instructions/selenium-webdriver-java.instructions.md)
When it matters:

- Java Selenium framework creation or maintenance

How to apply in this project:

- Optional future path if you create Java UI automation for portfolio expansion.

### Agent Authoring Instructions

Files:

- [.github/instructions/agents.instructions.md](../.github/instructions/agents.instructions.md)
- [.github/instructions/agent-skills.instructions.md](../.github/instructions/agent-skills.instructions.md)

When they matter:

- creating new .agent.md files
- creating or improving SKILL.md content

How to apply in this project:

- If you want a custom agent for manual defect triage or RTM updates.

## Current Skills and Best Usage for This Project

### Highest Value for Your Manual Testing Portfolio

1. qa-manual-istqb
   Path: [.github/skills/qa-manual-istqb/SKILL.md](../.github/skills/qa-manual-istqb/SKILL.md)
   Use for:

- test plan improvements
- scenario quality upgrades
- stronger bug reports
- risk-based prioritization and traceability

2. qa-test-planner
   Path: [.github/skills/qa-test-planner/SKILL.md](../.github/skills/qa-test-planner/SKILL.md)
   Use for:

- fast generation of structured test artifacts
- reusable planning templates
- converting module scope into actionable checklists

### Useful for Automation Expansion

3. playwright-e2e-testing
   Path: [.github/skills/playwright-e2e-testing/SKILL.md](../.github/skills/playwright-e2e-testing/SKILL.md)
   Use for:

- end-to-end automation when manual suite is stable

4. playwright-regression-testing
   Path: [.github/skills/playwright-regression-testing/SKILL.md](../.github/skills/playwright-regression-testing/SKILL.md)
   Use for:

- release-focused regression test strategy and suite optimization

5. webapp-playwright-testing
   Path: [.github/skills/webapp-playwright-testing/SKILL.md](../.github/skills/webapp-playwright-testing/SKILL.md)
   Use for:

- live browser interaction and UI checks

6. a11y-playwright-testing
   Path: [.github/skills/a11y-playwright-testing/SKILL.md](../.github/skills/a11y-playwright-testing/SKILL.md)
   Use for:

- automated accessibility checks and keyboard-flow validation

### Java Automation Track Skills

7. webapp-selenium-testing
   Path: [.github/skills/webapp-selenium-testing/SKILL.md](../.github/skills/webapp-selenium-testing/SKILL.md)

8. accessibility-selenium-testing
   Path: [.github/skills/accessibility-selenium-testing/SKILL.md](../.github/skills/accessibility-selenium-testing/SKILL.md)

Use these only if your portfolio branch moves to Java Selenium.

## Current Agents and When to Use Them

### Most Relevant Now

1. docs-agent
   Path: [.github/agents/docs-agent.agent.md](../.github/agents/docs-agent.agent.md)
   Use for:

- keeping project docs and test guides clear and consistent

2. Implementation Plan Generation Mode
   Path: [.github/agents/implementation-plan.agent.md](../.github/agents/implementation-plan.agent.md)
   Use for:

- creating deterministic rollout plans before large updates

3. principal-software-engineer
   Path: [.github/agents/principal-software-engineer.agent.md](../.github/agents/principal-software-engineer.agent.md)
   Use for:

- architecture-level advice for scaling this project into hybrid manual + automation QA

### Playwright Execution Specialists

4. playwright-test-planner
   Path: [.github/agents/playwright-test-planner.agent.md](../.github/agents/playwright-test-planner.agent.md)

5. playwright-test-generator
   Path: [.github/agents/playwright-test-generator.agent.md](../.github/agents/playwright-test-generator.agent.md)

6. playwright-test-healer
   Path: [.github/agents/playwright-test-healer.agent.md](../.github/agents/playwright-test-healer.agent.md)

7. Flaky Test Hunter
   Path: [.github/agents/flaky-test-hunter.agent.md](../.github/agents/flaky-test-hunter.agent.md)

Use when you transition manual scenarios into stable automated suites.

### Other Specialists

8. API Tester Specialist
   Path: [.github/agents/api-tester-specialist.agent.md](../.github/agents/api-tester-specialist.agent.md)

9. Selenium Test Specialist
   Path: [.github/agents/selenium-test-specialist.agent.md](../.github/agents/selenium-test-specialist.agent.md)

10. Selenium Test Executor
    Path: [.github/agents/selenium-test-executor.agent.md](../.github/agents/selenium-test-executor.agent.md)

11. Test Refactor Specialist
    Path: [.github/agents/test-refactor-specialist.agent.md](../.github/agents/test-refactor-specialist.agent.md)

12. The Architect
    Path: [.github/agents/architect.agent.md](../.github/agents/architect.agent.md)

## Live Usage Examples for Your Current Project

## Example A: Improve Signup Test Quality (Manual)

Goal:
Strengthen manual coverage in Signup and reduce defect leakage.

Recommended flow:

1. Use skill: qa-manual-istqb
2. Open artifacts:

- [04_Test_Scenarios/signup_scenarios.md](04_Test_Scenarios/signup_scenarios.md)
- [05_Test_Cases/sample_test_cases.md](05_Test_Cases/sample_test_cases.md)
- [07_Bug_Report/bug_template.md](07_Bug_Report/bug_template.md)

3. Ask Copilot:
   Improve signup scenarios using boundary value analysis and equivalence partitioning. Add high-risk negative cases and map them to test case IDs.
4. Update RTM:

- [08_Traceability/rtm_template.md](08_Traceability/rtm_template.md)

Expected result:

- Better negative coverage
- Traceable cases tied to risk

## Example B: Prepare Release Regression Checklist

Goal:
Create a practical release checklist quickly.

Recommended flow:

1. Use skill: qa-test-planner
2. Use prompt template:

- [09_Copilot_Prompts/regression_prompt.md](09_Copilot_Prompts/regression_prompt.md)

3. Ask Copilot:
   Generate a release regression checklist for build RC-1 focused on Login, Cart, and Checkout with execution order and priority tags.
4. Execute and log defects with:

- [07_Bug_Report/bug_template.md](07_Bug_Report/bug_template.md)

Expected result:

- Time-boxed regression pack
- Clear go or no-go signal

## Example C: Move One Manual Flow to Playwright

Goal:
Convert a stable manual flow into automation.

Recommended flow:

1. Use skill: playwright-e2e-testing
2. Use agent: playwright-test-generator
3. Source files:

- [04_Test_Scenarios/login_scenarios.md](04_Test_Scenarios/login_scenarios.md)
- [05_Test_Cases/sample_test_cases.md](05_Test_Cases/sample_test_cases.md)

4. Add flaky stabilization with agent: playwright-test-healer if needed

Expected result:

- Automated smoke scenario from a manual baseline

## Recommended Operating Sequence

For manual-first cycles:

1. Instructions apply automatically.
2. Invoke qa-manual-istqb or qa-test-planner.
3. Update test artifacts in 03 to 09 folders.
4. Use docs-agent for polishing final documentation.

For automation expansion:

1. Keep manual baseline updated.
2. Use Playwright instructions plus playwright-e2e-testing skill.
3. Generate tests with playwright-test-generator.
4. Heal flaky tests with playwright-test-healer or Flaky Test Hunter.

## Common Mistakes to Avoid

1. Using automation agents before manual scenarios are stable.
2. Skipping RTM updates after defect discovery.
3. Running regression without risk prioritization.
4. Mixing Java Selenium and Playwright standards in the same test design without a clear strategy.
5. Treating instructions as optional. They define quality and consistency.

## Practical Prompt Starters

Use these in Copilot Chat:

1. Use qa-manual-istqb to review my checkout scenarios and identify missing boundary and negative tests.
2. Use qa-test-planner to generate a cycle test plan for Signup, Login, Cart, and Checkout.
3. Use docs-agent to rewrite my bug report examples into a recruiter-ready portfolio format.
4. Use playwright-test-planner to convert my regression checklist into automation candidates.
5. Use playwright-test-healer to fix flaky tests in checkout flow and explain root causes.

## Final Guidance

For your current portfolio project, prioritize this stack first:

- Instruction layer for standards
- qa-manual-istqb and qa-test-planner for daily execution
- docs-agent for documentation polish

Then add automation-focused skills and agents gradually when manual artifacts become stable and traceable.

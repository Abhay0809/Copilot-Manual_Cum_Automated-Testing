# QA-AutomationExercise-ManualTesting

Portfolio-ready manual QA project for practicing real-world e-commerce testing on:
https://automationexercise.com/

## Why This Project Exists

This repository is structured to help you execute manual testing like a Senior QA Engineer:

- Start with product understanding
- Design risk-driven tests
- Execute with reusable data
- Track defects and traceability
- Reuse AI prompts for faster, consistent test design

## Project Structure and How to Use It

### 1) Understand the Product First

- Read: `01_Project_Understanding/website_overview.md`
- Read: `01_Project_Understanding/modules_list.md`

Use these files to define functional boundaries before writing tests.

### 2) Apply QA Skill Guides

- Read: `02_QA_Skills/ecommerce_testing_skill.md`
- Read: `02_QA_Skills/ui_validation_skill.md`
- Read: `02_QA_Skills/risk_based_testing.md`

Use them as execution rules:

- Ecommerce skill: Validate cart behavior, pricing integrity, and transaction flow.
- UI skill: Validate alignment, messages, responsiveness, and button states.
- Risk skill: Prioritize auth, cart, and checkout before lower-risk modules.

### 3) Lock Execution Direction with Test Plan

- Read and tailor: `03_Test_Plan/test_plan.md`

Before each cycle, confirm:

1. Scope and objective
2. Entry criteria
3. Priority modules
4. Exit criteria

### 4) Execute Scenario-First Testing

- Use scenario packs in `04_Test_Scenarios/`

Suggested order for live runs:

1. `signup_scenarios.md`
2. `login_scenarios.md`
3. `product_scenarios.md`
4. `cart_scenarios.md`
5. `checkout_scenarios.md`

Why this order:
It mirrors real user flow and catches integration issues early.

### 5) Convert Scenarios into Test Cases

- Start from examples: `05_Test_Cases/sample_test_cases.md`

For each scenario you execute:

1. Create or reuse a test case ID.
2. Record preconditions and test data.
3. Mark pass/fail with evidence notes.

### 6) Use Controlled Test Data

- Source: `06_Test_Data/sample_users.csv`

Best practice:

- Use dedicated users per test cycle.
- Reserve one user for negative auth tests.
- Do not mix data between unrelated test objectives.

### 7) Report Bugs in a Standard Way

- Template: `07_Bug_Report/bug_template.md`

Always include:

1. Clear reproduction steps
2. Actual vs expected result
3. Severity and priority rationale
4. Evidence (screenshots/logs)

### 8) Maintain Coverage with RTM

- Template: `08_Traceability/rtm_template.md`

Update RTM after each execution batch:

- Link requirement -> scenario -> test case -> defect
- Keep test status current
- Use RTM to identify coverage gaps fast

### 9) Speed Up Authoring with Copilot Prompts

- `09_Copilot_Prompts/manual_test_prompt_template.md`
- `09_Copilot_Prompts/edge_case_prompt.md`
- `09_Copilot_Prompts/regression_prompt.md`

Use these prompts to:

- Generate new cases for changed modules
- Produce edge-case packs quickly
- Build focused regression checklists by release

## Live Case Examples

## Live Case 1: Login Failure Spike After Release

Situation:
Multiple users report login failures with valid credentials.

How to use this project:

1. Open `02_QA_Skills/risk_based_testing.md` and mark Login as critical priority.
2. Execute high-impact checks from `04_Test_Scenarios/login_scenarios.md`.
3. Use accounts from `06_Test_Data/sample_users.csv` for reproducible tests.
4. Log each issue using `07_Bug_Report/bug_template.md`.
5. Update requirement mapping in `08_Traceability/rtm_template.md`.

Expected outputs:

- Reproducible bug report set
- Confirmed affected/working credential patterns
- Updated RTM visibility for impacted requirements

## Live Case 2: Cart Total Mismatch in Production-like Build

Situation:
Order totals appear incorrect when quantity is edited.

How to use this project:

1. Apply pricing and cart rules in `02_QA_Skills/ecommerce_testing_skill.md`.
2. Run `04_Test_Scenarios/cart_scenarios.md` focused on quantity/line total/grand total.
3. Expand detailed execution with cases from `05_Test_Cases/sample_test_cases.md`.
4. File defect with formula evidence in `07_Bug_Report/bug_template.md`.
5. Trace affected requirement in `08_Traceability/rtm_template.md`.

Expected outputs:

- Arithmetic validation evidence
- Defect with business impact clarity
- Traceability of broken requirement

## Live Case 3: Release Readiness Regression

Situation:
A new build is ready and needs quick confidence.

How to use this project:

1. Start with release checklist prompt in `09_Copilot_Prompts/regression_prompt.md`.
2. Generate test list and align with module scenarios under `04_Test_Scenarios/`.
3. Execute smoke first, then critical functional checks (signup/login/cart/checkout).
4. Capture failures in `07_Bug_Report/bug_template.md`.
5. Mark final status in `08_Traceability/rtm_template.md`.

Expected outputs:

- Time-boxed regression evidence
- Clear go/no-go recommendation
- Requirement-level confidence report

## Recommended Daily QA Workflow (60-90 Minutes)

1. 10 min: Review risk and choose module focus.
2. 30-50 min: Execute scenario/test case set.
3. 10-15 min: Raise bugs with evidence.
4. 10-15 min: Update RTM and summarize status.

## Quality Standards for Portfolio Use

- Keep naming consistent (TC IDs, Scenario IDs, Req IDs).
- Do not write vague defect titles.
- Always include at least one negative case per module.
- Prioritize business-critical paths first.
- Maintain traceability from requirement to defect.

## How to Extend This Repository

You can add:

- `10_Test_Execution_Reports/` for cycle reports
- Browser-specific checklists
- Accessibility-focused scenarios
- API contract checks (if backend is introduced)

## Quick Start Checklist

1. Read project understanding docs.
2. Select target module and risk level.
3. Execute scenario file for that module.
4. Record results in structured test cases.
5. Raise defects with evidence.
6. Update RTM for coverage.
7. Use Copilot prompts for next cycle expansion.

This README is designed to be followed during real execution, not just documentation review. If you apply this sequence consistently, your outputs will look like production QA artifacts and strengthen your portfolio quality.

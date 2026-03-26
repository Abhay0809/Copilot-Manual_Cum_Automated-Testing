# Manual Test Prompt Template

Use this reusable prompt to generate manual test cases quickly.

## Template

You are a Senior QA Engineer.
Generate detailed manual test cases for module: <MODULE_NAME> on https://automationexercise.com/.

Include:

1. Positive, negative, and boundary test cases
2. Preconditions and test data
3. Step-by-step execution steps
4. Expected results
5. Priority and severity suggestion for failures

Output format:

- Table with columns: TC ID, Title, Preconditions, Steps, Test Data, Expected Result, Priority
- Minimum <N> test cases

Constraints:

- Keep cases realistic for e-commerce domain
- Include at least 2 validation-related cases
- Include at least 1 cross-module integration case

# Edge Case Generation Prompt

## Template Prompt

Act as an expert QA analyst.
For https://automationexercise.com/, generate edge case test ideas for module: <MODULE_NAME>.

Focus on:

1. Input boundary values
2. Empty/null/whitespace inputs
3. Special characters and long strings
4. Rapid repeated actions (double click/refresh/back)
5. Session and state edge cases
6. Cart/price precision and rounding edge cases (if applicable)
7. Mobile viewport-specific edge behaviors

Output required:

- At least 20 edge cases
- For each edge case include: ID, condition, risk, expected behavior
- Highlight top 5 highest-risk edge cases

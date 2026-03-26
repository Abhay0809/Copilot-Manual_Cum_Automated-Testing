# Regression Checklist Prompt

## Template Prompt

You are a QA Lead preparing a regression suite for https://automationexercise.com/.
Create a regression checklist for release candidate: <BUILD_TAG>.

Scope modules:

- Signup
- Login
- Product Listing
- Product Details
- Search
- Cart
- Checkout
- Contact Us
- Newsletter Subscription

Output sections:

1. Smoke regression checklist (must pass)
2. Functional regression checklist (detailed)
3. High-risk regression focus (authentication/cart/checkout)
4. Suggested execution order by priority
5. Pass/fail recording format

Constraints:

- Keep list actionable for manual execution
- Mark each item with Priority (High/Medium/Low)
- Include at least 3 end-to-end user journey checks

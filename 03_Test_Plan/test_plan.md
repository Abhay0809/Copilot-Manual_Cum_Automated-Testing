# Test Plan - Automation Exercise (Manual Testing)

## 1. Objective

Validate critical e-commerce workflows on automationexercise.com to ensure functional correctness, data integrity, usability, and business flow continuity.

## 2. Scope

### In Scope

- Signup
- Login
- Product Listing
- Product Details
- Search
- Cart
- Checkout
- Contact Us
- Newsletter Subscription

### Out of Scope

- Backend/API validation at code level
- Performance benchmarking under production-scale load
- Security penetration testing

## 3. Test Approach

- Requirement-based and risk-based test design.
- Cover positive, negative, and boundary scenarios.
- Prioritize high-risk modules: Authentication, Cart, Checkout.
- Perform exploratory testing for UI and usability issues.

## 4. Test Types

- Smoke Testing
- Functional Testing
- UI/UX Validation
- Integration Testing (module flow)
- Regression Testing
- Negative Testing

## 5. Test Environment

- URL: https://automationexercise.com/
- Browsers: Chrome, Edge, Firefox (latest stable)
- Devices/Viewports: Desktop and mobile responsive checkpoints

## 6. Test Data Strategy

- Use controlled sample users with valid and invalid credentials.
- Include data variation for form validations (empty, invalid format, max length).
- Reuse product/cart combinations for calculation tests.

## 7. Entry Criteria

- Website accessible.
- Test users and baseline data prepared.
- Modules available and stable for execution.

## 8. Exit Criteria

- 100% of high-priority test cases executed.
- No open critical defects in Signup/Login/Cart/Checkout.
- Test summary and defect report completed.

## 9. Deliverables

- Test scenarios and test cases
- Bug reports
- Requirement Traceability Matrix (RTM)
- Test execution summary

## 10. Risks and Mitigation

- Risk: Environment instability.
  - Mitigation: Re-run failed tests after environment confirmation.
- Risk: Incomplete data coverage.
  - Mitigation: Maintain reusable and diverse test data set.
- Risk: Regression leakage in high-risk modules.
  - Mitigation: Maintain focused regression checklist.

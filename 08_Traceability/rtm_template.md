# Requirement Traceability Matrix (RTM) Template

## Purpose

Map requirements to test scenarios, test cases, and defects to ensure complete test coverage.

| Req ID  | Requirement Description                    | Module   | Priority | Scenario ID(s) | Test Case ID(s) | Test Status | Defect ID(s) | Comments                                                  |
| ------- | ------------------------------------------ | -------- | -------- | -------------- | --------------- | ----------- | ------------ | --------------------------------------------------------- |
| REQ-001 | User can create account with valid details | Signup   | High     | SCN-SIGNUP-01  | TC-SIGNUP-001   | Not Run     | -            |                                                           |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-01   | TC-LOGIN-001    | Passed      | -            | High-impact run 2026-03-27 using CSV user U001.           |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-02   | TC-LOGIN-002    | Passed      | -            | Invalid password rejection verified.                      |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-03   | TC-LOGIN-003    | Passed      | -            | Unregistered email rejection verified.                    |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-04   | TC-LOGIN-004    | Passed      | -            | Empty credential validation verified.                     |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-07   | TC-LOGIN-007    | Passed      | -            | Post-login redirect behavior verified.                    |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-09   | TC-LOGIN-009    | Passed      | -            | Logout/session invalidation via back navigation verified. |
| REQ-002 | Registered user can log in                 | Login    | Critical | SCN-LOGIN-11   | TC-LOGIN-011    | Passed      | -            | UI stability confirmed across repeated failed attempts.   |
| REQ-003 | User can search products by keyword        | Search   | Medium   | SCN-PROD-05    | TC-PROD-003     | Not Run     | -            |                                                           |
| REQ-004 | Cart totals are calculated correctly       | Cart     | High     | SCN-CART-04    | TC-CART-004     | Not Run     | -            |                                                           |
| REQ-005 | User can place order from checkout         | Checkout | Critical | SCN-CHK-01     | TC-CHK-005      | Not Run     | -            |                                                           |

## Usage Notes

- Update Test Status after each execution cycle.
- Link any defects found during execution.
- Keep IDs consistent with scenario and test case documents.

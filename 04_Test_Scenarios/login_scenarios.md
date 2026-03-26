# Login Test Scenarios

1. Verify login succeeds with valid registered email and password.
2. Verify login fails with valid email and invalid password.
3. Verify login fails with unregistered email.
4. Verify login validation appears for empty email and password.
5. Verify email field enforces valid format at login.
6. Verify password field masks input characters.
7. Verify user is redirected to expected page after successful login.
8. Verify logged-in username/account indicator is visible in header.
9. Verify logout ends session and prevents access to authenticated pages via browser back.
10. Verify login error message is clear and non-technical.
11. Verify repeated failed login attempts do not crash or hang UI.
12. Verify leading/trailing spaces in credentials are handled as expected.

## Scenario IDs

- SCN-LOGIN-01: Verify login succeeds with valid registered email and password.
- SCN-LOGIN-02: Verify login fails with valid email and invalid password.
- SCN-LOGIN-03: Verify login fails with unregistered email.
- SCN-LOGIN-04: Verify login validation appears for empty email and password.
- SCN-LOGIN-05: Verify email field enforces valid format at login.
- SCN-LOGIN-06: Verify password field masks input characters.
- SCN-LOGIN-07: Verify user is redirected to expected page after successful login.
- SCN-LOGIN-08: Verify logged-in username/account indicator is visible in header.
- SCN-LOGIN-09: Verify logout ends session and prevents access to authenticated pages via browser back.
- SCN-LOGIN-10: Verify login error message is clear and non-technical.
- SCN-LOGIN-11: Verify repeated failed login attempts do not crash or hang UI.
- SCN-LOGIN-12: Verify leading/trailing spaces in credentials are handled as expected.

## High-Impact Execution (2026-03-27)

- Environment: https://automationexercise.com/
- Browser/OS: Chromium (Playwright), Windows
- Test data source: `06_Test_Data/sample_users.csv` (bootstrap used U001)
- Execution artifact: `10_Execution_Logs/login_high_impact_results_2026-03-27.json`

| Scenario ID  | Status | Repro Rate | Notes                                                                    |
| ------------ | ------ | ---------- | ------------------------------------------------------------------------ |
| SCN-LOGIN-01 | Passed | 1/1        | Valid login succeeded with registered CSV user.                          |
| SCN-LOGIN-07 | Passed | 1/1        | Post-login redirect moved user away from login page.                     |
| SCN-LOGIN-09 | Passed | 1/1        | Logout removed auth state; back navigation did not restore session.      |
| SCN-LOGIN-02 | Passed | 1/1        | Invalid password was rejected with expected error.                       |
| SCN-LOGIN-04 | Passed | 1/1        | Empty field validation enforced via required attributes.                 |
| SCN-LOGIN-03 | Passed | 1/1        | Unregistered email was rejected.                                         |
| SCN-LOGIN-11 | Passed | 5/5        | Repeated failed attempts showed stable error feedback and responsive UI. |

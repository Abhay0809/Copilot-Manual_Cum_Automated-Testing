# Sample Manual Test Cases

## Test Case Format

| TC ID | Module | Title | Preconditions | Steps | Test Data | Expected Result | Priority |
| ----- | ------ | ----- | ------------- | ----- | --------- | --------------- | -------- |

## Sample Test Cases

### TC-LOGIN-001

- Module: Login
- Title: Verify successful login with valid credentials
- Preconditions: User account exists and is active
- Steps:
  1. Navigate to Login page
  2. Enter valid email
  3. Enter valid password
  4. Click Login
- Test Data: email=user1.qa@example.com, password=Qa@12345
- Expected Result: User logs in successfully and account indicator is visible
- Priority: High

### TC-SIGNUP-002

- Module: Signup
- Title: Verify signup fails for already registered email
- Preconditions: Email already exists in system
- Steps:
  1. Navigate to Signup page
  2. Enter name and already registered email
  3. Submit signup details
- Test Data: email=existing.qa@example.com
- Expected Result: User receives clear message indicating email already registered
- Priority: High

### TC-PROD-003

- Module: Product Listing/Search
- Title: Verify search returns matching products
- Preconditions: Product catalog is available
- Steps:
  1. Navigate to Products page
  2. Enter keyword in search box
  3. Trigger search
- Test Data: keyword=top
- Expected Result: Result list contains products relevant to keyword
- Priority: Medium

### TC-CART-004

- Module: Cart
- Title: Verify cart total calculation for multiple quantities
- Preconditions: At least one product can be added to cart
- Steps:
  1. Add product A to cart
  2. Set quantity to 3
  3. Observe unit price and line total
  4. Validate grand total
- Test Data: product A unit price displayed on site
- Expected Result: Line total equals unit price x 3; grand total reflects all lines
- Priority: High

### TC-CHK-005

- Module: Checkout
- Title: Verify order placement with valid details
- Preconditions: User logged in; cart contains item(s)
- Steps:
  1. Open cart and proceed to checkout
  2. Verify address and summary
  3. Enter valid payment details (demo)
  4. Place order
- Test Data: valid test card details as accepted by site
- Expected Result: Order success confirmation is displayed
- Priority: Critical

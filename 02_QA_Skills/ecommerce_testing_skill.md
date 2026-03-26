# E-commerce Testing Skill Guide

## Objective

This guide defines key validations for manual testing of e-commerce workflows on automationexercise.com.

## Domain Validations

- Product data integrity:
  - Product name, image, category, and price are visible and consistent between listing and detail pages.
- Inventory behavior:
  - Products can be added to cart when available.
  - Quantity controls work within expected limits.
- Order journey continuity:
  - User can move from discovery to cart to checkout without losing session/cart data.
- User account context:
  - Signed-in user identity and address are correctly reflected at checkout.

## Cart Validation Rules

1. Adding an item increases cart item count.
2. Adding same item multiple times updates quantity or creates expected duplicate entry (as per implemented behavior).
3. Removing an item updates subtotal and total immediately.
4. Quantity update recalculates line total and grand total.
5. Cart persists during navigation within same session.
6. Empty cart state displays user-friendly message and recovery action.
7. Cart should not include negative quantity or invalid values.
8. Cart details must match selected product attributes (name, price, quantity).

## Pricing Validation Rules

1. Unit price in cart matches product price from source page.
2. Line total formula: Unit Price x Quantity.
3. Grand total equals sum of all line totals plus applicable shipping/tax (if displayed).
4. Currency symbol and formatting remain consistent across pages.
5. No hidden or duplicate charges are introduced unexpectedly.
6. Price should remain stable after page refresh unless business rules indicate change.
7. Rounding behavior should be consistent (for decimal values where applicable).

## Negative Testing Focus

- Invalid quantity entries.
- Session timeout during checkout.
- Attempt to proceed with empty cart.
- Broken image/price mismatch between listing and details.

## Exit Criteria for Module Sign-off

- No open critical defects in checkout/cart pricing.
- All high-priority scenarios pass.
- Known issues documented with workaround and impact.

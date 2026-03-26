# UI Validation Skill Checklist

## Purpose

Ensure the interface is accurate, accessible, and responsive for core user journeys.

## UI Checklist

### Layout and Alignment

- Header, footer, and navigation elements are aligned and not overlapping.
- Form labels align with corresponding input fields.
- Product cards are evenly spaced in grid/list view.
- Modal dialogs are centered and not clipped.

### Validation Messages

- Required field validation appears near the relevant input.
- Error text is specific, readable, and actionable.
- Success messages are clearly distinguished from errors.
- Validation is triggered at correct event (on submit and/or blur as expected).

### Responsiveness

- Layout adapts correctly for common viewports: 320px, 768px, 1024px, 1440px.
- No horizontal scroll on standard mobile widths.
- Buttons and input controls are tappable on touch devices.
- Navigation menu behavior is functional on mobile.

### Button States and Interactions

- Default, hover, focus, active, and disabled states are visually distinct.
- Disabled buttons cannot be triggered.
- Loading state prevents duplicate submissions.
- Primary actions are visually emphasized over secondary actions.

### Content and Visual Consistency

- Typography hierarchy is consistent across pages.
- Icons, colors, and spacing follow a uniform pattern.
- Broken images or missing placeholders are not present.
- Currency and price formatting are consistent.

### Accessibility Spot Checks

- Focus indicator is visible during keyboard navigation.
- Form controls have associated labels.
- Interactive controls are reachable and operable via keyboard.

## Common Defect Patterns to Watch

- Misaligned form fields on mobile.
- Ambiguous error text or missing inline validations.
- Hidden CTA buttons due to responsive breakpoints.
- Inconsistent disabled state styling.

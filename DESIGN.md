---
name: Grace Hayab
description: A minimal portfolio for a social media manager.
colors:
  paper: "#ffffff"
  ink: "#0a0a0a"
  quiet-ink: "#666666"
  hairline: "#e5e5e5"
  signal-blue: "#0077b6"
typography:
  display:
    fontFamily: "Recursive Variable, sans-serif"
    fontSize: "clamp(3rem, min(14vw, 12svh), 8rem)"
    fontWeight: 650
    lineHeight: 0.86
    letterSpacing: "-0.075em"
  body:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  utility:
    fontFamily: "Geist Variable, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
rounded:
  square: "0"
  base: "0.125rem"
---

# Design System: Grace Hayab

## Direction

An open, quiet portfolio for a social media manager. The design prioritizes Grace's name, work, and contact details, with restrained type hierarchy, generous whitespace, and no card stacks, shadows, or decorative image geometry.

## Color

- **Paper** (`#ffffff`): Light-theme page surface.
- **Ink** (`#0a0a0a`): Primary text and the brand mark.
- **Quiet Ink** (`#666666`): Supporting text and labels.
- **Hairline** (`#e5e5e5`): Subtle dividers and field boundaries.
- **Signal Blue** (`#0077b6`): The brand mark, links, focus, and occasional action.

The site uses the light palette regardless of device color preference. Keep saturated color limited to the brand signal.

## Typography

- **Display:** Recursive Variable, reserved for the name and section titles.
- **Body and utility:** Geist Variable for readable copy, navigation, and labels.
- Establish hierarchy with size, weight, and spacing rather than extra fonts or decorative treatments.

## Layout

The masthead stays compact. A spacious, left-aligned introduction and the labeled portfolio gallery lead into the existing page sections in their current order. Sections use a shared content width, quiet separators, and open space instead of cards or large surface changes. At mobile widths, content stacks in reading order and navigation remains available.

## Signature

The black open frame with its blue square appears once in the masthead. The blue is an accent, not a large background fill.

## Content and behavior

- Preserve existing section copy and clearly identify unverified placeholders.
- Keep the light-only color scheme and keyboard focus visibility.
- The image carousel pauses on hover or focus and does not animate when reduced motion is requested.

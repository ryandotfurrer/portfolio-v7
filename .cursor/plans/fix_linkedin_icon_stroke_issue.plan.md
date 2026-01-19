# Fix LinkedIn icon stroke vs fill issue

## Problem

`linkedin2.svg` uses `stroke="currentColor"` and `fill="none"` (outline style), while other icons use `fill` attributes (solid style). The `fill-white` class won't work on a stroke-based icon.

## Solution Options

### Option 1: Convert SVG to fill-based (Recommended)

Convert `linkedin2.svg` to use `fill` instead of `stroke` to match other icons.

**Changes to [`src/assets/icons/linkedin2.svg`](src/assets/icons/linkedin2.svg):**

- Remove `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`
- Remove `fill="none"`
- Add `fill="currentColor"` to the `<svg>` element or let it inherit
- Remove Lucide-specific classes if not needed

### Option 2: Use stroke classes (Alternative)

Update the icon usage to use `stroke-white` instead of `fill-white` for LinkedIn only.

**Changes to [`src/pages/links/index.astro`](src/pages/links/index.astro):**

- Add conditional logic to use `stroke-white` for LinkedIn icon
- Keep `fill-white` for other icons

## Recommendation

Option 1 is recommended for consistency. The SVG will work with the existing `fill-white` class and match the visual style of other icons.
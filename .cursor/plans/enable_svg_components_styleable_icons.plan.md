---
name: Enable SVG components and use inline SVGs with styling
overview: Enable Astro's experimental SVG component feature, then import SVGs as components instead of URLs so they can be styled with CSS classes for fill, color, and background.
todos:
  - id: enable-svg-feature
    content: Enable experimental SVG feature in astro.config.mjs
    status: pending
  - id: update-imports
    content: Change SVG imports to component imports
    status: pending
  - id: update-usage
    content: Replace img tags with SVG component syntax and add styling classes
    status: pending
---

# Enable SVG components and use inline SVGs with styling

## Changes

### [`astro.config.mjs`](astro.config.mjs)

1. **Enable experimental SVG component feature**
   - Add `experimental: { svg: true }` to config
   - Allows importing SVGs as components that accept props

### [`src/pages/links/index.astro`](src/pages/links/index.astro)

1. **Update SVG imports**
   - Change imports from default imports to component imports
   - SVGs will be inlined and accept props like `class`, `fill`, etc.

2. **Update LinksCard usage**
   - Replace `<img src={link.icon.src}>` with `<link.icon />` component syntax
   - Add props: `class="size-6 fill-current"` or similar
   - Can now use Tailwind classes like `fill-current`, `text-{color}`, etc.

## Implementation

In `astro.config.mjs`:
```js
export default defineConfig({
  experimental: {
    svg: true,
  },
  // ... rest of config
});
```

In `links/index.astro`:
```astro
---
import XIcon from "@/assets/icons/x.svg";
import BlueskyIcon from "@/assets/icons/bluesky.svg";
// etc. - import as components
---

<XIcon class="size-6 fill-current text-white" />
```

SVG components accept standard SVG attributes and CSS classes, allowing full styling control.

# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this portfolio repository.

## Project Overview

This is a personal portfolio website built with Astro 5.16.6, React 19.2.3, and TailwindCSS 4.1.18. The site integrates with Sanity CMS for content management and deploys to Vercel.

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run Astro CLI commands
pnpm astro <command>
```

## Code Style Guidelines

### Framework & Architecture

- **Primary Framework**: Astro for static site generation
- **Interactive Components**: Use React only when necessary for interactivity
- **Styling**: TailwindCSS with custom CSS variables and dark mode support
- **CMS**: Sanity CMS for content management (separate repository)

### File Organization

```
src/
├── components/     # Reusable Astro components
│   ├── sanity/     # Sanity CMS integration components
│   └── ui/         # Pure UI components
├── layouts/        # Page layout components
├── lib/            # Shared utilities & constants
├── pages/          # File-based routing (Astro pages)
├── sanity/         # Sanity helpers and client setup
├── scripts/        # Client-side JavaScript
├── styles/         # Global styles & Tailwind config
└── utils/          # Pure utility functions
```

### Import Patterns

- Use absolute imports with `@/` alias (configured in tsconfig.json)
- Import organization: third-party → local components → utilities
- Example: `import Layout from "@/layouts/Layout.astro"`

### Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.astro`, `PortableText.astro`)
- **Files**: kebab-case for utilities (`date.ts`, `social-links.ts`)
- **Variables**: camelCase (`formattedDate`, `latestPosts`)
- **Constants**: UPPER_SNAKE_CASE for queries (`LATEST_POSTS_QUERY`)
- **CSS Classes**: Tailwind utility classes with custom CSS variables

### TypeScript & Types

- Use TypeScript interfaces for props and data structures
- Leverage optional chaining and nullish coalescing
- Define types for Sanity CMS responses
- Use generic types where appropriate for reusability

### Astro Component Patterns

- Frontmatter script for data fetching and logic
- HTML template for markup with Tailwind classes
- Use `client:load` or `client:idle` for React components when needed
- Keep components focused and reusable

### Styling Guidelines

- **Primary**: TailwindCSS utility classes
- **Custom**: CSS custom properties for theme variables
- **Dark Mode**: Use `dark:` prefix and CSS media queries
- **Responsive**: Mobile-first approach with responsive prefixes
- **Animations**: Use CSS transitions and transforms for smooth effects

### Error Handling

- Use TypeScript for type safety
- Implement optional chaining for potentially null/undefined values
- Add try-catch blocks for external API calls (Sanity CMS)
- Provide fallback content for missing data

### Performance Guidelines

- Optimize images with Astro's Image component
- Use lazy loading for non-critical content
- Minimize client-side JavaScript
- Leverage Astro's island architecture for interactivity
- Use Vercel Analytics for performance monitoring

### SEO & Accessibility

- Include proper meta tags in layouts
- Use semantic HTML elements
- Add alt text for images
- Implement proper heading hierarchy
- Ensure keyboard navigation support

### CMS Integration (Sanity)

- Use GROQ queries for data fetching
- Store queries as constants in separate files
- Implement PortableText components for rich text
- Handle missing CMS data gracefully
- Use environment variables for API keys

### Testing

- No testing framework currently configured
- Focus on manual testing and visual regression
- Test responsive behavior across devices
- Verify dark mode functionality
- Check CMS integration with sample data

### Git & Deployment

- Use conventional commit messages
- Deploy to Vercel on push to main branch
- Monitor build performance and errors
- Use Vercel Speed Insights for optimization

## Common Patterns

### Component Structure

```astro
---
// Frontmatter: data fetching, imports, logic
import { type CollectionEntry } from "astro:content";
import Layout from "@/layouts/Layout.astro";

const { title, date } = Astro.props;
---

<!-- HTML template with Tailwind classes -->
<Layout title={title}>
  <main class="container mx-auto px-4">
    <h1 class="text-2xl font-bold">{title}</h1>
  </main>
</Layout>
```

### Utility Function Pattern

```typescript
// utils/date.ts
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```

### Sanity Integration Pattern

```typescript
// sanity/client.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  useCdn: true,
});
```

## Environment Variables

Required environment variables (add to `.env`):

- `SANITY_PROJECT_ID`: Sanity project ID
- `SANITY_DATASET`: Sanity dataset name
- `VERCEL_ANALYTICS_ID`: Vercel analytics ID (optional)

## Package Manager

Use **pnpm** as the package manager (based on lockfile and Cursor rules).

## Notes for Agents

- This is a portfolio site focused on performance and visual design
- Maintain consistency with existing design patterns
- Test changes across different screen sizes and dark mode
- Be mindful of bundle size when adding new dependencies
- Follow Astro's best practices for static site generation

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Victor Kang's portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The site showcases frontend development, UI/UX design, and game development projects with a modern glassmorphism design aesthetic. Features a unified projects page, individual project case studies, and a Pinterest-style design gallery.

## Development Commands

```bash
# Development
pnpm dev              # Start dev server at http://localhost:3000

# Build & Production
pnpm build            # Build for production
pnpm start            # Start production server

# Linting
pnpm lint             # Run ESLint
```

## Architecture & Structure

### Next.js App Router Architecture

**Root Layout (`app/layout.tsx`):**
- Global layout wrapper with Navbar and Footer components
- SEO metadata configured for portfolio site
- Geist font family (sans and mono variants)

**Homepage (`app/page.tsx`):**
- Composed of section components in this order:
  1. HeroSection - Hero intro with CTA and tech stack carousel
  2. FeaturedProjects - Shows first 3 projects with "More Projects" button
  3. GallerySection - Pinterest-style masonry gallery of design work

**Projects Page (`app/projects/page.tsx`):**
- Displays all projects (personal + academic combined) in unified grid
- Uses same ProjectCard component as homepage
- 6 total projects sorted by date (newest to oldest)

**Project Detail Routes (`app/projects/[slug]/`):**
Static routes for individual project case study pages with kebab-case slugs:
- `/projects/easy-report` - Flutter/Dart mobile app
- `/projects/idar` - AR interior design app (Final Year Project)
- `/projects/park-perak` - UI/UX redesign
- `/projects/plague-doctor` - Unity 3D game
- `/projects/uwu-shopping-site` - MERN stack e-commerce

### Component Organization

**Section Components (`components/section/`):**
- `HeroSection.jsx` - Landing section with portrait, tagline, CTA button, and InfiniteMovingLogos carousel
- `FeaturedProjects.jsx` - Displays first 3 projects from unified data with "More Projects" link to `/projects`
- `GallerySection.jsx` - Masonry layout gallery for design work (17 images)
- `Navbar.tsx` - Navigation component (TypeScript)
- `Footer.jsx` - Global footer (previously ContactMe.jsx)
- `SectionHeader.jsx` - Reusable section title component

**Project Display Components:**
- `ProjectCard.jsx` - Primary component for displaying projects
  - Shows image, title, date, description, tech stack badges, action buttons
  - Glassmorphism design with hover effects
  - Supports both internal (`internal: true`) and external links
  - Used on homepage (3 items) and /projects page (all items)
- `GalleryItem.jsx` - Gallery image component with hover overlay and alt text display
- `PortfolioItem.jsx` - **DEPRECATED**: Legacy component, no longer used

**UI Components (`components/ui/`):**
- shadcn/ui base components (button, button-link)
- Custom Aceternity UI components (floating-navbar, navbar-menu, infinite-moving-logos)
- All use TypeScript (.tsx)

**Legacy Button Components (`components/button/`):**
- **DEPRECATED**: Button.js, PrimaryButton.js, SecondaryButton.js
- Use `@/components/ui/button` (shadcn) or `@/components/ui/button-link` instead
- Old components include deprecation warnings in development

### Design System

**Glassmorphism Theme:**
- Semi-transparent backgrounds: `bg-white/70`, `bg-white/80`
- Strong backdrop blur: `backdrop-blur-md`, `backdrop-blur-xl`
- Subtle borders: `border-white/20`, `border-white/30`
- Large shadows: `shadow-lg`, `shadow-2xl`

**Color Palette:**
- Primary: Blue-900 (`bg-blue-900`, `hover:bg-blue-800`)
- Accent: Teal-600/700 (`bg-teal-600`, `bg-teal-700`)
- Neutral: Slate shades for text

**Typography:**
- Headings use gradient text: `bg-gradient-to-r from-blue-900 via-teal-600 to-blue-900 bg-clip-text text-transparent`
- Font sizes scale responsively with lg: breakpoint modifiers

### Key Technical Patterns

**ButtonLink Component (`components/ui/button-link.tsx`):**
Intelligent link component that automatically:
- Uses Next.js Link for internal routes (starts with `/`)
- Uses anchor tag with security attributes for external links (starts with `http`)
- Opens files in new tab (`.pdf`, `.docx`, etc.)
- Supports all shadcn Button variants and sizes

Example:
```tsx
<ButtonLink href="/projects/idar" variant="outline">View Project</ButtonLink>
<ButtonLink href="https://github.com/user">GitHub</ButtonLink>
<ButtonLink href="/resume.pdf">View Resume</ButtonLink>
```

**Floating Navbar Behavior:**
- Always visible in hero section (scroll position < 160px)
- After hero: hides on scroll down, shows on scroll up
- Uses `scrollY` from Motion for pixel-based detection

**Footer Component:**
- Previously `ContactMe.jsx`, now serves as global Footer
- Added to layout.tsx, appears on all pages
- Black background with white text, includes contact info and social links

### shadcn/ui Configuration

**components.json:**
- Style: default
- Base color: slate
- Icon library: Lucide React
- Custom registry: Aceternity UI (@aceternity)

**Path Aliases:**
- `@/components` → components/
- `@/lib` → lib/
- `@/ui` → components/ui/

**Installing Components:**
```bash
npx shadcn@latest add button
npx shadcn@latest add [component-name]
```

### Portfolio Page Structure

All portfolio pages follow consistent structure:
1. Hero section with gradient background
2. Tag badges for technologies
3. Project details grid (Date, Role, Organization/Course)
4. Main image
5. Content sections (Overview, UI Gallery, Technologies)
6. Optional: Demo videos (YouTube embeds)

**Image Paths:**
- Project images: `/public/img/[project-folder]/`
- Gallery images: `/public/img/design/`

### Data Files

**Projects Data (`data/projects.js`):**
Unified data file containing all projects (personal + academic combined):

```javascript
{
  id: string;              // Unique identifier (e.g., "caritutor")
  title: string;           // Project name
  date: string;            // Date range (e.g., "2024 June - 2024 Sep")
  description: string;     // 1-2 sentence description
  image: string;           // Image path (e.g., "/img/caritutor/thumbnail.png")
  techStack: string[];     // Technologies used (e.g., ["React JS", "UIUX Design"])
  links: [{
    label: string;         // Button text (e.g., "Read Case Study")
    url: string;           // Destination URL or route
    type: "primary" | "secondary";  // Button styling
    internal?: boolean;    // true = Next.js Link, false/omit = external anchor
  }]
}
```

**Gallery Data (`data/galleryImages.js`):**
Contains 17 design images organized by category:

```javascript
{
  id: string;        // Unique identifier
  src: string;       // Image path (e.g., "/img/design/marketing-social-media.jpg")
  alt: string;       // Alt text for accessibility
  width: number;     // Image width in pixels
  height: number;    // Image height in pixels
}
```

Categories: Marketing & Social Media (7), Event Posters (6), Branding & Merchandise (2), Additional Graphics (2)

### Gallery Section Implementation

**Masonry Layout (`GallerySection.jsx`):**
- Uses CSS columns for Pinterest-style layout
- Responsive: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Column gaps: 1.5rem (24px)
- Items use `break-inside: avoid` to prevent splitting

**Styling:**
```css
.masonry-grid {
  column-count: 1;           /* Mobile */
  column-gap: 1.5rem;
}
@media (min-width: 640px) {
  .masonry-grid { column-count: 2; }  /* Tablet */
}
@media (min-width: 1024px) {
  .masonry-grid { column-count: 3; }  /* Desktop */
}
```

**GalleryItem Features:**
- Fade-in animation with staggered delays (0.05s per item)
- Hover effects: scale 105%, gradient overlay, alt text slide-up
- Next.js Image optimization with lazy loading

### TypeScript & Type Safety

**Motion/Framer Motion Types:**
- Transition objects require `as const` for type property to ensure literal types
- Example: `type: "spring" as const` (not just `type: "spring"`)

**Component Props:**
- Prefer proper TypeScript types over `any` (e.g., `React.AnchorHTMLAttributes<HTMLAnchorElement>` for anchor elements)
- React import can be omitted in client components (auto-imported by Next.js)


# Contestor Design System

## Brand Identity
- **Brand Name**: Contestor
- **Industry**: Tax & Accounting Advisory (Estonia / Baltics)
- **Aesthetic**: Professional, corporate, clean, modern

## Colors (HSL — defined in `src/index.css`)

### Core Tokens
| Token                  | HSL Value           | Usage                          |
|------------------------|---------------------|--------------------------------|
| `--background`         | `0 0% 100%`        | Page background (white)        |
| `--foreground`         | `220 20% 15%`      | Primary text                   |
| `--primary`            | `24 95% 53%`       | Brand orange accent            |
| `--primary-foreground` | `0 0% 100%`        | Text on primary backgrounds    |
| `--secondary`          | `220 14% 96%`      | Light gray sections            |
| `--secondary-foreground`| `220 20% 15%`     | Text on secondary backgrounds  |
| `--muted`              | `220 14% 96%`      | Muted backgrounds              |
| `--muted-foreground`   | `220 10% 46%`      | Secondary/muted text           |
| `--accent`             | `24 95% 53%`       | Same as primary (orange)       |
| `--border`             | `220 13% 91%`      | Borders and dividers           |

### Special Tokens
| Token                    | HSL Value           | Usage                        |
|--------------------------|---------------------|------------------------------|
| `--hero-bg`              | `220 20% 15%`      | Dark hero/footer backgrounds |
| `--hero-foreground`      | `0 0% 100%`        | Text on dark backgrounds     |
| `--section-dark`         | `220 15% 20%`      | Dark section backgrounds     |
| `--section-dark-foreground`| `0 0% 95%`       | Text on dark sections        |
| `--cta-bg`               | `24 95% 53%`       | CTA backgrounds (orange)     |
| `--cta-foreground`       | `0 0% 100%`        | Text on CTA backgrounds      |

## Typography
- **Font Family**: `Inter` (Google Fonts), fallback `sans-serif`
- **Headings**: `Inter`, weights 600–800
- **Body**: `Inter`, weight 400, `text-muted-foreground`
- **Small/Labels**: `text-xs` or `text-sm`

### Heading Scale
| Element | Classes                                          |
|---------|--------------------------------------------------|
| H1      | `text-3xl lg:text-5xl font-bold text-foreground` |
| H2      | `text-xl lg:text-2xl font-semibold text-foreground` |
| H3      | `text-lg font-semibold text-foreground`          |
| Body    | `text-sm text-muted-foreground leading-relaxed`  |

## Spacing
- **Container**: `container mx-auto px-4 lg:px-8`
- **Section padding**: `py-10` to `py-12`
- **Component gaps**: `gap-4` to `gap-8`
- **Border radius**: `--radius: 0.25rem` (small, corporate feel)

## Component Patterns

### Section Backgrounds
- **White sections**: `bg-background`
- **Light gray sections**: `bg-secondary`
- **Dark sections**: `bg-hero text-hero-foreground`
- **CTA banners**: Dark overlay on image or `bg-hero/70`

### Cards / Stat Blocks
- Background: `bg-secondary rounded-lg p-5`
- Icon: `w-8 h-8 text-primary`
- Text: `font-semibold text-foreground`

### Buttons (see `src/components/ui/button.tsx`)
- **Default**: Orange primary button
- **Hero**: Dark background with light text for dark sections
- **Hero-outline**: Bordered button for dark sections

### Navigation
- Sticky header: `sticky top-0 z-50 bg-background border-b border-border`
- Logo: `text-2xl font-extrabold tracking-tight text-foreground`
- Links: `text-sm font-medium text-muted-foreground hover:text-foreground`

### Breadcrumbs
- `text-sm text-muted-foreground` with `>` separators

### Footer
- Background: `bg-hero text-hero-foreground`
- Links: `text-xs text-hero-foreground/60 hover:text-hero-foreground`

## Layout Rules
1. **Always use semantic tokens** — never hardcode colors like `text-white` or `bg-black`
2. **Max content width**: `container` (1400px on 2xl)
3. **Responsive grid**: `grid sm:grid-cols-2 lg:grid-cols-3` or similar
4. **Image treatment**: `rounded overflow-hidden shadow-lg` with `object-cover`
5. **Alternating section backgrounds**: White → Gray → White (or Dark for emphasis)

## Tailwind Config
- Extended in `tailwind.config.ts` with all semantic color tokens
- Custom animations: `fade-in-up`, `accordion-down/up`
- Font family override: `sans: ['Inter', 'sans-serif']`

## File Organization
- Pages: `src/pages/`
- Shared components: `src/components/`
- UI primitives: `src/components/ui/`
- Assets: `src/assets/`
- Shared layout components (Navbar, Footer) imported across pages

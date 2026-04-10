

## AI News Page — Automatic RSS Feed Digest

### Overview
A new `/news` page that automatically fetches and displays AI news from curated RSS feeds. An edge function will parse the RSS feeds server-side, and the frontend will display articles in a card grid matching the existing design system.

### Architecture

```text
Browser  →  Edge Function (fetch-ai-news)  →  RSS Feeds (5-8 sources)
   ↑              ↓
   └── JSON array of articles ──┘
```

### Step 1: Create Edge Function `fetch-ai-news`
- Accepts no parameters (curated source list is hardcoded)
- Fetches RSS XML from 5-8 reliable AI news sources (e.g. VentureBeat AI, Ars Technica, The Verge AI, TechCrunch AI, AI Business, MIT Technology Review)
- Parses XML using built-in DOMParser in Deno
- Returns a unified JSON array: `{ title, link, source, pubDate, description, image? }`
- Sorted by publication date (newest first), limited to ~30 articles
- Includes CORS headers

### Step 2: Create News Page (`src/pages/News.tsx`)
- Navbar + Footer layout (same as other pages)
- Hero section with dark background: "AI News & Insights"
- Grid of news cards (`sm:grid-cols-2 lg:grid-cols-3`) using existing card styling from `design.md`
- Each card shows: source label, title (linked externally), excerpt, date
- Loading skeleton state while fetching
- Uses `react-query` to call the edge function with caching (5-minute stale time)

### Step 3: Add Route and Navigation
- Add `/news` route in `App.tsx`
- Add "AI News" link in `Navbar.tsx` nav items

### Design Adherence
- Section backgrounds: `bg-secondary` for card area
- Cards: `bg-card rounded-lg shadow-sm hover:shadow-md`
- Typography: `text-xs text-muted-foreground` for meta, `text-sm font-semibold` for titles
- All semantic color tokens per `design.md`

### RSS Sources (initial selection)
| Source | RSS URL |
|--------|---------|
| VentureBeat AI | `venturebeat.com/category/ai/feed/` |
| Ars Technica | `feeds.arstechnica.com/arstechnica/index` |
| AI Business | `aibusiness.com/rss.xml` |
| AI News | `artificialintelligence-news.com/feed/rss/` |
| TechCrunch AI | `techcrunch.com/category/artificial-intelligence/feed/` |
| The Verge AI | `theverge.com/rss/ai-artificial-intelligence/index.xml` |


## Problem analysis

Google search shows two issues:
1. **Indexed URL is the temporary `contestor-clone-magic.lovable.app`** instead of the real custom domain `https://www.contestor.ee`.
2. **Site name displays as "Lovable"** because Google infers site name from the `*.lovable.app` host and there is no explicit `og:site_name` / `WebSite` JSON-LD declaring "Contestor" on the indexed pages.

Root causes in the codebase:
- `SEOHead.tsx` hardcodes `BASE_URL = "https://contestor-clone-magic.lovable.app"`, so every canonical, `og:url`, and absolute URL points crawlers back at the lovable.app host.
- `public/sitemap.xml` lists only `contestor-clone-magic.lovable.app` URLs.
- `public/robots.txt` advertises the lovable.app sitemap and allows crawling on every host.
- `index.html` has no canonical tag, no `og:site_name`, no `application-name`, no host‑guard against being indexed on preview/lovable.app domains.
- No `WebSite` JSON-LD with `name: "Contestor"` (which is what Google uses for the bold title/site-name in results).

## Changes

### 1. `src/components/SEOHead.tsx`
- Change `BASE_URL` to `https://www.contestor.ee`.
- Add `<meta property="og:site_name" content="Contestor" />` (already present — keep) and ensure `application-name` meta.
- Add `<meta name="robots" content="index,follow" />` by default, but allow override.
- Inject a small `WebSite` JSON-LD on every page (in addition to per-page jsonLd) with `name: "Contestor"`, `url: https://www.contestor.ee` so Google picks "Contestor" as the site name.

### 2. `public/sitemap.xml`
Replace all `contestor-clone-magic.lovable.app` URLs with `https://www.contestor.ee/...` for `/`, `/tax-services`, `/accounting-services`, `/ai-consulting`, `/remote-eu-company`, `/news`, `/contact`. Add `<lastmod>` for today.

### 3. `public/robots.txt`
- Point sitemap to `https://www.contestor.ee/sitemap.xml`.
- Keep `Allow: /` for the production host.

### 4. `index.html`
- Add `<link rel="canonical" href="https://www.contestor.ee/" />`.
- Add `<meta property="og:site_name" content="Contestor" />` and `<meta name="application-name" content="Contestor" />`.
- Add inline script that, when `location.hostname` ends with `lovable.app`, injects `<meta name="robots" content="noindex,nofollow">` so preview/staging hosts stop getting indexed.
- Add a static `WebSite` + `Organization` JSON-LD block declaring `name: "Contestor"` and `url: https://www.contestor.ee` so the site-name signal is present even before React mounts (important — Googlebot often reads pre-render HTML).
- Update `<title>` slightly so it doesn't read identically to a generic word; keep "Contestor — Tax, Accounting & AI Consulting in Estonia".

### 5. Per-page SEO review
Confirm all pages already use `SEOHead` with sensible titles/descriptions. After BASE_URL change, every canonical + og:url will resolve to `www.contestor.ee/...` automatically. No per-page text changes needed beyond what's already in place.

### 6. Google Search Console follow-up (manual, outside code)
After deploy, in the response I'll instruct the user to:
- Verify `www.contestor.ee` in Search Console.
- Submit the new sitemap.
- Use the **Removals** tool to request removal of `contestor-clone-magic.lovable.app` URLs.
- Optionally request indexing of the canonical URLs.

## Result
- Crawlers landing on `*.lovable.app` see `noindex` → preview URLs drop out of the index.
- All canonical/og/sitemap signals point to `www.contestor.ee`.
- Explicit `WebSite` JSON-LD with `name: "Contestor"` makes Google show "Contestor" instead of "Lovable" in the result.

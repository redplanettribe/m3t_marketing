# Locale routing: symmetric prefixes with a redirecting root

The site is being internationalized for English and Spanish. Because the site is a fully static export (`output: 'export'`, deployed to Kinsta Sevalla) there is no middleware or server available at request time, ruling out the usual `next-intl` middleware-based detection.

We chose **symmetric path-prefixed locales** (`/en/...`, `/es/...`) built with `next-intl`, generated entirely at build time via `generateStaticParams`. The bare routes (`/`, `/pricing`, `/contact`) no longer serve English directly. Instead `/` is a real, statically-rendered page containing crawlable links to both `/en/` and `/es/`, plus a client-side script that silently redirects based on `navigator.language` (defaulting to English), so first-time visitors land on the right locale without an interstitial. The chosen locale is persisted in `localStorage` (not a cookie — the site has no cookie-consent mechanism) so repeat visits and the nav language switcher aren't overridden by re-detection.

## Considered options

- **Unprefixed English + `/es/` only** — preserves existing indexed URLs with zero redirects, but doesn't fit `next-intl`'s expected `[locale]` segment model without fighting the library. Rejected once we committed to `next-intl`.
- **Client-side toggle, no per-locale URL** — simplest to build, but Spanish content would never get its own indexable/shareable URL. Rejected for SEO.
- **Explicit "choose your language" interstitial at `/`** — removes any risk of guessing wrong, but adds a mandatory extra click for every first-time visitor on a conversion-optimized marketing site. Rejected in favor of silent auto-detect.

## Consequences

- The previously-indexed bare URLs (`/`, `/pricing`, `/contact`) are retired as content pages; Google will need to re-index the `/en/...` tree. `sitemap.ts` and `lib/seo.ts` must be updated to list both locale trees with `hreflang` alternates.
- Every marketing component that currently hardcodes copy needs to move to `next-intl` message lookups, and client components need locale available via `next-intl`'s client APIs.
- Spanish translations are AI-drafted and human-reviewed before shipping (source of truth: `messages/es.json` once created), not machine-translated at runtime.
- ~~The root `<html lang>` attribute is fixed at `"en"` in the initial static HTML for every route...~~ Resolved — see [[0003-per-locale-html-root]].

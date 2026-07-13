# Per-locale `<html lang>` via route-group root layouts

[[0002-i18n-locale-routing]] accepted `lang="en"` in the raw static HTML of every `/es/...` page as a tradeoff: the single `app/layout.tsx` renders the `<html>` tag before the `[locale]` segment beneath it resolves, so a client component (`SetHtmlLang`) had to correct it post-hydration. Crawlers and no-JS clients reading raw markup saw the wrong `lang`, which undercuts the `hreflang` alternates and per-locale OpenGraph `locale` already declared on the same page.

We resolved this by giving each top-level branch its own root layout via Next.js route groups, instead of one shared `app/layout.tsx` owning `<html>`:

- `app/layout.tsx` no longer renders `<html>`/`<body>`. It only exports the locale-independent metadata defaults (`metadataBase`, icons, manifest, `authors`) and passes `children` straight through.
- `app/(gateway)/layout.tsx` (wrapping the unprefixed `/` language-chooser page) renders `<html lang="en">` via a shared `RootHtmlShell` component.
- `app/[locale]/layout.tsx` renders `<html lang={locale}>` via the same `RootHtmlShell`, using the `locale` route param it already receives — no middleware needed, since `generateStaticParams` bakes one HTML file per locale at build time.
- The JSON-LD `WebSite` schema's `inLanguage` field is now parameterized the same way (`getWebsiteSchema(locale)` instead of a hardcoded `"en"` constant), so it's no longer inconsistent with the page it's embedded in.
- `SetHtmlLang` (the client-side post-hydration fix) is deleted; it's no longer needed since the raw HTML is correct from the first byte.

## Considered options

- **Leave as documented in 0002** — zero additional code, but knowingly ships incorrect `lang` to every crawler that doesn't execute JS, and inconsistent `inLanguage` in structured data. Rejected once "top-notch SEO" was made an explicit goal.
- **Middleware-based locale detection** — the standard `next-intl` approach, but categorically unavailable: the site is `output: 'export'` with no request-time server (deployed to Kinsta Sevalla as static files).
- **Make `[locale]` the only root, drop the unprefixed `/` gateway** — would also fix this, but removes the crawlable bilingual landing page at `/` and forces a guess-based redirect at the domain root, which 0002 explicitly rejected for the first-visit experience. Rejected to avoid re-opening that decision.

## Consequences

- Two small layout files (`(gateway)/layout.tsx`, `[locale]/layout.tsx`) now independently call `RootHtmlShell` rather than one shared root layout owning `<html>`. Any future change to the shell (fonts, skip links, JSON-LD wiring) should go in `components/root-html-shell.tsx`, not be duplicated across the two call sites.
- `app/page.tsx` moved to `app/(gateway)/page.tsx` — the route group is invisible in the URL (`/` is unaffected), but anyone searching for the gateway page's source needs to know to look under `(gateway)/`.

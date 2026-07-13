# Technical design for the Multiticketing marketing website

This document specifies the target technology choices and the UI style system for the Multiticketing marketing website redesign.
It is intended to be implementation-ready.

This doc must remain consistent with `docs/BUSINESS_INTENT.md`.
If an implementation decision conflicts with business intent, update business intent first.

## Goals

- Drive professional conference producers to **Watch demo**.
- Then drive them to **Request access to the Dashboard** (invite-only).
- Preserve the conversion story.
  - Demo -> Request access -> Dashboard (invite-only) -> Create event shell.

## Non-goals

- Do not position the product as "open source" or "free" as the primary identity.
- Do not position the product as ticketing-only.
- Do not optimize the homepage for contributors or GitHub stars.
- Do not lead with the foundation story as the primary pitch.

## Audience and positioning

- Primary audience: professional event organizers and conference producers.
- Category label (prominent): **Conference operations platform**.
- Suite description: **All-in-one conference platform** that replaces a fragmented stack.

## CTA hierarchy (must be enforced in UI)

1. Watch demo (primary).
2. Request access to Dashboard (secondary).
3. Contact sales (tertiary).

## Tech stack

### Framework

- **Next.js**.
- Site is treated as a static marketing site.
- Pages should be mostly static-rendered.
- Avoid introducing application-like state or client complexity unless needed for the demo modal and basic UI interactions.

### Styling

- **Tailwind CSS**.
- Use a token-driven system.
- Use CSS variables for core tokens (colors, radii, shadows) to keep the design coherent and easy to evolve.

### Typography delivery

- **Inter** via `next/font`.
- Use one family for headings and body for a restrained enterprise feel.

### Deployment

- Deploy as a static site to **Kinsta Sevalla** (static site offering).

### Analytics

- No analytics at launch.
- Design doc should keep a clean integration seam for Google Analytics later.
  - Single place to insert GA script and set a `NEXT_PUBLIC_GA_ID` env var when needed.

## Link targets and behaviors

### Request access (external)

- Request access URL is the Google Form at:
  - `https://docs.google.com/forms/d/e/1FAIpQLSeQzhcpcu4zrOnUuZeh2zBzhhnUB7QnJpMTpmMIRTn6-Buc1g/viewform?usp=publish-editor`
- All "Request access" CTAs open in a **new tab**.
- Do not imply self-serve signup.
- Use copy like "Request access" and "Invite-only".

### Watch demo (modal)

- "Watch demo" opens an **in-page modal** with an embedded YouTube video.
- Video is expected to be **YouTube unlisted**.
- The modal must be accessible.
  - Focus trap.
  - Escape closes.
  - Close button is keyboard reachable.
  - `aria-label` on controls.

### Contact sales (mailto)

- Contact sales is `mailto:info@redplanettribe.org`.
- Tertiary styling only (text link or ghost button).

### Legal documents (external)

- Footer links go to the legal hub:
  - [legal.multiticketing.com](https://legal.multiticketing.com/)
- The marketing site should not repeat "open-source" framing from the legal hub.
  - Copy on the marketing site must follow business intent.

## Information architecture

### Pages at launch

- Home
- Pricing
- Contact sales
- Privacy (external link to legal hub)
- Terms (external link to legal hub)

### Homepage section stack (locked order)

1. Navigation
2. Hero (split: journey strip + product/journey mock + CTAs)
3. Journey loop deep-dive (Register -> Agenda -> Interact -> Feedback -> Analytics)
4. Analytics and live ops (control-tower value)
5. "Replaces the Frankenstein stack" + integrations stance (alongside ticketing-only tools)
6. Social proof (photos + proof content)
7. GDG chapters free band (secondary)
8. Final CTA band
9. Footer

## Visual style direction (locked)

- Primary vibe: **enterprise control tower calm**.
- Secondary: premium polish without hospitality theater.
- Avoid: event lifestyle / festival aesthetics.
- Avoid: generic purple SaaS template look.
- Motion: subtle only.

## Brand assets (locked vs open)

- Locked: existing logo mark and wordmark treatments.
- Open: color tokens, typography scale, layout system, spacing, radii, component styling.
- Photos: use as secondary trust and social proof.
  - Do not let photos become hero lifestyle branding.

## Design tokens

Tokens must be expressed as CSS variables and mapped into Tailwind where appropriate.
Token names below are canonical.

### Color

Use an off-white canvas and a graphite UI structure with a single brand-blue accent.

- Canvas
  - `--bg`: `#F7F8FA` (page canvas)
  - `--surface`: `#FFFFFF` (cards, panels, modals)
  - `--surface-2`: `#F3F4F6` (subtle bands, table headers)
- Text
  - `--text`: `#0B1220` (near-black graphite)
  - `--text-muted`: `#475569` (slate)
  - `--text-subtle`: `#64748B` (secondary labels)
- Borders
  - `--border`: `#E5E7EB` (hairline)
  - `--border-strong`: `#CBD5E1` (for emphasis)
- Brand
  - `--brand`: `#0E84C1` (logo blue, primary CTA)
  - `--brand-hover`: `#0B6FA6`
  - `--brand-soft`: `#E6F4FB` (subtle tint for callouts)
- Status (marketing-site only, minimal)
  - `--success`: `#16A34A`
  - `--warning`: `#D97706`
  - `--danger`: `#DC2626`

Accessibility:

- All text and CTAs must meet WCAG AA contrast.
- Do not use brand blue for long body text.
  - Use it for links, primary buttons, and accents.

### Typography

Font:

- `--font-sans`: Inter

Scale:

- Headings are geometric-sans, high-contrast, and large.
- Body is airier.

Recommended sizes:

- `text-xs`: 12/16 (labels)
- `text-sm`: 14/20 (secondary copy)
- `text-base`: 16/26 (body default, airy)
- `text-lg`: 18/28
- `text-xl`: 20/30
- `text-2xl`: 24/32
- `text-3xl`: 30/36
- `text-4xl`: 36/40
- `text-5xl`: 48/52 (hero display)
- `text-6xl`: 56/60 (hero display on large screens)

Signature move:

- Huge hero type.
- All-caps micro-labels ("eyebrows") for section category labels.
  - `uppercase`, `tracking-wide`, `text-xs`, muted color.

### Layout

- Content column: 1200px max.
- Use full-bleed bands only for hero visual framing or major CTA bands.
- Airy rhythm.
  - Default vertical spacing between sections: 72-96px on desktop, 48-64px on mobile.

### Radius

- Default surface radius: 10px (within the 8-12 family).
- Buttons may be slightly rounder.
  - Primary button can be pill-ish if desired, but do not make the whole UI pill.

### Shadows

- Default: none for normal cards.
- Use soft shadow only for:
  - Demo modal container.
  - A single hero product frame if needed.

## Component recipes (behavior + style)

### Navigation

- Sticky.
- Light background.
- Hairline border appears after scrolling past hero.
- Left: icon mark + graphite "Multiticketing" wordmark.
  - Do not use the white wordmark on the light canvas.
- Right: nav links + CTAs.
  - Primary: Watch demo (filled brand blue).
  - Secondary: Request access (outline).

### Buttons

Primary (Watch demo):

- Filled `--brand`, white text.
- Large size, strong prominence.
- No glow.

Secondary (Request access):

- Outline.
- Border: `--border-strong`.
- Text: `--text`.
- Opens external Google Form in new tab.

Tertiary (Contact sales):

- Text link or ghost.
- `mailto:info@redplanettribe.org`.

### Hero

- Split layout.
- Left:
  - Eyebrow: "CONFERENCE OPERATIONS PLATFORM".
  - Headline: large, clear, single thought.
  - Subhead: 1-2 sentences with enemy + promise.
  - CTAs: Watch demo primary, Request access secondary.
  - Compact 5-step journey strip (Register, Agenda, Interact, Feedback, Analytics).
- Right:
  - One dominant journey-oriented product mock.
  - Use a clean device/frame, hairline border.
  - Keep it minimal, no clutter.

### Journey deep-dive

- Expand each step with one sentence.
- Reinforce end-to-end loop and measurement.
- Use small iconography, consistent stroke, no playful illustration style.

### Analytics / live ops section

- Use a control-tower framing.
- Include specific "now" promises from business intent:
  - Check-in pace and bottlenecks.
  - Track and room utilization.
  - Feedback and satisfaction.
  - Engagement indicators.
  - Program planning.
  - Sponsor reporting without spreadsheet work.

### Frankenstein stack and integrations stance

- Show "replaces the Frankenstein stack".
- Explicitly support integrating alongside ticketing-only tools.
  - Reference examples: Luma and Eventbrite.
- Avoid "rip and replace everything" tone.

### Social proof band

- Use event photos in a restrained way.
  - One photo band or a small grid.
  - Subtle captions.
- If no real logos/testimonials are available, avoid fake placeholders.

### GDG band (secondary)

- Present as a separate band after the professional pitch.
- Copy is clear that it is an exception.
  - "GDG chapters offered free worldwide."
- Do not let this redefine the product as free/community-first.

### Footer

- Link to legal hub:
  - [legal.multiticketing.com](https://legal.multiticketing.com/)
- Include contact mailto and basic nav.

## Accessibility and UX requirements

- Keyboard navigable site.
- Visible focus states.
- Avoid motion that triggers vestibular issues.
  - Respect `prefers-reduced-motion`.
- Modal is fully accessible as described above.
- Forms are external (Google Form).
  - Ensure request-access CTA copy clarifies "invite-only" to reduce confusion.

## SEO and metadata

- Provide good defaults:
  - Title template.
  - Meta description.
  - OpenGraph image (existing `opengraph-image.png` can be used initially).
- Avoid "open source" in primary SEO title/description.

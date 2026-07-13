---
name: m3t-ui-coherence
description: >
  Enforce the Multiticketing marketing site UI system from docs/TECHNICAL_DESIGN.md.
  Use this whenever you design or change UI, Tailwind classes, CSS variables/tokens, layout, typography, navigation, hero, section bands, buttons, modal styling, or accessibility.
  This skill steers the agent toward a calm enterprise “control tower” aesthetic with consistent spacing, restrained motion, and token-driven colors.
---

This skill encodes the UI direction for the Multiticketing marketing website.
Source of truth is `docs/TECHNICAL_DESIGN.md`.

If you notice the implementation contradicts the technical design, prefer aligning the code to the technical design.
Do not invent new vibes or introduce a second design system.

## Non-negotiables

- The site should feel like an enterprise control tower.
- Keep it calm, restrained, and premium.
- Avoid “festival” lifestyle aesthetics.
- Avoid generic purple SaaS template look.
- Motion is subtle only, and must respect `prefers-reduced-motion`.
- Use Tailwind CSS with a token-driven system via CSS variables.
- Use Inter via `next/font`.

## Visual tokens (canonical)

Tokens must be expressed as CSS variables and mapped into Tailwind where appropriate.
Use these canonical token names and values:

### Color

Canvas and surfaces:
- `--bg`: `#F7F8FA` (page canvas)
- `--surface`: `#FFFFFF` (cards, panels, modals)
- `--surface-2`: `#F3F4F6` (subtle bands, table headers)

Text:
- `--text`: `#0B1220` (near-black graphite)
- `--text-muted`: `#475569` (slate)
- `--text-subtle`: `#64748B` (secondary labels)

Borders:
- `--border`: `#E5E7EB` (hairline)
- `--border-strong`: `#CBD5E1` (emphasis)

Brand:
- `--brand`: `#0E84C1` (primary CTA)
- `--brand-hover`: `#0B6FA6`
- `--brand-soft`: `#E6F4FB` (tint callouts)

Status (minimal):
- `--success`: `#16A34A`
- `--warning`: `#D97706`
- `--danger`: `#DC2626`

Accessibility rules:
- All text and CTAs must meet WCAG AA contrast.
- Do not use brand blue for long body text.
  Use it for links, primary buttons, and accents.

### Radius and shadows

- Default surface radius: 10px (within the 8-12 family).
- Buttons may be slightly rounder.
  A primary button can be pill-ish, but do not make the whole UI pill-shaped.
- Default cards: no shadow.
- Use a soft shadow only for the demo modal container, and optionally one hero product frame.

## Typography

Use Inter for headings and body.
Keep headings high-contrast and large.
Keep body airier.

Use this scale as the default reference:
- `text-xs`: 12/16 (labels)
- `text-sm`: 14/20 (secondary copy)
- `text-base`: 16/26 (body default)
- `text-lg`: 18/28
- `text-xl`: 20/30
- `text-2xl`: 24/32
- `text-3xl`: 30/36
- `text-4xl`: 36/40
- `text-5xl`: 48/52 (hero)
- `text-6xl`: 56/60 (hero large screens)

Signature move:
- Huge hero type.
- All-caps micro-label “eyebrows” for section category labels.
  Use `uppercase`, `tracking-wide`, `text-xs`, and a muted text color.

## Layout and spacing rhythm

- Content column max width: 1200px.
- Use full-bleed bands only for hero framing or major CTA bands.
- Default vertical spacing between sections:
  - Desktop: 72-96px.
  - Mobile: 48-64px.

When adding a new section or component:
- Prefer fewer, stronger elements over dense clusters.
- Keep alignments crisp.
- Use consistent paddings, gaps, and border treatments.

## Component recipes to follow

### Navigation

- Sticky.
- Light background.
- Hairline border appears after scrolling past hero.
- Left: icon mark + graphite “Multiticketing” wordmark.
  Do not use the white wordmark on the light canvas.
- Right: nav links + CTAs with the specified hierarchy (see CTA skill).

### Hero

Split layout.

Left:
- Eyebrow: “CONFERENCE OPERATIONS PLATFORM”.
- Headline: large, clear, single thought.
- Subhead: 1-2 sentences with enemy + promise.
- CTAs: Watch demo primary, Request access secondary.
- Compact 5-step journey strip (Register, Agenda, Interact, Feedback, Analytics).

Right:
- One dominant journey-oriented product mock.
- Clean device/frame with a hairline border.
- Minimal, no clutter.

### Journey deep-dive

- Expand each step with one sentence.
- Reinforce end-to-end loop and measurement.
- Iconography is small, consistent stroke, and not playful.

### Social proof

- Photos are secondary trust and proof.
- Use a restrained band or small grid.
- Avoid fake testimonials/logos.

## Accessibility baseline

- Keyboard navigable.
- Visible focus states.
- Avoid motion that triggers vestibular issues.
- If you introduce a modal, it must be accessible (focus trap, escape closes, keyboard reachable close button, `aria-label`).

## Implementation checklist (use before shipping UI changes)

- Tokens: uses the canonical CSS variable names and values from `docs/TECHNICAL_DESIGN.md`.
- Contrast: meets WCAG AA for text and CTAs.
- Spacing: sections follow the 72-96px (desktop) and 48-64px (mobile) rhythm.
- Components: navigation, hero, and section patterns match the recipes above.
- Motion: subtle and respects `prefers-reduced-motion`.

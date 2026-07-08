---
name: m3t-cta-and-links
description: >
  Enforce CTA hierarchy and link behaviors from docs/TECHNICAL_DESIGN.md.
  Use this whenever you add or modify buttons, nav CTAs, hero CTAs, footer links, demo modal behavior, or any outbound links.
  This skill prevents accidental “self-serve signup” copy and keeps Watch demo as the primary conversion driver.
---

This skill encodes conversion and interaction rules for CTAs and links.
Source of truth is `docs/TECHNICAL_DESIGN.md`.

## CTA hierarchy (must be enforced)

1. Watch demo (primary).
2. Request access to Dashboard (secondary).
3. Contact sales (tertiary).

Never invert or visually overpower this hierarchy.
If a screen has limited space, keep Watch demo as the strongest CTA.

## Link targets and behaviors

### Request access (external, invite-only)

- Request access URL is the Google Form:
  - `https://docs.google.com/forms/d/e/1FAIpQLSeQzhcpcu4zrOnUuZeh2zBzhhnUB7QnJpMTpmMIRTn6-Buc1g/viewform?usp=publish-editor`
- All Request access CTAs open in a new tab.
  Use `target="_blank"` and `rel="noreferrer noopener"`.
- Copy must not imply self-serve signup.
  Use “Request access” and “Invite-only”.
  Avoid “Sign up”, “Create account”, “Get started”, or “Start free”.

### Watch demo (in-page modal)

- Watch demo opens an in-page modal with an embedded YouTube video (unlisted).
- Modal accessibility is required:
  - Focus trap.
  - Escape closes.
  - Close button is keyboard reachable.
  - `aria-label` on controls.
- Styling guidance:
  - Treat the modal as the only regular surface allowed to have a soft shadow.

### Contact sales (mailto)

- Contact sales is `mailto:info@redplanettribe.org`.
- Tertiary styling only.
  Prefer a text link or a ghost button.

### Legal documents (external)

- Footer links go to:
  - `https://legal.multiticketing.com/`
- Do not repeat “open-source” framing from the legal hub.
  Marketing copy must follow business intent and technical design.

## Button styling rules (relative emphasis)

Primary (Watch demo):
- Filled brand color.
- Highest prominence.
- Large size.
- No glow.

Secondary (Request access):
- Outline style.
- Uses strong border color.
- Text uses the main text color.
- Must look clearly secondary to Watch demo.

Tertiary (Contact sales):
- Text link or ghost.

## Quick verification checklist

- Every page keeps Watch demo as the strongest CTA.
- Every Request access link is invite-only, opens new tab, and uses correct URL.
- No copy implies self-serve signup.
- Demo modal meets accessibility requirements.

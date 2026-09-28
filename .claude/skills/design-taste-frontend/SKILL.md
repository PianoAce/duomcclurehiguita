---
name: design-taste-frontend
description: Use before writing any frontend UI code for a new site or major redesign, when the user gives a brief plus real visual references (images, links, brand palettes) and wants a deliberate, non-generic design direction instead of default framework styling. Produces a written design-direction doc (palette roles, type pairing, layout rhythm, photography/imagery treatment, distinctive motifs) to confirm with the user before any page is built.
---

# Design taste for frontend

Goal: derive a specific, defensible design direction from real references and the
project's character — never fall back to generic template aesthetics (centered hero,
default shadows, generic SaaS button style, stock color scale).

## Process

1. **Collect real references, not descriptions.** If the user links to a gallery/site
   (Behance, Dribbble, a competitor site) and it can't be fetched as text, ask them to
   export/screenshot the actual images into the repo (e.g. `docs/behance/`) and read
   those image files directly. Never invent a design direction from a link's metadata
   alone (title/tags) — that produces generic guesses, not taste.
2. **Extract concrete attributes from what you actually see**, not vibes:
   - Layout patterns: split-screen/diptych panels? Card-in-frame with rounded corners?
     Asymmetric grids? Full-bleed vs. contained?
   - Typography: display vs. body pairing, weight contrast, tracking, size jumps.
   - Color usage: is it mostly neutral with sparing accent color, or high-contrast
     dark/light alternation between sections?
   - Photography/imagery treatment: color grading, crop style (posed vs. candid),
     duotone/BW vs. full color, aspect ratios.
   - Distinctive recurring motifs: numbered pagination, thin rule dividers, small-caps
     metadata labels, icon style — the specific details that make it feel designed
     rather than templated.
   - Spacing rhythm: dense and busy vs. slow and generous.
3. **Adapt, don't copy.** Reconcile the reference's raw treatment (e.g. pure black
   panels) with the project's actual brand constraints (e.g. an earth-tone palette) —
   substitute the darkest brand-palette color for "black," keep the structural pattern
   (dark/light section alternation, split panels) rather than the literal color.
4. **Write a short direction doc** covering: palette roles (a table mapping each color
   to a functional role, with a rule of thumb like "90% neutral, accent used sparingly"),
   type pairing with named fonts, layout/spacing rhythm, photography treatment, and any
   motifs borrowed from the references. Keep it concise — a scannable brief, not an essay.
5. **Present it before writing code.** Get explicit confirmation (or adjustments) on
   the direction doc before scaffolding or building pages. Treat typography/color
   choices as a checkpoint, not something to silently decide.
6. **Re-anchor to references during build.** After major layout milestones, sanity
   check new sections against the reference images/motifs, not just the written doc —
   the doc is a summary and can lose nuance the images still carry.

## Anti-patterns to avoid

- Deriving a design direction from a link you couldn't actually view (metadata/tags
  only) — say so explicitly and ask for images instead of guessing.
- Defaulting to generic patterns (centered hero + 3-column feature grid + rounded
  card shadows) when references show something more specific.
- Treating brand palette and reference imagery as competing constraints instead of
  reconciling them (e.g. keep the reference's structural contrast but recolor it
  with the brand's actual darkest/lightest tones).

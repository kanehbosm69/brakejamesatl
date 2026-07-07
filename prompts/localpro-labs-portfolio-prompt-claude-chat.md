# LocalPro Labs — Claude Chat / Artifacts Version (One Site Per Chat)

> **How to use:** Open a regular chat at claude.ai. Replace `[NICHE]` in the first
> line with one Wave 1 niche, then paste everything below the line as your message.
> Claude will design the site as a live artifact preview you can react to in real time
> ("make the hero darker", "the CTA gets lost", etc.).
>
> **One niche per chat.** Each site deserves a full context window — cramming several
> into one chat degrades the design quality of all of them.
>
> **Wave 1 niches (do these before any others):**
> Mobile Brake Repair (model on BrakeJamesATL) • Mobile Detailing • Mobile Mechanic •
> Window Tint • Pressure Washing • Junk Removal
>
> **Saving your work:** when the site is final, download the artifact's HTML and drop
> it into the repo at `portfolio/<niche-slug>/index.html`. The hub page and deployment
> are handled by the Claude Code version of this prompt
> (`prompts/localpro-labs-portfolio-prompt.md`).

---

Design and build a complete, production-quality demo website for a fictional
**[NICHE]** business in Metro Atlanta, as a single self-contained HTML artifact.

This is a flagship portfolio piece for **LocalPro Labs**, my AI automation agency.
The core product is **missed-lead recovery + intake automation** for owner-operated
local service businesses: lead capture, instant follow-up, and a professional intake
process so operators stop losing jobs after hours or when they're on the road. This
website is the wrapper that sells that system — the intake pipeline must be the hero
of the page, not an afterthought.

The bar: a real [NICHE] owner-operator sees this demo, recognizes their own
missed-lead problem in it, and thinks *"I've never seen a local service website look
like this — I want a call."*

# Design Direction

Treat this as if an elite creative studio took one local-service client and gave it
everything: its own philosophy, visual language, motion system, typography, layout
strategy, and color psychology. Reject your first idea — it is almost always the
generic one. No cookie-cutter AI aesthetics, no stock local-business layout. Push
typography, layout, motion, micro-interactions, custom SVG illustration, scrolling,
depth, and premium hover states as far as a single page allows. Concrete and specific
beats clever and vague. Surprise me.

# Conversion First

This is not an art project. Every section must move a visitor toward booking.
Include, in niche-appropriate form: a hero that states the offer and service area in
seconds • trust indicators • sample testimonials • before/after or process showcase •
"starting at" pricing anchors • FAQs • a guarantee • a sticky click-to-call /
click-to-text bar on mobile • one primary booking CTA repeated at natural decision
points. If a section is decoration rather than persuasion, cut it.

# The Intake Pipeline Is the Hero

Visibly demonstrate the LocalPro Labs system a real deployment would include:

- A lead capture form designed for this niche (right questions, minimal friction)
- An explicit instant-response promise ("Text back in under 5 minutes — even after hours")
- A missed-call text-back story told somewhere on the page
- On form submit, simulate the real flow: show the confirmation text the customer
  would receive AND the alert the owner would get, side by side. Make the invisible
  system visible — that is the product being sold.

# Demo Integrity

- Invent a plausible fictional business name and Metro Atlanta service area
  (Hapeville / College Park / Fairburn region). Reviews are clearly sample content.
- Phone numbers and booking endpoints are placeholders. Any CTA a viewer clicks may
  resolve to an elegant "This is a LocalPro Labs demo — want this for your business?"
  moment pointing to brakejamesatl@gmail.com.
- Include tasteful attribution: "Site + intake system by LocalPro Labs."

# Technical Constraints

- One self-contained HTML artifact: inline CSS and vanilla JS only, no external
  fonts, images, CDNs, or network requests. Custom SVG and CSS-drawn visuals only.
- Mobile-first and fully responsive — these businesses' customers are on phones.
- Animation must never block reading or tapping a CTA; respect reduced-motion.
- Semantic HTML, real heading hierarchy, accessible contrast and focus states.

# Quality Standard

Before presenting the artifact, run three silent review passes:
1. Layout, spacing, hierarchy, responsiveness, usability.
2. Animation, interaction, typography, accessibility, performance, polish.
3. Challenge every section: "How could this go from excellent to unforgettable?"
   and "Does this move a visitor closer to booking?" Cut what fails.

Do not stop at the first acceptable solution.

# Deliverables

1. The finished single-file website artifact.
2. After the artifact, a short creative rationale in chat: the design direction, the
   conversion decisions, and the unique techniques used — written so I can read it
   aloud to a prospect as sales collateral.

Do not ask me questions. Make intelligent assumptions consistent with LocalPro Labs
and modern conversion-focused web design, and note them in the rationale. Do not
optimize for speed. Optimize for craftsmanship.

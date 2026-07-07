# LocalPro Labs × Fable 5 — Portfolio Build Prompt (Final)

> Paste everything below the line into a fresh Fable 5 session.
> Prerequisite: none. The session builds static files only — no paid tools, no new accounts.
> Revision notes explaining what changed from the draft live in the PR/commit history.

---

I want you to treat this as a flagship portfolio project that demonstrates everything
Fable 5 is capable of in web design, interaction design, storytelling, branding, and
front-end craftsmanship — **in service of one business goal: getting LocalPro Labs its
first 2–3 paying clients.**

LocalPro Labs is my AI automation agency. The core product is **missed-lead recovery +
intake automation** for owner-operated local service businesses: lead capture, instant
follow-up, and a professional intake process so operators stop losing jobs after hours
or when they're on the road. The websites you build are the *wrapper* that sells that
system. Every demo site must make the intake pipeline the hero, not an afterthought.

These are not templates. Each website should feel like it was designed by a completely
different elite creative studio with its own philosophy, visual language, motion system,
typography, layout strategy, color psychology, and user experience. The objective is a
portfolio so convincing that a mobile mechanic or detailer looks at the site for *their*
niche and thinks: **"I've never seen a local service website look like this — and I can
see exactly where my missed calls are going."**

---

# Goal

Design and build a portfolio of **production-quality demo websites**, delivered in
waves, plus one **portfolio hub page** that ties them together.

## Wave 1 — Build these six first. Stop after Wave 1.

These match LocalPro Labs' actual target clients (owner-operated, mobile-first,
Metro Atlanta):

1. **Mobile Brake Repair** — model it on BrakeJamesATL; this one doubles as the live
   case study and can reference a *real* working pipeline
2. **Mobile Detailing**
3. **Mobile Mechanic**
4. **Window Tint**
5. **Pressure Washing**
6. **Junk Removal**

**Hard checkpoint:** after Wave 1 + the hub page are complete and reviewed, stop and
present the work. Waves 2 and 3 only begin when I explicitly say so — the plan is to
use Wave 1 in real outreach first and let prospect reactions decide what gets built next.

## Wave 2 (on my go-ahead only)

Locksmith • Towing • Windshield Replacement • Handyman • Painting • Window Cleaning •
Pest Control • Landscaping • Garage Door Repair

## Wave 3 (on my go-ahead only)

HVAC • Plumbing • Roofing • Tree Service • Electrician • Epoxy Floors • Concrete •
Pool Service • Flooring • Solar Installation • Remodeling

Every business gets its own identity. No repeated layouts. No repeated hero sections.
No repeated navigation. No repeated animations. No repeated visual systems. Each should
feel like it belongs in an Awwwards showcase while still converting visitors into
paying customers.

---

# Technical Constraints (non-negotiable)

- **Static HTML/CSS/vanilla JS only.** No build step, no framework runtime, no npm
  dependencies, no external CDNs. Each site must open from a local file and deploy
  unchanged to GitHub Pages or any free static host.
- **File structure:** `portfolio/index.html` (hub) and `portfolio/<niche-slug>/index.html`
  (one folder per client, assets inlined or co-located in that folder).
- **Self-contained assets:** custom SVG graphics, inline illustrations, CSS-drawn
  visuals, and system/embedded fonts. No hotlinked images, no external font requests.
- **Performance budget:** each page interactive in under 2 seconds on a mid-range
  phone over 4G. Animation must never block reading or tapping a CTA.
- **Fully responsive**, mobile-first — these businesses' customers are on phones.

---

# The Intake Pipeline Is the Hero

Every site must visibly demonstrate the LocalPro Labs system a real deployment would
include:

- A **lead capture form** designed for the niche (right questions, minimal friction)
- An **instant-response promise** made explicit on the page ("Text back in under
  5 minutes — even after hours")
- A **missed-call text-back** story told somewhere on the page
- **Sticky click-to-call / click-to-text CTAs** that persist on mobile
- On form submit, simulate the real flow in the demo: show the confirmation the
  customer would receive and the alert the owner would get. Make the invisible
  system visible — that's the product being sold.

---

# Demo Integrity

- Every business is **fictional** (except the BrakeJamesATL-modeled site, which may
  use its real branding). Use invented names, Metro Atlanta service areas, and
  plausible-but-clearly-sample reviews. Never fabricate content that could be
  mistaken for a real third-party business.
- Phone numbers and booking endpoints are placeholders; CTAs in demos should resolve
  to an elegant "This is a LocalPro Labs demo — want this for your business?" moment
  that routes to brakejamesatl@gmail.com.
- Each site carries **tasteful LocalPro Labs attribution** ("Site + intake system by
  LocalPro Labs") that itself functions as a lead capture point.

---

# Creative Freedom

Within the technical constraints, push the limits of: typography • layout • motion •
interaction • storytelling • transitions • scrolling • loading experiences •
micro-interactions • illustration • iconography • visual hierarchy • glassmorphism •
brutalism • minimalism • editorial layouts • cinematic composition • premium gradients •
custom SVG graphics • SVG masks • parallax • depth • interactive cards • animated
backgrounds • premium hover states • unexpected page transitions.

Every website should have its own design DNA. Reject the first idea — it is almost
always the generic one. Surprise me.

---

# Conversion First

These are not art projects. Every website must outperform traditional local service
websites at one job: turning a visitor into a booked lead. Prioritize trust, clarity,
speed, and lead generation. Every page should naturally guide visitors toward booking.

Include thoughtful, niche-appropriate placement of: trust indicators • testimonials •
before/after galleries • pricing or "starting at" anchors • FAQs • guarantees •
booking forms • click-to-call buttons • sticky CTAs • honest urgency • social proof.
Only use financing sections where the niche actually warrants it (big-ticket Wave 3
trades), not as boilerplate.

---

# The Hub Page

`portfolio/index.html` is the single URL sent to prospects, so treat it as the most
important page in the project. It must:

- Present the collection with LocalPro Labs' own premium brand identity
- Frame each demo with a one-line business problem ("Detailers lose 40% of leads to
  slow replies") and a link into the demo
- State the offer plainly: lead capture + instant follow-up + intake system, installed
  for local operators
- End with one CTA: book a call / send a message to brakejamesatl@gmail.com
- Reference the BrakeJamesATL site as the live, real-world case study

---

# Quality Standard

Before considering any website complete, perform **three complete design review passes**:

- **Pass 1:** layout, spacing, hierarchy, responsiveness, usability.
- **Pass 2:** animations, interactions, typography, accessibility (semantic HTML,
  contrast, keyboard and reduced-motion support), performance, visual polish.
- **Pass 3:** challenge every section. Ask: "How could this be elevated from excellent
  to unforgettable?" — and separately: "Does this section move a visitor closer to
  booking, or is it decoration?" Cut what fails the second question.

Do not stop after the first acceptable solution.

## Definition of Done (per site)

- One page, roughly 5–8 sections, distinct design system documented in its rationale
- Passes all three review passes
- Loads and functions from a local file with zero console errors
- Lead form demo flow works end-to-end on mobile viewport sizes
- LocalPro Labs attribution present and clickable

---

# Autonomous Decision Making

Do not ask me questions unless absolutely necessary. Use professional judgment. When
information is missing, make intelligent assumptions consistent with LocalPro Labs,
Metro Atlanta, and modern conversion-focused web design — and note the assumption in
the site's rationale. Operate like a world-class creative agency with complete
ownership of the project. The one exception: the Wave checkpoints are hard stops.

---

# Deliverables

For each client site:

- Complete production-ready static website (per the technical constraints)
- Fully responsive implementation with premium interaction design
- Original visual direction and conversion-optimized content
- Semantic, SEO-ready structure (so a real deployment inherits it), accessibility
  best practices, performance within budget
- A `rationale.md` in the site's folder: the design direction in plain language, the
  conversion decisions made, and the unique techniques used — **written so it can be
  read aloud to a prospect as sales collateral**, not as developer notes

For the collection: the hub page, plus a short `portfolio/README.md` covering how to
deploy the folder to GitHub Pages for free.

---

# Success Criteria

Not "impressive to designers." The bar is: **a specific owner-operator in each Wave 1
niche sees the demo for their trade, recognizes their own missed-lead problem in it,
and wants a call.** When someone views this collection, they should conclude that
LocalPro Labs builds the highest-quality lead systems available to local service
businesses — and the portfolio should be able to attract premium clients without paid
advertising.

Think like an award-winning creative director, a senior UX strategist, a conversion
optimization expert, and a founder whose reputation depends on every pixel.

Do not optimize for speed. Optimize for craftsmanship — one wave at a time.

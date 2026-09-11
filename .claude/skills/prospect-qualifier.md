---
name: prospect-qualifier
description: >
  INVOKE THIS when James shares a business listing (Google Business Profile
  screenshot, Yelp page, or description) and wants to know whether it's
  worth calling — or asks "should I target this," "is this a good prospect,"
  "qualify this lead," "worth calling?" Runs the 4-step qualification check
  before he spends a call on a business, and gives a clear Target / Caution
  / Skip verdict, not just a vibe.
triggers:
  - "should I target this"
  - "is this a good prospect"
  - "qualify this lead"
  - "worth calling"
  - "is this worth my time" (when paired with a business listing, not an AI tool — if ambiguous, ask)
---

## Your Context

James is a solo founder building LocalPro Labs' first 2–3 paying clients.
Current hyper-focus: mobile detailers in the Hapeville/Fairburn/College Park
tri-city area (see `sales/prospect-list-detailers.xlsx`), chosen for
recurring-visit LTV economics over one-off repair niches. Target customer
archetype: solo or small-team, owner-operated, mobile-service business.

This skill exists to stop him from either (a) skipping calls out of
unfounded doubt, or (b) burning a call on a business that was never a real
fit — both waste his ~8 hrs/week.

---

## The 4-Step Check

Run all four before giving a verdict. Don't skip to a gut call.

**1. Review complaint scan — the single most decision-relevant check.**
Open the Reviews tab (not just the star average) and look for two different
signals:
- *Speed/responsiveness complaints* ("never called back," "took forever to
  hear from them," "couldn't get through") → **green light** — this is
  literally the problem James solves.
- *Quality/workmanship complaints* (bad work, rudeness, hidden fees) →
  **red flag, walk away** — automating a bad experience just makes it
  arrive faster, and no amount of missed-lead recovery fixes bad service.

**2. Review recency/velocity.**
Are recent reviews actually recent (last 60-90 days), or is the review
count high but stale? A large total with no recent activity suggests a
dormant or slowing business, not an active one worth the ROI-calc pitch.

**3. Team-size read (lower priority for detailers specifically).**
"LLC" in the name doesn't mean a team — usually just liability/tax
structure. Check reviews for multiple staff named by customers if it
matters for tone, but don't disqualify a business over this alone; both
solo and small-team detailers are in scope.

**4. Pre-call diagnostic — verify, don't assume.**
Before pitching, actually call or text the business's listed number at a
plausible busy time. Does something come back instantly and automatically,
or does it just sit there? This is the same technique that produced the
sharpest real-call opener reviewed all session ("I called you at 6:30
Thursday and nobody answered") — it resolves "they already have texting/a
system" objections with evidence instead of a guess.

---

## Verdict Format

```
## Prospect Check: [Business Name]

1. Review complaints:  [Speed-related found / Quality-related found / Neither found] — [one line]
2. Review recency:     [Active / Stale] — [one line]
3. Team size:          [Solo / Small team / Unclear] — [one line, not disqualifying]
4. Pre-call diagnostic: [Done — result / Not yet done]

**Verdict: [TARGET / CAUTION / SKIP]**

[One or two sentences — direct, specific to what was actually found, not generic]

**Next step:** Log the result in sales/prospect-list-detailers.xlsx once you've
called or diagnostic-tested — Cold stays Cold until real contact happens.
```

**Verdict rules:**
- **TARGET** — no quality complaints, reviews active/recent, nothing disqualifying. Green light to call.
- **CAUTION** — mixed signals (e.g., some quality complaints alongside speed complaints, or stale-but-not-dead review activity). Still callable, but go in knowing the specific risk.
- **SKIP** — quality/workmanship complaints dominate, or clearly dormant (no recent activity, stopped operating). Don't spend a call here — redirect to the next Cold name on the list instead.

Be direct. A vague "looks okay" is not a verdict — name what was actually
found and why it does or doesn't clear the bar.

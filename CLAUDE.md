# BrakeJamesATL — Project Context

## Current Strategic Priority (Standing Override)
**Indoor herb/plant cultivation** is now deemed by James as important, or more important, than the BrakeJamesATL / LocalPro Labs mission below — driven by concern over broader economic decline and a desire for a resilience/self-sufficiency hedge (food, medicinal herbs, potential product line).

- This is a deliberate, explicit call from James, not drift. Do not flag it against the "Failure Mode to Guard Against" section below — that section's "exploring new business ideas" warning does NOT apply to this priority.
- Treat cultivation-related requests (setup, species selection, environmental control, scaling, potential business model) with the same weight as BrakeJamesATL/LocalPro Labs work — do not default to redirecting James back to the 90-day mission unless he asks for that framing.
- BrakeJamesATL and LocalPro Labs remain active and are not cancelled — this priority sits alongside/above them, not as a replacement, until James says otherwise.

---

## Who James Is
- Solo founder, Metro Atlanta
- Day job: 7am–5pm M–F (unavailable during these hours)
- Hard Shabbat cutoff: Friday sunset — no work after that
- Available: ~8 hrs/week, ~$150/month for new tools
- Email: brakejamesatl@gmail.com

---

## The Two Businesses

### BrakeJamesATL
Mobile brake repair service, Metro Atlanta.
- **Service area:** Hapeville, Fairburn, College Park, and surrounding areas
- **Strategic role:** Cash flow business + live proof-of-concept for LocalPro Labs
- **Position:** Blue Ocean within Red Ocean — mobile-only, brake specialist, trust-based
- **Differentiator:** The intake pipeline (fast response, automated follow-up, professional process) — not the brake service itself
- **Current state:** Lead intake pipeline live (email + Sheets working, SMS pending A2P approval)

### LocalPro Labs
AI automation agency for local mobile service operators.
- **90-day mission:** Land 2–3 paying clients at $500–$2k/deployment
- **Target clients:** Mobile mechanics, detailers, tint shops, cannabis delivery operators, other owner-operated local service businesses
- **Core offer:** Missed-lead recovery + intake automation pipeline
- **Pitch:** "We install a lead capture + instant follow-up + intake system so local operators stop losing jobs after hours or when they're on the road"
- **Proof:** BrakeJamesATL pipeline is the live case study — build it, document it, sell copies of it

---

## Tech Stack
Evaluate all tools and suggestions against this stack only:
- **Apps Script V8** — automation glue, form triggers, Sheets manipulation
- **Firebase/Firestore** — lead storage and status tracking
- **Node.js 20** — server-side when needed
- **Twilio** — SMS (customer confirmations + owner alerts)
- **Square** — payments and deposits
- **Google Workspace** — Forms, Sheets, Gmail drafts
- **Slack webhooks** — owner notifications
- **Gemini API** — lead enrichment (summary, tags, missing info, confidence score)

---

## Active Builds

### BrakeJamesATL Lead Intake Pipeline
`automation/lead-intake/Code.gs`

**Flow:** Google Form → Apps Script → Twilio SMS + Gmail draft + Firestore + Sheets row

**Status:**
- ✅ Google Form collecting leads
- ✅ Sheets row created on submission
- ✅ Gmail draft created for follow-up
- ✅ Firestore lead document created
- ⏳ SMS blocked — pending A2P 10DLC campaign approval in Twilio

**Script Properties required:**
| Key | Value |
|-----|-------|
| TWILIO_ACCOUNT_SID | (from Twilio console) |
| TWILIO_AUTH_TOKEN | (rotated — get from Twilio console) |
| TWILIO_FROM_NUMBER | +14706495010 |
| TWILIO_OWNER_PHONE | +14045006371 |
| GEMINI_API_KEY | (Google AI Studio) |
| FIREBASE_PROJECT_ID | (Firebase console) |
| FIREBASE_CLIENT_EMAIL | (service account) |
| FIREBASE_PRIVATE_KEY | (service account, \n escaped) |

**Human Validation Zones:**
- Twilio SMS sends (real customers receive these)
- Square charges (real money)
- Any outbound communication sent on behalf of a client

### Brand OS
In progress in a separate session. Not yet committed to this repo.
Files expected: brand/brand-strategy.md, brand/messaging-architecture.md, brand/brand-voice.md, website/homepage-copy.md, sales/trust-system.md, automation/sms-templates.md, local-seo/*, content/content-pillars.md, sales/offer-stack.md, ops/asset-priority-roadmap.md

---

## What's Next (Priority Order)
1. A2P 10DLC brand + campaign registration in Twilio (unblocks SMS)
2. Commit Brand OS files from other session
3. First LocalPro Labs outreach — one message to one mobile service operator per evening
4. Document BrakeJamesATL pipeline publicly as LocalPro Labs case study

---

## Failure Mode to Guard Against
**Capability-first thinking** — chasing what AI can do instead of what closes a client or ships a deliverable in the next 30 days.

Signs of drift:
- Researching new tools without a client attached
- Watching AI videos instead of sending outreach
- Building features the pipeline doesn't need yet
- Exploring new business ideas before the first LocalPro Labs client is signed *(exception: indoor herb/plant cultivation — see "Current Strategic Priority" above, an explicit standing override, not drift)*

---

## Skills
- `.claude/skills/ai-signal-filter.md` — invoke when James evaluates any new AI tool, video, or business idea. Scores against the 90-day mission. Also triggers avoidance check when research replaces building.
- `.claude/skills/fable-mode/SKILL.md` — invoke on "Fable Mode" / "max rigor", or proactively on complex projects, architecture decisions, and strategy calls. Full decomposition → planning → verification → iteration framework.
- `.claude/skills/sales-level-up/SKILL.md` — invoke on "level up my sales", "sales drill", "roleplay a prospect", "objection drill", "close practice". Runs scored sales roleplay reps against realistic local-service prospect personas — James has zero sales background, this builds the skill through repetition, not lectures.

---

## Intake Discovery Questions (use on every LocalPro Labs prospect call)
1. "What's the one bottleneck that's currently capping your revenue or costing you the most time?"
2. "What format do you want the output in?" *(lock this before building — learned from Quality Terps)*
3. "Are you ready to put down a deposit to get started?" *(no deposit = no engagement)*

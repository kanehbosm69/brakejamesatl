---
name: ai-signal-filter
description: >
  INVOKE THIS when the user pastes AI news, tool launches, YouTube video titles,
  newsletter summaries, or asks "should I look into X?" or "is Y worth my time?"
  or "what do you think about this new AI tool?" — ruthlessly filters AI signal
  from noise using James's specific 90-day mission as the only scoring axis.
  Also invoke when the user seems to be researching instead of building.
triggers:
  - "filter this"
  - "is this worth my time"
  - "should I learn"
  - "what do you think about [tool/model/framework]"
  - "I saw this new AI thing"
  - "run signal scan"
  - "drill down on"
  - "investment drill down"
---

## Your Context

**Who you are:** James, solo founder, Metro Atlanta. Running two businesses in parallel:
- **BrakeJamesATL** — mobile brake repair, needs a proof-of-concept automation
- **LocalPro Labs** — AI automation agency for local mobile service operators

**Day job constraint:** 7am–5pm M–F unavailable. Hard Shabbat cutoff Friday sunset.
**Available:** ~8 hrs/week, ~$150/month for new tools.

**Active build:** Google Form → Sheets → Apps Script → Twilio → Slack lead pipeline for Quality Terps (cannabis delivery, Fresno CA).

**Stack (only evaluate tools against this):** Apps Script V8, Firebase/Firestore, Node.js 20, Twilio, Square, Google Workspace, Slack webhooks.

**90-day mission:** Land 2–3 paying LocalPro Labs clients at $500–$2k/deployment.

**Core failure mode to guard against:** Capability-first thinking — chasing what AI *can* do instead of what *closes a client or ships a deliverable* in the next 30 days.

---

## How to Use

**Signal Scan** — paste a list of items (news, tools, video titles, tweets):
> "Run a signal scan on these: [paste list]"
> "Filter this batch for me: [paste list]"
> "Signal scan: Cursor AI update, new GPT-4o feature, Zapier AI agents launch, Make.com new module"

**Investment Drill Down** — single item deep evaluation:
> "Drill down on: Zapier AI agents"
> "Investment drill down: should I learn LangChain?"
> "Is n8n worth switching to?"

**Avoidance Check** — happens automatically, or trigger manually:
> "Am I avoiding something right now?"

---

## Signal Scan

### Scoring Rubric

Score each item 1–10 on **mission drift** — how far it is from closing a paying LocalPro Labs client within 90 days.

| Score | Meaning |
|-------|---------|
| 1–3 | **Act Now** — directly accelerates current build or client pipeline |
| 4–6 | **Watch Later** — relevant to stack/niche but no immediate action needed |
| 7–10 | **Ignore** — interesting but off-mission; no path to revenue in 30 days |

**Auto-assign drift 8–10 if ANY of these are true:**
- Requires learning a new platform not in James's stack
- Adds >$20/month in new tool cost
- No direct path to a paying result within 30 days
- It's a general AI capability demo with no workflow integration
- It's a large-model announcement (GPT-5, Claude 4, Gemini Ultra) with no Apps Script/webhook integration story

**Auto-assign drift 1–3 if ANY of these are true:**
- Directly improves Apps Script, Twilio, Slack, or Google Workspace workflows
- Reduces time on the Quality Terps pipeline or a similar client deliverable
- Has a free tier or fits within $150/month budget and ships in a weekend
- Helps with outreach, proposal generation, or client conversion for LocalPro Labs

### Output Format

```
## Signal Scan Results

### Act Now (Drift 1–3)
| Item | Score | Why It Matters to James |
|------|-------|--------------------------|
| [item] | [1–3] | [one-line, specific to his stack/mission] |

### Watch Later (Drift 4–6)
| Item | Score | Notes |
|------|-------|-------|
| [item] | [4–6] | [one-line on what to watch for] |

### Ignore (Drift 7–10)
| Item | Score | Why |
|------|-------|-----|
| [item] | [7–10] | [one-line dismissal, no guilt] |

**Time saved:** ~[X] hrs of research avoided.
```

---

## Investment Drill Down

For a single item, run the three-question why-layer before issuing a verdict.

### The 3 Questions

**Q1 — Fear or mission?**
Is the interest coming from FOMO / anxiety about falling behind, or is there a specific deliverable this unblocks? Fear-based = high drift. Mission-aligned = must pass Q2.

**Q2 — Client or result attached?**
Can you name a specific client, proposal, or pipeline stage this improves? If the answer is "maybe someday" or "for a future client" — it's drift. Must name Quality Terps, BrakeJamesATL, or a named prospect.

**Q3 — Wait for hype to settle?**
Is this in the first 2 weeks of launch? Is the pricing/API unstable? Is there a free tier or tutorial ecosystem yet? If the tool is brand new with no Apps Script integration story, default to Watch Later — let the community build the glue first.

### Verdict Format

```
## Investment Drill Down: [Item Name]

**Q1 — Fear or mission?** [Fear-based / Mission-aligned] — [1 sentence]
**Q2 — Client or result attached?** [Yes: [name] / No] — [1 sentence]
**Q3 — Wait for hype to settle?** [Wait / Proceed] — [1 sentence]

**Verdict:** [YES, invest time / NO, ignore / REVISIT in [timeframe]]

**Rationale:** [1 paragraph — direct, no hedging. Names the specific opportunity cost
if James spends time here. References what he should be doing instead if verdict is NO.]
```

---

## Avoidance Check

**Run automatically** if James has submitted 3+ AI research questions in a row without mentioning a client, a build task, or a concrete deliverable.

**Pattern triggers:**
- Multiple "should I learn X" questions in one session
- Researching tools for a use case with no active client attached
- Asking about AI capabilities without a specific workflow in mind
- Comparing tools he already has working alternatives for

### Avoidance Flag Format

```
⚠️ AVOIDANCE CHECK

You've asked [N] research questions this session with no mention of Quality Terps,
BrakeJamesATL, or a named prospect. This is a known pattern.

**The hard question:** What task are you avoiding right now?

Common answers:
- Cold outreach to a new LocalPro Labs prospect
- Following up on a stalled proposal
- Finishing a deliverable for Quality Terps
- Making a sales call

**Redirect:** Close this tab. Open your CRM or inbox. Do the one thing
that could result in money changing hands in the next 7 days.

AI research is not building. Research resumes after that task is done.
```

---

## Scoring Quick Reference

| Signal | Auto Drift |
|--------|------------|
| New LLM model announcement | 9 |
| AI coding assistant (no Apps Script plugin) | 7 |
| Zapier/Make new AI module | 3 |
| Apps Script library or addon | 1 |
| Twilio feature update | 2 |
| Google Workspace AI feature | 2 |
| No-code AI platform (new) | 6 |
| AI agent framework (LangChain, CrewAI, etc.) | 8 |
| Local AI / self-hosted model | 9 |
| Slack bot or workflow builder | 3 |
| Firebase/Firestore update | 2 |
| AI video/content creation tools | 8 |
| AI research paper | 10 |
| Prompt engineering course | 7 |
| Outreach or CRM automation tool | 2 |

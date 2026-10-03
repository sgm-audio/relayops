# RelayOps — Project TODOs

Status legend: `[ ]` pending · `[~]` in progress · `[x]` done · `[!]` blocked
Last updated: 2026-08-01

---

## Phase 0 — Scaffold + MVP live on Next.js (target: this week)

- [~] **0.1** git init + monorepo scaffold (pnpm + Turborepo + directory structure)
  - [x] `git init` — repo initialized
  - [x] `.gitignore` written
  - [x] `turbo.json` written
  - [x] root `package.json` written
  - [x] root `tsconfig.json` written
  - [x] `pnpm-workspace.yaml` written
  - [ ] `apps/web` Next.js package scaffold
  - [ ] `packages/shared` scaffold
  - [ ] `packages/db` scaffold
  - [ ] `packages/email`, `packages/payments`, `packages/signatures` placeholders
  - [ ] move `docs/` into monorepo layout
  - [ ] baseline commit

- [ ] **0.2** Migrate MVP into Next.js App Router (client component, no behavior change)
  - [ ] `apps/web/app/(mvp)/page.tsx` mounts existing `app.js` logic
  - [ ] `styles.css` imported
  - [ ] localStorage state behavior unchanged
  - [ ] "MVP — simulated actions" banner added
  - [ ] `robots.txt` disallow all + noindex meta

- [ ] **0.3** Supabase Auth gating
  - [ ] Provision Supabase project in `ca-central-1` (confirm region support)
  - [ ] `middleware.ts` session gate (all routes except `/login`, `/auth/callback`)
  - [ ] `/login` page (email/password or magic-link)
  - [ ] `/auth/callback` route
  - [ ] MFA enabled at Supabase level

- [ ] **0.4** Vercel deploy
  - [ ] Connect repo to Vercel (build: `pnpm build`, output: `apps/web`)
  - [ ] Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] Production URL confirmed non-guessable

- [ ] **0.5** Pilot instrumentation
  - [ ] Keep existing CSV export
  - [ ] Add gate-block events + outreach decisions export
  - [ ] Mark localStorage exports as "MVP — not evidence"

- [ ] **0.6** Verify Phase 0
  - [ ] Vercel URL loads behind Supabase Auth (unauthenticated → `/login`)
  - [ ] localStorage state, reset, CSV export behave identically to static MVP
  - [ ] Banner visible; no real action possible
  - [ ] Pilot can run `docs/08` §2 loop on sample data

---

## Phase B1 — Foundation slice (weeks 1–3)

- [ ] **B1.1** Supabase schema (`packages/db`)
  - [ ] Tables: `organizations`, `users`, `memberships`, `companies`, `contacts`, `audit_events` (append-only)
  - [ ] RLS policies from day one (tenant isolation at DB level)
  - [ ] Drizzle migrations + typed client
- [ ] **B1.2** Read-path migration (MVP read-only views fetch from Supabase)
- [ ] **B1.3** `packages/shared` — Zod schemas + `evaluateStartGate` pure function (unit-testable)
- [ ] **Gate B1** — tenant-isolation tests pass: user A cannot read user B's rows (RLS)

---

## Phase B2 — Consent + suppression (weeks 3–5)

- [ ] `consent_evidence` (versioned, immutable) + `suppression_entries` tables
- [ ] Outreach review queue — human approval for ambiguous consent
- [ ] Suppression check at job creation AND immediately before send
- [ ] Postmark transactional email (`packages/email`)
- [ ] **Gate B2** — `docs/08` §5.2 scenarios pass

---

## Phase B3 — Payments + start-gate (weeks 5–8)

- [ ] `engagements`, `agreements`, `invoices`, `payments`, `start_gate_checks` tables
- [ ] Stripe Invoices (50/25/25) + signed webhook route handler (`07` §6, 11-step sequence)
- [ ] `authorizeProductionAction` wired into all protected transitions
- [ ] `evaluateStartGate` reads real evidence rows (not four booleans)
- [ ] **Gate B3** — `docs/08` §5.1 scenarios pass

---

## Phase B4 — Portal + files + comms (weeks 8–10)

- [ ] Client portal route group (client-role Supabase auth)
- [ ] `files` via Supabase Storage (encrypted, access-logged)
- [ ] `interactions`/`messages`, transactional email with suppression propagation
- [ ] DocuSign integration + signed webhook route handler
- [ ] **Gate B4** — `docs/08` §5.3–5.4 pass

---

## Phase B5 — Delivery + handoff (weeks 10–12)

- [ ] `projects`, `milestones`, `tasks` (progress = weighted milestones)
- [ ] `approvals`, `change_orders`, `handoffs`
- [ ] Weekly digest worker (human review before send)
- [ ] **Gate B5** — `docs/08` §5.5 + `docs/07` §13 pass

---

## Phase B6 — Reliability + security acceptance (parallel, completes by B5)

- [ ] Idempotency keys (webhooks, sends, invoices, signatures, project generation)
- [ ] Transactional outbox + retry/backoff + DLQ + alerts
- [ ] Point-in-time recovery + periodic restore test
- [ ] Prod/staging separation (no real sends/payments from test)
- [ ] Feature flags (new automations, Audio Software)
- [ ] Sentry + structured logs + uptime checks
- [ ] Threat model + privacy impact review + pentest
- [ ] **Gate B6** — `docs/07` §11 acceptance criteria signed off

---

## Phase B7 — Parallel reconciliation + cutover (`07` §12.8–9)

- [ ] Run MVP localStorage + Supabase in parallel (payments, signatures, suppressions, handoffs)
- [ ] Reconcile differences
- [ ] Decommission localStorage writes; document browser-record deletion

---

## Cross-cutting (continuous)

- [ ] Track Canadian legal sign-off on Terms/SOW/privacy (Gate A prerequisite, `08` §7)
- [ ] Audio Software stays in roadmap phase 0 until Gate B — lane disabled in MVP, feature-flagged in prod
- [ ] Produce one-page pilot decision record at end of pilot (`08` §10)
- [ ] Gate A/B/C decisions at their respective points
- [ ] Update this file as phases complete

---

## Verification sources

- `docs/07_PRODUCTION_ARCHITECTURE.md` — architecture, entities, webhook sequence, §13 definition of production-ready
- `docs/08_TEST_PLAN_AND_AUDIO_ROADMAP.md` — pilot targets, scorecard, §5 test scenarios, §7 decision gates
- `README.md` — MVP boundary, commercial policy, production integration plan

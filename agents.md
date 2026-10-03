# RelayOps — Agent Operations

**Squad:** Code Squad Leader + specialist sub-agents.
**Work tracker:** [`TODOS.md`](./TODOS.md) — the single source of truth for pending, in-progress, and completed work. Read it before starting any task; update it after each completion.

---

## Squad members

| Agent | Role | When to route |
|---|---|---|
| **@code-writer** | Code generation from specifications and requirements | Implementation of any phase/todo item |
| **@code-reviewer** | Quality, security, correctness, maintainability review | Before landing any branch or PR |
| **@bug-hunter** | Root cause analysis, debugging, concrete fixes | Any failure, crash, or unexpected behavior |
| **@system-architect** | Architecture design, tech choices, component diagrams | Design work; architecture changes from `docs/07` |
| **@test-engineer** | Unit, integration, e2e test generation | Gate scenarios in `docs/08` §5; any test coverage |

## Routing logic

| User intent | Route to |
|---|---|
| "Write code for X", "Implement Y" | @code-writer |
| "Review this code", "Check this PR" | @code-reviewer |
| "Fix this bug", "Debug X" | @bug-hunter |
| "Design a system", "Architecture for X" | @system-architect |
| "Write tests", "Add test coverage" | @test-engineer |

## Full pipeline (complex tasks only)

1. @system-architect → design
2. @code-writer → implement
3. @code-reviewer → review
4. @bug-hunter → find remaining issues
5. @code-writer → apply fixes
6. @test-engineer → generate tests

For most work, route to the single most appropriate specialist.

---

## Project context

**What this is:** RelayOps — client acquisition + delivery operations system for a solo web/Shopify/Amazon agency in Vancouver, with Audio Software gated behind validation. Currently a browser-only MVP (`localStorage`, simulated actions) being productionized per `docs/07_PRODUCTION_ARCHITECTURE.md`.

**Production stack (locked decisions):**
- Vercel + Next.js (App Router)
- Supabase Auth + Postgres (`ca-central-1` region) + Storage
- Drizzle ORM
- Stripe Invoices (50/25/25 payment schedule)
- DocuSign
- Postmark (transactional email)
- pnpm + Turborepo monorepo

**Repo layout:**
```
relayops/
├── apps/web/          # Next.js App Router
├── packages/
│   ├── db/            # Drizzle schema + migrations + typed client
│   ├── shared/        # Zod schemas, evaluateStartGate, types
│   ├── email/         # Postmark (B2)
│   ├── payments/      # Stripe (B3)
│   └── signatures/    # DocuSign (B4)
├── docs/              # 8 operating documents (SOPs, architecture, test plan)
├── TODOS.md           # Work tracker ← read first
└── README.md
```

## Non-negotiable invariants (from docs — never violated)

1. **Deposit gate is server-enforced.** `evaluateStartGate` derives from evidence rows, never four editable booleans (`07` §5). UI disabling is UX only.
2. **Spoofed payment cannot clear the gate.** Stripe webhook handler verifies signature, inserts idempotently, re-evaluates gate in one transaction (`07` §6).
3. **Unsubscribe stops all later sends.** Suppression checked at job creation AND immediately before send (`07` §4).
4. **No cross-tenant access.** RLS from day one, tested at B1 gate (`07` §11).
5. **Demo consent categories are not imported as evidence** (`07` §12.3).
6. **Audio Software stays gated** behind Gate B/C (`08` §7). Lane disabled in MVP, feature-flagged in prod.
7. **No real payments/signatures/email from test environments** (`07` §10).

## Verification before completion

- Every gate (B1–B6) is a **test run, not a claim** — the referenced scenario suite must pass.
- Phase-level verification checklists live in `TODOS.md`.
- Never mark a todo `[x]` without running its verification and reading the output.

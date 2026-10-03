# Production Architecture and Automation Specification

**Status:** Proposed after MVP validation  
**Version:** 1.0

## 1. Objective

Turn the browser MVP into a secure, multi-user system that automates administration while preserving human accountability for outreach, scope, payment verification, legal acceptance, client decisions, and handoff.

## 2. Recommended logical architecture

```text
Staff web app ─┐
Client portal ─┼─> Application/API ─> PostgreSQL
Public forms ──┘         │              ├─ audit_events (append-only)
                         │              └─ transactional outbox
                         ├─> Durable job queue / scheduler
                         ├─> Payment provider (signed webhooks)
                         ├─> E-sign provider (signed webhooks)
                         ├─> Email provider (events + suppression)
                         ├─> Calendar provider
                         └─> Encrypted object storage
```

A single deployable application with background workers is sufficient initially. Do not introduce microservices until measured load/team boundaries justify them.

## 3. Technology baseline

One practical implementation:

- Next.js + TypeScript;
- PostgreSQL;
- managed authentication with MFA;
- a TypeScript ORM with migrations;
- durable queue/scheduler backed by managed infrastructure;
- Stripe Invoices or Checkout;
- DocuSign/Dropbox Sign/equivalent;
- Postmark/SendGrid for transactional email;
- a marketing system configured for CASL controls only if needed;
- S3-compatible encrypted object storage;
- error tracking, structured logs, metrics, tracing, and uptime checks.

Vendor selection follows privacy, data-residency, budget, tax, security, and counsel review. Avoid building card handling, identity, e-signature, or bulk-email infrastructure in-house.

## 4. Core entities

### organizations

- `id`, `legal_name`, `display_name`, `jurisdiction`, `tax_ids`
- `mailing_address`, `contact_email`, `contact_phone`
- `privacy_contact`, `timezone`, `currency`
- `created_at`, `updated_at`

### users / memberships

- `users`: identity-provider ID, name, email, MFA state
- `memberships`: organization, user, role, status, joined/left timestamps
- roles: admin, sales, operations, delivery, compliance, client

### companies / contacts

- company identity, territory, service context
- contact identity, role, normalized communication addresses
- `marketing_status`: unknown, approved, suppressed, transactional_only
- do not merge contact records in a way that loses consent/suppression history

### consent_evidence

- `contact_id`, `channel`, `basis_type`, `status`
- purpose/scope, source type, source URL/reference
- wording/version for express consent
- obtained/observed timestamp and recorder
- relationship/event facts and calculated review/expiry date
- evidence object ID/hash
- reviewer, reviewed timestamp, decision/rationale
- withdrawn timestamp/source/reason

Consent evidence is immutable by version: corrections create a new record and supersede the prior one.

### suppression_entries

- organization/sender identity scope
- channel and normalized address hash/value
- reason, source, effective time
- propagation status by connected vendor
- created by event/user

A suppression check occurs both when a job is created and immediately before send.

### leads / opportunities

- company, primary contact, service lane, source
- stage, owner, estimated value, probability
- need, authority, budget, timing, next action
- consent evidence link and outreach eligibility decision
- lost/decline reason

### engagements

- type: discovery or implementation
- service lane and client organization
- status and owner
- scope document version and acceptance criteria version
- commercial totals, currency, taxes
- start and target dates

### agreements / signatures

- document type/version/hash, rendered immutable object
- signer identity/authority/email
- e-sign provider envelope ID and status events
- completed timestamp and final signed object

### invoices / payments

- provider/customer/invoice/payment IDs
- purpose: discovery, deposit, milestone, final, change, support
- subtotal, tax, total, currency
- status: drafted, issued, pending, cleared, failed, refunded, disputed
- provider event ID, settlement timestamp

Never accept browser input as proof that money cleared.

### start_gate_checks

- engagement ID
- `discovery_complete`
- `scope_approved`
- `agreement_signed`
- `deposit_cleared`
- evidence references for each
- evaluated timestamp, result, evaluator version

Do not store only four editable booleans. Derive each result from evidence and cache the evaluation.

### projects / milestones / tasks

- project links to one approved implementation engagement/version
- milestone acceptance criteria and invoice trigger
- task scope link: SOW item, defect, change order, or internal management
- progress is calculated from weighted milestones, not free-form percentage only

### interactions / messages

- inbound/outbound channel, participants, template/version
- rendered subject/body hash and provider ID
- consent/suppression decision ID
- approval user/time
- send/delivery/bounce/reply/unsubscribe events

### files

- tenant/client/engagement/project ownership
- storage key, filename, media type, size, hash
- classification, retention date, uploader
- access policy and download events

### approvals / decisions / change_orders

Versioned requested item, impact, amount, schedule, acceptance criteria, authorized approver, signature/payment status.

### handoffs

- entry-check status;
- deliverable/account/file/training inventories;
- known limitation versions;
- Client acknowledgment/signature;
- access removal events;
- warranty dates;
- archive/deletion status.

### audit_events

Append-only:

- event ID, organization, actor/service, action;
- target type/ID;
- previous/new value or change reference;
- request/correlation/provider event IDs;
- IP/user agent where appropriate;
- timestamp and integrity strategy.

Restrict audit payloads so they do not become an uncontrolled copy of sensitive data.

## 5. Server-enforced work-start policy

Pseudo-code:

```ts
async function authorizeProductionAction(user, engagementId, action) {
  requireRole(user, ['operations', 'delivery', 'admin']);

  const evidence = await loadGateEvidence(engagementId);
  const gate = evaluateStartGate(evidence);

  await appendAuditEvent({
    action: 'START_GATE_EVALUATED',
    targetId: engagementId,
    result: gate.result,
    missing: gate.missing,
    evidenceVersions: gate.versions,
  });

  if (!gate.passed) {
    throw new ForbiddenError('WORK_START_BLOCKED', { missing: gate.missing });
  }

  return authorizeScopedAction(user, engagementId, action);
}
```

Call this policy on:

- transition to Active Delivery;
- production project creation;
- production task timer start;
- production account/access request;
- deploy/configuration job;
- transfer of Client materials to delivery users.

UI disabling is useful but never the enforcement boundary.

## 6. Payment webhook sequence

1. Receive webhook through TLS.
2. Read raw request body.
3. Verify provider signature and allowed timestamp.
4. Reject invalid/replayed events.
5. Insert provider event ID under a unique constraint.
6. Translate event into internal invoice/payment state.
7. On a cleared/settled event, attach evidence to the matching purpose.
8. Re-evaluate start gate.
9. Write audit event and transactional-outbox event in the same database transaction.
10. Worker sends receipt/onboarding notification idempotently.
11. Alert Operations if amount, currency, payer, invoice, dispute, or mapping is unexpected.

Refund/dispute events re-evaluate risk and alert Operations; they do not silently rewrite historical gate evidence.

## 7. Key workflows

### 7.1 Inbound lead

`Form submitted → contact/company dedupe → source/evidence record → sales task → human qualification → paid-discovery offer`

Marketing opt-in remains separate from a service request.

### 7.2 Approved outreach

`Candidate record → evidence classifier → human review → suppression check → render template → human send approval → final suppression check → provider send → event ingestion → stop conditions`

Do not let AI decide that a legal basis exists. AI may suggest relevance/personalization only from approved inputs, with a human approving the final message.

### 7.3 Discovery

`SOW created → e-sign complete → invoice cleared → questionnaire → kickoff → review → brief/finding delivery → completion → implementation proposal`

### 7.4 Implementation start

`scope version approved + Terms/SOW signed + discovery complete + deposit cleared → gate passes → project generated → kickoff/portal invitations`

### 7.5 Weekly client digest

Worker compiles structured project events. Delivery lead reviews/edits. Approved digest publishes to portal and sends a notification. No confidential cross-client data enters the prompt or email.

### 7.6 Change order

`request → impact assessment → versioned change document → Client approval/signature → payment if required → baseline update → tasks unlocked`

### 7.7 Handoff

`progress/Delivery trigger → readiness checklist → QA/acceptance → final invoice clearance → package and training → Client acknowledgment → access removal → warranty timer → retention jobs`

## 8. API/action outline

Examples:

- `POST /leads` — create lead with evidence stub
- `POST /contacts/:id/consent-evidence` — create evidence version
- `POST /outreach/:id/review` — compliance/human decision
- `POST /messages/:id/approve` — final approval with rendered hash
- `POST /suppressions` — immediate suppression and propagation job
- `POST /discovery/:id/send` — issue e-sign + invoice
- `POST /webhooks/payments` — raw signed provider event
- `POST /webhooks/signatures` — signed provider event
- `POST /engagements/:id/evaluate-start-gate`
- `POST /engagements/:id/start` — server policy-protected
- `POST /change-orders/:id/approve`
- `POST /handoffs/:id/acknowledge`
- `GET /audit-events` — privileged filtered export

Use commands/actions rather than generic unrestricted record updates for protected transitions.

## 9. Authorization matrix

| Action | Admin | Sales | Operations | Delivery | Compliance | Client |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Create lead/evidence | ✓ | ✓ | ✓ | — | ✓ | Own form |
| Approve ambiguous outreach | ✓ | — | — | — | ✓ | — |
| Send approved outreach | ✓ | ✓ | — | — | ✓ | — |
| Verify manual payment | ✓ | — | ✓ | — | View | — |
| Change protected gate policy | ✓ + dual approval | — | — | — | Approve | — |
| Access pre-gate production credentials | Exception only | — | Exception only | — | Audit | Own |
| Create delivery work | ✓ | — | ✓ | ✓ after gate | — | — |
| Approve scope/change | — | — | — | — | — | Authorized signer |
| Acknowledge handoff | — | — | — | — | — | Authorized signer |
| View audit | ✓ | Own | ✓ | Own project | ✓ | Own actions |

## 10. Reliability requirements

- Idempotency keys for webhooks, sends, invoices, signatures, and project generation.
- Database transactions plus transactional outbox.
- Retry with bounded exponential backoff and dead-letter queue.
- Alert on dead-letter, invalid signature, suppression propagation failure, payment mismatch, failed backup, and privileged access.
- Point-in-time database recovery and periodic restore test.
- Object-versioning/lifecycle where appropriate.
- Production/staging separation and no real sends/payments from test.
- Feature flags for new automations and Audio Software.

## 11. Security/privacy acceptance criteria

Before launch:

- threat model and privacy impact review completed;
- tenant-isolation tests pass;
- object-level authorization tests pass;
- MFA and role restrictions verified;
- payment/signature/email webhook validation tested;
- suppression race/retry tests pass;
- sensitive data is absent from logs/errors/analytics;
- backups restore successfully;
- retention/deletion jobs tested;
- dependency and penetration review completed proportionate to risk;
- vendor inventory/contracts approved;
- incident runbook exercised.

## 12. Migration from this MVP

1. Freeze the operating vocabulary and stage definitions after pilot feedback.
2. Build schema and authentication.
3. Import only required, cleaned data; do not treat demo consent categories as evidence.
4. Implement payment/signature webhooks and derived start gate.
5. Implement portal and file tenancy.
6. Implement transactional communications.
7. Add outreach only after CASL workflow/legal review.
8. Run parallel reconciliation for payments, signatures, suppressions, and handoffs.
9. Decommission local/browser records and document deletion.

## 13. Definition of production-ready

The system is production-ready only when it can prove, under test:

- no production action occurs before all start controls pass;
- a spoofed/pending payment cannot clear the gate;
- an unsubscribe prevents every later automated send;
- users cannot view another client's data;
- signed scope/terms cannot be silently replaced;
- retries do not duplicate payments, messages, projects, or handoffs;
- access is removed and records follow retention at closeout;
- operators can reconstruct a protected decision from audit evidence.

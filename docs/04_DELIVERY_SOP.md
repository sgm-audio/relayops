# SOP — Sales-to-Delivery Operations

**Owner:** Operations Lead  
**Version:** 1.0  
**Applies to:** Web Development, Shopify, and Amazon engagements

## 1. Purpose

Create a repeatable, profitable, and auditable flow from qualified opportunity through paid discovery, implementation, acceptance, and handoff.

## 2. Core policy

> **No production work begins until paid discovery is complete, scope is approved, terms are signed, and the implementation deposit has cleared.**

A verbal promise, screenshot, pending transfer, scheduled payment, purchase-order request, or unsigned proposal does not clear the gate. In production, payment status must come from a verified payment-provider webhook or a dual-reviewed bank reconciliation entry.

## 3. Stage definitions

| Stage | Entry criteria | Exit criteria | Owner |
|---|---|---|---|
| New | Record created with source | Basis/relevance reviewed | Sales |
| Contacted | Approved outreach sent or inbound reply received | Reply/qualification result recorded | Sales |
| Discovery proposed | Fit confirmed | Discovery SOW signed and paid | Sales + Operations |
| Discovery active | Cleared discovery payment and inputs | Findings delivered | Strategist |
| Proposal | Discovery complete | Scope approved and agreement signed | Sales + Delivery lead |
| Deposit gate | Signed implementation package | Cleared deposit and all controls verified | Operations |
| Active delivery | Four start controls pass | Acceptance criteria pass | Delivery lead |
| Handoff | Acceptance + final invoice condition | Package transferred and acknowledged | Operations |
| Warranty/closed | Handoff complete | Warranty ends/archive complete | Operations |

## 4. Responsibility matrix

| Activity | Sales | Operations | Delivery lead | Client | Privacy/Compliance |
|---|:---:|:---:|:---:|:---:|:---:|
| Consent evidence | R | C | — | — | A |
| Qualification | R/A | C | C | C | — |
| Discovery SOW | R | A | C | C | — |
| Payment verification | — | R/A | View | Pay | — |
| Scope/acceptance criteria | C | C | R/A | Approve | — |
| Contract signature | R | A | View | Sign | — |
| Gate clearance | — | R/A | View | — | Audit |
| Delivery | — | C | R/A | C | — |
| Change control | C | A | R | Approve/pay | — |
| Handoff | — | A | R | Accept | — |
| Privacy/security incident | C | C | C | C | R/A |

R = Responsible, A = Accountable, C = Consulted.

## 5. Procedure A — Intake and qualification

### Required fields

- source and outreach/consent evidence;
- legal/business name, contact, role, email, and territory;
- requested service lane;
- desired outcome and why now;
- current platform/context;
- budget range;
- authority and other stakeholders;
- target date and reason;
- material integrations, migration, compliance, or platform risks;
- next action, owner, and due date.

### Fit criteria

Proceed when:

- the request fits Web Development, Shopify, or Amazon;
- the prospect has a plausible business outcome and decision process;
- budget/timing is compatible with a paid discovery engagement;
- the work is lawful, ethical, and not dependent on prohibited tactics; and
- the Agency has or can obtain the required capability/capacity.

Decline or refer when there is no service fit, no decision authority/path, abusive conduct, unlawful/deceptive request, impossible guarantee, unacceptable security/privacy risk, or persistent refusal of paid discovery/deposit policy.

### Exit evidence

- qualification note;
- discovery tier and fee;
- decision: propose discovery / nurture with basis / refer / decline / suppress.

## 6. Procedure B — Sell and run paid discovery

1. Select discovery tier based on complexity.
2. Generate the Paid Discovery SOW from the approved template.
3. Send SOW and invoice through approved systems.
4. Keep status `DISCOVERY_PROPOSED` until both signature and cleared payment events exist.
5. When paid, send receipt, questionnaire, access instructions, and kickoff options.
6. Use least-privilege/read-only access where practical.
7. Conduct kickoff and record decisions, assumptions, risks, and owners.
8. Complete service-lane review.
9. Draft discovery brief, requirements, exclusions, dependencies, acceptance criteria, estimate, and phased recommendation.
10. Delivery lead peer-reviews before presentation.
11. Present findings; collect one consolidated clarification round.
12. Mark discovery complete and deliver the implementation proposal.

### Discovery quality gate

Do not issue implementation scope unless it identifies:

- deliverables and quantities;
- explicit exclusions;
- assumptions and Client dependencies;
- third-party dependencies and fees;
- acceptance criteria;
- schedule/milestones;
- change-control method;
- handoff outputs;
- warranty/support boundary; and
- price/payment schedule.

## 7. Procedure C — Contract and deposit gate

### Required controls

Operations verifies each item independently:

#### Control 1: Paid discovery complete

Evidence:

- cleared payment event;
- discovery SOW;
- final discovery brief/findings delivery; and
- recorded completion date.

#### Control 2: Scope approved

Evidence:

- final SOW version;
- deliverables/exclusions/assumptions;
- acceptance criteria;
- Client approval by an authorized representative; and
- version hash or immutable copy.

#### Control 3: Terms signed

Evidence:

- completed signature event;
- signer identity/authority;
- timestamp and document version; and
- completed Agency signature if required.

#### Control 4: Deposit cleared

Evidence:

- successful, settled payment event or reconciled bank receipt;
- invoice number, amount, currency, taxes, and payer;
- no unresolved dispute/chargeback indicator; and
- Operations verification.

### Hard-lock behaviour

- Delivery users cannot create production tasks, start timers, deploy, or obtain production credentials before clearance.
- A blocked attempt creates an audit event and tells the user which control is incomplete.
- Only Operations or Administrator can verify a manual bank payment.
- Administrators may correct evidence but cannot silently bypass the controls; any exception requires a signed exception record from the Agency owner and counsel/finance review where applicable.

### Start confirmation

When all controls pass:

1. set stage to `ACTIVE_DELIVERY`;
2. assign delivery owner and production capacity;
3. create project from the approved SOW version;
4. send start confirmation and kickoff options;
5. issue project portal access;
6. publish milestone and communication plan.

## 8. Procedure D — Kickoff

Kickoff agenda:

1. introductions and decision authority;
2. desired outcome and success measures;
3. confirmed scope and explicit exclusions;
4. timeline, milestones, review windows, and dependencies;
5. communication channels and weekly digest;
6. access/security procedure;
7. change-request process;
8. acceptance and handoff process;
9. risks, open decisions, and immediate next actions.

Within one business day, publish:

- notes and decisions;
- action/owner/date table;
- milestone plan;
- approved SOW link;
- risk register; and
- next update date.

## 9. Procedure E — Delivery control

### Work breakdown

Every task must link to an approved SOW deliverable, defect, change order, or internal project-management activity. A task without a scope link is reviewed before work.

### Weekly digest

Send on the same day each week:

- **Completed:** demonstrable outputs, not activity alone.
- **Next:** work planned before the next digest.
- **Decisions:** exact question, recommended option, decision owner, due date.
- **Client actions:** content, access, approval, test, or payment required.
- **Risks/blockers:** impact and mitigation.
- **Scope/budget:** on track, change pending, or issue.
- **Milestone:** current completion and next review date.

### Decision log

Record date, decision, alternatives, rationale, approver, affected SOW item, and artifact link.

### Risk log

Record probability, impact, owner, response, trigger, due date, and status. Escalate any risk that may change launch date, fee, legal/privacy/security posture, platform account health, or acceptance criteria.

## 10. Procedure F — Change control

A change includes:

- new or modified feature/deliverable;
- quantity beyond SOW allowance;
- changed platform/integration;
- changed acceptance criteria;
- rework caused by changed Client direction;
- compressed timing/rush work;
- new compliance/security requirement; or
- dependency information materially different from discovery assumptions.

Process:

1. stop affected unapproved work;
2. record request and reason;
3. assess scope, schedule, fee, risk, and handoff effect;
4. issue change order with revised acceptance criteria;
5. collect authorization and any required payment;
6. update baseline and communicate the new plan;
7. resume changed work.

Small changes are not “free” merely because they take little production time; assessment, testing, management, and risk also count. The Delivery lead may use an SOW-defined tolerance only within its exact limits.

## 11. Procedure G — Milestone invoice

At the staging/draft milestone:

1. verify listed milestone outputs are reviewable;
2. run internal quality checks;
3. deliver review instructions and acceptance criteria;
4. issue the 25% milestone invoice (or SOW amount);
5. record Client feedback and classify defect vs. change;
6. pause dependent work if the invoice becomes overdue under the agreement.

## 12. Procedure H — Quality assurance

### Universal checks

- approved scope and acceptance criteria traceability;
- correct environment/account;
- no exposed secrets or unnecessary access;
- content/legal approvals recorded;
- error, permission, empty, loading, and failure states;
- backup/rollback or export plan;
- analytics/measurement validation where included;
- responsive/browser/device checks where included;
- documentation and owner assignment;
- known limitations recorded.

### Web Development module

- links, navigation, forms, validation, email routing;
- supported browser/device matrix;
- performance budget and image/font handling;
- accessibility target checks;
- metadata, indexing, sitemap/robots/canonicals as scoped;
- analytics/consent configuration as scoped;
- backup, deployment, DNS/redirect and rollback plan;
- CMS roles and editing workflows;
- security headers/dependency review as scoped.

### Shopify module

- store ownership and collaborator roles;
- duplicate theme/rollback point;
- products, variants, collections, inventory, customer/order migration samples;
- navigation, search/filter, cart, discount, checkout boundaries;
- payment test mode/live transition owned by Client;
- shipping, taxes, duties, Markets, currencies, languages as scoped;
- subscription/app workflows and billing;
- transactional notifications;
- domain, redirects, analytics/pixels and consent as scoped;
- staff training and app/licence map.

### Amazon module

- least-privilege user access;
- SKU/ASIN/parent-child map;
- titles, bullets, descriptions, attributes, images, A+ and store against approved content;
- claim substantiation and Client legal/policy approval;
- variation/category/file upload validation;
- case IDs and platform responses recorded;
- sample listings checked after propagation;
- account health and suppressed-listing review;
- reporting baseline/export;
- no guarantee recorded for ranking, approval, or sales.

## 13. Procedure I — Acceptance

1. Present the deliverable against each acceptance criterion.
2. Provide test instructions, supported environment, and feedback deadline.
3. Client submits one consolidated response.
4. Classify each item:
   - defect: agreed criterion materially not met;
   - clarification/documentation;
   - enhancement/change;
   - third-party/platform issue;
   - accepted/no action.
5. Correct included defects and rerun relevant tests.
6. Obtain written acceptance or apply the reviewed agreement process.
7. Issue final invoice.
8. Do not launch/transfer/handoff before cleared final payment where the SOW requires it.

## 14. Procedure J — Handoff and close

Use `05_CLIENT_HANDOFF_REQUIREMENTS.md`. Handoff is not complete until:

- entry conditions pass;
- final package is delivered;
- account ownership and access are tested;
- training is complete;
- Client signs/records acceptance of handoff and known limitations;
- warranty/support route and end date are communicated;
- Agency access is removed/downgraded;
- archive/retention actions are scheduled; and
- project retrospective is recorded.

## 15. Service levels for internal actions

| Action | Internal target |
|---|---:|
| Positive lead reply | Same business day |
| Discovery SOW/invoice after qualification | 1 business day |
| Payment webhook exception review | 1 business hour |
| Discovery kickoff after payment/input readiness | Within 3 business days |
| Material delivery blocker | Notify Client same business day |
| Weekly digest | Same scheduled weekday |
| Change estimate | 2 business days, unless complex |
| Privacy/security escalation | Same day |
| Handoff package after final clearance | 2 business days |

## 16. Audit records

Retain according to the approved schedule:

- consent and outreach evidence;
- SOW/Terms versions and signatures;
- invoices, payment events, refunds, disputes;
- gate verification events and users;
- approved scope, changes, decisions, risks, and acceptance;
- access grants/removals;
- handoff acknowledgment and warranty dates;
- incidents and corrective actions.

Audit events should be append-only and include actor, timestamp, previous value, new value, source, and correlation ID.

## 17. Exceptions

An exception record must state:

- requested exception and business reason;
- affected control and risk;
- legal/finance/security review where relevant;
- approving Agency owner;
- compensating control;
- expiry; and
- follow-up owner.

The implementation deposit/start gate should not be waived informally. A valid exception is a documented business decision, not a hidden status change.

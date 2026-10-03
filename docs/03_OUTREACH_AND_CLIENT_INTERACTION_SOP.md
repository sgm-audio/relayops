# SOP — Outreach and Client Interaction

**Owner:** Sales Operations  
**Approver:** Privacy/Compliance Owner  
**Version:** 1.0  
**Review cycle:** Quarterly and after any legal, vendor, or process change

## 1. Purpose

Create relevant, respectful, provable outreach and consistent client communication for Web Development, Shopify, and Amazon services. The process is designed to support compliance with Canada's Anti-Spam Legislation (“CASL”) and Canadian privacy obligations.

This SOP does not decide whether a specific message is lawful. Escalate uncertain cases to qualified Canadian counsel.

## 2. Non-negotiable rules

1. **No consent/basis evidence, no automated outreach.**
2. Public availability of an address alone does not authorize a message.
3. Purchased or harvested lists are not loaded into the outreach queue.
4. Every covered commercial electronic message identifies the sender, includes required contact information, and contains a no-cost unsubscribe mechanism.
5. An unsubscribe or do-not-contact request stops automation immediately and is processed without delay; the legal outside limit under CASL is 10 business days.
6. Consent, relevance, and suppression decisions are auditable.
7. Automation may prepare and queue; a human remains accountable for classification, relevance, truth, and final approval.
8. Audio Software is waitlist/research only until the roadmap release gate is passed.

## 3. Roles

| Role | Responsibility |
|---|---|
| Sales representative | Collect evidence, personalize, check relevance, approve message |
| Sales Operations | Configure sequences, monitor replies/bounces, enforce cadence limits |
| Privacy/Compliance Owner | Review ambiguous bases, audit samples, manage suppression/incidents |
| Administrator | Restrict access, preserve logs, connect approved vendors |
| Delivery lead | Receive qualified handoff only after discovery is sold |

A sales representative may not overrule a suppression record.

## 4. Required contact record

Before any outreach is queued, record:

- full name, business role, organization, and business contact address;
- service relevance and specific observed need;
- source type and source URL/document;
- date/time collected;
- consent/basis classification;
- evidence details and any expiry date;
- sender/organization on whose behalf the message will be sent;
- territory/country, if known;
- reviewer and review date for non-express bases;
- status: draft, approved, contacted, replied, suppressed, converted, archived; and
- complete message and event history.

Production should store evidence snapshots or durable references, not only a category label.

## 5. Basis classification

| Category | Minimum evidence | Automation treatment |
|---|---|---|
| Express consent | Opt-in wording, date, method, identity, purpose, source; no pre-checked box | Sendable until withdrawn, subject to message requirements |
| Inbound request/inquiry | Original request, date, requested subject, identity | Reply only within scope; marketing beyond the request needs separate analysis |
| Existing business relationship | Transaction/contract/inquiry facts and relevant dates | Time-limited basis; system calculates expiry and reviewer confirms |
| Qualifying referral | Referrer's identity and facts supporting applicable relationships | One-message workflow only after legal requirements are confirmed |
| Conspicuous publication | Source URL/snapshot, no anti-solicitation statement, recipient role, direct relevance | Manual legal/compliance review before each campaign |
| B2B relationship | Evidence of relationship between organizations and relevance to recipient organization's activities | Manual review; do not infer from one unrelated transaction/contact |
| Expressly requested quote | Original quote request and exact requested scope | Respond to request; include required information as applicable |
| No verified basis | Missing/weak evidence, purchased/harvested list, unrelated public address | Suppress; do not send a consent request by CEM unless already authorized |
| Unsubscribed/objected | Request, date, channel, affected identities/addresses | Immediate suppression across all connected systems |

The CRTC's guidance states that conspicuous publication can be relied upon only when there is no statement against receiving commercial messages and the message is relevant to the person's business role/functions. A trained reviewer must assess both conditions.

## 6. Lead-source procedures

### 6.1 Website form or newsletter

- Use an unchecked opt-in box where express marketing consent is requested.
- State the purpose, sender identity, required contact information, and that consent may be withdrawn.
- Store the exact version of the wording shown, timestamp, source page, and submission record.
- Separate service-request consent from optional marketing consent.

### 6.2 Referral

- Record the referrer's full name and relationships to both parties.
- Do not add the referred contact to an ongoing sequence by default.
- Use the legally reviewed single-message template where the referral exception applies.
- Identify the referring individual in the message as legally required.

### 6.3 Event or conversation

- Record who said what, when, where, what messages were requested, and the employee who obtained consent.
- Written follow-up confirmation is preferred when possible.
- Do not broaden a narrow request into unrelated marketing.

### 6.4 Existing client

- Transactional/project communication is separated from optional marketing.
- Record contract/transaction/inquiry dates for any implied-consent analysis.
- An unsubscribe from marketing does not block necessary, non-promotional service communications, but the distinction must be genuine and reviewed.

### 6.5 Public research

- Never use scraping/harvesting to create bulk lists.
- A human reviews the source, anti-solicitation statement, role, and message relevance.
- Retain the source and assessment.
- If conditions are uncertain, suppress the record.

## 7. Outreach quality standard

Every first message must answer:

1. Why this specific person?
2. Why is the subject relevant to their business role?
3. What useful, truthful observation or recommendation is being offered?
4. What is the low-friction next step?
5. How can the recipient identify and contact the sender?
6. How can the recipient unsubscribe at no cost?

Prohibited practices include:

- fake `Re:` or `Fwd:` subjects;
- fabricated personal familiarity, urgency, scarcity, case studies, results, or credentials;
- generic praise not tied to a real observation;
- hidden unsubscribe links or additional steps after an unsubscribe request;
- sending from misleading domains/identities;
- continuing after a reply that declines contact;
- rotating addresses to evade suppression; and
- asking for passwords or sensitive information in email.

## 8. Standard sequence

Default maximum: **three touches over 10 business days**.

| Touch | Timing | Purpose |
|---|---:|---|
| 1 | Day 0 | Relevant observation and permission-based next step |
| 2 | Day 3 | One useful recommendation, no guilt or urgency |
| 3 | Day 7–10 | Respectful close-the-loop message; end automation |

Stop immediately on reply, booking, bounce, objection, unsubscribe, legal/compliance hold, or changed consent status.

Sequence limits are operating policy, not a substitute for a valid legal basis.

## 9. Required message footer

Production templates include:

> [SENDER NAME], [TITLE]  
> [AGENCY LEGAL NAME]  
> [CURRENT MAILING ADDRESS]  
> [PHONE, EMAIL, OR WEBSITE]  
> Unsubscribe: [ONE-CLICK OR EQUIVALENT NO-COST MECHANISM]

The CRTC/ISED guidance says contact information and the unsubscribe mechanism/link must remain valid for at least 60 days after the message is sent. Do not shorten this period in system configuration.

## 10. Reply and interaction routing

| Interaction | Required action | SLA |
|---|---|---:|
| Interested/qualified | Create/update opportunity; offer fit call | Same business day |
| Requests information | Answer question; do not force calendar booking | 1 business day |
| Not now | Record requested timing; stop current sequence | Immediately |
| Not interested | Stop sequence; record objection | Immediately |
| Unsubscribe/do not contact | Suppress across all systems | Immediately; never later than legal limit |
| Complaint/legal concern | Stop; preserve evidence; notify Privacy/Compliance Owner | Same day |
| Security/privacy concern | Do not request more sensitive detail by email; open incident path | Same day |
| Auto-reply/job change | Review address and basis; do not blindly continue | Before next touch |

## 11. Qualification and paid-discovery transition

On a positive reply:

1. Confirm service fit: Web Development, Shopify, or Amazon.
2. Confirm desired outcome, authority, budget range, need, and timing.
3. Explain that the first billable step is fixed-fee paid discovery.
4. Send the discovery SOW and invoice.
5. Do not provide implementation work disguised as a “free audit.” A brief fit assessment is allowed; diagnosis and implementation planning belong in paid discovery.
6. When payment clears, create the discovery project and send the questionnaire.

## 12. Client communication cadence

### Sales/discovery

- Call confirmation immediately after booking.
- Reminder 24 hours before the call.
- Discovery SOW and invoice within one business day after qualification.
- Payment confirmation and questionnaire after verified payment.
- Findings meeting invitation by the agreed date.
- Implementation proposal normally within two business days after findings.

### Active delivery

- Kickoff only after all four work-start controls pass.
- Weekly written digest containing:
  - completed since last update;
  - next planned work;
  - decisions/approvals required;
  - blockers/risks;
  - budget/scope status; and
  - next milestone and date.
- Urgent material blocker: same business day.
- Consolidated feedback requested through the portal, not fragmented across channels.

### Handoff

- Handoff-readiness notice at approximately 90% completion.
- Final invoice before launch/transfer as required by SOW.
- Training and transfer invitation after payment verification.
- Acceptance and warranty-start confirmation immediately after handoff.

## 13. Unsubscribe and suppression procedure

1. Detect requests from link, reply, form, text, phone, complaint, or staff entry.
2. Immediately set the record to `SUPPRESSED` so no new job can queue.
3. Cancel pending jobs and remove the address from vendor audiences.
4. Propagate suppression to all connected sending identities and systems.
5. Confirm completion only when helpful and lawful; do not require login or further action.
6. Retain the minimum evidence needed to prevent re-contact and demonstrate compliance.
7. Investigate any message sent after suppression as an incident.

Production target: under 5 minutes. CASL requires effect without delay and no later than 10 business days.

## 14. Quality assurance

### Weekly

- Sample at least 10 sent messages or all messages if fewer than 10.
- Verify basis evidence, relevance, accurate claims, sender identity, contact details, unsubscribe, and suppression sync.

### Monthly

- Review expiring implied-consent records.
- Reconcile CRM, email vendor, and suppression counts.
- Check bounces, complaints, unsubscribes, reply classification, and unauthorized template edits.
- Remove stale unqualified prospects under the retention schedule.

### Quarterly

- Legal/compliance review of categories and templates.
- Vendor, access, domain, SPF/DKIM/DMARC, and breach-control review.
- Staff refresher and scenario test.
- Report outcomes to the owner.

## 15. Minimum metrics

Track quality and business outcomes together:

- records with complete basis evidence (target 100%);
- manual-review approval/rejection count;
- send, delivery, reply, positive reply, booking, discovery sale, and deposit conversion;
- unsubscribe and complaint rate;
- suppression propagation time;
- messages sent after suppression (target 0);
- paid-discovery turnaround;
- outreach-to-client conversion by source and service lane.

Do not optimize volume at the expense of evidence, relevance, or recipient choice.

## 16. Incident escalation

An incident includes missing consent evidence, misleading identity, broken unsubscribe, delayed suppression, messages after unsubscribe, vendor audience mismatch, scraped/purchased data, privacy complaint, or unauthorized access.

- Stop the affected workflow.
- Preserve message, consent, system, user, and vendor logs.
- Notify the Privacy/Compliance Owner.
- Contain the issue across all connected systems.
- Assess legal notification/reporting duties with counsel.
- Document cause, affected records, correction, and prevention.
- Resume only after written approval.

## 17. Official references

- CRTC, **Frequently Asked Questions about Canada's Anti-Spam Legislation**: https://crtc.gc.ca/eng/com500/faq500.htm
- CRTC, **Guidance on Implied Consent**: https://crtc.gc.ca/eng/com500/guide.htm
- ISED, **Getting consent to send email**: https://ised-isde.canada.ca/site/canada-anti-spam-legislation/en/getting-consent-send-email
- Office of the Privacy Commissioner of Canada, **For businesses**: https://www.priv.gc.ca/en/for-businesses/

Have counsel validate the live workflow, especially B2B communications, referrals, conspicuous publication, implied-consent expiry, cross-border messages, and purchased/vendor data.

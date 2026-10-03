# SOP — Privacy, Security, and Records

**Owner:** [PRIVACY/COMPLIANCE OWNER]  
**Security owner:** [NAME/ROLE]  
**Version:** 1.0  
**Review cycle:** At least annually and after an incident, legal change, or material vendor/system change

> This template supports Canadian operations but is not legal or security advice. Determine which federal/provincial privacy laws apply, including cross-border and employee information, with qualified counsel.

## 1. Purpose

Protect prospect, client, user, contractor, and staff information throughout outreach, sales, discovery, delivery, handoff, support, and deletion.

## 2. Operating principles

The system and team will:

1. assign accountability to a named Privacy Owner;
2. identify purposes before or at collection;
3. obtain meaningful consent where required;
4. collect only information needed for stated purposes;
5. limit use, disclosure, and retention;
6. keep information sufficiently accurate;
7. apply safeguards appropriate to sensitivity;
8. make privacy practices understandable and available;
9. support individual access/correction rights; and
10. provide a clear complaint route.

These reflect the fair information principles described by the Office of the Privacy Commissioner of Canada.

Official reference: https://www.priv.gc.ca/en/for-businesses/

## 3. Data inventory

Maintain a live register with:

- data category and fields;
- individuals affected;
- business/legal purpose;
- consent or other authority;
- source;
- system/vendor and data region;
- users/roles with access;
- disclosures and subprocessors;
- sensitivity;
- retention trigger/period;
- deletion method;
- security controls;
- responsible owner.

No new form, integration, AI feature, analytics tag, enrichment provider, or marketing audience enters production without updating the register and completing privacy/security review.

## 4. Data minimization rules

- Do not collect date of birth, government identifiers, financial account details, health information, or identity documents unless a reviewed project requirement needs them.
- Do not store card data; use a payment provider's hosted interface.
- Do not store plaintext passwords, private keys, or access tokens in CRM notes, documents, chat, or email.
- Do not copy full production data into development/test environments unless approved and protected; use synthetic/minimized data where possible.
- Do not place Client secrets or confidential information into public generative-AI services without a reviewed agreement and Client authorization.
- Remove unnecessary email attachments and local exports after transfer/use.

## 5. Access control

- Named accounts only; no shared staff identities.
- MFA required for administrators, email, payments, storage, source control, cloud, Shopify, Amazon, and password management where supported.
- Least-privilege roles aligned to Administrator, Sales, Operations, Delivery, Client, and Privacy/Compliance.
- Production access is not granted to Delivery before the commercial start gate unless required for scoped discovery and approved as read-only/least privilege.
- Quarterly access review; immediate offboarding on role end/termination.
- Privileged changes and exports are logged.
- Client portal access is tenant-scoped and tested against cross-client data exposure.

## 6. Security baseline

### Application

- TLS in transit and encryption at rest where supported;
- modern password hashing where passwords are used;
- secure session cookies, CSRF protection, input validation, output encoding, and rate limits;
- server-side authorization on every protected object/action;
- secrets in a managed secret store;
- dependency and vulnerability scanning;
- protected production branches and reviewed deployment;
- tested backups and restore procedure;
- structured security/audit events and alerts.

### Integrations/webhooks

- verify webhook signature and timestamp;
- reject replay and stale events;
- process idempotently;
- log event ID/correlation ID, not unnecessary payload data;
- retry safely through a durable queue;
- alert on repeated failure or signature mismatch;
- never accept client-submitted `payment_status=paid` as proof.

### Endpoints/devices

- supported operating system and automatic security updates;
- full-disk encryption;
- screen lock and device account separation;
- approved password manager;
- remote wipe where feasible;
- no Client exports on unmanaged devices.

## 7. Suggested retention schedule for legal review

| Record | Suggested trigger/period | Notes |
|---|---|---|
| Unqualified prospect | 12 months after last justified activity | Delete sooner on objection where no evidence needs retention |
| Consent evidence | While relied upon plus defensible compliance period | Counsel sets period; preserve withdrawal/suppression evidence |
| Suppression entry | As long as needed to prevent prohibited re-contact | Store minimum normalized identifier and event evidence |
| Discovery working notes | 12 months after completion/decline | Remove unnecessary access/secrets earlier |
| Contract/invoice/tax | Statutory/business period set by accountant/counsel | Separate legal hold rules |
| Project working files | 12 months after handoff | SOW/support may vary |
| Audit/security logs | 12–24 months based on risk | Minimize payload data |
| Credentials/tokens | Until purpose ends | Revoke/rotate; never archive plaintext |
| Backups | Documented rolling period | Deletion propagates by expiry unless hold requires otherwise |

The final schedule must account for applicable law, insurance, limitation periods, tax obligations, contracts, disputes, and legal holds.

## 8. Individual access/correction requests

1. Route every request to the Privacy Owner the same business day.
2. Log receipt, identity, scope, systems, deadline, owner, actions, and response.
3. Verify identity proportionately without collecting excessive new information.
4. Preserve responsive information and suspend conflicting deletion.
5. Search all in-scope systems, vendors, exports, and archives.
6. Review legal exceptions and third-party information with counsel.
7. Provide access/correction at little or no cost as required, in understandable form.
8. Record response and any correction/disclosure propagation.
9. Explain complaint/recourse options.

The Office of the Privacy Commissioner states that PIPEDA access requests generally require a response within 30 calendar days, subject to applicable rules and extensions. Counsel must confirm the law governing each request.

Reference: https://www.priv.gc.ca/en/privacy-topics/accessing-personal-information/obligations-for-organizations/02_05_d_54_ati_02/

## 9. Vendor review

Before onboarding a vendor, document:

- purpose and data fields;
- role and instructions;
- storage/processing locations and cross-border implications;
- subprocessors;
- access/security controls and certifications;
- incident notice terms;
- deletion/return/export capability;
- service continuity and exit plan;
- marketing/AI training use restrictions;
- contract, confidentiality, and data-processing terms;
- responsible internal owner.

Reassess annually and on material change.

## 10. Privacy/security incident response

### Detect and contain

- open an incident record immediately;
- preserve relevant logs/evidence;
- stop affected automation/integration;
- revoke/rotate affected credentials;
- isolate records/accounts/devices;
- do not make unsupported assurances.

### Assess

Record:

- what occurred and when;
- information and people affected;
- sensitivity and probable misuse/harm;
- who had/has access;
- whether encryption or other safeguards were effective;
- containment status;
- applicable contract/legal notification/reporting requirements.

### Notify and remediate

- involve qualified counsel and insurer where appropriate;
- notify regulator/individuals/clients where required;
- make notices accurate and actionable;
- fix root cause and test the correction;
- document lessons, owners, and due dates;
- review whether records of the breach must be retained.

No employee contacts affected individuals, regulator, media, or vendor publicly without the incident lead's authorization unless legally required.

## 11. Outreach-specific privacy controls

- No address harvesting or purchased lists.
- Evidence source and purpose are recorded.
- Marketing opt-in is separate from service requests.
- Suppression propagates to CRM, email, sequences, imports, and backups by expiry/process.
- Export permissions are restricted.
- Enrichment providers require review and do not create a CASL basis by themselves.
- Staff do not upload prospect lists into unapproved AI tools.

## 12. Handoff and deletion

At project close:

- transfer Client-owned assets through approved channels;
- verify Client access;
- remove/downgrade Agency access;
- rotate affected tokens;
- delete unnecessary local copies/exports;
- set archive and deletion dates;
- preserve contract, consent, payment, acceptance, and incident records under the final schedule;
- document any ongoing support purpose and access.

## 13. Training and audits

- Privacy/security onboarding before system access.
- Annual refresher and phishing/incident scenarios.
- Quarterly access and suppression audit.
- Annual data inventory, vendor, retention, restore, and incident-plan review.
- Corrective actions receive owner, due date, and verification.

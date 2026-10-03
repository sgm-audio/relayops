# Client Handoff Requirements

**Owner:** Operations Lead  
**Version:** 1.0  
**Use:** Attach the applicable checklist to every implementation SOW and project closeout

## 1. Definition of complete

A project is not “handed off” because it is live or because files were emailed. Handoff is complete only when:

1. agreed acceptance criteria have passed;
2. Client acceptance is recorded;
3. all invoices required before handoff have cleared;
4. the deliverable and ownership inventory is complete;
5. Client can access and control its accounts/assets;
6. documentation and training are delivered;
7. known limitations and warranty/support terms are acknowledged;
8. Agency access is removed or retained under a support agreement; and
9. archive, retention, and deletion actions are scheduled.

## 2. Entry gate

Operations verifies:

- [ ] Final SOW and all approved change orders are linked.
- [ ] Acceptance test result exists for every acceptance criterion.
- [ ] Open defects are resolved or expressly accepted with owner/date.
- [ ] Enhancements are moved to a separately priced backlog.
- [ ] Written Client acceptance is recorded.
- [ ] Final invoice status is `CLEARED`, not pending.
- [ ] Production backup/export and rollback information exist.
- [ ] Named Client business and technical owners are available.
- [ ] Security/privacy issues are closed or formally accepted where lawful.

If any item fails, handoff remains `BLOCKED`.

## 3. Universal handoff package

Deliver through the client portal or approved secure file service:

### 3.1 Engagement summary

- business objective;
- delivered scope and accepted change orders;
- final live URLs/accounts/assets;
- acceptance date;
- known limitations and deferred backlog;
- warranty start/end date;
- support/contact path.

### 3.2 Ownership and access inventory

For each asset/account:

| Asset | Owner | Primary admin | Agency access | Billing owner | Recovery method | Action |
|---|---|---|---|---|---|---|
| [Example] | Client | [Name] | Remove [date] | Client | Client-controlled | Confirmed |

Include domains, DNS, hosting, repositories, CMS/store/marketplace, analytics, tag managers, search tools, email/SMS, payment providers, applications, fonts, themes, stock assets, cloud storage, automation services, APIs, and monitoring.

### 3.3 Documentation

- administrator/operator guide;
- routine content or catalogue update steps;
- deployment/publishing process if included;
- backup/export and restore/rollback notes;
- integration map and data flows;
- application/licence/vendor inventory;
- monitoring and incident contacts;
- maintenance schedule;
- troubleshooting and escalation path;
- warranty claim instructions.

### 3.4 Files

- final approved design/content assets included in the SOW;
- source repository/files if transfer is included;
- configuration/export files that can safely be transferred;
- QA and acceptance report;
- redirects/migration maps where applicable;
- training recording and materials;
- final invoice/receipt and signed documents or links.

Do not place plaintext passwords, private keys, card details, personal identity documents, or unrelated personal information in the handoff archive.

## 4. Credential transfer standard

1. Prefer Client-owned accounts from project start.
2. Create named, least-privilege users; do not share a primary personal login where platform roles exist.
3. Transfer secrets through an approved password manager or platform invitation, never ordinary email, tickets, documents, or chat.
4. Client tests access while the Agency is present or before handoff acceptance.
5. Move billing and recovery methods to Client-controlled addresses/devices.
6. Rotate API keys/tokens when ownership changes or exposure is possible.
7. Remove temporary accounts and revoke unused sessions.
8. Remove or downgrade Agency access after acceptance unless a support agreement identifies the continuing purpose and term.
9. Record completion without storing the secret itself in the project log.

## 5. Web Development checklist

### Ownership and infrastructure

- [ ] Domain registrant and registrar are Client-controlled.
- [ ] DNS owner, records, and emergency/rollback plan are documented.
- [ ] Hosting/cloud owner, plan, region, billing, and support route are documented.
- [ ] SSL/TLS certificate management is documented.
- [ ] Repository ownership, default branch, protections, and deployment integration are transferred as scoped.
- [ ] Production/staging environments and environment-variable ownership are documented.
- [ ] Backup schedule, retention, restore test, and responsible owner are documented.

### Application and content

- [ ] CMS administrator and editor roles are tested.
- [ ] Content model and publishing workflow are documented.
- [ ] Forms, destinations, anti-spam controls, and notification ownership are tested.
- [ ] Analytics, search, tag manager, and consent tools are Client-controlled as scoped.
- [ ] Sitemap, robots, canonical, redirect, and indexing settings are documented.
- [ ] Supported browser/device matrix and accessibility target/results are included.
- [ ] Performance baseline and known limitations are included.
- [ ] Dependency/app/plugin update responsibility is assigned.

### Launch evidence

- [ ] Launch checklist and timestamp.
- [ ] Smoke-test result.
- [ ] Rollback/backup reference.
- [ ] Redirect validation sample.
- [ ] Monitoring/analytics validation.

## 6. Shopify checklist

### Ownership and billing

- [ ] Client is confirmed as Store Owner.
- [ ] Client-owned primary email, recovery, billing, and payment methods are confirmed.
- [ ] Agency collaborator access is reviewed and scheduled for removal/downgrade.
- [ ] Shopify plan and recurring charges are explained.
- [ ] Every app/theme/service has owner, purpose, price, billing cycle, data access, and cancellation effect.

### Store configuration

- [ ] Live theme and untouched rollback duplicate are identified.
- [ ] Theme licence and customization notes are included.
- [ ] Products, variants, collections, navigation, search/filter, customer/order migration samples are accepted as scoped.
- [ ] Markets, currencies, languages, duties, shipping, taxes, and location responsibilities are assigned.
- [ ] Payment provider/live status is Client-approved.
- [ ] Discounts, gift cards, subscriptions, wholesale/B2B, and POS workflows are tested where scoped.
- [ ] Transactional notification templates are reviewed.
- [ ] Domain and DNS ownership are confirmed.
- [ ] Analytics/pixels and consent configuration are documented as scoped.

### Training

- [ ] Products/variants/collections.
- [ ] Orders, fulfilment, returns/refunds responsibilities.
- [ ] Discounts and promotions.
- [ ] Theme/content updates and safe duplication.
- [ ] Staff roles and security.
- [ ] App billing/support and incident route.

## 7. Amazon checklist

### Account control

- [ ] Client retains its primary Seller/Vendor account credential and recovery control.
- [ ] Agency uses a named role/user where available; no personal primary credential is archived.
- [ ] User permissions are reviewed, and Agency removal date is recorded.
- [ ] Brand Registry, trademark owner/agent, marketplace, and account relationships are documented.

### Catalogue and content

- [ ] Final SKU/ASIN/parent-child mapping is provided.
- [ ] Approved titles, bullets, descriptions, attributes, images, A+ content, and store assets are inventoried.
- [ ] Client confirms substantiation and approval for product claims.
- [ ] Upload templates/files and result reports are delivered where included.
- [ ] Suppressed, stranded, incomplete, or unresolved listings are listed with owner/action.
- [ ] Relevant case IDs, status, evidence, and next action are provided.

### Operations and reporting

- [ ] Fulfilment/inventory/pricing responsibilities are assigned.
- [ ] Account Health and policy risks are acknowledged.
- [ ] Reporting baseline/export and repeat instructions are supplied.
- [ ] Advertising ownership/handoff is documented if in scope.
- [ ] Client acknowledges that Amazon controls approvals, propagation, ranking, account actions, and policy outcomes.

## 8. Training standard

Training must:

- use Client's actual environment and role;
- cover frequent tasks, high-risk actions, backup/rollback, access control, and escalation;
- identify who should not perform administrative/security changes;
- allow questions and a Client-performed access/task test;
- be recorded where permitted and agreed; and
- produce attendance, date, recording/material link, and outstanding question log.

Suggested duration:

- Web Development: 45–90 minutes;
- Shopify: 60–120 minutes depending on catalogue/operations;
- Amazon: 60–120 minutes depending on marketplace/catalogue scope.

Additional training is billable unless included in the SOW.

## 9. Known limitations and backlog

The Client receives a table containing:

| Item | Type | Impact | Workaround | Owner | Target/option |
|---|---|---|---|---|---|
| [Item] | Platform limitation / accepted defect / enhancement | [Impact] | [Workaround] | [Party] | [Date/change proposal] |

No open item is hidden to make a project appear complete. Accepted limitations are explicit and signed/approved.

## 10. Warranty and support transition

Handoff notice states:

- warranty start and end date;
- exact defect-reporting method;
- information required: URL/account, steps, expected/actual result, environment, screenshot/log, severity;
- response target, if any;
- exclusions under the agreement;
- support/maintenance option; and
- emergency route and whether it is billable.

A warranty is not an ongoing maintenance agreement. Platform/vendor updates, Client edits, enhancements, content changes, and unsupported environments are classified under the Terms/SOW.

## 11. Client acknowledgment

Client acknowledges:

- [ ] It received the listed deliverables and files.
- [ ] It can access and control the listed accounts/assets.
- [ ] It tested administrator/owner access.
- [ ] It received documentation and training.
- [ ] It accepts the known limitations/backlog.
- [ ] It understands warranty dates and support route.
- [ ] It assumes post-handoff operation, backup, billing, security, content, and platform responsibilities except under a separate support agreement.

Client legal name: __________________________  
Authorized signer: __________________________  
Title: _____________________________________  
Signature/date: _____________________________

Agency handoff owner: _______________________  
Signature/date: _____________________________

## 12. Agency closeout

Within two business days after acknowledgment:

- [ ] remove/downgrade Agency access;
- [ ] revoke temporary tokens and rotate shared secrets;
- [ ] confirm billing ownership;
- [ ] mark warranty dates and owner;
- [ ] archive signed scope, changes, acceptance, and handoff evidence;
- [ ] delete unnecessary local copies and schedule retention deletion;
- [ ] close vendors/environments not retained;
- [ ] conduct 20-minute internal retrospective;
- [ ] record estimate vs. actual, margin, changes, defects, client satisfaction, and lessons;
- [ ] request testimonial/referral only where appropriate and with a compliant communication basis.

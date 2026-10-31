# RelayOps

A front-end mock-up of the ops tool I want for outreach and client work (web dev, Shopify and Amazon services), plus the SOPs and contract templates behind it. Audio software work is held back until the services side is validated.

What's in the repo right now: a static page (`index.html`, `app.js`, `styles.css`) and the docs in `docs/`. The pnpm/Turborepo files are scaffolding for a later Next.js move. `apps/` and `packages/` don't exist yet, so `pnpm build` has nothing to build. See `TODOS.md`.

The rule it's built around:

> **No production work begins until paid discovery is complete, scope is approved, terms are signed, and the implementation deposit has cleared.**

## Open the MVP

Open `index.html` in a modern browser. No installation or build step is required.

The app stores demo changes in the browser's `localStorage`. Use **Pipeline → Reset demo** to restore the sample records.

## Included functionality

- Responsive operations dashboard
- Drag-and-drop sales pipeline
- Consent-aware outreach review queue
- Canadian CASL guardrails and suppression states
- Paid-discovery workflow
- Four-control work-start gate
- Client delivery workspace
- Client portal preview
- Automation control centre
- Internal document library
- CSV pipeline export
- Audio Software release roadmap
- Browser-local data persistence

## Important MVP boundary

It's a front-end mock-up only. There's no server. Actions such as sending email, collecting payment, scheduling meetings, electronic signing, and uploading files are simulated until production credentials and server-side services are connected.

Do **not** treat a button state or browser-local flag as proof of payment in production. The production gate must rely on signed payment-provider webhook events and an append-only audit record.

## Commercial policy implemented

### Paid discovery

- Sold as a separate fixed-fee engagement.
- Suggested range: **CAD $750–$2,500 plus applicable taxes**, selected by complexity.
- Discovery invoice is paid in full before kickoff.
- Discovery produces an implementation-ready brief and proposal; it does not include production changes.

### Implementation

Default schedule:

1. **50% deposit** after discovery and before scheduling or production.
2. **25% milestone payment** when staging/draft deliverables are presented.
3. **25% final payment** before launch, transfer, credential release, or final handoff.

Have Canadian counsel and an accountant validate deposits, cancellations, taxes, consumer-protection obligations, and invoice practices for the agency's actual province and client mix.

## Operating documents

- [`docs/01_TERMS_OF_SERVICE_TEMPLATE.md`](docs/01_TERMS_OF_SERVICE_TEMPLATE.md)
- [`docs/02_PAID_DISCOVERY_SOW.md`](docs/02_PAID_DISCOVERY_SOW.md)
- [`docs/03_OUTREACH_AND_CLIENT_INTERACTION_SOP.md`](docs/03_OUTREACH_AND_CLIENT_INTERACTION_SOP.md)
- [`docs/04_DELIVERY_SOP.md`](docs/04_DELIVERY_SOP.md)
- [`docs/05_CLIENT_HANDOFF_REQUIREMENTS.md`](docs/05_CLIENT_HANDOFF_REQUIREMENTS.md)
- [`docs/06_PRIVACY_AND_SECURITY_SOP.md`](docs/06_PRIVACY_AND_SECURITY_SOP.md)
- [`docs/07_PRODUCTION_ARCHITECTURE.md`](docs/07_PRODUCTION_ARCHITECTURE.md) (planned, not built)
- [`docs/08_TEST_PLAN_AND_AUDIO_ROADMAP.md`](docs/08_TEST_PLAN_AND_AUDIO_ROADMAP.md)

## Planned backend

Not built. This is what I'm planning to use:

- **Application:** Next.js/TypeScript or equivalent server-rendered framework
- **Database:** PostgreSQL with row-level tenancy and audit tables
- **Authentication:** Managed authentication with MFA and role-based access
- **Payments:** Stripe Checkout/Invoices plus verified webhooks
- **Electronic signature:** Dropbox Sign, DocuSign, or equivalent
- **Email:** Postmark/SendGrid for transactional messages and a CASL-capable marketing system
- **Calendar:** Google or Microsoft Graph calendar integration
- **Files:** Canadian-region object storage where feasible, encrypted and access logged
- **Jobs:** Durable job queue for reminders, webhook retries, and digest generation
- **Observability:** Error tracking, structured logs, uptime checks, and webhook alerting

The exact vendors should be selected after privacy, data-residency, tax, budget, and legal review.

## Roles

| Role | Key permissions |
|---|---|
| Administrator | Configuration, roles, integrations, protected policy changes |
| Sales | Leads, consent evidence, discovery proposals, follow-up approvals |
| Operations | Payment verification, start-gate approval, scheduling, reporting |
| Delivery | Active projects and files only after start-gate clearance |
| Client | Own portal, approvals, invoices, files, handoff acknowledgements |
| Privacy/Compliance Owner | Consent audits, suppression, privacy requests, incidents |

A standard user should not be able to disable the deposit gate or alter payment events.

## Canadian compliance references

The app is designed to support compliance; it does not itself make outreach lawful.

- CRTC, **Frequently Asked Questions about Canada's Anti-Spam Legislation**: https://crtc.gc.ca/eng/com500/faq500.htm
- CRTC, **Guidance on Implied Consent**: https://crtc.gc.ca/eng/com500/guide.htm
- ISED, **Getting consent to send email**: https://ised-isde.canada.ca/site/canada-anti-spam-legislation/en/getting-consent-send-email
- Office of the Privacy Commissioner of Canada, **For businesses**: https://www.priv.gc.ca/en/for-businesses/

Obtain legal advice before live use, particularly for implied consent, referrals, conspicuous publication, B2B exceptions, retention, provincial privacy law, and consumer contracts.

## License

MIT. See [LICENSE](LICENSE). The ToS and SOW templates in `docs/` aren't legal advice. Get them reviewed before you use them.

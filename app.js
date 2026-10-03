(() => {
  'use strict';

  const STORAGE_KEY = 'relayops-mvp-v1';
  const stages = [
    { id: 'new', label: 'New lead', color: '#8d9993' },
    { id: 'contacted', label: 'Contacted', color: '#4776aa' },
    { id: 'discovery', label: 'Discovery', color: '#8067ac' },
    { id: 'proposal', label: 'Proposal', color: '#c08a37' },
    { id: 'deposit', label: 'Deposit gate', color: '#df7540' },
    { id: 'active', label: 'Active', color: '#2d8063' }
  ];

  const serviceMeta = {
    'Web Development': { short: 'WEB', className: 'blue', color: '#4f7893' },
    'Shopify': { short: 'SHOP', className: 'green', color: '#3f866d' },
    'Amazon': { short: 'AMZ', className: 'orange', color: '#cb7140' },
    'Audio Software': { short: 'AUDIO', className: 'purple', color: '#7767a2' }
  };

  const seed = {
    currentView: 'dashboard',
    pipelineFilter: 'All',
    selectedClientId: 'l6',
    tasks: [
      { id: 't1', text: 'Review Wildwood discovery questionnaire', meta: 'Discovery · Shopify', time: '9:30 AM', done: false },
      { id: 't2', text: 'Send scope summary to Northline Supply', meta: 'Proposal · Amazon', time: '11:00 AM', done: false },
      { id: 't3', text: 'Confirm Cedar & Co. deposit receipt', meta: 'Payment gate · Web', time: '2:15 PM', done: true },
      { id: 't4', text: 'Prepare Friday client progress digest', meta: 'Automation review', time: '4:00 PM', done: false }
    ],
    leads: [
      { id: 'l1', company: 'Wildwood Goods', contact: 'Maya Chen', email: 'maya@wildwood.example', service: 'Shopify', stage: 'discovery', value: 12400, source: 'Referral', consent: 'inquiry', created: '2026-07-21', next: 'Today', color: '#3f8065', note: 'Theme rebuild and subscriptions migration.', gates: { discoveryPaid: true, scopeApproved: false, agreementSigned: false, depositPaid: false } },
      { id: 'l2', company: 'Northline Supply', contact: 'Sam Ortega', email: 'sam@northline.example', service: 'Amazon', stage: 'proposal', value: 8900, source: 'Website', consent: 'express', created: '2026-07-17', next: 'Jul 30', color: '#527493', note: 'Listing optimization and A+ content for 14 SKUs.', gates: { discoveryPaid: true, scopeApproved: true, agreementSigned: false, depositPaid: false } },
      { id: 'l3', company: 'Field & Form', contact: 'Eli Wright', email: 'eli@fieldform.example', service: 'Web Development', stage: 'new', value: 6800, source: 'Partner', consent: 'referral', created: '2026-07-28', next: 'Today', color: '#88724c', note: 'Marketing site for an architecture practice.', gates: { discoveryPaid: false, scopeApproved: false, agreementSigned: false, depositPaid: false } },
      { id: 'l4', company: 'Morrow Home', contact: 'Nora Patel', email: 'nora@morrow.example', service: 'Shopify', stage: 'contacted', value: 15200, source: 'Event', consent: 'express', created: '2026-07-24', next: 'Jul 31', color: '#96685c', note: 'Shopify Plus discovery and replatforming.', gates: { discoveryPaid: false, scopeApproved: false, agreementSigned: false, depositPaid: false } },
      { id: 'l5', company: 'Cedar & Co.', contact: 'Owen Brooks', email: 'owen@cedarco.example', service: 'Web Development', stage: 'deposit', value: 9600, source: 'Referral', consent: 'inquiry', created: '2026-07-08', next: 'Today', color: '#a16d45', note: 'Custom services site with CMS and integrations.', gates: { discoveryPaid: true, scopeApproved: true, agreementSigned: true, depositPaid: false } },
      { id: 'l6', company: 'Juniper Coffee', contact: 'Ari Singh', email: 'ari@juniper.example', service: 'Shopify', stage: 'active', value: 18800, source: 'Existing client', consent: 'ebr', created: '2026-06-23', next: 'Aug 01', color: '#4c7767', note: 'Store redesign, wholesale portal and POS sync.', progress: 56, gates: { discoveryPaid: true, scopeApproved: true, agreementSigned: true, depositPaid: true } },
      { id: 'l7', company: 'Atlas Trail', contact: 'Grace Kim', email: 'grace@atlastrail.example', service: 'Amazon', stage: 'active', value: 14100, source: 'Website', consent: 'express', created: '2026-06-10', next: 'Aug 02', color: '#566e91', note: 'Amazon brand store and product launch support.', progress: 78, gates: { discoveryPaid: true, scopeApproved: true, agreementSigned: true, depositPaid: true } },
      { id: 'l8', company: 'Prairie Dental', contact: 'Liam Foster', email: 'liam@prairiedental.example', service: 'Web Development', stage: 'contacted', value: 7200, source: 'Website', consent: 'inquiry', created: '2026-07-26', next: 'Aug 01', color: '#6a8b89', note: 'Accessible clinic website and appointment integration.', gates: { discoveryPaid: false, scopeApproved: false, agreementSigned: false, depositPaid: false } },
      { id: 'l9', company: 'Kindred Skin', contact: 'Sofia Reyes', email: 'sofia@kindred.example', service: 'Amazon', stage: 'new', value: 11000, source: 'Public listing', consent: 'conspicuous', created: '2026-07-29', next: 'Aug 04', color: '#a57269', note: 'Potential catalog cleanup. Relevance needs manual review.', gates: { discoveryPaid: false, scopeApproved: false, agreementSigned: false, depositPaid: false } },
      { id: 'l10', company: 'Stonebridge Tools', contact: 'Theo Martin', email: 'theo@stonebridge.example', service: 'Shopify', stage: 'proposal', value: 21400, source: 'Referral', consent: 'referral', created: '2026-07-15', next: 'Aug 01', color: '#485d53', note: 'B2B ecommerce portal and ERP connection.', gates: { discoveryPaid: true, scopeApproved: true, agreementSigned: false, depositPaid: false } },
      { id: 'l11', company: 'Orchid Labs', contact: 'Claire Bell', email: 'claire@orchidlabs.example', service: 'Web Development', stage: 'discovery', value: 13200, source: 'Website', consent: 'express', created: '2026-07-20', next: 'Jul 30', color: '#736699', note: 'Product marketing site and documentation hub.', gates: { discoveryPaid: true, scopeApproved: false, agreementSigned: false, depositPaid: false } },
      { id: 'l12', company: 'Hearthside Foods', contact: 'Jonah Price', email: 'jonah@hearthside.example', service: 'Amazon', stage: 'new', value: 7900, source: 'Purchased list', consent: 'none', created: '2026-07-29', next: 'Blocked', color: '#9b7750', note: 'Suppressed: purchased lists are not an approved consent basis.', gates: { discoveryPaid: false, scopeApproved: false, agreementSigned: false, depositPaid: false } }
    ],
    automations: [
      { id: 'a1', icon: '↗', name: 'Consent-safe lead follow-up', desc: 'Queues a three-touch sequence only when a documented CASL basis exists.', trigger: 'Lead added', action: '3-touch sequence', enabled: true, runs: 18, last: '12 min ago' },
      { id: 'a2', icon: '◫', name: 'Paid discovery onboarding', desc: 'Sends the discovery invoice and questionnaire after the call is booked.', trigger: 'Call booked', action: 'Invoice + form', enabled: true, runs: 9, last: '2 hours ago' },
      { id: 'a3', icon: '✓', name: 'Deposit gatekeeper', desc: 'Prevents active status until scope, agreement and cleared deposit are verified.', trigger: 'Move to Active', action: 'Verify 4 gates', enabled: true, runs: 31, last: 'Just now' },
      { id: 'a4', icon: '◇', name: 'Proposal reminder', desc: 'Sends a helpful reminder 3 and 7 days after an unopened proposal.', trigger: 'Proposal pending', action: 'Reminder cadence', enabled: true, runs: 7, last: 'Yesterday' },
      { id: 'a5', icon: '☷', name: 'Friday client digest', desc: 'Summarizes approvals, milestones, blockers and next steps for active clients.', trigger: 'Friday 2 PM', action: 'Portal + email', enabled: true, runs: 16, last: '5 days ago' },
      { id: 'a6', icon: '⌂', name: 'Handoff readiness check', desc: 'Opens the launch checklist when delivery reaches 90% completion.', trigger: 'Progress ≥ 90%', action: 'Handoff checklist', enabled: false, runs: 0, last: 'Not run' }
    ],
    activity: [
      { icon: '$', text: '<strong>Juniper Coffee</strong> deposit verified', time: '18 minutes ago' },
      { icon: '↗', text: 'Follow-up sent to <strong>Morrow Home</strong>', time: '1 hour ago' },
      { icon: '✓', text: '<strong>Atlas Trail</strong> approved A+ content', time: '2 hours ago' },
      { icon: '◇', text: 'Proposal viewed by <strong>Northline Supply</strong>', time: 'Yesterday at 4:42 PM' }
    ],
    outreachSent: 38
  };

  const docs = [
    { id: 'terms', code: 'TOS', title: 'Master Terms of Service', desc: 'Commercial terms, deposits, scope control, IP, acceptance and termination.', color: 'green', pages: 8, updated: 'Jul 29, 2026' },
    { id: 'discovery', code: 'DS', title: 'Paid Discovery SOW', desc: 'Fixed-fee discovery scope, deliverables, schedule and conversion to build.', color: 'orange', pages: 3, updated: 'Jul 29, 2026' },
    { id: 'delivery', code: 'SOP', title: 'Delivery SOP', desc: 'Internal operating procedure from qualification through launch.', color: 'blue', pages: 11, updated: 'Jul 29, 2026' },
    { id: 'handoff', code: 'HO', title: 'Client Handoff Standard', desc: 'Required assets, training, credentials, acceptance and archive rules.', color: 'purple', pages: 5, updated: 'Jul 29, 2026' },
    { id: 'outreach', code: 'CASL', title: 'Outreach & Consent SOP', desc: 'CASL-aware prospecting, consent evidence, suppression and audit protocol.', color: 'gold', pages: 6, updated: 'Jul 29, 2026' },
    { id: 'privacy', code: 'PRIV', title: 'Privacy Operations', desc: 'Canadian privacy controls for collection, access, retention and vendors.', color: 'charcoal', pages: 4, updated: 'Jul 29, 2026' }
  ];

  let state = loadState();
  let currentDocId = null;
  let draggedLeadId = null;

  const content = document.getElementById('appContent');
  const pageTitle = document.getElementById('pageTitle');
  const pageEyebrow = document.getElementById('pageEyebrow');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const toastRegion = document.getElementById('toastRegion');

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.leads && saved.automations) return { ...seed, ...saved };
    } catch (_) {}
    return JSON.parse(JSON.stringify(seed));
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateNavCount();
  }

  function resetDemo() {
    state = JSON.parse(JSON.stringify(seed));
    saveState();
    renderCurrentView();
    toast('Demo data restored', 'All sample records and workflows were reset.');
  }

  function money(value) {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(Number(value || 0));
  }

  function initials(value) {
    return String(value || '').split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[ch]));
  }

  function stageLabel(id) {
    return stages.find(s => s.id === id)?.label || id;
  }

  function completedGateCount(lead) {
    return Object.values(lead.gates || {}).filter(Boolean).length;
  }

  function canStart(lead) {
    return lead.gates && lead.gates.discoveryPaid && lead.gates.scopeApproved && lead.gates.agreementSigned && lead.gates.depositPaid;
  }

  function consentInfo(consent) {
    const map = {
      express: ['Express consent', 'success'],
      inquiry: ['Inbound inquiry', 'success'],
      ebr: ['Existing relationship', 'info'],
      referral: ['Documented referral', 'info'],
      conspicuous: ['Manual review', 'warning'],
      b2b: ['B2B relationship', 'info'],
      none: ['Do not contact', 'danger'],
      unsubscribed: ['Unsubscribed', 'danger']
    };
    return map[consent] || ['Unverified', 'warning'];
  }

  function servicePill(service) {
    const meta = serviceMeta[service] || { short: service, className: 'gray' };
    return `<span class="tag">${escapeHtml(meta.short)}</span>`;
  }

  function updateNavCount() {
    const openCount = state.leads.filter(l => l.stage !== 'active').length;
    document.getElementById('navLeadCount').textContent = openCount;
  }

  function toast(title, text, type = 'success') {
    const node = document.createElement('div');
    node.className = 'toast';
    node.innerHTML = `<span class="toast-icon">${type === 'error' ? '!' : '✓'}</span><div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(text)}</small></div>`;
    toastRegion.appendChild(node);
    setTimeout(() => node.remove(), 3600);
  }

  function setView(view) {
    state.currentView = view;
    saveState();
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    document.getElementById('sidebar').classList.remove('open');
    renderCurrentView();
  }

  function setHead(title, eyebrow) {
    pageTitle.textContent = title;
    pageEyebrow.textContent = eyebrow;
  }

  function renderCurrentView() {
    const renderers = {
      dashboard: renderDashboard,
      pipeline: renderPipeline,
      outreach: renderOutreach,
      clients: renderClients,
      automations: renderAutomations,
      documents: renderDocuments,
      roadmap: renderRoadmap
    };
    (renderers[state.currentView] || renderDashboard)();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderDashboard() {
    setHead('Good morning, Your Name', 'Wednesday, July 29');
    const openLeads = state.leads.filter(l => l.stage !== 'active');
    const qualified = state.leads.filter(l => ['discovery', 'proposal', 'deposit'].includes(l.stage));
    const active = state.leads.filter(l => l.stage === 'active');
    const pipelineValue = openLeads.reduce((sum, l) => sum + Number(l.value), 0);
    const depositsPending = state.leads.filter(l => l.stage === 'deposit' && !l.gates.depositPaid);
    const gateTotals = ['discoveryPaid', 'scopeApproved', 'agreementSigned', 'depositPaid'].map(key => state.leads.filter(l => l.gates[key]).length);
    const funnelStages = [
      ['New + contacted', state.leads.filter(l => ['new', 'contacted'].includes(l.stage)).length],
      ['Discovery', state.leads.filter(l => l.stage === 'discovery').length],
      ['Proposal', state.leads.filter(l => l.stage === 'proposal').length],
      ['Deposit gate', state.leads.filter(l => l.stage === 'deposit').length]
    ];
    const maxFunnel = Math.max(...funnelStages.map(x => x[1]), 1);

    content.innerHTML = `
      <div class="metric-grid">
        ${metricCard('◇', 'green', openLeads.length, 'open opportunities', 'Active pipeline', '+3 this week')}
        ${metricCard('⌁', 'blue', qualified.length, 'sales qualified', 'Qualified leads', '42% conversion')}
        ${metricCard('$', 'orange', money(pipelineValue), '', 'Weighted opportunity', 'CAD · before tax')}
        ${metricCard('✓', 'purple', active.length, 'in delivery', 'Active clients', depositsPending.length ? `${depositsPending.length} deposit pending` : 'All gates clear')}
      </div>
      <div class="dashboard-grid">
        <div class="dashboard-main">
          <article class="card revenue-protection">
            <div class="card-head"><div><h3>Revenue protection gate</h3><p>No production work begins until every control is verified.</p></div><button class="card-link" data-go="clients">Manage clients →</button></div>
            <div class="gate-progress">
              ${gateStep(1, 'Discovery paid', `${gateTotals[0]} records verified`, true)}
              ${gateStep(2, 'Scope approved', `${gateTotals[1]} records verified`, true)}
              ${gateStep(3, 'Terms signed', `${gateTotals[2]} records verified`, true)}
              ${gateStep(4, 'Deposit cleared', `${gateTotals[3]} records verified`, depositsPending.length === 0)}
            </div>
            <div class="protection-note"><span>⌾</span><div><strong>Hard lock enabled.</strong> Moving an engagement into Active Delivery is blocked unless paid discovery, approved scope, signed terms and cleared implementation deposit are recorded.</div></div>
          </article>

          <article class="card">
            <div class="card-head"><div><h3>Opportunity funnel</h3><p>Current open pipeline by stage</p></div><button class="card-link" data-go="pipeline">Open pipeline →</button></div>
            <div class="pipeline-mini">
              ${funnelStages.map(([label, count]) => `<div class="funnel-row"><label>${label}</label><div class="funnel-track"><span style="width:${Math.max(7, count / maxFunnel * 100)}%"></span></div><b>${count}</b></div>`).join('')}
            </div>
          </article>
        </div>
        <div class="dashboard-side">
          <article class="card">
            <div class="card-head"><div><h3>Today's priorities</h3><p>${state.tasks.filter(t => !t.done).length} actions remaining</p></div><button class="card-link" id="addTaskBtn">＋ Add</button></div>
            <div class="task-list">
              ${state.tasks.map(task => `<div class="task-row"><button class="task-check ${task.done ? 'done' : ''}" data-task="${task.id}">✓</button><div class="task-copy"><strong>${escapeHtml(task.text)}</strong><small>${escapeHtml(task.meta)}</small></div><span class="task-time">${escapeHtml(task.time)}</span></div>`).join('')}
            </div>
          </article>
          <article class="card">
            <div class="card-head"><div><h3>Recent activity</h3><p>Across sales and delivery</p></div><button class="card-link" id="refreshActivity">Refresh</button></div>
            <div class="activity-list">
              ${state.activity.map(item => `<div class="activity-row"><div class="activity-icon">${item.icon}</div><div class="activity-copy"><p>${item.text}</p><small>${item.time}</small></div></div>`).join('')}
            </div>
          </article>
        </div>
      </div>`;

    content.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.go)));
    content.querySelectorAll('[data-task]').forEach(btn => btn.addEventListener('click', () => {
      const task = state.tasks.find(t => t.id === btn.dataset.task);
      task.done = !task.done;
      saveState();
      renderDashboard();
    }));
    document.getElementById('addTaskBtn')?.addEventListener('click', openTaskModal);
    document.getElementById('refreshActivity')?.addEventListener('click', () => toast('Activity is current', 'No new events since the last refresh.'));
  }

  function metricCard(icon, color, value, suffix, label, change) {
    const isLong = String(value).length > 7;
    return `<article class="card metric-card"><div class="metric-top"><span class="metric-icon ${color}">${icon}</span><span class="metric-change ${change.includes('CAD') || change.includes('pending') ? 'muted' : ''}">${change}</span></div><div class="metric-value"><strong style="${isLong ? 'font-size:21px' : ''}">${value}</strong>${suffix ? `<span>${suffix}</span>` : ''}</div><div class="metric-label">${label}</div></article>`;
  }

  function gateStep(n, title, text, complete) {
    return `<div class="gate-step ${complete ? '' : 'pending'}"><span class="step-num">${complete ? '✓' : n}</span><strong>${title}</strong><small>${text}</small></div>`;
  }

  function renderPipeline() {
    setHead('Sales pipeline', 'Acquire · Qualify · Protect');
    const available = ['All', 'Web Development', 'Shopify', 'Amazon'];
    const filtered = state.leads.filter(l => state.pipelineFilter === 'All' || l.service === state.pipelineFilter);
    content.innerHTML = `
      <div class="view-head"><div><h2>Opportunity pipeline</h2><p>Drag opportunities forward. The Active column enforces the deposit gate.</p></div><div class="view-actions"><button class="secondary-btn" id="exportBtn">⇩ Export CSV</button><button class="primary-btn" id="pipelineAdd">＋ New lead</button></div></div>
      <div class="filter-bar">
        <div class="filters">${available.map(item => `<button class="filter-btn ${state.pipelineFilter === item ? 'active' : ''}" data-filter="${item}">${item === 'All' ? 'All services' : item}</button>`).join('')}</div>
        <div class="filter-right"><span class="label">${filtered.length} records</span><button class="filter-btn" id="resetDataBtn">Reset demo</button></div>
      </div>
      <div class="kanban">
        ${stages.map(stage => {
          const leads = filtered.filter(l => l.stage === stage.id);
          return `<section class="kanban-column" data-stage="${stage.id}">
            <div class="column-head"><div class="column-title"><span class="stage-dot" style="background:${stage.color}"></span>${stage.label}<small>${leads.length}</small></div><button data-add-stage="${stage.id}" aria-label="Add to ${stage.label}">＋</button></div>
            <div class="column-body">${leads.map(leadCard).join('')}</div>
          </section>`;
        }).join('')}
      </div>`;

    content.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
      state.pipelineFilter = btn.dataset.filter;
      saveState(); renderPipeline();
    }));
    document.getElementById('pipelineAdd')?.addEventListener('click', () => openLeadModal());
    content.querySelectorAll('[data-add-stage]').forEach(btn => btn.addEventListener('click', () => openLeadModal(btn.dataset.addStage)));
    content.querySelectorAll('.lead-card').forEach(card => {
      card.addEventListener('dragstart', () => { draggedLeadId = card.dataset.id; card.classList.add('dragging'); });
      card.addEventListener('dragend', () => { card.classList.remove('dragging'); draggedLeadId = null; });
      card.addEventListener('click', e => { if (!e.target.closest('.lead-menu')) openLeadDetail(card.dataset.id); });
    });
    content.querySelectorAll('.lead-menu').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); openLeadDetail(btn.dataset.id); }));
    content.querySelectorAll('.kanban-column').forEach(col => {
      col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('drag-over'); });
      col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
      col.addEventListener('drop', e => {
        e.preventDefault(); col.classList.remove('drag-over');
        if (draggedLeadId) moveLead(draggedLeadId, col.dataset.stage);
      });
    });
    document.getElementById('exportBtn')?.addEventListener('click', exportCSV);
    document.getElementById('resetDataBtn')?.addEventListener('click', () => confirmModal('Reset the demo workspace?', 'This replaces all local changes with the original sample records.', resetDemo));
  }

  function leadCard(lead) {
    const meta = serviceMeta[lead.service] || serviceMeta['Web Development'];
    return `<article class="lead-card" draggable="true" data-id="${lead.id}">
      <div class="lead-card-top"><span class="company-mark" style="background:${lead.color}">${initials(lead.company)}</span><button class="lead-menu" data-id="${lead.id}">•••</button></div>
      <div class="lead-company">${escapeHtml(lead.company)}</div><p class="lead-contact">${escapeHtml(lead.contact)}</p>
      <div class="lead-meta"><span class="tag">${meta.short}</span>${lead.consent === 'none' ? '<span class="pill red">Blocked</span>' : ''}</div>
      <div class="lead-footer"><div><div class="lead-value">${money(lead.value)}</div><span class="lead-date">Next: ${escapeHtml(lead.next)}</span></div><div class="gate-mini" title="${completedGateCount(lead)} of 4 start gates complete">${[0,1,2,3].map(i => `<span class="${i < completedGateCount(lead) ? 'on' : ''}"></span>`).join('')}</div></div>
    </article>`;
  }

  function moveLead(id, targetStage) {
    const lead = state.leads.find(l => l.id === id);
    if (!lead || lead.stage === targetStage) return;
    if (targetStage === 'active' && !canStart(lead)) {
      toast('Start blocked by deposit gate', 'Verify paid discovery, scope, terms and cleared deposit first.', 'error');
      openLeadDetail(id);
      return;
    }
    lead.stage = targetStage;
    if (targetStage === 'active' && !lead.progress) lead.progress = 5;
    state.activity.unshift({ icon: '◇', text: `<strong>${escapeHtml(lead.company)}</strong> moved to ${stageLabel(targetStage)}`, time: 'Just now' });
    state.activity = state.activity.slice(0, 8);
    saveState();
    renderPipeline();
    toast('Opportunity updated', `${lead.company} moved to ${stageLabel(targetStage)}.`);
  }

  function renderOutreach() {
    setHead('Outreach engine', 'Consent before cadence');
    const queue = state.leads.filter(l => ['new', 'contacted'].includes(l.stage));
    const sendable = queue.filter(l => !['none', 'unsubscribed', 'conspicuous'].includes(l.consent));
    const replies = 11;
    content.innerHTML = `
      <div class="view-head"><div><h2>Consent-aware outreach</h2><p>Personalized follow-up with proof of consent, suppression and human review built in.</p></div><div class="view-actions"><button class="secondary-btn" id="addTemplateBtn">＋ Template</button><button class="primary-btn" id="runQueueBtn">↗ Run approved queue</button></div></div>
      <div class="compliance-banner"><div class="shield">✓</div><div><strong>CASL safety controls are active</strong><p>Every queued commercial message requires a recorded basis, sender identification and unsubscribe mechanism. Unsubscribes enter the suppression list immediately.</p></div><span class="pill green">Protected</span></div>
      <div class="outreach-grid">
        <div class="dashboard-main">
          <article class="card">
            <div class="campaign-stats">
              <div class="campaign-stat"><strong>${state.outreachSent}</strong><span>Sent this month</span></div>
              <div class="campaign-stat"><strong>${sendable.length}</strong><span>Approved to send</span></div>
              <div class="campaign-stat"><strong>${replies}</strong><span>Replies</span></div>
              <div class="campaign-stat"><strong>28.9%</strong><span>Reply rate</span></div>
            </div>
            <div class="card-head"><div><h3>Review queue</h3><p>Human approval required for ambiguous consent bases</p></div><button class="card-link" id="selectSendable">Select approved</button></div>
            <div style="overflow-x:auto">
              <table class="data-table"><thead><tr><th>Prospect</th><th>Service</th><th>Consent basis</th><th>Next touch</th><th>Status</th></tr></thead><tbody>
              ${queue.map(lead => { const [label, cls] = consentInfo(lead.consent); const blocked = ['none','unsubscribed'].includes(lead.consent); return `<tr data-lead="${lead.id}"><td><div class="person-cell"><span class="mini-avatar">${initials(lead.contact)}</span><div><strong>${escapeHtml(lead.contact)}</strong><small>${escapeHtml(lead.company)}</small></div></div></td><td>${servicePill(lead.service)}</td><td><span class="status-pill ${cls}">${label}</span></td><td>${escapeHtml(lead.next)}</td><td>${blocked ? '<span class="pill red">Suppressed</span>' : lead.consent === 'conspicuous' ? '<span class="pill gold">Review</span>' : '<span class="pill green">Queued</span>'}</td></tr>`; }).join('')}
              </tbody></table>
            </div>
          </article>
        </div>
        <div class="dashboard-side">
          <article class="card"><div class="card-head"><div><h3>Message templates</h3><p>Brief, relevant and easy to exit</p></div><button class="card-link" data-go-doc="outreach">View SOP</button></div>
            <div class="template-card" data-template="audit"><div class="template-top"><strong>Relevant opportunity note</strong><span class="tag">Touch 1</span></div><p>A short observation tied directly to the recipient's published business role—never a generic blast.</p><div class="template-meta"><span>Manual personalization</span><span>78% used</span></div></div>
            <div class="template-card" data-template="followup"><div class="template-top"><strong>Value-first follow-up</strong><span class="tag">Touch 2</span></div><p>Shares one useful recommendation and asks whether the priority is worth discussing.</p><div class="template-meta"><span>3 business days</span><span>64% used</span></div></div>
            <div class="template-card" data-template="close"><div class="template-top"><strong>Close the loop</strong><span class="tag">Touch 3</span></div><p>Ends the cadence respectfully. No false urgency, guilt or continuing automation.</p><div class="template-meta"><span>7 business days</span><span>41% used</span></div></div>
          </article>
          <article class="card"><div class="card-head"><div><h3>Consent controls</h3><p>Evidence required per contact</p></div></div><div class="consent-legend">
            <div class="consent-row"><span class="dot" style="background:var(--green)"></span><div><strong>Sendable</strong><small>Express consent, qualifying inquiry or a documented existing relationship.</small></div></div>
            <div class="consent-row"><span class="dot" style="background:var(--gold)"></span><div><strong>Manual review</strong><small>Conspicuous publication requires relevance and no “do not contact” statement.</small></div></div>
            <div class="consent-row"><span class="dot" style="background:var(--red)"></span><div><strong>Suppressed</strong><small>No basis, purchased/harvested data or an unsubscribe request.</small></div></div>
          </div></article>
        </div>
      </div>`;

    document.getElementById('runQueueBtn')?.addEventListener('click', () => runOutreachQueue(sendable));
    document.getElementById('selectSendable')?.addEventListener('click', () => toast('Approved records selected', `${sendable.length} contacts are ready for the next human-approved touch.`));
    document.querySelectorAll('[data-go-doc]').forEach(btn => btn.addEventListener('click', () => openDocument(btn.dataset.goDoc)));
    document.querySelectorAll('[data-template]').forEach(btn => btn.addEventListener('click', () => openTemplate(btn.dataset.template)));
    document.getElementById('addTemplateBtn')?.addEventListener('click', () => toast('Template draft created', 'A blank draft was added for review (demo action).'));
  }

  function runOutreachQueue(sendable) {
    if (!sendable.length) return toast('No approved messages', 'Add or verify a consent basis before sending.', 'error');
    confirmModal('Run the approved outreach queue?', `${sendable.length} contacts have a documented basis. Messages must still contain agency identification and an unsubscribe mechanism.`, () => {
      let sent = 0;
      sendable.forEach(lead => {
        if (lead.stage === 'new') lead.stage = 'contacted';
        lead.next = 'Aug 03';
        sent++;
      });
      state.outreachSent += sent;
      state.activity.unshift({ icon: '↗', text: `<strong>${sent} approved outreach messages</strong> queued`, time: 'Just now' });
      saveState(); closeModal(); renderOutreach();
      toast('Approved queue processed', `${sent} demo messages were recorded; no real emails were sent.`);
    });
  }

  function renderClients() {
    setHead('Client delivery', 'Gated work · Clear handoff');
    const clients = state.leads.filter(l => ['deposit', 'active'].includes(l.stage));
    if (!clients.some(c => c.id === state.selectedClientId)) state.selectedClientId = clients[0]?.id;
    const selected = clients.find(c => c.id === state.selectedClientId);
    content.innerHTML = `
      <div class="view-head"><div><h2>Client workspace</h2><p>Commercial readiness, delivery progress and handoff requirements in one record.</p></div><div class="view-actions"><button class="secondary-btn" id="portalFromClients">Portal preview</button><button class="primary-btn" id="clientAdd">＋ Add client</button></div></div>
      <div class="client-layout">
        <article class="card client-list-card">
          <div class="card-head"><div><h3>Engagements</h3><p>${clients.length} deposit-stage and active records</p></div><select class="select-control"><option>All services</option></select></div>
          <div style="overflow-x:auto"><table class="data-table"><thead><tr><th>Client</th><th>Service</th><th>Value</th><th>Readiness</th><th>Progress</th><th>Status</th></tr></thead><tbody>
            ${clients.map(client => `<tr class="client-row ${client.id === state.selectedClientId ? 'selected' : ''}" data-client="${client.id}"><td><div class="person-cell"><span class="mini-avatar" style="background:${client.color}22;color:${client.color}">${initials(client.company)}</span><div><strong>${escapeHtml(client.company)}</strong><small>${escapeHtml(client.contact)}</small></div></div></td><td>${servicePill(client.service)}</td><td><strong>${money(client.value)}</strong></td><td>${completedGateCount(client)}/4 gates</td><td><div class="progress-cell"><div class="progress-line"><span style="width:${client.progress || 0}%"></span></div><small>${client.progress || 0}% complete</small></div></td><td>${client.stage === 'active' ? '<span class="pill green">Active</span>' : '<span class="pill orange">Start locked</span>'}</td></tr>`).join('')}
          </tbody></table></div>
        </article>
        ${selected ? renderClientPanel(selected) : '<div class="card empty-state"><div class="empty-icon">◎</div><h3>No client selected</h3></div>'}
      </div>`;

    content.querySelectorAll('[data-client]').forEach(row => row.addEventListener('click', () => { state.selectedClientId = row.dataset.client; saveState(); renderClients(); }));
    content.querySelectorAll('[data-gate]').forEach(btn => btn.addEventListener('click', () => toggleGate(btn.dataset.client, btn.dataset.gate)));
    document.getElementById('startProjectBtn')?.addEventListener('click', () => startProject(selected.id));
    document.getElementById('portalFromClients')?.addEventListener('click', () => openPortal(selected));
    document.getElementById('clientAdd')?.addEventListener('click', () => openLeadModal('deposit'));
  }

  function renderClientPanel(client) {
    const gates = [
      ['discoveryPaid', 'Paid discovery complete', 'Invoice paid and findings delivered'],
      ['scopeApproved', 'Scope approved', 'Deliverables and exclusions accepted'],
      ['agreementSigned', 'Terms signed', 'Authorized client signer recorded'],
      ['depositPaid', 'Deposit cleared', 'Implementation funds settled']
    ];
    return `<aside class="card client-panel">
      <div class="client-panel-hero"><span class="company-mark">${initials(client.company)}</span><h3>${escapeHtml(client.company)}</h3><p>${escapeHtml(client.service)} · ${money(client.value)}</p></div>
      <div class="panel-tabs"><button class="panel-tab active">Readiness</button><button class="panel-tab">Details</button><button class="panel-tab">Files</button></div>
      <div class="panel-section"><h4>Required before work begins</h4>
        ${gates.map(([key,title,desc]) => `<div class="gate-check"><button class="${client.gates[key] ? 'complete' : ''}" data-client="${client.id}" data-gate="${key}">✓</button><div><strong>${title}</strong><small>${desc}</small></div>${client.gates[key] ? '<span class="pill green">Done</span>' : '<span class="pill gray">Required</span>'}</div>`).join('')}
      </div>
      <div class="panel-section"><h4>Engagement details</h4><div class="detail-list">
        <div class="detail-row"><span>Primary contact</span><strong>${escapeHtml(client.contact)}</strong></div>
        <div class="detail-row"><span>Service</span><strong>${escapeHtml(client.service)}</strong></div>
        <div class="detail-row"><span>Next action</span><strong>${escapeHtml(client.next)}</strong></div>
        <div class="detail-row"><span>Deposit policy</span><strong>50% of build</strong></div>
      </div></div>
      <div class="locked-action"><button class="primary-btn" id="startProjectBtn" ${canStart(client) ? '' : 'disabled'}>${client.stage === 'active' ? 'Open delivery workspace' : canStart(client) ? 'Start project' : 'Work start locked'}</button>${canStart(client) ? '<div class="locked-note">✓ All commercial controls verified</div>' : `<div class="locked-note">⌑ ${4 - completedGateCount(client)} required control${4-completedGateCount(client) === 1 ? '' : 's'} incomplete</div>`}</div>
    </aside>`;
  }

  function toggleGate(clientId, gate) {
    const client = state.leads.find(l => l.id === clientId);
    if (!client) return;
    client.gates[gate] = !client.gates[gate];
    saveState(); renderClients();
    toast(client.gates[gate] ? 'Control verified' : 'Verification removed', `${client.company}: ${gate.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
  }

  function startProject(id) {
    const client = state.leads.find(l => l.id === id);
    if (!client) return;
    if (!canStart(client)) return toast('Work start remains locked', 'Complete all four commercial controls.', 'error');
    if (client.stage !== 'active') {
      client.stage = 'active'; client.progress = 5;
      state.activity.unshift({ icon: '✓', text: `<strong>${escapeHtml(client.company)}</strong> entered active delivery`, time: 'Just now' });
      saveState(); renderClients();
      toast('Project unlocked', 'All requirements are verified. Delivery may now begin.');
    } else {
      toast('Delivery workspace ready', `${client.company} is active at ${client.progress || 0}% completion.`);
    }
  }

  function renderAutomations() {
    setHead('Workflow automations', 'Human-approved · Event-driven');
    const enabled = state.automations.filter(a => a.enabled).length;
    content.innerHTML = `
      <div class="view-head"><div><h2>Automation control centre</h2><p>Automate administration—not judgment. Compliance and payment gates cannot be bypassed.</p></div><div class="view-actions"><button class="secondary-btn" id="auditLogBtn">View audit log</button><button class="primary-btn" id="newAutomationBtn">＋ New workflow</button></div></div>
      <article class="card integration-strip"><div><strong style="font-size:11px">Integration layer</strong><div style="color:var(--muted);font-size:9px">Connect production credentials when moving beyond this MVP.</div></div><div class="integration-list"><span class="integration-logo" title="Stripe">S</span><span class="integration-logo" title="Email">@</span><span class="integration-logo" title="Calendar">31</span><span class="integration-logo" title="File storage">▤</span><span class="integration-logo add">＋</span></div><span class="pill orange">Demo connectors</span></article>
      <div class="automation-grid">
        ${state.automations.map(auto => `<article class="card automation-card"><div class="automation-top"><div class="automation-icon">${auto.icon}</div><div class="automation-copy"><h3>${escapeHtml(auto.name)}</h3><p>${escapeHtml(auto.desc)}</p></div><button class="toggle ${auto.enabled ? 'on' : ''}" data-toggle="${auto.id}" aria-label="Toggle ${escapeHtml(auto.name)}"></button></div><div class="automation-flow"><span class="flow-chip">${escapeHtml(auto.trigger)}</span><span class="flow-arrow">→</span><span class="flow-chip">${escapeHtml(auto.action)}</span></div><div class="automation-foot"><span>${auto.runs} runs</span><span>Last: ${escapeHtml(auto.last)}</span><strong>${auto.enabled ? 'ACTIVE' : 'PAUSED'}</strong></div></article>`).join('')}
      </div>
      <div class="protection-note" style="margin:15px 0 0"><span>⌾</span><div><strong>${enabled} of ${state.automations.length} workflows active.</strong> The deposit gatekeeper is a protected workflow. In production, restrict changes to an administrator role and retain the audit trail.</div></div>`;
    content.querySelectorAll('[data-toggle]').forEach(btn => btn.addEventListener('click', () => {
      const auto = state.automations.find(a => a.id === btn.dataset.toggle);
      if (auto.id === 'a3' && auto.enabled) return toast('Protected workflow', 'The deposit gatekeeper cannot be disabled by a standard user.', 'error');
      auto.enabled = !auto.enabled; saveState(); renderAutomations();
      toast(auto.enabled ? 'Workflow enabled' : 'Workflow paused', auto.name);
    }));
    document.getElementById('auditLogBtn')?.addEventListener('click', openAuditLog);
    document.getElementById('newAutomationBtn')?.addEventListener('click', () => toast('Workflow builder', 'The visual builder is planned for the production build.'));
  }

  function renderDocuments() {
    setHead('Documents & standards', 'Versioned · Client-ready');
    content.innerHTML = `
      <div class="view-head"><div><h2>Operating library</h2><p>Client-facing terms and internal SOPs built around paid discovery and gated delivery.</p></div><div class="view-actions"><button class="secondary-btn" id="downloadPackBtn">⇩ Export library</button><button class="primary-btn" id="newDocBtn">＋ New document</button></div></div>
      <div class="compliance-banner" style="background:#f9f5eb;border-color:#eadcb9"><div class="shield" style="background:var(--gold)">!</div><div><strong>Canadian legal review required</strong><p>These are robust operating templates, not legal advice. Replace placeholders and have Canadian counsel confirm jurisdiction, consumer-protection, tax, privacy and enforceability requirements.</p></div><span class="pill gold">Template set</span></div>
      <div class="doc-grid">${docs.map(doc => `<article class="card doc-card" data-doc="${doc.id}"><div class="doc-cover ${doc.color}"><span>${doc.code}</span></div><div class="doc-info"><h3>${doc.title}</h3><p>${doc.desc}</p><div class="doc-meta"><span>${doc.pages} pages</span><span>Updated ${doc.updated}</span></div></div></article>`).join('')}</div>`;
    content.querySelectorAll('[data-doc]').forEach(card => card.addEventListener('click', () => openDocument(card.dataset.doc)));
    document.getElementById('downloadPackBtn')?.addEventListener('click', () => toast('Library files are included', 'Open README.md for the Markdown document pack and implementation notes.'));
    document.getElementById('newDocBtn')?.addEventListener('click', () => toast('Template duplicated', 'A document draft would be created in a production workspace.'));
  }

  function renderRoadmap() {
    setHead('Product roadmap', 'Validate first · Expand deliberately');
    content.innerHTML = `
      <article class="card roadmap-hero"><div><span class="pill green" style="background:rgba(215,237,116,.14);color:var(--lime)">CURRENT: INITIAL TESTING</span><h2>Prove the operating loop before adding complexity.</h2><p>Validate acquisition, paid discovery, deposit conversion, delivery and client handoff for Web Development, Shopify and Amazon. Audio Software enters the service catalogue only after the release criteria are met.</p></div><div class="roadmap-score"><strong>3 / 5</strong><span>core controls implemented</span></div></article>
      <div class="roadmap-columns">
        ${roadmapPhase(1, 'Foundation', 'Define the commercial controls and single source of truth.', 'complete', [['Service lanes defined','done'],['Deposit gate enforced','done'],['Terms and SOPs drafted','done'],['Canadian review','next']])}
        ${roadmapPhase(2, 'Initial testing', 'Run real opportunities through the complete system.', 'current', [['5 paid discovery sales','next'],['3 deposit conversions','next'],['1 completed handoff',''],['Outreach QA sampling','']])}
        ${roadmapPhase(3, 'Production hardening', 'Connect infrastructure and strengthen controls.', '', [['CRM database + roles',''],['Stripe webhooks',''],['Email + calendar APIs',''],['Backups and audit log','']])}
        ${roadmapPhase(4, 'Audio Software', 'Pilot a discovery-led audio product and service lane.', 'future', [['Audio intake schema',''],['License/support terms',''],['Beta feedback workflow',''],['Release handoff SOP','']])}
      </div>
      <article class="card validation-card"><div class="card-head"><div><h3>Release criteria for Audio Software</h3><p>All criteria should be demonstrated across real client work—not only sample data.</p></div><span class="pill orange">2 of 5 pending</span></div><div class="validation-grid">
        ${validation('Paid discovery', '5 completed', 60)}${validation('Deposit conversion', 'Target ≥ 60%', 52)}${validation('On-time delivery', 'Target ≥ 85%', 72)}${validation('Clean handoffs', 'Target: 3', 33)}${validation('Client satisfaction', 'Target ≥ 8/10', 80)}
      </div></article>`;
  }

  function roadmapPhase(n, title, text, className, milestones) {
    return `<article class="card roadmap-phase ${className}"><span class="phase-number">0${n}</span><h3>${title}</h3><p>${text}</p><div class="milestone-list">${milestones.map(([m, s]) => `<div class="milestone ${s}"><i>${s === 'done' ? '✓' : s === 'next' ? '→' : '·'}</i><span>${m}</span></div>`).join('')}</div></article>`;
  }
  function validation(title, value, pct) { return `<div class="validation-item"><strong>${title}</strong><span>${value}</span><div class="validation-bar"><span style="width:${pct}%"></span></div></div>`; }

  function openModal(html, wide = false) {
    modal.classList.toggle('wide', wide);
    modalContent.innerHTML = html;
    modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.querySelector('input, select, button:not(.modal-close)')?.focus(), 30);
  }
  function closeModal() {
    modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
    modal.classList.remove('wide');
    modalContent.innerHTML = '';
  }

  function openLeadModal(initialStage = 'new') {
    openModal(`<form id="leadForm"><div class="modal-header"><div class="label">New opportunity</div><h2>Add a lead</h2><p>Create a sales record with a documented outreach basis.</p></div><div class="modal-body"><div class="form-grid">
      <div class="field"><label>Company <span>*</span></label><input name="company" required placeholder="Company name"></div>
      <div class="field"><label>Contact <span>*</span></label><input name="contact" required placeholder="First and last name"></div>
      <div class="field full"><label>Email <span>*</span></label><input name="email" type="email" required placeholder="name@company.com"></div>
      <div class="field"><label>Service lane <span>*</span></label><select name="service" required><option>Web Development</option><option>Shopify</option><option>Amazon</option><option disabled>Audio Software — roadmap</option></select></div>
      <div class="field"><label>Estimated value (CAD)</label><input name="value" type="number" min="0" step="100" placeholder="8000"></div>
      <div class="field"><label>Pipeline stage</label><select name="stage">${stages.map(s => `<option value="${s.id}" ${s.id === initialStage ? 'selected' : ''}>${s.label}</option>`).join('')}</select></div>
      <div class="field"><label>Source</label><select name="source"><option>Website</option><option>Referral</option><option>Partner</option><option>Event</option><option>Public listing</option><option>Other</option></select></div>
      <div class="field full"><label>Outreach basis <span>*</span></label><select name="consent" required><option value="inquiry">Inbound inquiry / requested contact</option><option value="express">Express opt-in consent</option><option value="ebr">Existing business relationship</option><option value="referral">Qualifying documented referral</option><option value="conspicuous">Conspicuous publication — review required</option><option value="b2b">Documented B2B relationship — review</option><option value="none">No verified basis — suppress outreach</option></select><small>Record supporting evidence in the production system. Public availability alone is not enough.</small></div>
      <div class="field full"><label>Opportunity note</label><textarea name="note" placeholder="Need, relevance, context and next step"></textarea></div>
    </div><div class="form-alert"><span>!</span><div><strong>Consent must be provable.</strong> This MVP records a category only. The production build should retain source URL, date, wording, relationship evidence and reviewer.</div></div></div><div class="modal-footer"><button type="button" class="secondary-btn" data-close>Cancel</button><button class="primary-btn" type="submit">Create lead</button></div></form>`);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.getElementById('leadForm').addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget));
      const lead = {
        id: 'l' + Date.now(), company: data.company.trim(), contact: data.contact.trim(), email: data.email.trim(), service: data.service,
        stage: data.stage, value: Number(data.value || 0), source: data.source, consent: data.consent,
        created: '2026-07-29', next: data.consent === 'none' ? 'Blocked' : 'Tomorrow', color: ['#527493','#3f8065','#96685c','#736699'][state.leads.length % 4], note: data.note,
        gates: { discoveryPaid: false, scopeApproved: false, agreementSigned: false, depositPaid: false }
      };
      if (lead.stage === 'active') lead.stage = 'deposit';
      state.leads.unshift(lead);
      state.activity.unshift({ icon: '＋', text: `<strong>${escapeHtml(lead.company)}</strong> added to pipeline`, time: 'Just now' });
      saveState(); closeModal();
      if (state.currentView !== 'pipeline') setView('pipeline'); else renderPipeline();
      toast('Lead created', `${lead.company} was added to ${stageLabel(lead.stage)}.`);
    });
  }

  function openLeadDetail(id) {
    const lead = state.leads.find(l => l.id === id);
    if (!lead) return;
    const [consentLabel, consentClass] = consentInfo(lead.consent);
    const gateRows = [
      ['discoveryPaid','Paid discovery'],['scopeApproved','Scope approval'],['agreementSigned','Signed terms'],['depositPaid','Cleared deposit']
    ];
    openModal(`<div class="modal-header"><div class="label">Opportunity record</div><h2>${escapeHtml(lead.company)}</h2><p>${escapeHtml(lead.contact)} · ${escapeHtml(lead.email)}</p></div><div class="modal-body">
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:17px">${servicePill(lead.service)}<span class="status-pill ${consentClass}">${consentLabel}</span><span class="pill gray">${stageLabel(lead.stage)}</span></div>
      <div class="detail-list" style="padding:0 0 16px;border-bottom:1px solid var(--line)"><div class="detail-row"><span>Opportunity value</span><strong>${money(lead.value)}</strong></div><div class="detail-row"><span>Source</span><strong>${escapeHtml(lead.source)}</strong></div><div class="detail-row"><span>Next action</span><strong>${escapeHtml(lead.next)}</strong></div><div class="detail-row"><span>Notes</span><strong>${escapeHtml(lead.note || '—')}</strong></div></div>
      <h3 style="font:700 12px Manrope;margin:18px 0 10px">Work-start controls</h3>
      ${gateRows.map(([key,title]) => `<div class="gate-check"><button class="${lead.gates[key] ? 'complete' : ''}" data-detail-gate="${key}">✓</button><div><strong>${title}</strong><small>${lead.gates[key] ? 'Verification recorded' : 'Required before delivery'}</small></div>${lead.gates[key] ? '<span class="pill green">Done</span>' : '<span class="pill gray">Required</span>'}</div>`).join('')}
      ${!canStart(lead) ? `<div class="form-alert"><span>⌑</span><div><strong>Delivery is locked.</strong> ${4-completedGateCount(lead)} start requirement${4-completedGateCount(lead) === 1 ? '' : 's'} still need verification.</div></div>` : '<div class="compliance-banner" style="margin:14px 0 0"><div class="shield">✓</div><div><strong>Ready to begin</strong><p>All commercial controls have been verified.</p></div></div>'}
    </div><div class="modal-footer"><button class="danger-btn" id="deleteLeadBtn">Delete</button><span style="flex:1"></span><button class="secondary-btn" data-close>Close</button><button class="primary-btn" id="advanceLeadBtn">${lead.stage === 'active' ? 'Open client' : 'Move forward →'}</button></div>`);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.querySelectorAll('[data-detail-gate]').forEach(btn => btn.addEventListener('click', () => {
      lead.gates[btn.dataset.detailGate] = !lead.gates[btn.dataset.detailGate]; saveState(); closeModal(); openLeadDetail(id);
    }));
    document.getElementById('advanceLeadBtn')?.addEventListener('click', () => {
      if (lead.stage === 'active') { closeModal(); state.selectedClientId = lead.id; setView('clients'); return; }
      const index = stages.findIndex(s => s.id === lead.stage);
      const nextStage = stages[Math.min(index + 1, stages.length - 1)].id;
      closeModal(); moveLead(lead.id, nextStage);
    });
    document.getElementById('deleteLeadBtn')?.addEventListener('click', () => confirmModal('Delete this lead?', `${lead.company} will be removed from the local demo workspace.`, () => {
      state.leads = state.leads.filter(l => l.id !== id); saveState(); closeModal(); renderCurrentView(); toast('Lead deleted', `${lead.company} was removed.`);
    }));
  }

  function openTaskModal() {
    openModal(`<form id="taskForm"><div class="modal-header"><div class="label">Priority</div><h2>Add a task</h2><p>Keep the next responsible action visible.</p></div><div class="modal-body"><div class="form-grid"><div class="field full"><label>Task <span>*</span></label><input name="text" required placeholder="What needs to happen?"></div><div class="field"><label>Context</label><input name="meta" placeholder="Client · Stage"></div><div class="field"><label>Time</label><input name="time" type="time" value="09:00"></div></div></div><div class="modal-footer"><button type="button" class="secondary-btn" data-close>Cancel</button><button class="primary-btn" type="submit">Add task</button></div></form>`);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.getElementById('taskForm').addEventListener('submit', e => {
      e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget));
      state.tasks.push({ id: 't' + Date.now(), text: data.text, meta: data.meta || 'General', time: data.time || 'Today', done: false });
      saveState(); closeModal(); renderDashboard(); toast('Task added', data.text);
    });
  }

  function confirmModal(title, text, onConfirm) {
    openModal(`<div class="modal-header"><div class="label">Please confirm</div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></div><div class="modal-footer"><button class="secondary-btn" data-close>Cancel</button><button class="primary-btn" id="confirmAction">Confirm</button></div>`);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.getElementById('confirmAction')?.addEventListener('click', onConfirm);
  }

  function openTemplate(type) {
    const templates = {
      audit: ['Relevant opportunity note', 'Subject: A practical observation for {{company}}', `Hi {{first_name}},\n\nI noticed {{specific, relevant observation tied to their role}}. One practical improvement may be {{brief useful idea}}.\n\nIf {{priority}} is already on your list, I can send a two-minute outline of how we would approach it. If not, no problem.\n\n— {{sender_name}}, {{agency}}\n{{mailing_address}} · {{contact_method}}\nUnsubscribe: {{unsubscribe_link}}`],
      followup: ['Value-first follow-up', 'Subject: One idea for {{priority}}', `Hi {{first_name}},\n\nFollowing up with the useful part: {{one concrete recommendation}}. It may help {{specific business outcome}}.\n\nWorth a short discussion, or should I close the loop?\n\n— {{sender_name}}, {{agency}}\n{{mailing_address}} · Unsubscribe: {{unsubscribe_link}}`],
      close: ['Close the loop', 'Subject: Closing the loop', `Hi {{first_name}},\n\nI haven’t heard back, so I’ll close the loop here. If {{priority}} becomes relevant later, you’re welcome to reach out.\n\n— {{sender_name}}, {{agency}}\n{{mailing_address}} · Unsubscribe: {{unsubscribe_link}}`]
    };
    const [title, subject, body] = templates[type];
    openModal(`<div class="modal-header"><div class="label">Outreach template</div><h2>${title}</h2><p>Personalization and compliance tokens must be resolved before send.</p></div><div class="modal-body"><div class="field"><label>Subject</label><input value="${escapeHtml(subject)}"></div><div class="field" style="margin-top:12px"><label>Message</label><textarea style="min-height:260px">${escapeHtml(body)}</textarea></div><div class="form-alert"><span>!</span><div><strong>Human review required.</strong> Verify relevance, consent evidence, sender identity, valid contact information and the unsubscribe mechanism.</div></div></div><div class="modal-footer"><button class="secondary-btn" data-close>Close</button><button class="primary-btn" id="saveTemplate">Save changes</button></div>`);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.getElementById('saveTemplate')?.addEventListener('click', () => { closeModal(); toast('Template saved', 'Changes were stored for this demo session.'); });
  }

  function openAuditLog() {
    openModal(`<div class="modal-header"><div class="label">System record</div><h2>Automation audit log</h2><p>Recent workflow decisions and protected controls.</p></div><div class="modal-body"><table class="data-table"><thead><tr><th>Time</th><th>Event</th><th>Result</th></tr></thead><tbody><tr><td>Just now</td><td>Active-stage gate check</td><td><span class="pill green">Passed</span></td></tr><tr><td>12 min</td><td>Consent sequence evaluated</td><td><span class="pill green">1 queued</span></td></tr><tr><td>2 hours</td><td>Discovery payment event</td><td><span class="pill blue">Recorded</span></td></tr><tr><td>Yesterday</td><td>Unverified contact evaluated</td><td><span class="pill red">Suppressed</span></td></tr></tbody></table></div><div class="modal-footer"><button class="secondary-btn" data-close>Close</button><button class="primary-btn" id="exportAudit">Export</button></div>`);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.getElementById('exportAudit')?.addEventListener('click', () => toast('Audit export prepared', 'Production would generate a tamper-evident CSV.'));
  }

  function openDocument(id) {
    const doc = docs.find(d => d.id === id);
    if (!doc) return;
    currentDocId = id;
    openModal(`<div class="doc-modal"><div class="doc-modal-header"><div class="brand-mini">RELAY / [AGENCY LEGAL NAME]</div><h1>${doc.title}</h1><p>Version 1.0 · Effective July 29, 2026 · Canada template</p></div><div class="doc-content">${documentContent(id)}</div></div><div class="modal-footer"><button class="secondary-btn" data-close>Close</button><button class="primary-btn" id="printDocBtn">Print / Save PDF</button></div>`, true);
    document.querySelector('[data-close]')?.addEventListener('click', closeModal);
    document.getElementById('printDocBtn')?.addEventListener('click', () => window.print());
  }

  function documentContent(id) {
    const contentMap = {
      terms: `<div class="doc-callout"><strong>Important:</strong> This operational template is not legal advice. Replace every bracketed field and obtain Canadian legal review before use.</div>
        <h2>1. Parties and acceptance</h2><p>These Terms govern services provided by <strong>[AGENCY LEGAL NAME]</strong> (“Agency”) to the client identified in an accepted statement of work (“Client”). A statement of work, change order, approved proposal and these Terms form the agreement. Electronic acceptance and signatures may be relied upon.</p>
        <h2>2. Paid discovery and no-work-before-payment rule</h2><p>Discovery is a separate, fixed-fee engagement and is payable in full before discovery begins. Any implementation project requires: (a) completed paid discovery unless waived in writing; (b) approved scope; (c) signed agreement; and (d) cleared implementation deposit. Scheduling, production, account configuration and deliverable work do not begin until all four controls are verified.</p>
        <h2>3. Implementation payment schedule</h2><ul><li><strong>50%</strong> non-refundable implementation deposit after discovery and before work is scheduled;</li><li><strong>25%</strong> when the staging or draft milestone is presented; and</li><li><strong>25%</strong> before launch, transfer, credential release or final handoff.</li></ul><p>Invoices are due within <strong>7 calendar days</strong>. Taxes are additional. The Agency may pause work for overdue amounts and adjust dates accordingly.</p>
        <h2>4. Scope, assumptions and changes</h2><p>Only deliverables expressly listed in the statement of work are included. Client delays, new requirements, platform changes and third-party issues may require a written change order. No out-of-scope work is implied by discussion, mockup or prior practice.</p>
        <h2>5. Client responsibilities</h2><p>Client will provide one authorized decision-maker, timely feedback, lawful content, complete access and accurate platform information. Feedback is due within three business days unless the statement of work says otherwise. Delays may move the schedule and trigger restart fees after 15 days of inactivity.</p>
        <h2>6. Intellectual property and licences</h2><p>Upon full payment, Client receives the rights expressly described in the statement of work to final, accepted deliverables. Agency retains pre-existing materials, methods, reusable components, know-how and unselected concepts. Third-party software, themes, fonts, apps, marketplace assets and open-source components remain subject to their own licences.</p>
        <h2>7. Acceptance and warranty</h2><p>A deliverable is accepted upon written approval, production use, or five business days after delivery if no specific material non-conformity is reported. For 30 days after final handoff, Agency will correct reproducible defects that materially fail the agreed acceptance criteria. New features, third-party changes, client edits and platform policy changes are excluded.</p>
        <h2>8. Platforms and third parties</h2><p>Shopify, Amazon, hosting, payment processors, apps and other vendors are independent providers. Agency does not guarantee account approval, ranking, sales, uptime or continued platform functionality. Client owns and pays for its accounts and must comply with platform terms.</p>
        <h2>9. Confidentiality, privacy and security</h2><p>Each party will protect the other’s confidential information using reasonable safeguards. Client will not provide regulated or sensitive personal information unless expressly required and covered by written security instructions. Agency’s privacy schedule and applicable law govern personal information.</p>
        <h2>10. Suspension, cancellation and termination</h2><p>Either party may terminate for material breach not cured within 10 days after written notice. Client may cancel for convenience, but completed work, committed costs, the discovery fee and implementation deposit remain payable/non-refundable to the extent permitted by law. Agency will provide paid-for, completed deliverables after outstanding invoices are settled.</p>
        <h2>11. Liability</h2><p>To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, punitive or consequential damages. Agency’s aggregate liability is limited to fees paid under the applicable statement of work in the three months preceding the event. This clause does not limit liability that cannot lawfully be limited.</p>
        <h2>12. General</h2><p>The governing law and venue are <strong>[PROVINCE/TERRITORY, CANADA]</strong>. The agreement is the entire agreement for its subject. Neither party may assign it without consent, except in a bona fide corporate reorganization. Notices go to the addresses in the statement of work.</p>
        <div class="signature-grid"><div><div class="signature-line"></div><small>Agency authorized signer / date</small></div><div><div class="signature-line"></div><small>Client authorized signer / date</small></div></div>`,
      discovery: `<h2>Objective</h2><p>Convert uncertainty into an implementation-ready decision. Discovery is advisory and does not include production design, development, store changes, listing changes or deployment.</p><h2>Fixed fee and start condition</h2><p>Fee: <strong>CAD $[750–2,500] plus applicable taxes</strong>, based on complexity. Payment in full and signed discovery SOW are required before the kickoff is booked.</p><h2>Included activities</h2><ul><li>60–90 minute stakeholder kickoff;</li><li>Current-state review for website, Shopify store or Amazon catalogue;</li><li>Requirements, constraints, dependencies and risk register;</li><li>Recommended solution, phased scope and assumptions;</li><li>Implementation estimate, schedule range and acceptance criteria.</li></ul><h2>Deliverables</h2><ul><li>Discovery brief;</li><li>Prioritized requirements;</li><li>Scope and exclusion list;</li><li>Implementation proposal valid for 14 days.</li></ul><h2>Schedule</h2><p>Normally 5–10 business days after receipt of complete inputs. Client feedback is due within two business days. One clarification round is included.</p><h2>Conversion to implementation</h2><p>Implementation is a separate engagement. If accepted, a 50% implementation deposit is due before scheduling. The discovery fee is not automatically credited unless expressly stated in the proposal.</p>`,
      delivery: `<h2>Purpose</h2><p>Run every engagement through the same auditable operating loop while allowing service-specific production checklists.</p><h2>Stage 1 — Qualify</h2><ol><li>Verify service fit, budget range, authority, need and timing.</li><li>Record outreach consent basis and evidence.</li><li>Decline or refer requests outside Web Development, Shopify and Amazon during initial testing.</li></ol><h2>Stage 2 — Sell paid discovery</h2><ol><li>Send discovery SOW and invoice.</li><li>Do not schedule work until payment is cleared.</li><li>Collect questionnaire, access inventory and stakeholder list.</li></ol><h2>Stage 3 — Scope and contract</h2><ol><li>Deliver discovery brief.</li><li>Create implementation SOW with deliverables, exclusions, assumptions, acceptance criteria and change process.</li><li>Collect approval, signed terms and 50% deposit.</li><li>Operations owner verifies all four start gates.</li></ol><h2>Stage 4 — Deliver</h2><ol><li>Open project workspace from approved scope.</li><li>Run kickoff and publish milestone plan.</li><li>Send weekly digest: completed, next, decisions, risks and client actions.</li><li>Use change orders before doing out-of-scope work.</li><li>Invoice 25% at staging/draft milestone.</li></ol><h2>Stage 5 — QA and acceptance</h2><ol><li>Complete service checklist, accessibility/performance checks where applicable and internal peer review.</li><li>Demonstrate against acceptance criteria.</li><li>Log defects separately from enhancements.</li><li>Obtain written acceptance and final payment.</li></ol><h2>Stage 6 — Handoff and close</h2><ol><li>Complete the Client Handoff Standard.</li><li>Transfer only after final payment clears.</li><li>Archive evidence, remove unnecessary access and schedule retention deletion.</li><li>Offer maintenance/support as a new agreement.</li></ol>`,
      handoff: `<h2>Handoff entry conditions</h2><ul><li>Acceptance criteria passed;</li><li>Client acceptance recorded;</li><li>All invoices and reimbursable expenses paid;</li><li>Production backup or export captured;</li><li>Named client owner available for training.</li></ul><h2>Required handoff package</h2><ul><li>Final deliverable inventory and live URLs;</li><li>Account ownership map and licence list;</li><li>Administrator guide and routine maintenance steps;</li><li>Source files and repository transfer where included;</li><li>Backup/export and restore notes;</li><li>Known limitations, backlog and warranty instructions;</li><li>Training recording and attendance record.</li></ul><h2>Credential rules</h2><p>Client-owned accounts are preferred from day one. Credentials are transferred through an approved password manager—not email or chat. Agency users are removed or downgraded after acceptance unless a support agreement requires access. API keys and tokens are rotated where ownership changes.</p><h2>Service-specific requirements</h2><h3>Web Development</h3><p>Domain/DNS ownership, hosting, CMS roles, analytics/search ownership, repository, deployment notes, accessibility and browser QA report.</p><h3>Shopify</h3><p>Store owner confirmed, collaborator access reviewed, theme licence and duplicate, app billing map, domain, Markets, payments, shipping/tax responsibility and staff training.</p><h3>Amazon</h3><p>Seller/Vendor account ownership, user permissions, listing and asset inventory, case log, brand registry dependencies, policy risks and reporting baseline. Never transfer a personal primary credential.</p><h2>Client acceptance</h2><p>Client confirms receipt, tests access, acknowledges known limitations and identifies the person responsible after handoff. The 30-day defect warranty begins on the acceptance date unless the SOW states otherwise.</p>`,
      outreach: `<div class="doc-callout"><strong>Rule:</strong> Do not automate a message merely because an address exists. A documented legal basis and message relevance are required.</div><h2>1. Intake and evidence</h2><ol><li>Record source, date, business purpose, relationship and supporting URL/document.</li><li>Classify as express consent, qualifying inquiry, existing relationship, qualifying referral, potential conspicuous publication, B2B relationship or no basis.</li><li>Route ambiguous classifications to a trained reviewer.</li></ol><h2>2. Message requirements</h2><p>Every covered commercial electronic message must use accurate sender identity, identify on whose behalf it is sent, include a current mailing address plus another contact method, and provide a no-cost unsubscribe mechanism. Contact and unsubscribe details must remain valid for at least 60 days.</p><h2>3. Sequence standard</h2><ul><li>Maximum three touches over 10 business days;</li><li>Each message must be relevant and useful;</li><li>No misleading subjects, fake replies, pressure or fabricated familiarity;</li><li>Stop on reply, unsubscribe, bounce, objection or changed consent status.</li></ul><h2>4. Unsubscribe and suppression</h2><p>Process immediately where possible and no later than 10 business days. Add the normalized address to a durable suppression list. Do not delete suppression evidence while other marketing systems could re-import the contact.</p><h2>5. Quality control</h2><ul><li>Weekly sample of at least 10 sends;</li><li>Monthly consent-evidence audit;</li><li>Quarterly template and vendor review;</li><li>Incident escalation to the Privacy/Compliance Owner.</li></ul><h2>Official references</h2><ul><li>CRTC CASL FAQ: crtc.gc.ca/eng/com500/faq500.htm</li><li>ISED “Getting consent to send email”: ised-isde.canada.ca/site/canada-anti-spam-legislation/en/getting-consent-send-email</li></ul>`,
      privacy: `<h2>Operating principles</h2><p>Appoint a Privacy Owner. Identify purposes before collection, obtain meaningful consent where required, minimize collection, keep information accurate, limit use/disclosure/retention, safeguard it, publish practices, provide access and offer a complaint path.</p><h2>System controls</h2><ul><li>Role-based access and MFA for production services;</li><li>Encryption in transit and at rest where supported;</li><li>Approved vendor register and data-processing terms;</li><li>Quarterly access review and prompt offboarding;</li><li>Documented retention schedule and secure deletion;</li><li>Breach assessment, containment and notification procedure.</li></ul><h2>Suggested retention schedule for counsel review</h2><ul><li>Unqualified prospect records: 12 months after last activity;</li><li>Consent and suppression evidence: as required to demonstrate compliance and prevent re-contact;</li><li>Client contract and tax records: statutory period confirmed by accountant/counsel;</li><li>Project working files: 12 months after handoff unless support requires longer;</li><li>Credentials: remove/rotate at handoff; do not archive plaintext secrets.</li></ul><h2>Individual requests</h2><p>Route access, correction and privacy complaints to <strong>[PRIVACY CONTACT]</strong>. Verify identity, log the request and meet applicable response periods. Do not destroy records subject to an active request or legal hold.</p><h2>Official reference</h2><p>Office of the Privacy Commissioner of Canada, “For businesses”: priv.gc.ca/en/for-businesses/</p>`
    };
    return contentMap[id] || '<p>Document content unavailable.</p>';
  }

  function openPortal(client) {
    client = client || state.leads.find(l => l.id === state.selectedClientId) || state.leads.find(l => l.stage === 'active');
    if (!client) return toast('No client available', 'Add or select a client first.', 'error');
    openModal(`<div class="portal-shell"><div class="portal-top"><div class="portal-brand"><i>R</i> [AGENCY NAME]</div><div class="portal-user"><span>${escapeHtml(client.contact)}</span><span class="avatar">${initials(client.contact)}</span></div></div><div class="portal-content"><div class="portal-welcome"><h2>Welcome back, ${escapeHtml(client.contact.split(' ')[0])}</h2><p>Here is the latest on ${escapeHtml(client.company)}.</p></div><div class="portal-status"><article class="card portal-progress"><h3>${escapeHtml(client.service)} engagement</h3><div class="big-progress"><span style="width:${client.progress || 0}%"></span></div><small>${client.progress || 0}% complete · Updated today</small><div class="portal-milestones"><div class="portal-milestone done">Discovery</div><div class="portal-milestone done">Build</div><div class="portal-milestone ${Number(client.progress) > 70 ? 'done' : ''}">Review</div><div class="portal-milestone">Handoff</div></div></article><article class="card portal-next"><div class="label">Your next action</div><h3>Review milestone notes</h3><p>Please respond with consolidated feedback by Friday at 3:00 PM.</p><button class="primary-btn" id="portalReviewBtn">Open review</button></article></div><article class="card portal-files"><div class="card-head"><div><h3>Shared files</h3><p>Latest client-ready documents</p></div><button class="card-link">View all →</button></div><div class="card-body"><div class="file-row"><span class="file-icon">PDF</span><div><strong>Weekly progress digest.pdf</strong><small>Added today · 248 KB</small></div><span class="pill green">New</span></div><div class="file-row"><span class="file-icon" style="background:var(--blue-soft);color:var(--blue)">DOC</span><div><strong>Approved scope & milestones.docx</strong><small>Signed July 12 · 92 KB</small></div><span class="tag">Approved</span></div><div class="file-row"><span class="file-icon" style="background:var(--purple-soft);color:var(--purple)">URL</span><div><strong>Staging review link</strong><small>Protected link · Updated yesterday</small></div><span class="tag">Open ↗</span></div></div></article></div></div>`, true);
    document.getElementById('portalReviewBtn')?.addEventListener('click', () => toast('Review opened', 'This prototype records the client action without exposing a live staging site.'));
  }

  function exportCSV() {
    const headers = ['Company','Contact','Email','Service','Stage','Value CAD','Source','Consent basis','Discovery paid','Scope approved','Terms signed','Deposit paid'];
    const rows = state.leads.map(l => [l.company,l.contact,l.email,l.service,stageLabel(l.stage),l.value,l.source,l.consent,l.gates.discoveryPaid,l.gates.scopeApproved,l.gates.agreementSigned,l.gates.depositPaid]);
    const csv = [headers, ...rows].map(row => row.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'relayops-pipeline-2026-07-29.csv'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
    toast('Pipeline exported', `${state.leads.length} records downloaded as CSV.`);
  }

  function handleSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const matches = state.leads.filter(l => [l.company,l.contact,l.email,l.service].some(v => String(v).toLowerCase().includes(q)));
    if (matches.length === 1) openLeadDetail(matches[0].id);
    else if (matches.length > 1) {
      state.pipelineFilter = ['shopify','amazon'].includes(q) ? q[0].toUpperCase()+q.slice(1) : q.includes('web') ? 'Web Development' : 'All';
      setView('pipeline'); toast('Search results', `${matches.length} matching records in the pipeline.`);
    } else toast('No matching records', `Nothing found for “${query}”.`, 'error');
  }

  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
  document.getElementById('addLeadBtn').addEventListener('click', () => openLeadModal());
  document.getElementById('portalPreviewBtn').addEventListener('click', () => openPortal());
  document.getElementById('mobileMenu').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
  document.getElementById('notificationBtn').addEventListener('click', () => toast('2 items need attention', 'One deposit is pending and one consent basis needs review.'));
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) closeModal();
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); document.getElementById('globalSearch').focus(); }
  });
  document.getElementById('globalSearch').addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(e.target.value); });

  updateNavCount();
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === state.currentView));
  renderCurrentView();
})();

// ── DOMAIN DEFINITIONS ────────────────────────────────────────────────────
const DOMAINS = [
  { id: 'A', name: 'ERP & Data Foundation',    color: '#009DCD', barColor: '#00B6ED', bg: '#E0F6FD', maxScore: 9 },
  { id: 'B', name: 'Process Maturity',          color: '#5A7077', barColor: '#5A7077', bg: '#E7ECEE', maxScore: 9 },
  { id: 'C', name: 'AI & Tech Readiness',       color: '#C28F1F', barColor: '#F8C556', bg: '#FEF6E1', maxScore: 9 },
  { id: 'D', name: 'Governance & Controls',     color: '#92400E', barColor: '#E8AE34', bg: '#FFFBEB', maxScore: 6 },
  { id: 'E', name: 'Organisational Readiness',  color: '#1F8A5B', barColor: '#1F8A5B', bg: '#E1F1E9', maxScore: 6 },
];

// ── QUESTIONS ─────────────────────────────────────────────────────────────
const QUESTIONS = [
  // Domain A
  { domain:0, text:'How would you describe your current finance and ERP system?',
    why:'The quality of your ERP foundation determines whether AI can work reliably — or at all.',
    answers:[
      {score:0, text:'Multiple disconnected systems or spreadsheets — no single source of truth'},
      {score:1, text:'A legacy system that is end-of-life or significantly under-configured'},
      {score:2, text:'A functioning system but with gaps in data quality or coverage'},
      {score:3, text:'A modern, well-configured ERP with clean, structured, and complete data'},
    ]},
  { domain:0, text:'How long does it typically take to produce your monthly management accounts?',
    why:'Close cycle length is one of the clearest indicators of process and data maturity.',
    answers:[
      {score:0, text:'More than 10 working days — or management accounts are not produced regularly'},
      {score:1, text:'6–10 working days'},
      {score:2, text:'3–5 working days'},
      {score:3, text:'1–2 working days, with largely automated reporting'},
    ]},
  { domain:0, text:'How would you rate the quality and completeness of your transactional data?',
    why:'AI models are only as reliable as the data they learn from.',
    answers:[
      {score:0, text:'Unreliable — frequent errors, gaps, or manual corrections required'},
      {score:1, text:'Partially reliable — some areas clean, others inconsistent'},
      {score:2, text:'Mostly reliable — minor quality issues that are managed'},
      {score:3, text:'Highly reliable — clean, structured, and auditable across all entities'},
    ]},
  // Domain B
  { domain:1, text:'How are your core finance processes — AP, AR, and expenses — managed today?',
    why:'Manual processes create audit risk and constrain the automation potential of any AI layer.',
    answers:[
      {score:0, text:'Predominantly manual — paper, email, or spreadsheets'},
      {score:1, text:'Partially in-system, but with heavy manual intervention'},
      {score:2, text:'Largely in-system with documented workflows'},
      {score:3, text:'Fully in-system with automated approvals and exception-only intervention'},
    ]},
  { domain:1, text:'Are purchase and invoice approval authorities formally documented and enforced in your systems?',
    why:'Unenforced approval authorities are a governance gap that becomes critical at Stage 3 and beyond.',
    answers:[
      {score:0, text:'No documented approval authority matrix is in place'},
      {score:1, text:'Documented on paper or policy but not enforced in systems'},
      {score:2, text:'Partially enforced in systems for some transaction types'},
      {score:3, text:'Fully documented and system-enforced with a complete audit trail'},
    ]},
  { domain:1, text:'How standardised and consistent is your financial period-close process?',
    why:'A reliable close process is the foundation for AI-assisted forecasting and board reporting.',
    answers:[
      {score:0, text:'No formal close process — ad hoc each period'},
      {score:1, text:'An informal checklist exists but is not consistently followed'},
      {score:2, text:'A documented process that is mostly followed'},
      {score:3, text:'Fully documented and system-driven close calendar completed consistently each period'},
    ]},
  // Domain C
  { domain:2, text:"What is your organisation's current experience with AI tools in finance or operations?",
    why:'Prior exposure shapes change readiness and the pace at which AI can be deployed safely.',
    answers:[
      {score:0, text:'No AI tools in use — limited awareness of what is available'},
      {score:1, text:'Informal experimentation, e.g. using general AI tools on an ad hoc basis'},
      {score:2, text:'Piloting one or two AI tools in specific areas of the business'},
      {score:3, text:'Actively using AI with defined use cases and measurable outcomes'},
    ]},
  { domain:2, text:'How would you describe your IT infrastructure and cloud readiness?',
    why:'Cloud-native infrastructure unlocks AI capabilities that on-premise architecture cannot support.',
    answers:[
      {score:0, text:'Predominantly on-premise with limited cloud adoption'},
      {score:1, text:'Mixed — some SaaS tools alongside legacy on-premise systems'},
      {score:2, text:'Mostly cloud-based with modern integrations in place'},
      {score:3, text:'Cloud-first architecture with API-driven integrations and a clear technology roadmap'},
    ]},
  { domain:2, text:'Does your organisation have a defined data strategy or data governance policy?',
    why:'Without data ownership and quality standards, AI augmentation creates as many risks as it resolves.',
    answers:[
      {score:0, text:'No data strategy or governance policy exists'},
      {score:1, text:'Informal understanding of the need but nothing formally documented'},
      {score:2, text:'A basic data governance policy is in place'},
      {score:3, text:'A formal data strategy with defined ownership, classification, and quality standards'},
    ]},
  // Domain D
  { domain:3, text:'How would you describe your internal controls and audit readiness?',
    why:'Weak controls at Stage 2 become critical failures when AI begins executing transactions autonomously.',
    answers:[
      {score:0, text:'Weak controls — audit has raised observations; manual workarounds are common'},
      {score:1, text:'Basic controls in place but with identified gaps'},
      {score:2, text:'Controls are documented and largely effective'},
      {score:3, text:'Strong controls framework — clean audit history, tested and evidenced regularly'},
    ]},
  { domain:3, text:'Does your organisation have policies governing the use of AI or automation?',
    why:'AI governance is increasingly a board and audit committee expectation, not a nice-to-have.',
    answers:[
      {score:0, text:'No AI or automation governance policies exist'},
      {score:1, text:'Informal awareness of the need — no formal policy'},
      {score:2, text:'A basic policy is drafted or currently in development'},
      {score:3, text:'A formal AI governance framework with defined roles, review cadence, and board visibility'},
    ]},
  // Domain E
  { domain:4, text:"How strong is senior leadership's mandate for digital transformation?",
    why:'Without a board-level mandate, transformation stalls at Stage 1. Technology alone does not create change.',
    answers:[
      {score:0, text:'Low — change is resisted; no board-level mandate for transformation'},
      {score:1, text:'Mixed — individual champions exist but there is no unified leadership commitment'},
      {score:2, text:'Positive — leadership support exists but investment is not yet formally committed'},
      {score:3, text:'Strong — board mandate in place, dedicated budget allocated, named executive sponsor'},
    ]},
  { domain:4, text:'How capable is your finance and operations team of adopting new technology?',
    why:'Change capability is the most underestimated constraint in any digital transformation programme.',
    answers:[
      {score:0, text:'Low — significant training would be needed; previous change programmes have struggled'},
      {score:1, text:'Developing — willing but would need substantial support throughout'},
      {score:2, text:'Good — the team has navigated previous technology changes successfully'},
      {score:3, text:'High — experienced with technology adoption; change champions already in place'},
    ]},
];

// ── STAGE DATA ─────────────────────────────────────────────────────────────
const STAGES = {
  1: {
    label: 'Stage 1', name: 'Operational Foundation', range: '0–9',
    color: '#5A7077', bg: '#E7ECEE', borderColor: '#5A7077',
    desc: 'Your organisation needs robust ERP and data foundations before AI investment will deliver reliable returns. The priority is a well-configured, single-source-of-truth ERP — the infrastructure every subsequent stage is built on.',
  },
  2: {
    label: 'Stage 2', name: 'Intelligent Automation', range: '10–19',
    color: '#009DCD', bg: '#E0F6FD', borderColor: '#00B6ED',
    desc: 'Your foundations are in place. The next step is removing the manual transactional layer — automating AP, AR, approvals, and document management — to free your finance team for higher-value work and create the clean data pipeline AI requires.',
  },
  3: {
    label: 'Stage 3', name: 'AI-Augmented Finance', range: '20–29',
    color: '#C28F1F', bg: '#FEF6E1', borderColor: '#F8C556',
    desc: 'Your automated foundation is ready for AI capabilities — anomaly detection, intelligent forecasting, AI-assisted GL coding, and advanced analytics. The four-layer governance framework is essential at this stage to maintain control and audit confidence.',
  },
  4: {
    label: 'Stage 4', name: 'Agentic Finance Operations', range: '30–39',
    color: '#1F8A5B', bg: '#E1F1E9', borderColor: '#1F8A5B',
    desc: 'You are at the frontier. Governed agentic workflows can now execute AP, AR, and close-cycle actions autonomously — with full audit trails and board governance reporting. Finance becomes a competitive capability, not just an operational function.',
  },
};

// ── RECOMMENDATIONS ────────────────────────────────────────────────────────
const RECS = {
  1: {
    x3: [
      {title:'Implement Sage X3 as your single source of truth', detail:'Configure core modules for your sector — manufacturing (BOM, production orders, routings) or distribution (PO, SO, stock management) — with a clean chart of accounts from day one.', tag:'Sage X3'},
      {title:'Establish a dimensional chart of accounts', detail:'Structure your COA with the dimensions you will need at Stage 3 (entity, location, project, cost centre). This architecture cannot easily be restructured once live.', tag:'Foundation'},
      {title:'Embed approval workflows at implementation', detail:'Configure system-enforced approval authorities for purchase orders, invoices, and expenses. Retrofitting governance after go-live costs significantly more in time and risk.', tag:'Governance'},
      {title:'Set up real-time CFO dashboards from go-live', detail:'Cash position, AP/AR ageing, and period-close status dashboards should be in scope at implementation — not a later phase. This is the first tangible board-level return on your ERP investment.', tag:'Reporting'},
      {title:'Do not invest in AI until Stage 2 readiness is confirmed', detail:'AI on an unreliable or incomplete ERP foundation amplifies existing problems. Complete a Finance Operations Review and Governance Configuration Record before progressing.', tag:'Critical'},
    ],
    intacct: [
      {title:'Implement Sage Intacct as your financial system of record', detail:'Configure a dimensional chart of accounts — multi-entity, multi-location, project-level — from day one. Dimensions set here enable AI-assisted group reporting at Stage 3.', tag:'Sage Intacct'},
      {title:'Configure approval workflows from go-live', detail:'Implement approval workflows for POs, invoices, and expense claims in Intacct from day one. Embedding controls at implementation is significantly less costly than retrofitting them later.', tag:'Governance'},
      {title:'Implement bank reconciliation and a period-close calendar', detail:'Set up automated bank reconciliation through Intacct and establish a formal close cycle calendar with period-end checklists. This is the operating rhythm your board reporting depends on.', tag:'Process'},
      {title:'Build real-time CFO visibility from the outset', detail:'Configure Intacct dashboards for real-time cash, AP ageing, AR ageing, and period-close status. Real-time visibility is the first CFO-level return on your Intacct investment.', tag:'Reporting'},
      {title:'Do not invest in AI until Stage 2 readiness is confirmed', detail:'AI on an unreliable or incomplete ERP foundation amplifies existing problems. Complete a Finance Operations Review and Governance Configuration Record before progressing.', tag:'Critical'},
    ],
    both: [
      {title:'Choose the right ERP platform for your sector first', detail:'Sage X3 is designed for manufacturing, wholesale, and distribution. Sage Intacct is built for finance-led organisations — professional services, SaaS, non-profit, and multi-entity groups. Platform choice determines your AI pathway.', tag:'Platform'},
      {title:'Establish a clean, dimensional chart of accounts', detail:'Whichever platform you choose, configure your COA with the dimensions required for multi-entity, project, and cost centre reporting from day one.', tag:'Foundation'},
      {title:'Embed approval workflows at implementation', detail:'System-enforced approval authorities for purchases, invoices, and expenses should be live from go-live. Retrofitting governance costs significantly more in time and risk.', tag:'Governance'},
      {title:'Prioritise real-time CFO visibility', detail:'Cash position, AP/AR ageing, and period-close status dashboards should be part of your initial implementation scope — not a later phase.', tag:'Reporting'},
      {title:'Do not invest in AI until Stage 2 readiness is confirmed', detail:'AI on an unreliable foundation amplifies existing problems rather than solving them. Establish clean data and governed processes first.', tag:'Critical'},
    ],
  },
  2: {
    x3: [
      {title:'Deploy X3CloudDocs for Purchase Invoice Automation', detail:"Mysoft's own IP — X3CloudDocs automates invoice capture, coding, matching, and approval within Sage X3. Target: zero-touch processing for high-volume, low-complexity supplier invoices.", tag:'X3CloudDocs'},
      {title:'Implement Sales Order Automation and EDM', detail:'Automate the inbound sales order process and establish Electronic Document Management across X3. SOA removes the manual sales order entry layer; EDM creates your structured document repository.', tag:'X3CloudDocs'},
      {title:'Enable Electronic Network Automation', detail:'Connect X3CloudDocs ENA for structured supplier and customer communications — purchase order acknowledgements, delivery notes, and remittance advice processed without manual intervention.', tag:'Automation'},
      {title:'Commission your first QAOR at 90 days', detail:'A Quarterly AI Optimisation Review measures automation capture rate, exception volume, and process time savings — and identifies where to expand next.', tag:'Advisory'},
      {title:'Establish Layer 1 and Layer 2 governance', detail:'Process governance (documented workflows, authority matrix) and system governance (configuration records, change control) must be in place before progressing to AI-augmented capabilities.', tag:'Governance'},
    ],
    intacct: [
      {title:'Activate Sage Intacct native AP and AR automation', detail:"Enable Intacct's built-in accounts payable and receivable automation — automated matching, coding suggestions, and approval routing. This is your first automation layer.", tag:'Sage Intacct'},
      {title:'Connect an expense management solution', detail:'Integrate WebExpenses, Payhawk, or a comparable platform with Intacct for automated expense capture, policy enforcement, and payment. Remove the manual expense process entirely.', tag:'Automation'},
      {title:'Implement TrueCommerce for order automation', detail:'For businesses with significant transaction volumes, TrueCommerce connects trading partners directly to Intacct — automating order receipt, confirmation, and invoice issuance.', tag:'Automation'},
      {title:'Commission your first QAOR at 90 days', detail:'A Quarterly AI Optimisation Review measures automation capture rates, exception volumes, and time savings — and identifies where to expand the automation scope next.', tag:'Advisory'},
      {title:'Establish Layer 1 and Layer 2 governance', detail:'Process governance and system governance must be formalised before progressing to AI-augmented capabilities.', tag:'Governance'},
    ],
    both: [
      {title:'Automate your highest-volume transactional processes first', detail:'For X3 businesses, X3CloudDocs PIA and SOA deliver the fastest return. For Intacct businesses, native AP/AR automation and an expense management integration are the priority starting points.', tag:'Automation'},
      {title:'Remove the manual document handling layer', detail:'Electronic Document Management (X3CloudDocs on X3) or Intacct document management eliminates paper and email-based document processes — a prerequisite for AI document intelligence at Stage 3.', tag:'Foundation'},
      {title:'Commission your first QAOR at 90 days post-automation', detail:'A Quarterly AI Optimisation Review establishes your automation baseline — capture rate, exception volume, and process time — and sets the roadmap for Stage 3.', tag:'Advisory'},
      {title:'Formalise Layer 1 and Layer 2 governance', detail:'Process governance and system governance must be documented and operating before AI-augmented capabilities are introduced.', tag:'Governance'},
      {title:'Map your Stage 3 candidates now', detail:'While implementing Stage 2, document the processes that will benefit from AI augmentation at Stage 3. This protects the commercial pathway and prevents scope creep later.', tag:'Planning'},
    ],
  },
  3: {
    x3: [
      {title:'Deploy Sage Enterprise Intelligence for embedded analytics', detail:'SEI provides embedded BI and reporting within Sage X3 — real-time dashboards, KPI monitoring, and data exploration without exporting to spreadsheets. This is your Stage 3 analytics foundation.', tag:'Sage X3'},
      {title:'Connect Phocas or Velixo for advanced reporting', detail:'Phocas delivers operational analytics across X3 data (sales, stock, margin by product/customer/region). Velixo provides Excel-connected board-level financial reporting with live X3 data.', tag:'Analytics'},
      {title:'Implement Netstock for AI-driven inventory optimisation', detail:'Netstock connects to X3 stock data and uses demand forecasting algorithms to reduce inventory holding while maintaining service levels — delivering measurable working capital benefit.', tag:'AI Tool'},
      {title:'Consider Lynq for MES and operational intelligence', detail:'For manufacturers, Lynq provides machine-level data capture and MES capabilities integrated with X3 production orders — connecting the shop floor to the finance function.', tag:'AI Tool'},
      {title:'Implement the full four-layer governance framework', detail:'All four governance layers — process, system, audit, and board review — must be operational. Commission a quarterly Board AI Governance Report from this stage onward.', tag:'Governance'},
    ],
    intacct: [
      {title:'Activate Sage Copilot for AI-assisted insights', detail:'Sage Copilot is native to Intacct and provides AI-driven anomaly detection, variance explanations, and conversational analytics. Activate and configure it for your chart of accounts and key metrics.', tag:'Sage Intacct'},
      {title:'Enable Intelligent GL for automated coding', detail:"Intacct's Intelligent GL uses machine learning to suggest transaction coding based on historical patterns — reducing manual intervention and improving consistency across entities.", tag:'Sage Intacct'},
      {title:'Deploy AI-driven forecasting and cash flow modelling', detail:"Activate Intacct's AI forecasting capabilities for rolling cash flow projections and budget variance modelling. Connect Velixo or Swoop Analytics for board-ready output formatting.", tag:'AI Tool'},
      {title:'Implement Swoop Analytics or Velixo for board reporting', detail:'Connect Swoop Analytics or Velixo to Intacct for automated board pack preparation — pulling live data into formatted management reports with AI-generated commentary.', tag:'Analytics'},
      {title:'Implement the full four-layer governance framework', detail:'All four governance layers must be operational. Commission a quarterly Board AI Governance Report from this stage onward.', tag:'Governance'},
    ],
    both: [
      {title:"Deploy your platform's native AI capabilities first", detail:"For Intacct: Sage Copilot and Intelligent GL. For X3: Sage Enterprise Intelligence. Platform-native AI is lower risk, faster to deploy, and already governed by Sage's own control framework.", tag:'AI Tool'},
      {title:'Add BI and advanced analytics for board-level reporting', detail:'Velixo connects to both X3 and Intacct for board-ready financial reporting. Phocas is optimised for X3 operational analytics; Swoop Analytics for Intacct.', tag:'Analytics'},
      {title:'Implement the full four-layer governance framework', detail:'All four governance layers — process, system, audit, and board review — must be operational before AI tools process material transactions autonomously.', tag:'Governance'},
      {title:'Expand QAOR to include AI performance metrics', detail:'Your Quarterly AI Optimisation Review should now include AI exception rates, model accuracy metrics, and an audit of decisions taken by automated processes since the prior review.', tag:'Advisory'},
      {title:'Document your Stage 4 agentic workflow candidates', detail:'Identify which Stage 3 AI-assisted processes are candidates for fully agentic operation at Stage 4 — typically AP processing, close cycle automation, and exception escalation workflows.', tag:'Planning'},
    ],
  },
  4: {
    x3: [
      {title:'Design and deploy governed agentic AP and AR workflows', detail:'Agentic workflows execute AP matching, payment approval escalation, and AR cash allocation autonomously — within defined thresholds, with full audit trails and override capabilities. X3CloudDocs extensions underpin these workflows.', tag:'Agentic'},
      {title:'Extend X3CloudDocs for agentic supplier interactions', detail:'X3CloudDocs agentic extensions enable automated supplier onboarding, PO acknowledgement handling, and dispute resolution workflows.', tag:'X3CloudDocs'},
      {title:'Run an Agentic Design Workshop', detail:'A structured workshop to map your Wave 1 and Wave 2 agentic deployments — defining thresholds, fallback logic, audit requirements, and governance controls before build begins.', tag:'Advisory'},
      {title:'Commission an Annual Governance Review', detail:'At Stage 4, governance reviews move to annual cadence with board-level reporting — covering agentic workflow performance, AI decision audit, model drift indicators, and strategic alignment.', tag:'Governance'},
      {title:'Position finance as a strategic competitive capability', detail:'Engage Mysoft for a Strategic Finance Advisory engagement — mapping how your AI-enabled finance function creates measurable competitive advantage in your market.', tag:'Strategic'},
    ],
    intacct: [
      {title:'Design and deploy governed agentic workflows in Intacct', detail:'Sage Intacct agentic workflows execute AP processing, GL coding, and close-cycle actions autonomously — within defined governance thresholds and with full audit trail capture.', tag:'Agentic'},
      {title:'Automate the period-close cycle end-to-end', detail:'At Stage 4, the Intacct close cycle should be largely autonomous — automated reconciliations, journal entries, variance flags, and commentary drafted by AI for FD review. Target: close in under 24 hours.', tag:'Sage Intacct'},
      {title:'Run an Agentic Design Workshop', detail:'A structured workshop to define Wave 1 and Wave 2 agentic deployments — establishing thresholds, fallback logic, and governance controls before build begins.', tag:'Advisory'},
      {title:'Implement board-level AI Governance Reporting', detail:'Commission quarterly Board AI Governance Reports — covering agentic workflow performance, AI decision volumes, exception rates, model accuracy, and regulatory compliance indicators.', tag:'Governance'},
      {title:'Position finance as a strategic competitive capability', detail:'Engage Mysoft for a Strategic Finance Advisory engagement to quantify and communicate the competitive advantage your AI-enabled finance function delivers.', tag:'Strategic'},
    ],
    both: [
      {title:'Define your agentic workflow architecture', detail:'Map which finance processes are candidates for agentic operation — typically AP matching and payment, AR cash allocation, GL coding, and close-cycle reconciliations. Each requires defined thresholds, fallback logic, and governance controls.', tag:'Agentic'},
      {title:'Run an Agentic Finance Design Workshop', detail:'A structured Mysoft workshop to design your Wave 1 and Wave 2 agentic deployments before build begins. This is the most important planning investment at Stage 4.', tag:'Advisory'},
      {title:'Implement board-level AI Governance Reporting', detail:'Board AI Governance Reports should cover: agentic workflow performance, AI decision volumes, exception escalation rates, model accuracy trends, and regulatory/compliance posture.', tag:'Governance'},
      {title:'Move to an Annual Governance Review cadence', detail:'At Stage 4, governance reviews move to annual strategic cycle — assessing the full AI programme against business objectives, not just technical metrics.', tag:'Governance'},
      {title:'Position finance as a competitive differentiator', detail:'Engage Mysoft for a Strategic Finance Advisory engagement — quantifying how your AI-enabled finance function creates measurable competitive advantage and positions the business for its next growth chapter.', tag:'Strategic'},
    ],
  },
};

// ── STATE ──────────────────────────────────────────────────────────────────
let selectedPlatform = null;
let answers = new Array(13).fill(null);
let currentQ = 0;

// ── PAGE NAVIGATION ────────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function goToWelcome() { showPage('welcome'); }
function goToPlatform() { showPage('platform'); }

// ── PLATFORM SELECTION ─────────────────────────────────────────────────────
function selectPlatform(platform, el) {
  selectedPlatform = platform;
  document.querySelectorAll('.platform-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('btn-start-questions').disabled = false;
}
function startQuestions() {
  if (!selectedPlatform) return;
  currentQ = 0;
  answers = new Array(13).fill(null);
  renderQuestion();
  showPage('question');
}

// ── QUESTION RENDERING ─────────────────────────────────────────────────────
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const domain = DOMAINS[q.domain];
  const total = QUESTIONS.length;

  document.getElementById('q-domain-label').textContent = domain.name;
  document.getElementById('q-count-label').textContent = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;

  const dotsEl = document.getElementById('step-dots');
  dotsEl.innerHTML = QUESTIONS.map((qq, i) => {
    let cls = '';
    if (i < currentQ) cls = 'done';
    else if (i === currentQ) cls = 'active';
    return `<div class="step-dot ${cls}"></div>`;
  }).join('');

  const badge = document.getElementById('q-domain-badge');
  badge.textContent = `Domain ${domain.id}: ${domain.name}`;
  badge.style.background = domain.bg;
  badge.style.color = domain.color;

  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-why').textContent = `Why this matters: ${q.why}`;

  document.getElementById('answer-list').innerHTML = q.answers.map(a => `
    <div class="answer-item ${answers[currentQ] === a.score ? 'selected' : ''}"
         onclick="selectAnswer(${a.score}, this)">
      <div class="answer-radio"></div>
      <span class="answer-text">${a.text}</span>
    </div>
  `).join('');

  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  prevBtn.style.visibility = currentQ === 0 ? 'hidden' : 'visible';

  const answered = answers[currentQ] !== null;
  nextBtn.disabled = !answered;
  nextBtn.innerHTML = currentQ === total - 1
    ? 'See my results <span class="arrow">→</span>'
    : 'Next <span class="arrow">→</span>';
  document.getElementById('q-nav-hint').textContent = answered ? '' : 'Select an answer to continue';
}

function selectAnswer(score, el) {
  answers[currentQ] = score;
  document.querySelectorAll('.answer-item').forEach(a => a.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('btn-next').disabled = false;
  document.getElementById('q-nav-hint').textContent = '';
}

function nextQuestion() {
  if (answers[currentQ] === null) return;
  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    computeAndShowResults();
  }
}
function prevQuestion() {
  if (currentQ > 0) { currentQ--; renderQuestion(); window.scrollTo({ top:0, behavior:'smooth' }); }
}

// ── SCORING + RESULTS ──────────────────────────────────────────────────────
function computeAndShowResults() {
  const domainScores = [0, 0, 0, 0, 0];
  QUESTIONS.forEach((q, i) => { domainScores[q.domain] += (answers[i] || 0); });
  const total = domainScores.reduce((a, b) => a + b, 0);

  let stage = total <= 9 ? 1 : total <= 19 ? 2 : total <= 29 ? 3 : 4;

  const overrides = [];
  if (domainScores[0] <= 2 && stage > 2) {
    overrides.push({ domain: 'A', score: domainScores[0], max: 9,
      msg: `Domain A (ERP & Data Foundation) score is critically low (${domainScores[0]}/9). AI on an unreliable ERP foundation is high-risk. We recommend treating this as Stage 1 or early Stage 2 until the data foundation is strengthened.` });
    stage = Math.min(stage, 2);
  }
  if (domainScores[3] <= 1 && stage > 2) {
    overrides.push({ domain: 'D', score: domainScores[3], max: 6,
      msg: `Domain D (Governance & Controls) score is too low (${domainScores[3]}/6) to safely progress beyond Stage 2. Strengthening internal controls and AI governance policies is a prerequisite for advancing.` });
    stage = Math.min(stage, 2);
  }

  renderResults(total, domainScores, stage, overrides);
  showPage('results');
}

function renderResults(total, domainScores, stage, overrides) {
  const sd = STAGES[stage];
  const platform = selectedPlatform || 'both';

  const card = document.getElementById('stage-result-card');
  card.style.borderLeftColor = sd.borderColor;

  const badgeEl = document.getElementById('stage-badge-el');
  badgeEl.innerHTML = `<span class="badge" style="background:${sd.bg};color:${sd.color};"><span class="badge-dot"></span>${sd.label}</span>`;

  document.getElementById('stage-name-el').textContent = `${sd.label} — ${sd.name}`;
  document.getElementById('stage-desc-el').textContent = sd.desc;
  document.getElementById('score-num-el').textContent = total;
  document.getElementById('score-num-el').style.color = sd.color;

  document.getElementById('override-alerts-el').innerHTML = overrides.map(o => `
    <div class="override-box">
      <svg width="16" height="16" fill="none" stroke="#92400E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:1px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <span><strong>Override applied — Domain ${o.domain}:</strong> ${o.msg}</span>
    </div>
  `).join('');

  document.getElementById('domain-bars-el').innerHTML = DOMAINS.map((d, i) => {
    const pct = Math.round((domainScores[i] / d.maxScore) * 100);
    return `
      <div class="domain-bar-row">
        <span class="domain-bar-letter">${d.id}</span>
        <div class="domain-bar-track">
          <div class="domain-bar-fill" style="width:${pct}%;background:${d.barColor};"></div>
        </div>
        <span class="domain-bar-score">${domainScores[i]}/${d.maxScore}</span>
      </div>
    `;
  }).join('');

  document.getElementById('ladder-el').innerHTML = [4,3,2,1].map(s => {
    const st = STAGES[s];
    const isCurrent = s === stage;
    return `
      <div class="ladder-rung ${isCurrent ? 'current' : ''}"
           style="${isCurrent ? `border-color:${st.borderColor};background:${st.bg};` : ''}">
        <span class="ladder-rung-stage-num" style="${isCurrent ? `color:${st.color};` : ''}">${st.label}</span>
        <span class="ladder-rung-name">${st.name}</span>
        <div class="ladder-active-indicator"></div>
      </div>
    `;
  }).join('');

  const recsData = RECS[stage][platform] || RECS[stage]['both'];
  document.getElementById('recs-title-el').textContent = `Priority Recommendations — ${sd.name}`;
  document.getElementById('recs-list-el').innerHTML = recsData.map((r, i) => {
    const tagStyle = r.tag === 'Critical'
      ? `background:#FBEAE7;color:#C6362D;`
      : `background:${sd.bg};color:${sd.color};`;
    return `
      <div class="rec-item">
        <div class="rec-num" style="background:${sd.color};">${i + 1}</div>
        <div class="rec-body">
          <h4>${r.title}</h4>
          <p>${r.detail}</p>
          <span class="rec-tag" style="${tagStyle}">${r.tag}</span>
        </div>
      </div>
    `;
  }).join('');
}

function restartAssessment() {
  answers = new Array(13).fill(null);
  currentQ = 0;
  selectedPlatform = null;
  document.querySelectorAll('.platform-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('btn-start-questions').disabled = true;
  showPage('welcome');
}

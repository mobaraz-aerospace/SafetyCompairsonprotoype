
/*
  app.js — lightweight prototype logic
  - Uses Chart.js for radar chart
  - Data is illustrative. Replace 'PRODUCTS' with real validated product info in production.
*/

const PRODUCTS = [
  {
    id: "airbus_a320",
    name: "Airbus A320 Family",
    manufacturer: "Airbus",
    year: 1987,
    overview: "Fly-by-wire architecture, flight control laws, dual hydraulic systems, triple-redundant flight computers (varies by model).",
    attributes: {
      redundancy: 9,
      automation: 9,
      maintainability: 7,
      maturity: 8,
      certification_rigor: 9
    },
    specs: {
      typical_capacity: "140-240 pax",
      power_architecture: "Dual electrical + RAT + APU",
      flight_control: "Fly-by-wire, side-stick, flight control laws",
      recorders: "FDR/CVR",
    },
    diagram: `<svg width="320" height="160" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="120" height="60" rx="6" fill="#0b2a34" stroke="#1f7a8c"/>
      <text x="68" y="40" fill="#9fe5ef" font-size="12" text-anchor="middle">Flight Computers (TRIPLE)</text>
      <rect x="192" y="8" width="120" height="60" rx="6" fill="#0b2a34" stroke="#6cc3d1"/>
      <text x="252" y="40" fill="#9fe5ef" font-size="12" text-anchor="middle">Hydraulics (DUAL)</text>
      <path d="M128 38 L192 38" stroke="#9fe5ef" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="160" cy="80" r="18" fill="#06242a" stroke="#6cc3d1"/>
      <text x="160" y="84" fill="#9fe5ef" font-size="11" text-anchor="middle">Airbus</text>
    </svg>`
  },
  {
    id: "boeing_737",
    name: "Boeing 737 Family",
    manufacturer: "Boeing",
    year: 1967,
    overview: "Conventional control laws (varies by model), dual hydraulic systems, multiple redundancies across sensors and actuators; architecture emphasizes pilot authority and layered protections.",
    attributes: {
      redundancy: 8,
      automation: 8,
      maintainability: 8,
      maturity: 9,
      certification_rigor: 9
    },
    specs: {
      typical_capacity: "130-230 pax",
      power_architecture: "Dual electrical + APU",
      flight_control: "Conventional controls with flight augmentation",
      recorders: "FDR/CVR",
    },
    diagram: `<svg width="320" height="160" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="120" height="60" rx="6" fill="#120b1a" stroke="#8c6cdb"/>
      <text x="68" y="40" fill="#d8c8ff" font-size="12" text-anchor="middle">Flight Computers (DUAL)</text>
      <rect x="192" y="8" width="120" height="60" rx="6" fill="#120b1a" stroke="#a28fe9"/>
      <text x="252" y="40" fill="#d8c8ff" font-size="12" text-anchor="middle">Hydraulics (DUAL)</text>
      <path d="M128 38 L192 38" stroke="#d8c8ff" stroke-width="2" stroke-dasharray="2 2"/>
      <circle cx="160" cy="80" r="18" fill="#0b0710" stroke="#a28fe9"/>
      <text x="160" y="84" fill="#d8c8ff" font-size="11" text-anchor="middle">Boeing</text>
    </svg>`
  },
  {
    id: "hitachi_cbct",
    name: "Hitachi CBTC (example)",
    manufacturer: "Hitachi Rail",
    year: 2008,
    overview: "Communication-Based Train Control with moving-block capability, typically designed with dual-redundant interlocking and SIL levels targeted for mainline/metro.",
    attributes: {
      redundancy: 8,
      automation: 8,
      maintainability: 7,
      maturity: 7,
      certification_rigor: 8
    },
    specs: {
      typical_capacity: "Dependent on implementation",
      power_architecture: "Dual power feeds, UPS for wayside",
      control: "Centralized control with wayside CBTC units",
      recorders: "Event/logging",
    },
    diagram: `<svg width="320" height="160" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="120" height="50" rx="6" fill="#07321a" stroke="#2db56b"/>
      <text x="68" y="36" fill="#b6f1d6" font-size="12" text-anchor="middle">Wayside CT</text>
      <rect x="192" y="8" width="120" height="50" rx="6" fill="#07321a" stroke="#5fe089"/>
      <text x="252" y="36" fill="#b6f1d6" font-size="12" text-anchor="middle">ATO/ATO Server</text>
      <path d="M128 32 L192 32" stroke="#b6f1d6" stroke-width="2" stroke-dasharray="6 3"/>
      <circle cx="160" cy="100" r="18" fill="#042511" stroke="#5fe089"/>
      <text x="160" y="104" fill="#b6f1d6" font-size="11" text-anchor="middle">Hitachi</text>
    </svg>`
  },
  {
    id: "siemens_trainguard",
    name: "Siemens Trainguard MT",
    manufacturer: "Siemens Mobility",
    year: 2010,
    overview: "Siemens' CBTC solution with distributed interlocking and multi-layered fail-safes; supports SIL targets and redundancy across communications and control servers.",
    attributes: {
      redundancy: 8,
      automation: 7,
      maintainability: 8,
      maturity: 7,
      certification_rigor: 8
    },
    specs: {
      typical_capacity: "Dependent on implementation",
      power_architecture: "Redundant power with UPS",
      control: "Distributed interlocking + ATO integration",
      recorders: "Event/logging",
    },
    diagram: `<svg width="320" height="160" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="120" height="50" rx="6" fill="#1a0732" stroke="#b56bd8"/>
      <text x="68" y="36" fill="#f0d6ff" font-size="12" text-anchor="middle">Interlocking (DUAL)</text>
      <rect x="192" y="8" width="120" height="50" rx="6" fill="#1a0732" stroke="#d893ff"/>
      <text x="252" y="36" fill="#f0d6ff" font-size="12" text-anchor="middle">ATO / Server</text>
      <path d="M128 32 L192 32" stroke="#f0d6ff" stroke-width="2" stroke-dasharray="3 3"/>
      <circle cx="160" cy="100" r="18" fill="#0b0316" stroke="#d893ff"/>
      <text x="160" y="104" fill="#f0d6ff" font-size="11" text-anchor="middle">Siemens</text>
    </svg>`
  }
];

// Helpers
function $(id){return document.getElementById(id)}

function populateSelectors(){
  const selA = $('productA'), selB = $('productB');
  PRODUCTS.forEach(p=>{
    const o1 = document.createElement('option'); o1.value=p.id; o1.textContent=p.name;
    const o2 = document.createElement('option'); o2.value=p.id; o2.textContent=p.name;
    selA.appendChild(o1); selB.appendChild(o2);
  });
  // default selection
  selA.value = PRODUCTS[0].id;
  selB.value = PRODUCTS[1].id;
}

function findProduct(id){ return PRODUCTS.find(p=>p.id===id) }

let radarChart = null;

function renderOverview(prod, side){
  $(`title${side}`).textContent = `${prod.name} — ${prod.manufacturer} (${prod.year})`;
  $(`diagram${side}`).innerHTML = prod.diagram;
  // short overview appended
  let card = $(`card${side}`);
  let p = card.querySelector('.overview-text');
  if(!p){
    p = document.createElement('p'); p.className='overview-text'; card.appendChild(p);
  }
  p.textContent = prod.overview;
}

function renderSpecsTable(a,b){
  const keys = new Set([...Object.keys(a.specs), ...Object.keys(b.specs)]);
  const wrapper = $('specsTable');
  let html = '<table class="specs-table">';
  html += '<tr><th>Attribute</th><th>' + a.name + '</th><th>' + b.name + '</th></tr>';
  keys.forEach(k=>{
    html += `<tr><td>${k.replace(/_/g,' ')}</td><td>${a.specs[k] || '-'}</td><td>${b.specs[k] || '-'}</td></tr>`;
  });
  html += '</table>';
  wrapper.innerHTML = html;
}

function renderRadar(a,b){
  const labels = Object.keys(a.attributes);
  const dataA = labels.map(l=>a.attributes[l]);
  const dataB = labels.map(l=>b.attributes[l]);
  const ctx = $('radarChart').getContext('2d');
  if(radarChart) radarChart.destroy();
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets:[
        {
          label: a.name,
          data: dataA,
          fill: true,
          backgroundColor: 'rgba(31,122,140,0.2)',
          borderColor: 'rgba(31,122,140,0.9)',
          pointBackgroundColor: 'rgba(31,122,140,1)'
        },
        {
          label: b.name,
          data: dataB,
          fill: true,
          backgroundColor: 'rgba(162,143,233,0.15)',
          borderColor: 'rgba(162,143,233,0.95)',
          pointBackgroundColor: 'rgba(162,143,233,1)'
        }
      ]
    },
    options: {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 10,
          ticks: { stepSize: 2, color: '#b6d7db' },
          grid: { color: 'rgba(255,255,255,0.04)' },
          pointLabels: { color: '#cde' }
        }
      },
      plugins: { legend: { labels: { color:'#cfe' } } }
    }
  });
}

function compare(){
  const a = findProduct($('productA').value);
  const b = findProduct($('productB').value);
  renderOverview(a,'A');
  renderOverview(b,'B');
  renderSpecsTable(a,b);
  renderRadar(a,b);
}

function runScenario(){
  const scenario = $('scenarioSelect').value;
  const a = findProduct($('productA').value);
  const b = findProduct($('productB').value);
  const out = $('scenarioOutput');
  out.innerHTML = '';
  // simple illustrative rule engine
  function outcome(prod){
    if(scenario==='sensor'){
      const res = prod.attributes.redundancy >=8 ? 'Handled via sensor voting & cross-checks' : 'Requires manual diversion or degraded mode';
      return res;
    } else if(scenario==='power'){
      const res = prod.specs.power_architecture && prod.specs.power_architecture.includes('Dual') ? 'Maintains essential functions on backup' : 'Risk of degraded controls';
      return res;
    } else if(scenario==='brake'){
      const res = prod.specs.flight_control && prod.specs.flight_control.toLowerCase().includes('fly-by-wire') ? 'Automatic braking augmentation + manual fallback' : 'Mechanical/pneumatic fallback expected';
      return res;
    }
    return 'No data';
  }
  const elA = document.createElement('div'); elA.className='scenario-card'; elA.innerHTML=`<h4>${a.name}</h4><p>${outcome(a)}</p>`;
  const elB = document.createElement('div'); elB.className='scenario-card'; elB.innerHTML=`<h4>${b.name}</h4><p>${outcome(b)}</p>`;
  out.appendChild(elA); out.appendChild(elB);
}

document.addEventListener('DOMContentLoaded', ()=>{
  populateSelectors();
  compare();
  $('compareBtn').addEventListener('click', compare);
  $('runScenario').addEventListener('click', runScenario);
});

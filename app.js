const PRODUCTS = [
  {
    id: "a320",
    name: "Airbus A320",
    manufacturer: "Airbus",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Two pack air conditioning system with mix manifold.", redundancy: "Dual pack + ram air ventilation backup.", notes: "Pack controllers auto manage flow, cockpit can override." },
      "27": { name: "Flight Controls", architecture: "Fly-by-wire with 5 flight control computers (2 ELAC, 3 SEC).", redundancy: "Triple-channel computers, dual hydraulic actuators.", notes: "Normal law protections, mechanical backup for stabilizer." },
      "28": { name: "Fuel", architecture: "Wing tanks + center tank with automatic transfer.", redundancy: "Dual pumps per tank, crossfeed valve.", notes: "Fuel control managed by FCMC." },
      "32": { name: "Landing Gear", architecture: "Hydraulic main gear with electro-hydraulic brakes.", redundancy: "Dual hydraulic circuits with alternate extension system.", notes: "Brake-by-wire with anti-skid." },
      "34": { name: "Navigation", architecture: "Triple IRS + dual GPS + radio navaids.", redundancy: "3 independent IRS systems.", notes: "FMGC handles sensor fusion for navigation." },
      "71": { name: "Powerplant", architecture: "Two turbofan engines with FADEC control.", redundancy: "Dual-channel FADEC per engine.", notes: "APU available for ground/backup power." }
    }
  },
  {
    id: "b737",
    name: "Boeing 737 NG",
    manufacturer: "Boeing",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Two pack air conditioning system.", redundancy: "Dual pack + manual ram air valve backup.", notes: "Mix manifold with manual trim air control." },
      "27": { name: "Flight Controls", architecture: "Conventional mechanical controls with hydraulically powered actuators.", redundancy: "Dual hydraulic systems, standby hydraulic pump.", notes: "Manual reversion possible for ailerons and elevator." },
      "28": { name: "Fuel", architecture: "Wing tanks + center tank with automatic and manual pump switches.", redundancy: "Two electric pumps per tank.", notes: "Crossfeed valve manually controlled." },
      "32": { name: "Landing Gear", architecture: "Hydraulically actuated gear with mechanical uplock release.", redundancy: "Alternate extension via gravity drop.", notes: "Carbon brakes on later variants." },
      "34": { name: "Navigation", architecture: "Dual IRS + dual GPS + radio navaids.", redundancy: "Two independent IRS systems.", notes: "Crew selects navigation source manually if needed." },
      "71": { name: "Powerplant", architecture: "Two turbofan engines with hydromechanical backup.", redundancy: "Dual-channel EEC per engine.", notes: "APU available for ground/backup power." }
    }
  }
];

let selectedProduct1 = null;
let selectedProduct2 = null;
let selectedProduct1Name = "";
let selectedProduct2Name = "";

window.onload = () => {
  const p1 = document.getElementById('product1');
  const p2 = document.getElementById('product2');
  PRODUCTS.forEach(p => {
    const opt1 = document.createElement('option');
    opt1.value = p.id;
    opt1.textContent = p.name;
    p1.appendChild(opt1);
    const opt2 = document.createElement('option');
    opt2.value = p.id;
    opt2.textContent = p.name;
    p2.appendChild(opt2);
  });

  document.getElementById('compareBtn').addEventListener('click', () => {
    selectedProduct1 = p1.value;
    selectedProduct2 = p2.value;
    selectedProduct1Name = PRODUCTS.find(p => p.id === selectedProduct1)?.name || "";
    selectedProduct2Name = PRODUCTS.find(p => p.id === selectedProduct2)?.name || "";
    document.getElementById('compareResult').innerHTML =
      `<h2>Comparing ${selectedProduct1Name} vs ${selectedProduct2Name}</h2>`;
  });

  document.getElementById('ataSelect').addEventListener('change', function() {
    const ata = this.value;
    const prod1 = PRODUCTS.find(p => p.id === selectedProduct1);
    const prod2 = PRODUCTS.find(p => p.id === selectedProduct2);
    if (!prod1 || !prod2) {
      document.getElementById('systemCompare').innerHTML = "<p>Please select two aircraft first.</p>";
      return;
    }
    if (ata && prod1.systems[ata] && prod2.systems[ata]) {
      renderSystemComparison(prod1.systems[ata], prod2.systems[ata]);
    } else {
      document.getElementById('systemCompare').innerHTML =
        "<p>No data available for this system comparison.</p>";
    }
  });
};

function renderSystemComparison(sys1, sys2) {
  document.getElementById('systemCompare').innerHTML = `
    <h3>${sys1.name} (ATA) Comparison</h3>
    <table>
      <tr><th>Feature</th><th>${selectedProduct1Name}</th><th>${selectedProduct2Name}</th></tr>
      <tr><td>Architecture</td><td>${sys1.architecture}</td><td>${sys2.architecture}</td></tr>
      <tr><td>Redundancy</td><td>${sys1.redundancy}</td><td>${sys2.redundancy}</td></tr>
      <tr><td>Notes</td><td>${sys1.notes}</td><td>${sys2.notes}</td></tr>
    </table>
  `;
}

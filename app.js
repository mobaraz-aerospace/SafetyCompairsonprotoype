const PRODUCTS = [
  {
    id: "a320",
    name: "Airbus A320",
    manufacturer: "Airbus",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Two pack air conditioning system with mix manifold.", redundancy: "Dual pack + ram air ventilation backup.", notes: "Pack controllers auto manage flow, cockpit can override." },
      "27": { name: "Flight Controls", architecture: "Fly-by-wire with 5 flight control computers.", redundancy: "Triple-channel computers, dual hydraulic actuators.", notes: "Normal law protections, mechanical backup for stabilizer." },
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
  },
  {
    id: "a350",
    name: "Airbus A350",
    manufacturer: "Airbus",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Advanced pack-based air conditioning with optimized flow control.", redundancy: "Multiple packs with electrical backups.", notes: "More-electric architecture improves efficiency." },
      "27": { name: "Flight Controls", architecture: "Full fly-by-wire with advanced control laws.", redundancy: "Multiple independent flight control computers.", notes: "High redundancy and envelope protections." },
      "28": { name: "Fuel", architecture: "Distributed fuel tanks with automatic center-wing transfer.", redundancy: "Multiple pumps and crossfeed logic.", notes: "Fuel managed by central fuel management computers." },
      "32": { name: "Landing Gear", architecture: "Electro-hydraulic gear and brake systems.", redundancy: "Dual hydraulic circuits with backup electrical actuators.", notes: "Brake-by-wire with advanced health monitoring." },
      "34": { name: "Navigation", architecture: "Triple IRS, multi-GPS, radio navaids, RNP capability.", redundancy: "Multiple parallel systems.", notes: "Enhanced navigation accuracy and fault tolerance." },
      "71": { name: "Powerplant", architecture: "High-bypass turbofans with FADEC.", redundancy: "Dual-channel FADEC.", notes: "Optimized for fuel efficiency and ETOPS." }
    }
  },
  {
    id: "b787",
    name: "Boeing 787 Dreamliner",
    manufacturer: "Boeing",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Electric-powered cabin conditioning packs.", redundancy: "Multiple packs with electrical power sources.", notes: "Bleedless architecture reduces engine load." },
      "27": { name: "Flight Controls", architecture: "Advanced fly-by-wire system.", redundancy: "Multiple FCC channels.", notes: "Improved stability and efficiency." },
      "28": { name: "Fuel", architecture: "Multiple wing tanks with electrical pumps.", redundancy: "Dual pumps per tank, crossfeed system.", notes: "Advanced monitoring and automation." },
      "32": { name: "Landing Gear", architecture: "Hydraulic gear with electric brakes.", redundancy: "Multiple hydraulic sources with electric backup.", notes: "Brake-by-wire with advanced monitoring." },
      "34": { name: "Navigation", architecture: "Dual IRS, dual GPS, RNP-capable.", redundancy: "Independent navigation computers.", notes: "Supports advanced nav procedures." },
      "71": { name: "Powerplant", architecture: "Turbofans with dual-channel FADEC.", redundancy: "Dual electronic controllers.", notes: "Optimized for long-haul operations." }
    }
  },
  {
    id: "e190",
    name: "Embraer E190",
    manufacturer: "Embraer",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Two pack system with recirculation fans.", redundancy: "Dual packs, backup fans.", notes: "Simplified compared to widebodies." },
      "27": { name: "Flight Controls", architecture: "Fly-by-wire for primary, mechanical backup.", redundancy: "Multiple control computers + backup.", notes: "Provides protections similar to larger jets." },
      "28": { name: "Fuel", architecture: "Wing tanks with center tank transfer.", redundancy: "Dual pumps per tank.", notes: "Automatic fuel management logic." },
      "32": { name: "Landing Gear", architecture: "Hydraulic main gear, electromechanical nose gear steering.", redundancy: "Alternate extension system.", notes: "Conventional but reliable." },
      "34": { name: "Navigation", architecture: "Dual IRS, dual GPS, VOR/ILS.", redundancy: "Two systems.", notes: "Adequate for regional ops." },
      "71": { name: "Powerplant", architecture: "Two turbofan engines with FADEC.", redundancy: "Dual-channel FADEC per engine.", notes: "ETOPS-capable for short oceanic sectors." }
    }
  },
  {
    id: "crj900",
    name: "Bombardier CRJ900",
    manufacturer: "Bombardier",
    systems: {
      "21": { name: "Air Conditioning", architecture: "Two pack system with mix manifold.", redundancy: "Dual pack, manual ram air backup.", notes: "Standard for regional jets." },
      "27": { name: "Flight Controls", architecture: "Conventional hydraulically powered controls.", redundancy: "Dual hydraulic systems.", notes: "No full FBW, but reliable." },
      "28": { name: "Fuel", architecture: "Wing tanks with transfer to engines.", redundancy: "Two pumps per wing tank.", notes: "Crossfeed available." },
      "32": { name: "Landing Gear", architecture: "Hydraulic main gear, gravity freefall extension.", redundancy: "Dual hydraulics + manual backup.", notes: "Mechanical simplicity aids reliability." },
      "34": { name: "Navigation", architecture: "Dual IRS, GPS, VOR/ILS.", redundancy: "Two navigation computers.", notes: "Adequate for typical routes." },
      "71": { name: "Powerplant", architecture: "Two turbofans with EEC.", redundancy: "Dual-channel EEC per engine.", notes: "APU backup." }
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

// components/sections/PriceConversionsSection.jsx

const unitRows = [
  { unit: "Per metric tonne (1,000 kg)", lce: "$11,000", lioh: "$13,500", sc6: "$800" },
  { unit: "Per kilogram", lce: "$11.00", lioh: "$13.50", sc6: "$0.80" },
  { unit: "Per gram", lce: "$0.011", lioh: "$0.0135", sc6: "$0.0008" },
  { unit: "Per pound (lb)", lce: "$4.99", lioh: "$6.12", sc6: "$0.36" },
  { unit: "Per troy ounce (31.1g)", lce: "$0.342", lioh: "$0.420", sc6: "$0.025" },
];

const conversionRows = [
  { from: "1 tonne Li metal", to: "LCE", multiply: "× 5.323", equiv: "$58,553" },
  { from: "1 tonne Li₂CO₃ (carbonate)", to: "LCE", multiply: "× 1.0 (it IS LCE)", equiv: "$11,000" },
  { from: "1 tonne LiOH·H₂O (hydroxide, 56.5%)", to: "LCE", multiply: "÷ 6.31 = 0.158t LCE", equiv: "$1,742 equiv." },
  { from: "1 tonne SC6 spodumene (6% Li₂O)", to: "LCE", multiply: "÷ 8.9 = 0.112t LCE", equiv: "$1,236 equiv." },
  { from: "1 tonne SC5.5 spodumene", to: "LCE", multiply: "÷ 9.7 = 0.103t LCE", equiv: "$1,134 equiv." },
];

const evRows = [
  { type: "Budget EV (LFP)", battery: "40 kWh", kwhRatio: "0.65", kgLce: "26 kg", low: "$286", peak: "$2,080" },
  { type: "Standard EV (LFP)", battery: "60 kWh", kwhRatio: "0.65", kgLce: "39 kg", low: "$429", peak: "$3,120" },
  { type: "Mid-range EV (NMC 622)", battery: "75 kWh", kwhRatio: "0.70", kgLce: "53 kg", low: "$580", peak: "$4,218" },
  { type: "Long-range EV (NMC 811)", battery: "90 kWh", kwhRatio: "0.65", kgLce: "59 kg", low: "$645", peak: "$4,688" },
  { type: "Electric bus", battery: "350 kWh", kwhRatio: "0.65", kgLce: "228 kg", low: "$2,502", peak: "$18,200" },
  { type: "Grid storage (1 MWh)", battery: "1,000 kWh", kwhRatio: "0.65", kgLce: "650 kg", low: "$7,150", peak: "$52,000" },
];

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-bdr mb-10">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#F4F7FB] border-b border-bdr">
            {headers.map((h) => (
              <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i} className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"}`}>
              {cells.map((cell, j) => (
                <td key={j} className="px-5 py-4 text-ink/80 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PriceConversionsSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="price-conversions">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section — Useful Data
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Lithium Price Per Kg, Per Gram — Conversions &amp; Reference Table
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          Lithium prices are quoted differently depending on context — $/tonne for
          industrial buyers, $/kg for small quantities, even $/gram for laboratory use.
          Here are the current prices and conversion table for reference:
        </p>

        <Table
          headers={["Unit", "LCE at $11,000/t", "LiOH at $13,500/t", "SC6 at $800/t"]}
          rows={unitRows.map((r) => [r.unit, r.lce, r.lioh, r.sc6])}
        />

        <p className="text-xs text-ink/50 -mt-6 mb-10">
          Note: Prices shown are approximate April 2026 assessments. LCE = lithium
          carbonate equivalent (Li₂CO₃). LiOH = lithium hydroxide monohydrate 56.5% Li.
          SC6 = spodumene concentrate 6% Li₂O grade, CIF China.
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          Lithium product conversion factors (fixed constants)
        </h3>
        <Table
          headers={["From", "To LCE", "Multiply by", "At $11,000/t LCE"]}
          rows={conversionRows.map((r) => [r.from, r.to, r.multiply, r.equiv])}
        />

        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          Lithium content in an EV at current prices
        </h3>
        <Table
          headers={["Vehicle type", "Battery size", "kg LCE/kWh", "kg LCE in battery", "Li cost at $11k/t", "Li cost at $80k/t peak"]}
          rows={evRows.map((r) => [r.type, r.battery, r.kwhRatio, r.kgLce, r.low, r.peak])}
        />

        <p className="text-base text-ink/80 max-w-3xl leading-relaxed">
          The dramatic improvement in lithium cost per EV — from $4,200 for a standard
          EV at the $80,000/t peak to $580 today — is one reason EV margins have
          improved significantly since 2022, and one reason battery manufacturers have
          been so reluctant to pass any cost savings to consumers. The "raw materials
          benefit" largely accrued to OEM and cell manufacturer margins.
        </p>

      </div>
    </section>
  );
}
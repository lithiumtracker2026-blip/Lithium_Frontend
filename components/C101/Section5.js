import React from 'react';

const FORECAST_CARDS = [
  {
    tag: "🟢 Bull case (IEA NZE)",
    tagColor: "text-grn",
    borderTop: "border-t-[3px] border-t-grn",
    price: "$18,000–$22,000",
    text: "Deficit arrives 2026 H2. Lepidolite curtails 40%+. EV growth accelerates with Chinese stimulus. Price recovery to incentive level by 2027–2028.",
    note: "Requires curtailment to accelerate significantly",
  },
  {
    tag: "🔵 Base case (BNEF/BMI consensus)",
    tagColor: "text-li-d",
    borderTop: "border-t-[3px] border-t-li",
    price: "$14,000–$16,000",
    text: "Deficit emerges late 2026 or 2027. Moderate recovery. LCE reaches $14–16k by end-2027. SC6 recovers to $1,200–$1,400/t.",
    note: "Consensus of 4 major research institutions",
  },
  {
    tag: "🔴 Bear case",
    tagColor: "text-red",
    borderTop: "border-t-[3px] border-t-red",
    price: "$9,000–$12,000",
    text: "DLE commercialises faster than expected. Argentine brine adds more supply than modelled. Lepidolite cuts slowly. Deficit delayed to 2028–2030. Prices range-bound.",
    note: "Requires supply additions to outrun demand",
  },
];

const CONSENSUS_TABLE = [
  {
    institution: "IEA (Stated Policies)",
    balance2026: "−40kt (surplus)",
    balance2027: "+60kt (deficit)",
    deficitStart: "2027",
    priceTarget: "$15,000–$20,000/t",
  },
  {
    institution: "BloombergNEF",
    balance2026: "−20kt (surplus)",
    balance2027: "+50kt (deficit)",
    deficitStart: "2027",
    priceTarget: "$14,000–$16,000/t",
  },
  {
    institution: "Benchmark Min. Intelligence",
    balance2026: "−35kt (surplus)",
    balance2027: "+80kt (deficit)",
    deficitStart: "2026/27",
    priceTarget: "$16,000–$20,000/t",
  },
  {
    institution: "Wood Mackenzie",
    balance2026: "−50kt (surplus)",
    balance2027: "+45kt (deficit)",
    deficitStart: "2027",
    priceTarget: "$13,000–$15,000/t",
  },
];

const DeficitThesis = () => {
  return (
    <section className="py-12 bg-white" id="deficit-thesis">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 5
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          The Supply Deficit Thesis — What the Bulls Believe
        </h2>

        {/* Intro paras */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The core bull thesis for lithium has remained consistent even through the price crash: EV
          adoption is structural, not cyclical; lithium demand will grow 3–5× over the next decade;
          current prices are below the incentive price needed to develop the supply required to meet
          that demand; therefore prices must eventually be higher.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The specific mechanism by which the thesis plays out runs like this:
        </p>

        {/* Ordered list */}
        <ol className="pl-5 mb-8 space-y-3 list-decimal">
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">EV demand keeps growing</strong> — IEA projects EV sales
            reaching 35–40 million units by 2030 (from ~17 million in 2024). China alone targets
            50% NEV penetration by 2025 and is on track.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Lepidolite curtails at current prices</strong> — Chinese
            lepidolite operations below cash cost (
            <strong className="text-ink">~30% of capacity at $11,000/t LCE</strong>) will reduce
            output as losses compound. This is already beginning.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">New project pipeline is delayed</strong> — Of the 1,108
            lithium projects tracked in this site's database, only 7 are currently in construction.
            Development-stage projects typically take 7+ years from today to production. The
            pipeline is thinner than consensus assumes.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Supply deficit emerges 2026–2027</strong> — IEA,
            BloombergNEF, and Benchmark Mineral Intelligence all project the market flipping from
            surplus to deficit in this window. The range of deficit estimates: +60kt to +180kt LCE
            by 2027.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Prices recover to incentive level</strong> — Most analysts
            estimate the incentive price for new greenfield brine development at $18,000–$25,000/t
            LCE. That is the price needed to justify new capital investment. A deficit should drive
            prices toward this level.
          </li>
        </ol>

        {/* Forecast cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          {FORECAST_CARDS.map((card, i) => (
            <div
              key={i}
              className={`bg-white border border-bdr rounded-[14px] p-[18px] ${card.borderTop}`}
            >
              <p className={`text-[11px] font-bold mb-2 ${card.tagColor}`}>{card.tag}</p>
              <p className="text-[22px] font-medium text-ink mb-2">{card.price}</p>
              <p className="text-[12px] text-ink3 leading-[1.65] mb-2">{card.text}</p>
              <p className="text-[11px] text-muted mt-2">{card.note}</p>
            </div>
          ))}
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          What the consensus institutions are saying
        </h3>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {["Institution", "2026E Balance", "2027E Balance", "Deficit Start", "2027 Price Target"].map((h) => (
                  <th
                    key={h}
                    className="text-[10px] font-bold uppercase tracking-[.07em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CONSENSUS_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(59,130,246,0.03)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                    {row.institution}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.balance2026}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.balance2027}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.deficitStart}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.priceTarget}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[15px] leading-[1.82] text-ink3">
          Notice that all four institutions still have 2026 as a surplus year, with the deficit
          beginning in 2026 H2 or 2027. This forecast has already been pushed back from the 2024
          and 2025 estimates. Whether it gets pushed back again depends primarily on Chinese
          lepidolite behaviour and Argentine development timelines.
        </p>

      </div>
    </section>
  );
};

export default DeficitThesis;
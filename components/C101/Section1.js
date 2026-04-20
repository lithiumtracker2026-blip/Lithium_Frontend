import React, { useState } from 'react';

const PRODUCTS_TABLE = [
  {
    product: "Lithium Carbonate Equivalent",
    abbr: "LCE / Li₂CO₃",
    price: "~$11,000/t",
    usedIn: "LFP batteries, ceramics, glass",
    source: "Brine (Chile, Argentina), lepidolite (China)",
  },
  {
    product: "Lithium Hydroxide Monohydrate",
    abbr: "LiOH",
    price: "~$13,500/t",
    usedIn: "NMC 811, NCA high-energy batteries",
    source: "Spodumene (Australia), some brine",
  },
  {
    product: "Spodumene Concentrate SC6",
    abbr: "SC6",
    price: "~$800/t",
    usedIn: "Refined into carbonate or hydroxide",
    source: "Australia (Pilbara, Greenbushes), Brazil",
  },
];

const WhatIsLithium = () => {
  return (
    <section className="py-12 bg-white" id="what-is-lithium">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 1
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          What Lithium Actually Is — and Why It Matters for Batteries
        </h2>

        {/* Body copy */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Lithium is the lightest solid element on the periodic table. It has an atomic number of 3
          and weighs so little it floats on water. In its natural state it is a soft, silvery-white
          metal that reacts violently with moisture — which is why you will never see a coin made of
          it or hold a bar in your hand. What makes lithium commercially important is a single
          electrochemical property:{' '}
          <strong className="text-ink">
            it has the highest electrochemical potential of any element
          </strong>
          , meaning it can store and release more energy per unit of weight than any alternative.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          This property is why every lithium-ion battery in your phone, laptop, electric car, and
          grid storage system contains lithium. There is currently no commercial battery chemistry
          that matches lithium's energy density at a reasonable cost — and that is unlikely to change
          in the investment-relevant time horizon (the next 10 years).
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">What lithium is not</h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Lithium is not a precious metal. It is not traded on an exchange like gold or copper. It
          is a battery raw material, more similar to cobalt or nickel than to gold. This has a
          critical implication for investors:{' '}
          <strong className="text-ink">
            there is no spot market you can access directly
          </strong>
          . When you buy a "lithium ETF" you are buying equity in lithium mining and chemicals
          companies, not the commodity itself.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Lithium is also not scarce in an absolute sense. The Earth's crust contains approximately
          98 million tonnes of lithium resources — enough for centuries of EV production. What
          creates price volatility is not geological scarcity but{' '}
          <strong className="text-ink">supply inelasticity</strong>: new lithium mines and
          refineries take 7–15 years to build, so demand surges (like 2021–2022) and supply gluts
          (like 2023–2024) oscillate around a structural growth trend.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The three lithium products that matter
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          When you see a lithium price quoted, it almost always refers to one of three products:
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {["Product", "Abbreviation", "April 2026 Price", "Used In", "Primary Source"].map((h) => (
                  <th
                    key={h}
                    className="text-[10px] font-bold uppercase tracking-[.07em] text-muted px-3.5 py-2.5 text-left border-b-2 border-bdr"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRODUCTS_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(59,130,246,0.03)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">
                    {row.product}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.abbr}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.price}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.usedIn}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          LCE is the industry's standard unit of measurement.{' '}
          <strong className="text-ink">
            8.9 tonnes of spodumene SC6 = 1 tonne LCE
          </strong>
          . This conversion ratio (8.9×) determines the "refinery margin" — the profit or loss a
          processor makes converting Australian concentrate into Chinese battery-grade chemicals —
          and it is one of the most important signals in the market.
        </p>

        {/* Callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 mb-8 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              Why LCE is the benchmark — not the raw metal
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Lithium metal itself is rarely the end product. The industry converts ore into
              chemicals (carbonate or hydroxide) which are then used to make battery cathode
              materials. LCE expresses all forms of lithium as their carbonate equivalent: 1 tonne
              LCE = 0.1878 tonnes lithium metal = 5.323 tonnes Li₂CO₃. Prices quoted in trade
              press are almost always LCE unless otherwise stated.
            </p>
          </div>
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">Where lithium comes from</h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Commercially produced lithium comes from two geological sources:
        </p>
        <ul className="pl-5 mb-4 space-y-2">
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Brines</strong> — lithium-rich underground salt water
            pumped from beneath salt flats (salares) in Chile and Argentina. The lowest-cost source
            ($3,000–$7,000/t AISC), but slow to develop (evaporation ponds take 12–18 months) and
            increasingly constrained by water rights.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Hard rock (spodumene)</strong> — lithium-bearing pegmatite
            ore mined from hard rock in Australia, Canada, Zimbabwe, and Brazil. Higher cost
            ($5,000–$9,500/t AISC) but faster to ramp, more predictable, and the dominant source of
            growth supply over the past decade.
          </li>
        </ul>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          A third source,{' '}
          <strong className="text-ink">lepidolite</strong> (a lithium-bearing mica found in Jiangxi
          and Sichuan provinces in China), became significant after 2021 and is the primary cause of
          the 2022–2024 price crash. Lepidolite is higher cost ($10,000–$13,000/t AISC) and lower
          grade, but China developed it rapidly as domestic demand grew. It is the marginal-cost
          producer that sets the floor on lithium prices at current levels.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3">
          A fourth source,{' '}
          <strong className="text-ink">Direct Lithium Extraction (DLE)</strong>, is an emerging
          technology that extracts lithium from brine more selectively and quickly than traditional
          evaporation. It is pre-commercial at scale as of 2026 — the most advanced project
          (Rincon, Rio Tinto) is operating at 3,000 t/yr Phase 1, well below the 40,000 t/yr
          commercial scale target.
        </p>

      </div>
    </section>
  );
};

export default WhatIsLithium;
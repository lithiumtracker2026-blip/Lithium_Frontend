// components/sections/SignalsAndRecyclingSection.jsx

const signals = [
  {
    num: 1,
    signal: "Wuxi LiCO₃ warehouse stocks",
    what: "Physical inventory in the Chinese lithium carbonate spot market. Rising = bearish (supply building). Falling = bullish (demand drawing down supply).",
    where: { label: "goldandsilvertracker.com/lithium/", href: "/lithium/#inventory", prefix: "SMM weekly survey. See" },
    freq: "Weekly (Thursday)",
    reading: "↓ Declining for 8 weeks ✔",
    bullish: true,
  },
  {
    num: 2,
    signal: "Battery maker inventory days",
    what: "Days of lithium forward coverage held by top-10 Chinese battery manufacturers. Below 30 days = restocking imminent, bullish for spot prices.",
    where: { label: "SMM monthly survey", href: null },
    freq: "Monthly (mid-month)",
    reading: "~25 days (below threshold) ✔",
    bullish: true,
  },
  {
    num: 3,
    signal: "SC6→LCE refinery margin",
    what: "LCE spot minus (SC6 × 8.9). Positive = refiners profitable. Negative = refiners at loss, curtailment pressure building. The single most informative daily signal.",
    where: { label: "goldandsilvertracker.com/lithium/", href: "/lithium/#spreads", prefix: "Calculated. See" },
    freq: "Daily",
    reading: "+$3,880/t ✔",
    bullish: true,
  },
  {
    num: 4,
    signal: "Chinese lepidolite monthly output",
    what: "Month-over-month change in Jiangxi + Sichuan lepidolite production. Declining output removes the marginal supply that caused the crash.",
    where: { label: "SMM monthly industry survey", href: null },
    freq: "Monthly (~20th)",
    reading: "Slow curtailment beginning. Partial ✔",
    bullish: null,
  },
  {
    num: 5,
    signal: "China EV monthly sales (CAAM)",
    what: "Monthly new energy vehicle sales from China's auto industry association. The demand backbone. YoY growth of 15%+ = demand growing faster than most supply additions.",
    where: { label: "CAAM monthly press release + IEA EV Data Explorer", href: null },
    freq: "Monthly (10th of month)",
    reading: "+20% YoY Q1 2026 ✔",
    bullish: true,
  },
  {
    num: 6,
    signal: "DLE project milestone announcements",
    what: "Any announcement from Rincon (Rio Tinto), Vulcan Energy, or major DLE programs affects the supply timeline. Delays = bullish. Commercial-scale success = bearish.",
    where: { label: "Company press releases (ASX, NYSE) + press coverage", href: null },
    freq: "Quarterly/ad hoc",
    reading: "Delays persist. Rincon Ph1 at 3k t/yr ✔",
    bullish: true,
  },
];

const recyclingProcesses = [
  {
    name: "Hydrometallurgical (wet chemistry)",
    desc: "Dissolves battery materials in acid, then selectively precipitates each metal. High recovery rates (80–95%) but energy-intensive. The dominant process for large-scale recyclers (Li-Cycle, Redwood Materials, Umicore).",
  },
  {
    name: "Pyrometallurgical (smelting)",
    desc: "High-temperature processing. Efficient for cobalt and nickel recovery, but lithium is lost to slag without additional processing steps. Less suited to LFP batteries (low cobalt content reduces economics).",
  },
  {
    name: "Direct recycling",
    desc: "Emerging approach that preserves cathode material structure. Still pre-commercial but could achieve the highest lithium recovery rates if it scales.",
  },
];

export default function SignalsAndRecyclingSection() {
  return (
    <>
      {/* ── SECTION 12: SIGNALS ── */}
      <section className="bg-white py-16 md:py-20" id="signals">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
            Section 12
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
            6 Signals to Monitor — What Actually Moves Lithium Prices
          </h2>
          <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
            Because lithium has no centralised exchange and assessed prices update only
            daily or weekly, monitoring the right leading indicators is more important
            here than for most commodities. These are the six signals with the strongest
            predictive track record:
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-bdr mb-12">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#F4F7FB] border-b border-bdr">
                  {["#", "Signal", "What it tells you", "Where to find it", "Update frequency", "Current reading"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {signals.map((row, i) => (
                  <tr
                    key={row.num}
                    className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"
                    }`}
                  >
                    <td className="px-5 py-4 font-mono text-ink/50 align-top">{row.num}</td>
                    <td className="px-5 py-4 font-semibold text-ink align-top whitespace-nowrap">
                      {row.signal}
                    </td>
                    <td className="px-5 py-4 text-ink/80 align-top max-w-xs">{row.what}</td>
                    <td className="px-5 py-4 text-ink/70 align-top">
                      {row.where.href ? (
                        <>
                          {row.where.prefix && (
                            <span className="mr-1">{row.where.prefix}</span>
                          )}
                          <a
                            href={row.where.href}
                            className="text-li underline underline-offset-2 hover:opacity-80 transition-opacity"
                          >
                            {row.where.label}
                          </a>
                        </>
                      ) : (
                        row.where.label
                      )}
                    </td>
                    <td className="px-5 py-4 text-ink/70 align-top whitespace-nowrap">
                      {row.freq}
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                          row.bullish === true
                            ? "bg-grn-bg text-grn"
                            : row.bullish === false
                            ? "bg-red-50 text-red-600"
                            : "bg-[#F4F7FB] text-ink/60"
                        }`}
                      >
                        {row.reading}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wuxi detail */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3 ">
            How to read Wuxi inventory: the detail matters
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
            The Wuxi Stainless Steel Exchange in China functions as the primary physical
            clearinghouse for lithium carbonate spot transactions. Unlike LME copper
            warehouses (which are official registered exchange warehouses), Wuxi is a
            private exchange, and the inventory data comes from a weekly survey by SMM
            rather than official exchange disclosure. The numbers are reliable for
            direction but should not be treated as an exact count.
          </p>
          <p className="text-base text-ink/80 max-w-3xl leading-relaxed max-w-[1600px]">
            What matters is the trend, not the absolute level. An eight-week declining
            trend is more meaningful than a single week's data. The Aug 2024 peak
            (~115,000t) was the maximum oversupply signal — stocks have declined since,
            and the direction of travel has shifted from bearish to neutral-to-bullish.
          </p>
        </div>
      </section>

      {/* ── SECTION: BATTERY RECYCLING ── */}
      <section className="bg-[#F4F7FB] py-16 md:py-20" id="battery-recycling">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
            Section — Secondary Supply
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
            Battery Recycling as a Lithium Source — The 2030+ Story
          </h2>
          <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
            Battery recycling is frequently cited in the bear case for lithium — the
            argument being that recycled lithium from first-generation EVs will flood
            the market and suppress prices in the late 2020s and 2030s. The reality is
            more nuanced and more optimistic for primary producers than headlines
            suggest.
          </p>

          {/* How it works */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
            How lithium recycling works
          </h3>
          <p className="text-base text-ink/80 max-w-3xl mb-6 leading-relaxed">
            When an EV battery reaches end of life (typically 8–15 years of vehicle
            use, depending on chemistry and usage), the battery pack can be recovered
            and processed to extract lithium, nickel, cobalt, and manganese. Three main
            processes exist:
          </p>

          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {recyclingProcesses.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl border border-bdr p-5 flex flex-col gap-2"
              >
                <p className="font-semibold text-ink text-sm">{p.name}</p>
                <p className="text-sm text-ink/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Why not before 2030 */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
            Why recycled lithium won't overwhelm primary supply before 2030
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
            The recycling supply argument has a timing problem. The large-scale EV
            adoption wave began in 2020–2022. Battery packs have 8–15 year lifetimes.
            This means the first major wave of EV battery end-of-life events will occur
            in the early 2030s, not the late 2020s. By that time, total lithium demand
            from EVs and storage will also be substantially larger — absorbing recycled
            supply without necessarily depressing prices.
          </p>
          <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
            Current estimates (IEA, 2025): recycled lithium from batteries will supply
            approximately 6% of total lithium demand by 2030, rising to 12–18% by 2035
            as first-generation EV fleets reach end-of-life. This is a meaningful but
            not disruptive supplement to primary supply.
          </p>
          <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
            Additionally, LFP batteries complicate the recycling economics. LFP contains
            no cobalt or nickel — the high-value metals that subsidise the
            hydrometallurgical recycling process. LFP recycling is primarily
            economically justified by lithium recovery alone, which at $11,000/t LCE is
            marginal. At $20,000+/t LCE in a deficit scenario, LFP recycling economics
            improve significantly.
          </p>

          {/* Key companies */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
            Key recycling companies
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] leading-relaxed">
            Publicly accessible recycling investments for US investors include{" "}
            <strong className="text-ink font-semibold">
              Li-Cycle Holdings (LICY, NYSE)
            </strong>{" "}
            and{" "}
            <strong className="text-ink font-semibold">
              Lithium Americas (LAC, NYSE)
            </strong>{" "}
            (though LAC is primarily a developer). Redwood Materials (founded by Tesla's
            former CTO JB Straubel) is private but has been considering an IPO. For most
            investors, recycling exposure is best gained through the large battery/EV
            manufacturers (CATL, BYD, LG Energy) that are integrating recycling into
            their supply chains.
          </p>
        </div>
      </section>
    </>
  );
}
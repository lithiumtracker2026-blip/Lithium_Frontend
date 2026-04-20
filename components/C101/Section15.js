// components/sections/AllocationSection.jsx

const allocationTiers = [
  {
    size: "2–3%",
    label: "Base allocation",
    sentiment: "conservative",
    bull: "If LCE reaches $20,000/t, LIT might trade 80–120% higher — a 2% allocation becomes 3.6–4.4% of a portfolio that grew less dramatically. A useful diversifier and return contributor.",
    bear: "If LCE stays at $9,000 range-bound for two years, a 2% allocation falls ~30–40%, costing 0.6–0.8% of total portfolio. Survivable.",
  },
  {
    size: "5%+",
    label: "Higher conviction",
    sentiment: "aggressive",
    bull: "Defensible if: (a) high conviction on deficit timing from Section 12 signals; (b) you can hold through extended volatility without selling at the wrong moment; (c) you have done company-specific analysis on miners, not just ETF.",
    bear: "Key risk: if IEA revises deficit start from 2027 to 2028 in mid-2026, the thesis is weakening and position size should reflect that.",
  },
];

const comparisons = [
  {
    asset: "Gold",
    character: "Macro hedge",
    driver: "Real interest rates, USD weakness, financial stress",
    correlation: "Negative to equities in stress",
    vsLithium: "Non-correlated. Gold protects in recessions; lithium does not. Can serve different portfolio functions simultaneously.",
  },
  {
    asset: "Copper",
    character: "Electrification play",
    driver: "Global industrial activity, grid buildout",
    correlation: "Positive to global growth",
    vsLithium: "Complementary — both benefit from electrification. Copper has vastly better liquidity and exchange-traded futures. Not substitutes.",
  },
  {
    asset: "Lithium",
    character: "Growth / commodity",
    driver: "EV adoption, battery demand, supply cycles",
    correlation: "Positive to global industrial activity",
    vsLithium: "Opaque and illiquid at retail level. High volatility. No recession hedge properties.",
  },
];

export default function AllocationSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="allocation">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 15
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          How Much Lithium Should You Own? Portfolio Allocation in 2026
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Lithium is a high-volatility, cyclical commodity investment. It crashed 86%. It
          could recover 3–4× from current levels, or it could stay range-bound for two
          more years. Position sizing should reflect this uncertainty explicitly, not paper
          it over with a conviction narrative.
        </p>

        {/* Allocation tier cards */}
        <div className="grid gap-5 sm:grid-cols-2 mb-12">
          {allocationTiers.map((tier) => (
            <div key={tier.size} className="bg-white rounded-xl border border-bdr p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-3xl font-bold text-ink">{tier.size}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                  tier.sentiment === "conservative"
                    ? "bg-grn-bg text-grn border-grn/30"
                    : "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.25)]"
                }`}>
                  {tier.label}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-bdr pt-5">
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-grn">Bull case</p>
                  <p className="text-sm text-ink/75 leading-relaxed">{tier.bull}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-400">Bear case</p>
                  <p className="text-sm text-ink/75 leading-relaxed">{tier.bear}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What not to do callout */}
        <div className="flex gap-4 items-start bg-red-50 border border-red-200 rounded-xl p-5 md:p-6 mb-12 max-w-[1600px]">
          <span className="text-xl leading-none mt-0.5 shrink-0" aria-hidden="true">⚠️</span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">What not to do</p>
            <p className="text-sm text-ink/80 leading-relaxed">
              Do not size positions based on a specific price target and timeline.
              "LCE will be $20,000 by end-2027" is not a risk-managed position — it is a
              forecast-dependent bet. Instead, size based on what you can tolerate losing
              if the bear case materialises, and let the upside take care of itself if the
              bull case plays out. Never allocate more than 5% of a diversified portfolio
              to a single commodity thesis, regardless of conviction level.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
          Lithium vs gold vs copper as a portfolio diversifier
        </h3>
        <p className="text-base text-ink/80 max-w-3xl mb-6 leading-relaxed">
          Lithium is often compared to gold (hard asset, store of value) and copper
          (electrification exposure) as a portfolio component. The three assets serve
          meaningfully different roles:
        </p>

        <div className="overflow-x-auto rounded-xl border border-bdr mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FB] border-b border-bdr">
                {["Asset", "Character", "Key driver", "Equity correlation", "vs Lithium"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={row.asset}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"
                  } ${row.asset === "Lithium" ? "font-medium" : ""}`}
                >
                  <td className="px-5 py-4 font-semibold text-ink align-top whitespace-nowrap">{row.asset}</td>
                  <td className="px-5 py-4 text-ink/80 align-top">{row.character}</td>
                  <td className="px-5 py-4 text-ink/80 align-top">{row.driver}</td>
                  <td className="px-5 py-4 text-ink/70 align-top">{row.correlation}</td>
                  <td className="px-5 py-4 text-ink/70 align-top">{row.vsLithium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
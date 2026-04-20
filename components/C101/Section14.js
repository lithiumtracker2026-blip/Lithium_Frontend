// components/sections/ForecastSection.jsx

const forecastYears = [
  {
    year: "2026",
    status: "Surplus narrows",
    lce: "$10,000–$14,000/t",
    sc6: "$750–$1,000/t",
    sentiment: "neutral",
    detail: "Surplus persists but narrows.",
  },
  {
    year: "2027",
    status: "Deficit emerges",
    lce: "$14,000–$20,000/t",
    sc6: "$1,100–$1,600/t",
    sentiment: "bullish",
    detail: "Deficit emerges in most scenarios.",
  },
  {
    year: "2028",
    status: "Deficit deepens",
    lce: "$18,000–$28,000/t",
    sc6: "Supply-dependent",
    sentiment: "bullish",
    detail: "Deficit deepens if supply pipeline delays persist. Outcome depends on lepidolite curtailment and DLE commercialisation.",
  },
];

const sentimentStyles = {
  neutral: "bg-[#F4F7FB] text-ink/60 border-bdr",
  bullish: "bg-grn-bg text-grn border-grn/30",
};

export default function ForecastSection() {
  return (
    <section className="bg-white py-16 md:py-20" id="forecast">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 14
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Lithium Price Forecast 2026–2028 — What Analysts Are Saying
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-4 leading-relaxed">
          Price forecasting in lithium has a poor track record — the four largest research
          houses were all significantly wrong in 2022 (too bullish) and 2023 (too slow to
          revise down). The current consensus has been revised down repeatedly. This does
          not mean the forecasts are useless; it means they should inform probabilistic
          thinking rather than precise target-setting.
        </p>
        <p className="text-base text-ink/80 max-w-3xl mb-8 leading-relaxed">
          The current consensus from IEA, BloombergNEF, Benchmark Mineral Intelligence,
          and Wood Mackenzie:
        </p>

        {/* Forecast year cards */}
        <div className="grid gap-5 sm:grid-cols-3 mb-10">
          {forecastYears.map((f) => (
            <div key={f.year} className="bg-[#F4F7FB] rounded-xl border border-bdr p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl font-bold text-ink">{f.year}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${sentimentStyles[f.sentiment]}`}>
                  {f.status}
                </span>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed">{f.detail}</p>
              <div className="border-t border-bdr pt-4 flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-ink/50 font-medium">LCE</span>
                  <span className="font-mono font-semibold text-ink">{f.lce}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-ink/50 font-medium">SC6</span>
                  <span className="font-mono font-semibold text-ink">{f.sc6}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Incentive price note */}
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed ">
          The incentive price — the LCE level needed to attract capital into new greenfield
          brine development — is generally estimated at{" "}
          <strong className="text-ink font-semibold">$18,000–$25,000/t</strong> by most
          researchers. This is the ceiling that sustained prices will tend toward in a
          prolonged deficit cycle.
        </p>

        {/* Warning callout */}
        <div className="flex gap-4 items-start bg-red-50 border border-red-200 rounded-xl p-5 md:p-6 mb-10 max-w-[1600px]">
          <span className="text-xl leading-none mt-0.5 shrink-0" aria-hidden="true">⚠️</span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">
              Important caveat on all lithium forecasts
            </p>
            <p className="text-sm text-ink/80 leading-relaxed">
              Every major lithium price forecast published between 2021 and 2025 has been
              revised significantly. IEA's 2021 forecast showed LCE reaching $20,000+ by
              2026 in its Stated Policies scenario. In their 2025 publication, the same
              scenario shows $11,000–$14,000 in 2026. The downward revisions have been
              driven primarily by Chinese supply (lepidolite) being undermodelled. Any
              current forecast carries the same risk — a supply source not currently in
              the model. Weight forecasts by the quality of the underlying methodology,
              not by the headline price target.
            </p>
          </div>
        </div>

        {/* What moves price up vs down */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          What moves the price forecast up vs down from here
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
          The difference between the $14,000 base case and the $20,000+ bull case in 2027
          is almost entirely a function of the lepidolite curtailment speed. If 40%+ of
          Chinese lepidolite capacity reduces output within 12 months, the surplus clears
          quickly and prices spike toward incentive level. If only 15–20% curtails (the
          current pace), the surplus narrows slowly and prices grind to $14,000–$16,000.
        </p>
        <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
          The difference between base case and the $9,000–$12,000 bear case is whether
          DLE commercialises faster than expected, or whether Argentine brine projects
          deliver on their ambitious targets. Rincon Phase 2 (40,000 t/yr) was originally
          targeted for 2026; it is now expected 2027+. If DLE proves successful at scale
          by 2027 — say, at Vulcan Energy in Germany or Standard Lithium in Arkansas —
          an additional 30–50kt of unexpected supply enters the model.
        </p>
        <p className="text-base text-ink/80 max-w-[1600px] leading-relaxed">
          One signal that would confirm the bull case is accelerating: LCE breaking and
          holding above $13,000–$14,000 for more than three consecutive months. The 2016
          and 2021 recovery cycles both showed this pattern — a resistance level held for
          months, then a rapid move once it broke.
        </p>

      </div>
    </section>
  );
}
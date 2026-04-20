// components/sections/PriceHistorySection.jsx

const historyRows = [
  { year: "2010–2014", lce: "~$5,000–$6,000/t", sc6: "~$200–$300/t", driver: "Stable baseline. Primary uses: glass/ceramics/lubricants. EV market negligible. Price stable at cost-plus for brine producers." },
  { year: "2015", lce: "~$6,800/t", sc6: "~$350/t", driver: "Tesla Model S scaling, early EV enthusiasm. First stirrings of EV-driven demand concern." },
  { year: "2016", lce: "~$9,100/t", sc6: "~$500/t", driver: "First lithium mini-spike. Chinese NEV subsidies drive rapid EV volume growth. Supply scrambles to catch up." },
  { year: "2017", lce: "~$14,500/t", sc6: "~$800/t", driver: "Peak of first EV-driven cycle. Chinese battery manufacturers buying aggressively. New mine commitments begin." },
  { year: "2018–2019", lce: "~$13,000–$9,000/t", sc6: "~$700–$500/t", driver: "Supply response: SQM and Albemarle expand Atacama capacity. New Australian spodumene mines (Mt Marion, Pilgangoora) come online. Oversupply begins." },
  { year: "2020", lce: "~$6,500/t", sc6: "~$400/t", driver: "Trough. COVID demand shock, EV market pause. Lithium at multi-year lows. Several mines curtail or go on care and maintenance." },
  { year: "2021", lce: "~$20,000/t", sc6: "~$1,000/t", driver: "Second cycle begins. EV volumes double. Chinese battery makers panic-buy. Spot market goes illiquid. Prices surge from $6k to $20k in 12 months." },
  { year: "2022", lce: "~$55,000/t (avg)", sc6: "~$4,500/t", driver: "Maximum fear. LCE peaks at $80,600/t in November. SC6 peaks at $8,000/t. All-time highs across the board. Massive capital commitment to new projects." },
  { year: "2023", lce: "~$25,000/t (avg)", sc6: "~$2,000/t", driver: "Crash begins. Lepidolite floods market. Destocking amplifies the signal. Prices fall from $60k to $15k in one year. Refinery margin goes negative." },
  { year: "2024", lce: "~$10,000/t (avg)", sc6: "~$850/t", driver: "Trough at $7,800 in February. Wuxi stocks peak August. Gradual stabilisation in H2 as destocking ends. Battery makers resume spot purchasing." },
  { year: "2025", lce: "~$10,500/t (avg)", sc6: "~$810/t", driver: "Sideways grinding. Curtailments occurring but slowly. New Australian and Argentine supply offsetting reductions. Wuxi stocks declining." },
  { year: "2026 YTD", lce: "~$11,000/t", sc6: "~$800/t", driver: "Partial recovery. Bull conditions building (see Section 12). Deficit forecast consensus: 2026 H2 or 2027. All eyes on lepidolite curtailment rate and Q2 EV data.", highlight: true },
];

// rough band classification for row colouring
function getPriceBand(year) {
  if (["2022"].includes(year)) return "peak";
  if (["2020", "2024"].includes(year)) return "trough";
  if (["2021", "2017"].includes(year)) return "surge";
  return "neutral";
}

const bandStyles = {
  peak:    "bg-red-50/60",
  trough:  "bg-blue-50/60",
  surge:   "bg-grn-bg/40",
  neutral: "",
};

const lessons = [
  {
    cycle: "2016–2017 cycle",
    lesson: "Lithium supply is more elastic than it appears when prices are high enough to incentivise rapid development.",
    body: "Peaked when new Australian spodumene mines (Pilgangoora, Mt Marion) came online faster than expected, surprising bulls who thought supply could not respond.",
  },
  {
    cycle: "2021–2023 cycle",
    lesson: "The supply response may come from an unexpected source, not the one you are modelling.",
    body: "Peaked when lepidolite was developed rapidly at the peak price, surprising bulls focused on Australian hard rock and Chilean brine as the supply response.",
  },
];

export default function PriceHistorySection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="history">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 13
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Lithium Price History 2010–2026 — Cycles, Causes, Context
        </h2>
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Lithium has had three major price cycles in the past 15 years. Understanding
          each one contextualises the current situation.
        </p>

        {/* Price history table */}
        <div className="overflow-x-auto rounded-xl border border-bdr mb-14">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FB] border-b border-bdr">
                {["Year", "LCE avg (approx)", "SC6 approx", "Key driver"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {historyRows.map((row, i) => {
                const band = getPriceBand(row.year);
                return (
                  <tr
                    key={row.year}
                    className={`border-b border-bdr last:border-0 transition-colors hover:brightness-95 ${
                      band !== "neutral" ? bandStyles[band] : i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/40"
                    } ${row.highlight ? "ring-1 ring-inset ring-li/30" : ""}`}
                  >
                    <td className="px-5 py-4 font-mono font-medium text-ink whitespace-nowrap align-top">
                      {row.year}
                    </td>
                    <td className="px-5 py-4 font-mono text-ink/80 whitespace-nowrap align-top">
                      {row.lce}
                    </td>
                    <td className="px-5 py-4 font-mono text-ink/60 whitespace-nowrap align-top">
                      {row.sc6}
                    </td>
                    <td className="px-5 py-4 text-ink/75 align-top leading-relaxed">
                      {row.driver}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-14 -mt-10">
          {[
            { color: "bg-red-50 border-red-200", label: "Peak / all-time high" },
            { color: "bg-blue-50 border-blue-200", label: "Trough / multi-year low" },
            { color: "bg-grn-bg border-grn/30", label: "Rapid surge" },
          ].map((l) => (
            <span key={l.label} className={`inline-flex items-center gap-2 text-xs text-ink/60 border rounded-full px-3 py-1 ${l.color}`}>
              <span className={`w-2 h-2 rounded-full ${l.color.replace("border-", "bg-").split(" ")[0]}`} />
              {l.label}
            </span>
          ))}
        </div>

        {/* Lessons */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-6">
          The lessons of each cycle
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 mb-8">
          {lessons.map((l) => (
            <div key={l.cycle} className="bg-white rounded-xl border border-bdr p-6 flex flex-col gap-3">
              <p className="text-xs font-mono uppercase tracking-wider text-ink/40">{l.cycle}</p>
              <p className="text-sm text-ink/75 leading-relaxed">{l.body}</p>
              <p className="text-sm font-semibold text-ink leading-relaxed border-t border-bdr pt-3">
                Lesson: {l.lesson}
              </p>
            </div>
          ))}
        </div>

        <p className="text-base text-ink/80 max-w-3xl leading-relaxed">
          What this means for the current cycle: the bear risk is not that lepidolite keeps
          producing at a loss indefinitely, but that a new supply source (DLE? Oilfield
          brines? Geothermal?) develops faster than the current consensus models. Price
          history suggests the market has been surprised twice by supply, not demand.
        </p>

      </div>
    </section>
  );
}
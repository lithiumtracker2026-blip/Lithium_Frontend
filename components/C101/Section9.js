import React from 'react';

const MINERS_TABLE = [
  {
    company: "Albemarle",
    ticker: "ALB",
    exchange: "NYSE",
    asset: "Greenbushes (Australia, 49% stake), Atacama (Chile), Silver Peak (USA)",
    aisc: "~$10,000–$12,000/t LCE",
    view: "Largest US-listed lithium pure-play. Balance sheet stress at low prices. Will recover strongly with prices.",
  },
  {
    company: "SQM",
    ticker: "SQM",
    exchange: "NYSE (ADR)",
    asset: "Atacama brine (Chile) — lowest-cost brine on earth",
    aisc: "~$4,000–$6,000/t LCE",
    view: "Cheapest producer globally. Chilean royalty risk and government ownership are the key uncertainties.",
  },
  {
    company: "Pilbara Minerals",
    ticker: "PLS",
    exchange: "ASX",
    asset: "Pilgangoora, WA — world's largest independent spodumene operation",
    aisc: "~$7,500–$9,500/t SC6 equiv LCE",
    view: "Pure Australian spodumene producer. No refining — sells SC6, highly leveraged to spodumene price specifically.",
  },
  {
    company: "Arcadium Lithium",
    ticker: "ALTM",
    exchange: "NYSE",
    asset: "Argentina brines + Australia (Mt Cattlin) + Canada",
    aisc: "~$6,000–$9,000/t LCE",
    view: "Formed by Livent/Allkem merger. Diversified geographically. Rio Tinto made a takeover approach in late 2024.",
  },
  {
    company: "Ganfeng Lithium",
    ticker: "1772.HK",
    exchange: "HKEX",
    asset: "Chinese refinery operations + global stakes in mines",
    aisc: "Variable — large refinery component",
    view: "Largest Chinese lithium company. Vertically integrated. Not accessible via US brokerage without HK account or ADR.",
  },
  {
    company: "Mineral Resources",
    ticker: "MIN",
    exchange: "ASX",
    asset: "Wodgina (WA) + Mt Marion (WA) — major spodumene producer",
    aisc: "~$8,000–$10,000/t LCE",
    view: "Diversified miner (iron ore + lithium). Balance sheet issues in 2024–2025. Higher-risk turnaround story.",
  },
  {
    company: "IGO Limited",
    ticker: "IGO",
    exchange: "ASX",
    asset: "25% stake in Greenbushes (via TLEA JV)",
    aisc: "Low cost (Greenbushes is world's richest deposit)",
    view: "Lower direct lithium exposure than pure-plays but Greenbushes stake gives quality asset exposure.",
  },
];

const VALUATION_POINTS = [
  {
    term: "NAV (Net Asset Value)",
    text: "Discounted cash flow from the mine at a normalised price assumption (usually $15,000–$20,000/t for analysis). If the stock is trading at a 50% discount to NAV, the market is pricing in more delay or more supply risk than you believe.",
  },
  {
    term: "Cash cost vs spot",
    text: "A miner whose cash cost is $5,000/t (SQM Atacama) is fine at $11,000 spot. A miner whose cash cost is $10,500/t (some Albemarle operations) is under pressure. Know the cost structure.",
  },
  {
    term: "Balance sheet",
    text: "Miners who borrowed heavily at 2022 prices to fund expansion are now carrying debt at $11,000/t revenues. Albemarle's debt metrics deteriorated significantly in 2024. Balance sheet stress can prevent a miner from surviving long enough to benefit from the recovery.",
  },
];

const LithiumMiners = () => {
  return (
    <section className="py-12 bg-white" id="miners">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 9
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Lithium Mining Stocks Guide — ALB, SQM, Pilbara, and Beyond
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          If you want direct equity exposure to lithium producers rather than an ETF, these are the
          primary investable names and what differentiates them:
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {["Company", "Ticker", "Exchange", "Primary Asset", "AISC (2025E)", "Analyst View"].map((h) => (
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
              {MINERS_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(59,130,246,0.03)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                    {row.company}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-li-d whitespace-nowrap">
                    {row.ticker}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.exchange}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] max-w-[220px]">
                    {row.asset}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.aisc}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] max-w-[240px]">
                    {row.view}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          How to think about lithium miner valuations
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Lithium miners are notoriously difficult to value at cyclical troughs because earnings are
          near zero or negative at current prices. Standard price-to-earnings ratios are meaningless.
          The more useful metrics at this point in the cycle are:
        </p>

        {/* Valuation points */}
        <ul className="pl-5 space-y-3 mb-4 list-disc">
          {VALUATION_POINTS.map((pt, i) => (
            <li key={i} className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">{pt.term}</strong> — {pt.text}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default LithiumMiners;
import React from 'react';

const ETF_TABLE = [
  {
    name: "Global X Lithium & Battery Tech",
    ticker: "LIT",
    aum: "~$2.5B",
    expense: "0.75%/yr",
    holds: "Lithium miners, refiners, battery manufacturers. Top holdings: ALB, SQM, Ganfeng, CATL, Pilbara, Tesla, BYD, Panasonic.",
    purity: "Medium — ~40–50% pure lithium miners",
  },
  {
    name: "VanEck Rare Earth/Strategic Metals",
    ticker: "REMX",
    aum: "~$500M",
    expense: "0.53%/yr",
    holds: "Rare earth and critical minerals broadly — MP Materials, Lynas, Energy Fuels. Lithium is ~20–30% of holdings.",
    purity: "Low — diversified critical minerals",
  },
  {
    name: "Amplify Lithium & Battery Technology",
    ticker: "BATT",
    aum: "~$150M",
    expense: "0.59%/yr",
    holds: "Similar to LIT but with more equal weighting. Includes battery materials beyond lithium (cobalt, nickel, manganese).",
    purity: "Medium — broader battery materials",
  },
];

const LithiumETFs = () => {
  return (
    <section className="py-12 bg-white" id="etfs">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 8
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Lithium ETFs: LIT, REMX, BATT — Side by Side
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          For most investors, a lithium ETF is the right entry point. Here is a comparison of the
          three most relevant options for a US investor:
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {[
                  { label: "ETF",            highlight: false },
                  { label: "Ticker",         highlight: false },
                  { label: "AUM (approx)",   highlight: true  },
                  { label: "Expense Ratio",  highlight: false },
                  { label: "What it holds",  highlight: false },
                  { label: "Lithium Purity", highlight: false },
                ].map(({ label, highlight }) => (
                  <th
                    key={label}
                    className={`text-[10px] font-bold uppercase tracking-[.07em] px-3.5 py-2.5 text-left border-b-2 border-bdr whitespace-nowrap
                      ${highlight ? "text-li-d" : "text-muted"}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ETF_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(59,130,246,0.03)]">
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink whitespace-nowrap">
                    {row.name}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 font-mono font-semibold text-li-d whitespace-nowrap">
                    {row.ticker}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.aum}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.expense}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 leading-[1.55] max-w-[280px]">
                    {row.holds}
                  </td>
                  <td className="px-3.5 py-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3 whitespace-nowrap">
                    {row.purity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          LIT: the closest thing to a pure-play lithium ETF
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          LIT (Global X Lithium & Battery Tech ETF) is the most liquid and most widely held lithium
          investment vehicle for US retail investors. Its top holdings include Albemarle (ALB), SQM,
          Ganfeng Lithium, Pilbara Minerals, and Arcadium Lithium — the producers whose financials
          are most directly tied to lithium prices. But it also holds downstream companies like
          CATL, BYD, Tesla, and Panasonic.{' '}
          <strong className="text-ink">
            This dilution means LIT may underperform pure lithium miners in a price recovery, but
            also outperform them when lithium prices are weak
          </strong>{' '}
          because EV demand drives the battery/EV portion of the portfolio.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The LIT tracking problem
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          LIT does not track the lithium spot price. Over the past three years, LIT fell
          approximately 75% from its 2022 peak while LCE spot fell 86% — LIT partially cushioned
          the fall through its downstream holdings. But in a sharp lithium price recovery,
          individual miners like Pilbara Minerals or Albemarle will likely outperform LIT on a
          percentage basis because they have full operational leverage to the commodity.
        </p>

        {/* Callout — blue */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.22)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              LIT vs ALB vs SQM: which has more leverage?
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              If LCE doubles from $11k to $22k, the incremental revenue flows almost entirely to
              the miner's bottom line (variable costs change little). Albemarle's operating income
              could triple on a 2× price move. LIT, which holds ALB at ~8% weight and many other
              less-leveraged names, might rise 60–80% on the same price move. For maximum leverage
              to a price recovery, individual miners dominate — but individual miners also carry
              idiosyncratic risk (permitting, FX, operational issues).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LithiumETFs;
import React from 'react';

const WAYS = [
  {
    option: "Option 1",
    title: "Lithium ETFs (LIT, REMX, BATT)",
    text: "Buy a basket of lithium mining and technology companies in one trade. LIT is the most liquid ($2.5B AUM). Provides diversification but significant dilution — LIT includes battery manufacturers and materials companies alongside miners. Low effort, high liquidity.",
    tag: "Best for most investors",
    tagStyle: "bg-grn-bg text-grn",
    accent: "border-l-grn",
  },
  {
    option: "Option 2",
    title: "Individual miners (ALB, SQM, Pilbara, Arcadium)",
    text: "Direct equity in lithium producers. Higher operational leverage to lithium prices than ETFs. Requires company-specific analysis (production costs, balance sheet, jurisdiction risk). US-listed: ALB, SQM. ASX-listed: PLS, IGO, MIN.",
    tag: "Good if you research each company",
    tagStyle: "bg-[rgba(59,130,246,0.08)] text-li-d",
    accent: "border-l-li",
  },
  {
    option: "Option 3",
    title: "Junior/exploration-stage miners",
    text: "Small companies with lithium projects in early development. Highest leverage to a price recovery — can 5–10× if prices surge. Also highest risk — most will not reach production, dilute shareholders repeatedly, or fail. This is venture capital, not commodity investing.",
    tag: "High risk — expert investors only",
    tagStyle: "bg-red-bg text-red",
    accent: "border-l-red",
  },
  {
    option: "Option 4",
    title: "Lithium futures (GFE / CME)",
    text: "Direct price exposure via the Guangzhou Futures Exchange (China) or CME lithium hydroxide futures. GFE futures are primarily for institutional/Chinese market participants. CME volumes are thin. Not practical for most retail investors outside of derivative strategies.",
    tag: "Not practical for retail",
    tagStyle: "bg-red-bg text-red",
    accent: "border-l-red",
  },
  {
    option: "Option 5",
    title: "Physical lithium",
    text: "There is no practical retail market for physical lithium. Unlike gold bars, lithium carbonate is a fine white powder requiring specialist storage, handling permits, and no resale liquidity. Some industrial users hold physical for operational reasons, but this is not an investment vehicle.",
    tag: "Not available to retail investors",
    tagStyle: "bg-red-bg text-red",
    accent: "border-l-red",
  },
  {
    option: "Option 6",
    title: "EV/battery supply chain ETFs",
    text: "Broader electrification plays: DRIV (Global X Autonomous EV), KARS (KraneShares Electric Vehicles), or IDRV (iShares Self-Driving). These dilute lithium exposure further into EVs/autonomy broadly, but may be appropriate for investors who want the EV theme without single-commodity concentration.",
    tag: "Diluted — less pure lithium exposure",
    tagStyle: "bg-amb-bg text-amb",
    accent: "border-l-amb",
  },
];

const WaysToInvest = () => {
  return (
    <section className="py-12 bg-white" id="ways-to-invest">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 7
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          5 Ways to Invest in Lithium — Trade-offs Laid Flat
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          There is no perfect lithium investment vehicle for retail investors. Each option involves
          a different exposure type, different correlation to spot prices, and different
          risk-reward profile. Here are all five options honestly:
        </p>

        {/* Ways grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {WAYS.map((way, i) => (
            <div
              key={i}
              className={`bg-white border border-bdr rounded-xl p-4 border-l-[3px] ${way.accent}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[.1em] text-li-d mb-1">
                {way.option}
              </p>
              <p className="text-[15px] font-bold text-ink mb-2">{way.title}</p>
              <p className="text-[13px] text-ink3 leading-[1.65] mb-3">{way.text}</p>
              <span
                className={`inline-block text-[10px] font-bold px-2 py-1 rounded-[10px] ${way.tagStyle}`}
              >
                {way.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WaysToInvest;
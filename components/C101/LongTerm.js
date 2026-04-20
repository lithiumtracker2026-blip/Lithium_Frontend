// components/sections/AsxAndLongTermSection.jsx

const asxCompanies = [
  {
    company: "Pilbara Minerals",
    asx: "PLS",
    otc: "PILBF",
    asset: "Pilgangoora, WA",
    comment: "Largest pure-play spodumene producer. No refining — sells SC6 direct.",
  },
  {
    company: "IGO Limited",
    asx: "IGO",
    otc: "IOGQF",
    asset: "TLEA stake (Greenbushes), Nova nickel",
    comment: "Best proxy for Greenbushes quality without full Albemarle exposure.",
  },
  {
    company: "Mineral Resources",
    asx: "MIN",
    otc: "MALRF",
    asset: "Wodgina (50%, ALB JV), Mt Marion (50%, Ganfeng JV)",
    comment: "Diversified — iron ore + lithium. High debt. Higher-risk turnaround.",
  },
  {
    company: "Core Lithium",
    asx: "CXO",
    otc: "CORX",
    asset: "Finniss, NT",
    comment: "Smaller operation, mothballed parts of operations at $11k LCE. Higher risk.",
  },
  {
    company: "Liontown Resources",
    asx: "LTR",
    otc: "LLNXF",
    asset: "Kathleen Valley, WA",
    comment: "New producer (first shipments 2024). Albemarle made a blocked takeover attempt 2023.",
  },
];

const bearCaseRisks = [
  {
    title: "Lithium intensity decline",
    desc: "Battery manufacturers are reducing kg LCE per kWh every year — from ~0.85 in 2015 to ~0.60 today, heading toward ~0.50 by 2030. This partially offsets vehicle count growth.",
  },
  {
    title: "Battery recycling",
    desc: "By 2030–2035, recycled lithium begins supplying 10–15% of demand, reducing the call on new primary supply.",
  },
  {
    title: "Sodium-ion displacement",
    desc: "If Na-ion batteries prove economical in the budget EV segment (sub-200km range), they could cap some LFP demand growth.",
  },
  {
    title: "EV adoption slower than projected",
    desc: "The IEA has been consistently too optimistic on EV adoption timelines in developed markets (though too pessimistic on China). If Western EV mandates soften or get delayed, demand growth is lower.",
  },
];

export default function AsxAndLongTermSection() {
  return (
    <>
      {/* ── ASX GUIDE ── */}
      <section className="bg-[#F4F7FB] py-16 md:py-20" id="asx-guide max-w-[1600px]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
            Section — Practical Investing
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
            Buying Australian Lithium Stocks (ASX) from the US — Practical Guide
          </h2>
          <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
            Some of the most directly lithium-leveraged companies in the world — Pilbara
            Minerals (PLS), IGO Limited (IGO), Mineral Resources (MIN) — are listed only
            on the Australian Securities Exchange (ASX). For US investors who want this
            exposure, here is the practical guide.
          </p>

          {/* Options grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              {
                label: "Option 1",
                title: "US-listed ADRs",
                badge: "Easiest",
                badgeColor: "bg-grn-bg text-grn",
                body: "Some Australian miners offer American Depositary Receipts (ADRs) traded over-the-counter in the US. Check OTC Markets (otcmarkets.com) for each company. Pilbara Minerals trades as PILBF; IGO Limited trades as IOGQF. These are lightly traded, have wide bid-ask spreads, and may lag the Australian price by a session.",
              },
              {
                label: "Option 2",
                title: "Interactive Brokers (IBKR)",
                badge: "Best execution",
                badgeColor: "bg-[rgba(var(--li-rgb),0.1)] text-li",
                body: "IBKR offers direct ASX access from a US account. Buy PLS, IGO, MIN directly in Australian dollars. Enable international trading, convert USD to AUD, and trade during ASX hours (10am–4pm AEST = ~8pm–2am US Eastern). Best execution and genuine AUD-denominated holdings, but currency exposure and overnight hours.",
              },
              {
                label: "Option 3",
                title: "Global brokerage platforms",
                badge: "Higher fees",
                badgeColor: "bg-[#F4F7FB] text-ink/60",
                body: "TD Ameritrade, Fidelity, and Charles Schwab offer some international trading but with higher fees than IBKR and more limited ASX coverage. Schwab Global Account and Fidelity's Global Trading feature both cover ASX-listed stocks.",
              },
            ].map((opt) => (
              <div key={opt.label} className="bg-white rounded-xl border border-bdr p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-ink/40 uppercase tracking-wider">{opt.label}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${opt.badgeColor}`}>{opt.badge}</span>
                </div>
                <p className="font-semibold text-ink">{opt.title}</p>
                <p className="text-sm text-ink/75 leading-relaxed">{opt.body}</p>
              </div>
            ))}
          </div>

          {/* Tax considerations */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
            Tax considerations for ASX holdings
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
            Australian dividends carry 15% Australian withholding tax for US residents
            under the US-Australia tax treaty. You claim a foreign tax credit on Form 1116
            of your US tax return to offset the same income taxed by both countries. The
            result: effective US tax rate on Australian dividends is roughly your marginal
            rate minus the 15% already paid to Australia. Capital gains on ASX shares are
            taxed only in the US (Australia does not tax non-resident capital gains on
            listed shares under the treaty).
          </p>
          <p className="text-base text-ink/80 max-w-[1600px] mb-12 leading-relaxed">
            Currency gains/losses: if you buy PLS at AUD $3.50, hold it, and sell at AUD
            $4.50 — but the AUD/USD moves during that period — you have both a stock
            capital gain and a currency gain/loss to report on your US return. Keep records
            of the USD equivalent at each transaction date.
          </p>

          {/* ASX companies table */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
            Key ASX-listed lithium companies
          </h3>
          <div className="overflow-x-auto rounded-xl border border-bdr">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#F4F7FB] border-b border-bdr">
                  {["Company", "ASX ticker", "US OTC", "Key asset", "Comment"].map((h) => (
                    <th key={h} className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {asxCompanies.map((row, i) => (
                  <tr key={row.asx} className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"}`}>
                    <td className="px-5 py-4 font-medium text-ink align-top">{row.company}</td>
                    <td className="px-5 py-4 font-mono text-li align-top">{row.asx}</td>
                    <td className="px-5 py-4 font-mono text-ink/60 align-top">{row.otc}</td>
                    <td className="px-5 py-4 text-ink/80 align-top">{row.asset}</td>
                    <td className="px-5 py-4 text-ink/70 align-top">{row.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ── LONG-TERM OUTLOOK ── */}
      <section className="bg-white py-16 md:py-20 " id="long-term">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
            Section — Long-Term View
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-[1600px] leading-snug">
            Is Lithium a Good Long-Term Investment? The 2030–2035 Demand Case
          </h2>
          <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
            The investment case for lithium over a 10-year horizon is stronger than the
            current price suggests — precisely because the current price is below the
            incentive level for new supply. The arithmetic is not complicated, though the
            timing is.
          </p>

          {/* Demand model */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
            The demand model: EV + storage = 3–5× demand by 2035
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
            IEA's 2025 Global EV Outlook projects 40–50 million EV sales annually by 2030
            (from ~17 million in 2024) in the Stated Policies Scenario, rising to 65–75
            million in the Net Zero Emissions scenario. Each additional million EVs requires
            approximately 70,000–100,000 tonnes LCE of new lithium demand per year
            (depending on battery chemistry and pack size).
          </p>
          <p className="text-base text-ink/80 max-w-[1600px] mb-4 leading-relaxed">
            Adding stationary energy storage (grid-scale batteries for solar/wind
            integration), which is growing even faster than EVs on a percentage basis, the
            total demand picture by 2030 is 2–3× current demand. By 2035, most serious
            models show 3–5× current demand levels.
          </p>
          <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
            The supply side cannot match this growth at $11,000/t. The incentive price for
            new greenfield brine development is $18,000–$25,000/t. No rational company will
            spend $3–5 billion building a new mine to sell lithium at $11,000. This is the
            structural argument for higher prices — not as a guess about timing, but as a
            statement about what the supply math requires.
          </p>

          {/* Bear case */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-5">
            The bear case on long-term demand
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] mb-6 leading-relaxed">
            Intellectual honesty requires acknowledging the genuine long-term risks:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            {bearCaseRisks.map((r) => (
              <div key={r.title} className="bg-[#F4F7FB] rounded-xl border border-bdr p-5">
                <p className="font-semibold text-ink text-sm mb-1.5">{r.title}</p>
                <p className="text-sm text-ink/75 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
            None of these risks invalidates the long-term bull case, but they do argue for
            holding the demand forecast with appropriate uncertainty — especially on the
            higher-growth scenarios.
          </p>

          {/* Incentive price */}
          <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
            The incentive price as a floor for long-term prices
          </h3>
          <p className="text-base text-ink/80 max-w-[1600px] leading-relaxed">
            The most useful long-term framework is the concept of the incentive price.
            Sustainably, lithium cannot trade below the incentive price for new supply
            because no new supply gets built. It cannot trade dramatically above it because
            the high price incentivises exactly the new development that brings supply back.
            The current $11,000/t is well below the incentive price ($18,000–$25,000/t for
            new brines) — meaning this price level is unsustainably low in a world of
            growing demand. The question is not{" "}
            <em>whether</em> prices will be higher in 10 years, but{" "}
            <em>how long</em> the current glut lasts before the deficit forces them higher.
          </p>

        </div>
      </section>
    </>
  );
}
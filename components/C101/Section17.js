// components/sections/FaqSection.jsx

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the lithium price today?",
    a: <>Lithium carbonate (LCE) is approximately $11,000 per tonne in China as of April 2026. Spodumene SC6 CIF China is approximately $800/t. Lithium hydroxide is approximately $13,500/t. These are assessed prices, not exchange-traded. See <a href="/lithium/" className="text-li underline underline-offset-2 hover:opacity-80 transition-opacity">goldandsilvertracker.com/lithium/</a> for current readings updated daily.</>,
  },
  {
    q: "What is the best way to invest in lithium?",
    a: "For most US retail investors, the LIT ETF (Global X Lithium & Battery Tech) is the most practical entry point. It is liquid, diversified across multiple producers and geographies, and requires no international brokerage account. For more direct exposure, Albemarle (ALB) and SQM are the primary US-listed pure-play producers. Australian miners (Pilbara Minerals, IGO) require an international broker but offer more direct spodumene exposure. There is no way to invest in physical lithium as a retail investor.",
  },
  {
    q: "Why did lithium prices crash?",
    a: "Lithium carbonate peaked at $80,600/t in November 2022 and crashed to $7,800 by February 2024 — an 86% decline. The primary cause was a massive increase in Chinese lepidolite production: output roughly doubled between 2021 and 2023, creating a supply glut that overwhelmed demand growth. Secondary factors: battery manufacturers destocked expensive inventory rather than buy at high spot prices, and EV demand growth briefly slowed in late 2022. Crucially, global EV sales kept growing throughout the crash — this was a supply shock, not a demand collapse.",
  },
  {
    q: "Will lithium prices recover in 2026 or 2027?",
    a: "The consensus forecast from IEA, BloombergNEF, and Benchmark Mineral Intelligence projects a supply deficit emerging in late 2026 or 2027, which should drive prices toward $14,000–$20,000/t LCE by 2027. However, this forecast has been pushed back multiple times (originally forecast for 2024, then 2025, then 2026). The key variables are: (1) how quickly Chinese lepidolite curtails at $11,000/t; (2) whether Argentine and Australian supply additions are delayed; (3) whether DLE technology commercialises faster than expected. The conditions for a recovery are building — Wuxi stocks declining, battery maker inventory below 30 days — but the specific timing remains uncertain.",
  },
  {
    q: "Can you buy physical lithium?",
    a: "No. Unlike gold or silver, there is no practical retail market for physical lithium. Lithium carbonate is a fine white powder requiring specialist storage, chemical handling permits, and there is no standardised retail market with buyback liquidity. This distinguishes lithium from precious metals: exposure must be gained through equity (ETFs or mining stocks) rather than directly holding the material.",
  },
  {
    q: "What is LCE?",
    a: "LCE stands for Lithium Carbonate Equivalent. It is the industry standard unit for expressing lithium content across different product forms. All lithium products — carbonate, hydroxide, spodumene concentrate, lithium metal — can be converted to LCE using fixed ratios: 1 tonne lithium metal = 5.323 tonnes LCE; 8.9 tonnes SC6 spodumene = 1 tonne LCE; 1 tonne LCE = 6.31 tonnes LiOH monohydrate. Prices quoted in commodity media are almost always LCE unless explicitly noted otherwise.",
  },
  {
    q: "How is the LIT ETF taxed?",
    a: "LIT (Global X Lithium & Battery Tech ETF) is taxed as standard equity. Gains on shares held longer than one year qualify for long-term capital gains rates (0%, 15%, or 20% depending on your income bracket). This is better than physical gold ETFs (GLD, IAU), which are taxed as collectibles at a maximum 28% rate. Dividends from LIT may be qualified or ordinary depending on the underlying holdings — check the fund's annual Form 1099-DIV for the breakdown. Not tax advice — consult your tax advisor.",
  },
  {
    q: "What is the difference between lithium carbonate and lithium hydroxide?",
    a: "Both are processed lithium chemicals used to make battery cathode materials, but for different battery types. Lithium carbonate (LCE, Li₂CO₃) is used in LFP (lithium iron phosphate) batteries — the dominant chemistry in China's EV market. Lithium hydroxide (LiOH) is used in NMC (nickel-manganese-cobalt) and NCA batteries — preferred for high-energy long-range vehicles. As LFP's share of the market rises (currently ~65% of new EV production), carbonate demand grows relative to hydroxide. LiOH currently trades at a ~$2,500/t premium to LCE, reflecting its higher processing cost and more specific use case.",
  },
  {
    q: "Is lithium a good investment in 2026?",
    a: "Lithium at $11,000/t has both a compelling bull case (deficit arriving 2026–2027, 30% of supply below cash cost, battery maker inventory below restocking threshold) and genuine bear risks (deficit timeline keeps slipping, DLE could commercialise faster than expected, Chinese producers absorbing losses longer than modelled). Whether it is \"good\" depends on your time horizon, risk tolerance, and conviction on the deficit timing. What we can say: the setup is more attractive than at $80,000/t peak, and the fundamentals are incrementally improving. Size conservatively — 2–3% of portfolio for most investors — and use the signals in Section 12 to add on confirmation. This is not financial advice.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-bdr last:border-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base font-semibold text-ink group-hover:text-li transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-bdr flex items-center justify-center text-ink/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-[600px] pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base text-ink/75 leading-relaxed pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-[#F4F7FB] py-16 md:py-20" id="faq">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 17
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-10 leading-snug">
          Lithium Investing FAQ
        </h2>

        <div className="bg-white rounded-xl border border-bdr divide-y divide-bdr px-6 md:px-8">
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

      </div>
    </section>
  );
}
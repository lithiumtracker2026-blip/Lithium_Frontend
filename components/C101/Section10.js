import React from 'react';

const CONDITIONS = [
  {
    text: "Wuxi warehouse stocks declining for 8+ consecutive weeks — signals physical demand is drawing down supply rather than building it.",
    status: "✓",
    current: "Currently: declining 8 weeks.",
    met: true,
  },
  {
    text: "Battery maker inventory days falling below 30 days — signals restocking is imminent and spot purchasing is about to resume.",
    status: "✓",
    current: "Currently: ~25 days, below threshold.",
    met: true,
  },
  {
    text: "Lepidolite output showing month-over-month declines for 3+ months — signals the curtailment mechanism is actually working.",
    status: "Partial ✓",
    current: "Currently: slow curtailment is occurring.",
    met: "partial",
  },
  {
    text: "Refinery margin positive and expanding — signals downstream processors are profitable enough to incentivise continued conversion.",
    status: "✓",
    current: "Currently: +$3,880/t.",
    met: true,
  },
  {
    text: "EV sales acceleration visible in CAAM monthly data — demand-side confirmation.",
    status: "✓",
    current: "Currently: +20% YoY Q1 2026 driven by Chinese stimulus.",
    met: true,
  },
];

const ENTRY_SIGNALS = [
  "Wuxi stocks at a multi-month low and trending lower for 8+ weeks",
  "Battery maker inventory at or below 20 days (urgent restocking territory)",
  "First month-over-month LCE price increase after a flat or declining period",
];

const TimingPositioning = () => {
  return (
    <section className="py-12 bg-white" id="timing">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 10
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Timing and Positioning — When to Buy, When to Add
        </h2>

        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Timing commodity cycles is notoriously difficult — more so for lithium, where the price
          is opaque and the cycle duration has been extreme. That said, there are framework-level
          insights that are more useful than attempting to call an exact bottom.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-4">
          What historically precedes a lithium price recovery
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Based on the 2016–2018 and 2021–2022 recovery cycles, the conditions that have
          historically preceded lithium price moves higher are:
        </p>

        {/* Conditions checklist */}
        <div className="flex flex-col gap-2 mb-6">
          {CONDITIONS.map((c, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 rounded-xl p-4 border
                ${c.met === true
                  ? "bg-grn-bg border-[rgba(26,122,74,0.18)]"
                  : "bg-amb-bg border-[rgba(217,119,6,0.22)]"
                }`}
            >
              {/* Number + status */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white
                    ${c.met === true ? "bg-grn" : "bg-amb"}`}
                >
                  {i + 1}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1">
                <p className="text-[13px] text-ink3 leading-[1.65] mb-1">{c.text}</p>
                <p className={`text-[12px] font-bold
                  ${c.met === true ? "text-grn" : "text-amb"}`}>
                  {c.status} — {c.current}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[15px] leading-[1.82] text-ink3 mb-10">
          Four of the five conditions are currently met. The partial condition (lepidolite
          curtailment rate) is the key variable the market is watching. If curtailment accelerates
          in Q2–Q3 2026, the consensus deficit forecast comes forward.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Dollar-cost averaging vs lump sum
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          For a commodity at a cyclical trough with genuine uncertainty about timing,
          dollar-cost averaging over 6–12 months is more defensible than a lump-sum entry. The
          downside scenario (deficit delayed to 2028+) could see prices return toward
          $8,000–$9,000/t, which would hurt a lump-sum position. The upside scenario (deficit
          arrives late 2026) could mean LCE moves to $18,000+ before you have deployed all your
          capital if you DCA too slowly. Neither extreme argues strongly against a measured phased
          entry.
        </p>

        {/* DCA vs lump sum visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          <div className="bg-white border border-bdr border-l-[3px] border-l-grn rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.1em] text-grn mb-2">
              Dollar-Cost Averaging (recommended)
            </p>
            <p className="text-[13px] text-ink3 leading-[1.65]">
              Deploy capital in equal tranches over 6–12 months. Reduces risk of entering before
              the deficit timeline extends again. Sacrifices some upside if recovery is sharp and
              early.
            </p>
          </div>
          <div className="bg-white border border-bdr border-l-[3px] border-l-amb rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-[.1em] text-amb mb-2">
              Lump Sum
            </p>
            <p className="text-[13px] text-ink3 leading-[1.65]">
              Maximum upside if trough is exactly now. Maximum downside if deficit is delayed to
              2028+ and prices revisit $8,000–$9,000/t. Only appropriate if conviction on timing
              is very high.
            </p>
          </div>
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          What to use as entry signals
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Three signals from the live data page make reliable entry triggers when combined:
        </p>

        {/* Entry signals */}
        <div className="flex flex-col gap-2 mb-6">
          {ENTRY_SIGNALS.map((signal, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.15)] rounded-xl p-4"
            >
              <span className="w-6 h-6 rounded-full bg-li flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-[13px] text-ink3 leading-[1.65]">{signal}</p>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-amb-bg border border-[rgba(217,119,6,0.25)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              These are not perfect signals
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              They work better in combination than individually, and they will not catch the exact
              bottom. But they distinguish "the recovery has started" from "the market is still
              clearing surplus."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimingPositioning;
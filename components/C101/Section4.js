import React from 'react';

const STAT_BAND = [
  {
    value: "~30%",
    valueColor: "text-li",
    label: "Capacity below cost",
    sub: "Lepidolite at $11,000/t",
  },
  {
    value: "25 days",
    valueColor: "text-[#10B981]",
    label: "Battery maker inventory",
    sub: "Below 30d threshold",
  },
  {
    value: "↓ Declining",
    valueColor: "text-amb",
    label: "Wuxi LiCO₃ stocks",
    sub: "8-week trend",
  },
  {
    value: "+$3,880",
    valueColor: "text-grn",
    label: "Refinery margin",
    sub: "LCE minus SC6×8.9",
  },
];

const WhereNow = () => {
  return (
    <section className="py-12 bg-white" id="where-now">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 4
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Where We Are Now: The $11,000 Setup
        </h2>

        {/* Intro paras */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          As of April 2026, lithium carbonate is trading at approximately $11,000/t — up 41% from
          the February 2024 trough but still 86% below the November 2022 all-time high. The partial
          recovery reflects real supply-side changes: Wuxi warehouse stocks have declined from the
          August 2024 peak (~115,000t), Chinese battery maker inventory has destocked from ~90 days
          to ~25 days, and some lepidolite curtailment has occurred.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          But the recovery has been slow and grinding rather than sharp. There are structural
          reasons for this:
        </p>

        {/* Bullet list */}
        <ul className="pl-5 mb-8 space-y-2">
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">New supply keeps arriving.</strong> Australian spodumene
            projects committed during the price spike are still ramping. Argentine brine projects
            are adding tonnes. The surplus has shrunk but not yet flipped to deficit.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Lepidolite curtailment is happening, but slowly.</strong>{' '}
            Chinese producers are reluctant to idle capacity — they have sunk capital costs, workers
            to keep employed, and hope that prices recover before they have to shut down. This is
            rational at the company level but collectively extends the oversupply.
          </li>
          <li className="text-[15px] leading-[1.75] text-ink3">
            <strong className="text-ink">Battery chemistry is shifting toward LFP.</strong> LFP
            batteries use carbonate rather than hydroxide, and LFP share of new EV production has
            risen to ~65%. This is actually incrementally positive for carbonate vs hydroxide, but
            both products are oversupplied.
          </li>
        </ul>

        {/* Stat band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bdr rounded-[10px] overflow-hidden mb-8">
          {STAT_BAND.map((s, i) => (
            <div key={i} className="bg-white px-4 py-3.5 text-center">
              <p className={`text-[22px] font-medium leading-none mb-1 ${s.valueColor}`}>
                {s.value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-muted mb-1">
                {s.label}
              </p>
              <p className="text-[11px] text-ink3">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          What the $11,000 level tells you
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The current LCE price of $11,000/t sits at an analytically interesting point. According
          to CRU Group's quarterly cost survey, approximately{' '}
          <strong className="text-ink">
            30% of global lithium supply — primarily Chinese lepidolite — is currently operating
            below its estimated all-in sustaining cost at this price level
          </strong>
          . At a hypothetical $9,000/t (the mass curtailment scenario), that figure rises to ~55%
          of lepidolite capacity.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          This is simultaneously a floor argument and a warning. It is a floor argument because
          operations running below cost will eventually reduce output, tightening supply. It is a
          warning because lepidolite producers have been absorbing losses for 18+ months without
          cutting as much as the economics would suggest they should.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The refinery margin is currently positive (+$3,880/t) — meaning Chinese SC6-to-LCE
          refiners are profitable. This is an improvement from the negative margins of 2023 but
          below the margins needed to incentivise major new refining investment.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The 2025–2026 recovery dynamics in detail
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The partial recovery from $7,800 to $11,000 has been driven by three reinforcing
          dynamics. First, Wuxi warehouse stocks peaked at approximately 115,000 tonnes in August
          2024 and have been declining for eight consecutive months. This reflects demand genuinely
          drawing down physical inventory rather than building it. Second, Chinese battery
          manufacturers completed their destocking cycle — CATL and BYD rebuilt inventory from ~90
          days in Q1 2024, then settled back toward restocking territory (~25 days) by early 2026.
          Third, some marginal lepidolite operations did reduce output or go on care-and-maintenance,
          though the scale has been less dramatic than the economics would suggest.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          What has held the recovery back: Australian spodumene shipments (from Pilgangoora,
          Greenbushes, and the newly-commissioned Kathleen Valley) have continued at full rate.
          Pilbara Minerals, as the world's largest independent spodumene seller, has maintained
          volumes to preserve market share and cover fixed costs. Argentine brine projects (Fenix,
          Cauchari) have been adding incremental supply. These additions have offset lepidolite
          reductions, slowing the price recovery to a grind rather than a surge.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3">
          The critical number to watch in Q2–Q3 2026 is the month-over-month change in lepidolite
          output from SMM's monthly survey. If output declines accelerate to 5–10% MoM for two or
          more consecutive months, the surplus-to-deficit crossover arrives materially earlier than
          current consensus projects.
        </p>

      </div>
    </section>
  );
};

export default WhereNow;
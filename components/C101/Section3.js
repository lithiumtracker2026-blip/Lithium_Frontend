import React from 'react';

const TIMELINE_ITEMS = [
  {
    date: "2015–2020",
    title: "Baseline: $6,000–$8,000/t LCE",
    text: "Lithium in oversupply after 2017–2018 mini-spike. SQM and Albemarle ramping Chilean brine. Prices depressed for years.",
    dot: "default",
  },
  {
    date: "2021 H1–H2",
    title: "The surge begins: $8k → $30k",
    text: "EV sales double. Chinese battery makers start bidding competitively for supply. Spot market tightens. Fastmarkets SC6 goes from $400 to $1,200.",
    dot: "default",
  },
  {
    date: "November 2022",
    title: "🔴 All-Time High: $80,000/t LCE",
    text: "SMM assessed LCE peaks. SC6 at $8,000/t. Sentiment is that the world will run out of lithium. Multiple miners announce expansion plans at these prices. This is the top.",
    dot: "peak",
  },
  {
    date: "2023 H1",
    title: "Destocking begins: $80k → $30k",
    text: "Battery makers stop buying spot — they hold 60–90 days of expensive inventory and wait. Chinese lepidolite output doubles as projects commissioned at peak prices come online. Spot collapses faster than anticipated.",
    dot: "default",
  },
  {
    date: "2023 H2",
    title: "The refinery squeeze: $30k → $15k",
    text: "SC6→LCE refinery margin goes negative. Chinese refineries converting spodumene to carbonate are losing money. Concentrate imports from Australia keep coming — miners have long-term offtake obligations. Processors stockpile losses and wait for relief.",
    dot: "default",
  },
  {
    date: "February 2024",
    title: "🟡 Trough: $7,800/t LCE",
    text: "SMM assessed LCE hits $7,800/t. SC6 at ~$760/t. Below estimated cash cost for most Chinese lepidolite operations. Wuxi warehouse stocks peak above 115,000t. Battery maker inventory at 90 days. Market is in maximum oversupply.",
    dot: "trough",
  },
  {
    date: "2024–2025",
    title: "Partial recovery: $7.8k → $11k",
    text: "Lepidolite curtailments begin (slowly). Wuxi stocks start declining. Battery maker inventory destocking completes — buyers return to spot. Prices stabilise but do not surge: new supply from Australia and Argentina continues to offset reductions.",
    dot: "default",
  },
  {
    date: "April 2026",
    title: "🔵 Now: $11,000/t — near lepidolite cash cost",
    text: "LCE sitting just above the marginal cost of Chinese lepidolite (~$10,500–$11,500 cash cost range). Deficit thesis intact but delayed. Market waiting for curtailments to accelerate or EV demand to surge.",
    dot: "now",
  },
];

const DOT_STYLES = {
  default: "bg-white border-2 border-li",
  peak:    "bg-red   border-2 border-red",
  trough:  "bg-amb   border-2 border-amb",
  now:     "bg-li    border-2 border-li",
};

const WhyCrashed = () => {
  return (
    <section className="py-12 bg-white" id="why-crashed">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 3
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          Why Lithium Crashed 86% from $80,000/t — The Full Story
        </h2>

        {/* Intro */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Understanding why lithium crashed — and specifically{' '}
          <em>what caused it</em> — is the most important piece of analysis for any investor
          looking at the sector today. The simplified version ("EV demand disappointed") is wrong.
          The accurate version is more specific and more useful for forecasting the recovery.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The 2021–2022 spike: fear of scarcity
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Lithium carbonate traded at roughly $6,000–$8,000/t from 2015 to early 2021. It had been
          there for years, with occasional spikes followed by resets. Then something changed: the EV
          adoption curve went nearly vertical. Tesla's volumes tripled. BYD exploded. Chinese NEV
          subsidies drove mass adoption faster than most forecasters had modelled. Battery
          manufacturers responded the way all rational buyers respond to potential scarcity: they
          panic-bought. By mid-2021, lead times on lithium were extending to 12+ months. By early
          2022, battery makers were offering to pay any price to secure supply.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          By November 2022,{' '}
          <strong className="text-ink">SMM assessed LCE at $80,600/t</strong> — a ten-times
          increase from the 2020 trough. This price was not sustainable. It reflected fear, not
          fundamental value. At $80,000/t, a mid-range EV contained roughly $5,000 of lithium raw
          material. Automakers were making nothing on every car sold. The pressure to break the
          price was immense.
        </p>

        {/* Timeline */}
        <div className="relative ml-3 pl-7 my-6 border-l-2 border-bdr">
          {TIMELINE_ITEMS.map((item, i) => (
            <div key={i} className="relative mb-6 last:mb-0">
              {/* Dot */}
              <span
                className={`absolute -left-[34px] top-0.5 w-3 h-3 rounded-full ${DOT_STYLES[item.dot]}`}
              />
              <p className="text-[11px] font-bold text-li-d mb-0.5">{item.date}</p>
              <p className="text-[14px] font-bold text-ink mb-1">{item.title}</p>
              <p className="text-[13px] text-ink3 leading-[1.65]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-8 mb-3">
          The three mechanisms of the crash — in order of importance
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          <strong className="text-ink">
            1. Chinese lepidolite supply surge (primary cause).
          </strong>{' '}
          Between 2021 and 2023, Chinese producers in Jiangxi and Sichuan invested heavily in
          lepidolite-based lithium carbonate production. Monthly output went from roughly 15,000
          tonnes Li₂CO₃ to 35,000+ tonnes in 18 months. This was not anticipated by most market
          models, which had focused on Australian hard rock and Atacama brine as the swing
          producers. Lepidolite is higher cost but was commissioned during the price spike, when
          even $80,000/t justified expensive ore processing.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          <strong className="text-ink">
            2. Multi-stage destocking (amplifier).
          </strong>{' '}
          The price crash was amplified by a chain of destocking that moved through the supply
          chain. Battery manufacturers drew down $80,000-per-tonne inventory rather than buy spot.
          Midstream processors (cathode material makers) did the same. This meant apparent demand
          in the spot market collapsed faster than end-user EV demand — EV sales were still growing
          throughout 2023. The price signal badly overstated the severity of the demand shortfall.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          <strong className="text-ink">
            3. Slower EV demand growth in 2022 H2–2023 H1 (secondary).
          </strong>{' '}
          Western EV demand did soften in late 2022 and early 2023 as interest rates rose and
          affordability tightened. This added marginal pressure but was not the primary driver —
          China's EV market kept growing throughout. The price collapse would have happened anyway
          due to mechanisms 1 and 2.
        </p>

        {/* Callout — green */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-grn-bg border border-[rgba(26,122,74,0.18)]">
          <span className="text-lg flex-shrink-0 mt-0.5">✓</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              The key insight: demand kept growing, supply overwhelmed it
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Global EV sales grew from ~6.6 million in 2021 to ~13.5 million in 2023, even through
              the lithium price crash. Lithium demand grew every year. The crash was entirely
              supply-driven — specifically Chinese lepidolite. Any recovery thesis that depends on
              demand recovering from a demand problem is solving the wrong problem. The question is
              whether Chinese lepidolite curtails fast enough at current prices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyCrashed;
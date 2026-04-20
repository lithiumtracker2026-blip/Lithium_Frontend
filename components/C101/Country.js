import React from 'react';

const CountryAnalysis = () => {
  return (
    <>
      {/* ── Supply Geography ── */}
      <section className="py-12 bg-white" id="country-analysis">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Section label */}
          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
            Section — Supply Geography
          </p>

          {/* H2 */}
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
            The Lithium Geography — Chile, Australia, Argentina, China: Deep Dives
          </h2>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            Understanding which countries produce lithium, how costs vary, and what political or
            environmental risks exist in each jurisdiction is essential to evaluating individual
            mining stocks and the overall supply outlook. The four major producing jurisdictions
            could not be more different from each other.
          </p>

          {/* ── Chile ── */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            Chile: lowest cost, highest political risk
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Chile's Atacama salar is the world's most productive lithium brine operation and the
            single lowest-cost source of lithium anywhere on earth. SQM and Albemarle have operated
            here for decades. The Atacama's lithium-rich brine naturally concentrates to levels 10×
            higher than other brines, and the driest desert on earth provides free solar evaporation.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            The political landscape shifted dramatically in 2023 when President Boric announced a
            National Lithium Strategy: the Chilean state (CODELCO, ENAMI) would take strategic
            stakes in all future lithium projects, and the existing SQM and Albemarle contracts
            would be renegotiated. SQM reached a deal in 2024: CODELCO will hold a 50% stake in a
            new joint venture operating the Atacama from 2031 onwards. Albemarle is negotiating
            separately.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            <strong className="text-ink">Investment implication:</strong> SQM's Atacama advantage
            remains intact through at least 2030 on current terms. The JV with CODELCO from 2031
            introduces uncertainty on profitability splits but does not threaten the mine's
            operation. For SQM equity investors, Chilean political risk is real but the asset
            quality is unique — no other brine operation in the world matches Atacama's grade and
            climate conditions.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-10">
            The Atacama water rights controversy is also significant. The Atacama is the world's
            driest non-polar desert, and lithium brine extraction does consume water indirectly (by
            drawing down the brine aquifer, which may affect freshwater sources used by indigenous
            Atacameño communities). This has been the subject of Chilean and international court
            challenges. The reputational risk is real, though production has not been legally halted.
          </p>

          {/* ── Australia ── */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            Australia: the reliable workhorse
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Australia produces approximately 38% of global lithium (USGS 2024) and is the dominant
            source of spodumene concentrate that feeds Chinese refineries. The key operations:
          </p>
          <ul className="pl-5 mb-4 space-y-2 list-disc">
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Greenbushes</strong> (Talison, owned 51% by Albemarle
              and 49% by IGO/Tianqi JV): The world's largest and richest lithium hard rock mine.
              Grade of 2.4–2.8% Li₂O (vs. 1–1.5% industry average). Located in Western Australia.
              Greenbushes is so high-grade that it sets the floor for Australian hard rock
              production costs.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Pilgangoora</strong> (Pilbara Minerals, ASX: PLS): The
              world's largest independent lithium mine not co-owned by a major chemical company.
              Approximately 680kt ore concentrate capacity. Pure spodumene seller — no refining.
              Highly leveraged to SC6 spot price.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Mount Marion</strong> (Mineral Resources / Ganfeng JV):
              Formerly a low-grade operation, now processing higher grades. MinRes 50%, Ganfeng 50%.
              Not a standalone investment but relevant to Mineral Resources exposure.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Wodgina</strong> (Mineral Resources / Albemarle JV):
              Mothballed during the 2019–2020 downturn, restarted 2022. Important as a swing
              producer.
            </li>
          </ul>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-10">
            <strong className="text-ink">Australia's structural advantage:</strong> Stable rule of
            law, export-oriented supply chain, IRA Critical Minerals Agreement (signed 2023) making
            Australian lithium qualifying for US IRA tax credits. A key beneficiary of the
            deglobalisation of battery supply chains.
          </p>

          {/* ── Argentina ── */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            Argentina: the pipeline that's always coming
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Argentina hosts some of the world's largest known lithium brine resources, primarily in
            the "Lithium Triangle" — the tri-border region shared with Chile and Bolivia. The Salar
            de Olaroz, Salar de Cauchari, and Salar de Jujuy are among the largest known brines
            outside Chile's Atacama.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            However, Argentina's development timeline has been consistently longer than expected due
            to three structural challenges:
          </p>
          <ul className="pl-5 mb-4 space-y-2 list-disc">
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Infrastructure deficit:</strong> Argentina's
              lithium-bearing salares are at 3,500–4,000m altitude with minimal road and power
              infrastructure. Every project requires enormous upfront infrastructure investment.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Currency and capital controls:</strong> Argentina's
              history of economic instability and capital controls has made international project
              financing difficult. The Milei administration elected in 2023 removed capital controls
              and implemented RIGI offering special tax protections for lithium projects over $200M
              investment.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Evaporation pond lead times:</strong> Traditional brine
              evaporation takes 12–18 months per cycle. This means Argentine brine projects take
              longer from commissioning to full output than Australian hard rock projects.
            </li>
          </ul>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-10">
            Despite these challenges, Argentina's pipeline is enormous — approximately 450kt LCE of
            development-stage capacity in our database. If even 30% of this pipeline develops on
            schedule, Argentina becomes a significant swing supply factor in the 2027–2030 window.
            The Rincon project (Rio Tinto, using DLE technology) is the bellwether: Phase 1 (3kt/yr)
            is operating, but Phase 2 (40kt/yr) has been delayed to 2027+.
          </p>

          {/* ── China ── */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            China: the country that determined the price crash
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            China is simultaneously the world's third-largest lithium producer, the dominant lithium
            refiner (65–75% of global capacity), the largest EV market, and the largest battery
            manufacturer. Understanding China's role is essential to any lithium investment thesis.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            The domestic Chinese lithium mining story is dominated by lepidolite — a lithium-bearing
            mica mineral found primarily in Jiangxi and Sichuan provinces. Lepidolite had been mined
            for centuries for industrial purposes but was not considered economically viable for
            lithium production until prices spiked above $30,000/t in 2022. At that point, Chinese
            producers rapidly commissioned new capacity, and monthly output doubled in 18 months.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Lepidolite's economics at current prices: estimated cash cost $8,000–$11,000/t LCE,
            AISC $10,000–$13,000/t LCE. At $11,000 spot, the lowest-cost operations are barely
            breaking even, and most are loss-making on an AISC basis. This is the curtailment
            pressure that underpins the recovery thesis.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-10">
            China's refining dominance is the other structural factor. Converting spodumene (SC6)
            from Australia into battery-grade carbonate or hydroxide requires large industrial plants
            operating at scale. China built these refineries over a decade with government support,
            cheap energy, and integrated supply chains. Building equivalent refining capacity in
            Australia, Europe, or North America costs 3–5× more per tonne of output and takes 7–10
            years.
          </p>

          {/* ── Bolivia ── */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The Lithium Triangle — Bolivia's potential and limits
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3">
            Bolivia's Salar de Uyuni is the world's largest lithium resource by some estimates —
            but it has been "almost in production" for 30 years. The Bolivian government has
            insisted on state control, nationalising the project and running it through YACIMIENTOS
            DE LITIO BOLIVIANOS (YLB). The brine quality is lower than Chile's Atacama (higher
            magnesium content complicates processing), political instability has deterred private
            capital, and at current prices the projects are not economic. Bolivia's lithium is real
            but is unlikely to enter the global supply balance in the near term. For practical
            investment purposes, Bolivia is a negligible factor through 2030.
          </p>

        </div>
      </section>

      {/* ── Greenbushes ── */}
      <section className="py-12 bg-[#F4F7FB]" id="greenbushes">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Section label */}
          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
            Section — Key Assets
          </p>

          {/* H2 */}
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
            Greenbushes: The Most Important Single Asset in Global Lithium
          </h2>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            If you follow lithium mining, you will encounter Greenbushes constantly. It is not just
            the world's largest lithium mine — it is so far above industry average in terms of ore
            grade and production costs that it effectively defines the bottom of the global cost
            curve. Understanding Greenbushes clarifies a lot about how the industry works.
          </p>

          {/* H3 */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            What makes Greenbushes extraordinary
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Located in southwestern Western Australia, Greenbushes has been mined since 1888 (for
            tin originally, then tantalum, then lithium). The ore body is a complex
            lithium-cesium-tantalum (LCT) pegmatite with lithium grades of 2.4–2.8% Li₂O —
            roughly twice the grade of most other hard rock lithium deposits globally. Higher grade
            means lower processing cost per tonne of output and longer mine life.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            The mine produces approximately 1.7 million tonnes per year of lithium concentrate
            (growing to ~2.4Mt with the Chemical Grade Plant 3 expansion). It is the single largest
            source of technical-grade spodumene globally, supplying approximately 25–30% of the
            world's processed lithium supply.
          </p>

          {/* H3 */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            Who owns Greenbushes and how to access it
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Greenbushes is owned through Talison Lithium:
          </p>

          {/* Ownership cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="bg-white border border-bdr border-l-[3px] border-l-li rounded-xl p-4">
              <p className="text-[10px] font-bold uppercase tracking-[.1em] text-li-d mb-1">
                US Investor Access
              </p>
              <p className="text-[15px] font-bold text-ink mb-2">
                Albemarle (ALB, NYSE) — 49% via Windfield Holdings JV
              </p>
              <p className="text-[13px] text-ink3 leading-[1.65]">
                Albemarle's stake in Greenbushes is their crown jewel asset. Even at $11,000/t LCE,
                Greenbushes is profitable. The low-cost nature of the mine is why Albemarle's
                Greenbushes production margin is positive even in the current trough.
              </p>
            </div>
            <div className="bg-white border border-bdr border-l-[3px] border-l-li rounded-xl p-4">
              <p className="text-[10px] font-bold uppercase tracking-[.1em] text-li-d mb-1">
                ASX Investor Access
              </p>
              <p className="text-[15px] font-bold text-ink mb-2">
                Tianqi Lithium / IGO Limited JV — 51% via TLEA
              </p>
              <p className="text-[13px] text-ink3 leading-[1.65]">
                IGO (ASX: IGO) owns 49% of TLEA (Tianqi Lithium Energy Australia), which owns 51%
                of Talison. IGO is the indirect way to gain Greenbushes exposure from the ASX. The
                TLEA stake is IGO's primary value driver.
              </p>
            </div>
          </div>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            There is no direct equity way to own purely Greenbushes. ALB is the best proxy for US
            investors; IGO is the closest ASX proxy, though both have other businesses.
          </p>

          {/* H3 */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            What Greenbushes means for the supply model
          </h3>

          {/* Callout — blue */}
          <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.22)]">
            <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
            <div>
              <p className="text-[13px] font-bold text-ink mb-1">
                Greenbushes will not curtail — even at $8,000/t
              </p>
              <p className="text-[13px] text-ink3 leading-[1.7] m-0">
                Because Greenbushes is so low-cost, it will not curtail even if LCE falls to
                $8,000/t. This is important: when bears say "30% of supply is below cost,"
                Greenbushes is definitely not in that 30%. The operations below cost are in China
                (lepidolite) and some marginal Australian hard rock operations. Greenbushes is a
                structural fixture of global supply regardless of price.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CountryAnalysis;
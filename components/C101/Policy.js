import React from 'react';

const PolicyAndDownstream = () => {
  return (
    <>
      {/* ── IRA & Policy ── */}
      <section className="py-12 bg-white" id="ira-policy">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
            Section — Policy & Regulation
          </p>

          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
            IRA & CRMA: How US and European Policy Reshapes the Lithium Supply Chain
          </h2>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            The Inflation Reduction Act (IRA, signed August 2022) and the EU's Critical Raw
            Materials Act (CRMA, 2024) are the two most significant policy interventions in battery
            supply chains in decades. Both aim to reduce dependence on Chinese-controlled supply
            chains. Both will affect which lithium assets win and lose on a decade-long horizon.
          </p>

          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            How the IRA affects lithium specifically
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            The IRA's EV tax credits (Section 30D) require that a percentage of battery minerals
            come from North America or countries with US free trade agreements, or be processed in
            those areas. The thresholds tighten annually. By 2027, EV buyers can only claim the
            full $7,500 credit if virtually all battery minerals meet these rules.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-3">
            The critical mineral sourcing requirements under IRA:
          </p>
          <ul className="pl-5 mb-4 space-y-2 list-disc">
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Section 30D (Consumer EV credit):</strong> EV must meet
              battery component assembly requirements AND critical mineral sourcing requirements.
              Lithium processed in China fails the latter test from 2025 onward for some thresholds.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Section 45X (Advanced Manufacturing Production Credit):</strong>{' '}
              Provides $35/kWh for battery cells and 10% of production cost for electrode active
              materials produced in the US. This directly subsidises US lithium hydroxide and
              cathode material production.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Section 48C (Advanced Energy Project Credit):</strong>{' '}
              30% investment tax credit for clean energy manufacturing facilities, including lithium
              refining built in the US.
            </li>
          </ul>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            Critical Minerals Free Trade Agreements — the IRA treats FTA partners as equivalent to
            domestic production for sourcing rules. Australia (2023), Japan (2023), and EU (pending)
            have signed Critical Minerals Agreements with the US that qualify their lithium for IRA
            benefits.
          </p>

          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            Winners and losers from IRA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            <div className="bg-grn-bg border border-[rgba(26,122,74,0.18)] border-l-[3px] border-l-grn rounded-xl p-4">
              <p className="text-[11px] font-bold uppercase tracking-[.1em] text-grn mb-2">
                Winners
              </p>
              <p className="text-[13px] text-ink3 leading-[1.65]">
                Australian spodumene producers (Pilbara, IGO/Greenbushes) whose concentrate now
                qualifies for IRA-compliant US EV supply chains. Chilean brine producers (SQM, ALB
                Atacama) under the US-Chile FTA. North American lithium projects (Albemarle's
                Silver Peak, US-based DLE projects) directly benefitting from 45X credits.
              </p>
            </div>
            <div className="bg-red-bg border border-[rgba(192,57,43,0.18)] border-l-[3px] border-l-red rounded-xl p-4">
              <p className="text-[11px] font-bold uppercase tracking-[.1em] text-red mb-2">
                Losers
              </p>
              <p className="text-[13px] text-ink3 leading-[1.65]">
                Chinese-processed lithium chemicals. Chinese refineries cannot qualify for IRA
                benefits regardless of where the ore was mined. The same Australian spodumene
                processed in a new US refinery would qualify — incentivising enormous investment
                in ex-China refining capacity.
              </p>
            </div>
          </div>

          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The EU Critical Raw Materials Act
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3">
            The CRMA (adopted April 2024) sets benchmarks for EU domestic production, processing,
            and recycling of critical minerals by 2030: at least 10% of annual EU consumption must
            be mined in the EU, 40% processed in the EU, 15% recycled in the EU, and no more than
            65% sourced from a single third country. For lithium specifically, this drives
            investment in European hard rock projects (Keliber in Finland, spodumene-bearing
            pegmatites in Portugal and Czech Republic) and European refining capacity.
          </p>

        </div>
      </section>

      {/* ── Battery Makers ── */}
      <section className="py-12 bg-[#F4F7FB]" id="battery-makers">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
            Section — Downstream
          </p>

          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
            CATL, BYD, LG Energy Solution — The Battery Makers and What They Mean for Lithium
          </h2>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            Understanding the battery manufacturers is essential context for lithium investors.
            These companies determine the chemistry mix (which lithium product wins), the pricing
            dynamics in the supply chain (they have significant leverage over miners), and
            indirectly, the demand trajectory. Some are also investable directly.
          </p>

          {/* Battery maker cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

            {/* CATL */}
            <div className="bg-white border border-bdr rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[17px] font-bold text-ink">CATL</h3>
                <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-[rgba(59,130,246,0.08)] text-li-d">
                  300750.SZ · ~37% global share
                </span>
              </div>
              <p className="text-[13px] text-ink3 leading-[1.65] mb-3">
                The world's largest battery manufacturer. Listed on China's Shenzhen Stock Exchange
                — not directly accessible from most US retail accounts. CATL's dominant technology
                is LFP (LCE demand) for standard range and NMC (LiOH demand) for premium range.
              </p>
              <div className="bg-[rgba(59,130,246,0.05)] rounded-lg p-3">
                <p className="text-[11px] font-bold text-li-d mb-1">Why it matters for lithium</p>
                <p className="text-[12px] text-ink3 leading-[1.6]">
                  CATL's purchasing decisions determine spot demand. Its monthly inventory levels
                  (surveyed by SMM) are the single best real-time indicator of near-term lithium
                  spot demand.
                </p>
              </div>
            </div>

            {/* BYD */}
            <div className="bg-white border border-bdr rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[17px] font-bold text-ink">BYD</h3>
                <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-grn-bg text-grn">
                  1211.HK · BYDDY OTC
                </span>
              </div>
              <p className="text-[13px] text-ink3 leading-[1.65] mb-3">
                Unique in that it is simultaneously a major battery manufacturer AND the world's
                largest EV maker (by units) AND vertically integrated into lithium carbonate
                processing. BYD's Blade Battery (an LFP format) is the most widely deployed LFP
                battery architecture globally.
              </p>
              <div className="bg-[rgba(59,130,246,0.05)] rounded-lg p-3">
                <p className="text-[11px] font-bold text-li-d mb-1">Berkshire note</p>
                <p className="text-[12px] text-ink3 leading-[1.6]">
                  Warren Buffett's Berkshire Hathaway was a major shareholder and has been
                  gradually selling its position since 2022.
                </p>
              </div>
            </div>

            {/* LG + Samsung */}
            <div className="bg-white border border-bdr rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[17px] font-bold text-ink">LG Energy Solution & Samsung SDI</h3>
                <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-amb-bg text-amb">
                  Seoul-listed · ADR access
                </span>
              </div>
              <p className="text-[13px] text-ink3 leading-[1.65]">
                South Korea's primary NMC/NCA producers for non-Chinese automakers. LGES supplies
                GM, Ford, Hyundai, Tesla (partially), and Stellantis. Samsung SDI supplies BMW,
                Rivian, and others. Both are investing in US battery plants under IRA incentives.
                Their NMC focus means they are more exposed to LiOH demand.
              </p>
            </div>

            {/* Panasonic */}
            <div className="bg-white border border-bdr rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[17px] font-bold text-ink">Panasonic Energy</h3>
                <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-[rgba(26,26,46,0.06)] text-ink3">
                  PCRFY OTC
                </span>
              </div>
              <p className="text-[13px] text-ink3 leading-[1.65]">
                Makes the 4680 cylindrical NCA cells for Tesla and the 2170 cells for Tesla's older
                vehicles. Listed as Panasonic Holdings (PCRFY OTC in the US). The Nevada
                Gigafactory joint venture with Tesla is Panasonic's primary battery exposure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── ETF vs Miner ── */}
      <section className="py-12 bg-white" id="etf-vs-miner">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
            Section — Investment Vehicles
          </p>

          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
            LIT ETF vs Individual Miner — Which Has More Upside in a Price Recovery?
          </h2>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            This question has a clear analytical answer, though the correct choice still depends on
            your risk tolerance.
          </p>

          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The leverage mathematics
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Consider Albemarle's economics at different LCE price scenarios. At $11,000/t, ALB's
            variable cost of production from its Atacama operations is approximately $5,000/t,
            giving a gross margin of ~$6,000/t. If LCE doubles to $22,000/t, the gross margin more
            than doubles to ~$17,000/t — because costs do not move proportionally with the price.
            This operational leverage means a 100% price increase translates to a ~180% increase in
            gross margin at the mine level.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            LIT ETF, which holds ALB at roughly 8% weight alongside Tesla (~7%), CATL (~9%), BYD
            (~6%), SQM (~7%), and Panasonic (~4%), would capture only a fraction of ALB's leverage
            — diluted by the battery manufacturers and downstream companies in the portfolio.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-3">
            Estimated sensitivity to a 2× LCE price move:
          </p>

          {/* Leverage cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { ticker: "ALB",  label: "Albemarle",        upside: "+150–250%", color: "text-grn",   bg: "bg-grn-bg"  },
              { ticker: "SQM",  label: "SQM",              upside: "+100–180%", color: "text-li-d",  bg: "bg-[rgba(59,130,246,0.08)]" },
              { ticker: "PLS",  label: "Pilbara Minerals", upside: "+200–350%", color: "text-grn",   bg: "bg-grn-bg"  },
              { ticker: "LIT",  label: "LIT ETF",          upside: "+60–100%",  color: "text-muted", bg: "bg-[rgba(26,26,46,0.04)]" },
            ].map((item) => (
              <div key={item.ticker} className="bg-white border border-bdr rounded-xl p-4 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[.08em] text-muted mb-1">
                  {item.ticker}
                </p>
                <p className="text-[13px] font-semibold text-ink mb-2">{item.label}</p>
                <span className={`inline-block text-[13px] font-bold px-3 py-1 rounded-lg ${item.bg} ${item.color}`}>
                  {item.upside}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The risk side of the ledger
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Individual miners carry idiosyncratic risks that LIT diversifies away:
          </p>
          <ul className="pl-5 mb-8 space-y-2 list-disc">
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Albemarle:</strong> Balance sheet stress from
              2022-peak capex. Debt covenants could restrict operations or force equity issuance
              at a bad time.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">SQM:</strong> Chilean political risk (CODELCO JV
              transition from 2031, royalty rate changes).
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Pilbara Minerals:</strong> Fully exposed to SC6 spot
              price with no refining integration. If SC6 stays at $800/t longer than expected,
              cash flow is tight.
            </li>
            <li className="text-[15px] leading-[1.75] text-ink3">
              <strong className="text-ink">Mineral Resources:</strong> Highly leveraged balance
              sheet following 2022–2024 infrastructure investments. Near-term solvency concern if
              LCE stays at $11k.
            </li>
          </ul>

          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The practical recommendation
          </h3>

          {/* Recommendation callout */}
          <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.22)]">
            <span className="text-lg flex-shrink-0 mt-0.5">⚡</span>
            <div>
              <p className="text-[13px] font-bold text-ink mb-1">
                Suggested allocation structure
              </p>
              <p className="text-[13px] text-ink3 leading-[1.7] m-0">
                For most investors, the right structure is:{' '}
                <strong className="text-ink">
                  LIT as the core position (60–70% of lithium allocation) + one or two individual
                  miners as satellite positions (30–40%)
                </strong>
                . This gives you more upside than pure LIT while avoiding concentration risk. The
                individual miner choices should be based on: (1) balance sheet health to survive
                the current price environment, and (2) cost position to benefit maximally when
                prices recover. SQM and Pilbara are the most natural candidates — SQM for cost
                and scale, Pilbara for maximum SC6 price leverage.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default PolicyAndDownstream;
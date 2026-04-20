import React from 'react';

const BullBear = () => {
  return (
    <>
      <section className="py-12 bg-white" id="bull-bear">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Section label */}
          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
            Section 6
          </p>

          {/* H2 */}
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
            Bull Case vs Bear Case — Both Sides Fairly
          </h2>

          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            Most lithium content online presents one side or the other. Miners write bullish press
            releases. Short-sellers write bearish reports. Here are the genuine strongest versions
            of both arguments.
          </p>

          {/* H3 — Bull */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The strongest bull case
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            At $11,000/t, 30% of global supply is loss-making. That is not a small number. Every
            month these operations run at a loss, their operators burn cash, miss debt covenants,
            and face increasing pressure from shareholders to cut production. History shows that
            commodity markets do not stay indefinitely below the marginal cost of production — the
            self-correcting mechanism always works eventually. The only question is timing.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Meanwhile, demand is genuinely structural. Every major automaker has committed to EV
            platforms. Every government in Europe, the US, and China has mandates pushing
            electrification. Stationary storage (grid batteries for solar and wind balancing) is
            growing even faster than EVs. The total lithium demand picture in 2030 is two to three
            times current demand. Nothing in the supply pipeline can meet that growth if current
            prices persist.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            The bull case therefore does not require optimism about the near term. It requires only
            the belief that a market where 30% of supply is loss-making will eventually correct —
            and that when it corrects, the resulting price will be well above $11,000/t.
          </p>

          {/* H3 — Bear */}
          <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
            The strongest bear case
          </h3>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            The bear case is not that EVs are failing. It is that the supply response is more
            elastic than bulls assume, and the timing risk is enormous.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Chinese lithium producers are not passive price-takers. They have government support,
            cheap labour, and integrated supply chains that allow them to operate below AISC
            estimates for extended periods. The 30% "below cost" figure is based on CRU's AISC
            estimates, which may not reflect actual Chinese all-in costs after government energy
            subsidies and long-term land/labour contracts.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
            Additionally, DLE is a wildcard. Lithium in geothermal brines, oilfield brines, and
            continental brines represents a potentially enormous resource base that DLE can tap
            without the 7-year lead time of a new mine. If even 2–3 DLE projects commercialise at
            scale by 2028, the supply model breaks.
          </p>
          <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
            Finally, lithium intensity (kg LCE per kWh of battery capacity) is declining. Cell
            manufacturers are packing more energy into less material. By 2030, a battery that
            needed 0.85 kg LCE/kWh in 2015 may only need 0.55 kg — a 35% reduction. Some of the
            demand growth bulls model simply will not materialise because the batteries will use
            less lithium.
          </p>

          {/* Callout — warning */}
          <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-amb-bg border border-[rgba(217,119,6,0.25)]">
            <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
            <div>
              <p className="text-[13px] font-bold text-ink mb-1">
                The forecast graveyard
              </p>
              <p className="text-[13px] text-ink3 leading-[1.7] m-0">
                In 2022, multiple analysts forecast lithium remaining above $50,000/t through 2025
                due to structural shortages. In 2023, the same analysts revised to $25,000+. In
                2024, revised again to $15,000+. None of them predicted $11,000 in April 2026. This
                is not a reason to distrust the current consensus — but it is a reason to size
                positions conservatively and to monitor signals closely rather than betting on a
                specific price target and a specific timeline.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter banner */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 my-6">
        <div className="bg-ink rounded-[14px] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.12em] text-li mb-1">
              ⚡ Lithium Weekly
            </p>
            <p className="text-[14px] font-bold text-white mb-1">
              Wuxi stocks, refinery margins, and EV data — every Thursday
            </p>
            <p className="text-[12px] text-white/35">
              The 5 signals that actually move lithium prices. No noise.
            </p>
          </div>
            <a
            href="/newsletter/"
            className="flex-shrink-0 bg-li text-white text-[13px] font-bold px-[18px] py-2.5 rounded-[8px] hover:opacity-85 transition-opacity whitespace-nowrap"
          >
            Subscribe free →
          </a>
        </div>
      </div>
    </>
  );
};

export default BullBear;
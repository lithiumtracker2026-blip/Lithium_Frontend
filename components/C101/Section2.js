import React from 'react';

const HowPriceWorks = () => {
  return (
    <section className="py-12 bg-white" id="how-price-works">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-li-d mb-2">
          Section 2
        </p>

        {/* H2 */}
        <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-ink leading-tight mb-4">
          How the Lithium Price Works — Assessed, Not Exchange-Traded
        </h2>

        {/* Intro paras */}
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          The first thing to understand about lithium pricing — and the thing most retail investors
          do not realise — is that{' '}
          <strong className="text-ink">there is no central exchange for lithium</strong>. Unlike
          copper (LME, COMEX), gold (LBMA, CME), or oil (Brent futures), lithium prices are{' '}
          <em>assessed</em> by specialist price reporting agencies based on actual deals done in the
          market.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          The two primary assessors are{' '}
          <strong className="text-ink">SMM (Shanghai Metals Market)</strong> and{' '}
          <strong className="text-ink">Fastmarkets</strong>. Each publishes a daily or weekly
          assessed price based on deals reported by buyers and sellers. These assessments lag the
          market slightly, can differ from each other, and are not the result of a public auction.
          When Reuters or Bloomberg reports a lithium price, they are quoting one of these assessed
          prices.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          What this means for investors
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-4">
          Unlike copper or gold, you cannot buy a "lithium spot price" ETF. The LIT ETF (the most
          popular lithium ETF) holds equity in lithium-related companies — miners, refiners, battery
          manufacturers — not the underlying commodity. If lithium prices rise 50%, LIT will not
          necessarily rise 50%. The mining stocks inside LIT have operational leverage, currency
          exposure, and individual company factors that decouple returns from raw spot prices.
        </p>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Lithium futures do exist on the Guangzhou Futures Exchange (GFE) in China, but they are
          primarily used by Chinese industry participants for hedging, not by foreign retail
          investors. CME launched a lithium hydroxide futures contract but volumes remain thin.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          The spot price vs. contract price gap
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-8">
          Much of the physical lithium trade happens on long-term contracts (1–3 years) priced at a
          discount or premium to the prevailing spot assessment. When spot prices spike (as in 2022),
          contract buyers benefit. When spot collapses (as in 2023), spot buyers benefit.{' '}
          <strong className="text-ink">
            The spot price you see quoted is often not the price actually paid by most market
            participants
          </strong>{' '}
          — it represents the marginal transaction, and contract pricing tends to smooth the
          extremes.
        </p>

        {/* H3 */}
        <h3 className="text-[17px] font-bold text-ink mt-6 mb-3">
          Price in RMB vs USD
        </h3>
        <p className="text-[15px] leading-[1.82] text-ink3 mb-6">
          The dominant lithium market is in China, and SMM prices are quoted in RMB/t. Conversion
          to USD introduces exchange rate variation. Fastmarkets quotes SC6 in USD/t CIF China (the
          relevant dollar benchmark). When comparing prices between sources, confirm the currency
          and delivery basis (ex-works China vs CIF China adds ~$50–100/t in freight).
        </p>

        {/* Callout — warning */}
        <div className="flex gap-3.5 items-start rounded-[10px] p-4 bg-amb-bg border border-[rgba(217,119,6,0.25)]">
          <span className="text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div>
            <p className="text-[13px] font-bold text-ink mb-1">
              The assessed price problem
            </p>
            <p className="text-[13px] text-ink3 leading-[1.7] m-0">
              Because lithium prices are assessed rather than exchange-cleared, there is a market
              integrity issue. Sellers have an incentive to report high. Buyers have an incentive to
              report low. The price reporting agencies have methodology to address this, but the
              market is less transparent than exchange-traded commodities. This is one reason the
              CME/GFE futures launches matter — they will eventually provide a more reliable public
              benchmark.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowPriceWorks;
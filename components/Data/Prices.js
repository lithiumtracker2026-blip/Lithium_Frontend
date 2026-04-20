import React from 'react';

const Prices = () => {
  return (
    <>
      {/* ── Prices & Charts ── */}
      <section className="bg-white py-10" id="prices">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

          {/* Section header */}
          <p className="text-xs font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
            Prices &amp; charts
          </p>
          <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-3xl">
            Lithium Price Today — LCE, Spodumene &amp; Hydroxide
          </h2>
          <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
            Unlike copper (COMEX HG) or gold (LBMA fix), lithium has no exchange-traded benchmark.
            Prices below are daily assessed prices from Fastmarkets and SMM — not exchange quotes.
            LCE = lithium carbonate equivalent, the industry standard unit.
          </p>

          {/* Main 5fr / 2fr grid — chart left, summary panels right */}
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-4 items-start">

            {/* ── LCE main chart ── */}
            <div className="bg-white border border-bdr rounded-xl overflow-hidden">
              <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-li-d mb-1">
                    Fastmarkets · SMM Wuxi · Battery-grade ≥99.5% · Daily assessed
                  </p>
                  <p className="text-sm text-ink leading-snug">
                    Lithium Carbonate Equivalent (LCE) — China Spot Price
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    USD per metric tonne · Current:{' '}
                    <strong className="text-li-d">$11,000/t</strong> · ATH $80,000 (Nov 2022) ·
                    Trough $7,800 (Feb 2024)
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 items-end shrink-0">
                  <div className="flex gap-1">
                    <button className="text-xs px-2 py-1 rounded-md border border-bdr cursor-pointer bg-li text-white border-li">1Y</button>
                    <button className="text-xs px-2 py-1 rounded-md border border-bdr text-muted cursor-pointer bg-white">3Y</button>
                    <button className="text-xs px-2 py-1 rounded-md border border-bdr text-muted cursor-pointer bg-white">5Y</button>
                    <button className="text-xs px-2 py-1 rounded-md border border-bdr text-muted cursor-pointer bg-white">All</button>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-lg whitespace-nowrap bg-amb-bg text-amb">
                    Assessed price
                  </span>
                </div>
              </div>

              {/* SVG chart — no flex/gap wrapper, just padding */}
              <div className="w-full p-4">
                <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                  <line x1="50" y1="15" x2="660" y2="15" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="58.75" x2="660" y2="58.75" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="102.5" x2="660" y2="102.5" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="146.25" x2="660" y2="146.25" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="15" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="15" x2="50" y2="15" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="58.75" x2="50" y2="58.75" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="102.5" x2="50" y2="102.5" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="146.25" x2="50" y2="146.25" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="190" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="50.0" y1="190" x2="50.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="172.0" y1="190" x2="172.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="294.0" y1="190" x2="294.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="416.0" y1="190" x2="416.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="538.0" y1="190" x2="538.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="660.0" y1="190" x2="660.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><text x="50.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2021</text><text x="172.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2022</text><text x="294.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2023</text><text x="416.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2024</text><text x="538.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2025</text><text x="660.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2026</text><text x="44" y="18" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$80k</text><text x="44" y="61.75" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$60k</text><text x="44" y="105.5" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$40k</text><text x="44" y="149.25" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$20k</text><text x="44" y="193" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$0</text><path d="M 50,170.75 L 80.5,169.0 L 141.5,158.5 L 202.5,134.0 L 281.8,58.75 L 324.5,15.0 L 367.2,36.0 L 403.79999999999995,93.74999999999999 L 434.3,128.75 L 464.8,151.5 L 489.2,172.5 L 525.8,176.0 L 562.4,170.75 L 599.0,169.0 L 629.5,172.5 L 660.0,170.75 L 660.0,170.75 L 50,170.75 Z" fill="#3B82F6" opacity="0.1"></path><polyline points="50,170.75 80.5,169.0 141.5,158.5 202.5,134.0 281.8,58.75 324.5,15.0 367.2,36.0 403.79999999999995,93.74999999999999 434.3,128.75 464.8,151.5 489.2,172.5 525.8,176.0 562.4,170.75 599.0,169.0 629.5,172.5 660.0,170.75" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></polyline><line x1="324.5" y1="17" x2="324.5" y2="190" stroke="#EF5350" strokeWidth="1" strokeDasharray="3,2" opacity="0.6"></line><rect x="275.5" y="28" width="98.0" height="14" rx="3" fill="#EF5350"></rect><text x="324.5" y="38" textAnchor="middle" fontSize="8" fill="white" fontFamily="DM Sans,sans-serif" fontWeight="700">ATH $80k Nov '22</text><circle cx="660.0" cy="170.75" r="4" fill="#3B82F6" stroke="white" strokeWidth="1.5"></circle><rect x="630.25" y="147.75" width="59.5" height="14" rx="3" fill="#1E40AF"></rect><text x="660.0" y="157.75" textAnchor="middle" fontSize="8" fill="white" fontFamily="DM Sans,sans-serif" fontWeight="700">$11,000/t</text><circle cx="525.8" cy="176.0" r="3" fill="#F59E0B" stroke="white" strokeWidth="1.5"></circle><rect x="485.05" y="155.0" width="81.5" height="14" rx="3" fill="#F59E0B"></rect><text x="525.8" y="165.0" textAnchor="middle" fontSize="8" fill="white" fontFamily="DM Sans,sans-serif" fontWeight="700">Trough $7,800</text>
                </svg>
              </div>
            </div>

            {/* ── Right column: Price Summary + All Grades ── */}
            <div className="flex flex-col gap-4">
              <div className="bg-white border border-bdr rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-[.1em] text-li-d mb-3">Price summary</p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-bdr">
                    <span className="text-xs text-muted">Current (Apr 2026)</span>
                    <span className="text-li-d">$11,000/t</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-bdr">
                    <span className="text-xs text-muted">ATH (Nov 2022)</span>
                    <span className="text-ink">$80,000/t</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-bdr">
                    <span className="text-xs text-muted">Trough (Feb 2024)</span>
                    <span className="font-bold text-ink">$7,800/t</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-bdr">
                    <span className="text-xs text-muted">From ATH</span>
                    <span className="font-bold text-red">&minus;86%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted">From trough</span>
                    <span className="font-bold text-grn">+41%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-bdr rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-[.1em] text-li-d mb-2.5">
                  All lithium grades
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs pb-1.5 border-b border-bdr">
                    <span className="text-muted">Li Carbonate 99.5%</span>
                    <span className="text-li-d font-bold">$11,000/t</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1.5 border-b border-bdr">
                    <span className="text-muted">Li Hydroxide 56.5%</span>
                    <span className="text-grn font-bold">$13,500/t</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1.5 border-b border-bdr">
                    <span className="text-muted">Spodumene SC6 CIF</span>
                    <span className="text-[#8B5CF6] font-bold">$800/t</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1.5 border-b border-bdr">
                    <span className="text-muted">Spodumene SC5.5</span>
                    <span className="font-bold text-ink">$730/t</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted">Li Metal (batt-grade)</span>
                    <span className="font-bold text-ink">$65,000/t</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Price Spreads ── */}
      <section className="py-10" id="spread">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
            Price spreads
          </p>
          <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-2xl">
            Lithium Price Spreads &mdash; Carbonate vs Hydroxide vs SC6 Conversion
          </h2>
          <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
            Three spreads that signal different things: (1) LiOH premium = high-nickel NMC battery
            demand health; (2) SC6-to-LCE spread = refinery margin health; (3) China vs ex-China
            price differential = regional supply chain stress.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Carbonate vs Hydroxide */}
            <div className="bg-white border border-bdr rounded-xl overflow-hidden">
              <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-li-d mb-1">
                    SMM · Daily assessed · Battery-grade both
                  </p>
                  <p className="text-sm font-bold text-ink leading-snug">
                    Carbonate vs Hydroxide Spread
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    Hydroxide premium:{' '}
                    <strong className="text-grn">+$2,500/t</strong> · Historical range: $0 to
                    $15,000+
                  </p>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-grn-bg text-grn shrink-0">
                  LiOH premium
                </span>
              </div>
              <div className="w-full p-4">
                <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                  <line x1="50" y1="15" x2="660" y2="15" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="72.75" x2="660" y2="72.75" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="130.5" x2="660" y2="130.5" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="15" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="15" x2="50" y2="15" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="72.75" x2="50" y2="72.75" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="130.5" x2="50" y2="130.5" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="190" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="50.0" y1="190" x2="50.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="202.5" y1="190" x2="202.5" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="355.0" y1="190" x2="355.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="507.5" y1="190" x2="507.5" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="660.0" y1="190" x2="660.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><text x="50.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2022</text><text x="202.5" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2023</text><text x="355.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2024</text><text x="507.5" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2025</text><text x="660.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2026</text><text x="44" y="18" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$20k</text><text x="44" y="75.75" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$13k</text><text x="44" y="133.5" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$7k</text><text x="44" y="193" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">$0</text><path d="M 50,120.0 L 172.0,106.0 L 294.0,64.0 L 385.5,50.0 L 477.0,92.0 L 568.5,134.0 L 660.0,127.0 L 660.0,112.99999999999999 L 568.5,120.0 L 477.0,80.8 L 385.5,50.0 L 294.0,50.0 L 172.0,85.0 L 50,99.0 Z" fill="#10B981" opacity="0.15"></path><polyline points="50,120.0 172.0,106.0 294.0,64.0 385.5,50.0 477.0,92.0 568.5,134.0 660.0,127.0" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></polyline><polyline points="50,99.0 172.0,85.0 294.0,50.0 385.5,50.0 477.0,80.8 568.5,120.0 660.0,112.99999999999999" fill="none" stroke="#10B981" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></polyline><circle cx="660.0" cy="127.0" r="3.5" fill="#3B82F6" stroke="white" strokeWidth="1.5"></circle><circle cx="660.0" cy="112.99999999999999" r="3.5" fill="#10B981" stroke="white" strokeWidth="1.5"></circle><text x="655" y="35" textAnchor="end" fontSize="9" fill="#10B981" fontFamily="DM Sans,sans-serif" fontWeight="700">LiOH</text><text x="655" y="50" textAnchor="end" fontSize="9" fill="#3B82F6" fontFamily="DM Sans,sans-serif" fontWeight="700">LCO3</text><line x1="568.5" y1="120.0" x2="568.5" y2="134.0" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2,2"></line><text x="576.5" y="130.0" textAnchor="start" fontSize="8" fill="#10B981" fontFamily="DM Sans,sans-serif" fontWeight="700">+$2,500/t</text>
                </svg>
              </div>
            </div>

            {/* SC6 to LCE refinery margin */}
            <div className="bg-white border border-bdr rounded-xl overflow-hidden">
              <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-li-d mb-1">
                    Calculated · Fastmarkets SC6 &times; 8.9 vs SMM LCE · Daily
                  </p>
                  <p className="text-sm font-bold text-ink leading-snug">
                    SC6&rarr;LCE Refinery Margin
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    Current: <strong className="text-grn">+$3,880/t LCE</strong> &middot; LCE spot
                    minus (SC6 &times; 8.9) conversion value
                  </p>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-grn-bg text-grn shrink-0">
                  Positive margin
                </span>
              </div>
              <div className="w-full p-4">
                <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                  <line x1="50" y1="20" x2="660" y2="20" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="62.5" x2="660" y2="62.5" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="122.0" x2="660" y2="122.0" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"></line><line x1="50" y1="62.5" x2="660" y2="62.5" stroke="#EF5350" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6"></line><text x="46" y="65.5" textAnchor="end" fontSize="9" fill="#EF5350" fontFamily="DM Sans,sans-serif" fontWeight="700">$0</text><line x1="50" y1="20" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="20" x2="50" y2="20" stroke="#94A3B8" strokeWidth="1"></line><line x1="47" y1="190" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"></line><line x1="50.0" y1="190" x2="50.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="202.5" y1="190" x2="202.5" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="355.0" y1="190" x2="355.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="507.5" y1="190" x2="507.5" y2="193" stroke="#94A3B8" strokeWidth="1"></line><line x1="660.0" y1="190" x2="660.0" y2="193" stroke="#94A3B8" strokeWidth="1"></line><text x="50.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">2022</text><text x="202.5" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">2023</text><text x="355.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">2024</text><text x="355.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">2024</text><text x="507.5" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">2025</text><text x="660.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">2026</text><path d="M 50,62.5 L 50,90.55 L 141.5,98.2 L 233.0,113.5 L 294.0,128.8 L 355.0,159.4 L 355.0,62.5 Z" fill="#4CAF50" opacity="0.12"></path><path d="M 355.0,159.4 L 403.79999999999995,174.7 L 434.3,182.35 L 464.8,125.74000000000001 L 464.8,125.74000000000001 L 355.0,125.74000000000001 Z" fill="#EF5350" opacity="0.1"></path><polyline points="50,90.55 141.5,98.2 233.0,113.5 294.0,128.8 355.0,159.4 403.79999999999995,174.7 434.3,182.35 464.8,125.74000000000001 507.5,113.5 568.5,116.56 660.0,110.44" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></polyline><circle cx="660.0" cy="110.44" r="4" fill="#3B82F6" stroke="white" strokeWidth="1.5"></circle><rect x="615.25" y="87.44" width="59.5" height="14" rx="3" fill="#4CAF50"></rect><text x="645.0" y="97.44" textAnchor="middle" fontSize="8" fill="white" fontFamily="DM Sans,sans-serif" fontWeight="700">+$3,880/t</text><text x="655" y="32" textAnchor="end" fontSize="8" fill="#4CAF50" fontFamily="DM Sans,sans-serif" fontWeight="normal">Positive = refiners profitable</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Info callout */}
          <div className="bg-li-t border border-[rgba(59,130,246,0.2)] rounded-r p-4 mt-4 flex items-start gap-3">
            <span className="text-lg flex-shrink-0 mt-0.5">📉</span>
            <div>
              <p className="text-xs font-bold text-ink mb-0.5">
                How to read the SC6&rarr;LCE spread
              </p>
              <p className="text-xs text-ink3 leading-relaxed">
                At $800/t SC6 &times; 8.9 = $7,120/t implied LCE value. With LCE spot at $11,000/t,
                refiners earn $3,880/t processing margin &mdash; refineries are profitable and have
                no incentive to curtail. When the spread turns negative (SC6 price implies more LCE
                value than carbonate spot), smelters lose money and begin curtailing &mdash; the most
                direct upstream signal that supply is about to fall.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Prices;
import React from 'react';

const PRICE_DATA = [
  {
    label: "LCE China spot",
    value: "$11,000",
    unit: "/t",
    change: "▼ −86% from $80,000 ATH",
    changeType: "negative",
    source: "Fastmarkets / SMM · Daily assessed",
    valueColor: "text-blue-300"
  },
  {
    label: "Spodumene SC6",
    value: "$800",
    unit: "/t",
    change: "▼ −90% from $8,000 ATH",
    changeType: "negative",
    source: "CIF China · Fastmarkets · Weekly",
    valueColor: "text-violet-400"
  },
  {
    label: "Li Hydroxide (LiOH)",
    value: "$13,500",
    unit: "/t",
    change: "+$2,500 premium over carbonate",
    changeType: "neutral",
    source: "Battery-grade · NMC use · Daily",
    valueColor: "text-green-400"
  },
  {
    label: "SC6 → LCE spread",
    value: "+$3,880",
    unit: "/t",
    change: "Positive: refiners in margin",
    changeType: "neutral",
    source: "$11,000 − ($800×8.9) · Refinery signal",
    valueColor: "text-green-400"
  },
  {
    label: "Market balance",
    value: "Surplus",
    unit: "",
    change: "~40k t LCE/yr oversupply",
    changeType: "warning",
    source: "IEA / BloombergNEF · 2026 forecast",
    valueColor: "text-amber-500"
  }
];

const C101Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A2E] py-12 md:py-16 ">
      {/* Radial Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(59,130,246,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_100%_20%,rgba(30,64,175,0.06),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 ">
        {/* Live Indicator Label */}
        <div className="mb-3 flex items-center  gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className='text-blue-300'>
            Lithium market data — <span className="text-blue-300">Updated today <span className='relative inline-flex h-2 w-2 rounded-full bg-green-900 '></span></span>
            
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="mb-3  text-3xl font-bold leading-tight text-white md:text-5xl">
          Live Lithium Price —<br />
          <span className=" text-accent">LCE, Spodumene & Hydroxide</span>
        </h1>
        
        <p className="mb-8 max-w-2xl text-[13px] leading-relaxed text-white/45">
          Assessed daily prices for LCE, SC6 spodumene, and battery-grade hydroxide. Producer stock quotes. 
          Supply pipeline tracker from our 1,108-asset database. No exchange benchmark exists — 
          all lithium prices are assessed by price agencies.
        </p>

        {/* Price Grid */}
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 md:grid-cols-5">
          {PRICE_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`border-white/5 p-4 transition-colors hover:bg-blue-500/10 
                ${index !== PRICE_DATA.length - 1 ? 'border-r' : ''} 
                ${index >= 2 ? 'max-md:border-t' : ''}
              `}
            >
              <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-white/25">
                {item.label}
              </p>
              
              <div className="mb-1 flex items-baseline gap-1">
                <span className={`text-lg font-medium ${item.valueColor}`}>
                  {item.value}
                </span>
                <span className="text-[12px] text-white/30">{item.unit}</span>
              </div>

              <p className={`mb-1 text-[11px] font-medium 
                ${item.changeType === 'negative' ? 'text-red-400' : ''}
                ${item.changeType === 'neutral' ? 'text-white/40' : 'text-red'}
                ${item.changeType === 'warning' ? 'text-amber-500/80' : ''}
              `}>
                {item.change}
              </p>

              <p className="text-[10px]  text-gray-200">
                {item.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default C101Hero;
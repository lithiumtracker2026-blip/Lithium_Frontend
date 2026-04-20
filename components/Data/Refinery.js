import React from 'react';

// This is a small, reusable component for the animated "live" dot.
// Tailwind doesn't support '::after' pseudo-elements out of the box for custom animations,
// so creating a dedicated component is the cleanest approach.
const LiveDot = () => (
  <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full align-super ml-1 opacity-70"></span>
);


const RefineryCapacity = () => {
  return (
    <section id="refinery" className="py-10 ">
      <div className="max-w-[1600px] mx-auto px-6 ">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
          Refinery capacity
        </p>
        <h2 className=" text-2xl font-bold text-ink leading-snug mb-2 ">
          Lithium Refinery Capacity &amp; Utilisation — The Processing Bottleneck
        </h2>
        <p className="text-lg text-muted max-w-full leading-relaxed mb-6">
          Mine production is only half the story. China controls approximately <strong className="font-bold text-ink">65–75% of global lithium chemical refining capacity</strong> — the step that converts spodumene concentrate and brine into battery-grade carbonate or hydroxide. Monitoring refinery utilisation rates is one of the most reliable leading indicators in the market: falling utilisation signals either weak downstream demand or tight raw material supply; rising utilisation warns of approaching price pressure before it appears in spot assessments.
        </p>

        {/* Stat Band */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bdr rounded-lg overflow-hidden my-4">
          <div className=" bg-ink p-4 text-center">
            <p className=" text-xl font-medium text-red leading-none mb-1">~300k t</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Peak capacity (2023)</p>
            <p className="text-xs text-ink3 mt-0.5">LCE/yr · China lepidolite</p>
          </div>

          <div className="bg-ink p-4 text-center">
            <p className=" text-xl font-medium text-amber-600 leading-none mb-1">~$10k–$11k</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Avg cash cost</p>
            <p className="text-xs text-ink3 mt-0.5">LCE/t · Most operations</p>
          </div>

          <div className="bg-ink p-4 text-center">
            <p className=" text-xl font-medium text-ink leading-none mb-1">
              —<LiveDot />
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Est. capacity below cost</p>
            <p className="text-xs text-ink3 mt-0.5">At current LCE spot · SMM</p>
          </div>

          <div className="bg-ink p-4 text-center">
            <p className=" text-xl font-medium text-li leading-none mb-1">$7,000</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Mass curtailment floor</p>
            <p className="text-xs text-ink3 mt-0.5">LCE/t at which &gt;70% cuts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefineryCapacity;

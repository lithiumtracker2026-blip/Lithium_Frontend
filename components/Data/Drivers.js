"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const signals = [
  {
    color: "bg-green-500",
    badge: "bg-grn-bg text-grn",
    label: "🚗 China EV sales",
    value: "+20% YoY (Q1 2026)",
    desc: "BYD + CATL dominant. Export growth to EU. Stimulus programmes active. Bullish for demand.",
  },
  {
    color: "bg-amber-500",
    badge: "bg-amb-bg text-amb",
    label: "🏭 China lepidolite supply",
    value: "Curtailing (~30%)",
    desc: "~30% of capacity below cash cost at $11k/t LCE. Curtailments slow but happening. Watch for acceleration.",
  },
  {
    color: "bg-green-500",
    badge: "bg-grn-bg text-grn",
    label: "📦 Battery supply chain inventory",
    value: "Destocking complete",
    desc: "Battery makers actively purchasing again. Inventory rebuild cycle beginning. Bullish signal for restocking.",
  },
  {
    color: "bg-amber-500",
    badge: "bg-amb-bg text-amb",
    label: "⚡ DLE commercialisation",
    value: "Delays persist",
    desc: "Rincon (RIO) at 3,000 t/yr Phase 1. Commercial targets pushed to 2027+. Less near-term supply than expected.",
  },
];

const tableData = [
  {
    signal: "🚗 China EV monthly sales",
    direction: "Bullish",
    freq: "Monthly",
    source: "CAAM / CPCA (China)",
    color: "text-grn",
  },
  {
    signal: "🏭 China lepidolite output",
    direction: "Curtailing",
    freq: "Monthly",
    source: "SMM industry survey",
    color: "text-amb",
  },
  {
    signal: "🧪 SC6→LCE refinery margin",
    direction: "Positive",
    freq: "Daily (calculated)",
    source: "SMM LCE + Fastmarkets SC6",
    color: "text-grn",
  },
  {
    signal: "📦 Battery maker inventory",
    direction: "Restocking",
    freq: "Monthly",
    source: "Fastmarkets / trader surveys",
    color: "text-grn",
  },
  {
    signal: "📈 Wuxi warehouse stocks (8-wk)",
    direction: "Declining",
    freq: "Weekly",
    source: "SMM Wuxi survey",
    color: "text-grn",
  },
  {
    signal: "⚡ DLE project milestones",
    direction: "Delayed",
    freq: "Quarterly",
    source: "Company filings (aggregated)",
    color: "text-amb",
  },
];

const marginTrend = [
  { day: "Day 1", margin: 2500 },
  { day: "Day 10", margin: 3200 },
  { day: "Day 20", margin: 3880 },
  { day: "Day 30", margin: 3600 },
];

export default function Drivers() {
  return (
    <section id="drivers" className="bg-white py-10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <p className="text-lg font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
          Price drivers
        </p>
        <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-2xl">
          Lithium Price Driver Dashboard
        </h2>
        <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
          Four variables explain ~90% of near-term lithium price moves. The
          signal dashboard below shows current readings and direction. Green =
          bullish; amber = neutral; red = bearish.
        </p>

        <div className="flex flex-col gap-4">

          {/* Signal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {signals.map((sig, idx) => (
              <div
                key={idx}
                className="bg-white border border-bdr rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${sig.color}`} />
                    <p className="text-xs font-bold text-ink">{sig.label}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-lg whitespace-nowrap shrink-0 ${sig.badge}`}>
                    {sig.value}
                  </span>
                </div>
                <p className="text-xs text-ink3 leading-relaxed">{sig.desc}</p>
              </div>
            ))}
          </div>

          {/* Signal table */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="p-4 border-b border-bdr">
              <p className="text-sm font-bold text-ink">Signal Tracker — Current Readings</p>
              <p className="text-xs text-muted mt-0.5">
                Live direction, update frequency, and primary data source for each indicator
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[rgba(26,26,46,0.02)]">
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">
                      Signal
                    </th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-li-d p-2.5 border-b-2 border-bdr">
                      Direction
                    </th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">
                      Update frequency
                    </th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">
                      Primary source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[rgba(26,26,46,0.02)]">
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink hover:text-accent">
                        {row.signal}
                      </td>
                      <td className={`p-2.5 border-b border-[rgba(26,26,46,0.05)] font-bold ${row.color}`}>
                        {row.direction}
                      </td>
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        {row.freq}
                      </td>
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        {row.source}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Margin chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  Calculated · SMM LCE + Fastmarkets SC6 · Daily
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  SC6→LCE Refinery Margin — Live Indicator
                </p>
                <p className="text-xs text-muted mt-0.5">
                  LCE spot − (SC6 × 8.9) · Positive = refineries profitable · Negative = curtailment pressure
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-grn-bg text-grn shrink-0">
                +$3,880/t
              </span>
            </div>
            <div className="w-full p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marginTrend}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="margin"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
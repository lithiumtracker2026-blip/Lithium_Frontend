// components/Inventory.tsx
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

const wuxiStocks = [
  { week: "Jan'23", tonnes: 95 },
  { week: "Apr'23", tonnes: 85 },
  { week: "Jul'23", tonnes: 70 },
  { week: "Oct'23", tonnes: 60 },
  { week: "Jan'24", tonnes: 50 },
  { week: "Apr'24", tonnes: 40 },
  { week: "Jul'24", tonnes: 30 },
  { week: "Oct'24", tonnes: 25 },
];

const batteryInventory = [
  { month: "Jan'23", days: 80 },
  { month: "May'23", days: 65 },
  { month: "Sep'23", days: 50 },
  { month: "Jan'24", days: 40 },
  { month: "May'24", days: 30 },
  { month: "Sep'24", days: 25 },
];

export default function Inventory() {
  return (
    <section id="inventory" className="py-8">
      <div className="max-w-[1600px] mx-auto px-4">
        <p className="text-sm text-gray-500">Inventory</p>
        <h2 className="text-2xl font-bold mb-2">
          China Lithium Inventory — Wuxi Warehouse Stocks & Battery Maker Days on Hand
        </h2>
        <p className="text-gray-600 mb-6">
          Unlike copper (with daily LME/COMEX warehouse data), lithium has no
          centralised exchange disclosure. SMM’s weekly surveys of Wuxi warehouse
          stocks and battery manufacturer inventory are the closest equivalents —
          and among the most watched near-term price signals.
        </p>

        {/* Stat Band */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border rounded-lg p-4 shadow-sm text-center">
            <p className="text-xl font-bold">~115k t</p>
            <p className="text-sm font-medium">2024 peak</p>
            <p className="text-xs text-gray-500">Reached Aug 2024 · Static ref.</p>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm text-center">
            <p className="text-indigo-600 text-xl font-bold">Thursdays</p>
            <p className="text-sm font-medium">Update cadence</p>
            <p className="text-xs text-gray-500">SMM weekly survey</p>
          </div>
        </div>

        {/* Wuxi Stocks Chart */}
        <h3 className="text-lg font-semibold mb-2">
          Wuxi Lithium Carbonate Warehouse Stocks — Weekly
        </h3>
        <p className="text-gray-600 mb-4">
          Tonnes Li₂CO₃ in tracked warehouses. Rising = bearish (supply building);
          falling = bullish (demand drawing down).
        </p>
        <div className="h-72 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={wuxiStocks}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="tonnes"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Battery Inventory Chart */}
        <h3 className="text-lg font-semibold mb-2">
          Chinese Battery Manufacturer Lithium Inventory — Days on Hand
        </h3>
        <p className="text-gray-600 mb-4">
          SMM survey: CATL, BYD, CALB, Gotion + mid-tier producers. Days of forward
          demand coverage held in stock.
        </p>
        <div className="h-72 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={batteryInventory}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="days"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Callout */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-md">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-2">📦</span>
            <p className="font-semibold">How to read inventory for price direction</p>
          </div>
          <p className="text-gray-700 text-sm">
            The 2022–2024 crash was amplified by multi-stage destocking: battery
            makers first drew down expensive inventories rather than buy at spot;
            midstream processors followed; then mine-level concentrate stacks built
            up. The reversal — Wuxi stocks declining for 8+ weeks, battery maker
            days-on-hand falling below 30 days — is the most reliable leading
            indicator of a price recovery. The current 8-week declining trend in
            Wuxi stocks is the first such signal since the February 2024 price
            trough.
          </p>
        </div>
      </div>
    </section>
  );
}

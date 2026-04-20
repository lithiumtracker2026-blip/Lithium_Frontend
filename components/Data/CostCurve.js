// components/CostCurve.tsx
"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  shape
} from "recharts";

const costCurveData = [
  { source: "Chile brine", aisc: 6000, color: "#10B981" },
  { source: "Aust HR (low)", aisc: 7000, color: "#8B5CF6" },
  { source: "Brazil HR", aisc: 9000, color: "#93C5FD" },
  { source: "Arg brine", aisc: 10000, color: "#3B82F6" },
  { source: "Aust HR (other)", aisc: 11000, color: "#F59E0B" },
  { source: "China HR", aisc: 12000, color: "#F97316" },
  { source: "China lepidolite", aisc: 14000, color: "#EF5350" },
];

const costTrendData = [
  { year: 2018, brine: 16000, hardrock: 15000, lepidolite: 14000 },
  { year: 2019, brine: 15800, hardrock: 14800, lepidolite: 13100 },
  { year: 2020, brine: 15500, hardrock: 15100, lepidolite: 13500 },
  { year: 2021, brine: 15000, hardrock: 14500, lepidolite: 12400 },
  { year: 2022, brine: 14500, hardrock: 13800, lepidolite: 9530 },
  { year: 2023, brine: 14200, hardrock: 13100, lepidolite: 8100 },
  { year: 2024, brine: 13900, hardrock: 12400, lepidolite: 6700 },
  { year: 2025, brine: 13500, hardrock: 12100, lepidolite: 9500 },
  { year: 2026, brine: 13100, hardrock: 11700, lepidolite: 10200 },
];

export default function CostCurve() {
  return (
    <section id="costcurve" className="py-8">
      <div className="max-w-[1600px] mx-auto px-4">
        <p className="text-sm text-gray-500">Cost curve</p>
        <h2 className="text-2xl font-bold mb-2">
          Lithium Cost Curve — Production Costs by Source Type & Project
        </h2>
        <p className="text-gray-600 mb-6">
          At $11,000/t LCE, the market sits just above the lowest-cost Chilean
          brine operations and below the cash cost for the most expensive Chinese
          lepidolite. Some capacity remains profitable while others are loss-making.
        </p>

        {/* Cost Curve Bar Chart */}
        <h3 className="text-lg font-semibold mb-2">
          Global Lithium Supply Cost Curve — AISC by Source Type (2025E)
        </h3>
        <p className="text-gray-600 mb-4">
          All-in sustaining cost per tonne LCE · Ranked low-to-high · Dashed line =
          current LCE spot ($11,000/t).
        </p>
        <div className="h-72 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={costCurveData}>
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="aisc" name="AISC" fill="#3B82F6">
                {costCurveData.map((entry, index) => (
                  <shape key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Curve Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Source type</th>
                <th className="border px-3 py-2">Cash cost range</th>
                <th className="border px-3 py-2">AISC range</th>
                <th className="border px-3 py-2">% of supply</th>
                <th className="border px-3 py-2">vs $11,000/t spot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">🌊 Chilean brine</td>
                <td className="border px-3 py-2 text-green-600">$3k–$5k</td>
                <td className="border px-3 py-2">$5k–$8k</td>
                <td className="border px-3 py-2">~20%</td>
                <td className="border px-3 py-2 text-green-600">✓ Profitable</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">🌊 Argentine brine</td>
                <td className="border px-3 py-2">$4k–$7k</td>
                <td className="border px-3 py-2">$7k–$11k</td>
                <td className="border px-3 py-2">~6%</td>
                <td className="border px-3 py-2 text-amber-600">⚠ Marginal</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">🪨 Australia HR (low)</td>
                <td className="border px-3 py-2">$3.5k–$5k</td>
                <td className="border px-3 py-2">$5.5k–$8k</td>
                <td className="border px-3 py-2">~18%</td>
                <td className="border px-3 py-2 text-green-600">✓ Profitable</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">🪨 Australia HR (other)</td>
                <td className="border px-3 py-2">$5k–$8k</td>
                <td className="border px-3 py-2">$8k–$13k</td>
                <td className="border px-3 py-2">~20%</td>
                <td className="border px-3 py-2 text-amber-600">⚠ Marginal</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">🪨 Brazil HR</td>
                <td className="border px-3 py-2">$4.5k–$7k</td>
                <td className="border px-3 py-2">$7k–$10k</td>
                <td className="border px-3 py-2">~5%</td>
                <td className="border px-3 py-2 text-amber-600">⚠ Marginal</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">🪨 China lepidolite</td>
                <td className="border px-3 py-2 text-red-600">$8k–$13k</td>
                <td className="border px-3 py-2">$10k–$16k</td>
                <td className="border px-3 py-2">~23%</td>
                <td className="border px-3 py-2 text-red-600">✗ Loss-making</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">🪨 China other HR</td>
                <td className="border px-3 py-2 text-red-600">$7k–$10k</td>
                <td className="border px-3 py-2">$9k–$13k</td>
                <td className="border px-3 py-2">~8%</td>
                <td className="border px-3 py-2 text-red-600">✗ Marginal</td>
              </tr>
            </tbody>
          </table>
        </div>
        
                {/* Cost Trend Line Chart */}
        <h3 className="text-lg font-semibold mb-2">
          Lithium Production Cost Trend by Source Type (2018–2026E)
        </h3>
        <p className="text-gray-600 mb-4">
          How costs have evolved: grade decline, scale effects, and inflation
          running through the sector.
        </p>
        <div className="h-72 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={costTrendData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="brine"
                stroke="#10B981"
                strokeWidth={2}
                name="Brine"
              />
              <Line
                type="monotone"
                dataKey="hardrock"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Hard rock"
              />
              <Line
                type="monotone"
                dataKey="lepidolite"
                stroke="#EF5350"
                strokeWidth={2}
                strokeDasharray="4 3"
                name="Lepidolite"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

        
    
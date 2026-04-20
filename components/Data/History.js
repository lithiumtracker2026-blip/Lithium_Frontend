import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const annualData = [
  { year: 2015, lce: 6800, sc6: 400, driver: "Tesla Model S scaling" },
  { year: 2016, lce: 9100, sc6: 550, driver: "First Li spike" },
  { year: 2017, lce: 14500, sc6: 900, driver: "China NEV policy" },
  { year: 2018, lce: 16000, sc6: 950, driver: "Pre-cycle peak" },
  { year: 2019, lce: 9200, sc6: 560, driver: "Correction" },
  { year: 2020, lce: 7500, sc6: 450, driver: "COVID lows" },
  { year: 2021, lce: 17000, sc6: 1200, driver: "EV surge" },
  { year: 2022, lce: 51000, sc6: 5200, driver: "Peak mania" },
  { year: 2023, lce: 24000, sc6: 2400, driver: "Crash" },
  { year: 2024, lce: 11500, sc6: 920, driver: "Stabilisation" },
  { year: 2025, lce: 12000, sc6: 850, driver: "Recovery" },
  { year: 2026, lce: 11000, sc6: 800, driver: "Consolidation" },
];

const monthlyLCE = [
  { month: "Jan'21", price: 17000 },
  { month: "Nov'22", price: 80000 },
  { month: "Feb'24", price: 7800 },
  { month: "Apr'26", price: 11000 },
];

const marginData = [
  { month: "Jan'22", margin: 3880 },
  { month: "Jul'22", margin: 2000 },
  { month: "Jan'23", margin: -500 },
  { month: "Jul'23", margin: -1200 },
  { month: "Jan'24", margin: 800 },
  { month: "Jul'24", margin: 2000 },
];

export default function History() {
  return (
    <section id="history" className="bg-white py-10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <p className="text-lg font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
          Price history
        </p>
        <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-2xl">
          Lithium Price History — LCE &amp; Spodumene (2015–2026)
        </h2>
        <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
          Annual and monthly LCE and SC6 price history from 2015 to present.
          Sources: SMM, Fastmarkets. The $80,000/t peak (Nov 2022) and $7,800/t
          trough (Feb 2024) are fixed historical reference points.
        </p>

        <div className="flex flex-col gap-4">

          {/* Annual Price Table */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="p-4 border-b border-bdr">
              <p className="text-sm font-bold text-ink">
                Annual Average Prices — LCE &amp; SC6 Spodumene (2015–2026)
              </p>
              <p className="text-xs text-muted mt-0.5">
                USD/t · SMM, Fastmarkets · Annual average assessed prices
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[rgba(26,26,46,0.02)]">
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">
                      Year
                    </th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-li-d p-2.5 border-b-2 border-bdr">
                      LCE avg
                    </th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">
                      SC6 spodumene
                    </th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">
                      Key driver
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {annualData.map((row) => (
                    <tr key={row.year} className="hover:bg-[rgba(26,26,46,0.02)]">
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">
                        {row.year}
                      </td>
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        ${row.lce.toLocaleString()}/t
                      </td>
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        ${row.sc6.toLocaleString()}/t
                      </td>
                      <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">
                        {row.driver}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Annual Bar Chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  SMM · Fastmarkets · Annual average
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  LCE &amp; SC6 Annual Average Price (2015–2026)
                </p>
                <p className="text-xs text-muted mt-0.5">
                  USD/t · LCE left axis, SC6 right axis
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-amb-bg text-amb shrink-0">
                Annual
              </span>
            </div>
            <div className="w-full p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={annualData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="lce" fill="#EF5350" name="LCE avg" />
                  <Bar dataKey="sc6" fill="#4CAF50" name="SC6 spodumene" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly LCE Line Chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  SMM · China spot · Monthly assessed
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  LCE Monthly Price — China Spot (2021–2026)
                </p>
                <p className="text-xs text-muted mt-0.5">
                  ATH $80,000/t Nov 2022 · Trough $7,800/t Feb 2024 · Current $11,000/t
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-li-t text-li-d shrink-0">
                Monthly
              </span>
            </div>
            <div className="w-full p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyLCE}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* SC6→LCE Margin Chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  Calculated · Fastmarkets SC6 × 8.9 vs SMM LCE · Monthly
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  SC6→LCE Implied Refinery Margin — Monthly
                </p>
                <p className="text-xs text-muted mt-0.5">
                  (LCE spot) − (SC6 × 8.9) = implied margin · Negative = refineries converting spodumene are loss-making
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-grn-bg text-grn shrink-0">
                Margin
              </span>
            </div>
            <div className="w-full p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marginData}>
                  <XAxis dataKey="month" />
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
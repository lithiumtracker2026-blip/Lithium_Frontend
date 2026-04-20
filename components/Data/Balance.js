import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const supplyDemandData = [
  { year: 2022, supply: 720, demand: 700 },
  { year: 2023, supply: 1050, demand: 960 },
  { year: 2024, supply: 1280, demand: 1200 },
  { year: 2025, supply: 1380, demand: 1360 },
  { year: 2026, supply: 1440, demand: 1480 },
  { year: 2027, supply: 1520, demand: 1700 },
  { year: 2030, supply: 2000, demand: 2800 },
];

const cumulativeData = [
  { year: 2020, balance: -200 },
  { year: 2022, balance: -50 },
  { year: 2024, balance: 0 },
  { year: 2026, balance: 40 },
  { year: 2028, balance: 500 },
  { year: 2030, balance: 800 },
];

export default function Balance() {
  return (
    <section id="balance" className="bg-white py-10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <p className="text-lg font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
          Supply &amp; demand balance
        </p>
        <h2 className=" font-bold text-ink leading-tight mb-1.5 text-2xl">
          Lithium Supply vs Demand — Glut Now, Deficit Later
        </h2>
        <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
          Annual supply and demand balance in kt LCE. Surplus today; projected
          deficit by 2027–2028.
        </p>

        <div className="flex flex-col gap-4">

          {/* Supply vs Demand Bar Chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  Annual · kt LCE
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  Global Lithium Supply vs Demand (2022–2030)
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Surplus narrows through 2025; deficit projected from 2026 onward
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-amb-bg text-amb shrink-0">
                kt LCE
              </span>
            </div>
            <div className="w-full p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={supplyDemandData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="supply" fill="#EF5350" name="Supply" />
                  <Bar dataKey="demand" fill="#4CAF50" name="Demand" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Balance Table */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="p-4 border-b border-bdr">
              <p className="text-sm font-bold text-ink">Annual Supply / Demand Balance</p>
              <p className="text-xs text-muted mt-0.5">kt LCE · Surplus = supply exceeds demand · Deficit = demand exceeds supply</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[rgba(26,26,46,0.02)]">
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Year</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-li-d p-2.5 border-b-2 border-bdr">Supply (kt)</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Demand (kt)</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyDemandData.map((row) => {
                    const balance = row.supply - row.demand;
                    const isDeficit = balance < 0;
                    return (
                      <tr key={row.year} className="hover:bg-[rgba(26,26,46,0.02)]">
                        <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">{row.year}</td>
                        <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{row.supply}</td>
                        <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{row.demand}</td>
                        <td className={`p-2.5 border-b border-[rgba(26,26,46,0.05)] font-bold ${isDeficit ? "text-red" : "text-grn"}`}>
                          {isDeficit
                            ? `-${Math.abs(balance)} deficit`
                            : `+${balance} surplus`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cumulative Balance Line Chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  Cumulative · kt LCE
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  Cumulative Lithium Balance (2020–2030)
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Crosses into structural surplus from 2026; pace of deficit determines price recovery timing
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-li-t text-li-d shrink-0">
                Cumulative
              </span>
            </div>
            <div className="w-full p-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cumulativeData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    stroke="#3B82F6"
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
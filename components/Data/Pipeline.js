import React from 'react';

const Pipeline = () => {
  return (
    <section id="pipeline" className="bg-white py-10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* ── Project Pipeline header ── */}
        <p className="text-lg font-bold uppercase tracking-[.14em] text-li-d mb-1.5">
          Project pipeline
        </p>
        <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-2xl">
          Lithium Project Pipeline &mdash; Supply Coming Online Through 2030
        </h2>
        <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
          From our proprietary database of 1,108 lithium assets across 115 companies and 20
          countries. The pipeline through 2030 determines whether the projected supply deficit
          materialises on schedule or is deferred. Key variables: construction timelines at
          projects already under FID, and how many pre-FID projects reach a positive investment
          decision at current prices.
        </p>

        {/* Stats band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-white border border-bdr rounded-xl p-4 text-center">
            <p className="font-mono text-xl font-medium text-li-d">1,108</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Total assets</p>
            <p className="text-xs text-ink3 mt-0.5">Mines, projects, facilities</p>
          </div>
          <div className="bg-white border border-bdr rounded-xl p-4 text-center">
            <p className="font-mono text-xl font-medium text-grn">26</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Operating</p>
            <p className="text-xs text-ink3 mt-0.5">Mines &amp; plants producing</p>
          </div>
          <div className="bg-white border border-bdr rounded-xl p-4 text-center">
            <p className="font-mono text-xl font-medium text-amb">7</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Construction</p>
            <p className="text-xs text-ink3 mt-0.5">FID taken, actively building</p>
          </div>
          <div className="bg-white border border-bdr rounded-xl p-4 text-center">
            <p className="font-mono text-xl font-medium text-ink">56</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Development</p>
            <p className="text-xs text-ink3 mt-0.5">Pre-FID, feasibility stage</p>
          </div>
        </div>

        {/* Chart: Pipeline by Status */}
        <div className="bg-white border border-bdr rounded-xl overflow-hidden mb-4">
          <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold text-ink leading-snug">
                Lithium Project Pipeline &mdash; Capacity by Status &amp; Source Type
              </p>
              <p className="text-xs text-muted mt-1">
                kt LCE/yr nameplate &middot; Operating / Construction / Development &middot; Colour
                by source type (brine / hard rock / DLE)
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="text-xs font-semibold px-2 py-1 rounded-md bg-li/10 text-li-d border border-bdr">
                By status
              </button>
              <button className="text-xs font-semibold px-2 py-1 rounded-md text-muted border border-bdr">
                By region
              </button>
            </div>
          </div>
          <div className="w-full p-4">
            <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
              <rect x="70.0" y="115.3" width="56.0" height="69.7" rx="2" fill="#10B981" opacity="0.85"/><rect x="136.0" y="90.3" width="56.0" height="94.7" rx="2" fill="#8B5CF6" opacity="0.85"/><rect x="202.0" y="184.3" width="56.0" height="0.7" rx="2" fill="#4CAF50" opacity="0.85"/><text x="136.0" y="198" textAnchor="middle" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Operating</text><rect x="270.0" y="170.5" width="56.0" height="14.5" rx="2" fill="#10B981" opacity="0.85"/><rect x="336.0" y="175.8" width="56.0" height="9.2" rx="2" fill="#8B5CF6" opacity="0.85"/><rect x="402.0" y="179.7" width="56.0" height="5.3" rx="2" fill="#4CAF50" opacity="0.85"/><text x="336.0" y="198" textAnchor="middle" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Construction</text><rect x="470.0" y="125.8" width="56.0" height="59.2" rx="2" fill="#10B981" opacity="0.85"/><rect x="536.0" y="119.3" width="56.0" height="65.7" rx="2" fill="#8B5CF6" opacity="0.85"/><rect x="602.0" y="174.5" width="56.0" height="10.5" rx="2" fill="#4CAF50" opacity="0.85"/><text x="536.0" y="198" textAnchor="middle" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Development</text><line x1="50" y1="20" x2="50" y2="185" stroke="#94A3B8" strokeWidth="1"/><line x1="50" y1="185" x2="650" y2="185" stroke="#94A3B8" strokeWidth="1"/><line x1="47" y1="185" x2="650" y2="185" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/><text x="45" y="188" textAnchor="end" fontSize="8" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">0</text><line x1="47" y1="130.55" x2="650" y2="130.55" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/><text x="45" y="133.55" textAnchor="end" fontSize="8" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">500kt</text><line x1="47" y1="76.1" x2="650" y2="76.1" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/><text x="45" y="79.1" textAnchor="end" fontSize="8" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">1,000kt</text><line x1="47" y1="20.0" x2="650" y2="20.0" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/><text x="45" y="23.0" textAnchor="end" fontSize="8" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">1,500kt</text><rect x="70" y="22" width="8" height="8" rx="1" fill="#10B981" opacity="0.85"/><text x="81" y="29" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Brine</text><rect x="150" y="22" width="8" height="8" rx="1" fill="#8B5CF6" opacity="0.85"/><text x="161" y="29" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Hard rock</text><rect x="230" y="22" width="8" height="8" rx="1" fill="#4CAF50" opacity="0.85"/><text x="241" y="29" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">DLE</text><text x="340" y="218" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="normal">kt LCE nameplate capacity</text>
            </svg>
          </div>
        </div>

        {/* Pipeline table */}
        <div className="bg-white border border-bdr rounded-xl overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Region</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-li-d p-2.5 border-b-2 border-bdr">Source type</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Operating (kt LCE/yr)</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Construction (kt LCE/yr)</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Development (kt LCE/yr)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { region: 'Australia', type: 'Hard rock (spodumene)', op: '~680', con: '~60', dev: '~200' },
                  { region: 'Chile', type: 'Brine (Atacama)', op: '~250', con: '~50', dev: '~100' },
                  { region: 'Argentina', type: 'Brine (salares)', op: '~120', con: '~60 (incl. DLE pilot)', dev: '~350' },
                  { region: 'China', type: 'Lepidolite + hard rock', op: '~230', con: '~20', dev: '~100' },
                  { region: 'USA', type: 'Clay / brine (DLE)', op: '<5', con: '~40', dev: '~80' },
                  { region: 'Canada', type: 'Hard rock', op: '~10', con: '~30', dev: '~120' },
                  { region: 'Brazil', type: 'Hard rock', op: '~60', con: '~20', dev: '~80' },
                  { region: 'Europe', type: 'Geothermal brine (DLE)', op: '<5', con: '~40', dev: '~60' },
                  { region: 'Africa (Zimbabwe, other)', type: 'Hard rock', op: '~40', con: '~10', dev: '~60' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[rgba(26,26,46,0.02)]">
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">{row.region}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{row.type}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{row.op}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{row.con}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{row.dev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted px-3 py-2">
            goldandsilvertracker.com Lithium Asset Database · 1,108 assets · April 2026 · Capacity figures in kt LCE/yr approximate; nameplate at design throughput.
          </p>
        </div>

        {/* ── EV & Battery Demand header ── */}
        <p className="text-lg font-bold uppercase tracking-[.14em] text-li-d mb-1.5 mt-8">
          EV &amp; battery demand
        </p>
        <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-2xl">
          EV Demand &amp; Lithium Consumption Data
        </h2>
        <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
          Global EV sales and implied lithium consumption. Source: IEA Global EV Outlook (annual).
          China accounts for ~60% of volume. Battery chemistry mix determines carbonate vs hydroxide
          demand split.
        </p>

        {/* Top grid: EV Sales chart + Li per battery table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* EV Sales chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                  IEA Global EV Outlook &middot; Annual
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  Global EV Sales — BEV + PHEV (2018–2026)
                </p>
                <p className="text-xs text-muted mt-0.5">Millions of vehicles &middot; Regional split</p>
              </div>
              <span className="text-xs font-bold py-1 px-2.5 rounded-lg whitespace-nowrap bg-grn-bg text-grn shrink-0">
                Growing
              </span>
            </div>
            <div className="w-full p-4">
              <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <rect x="20.0" y="172.0" width="60.0" height="13.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="20.0" y="168.0" width="60.0" height="4.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="20.0" y="164.0" width="60.0" height="4.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="20.0" y="163.0" width="60.0" height="1.0" rx="1" fill="#94A3B8" opacity="0.7"/><rect x="120.0" y="173.0" width="60.0" height="12.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="120.0" y="167.0" width="60.0" height="6.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="120.0" y="164.0" width="60.0" height="3.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="120.0" y="162.0" width="60.0" height="2.0" rx="1" fill="#94A3B8" opacity="0.7"/><rect x="220.0" y="171.0" width="60.0" height="14.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="220.0" y="157.0" width="60.0" height="14.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="220.0" y="154.0" width="60.0" height="3.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="220.0" y="151.0" width="60.0" height="3.0" rx="1" fill="#94A3B8" opacity="0.7"/><rect x="320.0" y="152.0" width="60.0" height="33.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="320.0" y="129.0" width="60.0" height="23.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="320.0" y="124.0" width="60.0" height="5.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="320.0" y="120.0" width="60.0" height="4.0" rx="1" fill="#94A3B8" opacity="0.7"/><rect x="420.0" y="116.0" width="60.0" height="69.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="420.0" y="89.0" width="60.0" height="27.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="420.0" y="80.0" width="60.0" height="9.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="420.0" y="74.0" width="60.0" height="6.0" rx="1" fill="#94A3B8" opacity="0.7"/><rect x="520.0" y="100.0" width="60.0" height="85.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="520.0" y="68.0" width="60.0" height="32.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="520.0" y="54.0" width="60.0" height="14.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="520.0" y="45.0" width="60.0" height="9.0" rx="1" fill="#94A3B8" opacity="0.7"/><rect x="620.0" y="80.0" width="60.0" height="105.0" rx="1" fill="#EF5350" opacity="0.85"/><rect x="620.0" y="45.0" width="60.0" height="35.0" rx="1" fill="#3B82F6" opacity="0.85"/><rect x="620.0" y="30.0" width="60.0" height="15.0" rx="1" fill="#8B5CF6" opacity="0.85"/><rect x="620.0" y="15.0" width="60.0" height="15.0" rx="1" fill="#94A3B8" opacity="0.7"/><line x1="50" y1="15" x2="50" y2="185" stroke="#94A3B8" strokeWidth="1"/><line x1="50" y1="185" x2="650" y2="185" stroke="#94A3B8" strokeWidth="1"/><line x1="47" y1="15" x2="50" y2="15" stroke="#94A3B8" strokeWidth="1"/><line x1="47" y1="71.1" x2="50" y2="71.1" stroke="#94A3B8" strokeWidth="1"/><line x1="47" y1="127.2" x2="50" y2="127.2" stroke="#94A3B8" strokeWidth="1"/><line x1="47" y1="185" x2="50" y2="185" stroke="#94A3B8" strokeWidth="1"/><text x="50.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2018</text><text x="150.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2019</text><text x="250.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2020</text><text x="350.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2021</text><text x="450.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2022</text><text x="550.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2023</text><text x="650.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2024</text><text x="44" y="18" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">17M</text><text x="44" y="74.1" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">11M</text><text x="44" y="130.2" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">6M</text><text x="44" y="188" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">0</text><rect x="20" y="3" width="8" height="8" rx="1" fill="#EF5350" opacity="0.85"/><text x="31" y="10" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">China</text><rect x="95" y="3" width="8" height="8" rx="1" fill="#3B82F6" opacity="0.85"/><text x="106" y="10" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Europe</text><rect x="170" y="3" width="8" height="8" rx="1" fill="#8B5CF6" opacity="0.85"/><text x="181" y="10" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">USA</text><rect x="245" y="3" width="8" height="8" rx="1" fill="#94A3B8" opacity="0.85"/><text x="256" y="10" textAnchor="start" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Other</text>
              </svg>
            </div>
          </div>

          {/* Li per battery table */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="p-4 border-b border-bdr">
              <p className="text-sm font-bold text-ink">
                Lithium per battery at $11,000/t LCE
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Battery type</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-li-d p-2.5 border-b-2 border-bdr">kg LCE/kWh</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Pack size</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Li per EV</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2.5 border-b-2 border-bdr">Li cost/EV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[rgba(26,26,46,0.02)]">
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">LFP (budget EV)</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-mono text-ink3">0.65</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">60 kWh</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-mono text-ink3">39 kg</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-mono text-ink3">$430</td>
                  </tr>
                  <tr className="hover:bg-[rgba(26,26,46,0.02)]">
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-semibold text-ink">NMC 622 (mid-range)</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-mono text-ink3">0.70</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">75 kWh</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-mono text-ink3">53 kg</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] font-mono text-ink3">$580</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-muted px-3 py-2 border-t border-bdr">
              At $80,000/t (2022 peak): NMC 811 li cost = $4,720/EV — a 7.3&times; increase.
            </p>
          </div>
        </div>

        {/* Insight callout */}
        <div className="bg-grn-bg border border-[rgba(16,185,129,0.2)] rounded-xl p-4 mb-4 flex items-start gap-3">
          <span className="text-lg flex-shrink-0 mt-0.5">🔋</span>
          <div>
            <p className="text-xs font-bold text-ink mb-0.5">
              Stationary storage: the underpriced demand driver
            </p>
            <p className="text-xs text-ink3 leading-relaxed">
              Grid-scale battery storage is growing faster than EVs in terms of Li demand. 100 MW /
              400 MWh utility storage = 260 t LCE (equivalent to ~4,700 EVs). IEA projects
              stationary storage reaching 20–25% of lithium demand by 2030.
            </p>
          </div>
        </div>

        {/* Chemistry Mix chart */}
        <div className="bg-white border border-bdr rounded-xl overflow-hidden mb-4">
          <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold text-ink leading-snug">
                EV Battery Chemistry Mix — LFP vs NMC/NCA Share (2018–2026E)
              </p>
              <p className="text-xs text-muted mt-1">
                LFP uses carbonate &middot; NMC/NCA uses hydroxide &middot; Chemistry mix determines
                Li product demand split
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="text-xs font-semibold px-2 py-1 rounded-md bg-li/10 text-li-d border border-bdr">
                Share %
              </button>
              <button className="text-xs font-semibold px-2 py-1 rounded-md text-muted border border-bdr">
                Volume GWh
              </button>
            </div>
          </div>
          <div className="w-full p-4">
            <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
              <path d="M 50.0,163.8 L 126.2,163.8 L 202.5,165.5 L 278.8,174.2 L 355.0,176.0 L 431.2,179.5 L 507.5,181.2 L 583.8,183.0 L 660.0,184.8 L 660.0,190.0 L 583.8,190.0 L 507.5,190.0 L 431.2,190.0 L 355.0,190.0 L 278.8,190.0 L 202.5,190.0 L 126.2,190.0 L 50.0,190.0 Z" fill="#F59E0B" opacity="0.82"/><path d="M 50.0,67.5 L 126.2,64.0 L 202.5,71.0 L 278.8,81.5 L 355.0,99.0 L 431.2,116.5 L 507.5,128.8 L 583.8,134.0 L 660.0,137.5 L 660.0,184.8 L 583.8,183.0 L 507.5,181.2 L 431.2,179.5 L 355.0,176.0 L 278.8,174.2 L 202.5,165.5 L 126.2,163.8 L 50.0,163.8 Z" fill="#8B5CF6" opacity="0.82"/><path d="M 50.0,15.0 L 126.2,15.0 L 202.5,15.0 L 278.8,15.0 L 355.0,15.0 L 431.2,15.0 L 507.5,15.0 L 583.8,15.0 L 660.0,15.0 L 660.0,137.5 L 583.8,134.0 L 507.5,128.8 L 431.2,116.5 L 355.0,99.0 L 278.8,81.5 L 202.5,71.0 L 126.2,64.0 L 50.0,67.5 Z" fill="#3B82F6" opacity="0.82"/><line x1="50" y1="15" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"/><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="1"/><text x="50.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2018</text><text x="202.5" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2020</text><text x="355.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2022</text><text x="507.5" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2024</text><text x="660.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2026</text><text x="44" y="18" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">100%</text><text x="44" y="105.5" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">50%</text><text x="44" y="193" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">0%</text><text x="477.0" y="41.25" textAnchor="middle" fontSize="9" fill="#3B82F6" fontFamily="DM Sans,sans-serif" fontWeight="700">LFP</text><text x="477.0" y="111.25" textAnchor="middle" fontSize="9" fill="#8B5CF6" fontFamily="DM Sans,sans-serif" fontWeight="700">NMC/622</text><text x="477.0" y="169.0" textAnchor="middle" fontSize="8" fill="#F59E0B" fontFamily="DM Sans,sans-serif" fontWeight="700">NCA</text>
            </svg>
          </div>
        </div>

        {/* Bottom grid: Storage + Intensity charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Stationary Energy Storage */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-sm font-bold text-ink leading-snug">
                  Stationary Energy Storage — Lithium Demand (2020–2030E)
                </p>
                <p className="text-xs text-muted mt-1">
                  Grid + BTM batteries &middot; kt LCE &middot; Projected 20–25% of total demand by 2030
                </p>
              </div>
            </div>
            <div className="w-full p-4">
              <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <rect x="30.6" y="182.2" width="38.8" height="2.8" rx="2" fill="#10B981" opacity="0.85"/><rect x="91.6" y="179.3" width="38.8" height="5.7" rx="2" fill="#10B981" opacity="0.85"/><rect x="152.6" y="173.7" width="38.8" height="11.3" rx="2" fill="#10B981" opacity="0.85"/><rect x="213.6" y="165.2" width="38.8" height="19.8" rx="2" fill="#10B981" opacity="0.85"/><rect x="274.6" y="153.8" width="38.8" height="31.2" rx="2" fill="#10B981" opacity="0.85"/><line x1="294.0" y1="15" x2="294.0" y2="185" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3,2" opacity="0.5"/><rect x="335.6" y="142.5" width="38.8" height="42.5" rx="2" fill="#3B82F6" opacity="0.6"/><rect x="396.6" y="128.3" width="38.8" height="56.7" rx="2" fill="#3B82F6" opacity="0.6"/><rect x="457.6" y="105.7" width="38.8" height="79.3" rx="2" fill="#3B82F6" opacity="0.6"/><rect x="518.6" y="77.3" width="38.8" height="107.7" rx="2" fill="#3B82F6" opacity="0.6"/><rect x="579.6" y="49.0" width="38.8" height="136.0" rx="2" fill="#3B82F6" opacity="0.6"/><rect x="640.6" y="15.0" width="38.8" height="170.0" rx="2" fill="#3B82F6" opacity="0.6"/><line x1="50" y1="15" x2="50" y2="185" stroke="#94A3B8" strokeWidth="1"/><line x1="50" y1="185" x2="660" y2="185" stroke="#94A3B8" strokeWidth="1"/><text x="50.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2020</text><text x="172.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2022</text><text x="294.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2024</text><text x="416.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2026E</text><text x="538.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2028E</text><text x="660.0" y="199" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2030E</text><text x="44" y="18" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">300kt</text><text x="44" y="130.2" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">100kt</text><text x="44" y="188" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">0</text><rect x="20" y="3" width="8" height="8" rx="1" fill="#10B981" opacity="0.85"/><text x="33" y="10" textAnchor="start" fontSize="8" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Historical</text><rect x="100" y="3" width="8" height="8" rx="1" fill="#3B82F6" opacity="0.6"/><text x="113" y="10" textAnchor="start" fontSize="8" fill="#1A1A2E" fontFamily="DM Sans,sans-serif" fontWeight="normal">Forecast</text>
              </svg>
            </div>
          </div>

          {/* Lithium Intensity */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-sm font-bold text-ink leading-snug">
                  Lithium Intensity — kg LCE per kWh (2015–2026E)
                </p>
                <p className="text-xs text-muted mt-1">
                  Efficiency gains (less Li per kWh) offset some raw demand growth.
                </p>
              </div>
            </div>
            <div className="w-full p-4">
              <svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <line x1="50" y1="15" x2="660" y2="15" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5"/><line x1="50" y1="15" x2="50" y2="190" stroke="#94A3B8" strokeWidth="1"/><line x1="50" y1="190" x2="660" y2="190" stroke="#94A3B8" strokeWidth="1"/><text x="50.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2015</text><text x="271.8" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2019</text><text x="493.6" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2023</text><text x="660.0" y="204" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">2026E</text><text x="44" y="18" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">0.85</text><text x="44" y="193" textAnchor="end" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">0.50</text><path d="M 50.0,15.0 L 105.5,25.0 L 160.9,40.0 L 216.4,50.0 L 271.8,65.0 L 327.3,75.0 L 382.7,90.0 L 438.2,105.0 L 493.6,125.0 L 549.1,135.0 L 604.5,140.0 L 660.0,150.0 L 660.0,150.0 L 50.0,150.0 Z" fill="#3B82F6" opacity="0.08"/><polyline points="50.0,15.0 105.5,25.0 160.9,40.0 216.4,50.0 271.8,65.0 327.3,75.0 382.7,90.0 438.2,105.0 493.6,125.0 549.1,135.0 604.5,140.0 660.0,150.0" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/><text x="340" y="218" textAnchor="middle" fontSize="8" fill="#EF5350" fontFamily="DM Sans,sans-serif" fontWeight="normal">-32% intensity reduction since 2015</text><circle cx="549.1" cy="135.0" r="3" fill="#3B82F6" stroke="white" strokeWidth="1.5"/><circle cx="604.5" cy="140.0" r="3" fill="#3B82F6" stroke="white" strokeWidth="1.5"/><circle cx="660.0" cy="150.0" r="3" fill="#3B82F6" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pipeline;
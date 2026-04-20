import React from 'react';

const Supply = () => {
  return (
    <section className="bg-white py-10" id="supply">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <p className="text-lg font-bold uppercase tracking-[.14em] text-li-d mb-1.5">Mine supply</p>
        <h2 className="text-clamp-26 font-bold text-ink leading-tight mb-1.5 text-2xl">
          Lithium Supply by Country — Production Data
        </h2>
        <p className="text-sm text-muted max-w-[700px] leading-relaxed mb-6">
          Global lithium mine production data by country. Source: USGS Mineral Commodity Summaries (annual).
          The mine-to-refinery geographic split is the key structural signal.
        </p>

        {/* Top grid: bar chart + warning callout */}
        <div className="grid grid-cols-1  gap-4 items-start mb-4">

          {/* Bar chart */}
          <div className="bg-white border border-bdr rounded-xl overflow-hidden">
            <div className="flex items-start justify-between p-4 border-b border-bdr gap-4">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-1">
                  <a
                    href="https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information"
                    rel="nofollow noopener"
                    target="_blank"
                    className="text-li-d"
                  >
                  
                    USGS Mineral Commodity Summaries
                  </a>
                    {' '}
                  · IEA Critical Minerals · Annual
                </p>
                <p className="text-sm font-bold text-ink leading-snug">
                  Global Lithium Production by Country (2024)
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Tonnes of lithium metal · Annual data · Updated February each year with prior-year data
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-gray-100 text-gray-600 shrink-0">
                Annual (USGS)
              </span>
            </div>
            <div className="w-full p-4">
              <svg viewBox="0 0 680 243" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                <rect x="90" y="15" width="540.0" height="18" rx="3" fill="#8B5CF6" opacity="0.85"></rect><text x="85" y="26.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Australia</text><text x="635.0" y="26.7" textAnchor="start" fontSize="9" fill="#8B5CF6" fontFamily="DM Sans,sans-serif" fontWeight="700">92k t</text><rect x="90" y="41" width="275.86" height="18" rx="3" fill="#10B981" opacity="0.85"></rect><text x="85" y="52.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Chile</text><text x="370.86" y="52.7" textAnchor="start" fontSize="9" fill="#10B981" fontFamily="DM Sans,sans-serif" fontWeight="700">47k t</text><rect x="90" y="67" width="252.39" height="18" rx="3" fill="#EF5350" opacity="0.85"></rect><text x="85" y="78.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">China</text><text x="347.39" y="78.7" textAnchor="start" fontSize="9" fill="#EF5350" fontFamily="DM Sans,sans-serif" fontWeight="700">43k t</text><rect x="90" y="93" width="82.17" height="18" rx="3" fill="#F59E0B" opacity="0.85"></rect><text x="85" y="104.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Argentina</text><text x="177.17" y="104.7" textAnchor="start" fontSize="9" fill="#F59E0B" fontFamily="DM Sans,sans-serif" fontWeight="700">14k t</text><rect x="90" y="119" width="64.56" height="18" rx="3" fill="#93C5FD" opacity="0.85"></rect><text x="85" y="130.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Brazil</text><text x="159.56" y="130.7" textAnchor="start" fontSize="9" fill="#93C5FD" fontFamily="DM Sans,sans-serif" fontWeight="700">11k t</text><rect x="90" y="145" width="41.08" height="18" rx="3" fill="#4CAF50" opacity="0.85"></rect><text x="85" y="156.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Zimbabwe</text><text x="136.08" y="156.7" textAnchor="start" fontSize="9" fill="#4CAF50" fontFamily="DM Sans,sans-serif" fontWeight="700">7k t</text><rect x="90" y="171" width="8.80" height="18" rx="3" fill="#3B82F6" opacity="0.85"></rect><text x="85" y="182.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Canada</text><text x="103.80" y="182.7" textAnchor="start" fontSize="9" fill="#3B82F6" fontFamily="DM Sans,sans-serif" fontWeight="700">2k t</text><rect x="90" y="197" width="143.80" height="18" rx="3" fill="#94A3B8" opacity="0.85"></rect><text x="85" y="208.7" textAnchor="end" fontSize="9" fill="#1A1A2E" fontFamily="DM Sans,sans-serif">Other</text><text x="238.80" y="208.7" textAnchor="start" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif" fontWeight="700">24k t</text><line x1="90" y1="15" x2="90" y2="223" stroke="#94A3B8" strokeWidth="1"></line><text x="360.0" y="238" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="DM Sans,sans-serif">Tonnes Li metal (2024)</text>
              </svg>
            </div>
          </div>

          {/* Warning callout — right column on desktop, stacks below chart on mobile */}
          <div className="bg-amb-bg border border-[rgba(146,64,14,0.2)] rounded-xl p-4 flex items-start gap-3 h-full">
            <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <p className="text-xs font-bold text-ink mb-0.5">
                China processes 65–75% of global output regardless of mine origin
              </p>
              <p className="text-xs text-ink3 leading-relaxed">
                Most Australian SC6 ships to Chinese refineries (Ganfeng, Tianqi). Chilean brine is
                partially processed domestically and partially exported as carbonate to Asian
                refineries. Supply chain dependence on Chinese refining is the strategic
                vulnerability that US and EU policy frameworks are attempting to address through
                domestic refining incentives.
              </p>
            </div>
          </div>
        </div>

        {/* Data table — full width below the top grid */}
        <div className="bg-white border border-bdr rounded-xl overflow-hidden mb-4">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2 border-b-2 border-bdr">Country</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-li-d p-2 border-b-2 border-bdr">2024 (t Li)</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2 border-b-2 border-bdr">% world</th>
                  <th className="text-left text-[10px] font-bold uppercase tracking-wider text-muted p-2 border-b-2 border-bdr">Source type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: 'Australia', val: '92,000', pct: '38%', type: 'Hard rock' },
                  { country: 'Chile', val: '47,000', pct: '20%', type: 'Brine (Atacama)' },
                  { country: 'China', val: '43,000', pct: '18%', type: 'Lepidolite, hard rock' },
                  { country: 'Argentina', val: '14,000', pct: '6%', type: 'Brine (salares)' },
                  { country: 'Brazil', val: '11,000', pct: '5%', type: 'Hard rock' },
                  { country: 'Zimbabwe', val: '7,000', pct: '3%', type: 'Hard rock' },
                  { country: 'Canada', val: '1,500', pct: '1%', type: 'Hard rock (NAL)' },
                  { country: 'Other', val: '~24,500', pct: '10%', type: 'Various' },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-[rgba(26,26,46,0.02)]">
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink font-semibold">{item.country}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{item.val}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{item.pct}</td>
                    <td className="p-2.5 border-b border-[rgba(26,26,46,0.05)] text-ink3">{item.type}</td>
                  </tr>
                ))}
                <tr className="bg-[rgba(59,130,246,0.04)]">
                  <td className="p-2.5 font-bold text-ink">World total</td>
                  <td className="p-2.5 font-mono font-bold text-ink">240,000</td>
                  <td className="p-2.5 font-bold text-ink">100%</td>
                  <td className="p-2.5 font-bold text-ink">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted px-3 py-2">
            USGS MCS 2025 · Rounded · Li metal tonnes × 5.323 = LCE tonnes
          </p>
        </div>

        {/* Mining vs Refining pie chart */}
        <div className="bg-white border border-bdr rounded-xl p-6 mt-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
            <div>
              <p className="text-sm font-semibold text-ink">
                Lithium Mining vs Refining — Geographic Split 2024
              </p>
              <p className="text-xs text-muted mt-1">
                Where lithium is mined vs where it is refined into battery-grade chemicals
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="text-[10px] px-2 py-1 rounded border border-bdr bg-li/10 text-li-d">Mining</button>
              <button className="text-[10px] px-2 py-1 rounded border border-bdr text-muted">Refining</button>
            </div>
          </div>
          <svg viewBox="0 0 680 220" className="w-full h-auto">
            <path d="M170,50 A65,65 0 0,1 214.5,162.4 L191.9,138.3 A32,32 0 0,0 170,83 Z" fill="#8B5CF6" stroke="white" strokeWidth="1.5"/>
            <path d="M214.5,162.4 A65,65 0 0,1 138.7,172 L154.6,143 A32,32 0 0,0 191.9,138.3 Z" fill="#10B981" stroke="white" strokeWidth="1.5"/>
            <path d="M138.7,172 A65,65 0 0,1 105.1,110.9 L138.1,113 A32,32 0 0,0 154.6,143 Z" fill="#EF5350" stroke="white" strokeWidth="1.5"/>
            <path d="M105.1,110.9 A65,65 0 0,1 111.2,87.3 L141,101.4 A32,32 0 0,0 138.1,113 Z" fill="#F59E0B" stroke="white" strokeWidth="1.5"/>
            <path d="M111.2,87.3 A65,65 0 0,1 170,50 L170,83 A32,32 0 0,0 141,101.4 Z" fill="#94A3B8" stroke="white" strokeWidth="1.5"/>
            <path d="M510,50 A65,65 0 1,1 451.2,142.7 L481,128.6 A32,32 0 1,0 510,83 Z" fill="#EF5350" stroke="white" strokeWidth="1.5"/>
            <path d="M451.2,142.7 A65,65 0 0,1 448.2,94.9 L479.6,105.1 A32,32 0 0,0 481,128.6 Z" fill="#8B5CF6" stroke="white" strokeWidth="1.5"/>
            <path d="M448.2,94.9 A65,65 0 0,1 465.5,67.6 L488.1,91.7 A32,32 0 0,0 479.6,105.1 Z" fill="#10B981" stroke="white" strokeWidth="1.5"/>
            <path d="M465.5,67.6 A65,65 0 0,1 478.7,58 L494.6,87 A32,32 0 0,0 488.1,91.7 Z" fill="#3B82F6" stroke="white" strokeWidth="1.5"/>
            <path d="M478.7,58 A65,65 0 0,1 510,50 L510,83 A32,32 0 0,0 494.6,87 Z" fill="#94A3B8" stroke="white" strokeWidth="1.5"/>
            <text x="170" y="115" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Mining</text>
            <text x="510" y="115" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Refining</text>
            <rect x="20" y="170" width="8" height="8" fill="#8B5CF6"/><text x="32" y="177" fontSize="10">Australia 38%</text>
            <rect x="20" y="185" width="8" height="8" fill="#10B981"/><text x="32" y="192" fontSize="10">Chile 20%</text>
            <rect x="20" y="200" width="8" height="8" fill="#EF5350"/><text x="32" y="207" fontSize="10">China 18%</text>
            <rect x="20" y="215" width="8" height="8" fill="#F59E0B"/><text x="32" y="222" fontSize="10">Argentina 6%</text>
          </svg>
        </div>

        {/* Stacked area chart */}
        <div className="bg-white border border-bdr rounded-xl p-6 mt-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6">
            <div>
              <p className="text-sm font-semibold text-ink">
                Global Lithium Mine Production by Country — 2019–2024
              </p>
              <p className="text-xs text-muted mt-1">
                Australia's rise, China's lepidolite surge, Argentina's emergence
              </p>
            </div>
            <div className="flex gap-1 shrink-0">
              <button className="text-[10px] px-2 py-1 rounded border border-bdr bg-li/10 text-li-d">Stacked area</button>
              <button className="text-[10px] px-2 py-1 rounded border border-bdr text-muted">Lines</button>
            </div>
          </div>
          <svg viewBox="0 0 770 220" className="w-full h-auto">
            <path d="M50,123.8 L172,119.9 L294,105.6 L416,136.5 L538,115.9 L660,111.9 L660,185 L50,185 Z" fill="#8B5CF6" opacity="0.8"/>
            <path d="M50,109.5 L172,102.4 L294,84.9 L416,105.6 L538,80.9 L660,74.6 L660,123.8 L50,111.9 Z" fill="#10B981" opacity="0.8"/>
            <path d="M50,103.2 L172,91.3 L294,65.8 L416,90.5 L538,54.7 L660,40.4 L660,109.5 L50,74.6 Z" fill="#EF5350" opacity="0.8"/>
            <path d="M50,97.6 L172,84.1 L294,61.1 L416,80.9 L538,47.6 L660,29.3 L660,103.2 L50,40.4 Z" fill="#F59E0B" opacity="0.8"/>
            <path d="M50,96 L172,82.5 L294,57.1 L416,77.8 L538,41.2 L660,20.6 L660,97.6 L50,29.3 Z" fill="#93C5FD" opacity="0.8"/>
            <path d="M50,92.1 L172,78.6 L294,53.1 L416,72.2 L538,35.7 L660,15 L660,96 L50,20.6 Z" fill="#94A3B8" opacity="0.8"/>
            <line x1="50" y1="15" x2="50" y2="185" stroke="#94A3B8"/>
            <line x1="50" y1="185" x2="660" y2="185" stroke="#94A3B8"/>
            {["2019","2020","2021","2022","2023","2024"].map((year, i) => (
              <text key={year} x={50 + i * 122} y="200" textAnchor="middle" fontSize="10" fill="#94A3B8">{year}</text>
            ))}
            <text x="45" y="20" textAnchor="end" fontSize="10" fill="#94A3B8">1.2Mt</text>
            <text x="45" y="75" textAnchor="end" fontSize="10" fill="#94A3B8">0.8Mt</text>
            <text x="45" y="130" textAnchor="end" fontSize="10" fill="#94A3B8">0.4Mt</text>
            <text x="45" y="188" textAnchor="end" fontSize="10" fill="#94A3B8">0</text>
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Supply;
// components/sections/TaxesSection.jsx

export default function TaxesSection() {
  const tableRows = [
    {
      vehicle: "LIT ETF shares",
      treatment: "Standard equity capital gains (0%, 15%, or 20%)",
      holdingMatters: "Yes — >1 year = long-term rate",
      notes:
        "Dividends may be qualified (lower rate) or ordinary, depending on underlying holdings",
    },
    {
      vehicle: "REMX / BATT ETF shares",
      treatment: "Standard equity capital gains",
      holdingMatters: "Yes",
      notes: "Same as LIT",
    },
    {
      vehicle: "ALB, SQM, Pilbara shares (US-listed)",
      treatment: "Standard equity capital gains",
      holdingMatters: "Yes",
      notes:
        "Foreign stocks (SQM is Chilean) may have withholding tax on dividends — check per-country treaty rates",
    },
    {
      vehicle: "ASX-listed miners (PLS, MIN, IGO)",
      treatment: "Standard long-term equity capital gains if held >1 year",
      holdingMatters: "Yes",
      notes:
        "Require an international broker. Australian dividends have 15% withholding tax for US investors (US-Australia treaty rate). Credit available on US tax return.",
    },
    {
      vehicle: "Physical lithium",
      treatment: "N/A — not available to retail investors",
      holdingMatters: "N/A",
      notes:
        "If somehow obtained, would likely be treated as ordinary income on sale as a commodity, not capital gains",
    },
    {
      vehicle: "Lithium futures (CME)",
      treatment:
        "Section 1256 contracts — 60% long-term / 40% short-term regardless of holding period",
      holdingMatters: "No — 60/40 rule applies always",
      notes:
        "Marked to market at year end. Simpler than equity for tax purposes.",
    },
  ];

  return (
    <section
      className="bg-white py-16 md:py-20"
      id="taxes"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 11
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4 max-w-3xl leading-snug">
          Lithium Investment Taxes — What US Investors Need to Know
        </h2>

        {/* Intro paragraph */}
        <p className="text-base text-ink/80 max-w-3xl mb-10 leading-relaxed">
          Unlike gold and silver (which face the punishing 28% collectibles rate
          if held physically), lithium investments are taxed under standard
          equity rules. This is a meaningful structural advantage.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-bdr mb-12">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7FB] border-b border-bdr">
                {["Investment vehicle", "Tax treatment", "Holding period matters?", "Notes"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="px-5 py-3.5 font-semibold text-ink text-xs uppercase tracking-wider whitespace-nowrap"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={row.vehicle}
                  className={`border-b border-bdr last:border-0 transition-colors hover:bg-[#F4F7FB]/60 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]/30"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-ink align-top whitespace-nowrap">
                    {row.vehicle}
                  </td>
                  <td className="px-5 py-4 text-ink/80 align-top">{row.treatment}</td>
                  <td className="px-5 py-4 text-ink/80 align-top whitespace-nowrap">
                    {row.holdingMatters}
                  </td>
                  <td className="px-5 py-4 text-ink/70 align-top">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subsection: SQM withholding */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3 w-full">
          SQM withholding tax: the thing people miss
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          SQM is a Chilean company listed on NYSE as an ADR. Chile imposes a 35%
          withholding tax on dividends paid to US residents under general rules,
          but the US-Chile tax treaty reduces this to 15% for most investors. The
          15% withheld is creditable against your US tax liability (Form 1116).
          If you hold SQM in an IRA or 401(k), the foreign tax credit benefit is
          lost — worth keeping in mind when deciding which account to use.
        </p>

        {/* Subsection: IRA */}
        <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
          Lithium mining stocks in an IRA
        </h3>
        <p className="text-base text-ink/80 max-w-[1600px] mb-10 leading-relaxed">
          US-listed lithium miners (ALB, Arcadium, LIT, REMX) are
          straightforwardly eligible for IRA accounts. Foreign-listed stocks
          (ASX-listed miners) require a brokerage that supports international
          trading in IRAs — not all do. There is no special IRS restriction on
          mining stocks in retirement accounts; standard retirement account rules
          apply.
        </p>

        {/* Callout: lithium vs gold */}
        <div className="flex gap-4 items-start bg-[rgba(var(--li-rgb),0.08)] border border-[rgba(var(--li-rgb),0.25)] rounded-xl p-5 md:p-6 mb-10 max-w-[1600px]">
          <span className="text-2xl leading-none mt-0.5 shrink-0" aria-hidden="true">
            ⚡
          </span>
          <div>
            <p className="font-semibold text-ink text-sm mb-1.5">
              Lithium vs gold tax comparison
            </p>
            <p className="text-sm text-ink/80 leading-relaxed">
              Gold ETFs backed by physical gold (GLD, IAU) are taxed as
              collectibles at a maximum 28% federal rate — higher than the 20%
              maximum on long-term equity gains. Lithium ETFs like LIT are equity
              funds and qualify for the standard 0%/15%/20% long-term capital
              gains rates. If you are comparing gold and lithium as portfolio
              diversifiers, lithium wins on the tax comparison, assuming
              comparable pre-tax returns.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-ink/50 italic">
          This is general information, not tax advice. Consult a qualified tax
          advisor for your specific situation.
        </p>

      </div>
    </section>
  );
}
// components/sections/GlossarySection.jsx

const terms = [
  {
    term: "LCE (Lithium Carbonate Equivalent)",
    def: "The industry standard unit for expressing lithium content. All lithium products (carbonate, hydroxide, spodumene) can be expressed as LCE using standard conversion factors. 1 t LCE = 0.1878 t lithium metal.",
    tag: "Unit",
  },
  {
    term: "Li₂CO₃ (Lithium Carbonate)",
    def: "Battery-grade lithium carbonate, the product most commonly quoted in price indices. Used primarily in LFP batteries and as a precursor for hydroxide production. SMM daily assessed in China.",
    tag: "Product",
  },
  {
    term: "LiOH (Lithium Hydroxide)",
    def: "Lithium hydroxide monohydrate. Used in NMC and NCA high-energy batteries. Trades at a premium to LCE (currently +$2,500/t) because of its higher processing cost and specific use case.",
    tag: "Product",
  },
  {
    term: "SC6 (Spodumene Concentrate, 6% Li₂O)",
    def: "Spodumene ore upgraded to 6% lithium oxide content. The primary raw material traded between Australian hard rock mines and Chinese refineries. Assessed by Fastmarkets weekly, CIF China.",
    tag: "Raw material",
  },
  {
    term: "Brine",
    def: "Underground salt water containing dissolved lithium, pumped from beneath salt flats (salares) in Chile and Argentina. The lowest-cost source but slow to develop.",
    tag: "Source",
  },
  {
    term: "Spodumene",
    def: "A lithium-bearing pyroxene mineral found in granitic pegmatite rock. Hard rock mining, typically in Australia (Greenbushes, Pilgangoora) and Brazil. Converted to carbonate or hydroxide at Chinese refineries.",
    tag: "Source",
  },
  {
    term: "Lepidolite",
    def: "A lithium-bearing mica mineral found in China (Jiangxi, Sichuan). Higher processing cost and lower grade than spodumene. The marginal-cost producer that caused the 2022–2024 price crash.",
    tag: "Source",
  },
  {
    term: "DLE (Direct Lithium Extraction)",
    def: "An emerging technology that extracts lithium selectively from brine using sorbents, membranes, or electrochemical processes — faster than traditional evaporation ponds. Pre-commercial at large scale as of 2026.",
    tag: "Technology",
  },
  {
    term: "AISC (All-In Sustaining Cost)",
    def: "The total cost per tonne LCE to mine and process lithium, including sustaining capital, G&A, and royalties. The standard cost comparison metric. Different from cash cost (which excludes sustaining capital).",
    tag: "Metric",
  },
  {
    term: "Refinery margin",
    def: "LCE spot price minus (SC6 price × 8.9). Positive = Chinese refineries converting spodumene to carbonate are profitable. Negative = they are at a loss, curtailment pressure builds. Currently +$3,880/t.",
    tag: "Metric",
  },
  {
    term: "Wuxi stocks",
    def: "Lithium carbonate inventory held at the Wuxi Stainless Steel Exchange. The closest equivalent to LME registered warehouse stocks for lithium, though it covers only a portion of China's physical market. Weekly Thursday data from SMM.",
    tag: "Signal",
  },
  {
    term: "Battery maker inventory",
    def: "Days of forward lithium coverage held by major battery manufacturers (CATL, BYD, CALB, Gotion). Below 30 days historically precedes spot buying. SMM monthly survey.",
    tag: "Signal",
  },
  {
    term: "Incentive price",
    def: "The minimum price required to attract capital into new greenfield lithium development. Generally estimated at $18,000–$25,000/t LCE for new brine development.",
    tag: "Metric",
  },
  {
    term: "LFP (Lithium Iron Phosphate)",
    def: "Battery chemistry using carbonate-derived lithium. Lower energy density than NMC but cheaper, safer, longer cycle life. Dominant in China. ~65% of new EV battery production in 2024.",
    tag: "Chemistry",
  },
  {
    term: "NMC (Nickel Manganese Cobalt)",
    def: "Battery chemistry using hydroxide-derived lithium. Higher energy density than LFP. Preferred for long-range vehicles. ~30% of new EV production. Uses LiOH, not LCE.",
    tag: "Chemistry",
  },
  {
    term: "FID (Final Investment Decision)",
    def: "The point at which a mining company commits capital to construct a project. Projects post-FID are in  and are the most certain near-term supply additions. Only 7 lithium projects globally have taken FID as of April 2026.",
    tag: "Industry",
  },
  {
    term: "Offtake agreement",
    def: "A long-term sales contract between a miner and a buyer (battery maker, refiner) committing to purchase a set volume at a formula-linked price. Often a prerequisite for financing a new mine.",
    tag: "Industry",
  },
  {
    term: "LIT",
    def: "Global X Lithium & Battery Tech ETF. The most liquid lithium investment vehicle for US retail investors. Holds lithium miners, refiners, battery manufacturers. AUM ~$2.5B. Expense ratio 0.75%/yr.",
    tag: "ETF",
  },
  {
    term: "ALB",
    def: "Albemarle Corporation. The largest US-listed lithium producer. Operates in Chile (Atacama brine), Australia (Greenbushes), and the US (Silver Peak). NYSE-listed.",
    tag: "Company",
  },
  {
    term: "SQM",
    def: "Sociedad Química y Minera de Chile. The world's lowest-cost lithium producer, operating in the Atacama salar. NYSE-listed as an ADR. Subject to Chilean government and royalty dynamics.",
    tag: "Company",
  },
  {
    term: "Salar",
    def: "A salt flat in the Andes of Chile and Argentina beneath which lithium-rich brine is trapped. The Salar de Atacama (Chile) is the world's most productive lithium brine operation.",
    tag: "Geography",
  },
];

const tagStyles = {
  Unit:        "bg-[#F4F7FB] text-ink/60 border-bdr",
  Product:     "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.2)]",
  "Raw material": "bg-[#F4F7FB] text-ink/60 border-bdr",
  Source:      "bg-grn-bg text-grn border-grn/30",
  Technology:  "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.2)]",
  Metric:      "bg-[#F4F7FB] text-ink/60 border-bdr",
  Signal:      "bg-grn-bg text-grn border-grn/30",
  Chemistry:   "bg-[rgba(var(--li-rgb),0.08)] text-li border-[rgba(var(--li-rgb),0.2)]",
  Industry:    "bg-[#F4F7FB] text-ink/60 border-bdr",
  ETF:         "bg-grn-bg text-grn border-grn/30",
  Company:     "bg-[#F4F7FB] text-ink/60 border-bdr",
  Geography:   "bg-[#F4F7FB] text-ink/60 border-bdr",
};

export default function GlossarySection() {
  return (
    <section className="bg-white py-16 md:py-20" id="glossary">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <p className="text-xs font-semibold uppercase tracking-widest text-li mb-3">
          Section 16
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-10 leading-snug">
          Lithium Glossary
        </h2>

        <dl className="grid gap-px bg-bdr sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border border-bdr">
          {terms.map((item) => (
            <div
              key={item.term}
              className="bg-white p-5 flex flex-col gap-2 hover:bg-[#F4F7FB]/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <dt className="font-semibold text-ink text-sm leading-snug">{item.term}</dt>
                <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${tagStyles[item.tag]}`}>
                  {item.tag}
                </span>
              </div>
              <dd className="text-sm text-ink/70 leading-relaxed">{item.def}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
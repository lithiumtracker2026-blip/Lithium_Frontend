import React from "react";

const trackers = [
  {
    name: "Lithium Tracker",
    href: "https://www.lithiumtracker.com/",
    color: "#3B82F6",
  },
  {
    name: "Copper Tracker",
    href: "https://www.coppertracker.com/",
    color: "#F97316",
  },
  {
    name: "Nickel Metal Tracker",
    href: "https://www.nickelmetaltracker.com/",
    color: "#6366F1",
  },
  {
    name: "Uranium Tracker",
    href: "https://www.uraniumtracker.com/",
    color: "#EAB308",
  },
  {
    name: "PGM Tracker",
    href: "https://www.pgmtracker.com/",
    color: "#8B5CF6",
  },
  {
    name: "Gold & Silver Tracker",
    href: "https://www.goldandsilvertracker.com/",
    color: "#F59E0B",
  },
];

const TrackerNetworkSection = () => {
  return (
    <section style={{ backgroundColor: "#0F1117" }} className="w-full py-12 px-4">
      <div className="container mx-auto xl:px-10">
        {/* Header */}
        <p className="text-[11px] font-semibold tracking-widest text-accent uppercase mb-3">
          Commodities Tracker Network
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">
          Explore our suite of real-time commodity trackers
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Built for investors who move fast.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {trackers.map((tracker) => (
            <a
              key={tracker.name}
              href={tracker.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl p-4 transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.09)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
              }}
            >
              {/* Dot */}
              <span
                className="w-2.5 h-2.5 rounded-full mb-4 block"
                style={{ backgroundColor: tracker.color }}
              />

              {/* Name + link */}
              <div>
                <p className="text-white text-[13px] font-medium leading-snug mb-2">
                  {tracker.name}
                </p>
                <span className="text-accent text-[12px] font-medium group-hover:underline">
                  Visit →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackerNetworkSection;

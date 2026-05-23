import React from "react";

const trackers = [
  {
    name: "Lithium",
    href: "https://www.lithiumtracker.com/",
    color: "#3B82F6",
    current: true,
  },
  {
    name: "Copper",
    href: "https://www.coppertracker.com/",
    color: "#F97316",
    current: false,
  },
  {
    name: "Nickel",
    href: "https://www.nickelmetaltracker.com/",
    color: "#6366F1",
    current: false,
  },
  {
    name: "Uranium",
    href: "https://www.uraniumtracker.com/",
    color: "#EAB308",
    current: false,
  },
  {
    name: "PGM",
    href: "https://www.pgmtracker.com/",
    color: "#8B5CF6",
    current: false,
  },
  {
    name: "Gold & Silver",
    href: "https://www.goldandsilvertracker.com/",
    color: "#F59E0B",
    current: false,
  },
];

const NetworkBar = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 w-full">
      <div className="container mx-auto px-4 xl:px-10">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1.5">
          {/* Label */}
          <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mr-3 shrink-0">
            Network
          </span>

          {/* Tracker links */}
          {trackers.map((tracker) => (
            <a
              key={tracker.name}
              href={tracker.href}
              target={tracker.current ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-medium shrink-0 transition-all duration-150 ${
                tracker.current
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              {/* Dot */}
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: tracker.color }}
              />
              {tracker.name}
              {tracker.current && (
                <span className="text-[10px] text-gray-400 font-normal">✓</span>
              )}
              {!tracker.current && (
                <span className="text-[10px] text-gray-300">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkBar;

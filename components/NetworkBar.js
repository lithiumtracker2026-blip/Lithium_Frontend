import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const trackers = [
  {
    name: "Lithium",
    href: "https://www.lithiumtracker.com/",
    color: "#3B82F6", // blue
    current: true,
  },
  {
    name: "Copper",
    href: "https://www.coppertracker.com/",
    color: "#F97316", // orange
    current: false,
  },
  {
    name: "Nickel",
    href: "https://www.nickelmetaltracker.com/",
    color: "#6366F1", // indigo
    current: false,
  },
  {
    name: "Uranium",
    href: "https://www.uraniumtracker.com/",
    color: "#EAB308", // yellow
    current: false,
  },
  {
    name: "PGM",
    href: "https://www.pgmtracker.com/",
    color: "#8B5CF6", // purple
    current: false,
  },
  {
    name: "Gold & Silver",
    href: "https://www.goldandsilvertracker.com/",
    color: "#F59E0B", // amber
    current: false,
  },
];

const NetworkBar = () => {
  return (
    <div className="bg-white border-b border-black/[0.07] w-full">
      <div className="container mx-auto px-4 xl:px-10">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-[6px]">
          {/* Label */}
          <span className="text-[10px] font-semibold tracking-widest text-black/30 uppercase mr-3 shrink-0">
            Network
          </span>

          {/* Tracker links */}
          {trackers.map((tracker) => (
            <a
              key={tracker.name}
              href={tracker.href}
              target={tracker.current ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-[3px] rounded-full text-[12px] font-medium shrink-0 transition-all duration-150 ${
                tracker.current
                  ? "bg-black/[0.06] text-black"
                  : "text-black/50 hover:text-black/80 hover:bg-black/[0.04]"
              }`}
            >
              {/* Dot */}
              <span
                className="w-[7px] h-[7px] rounded-full shrink-0"
                style={{ backgroundColor: tracker.color }}
              />
              {tracker.name}
              {tracker.current && (
                <span className="text-[10px] text-black/40 font-normal">✓</span>
              )}
              {!tracker.current && (
                <span className="text-[10px] text-black/25">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkBar;

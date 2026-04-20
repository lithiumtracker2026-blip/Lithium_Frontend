import React, { useState, useEffect, useRef } from "react";

const SECTIONS = [
  { id: "prices",    label: "Prices" },
  { id: "refinery",  label: "Refinery" },
  { id: "supply",    label: "Supply" },
  { id: "pipeline",  label: "Pipeline" },
  { id: "balance",   label: "Balance" },
  { id: "history",   label: "History" },
  { id: "drivers",   label: "Drivers" },
  { id: "inventory", label: "Inventory" },
  { id: "costcurve", label: "Cost Curve" },
  { id: "calculator",label: "Calculator" },
];

const DataSectionNav = () => {
  const [activeId, setActiveId] = useState("prices");
  const navRef = useRef(null);

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px", // triggers when section is ~in the middle of viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Auto-scroll the nav pill into view when active changes
  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-id="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 140; // height of your sticky nav + some breathing room
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-[72px] mt-4 z-40 bg-white border-b border-bdr shadow-sm"
      aria-label="Data sections"
    >
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-row gap-1 overflow-x-auto no-scrollbar py-2"
      >
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              data-id={id}
              onClick={() => handleClick(id)}
              className={`
                whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer
                ${isActive
                  ? "bg-li text-white"
                  : "text-muted hover:text-ink hover:bg-gray-100"
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default DataSectionNav;
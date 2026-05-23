import React, { useEffect, useRef, memo } from "react";

// Top lithium stocks & ETFs with confirmed TradingView symbols
const LITHIUM_TICKERS = [
  { symbol: "NYSE:ALB",   label: "Albemarle Corp" },
  { symbol: "NYSE:SQM",   label: "SQM" },
  { symbol: "NYSE:LAC",   label: "Lithium Americas" },
  { symbol: "AMEX:LIT",   label: "Global X Lithium ETF" },
  { symbol: "NYSE:PLL",   label: "Piedmont Lithium" },
  { symbol: "NASDAQ:SGML",label: "Sigma Lithium" },
  { symbol: "TSX:SLI",    label: "Standard Lithium" },
  { symbol: "TSX:LI",     label: "Americas Lithium" },
  { symbol: "ASX:PLS",    label: "Pilbara Minerals" },
  { symbol: "TSX:CYP",    label: "Cypress Dev. Corp" },
  { symbol: "NYSE:LTHM",  label: "Livent Corp" },
  { symbol: "NASDAQ:FREY", label: "FREYR Battery" },
];

// Single widget card — mounts the TradingView single-quote script
const QuoteWidget = memo(({ symbol }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
      width: "100%",
    });

    ref.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="tradingview-widget-container bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div ref={ref} className="tradingview-widget-container__widget" />
    </div>
  );
});

QuoteWidget.displayName = "QuoteWidget";

const ISnapshot = () => {
  return (
    <div className="px-3 md:px-12 py-5">
      <h1 className="cambay text-[22px] sm:text-3xl font-semibold">Snapshot</h1>
      <p className="text-sm text-gray-400 mt-1 mb-6">
        Real-time quotes for major lithium stocks &amp; ETFs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {LITHIUM_TICKERS.map((t) => (
          <QuoteWidget key={t.symbol} symbol={t.symbol} />
        ))}
      </div>
    </div>
  );
};

export default ISnapshot;

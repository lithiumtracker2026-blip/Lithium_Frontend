import Navbar from "@/components/Navbar";
import React from "react";
import Head from "next/head";
import DataHero from "@/components/Data/DataHero";
import Ticker from "@/components/Data/Ticker"
import Prices from "@/components/Data/Prices";
import History from "@/components/Data/History";
import Balance from "@/components/Data/Balance";
import Refinery from "@/components/Data/Refinery";
import DataSectionNav from "@/components/Data/DataSectionNav";
import Supply from "@/components/Data/Supply";
import Pipeline from "@/components/Data/Pipeline";
import Drivers from "@/components/Data/Drivers";
import Calculator from "@/components/Data/Calculator";
import Inventory from "@/components/Data/Inventory";
import CostCurve from "@/components/Data/CostCurve";
import Footer from "@/components/Footer";

import SEO from "@/components/SEO";

const Data = () => {
  

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Lithium Price Today: LCE, Spodumene & Hydroxide Charts & Data"
        description="Comprehensive lithium market data: LCE spot prices, spodumene (SC6) benchmarks, hydroxide pricing, supply & demand balances, refinery capacity, and inventory levels."
        keywords="lithium price data, LCE spot price, spodumene SC6 price, lithium hydroxide, lithium supply demand, lithium inventory, lithium market data"
        canonicalUrl="https://www.lithiumtracker.com/data"
      />
      <Head>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dataset",
          "name": "Lithium Market Data — Prices, Supply & Demand",
          "description": "Comprehensive lithium market dataset covering LCE spot prices, spodumene (SC6) benchmarks, lithium hydroxide pricing, supply and demand balances, refinery capacity utilisation, and inventory levels.",
          "url": "https://www.lithiumtracker.com/data",
          "keywords": ["lithium price", "LCE price", "spodumene SC6", "lithium hydroxide", "lithium supply demand", "lithium inventory"],
          "creator": { "@type": "Organization", "name": "Lithium Tracker", "url": "https://www.lithiumtracker.com" },
          "license": "https://www.lithiumtracker.com/",
          "isAccessibleForFree": true
        })}</script>
      </Head>
      
      <Navbar />
      <div className="pt-[88px] ">
        <Ticker/>
      </div>

      
      <div>
        <DataHero />
      </div>
      
      <DataSectionNav/>
      
      
      <div className="flex flex-col divide-y divide-bdr">
        <Prices />
        <Refinery />
        <Supply />
        <Pipeline />
        <Balance />
        <History />
        <Drivers />
        <Inventory />
        <CostCurve />
        <Calculator />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
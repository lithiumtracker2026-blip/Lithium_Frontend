import Navbar from "@/components/Navbar";
import React from "react";
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
        title="Lithium Market Data - Price Trends, Supply & Demand Insights"
        description="Access comprehensive Lithium market data, including price trends, supply and demand metrics, and industry analysis. Our detailed datasets provide the insights you need for informed decision-making in the Lithium market."
        keywords="Lithium market data, price trends, Lithium supply and demand, industry analysis, Lithium research, market insights, Lithium and Lithium Alloys, data analytics"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/data"
      />
      
      <Navbar />
      <div className="pt-20 ">
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
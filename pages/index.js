
import React from "react";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import Footer from "@/components/Footer";
import TVLithiumCFD from "@/components/Home/TVLithiumCFD";
import TVLithium from "@/components/Home/TVLithium";
import DirectLithiumPrice from "@/components/Home/DirectLithiumPrice";
import DirectHomeLithiumPrice from "@/components/Home/DirectHomeLithiumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";
import MostFollowedStocksTable from "@/components/Home/MostFollowedStocksTable";

const home = () => {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <SEO
        title="Lithium Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Lithium market news, price updates, and in-depth analysis."
        keywords="Lithium prices, Lithium news, Lithium market analysis"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/"
      />
      <Navbar />
      <div className="pt-20 w-full">
        {/* Marquee Section */}
        <div className="mt-2 w-full">
          <StocksMarquee />
        </div>
        <Hero />
        {/* --- MASTER GRID (Main Content + Sidebar) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-10 px-4 md:px-10 lg:px-12 py-8 items-start w-full mx-auto">
          {/* LEFT/MIDDLE COLUMN (Main Feed - Takes 9/12 columns) */}
          <div className="lg:col-span-9 flex flex-col items-stretch space-y-12 w-full">
            
            {/* Prices Section */}

                {/* <div className="w-full border border-black/10 p-3 mr-2 rounded-xl md:col-span-3 self-start">
                  <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                    Lithium Price Chart
                  </h1>
                  <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm w-full">
                    <TVLithiumCFD />
                  </div>
                </div> */}

            <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl md:col-span-6">
              <h1 className="text-[21px] cambay font-bold mb-3  border-black/10 pb-1">
                Prices
              </h1>
              <div className="w-full border border-t-2 border-black/10 p-3 mr-2 rounded-xl">
                <DirectHomeLithiumPrice />
              </div>
            </div>
            
            {/* Transactions Section */}
            <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl">
              <div className="flex justify-between items-center mb-3   border-black/10 pb-1">
                <h1 className="text-[21px] cambay font-bold">
                  Recent Canadian Company Insider Transactions
                </h1>
                <a href="/investments" className="text-sm text-accent font-semibold hover:underline transition-colors">
                  view all
                </a>
              </div>
              <div className="w-full">
                <HomeInsiderTransactions />
              </div>
            </div>
            
            {/* Primary News Feed */}
            <div className="flex flex-col items-stretch w-full space-y-12">
              <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl">
                <LatestNews />
              </div>
              
              {/* <div className="border border-black/10 p-3 mr-2 rounded-xl w-full lg:row-start-1 lg:row-end-1">
                <StockNews />
              </div> */}
            </div>
          </div>

          {/* RIGHT SIDEBAR (Takes 3/12 columns) */}
          <div className="lg:col-span-3 flex flex-col items-stretch space-y-8 w-full ">

              <div className="w-full border border-black/10 p-3 mr-2 rounded-xl md:col-span-3 self-start">
                  <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                    Lithium Price Chart
                  </h1>
                  <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm w-full">
                    <TVLithiumCFD />
                  </div>
              </div>

              <div className="w-full border border-black/10 p-3 mr-2 rounded-xl">
                <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
                  Lithium Futures
                </h1>
                <TVLithium />
              </div>
              
              {/* <div className="border border-black/10 p-3 mr-2 rounded-xl">
                <Substacks />
              </div> */}
              
              <DailyNewsletterAd />
              <div className="border border-black/10 p-3 mr-2 rounded-xl">
                <DirectLithiumPrice />
              </div>
              
              <PopularIntradayReturn />
              
              
          </div>
          
        </div>

        {/* --- FULL WIDTH BREAKOUTS (Bottom Section) --- */}
        <div className="px-4 md:px-10 lg:px-12 w-full space-y-16">
          <div className="w-full block border border-black/10 p-3 mr-2 rounded-xl">
              <PressReleaseNews />
          </div>
          <div className="border p-3 mr-2 rounded-xl border-black/10 pt-10 w-full">
            <StockNews />
          </div>

          <div className="border border-black/10 p-3 mr-2 rounded-xl">
            <PopularTools />
          </div>

          <div className="border border-black/10 p-3 mr-2 rounded-xl">
            <Substacks />
          </div>

          <div className="border border-black/10 p-3 mr-2 rounded-xl pt-10 w-full">
            <MostPopularNews />
          </div>
        </div>
      </div>
      <div className=" border-black/10 pt-5 w-full">
          <MostFollowedStocksTable />
      </div>

      <div className="pb-10 w-full">
        <StayAhead />
      </div>

      <Footer />
    </div>
  );
};

export default home;
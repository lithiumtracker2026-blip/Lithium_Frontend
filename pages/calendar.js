import CalendarPage from "@/components/Calendar/CalendarPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import SEO from "@/components/SEO";

const calendar = () => {
  return (
    <div>
      <SEO
        title="Lithium Market Calendar — Key Events, Conferences & Industry Updates"
        description="Stay informed with the latest lithium market events. Track key industry conferences, earnings dates, financial updates, and supply-demand shifts with our comprehensive market calendar."
        keywords="lithium market calendar, lithium industry events, lithium conferences, lithium market updates, lithium financial events"
        canonicalUrl="https://www.lithiumtracker.com/calendar"
      />
      <Navbar />
      <CalendarPage />

      <div className="mt-10 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default calendar;

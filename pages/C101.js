import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";
import Content from "@/components/C101/Content"
import Section1 from "@/components/C101/Section1"
import Section2 from "@/components/C101/Section2"
import Section3 from "@/components/C101/Section3"
import Section4 from "@/components/C101/Section4"
import Section5 from "@/components/C101/Section5"
import Section6 from "@/components/C101/Section6"
import Section7 from "@/components/C101/Section7"
import Section8 from "@/components/C101/Section8"
import Section9 from "@/components/C101/Section9"
import Country from "@/components/C101/Country"
import Policy from "@/components/C101/Policy"
import Section10 from "@/components/C101/Section10"
import Section11 from "@/components/C101/Section11"
import Section12 from "@/components/C101/Section12"
import PriceConversionsSection from "@/components/C101/PriceConversionSection";
import LongTerm from "@/components/C101/LongTerm";
import Section13 from "@/components/C101/Section13"
import Section14 from "@/components/C101/Section14"
import Section15 from "@/components/C101/Section15"
import Section16 from "@/components/C101/Section16";
import Section17 from "@/components/C101/Section17"

const C101 = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Lithium 101 - Lithium Alloys Guide & Glossary"
        description="Explore the world of Lithium and its alloys with our comprehensive guide. Learn about lithium, brass, bronze, aluminum bronze, nickel silver, and beryllium lithium, their properties, uses, and market significance."
        keywords="Lithium 101, Lithium Alloys, lithium, brass, bronze, aluminum bronze, nickel silver, beryllium lithium, metal properties, lithium glossary, industrial metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/C101"
      />
      <Navbar />
      <div className="flex flex-col divide-y divide-bdr">
        <Content/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Country/>
        <Policy/>
        <Section10/>
        <Section11/>
        <Section12/>
        <PriceConversionsSection/>
        <LongTerm/>
        <Section13/>
        <Section14/>
        <Section15/>
        <Section16/>
        <Section17/>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default C101;
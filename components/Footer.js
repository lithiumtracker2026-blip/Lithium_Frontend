import React from "react";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <footer className="relative w-full h-fit bg-gray-900">
      {/* Main Footer Content */}
      <div className="w-full text-white bg-gray-900 relative container mx-auto px-4 md:px-4 lg:px-10 py-10">
        <div className="lg:w-[96%] w-full flex flex-col mx-auto px-3 space-y-10">

          {/* Top row: newsletter + mockup */}
          <div className="flex flex-col justify-between lg:flex-row">
            {/* Text Content */}
            <div className="text-start lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-[1.5rem] md:text-4xl font-semibold mb-6 md:leading-14 frank">
                Everything You Need to Navigate the Lithium Market – All in One Place
              </h1>
              <p className="text-xs sm:text-[13px] md:text-[14.5px] mb-8 text-white/70 leading-5 font-normal">
                Lithium is the cornerstone of the global energy transition — powering EV batteries,
                grid storage, and the shift away from fossil fuels. Sign up to receive
                data-driven insights, price updates, and market analysis every week.
              </p>
            </div>

            {/* Image Content */}
            <div className="hidden image-content mt-10 lg:mt-0 lg:w-[40%] md:flex overflow-hidden">
              <img
                src="/mockup.png"
                alt="mockup"
                className="scale-[1.1] object-cover w-full h-full object-center lg:ml-10"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Footer2 = () => {
  return (
    <div className="bg-accent text-white w-full py-8 pb-10">
      <div className="container flex flex-col justify-center items-center mx-auto text-center px-3 space-y-4">
        {/* Logo and Title */}
        <div className="w-full flex justify-center items-center mb-4">
          {/* Added margin-bottom (mb-6) for spacing */}
          <Image
            className=""
            src="/Lithium_Tracker_logo.png"
            alt="Lithium Tracker"
            width={140}
            height={10}
            priority
          />
        </div>

        {/* Contact Email */}
        <div className="flex flex-wrap justify-center items-center space-x-2 text-sm md:text-base">
          <MdEmail className="text-lg md:text-xl" />
          <span>info@lithiumtracker.com</span>
        </div>

        {/* Tracker Network Links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-white/70">
          <a href="https://www.lithiumtracker.com/" className="hover:text-white transition-colors">Lithium Tracker</a>
          <span className="text-white/30">·</span>
          <a href="https://www.coppertracker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Copper Tracker</a>
          <span className="text-white/30">·</span>
          <a href="https://www.nickelmetaltracker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nickel Metal Tracker</a>
          <span className="text-white/30">·</span>
          <a href="https://www.uraniumtracker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Uranium Tracker</a>
          <span className="text-white/30">·</span>
          <a href="https://www.pgmtracker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PGM Tracker</a>
          <span className="text-white/30">·</span>
          <a href="https://www.goldandsilvertracker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Gold &amp; Silver Tracker</a>
        </div>

        {/* Divider */}
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border-t border-white/40 my-4"></div>

        {/* Bottom Links */}
        <div className="text-xs md:text-sm lg:text-base flex flex-wrap justify-center space-x-2">
          <span>© 2026 Lithium Tracker</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Disclaimer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;

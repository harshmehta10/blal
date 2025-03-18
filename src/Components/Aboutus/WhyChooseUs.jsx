import React from "react";
import doc from "../../assets/images/aboutusdoc.png";
import bg from "../../assets/Svg/bg.svg";

const WhyChooseUs = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 py-12">
      {/* Main row: left image(s) + right text */}
      <div className="flex items-center justify-between gap-28">
        {/* LEFT SIDE: Doctor image with background shape */}
        <div className="relative w-1/2 ">
          {/* The SVG shape behind */}

          {/* The doctor image in front */}
          <img src={doc} alt="doctor" className=" w-full h-full " />
        </div>

        {/* RIGHT SIDE: Heading, paragraph, and button */}
        <div className=" space-y-6 w-1/2">
          <h1 className="font-inter font-medium text-40">Why Choose Us?</h1>
          <p className="font-inter text-[#97979A] font-normal text-sm lg:text-base leading-relaxed max-w-[590px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore.
          </p>
          <button className="rounded-xl py-4 px-8  font-inter font-medium text-white text-sm lg:text-base bg-gradient-to-b from-[#46BB00] to-[#3B9D00]  hover:from-[#01635A] hover:to-[#01635A] transition-colors duration-500 shadow-2xl cursor-pointer">
            Book Lab Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";
import director from "../../assets/images/director.png";
import bg from "../../assets/Svg/bg.svg";

const DirectorMessage = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-12 py-12 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
          <div className="space-y-8 max-w-[590px] order-last lg:order-first">
            <h1 className="font-inter font-medium text-40">
              Director’s Message
            </h1>
            <div className="space-y-5">
              <p className="font-inter font-normal text-sm lg:text-base text-[#97979A]">
                While providing clinical investigation services, quality is an
                important criterion. We are committed to maintain excellence in
                all our services, ensuring patient satisfaction.
              </p>
              <p className="font-inter font-normal text-sm lg:text-base text-[#97979A]">
                Our contribution to the overall Diagnostic Pathology industry
                and continuous pursuit towards a vision of providing quality
                healthcare services in India is our goal and everyday mission.
              </p>
              <p className="font-inter font-normal text-sm lg:text-base text-[#97979A]">
                For you, we will continue to work with the passion on our
                mission to contribute significantly in health care of the
                society by providing efficient, timely and affordable patient
                care services.
              </p>
            </div>
            <button className="font-inter font-medium text-sm lg:text-base text-white rounded-xl py-4 px-8 bg-gradient-to-b to-[#3B9D00] from-[#46BB00]  hover:from-[#01635A] hover:to-[#01635A] transition-colors duration-500 shadow-2xl cursor-pointer">
              Learn More
            </button>
          </div>
          <div className="relative w-3/4 h-[500px] order-first lg:order-last">
            {/* The SVG shape behind */}
            <img
              src={bg}
              alt="background shape"
              className="absolute top-0 lg:top-10 right-0 lg:-right-10 w-full h-full lg:h-[90%] object-contain"
            />
            <img
              src={director}
              alt="doctor"
              className="absolute -top-12 lg:-top-16 right-0 lg:-right-10 w-full h-full lg:h-[110%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;

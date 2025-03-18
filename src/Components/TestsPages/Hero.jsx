import React from "react";
import females from "../../assets/images/females.png";
import star from "../../assets/Svg/starmedal.svg";
import collection from "../../assets/Svg/collection.svg";
import clock from "../../assets/Svg/whiteclock.svg";

const Hero = () => {
  return (
    <div className="bg-[#01635A]">
      <div className="max-w-screen-2xl mx-auto py-8 lg:py-12 px-6 lg:px-12  relative overflow-hidden">
        <div className="flex  flex-col lg:flex-row  items-center pt-5">
          <div className="space-y-7 flex flex-col justify-center lg:w-[70%]">
            <h1 className="text-white font-inter font-semibold text-2xl md:text-3xl lg:text-5xl ">
              Heart
            </h1>
            <p className="font-inter font-medium text-sm lg:text-base text-white/60">
              Access Heart Wellness through essential tests
            </p>
            <div className="flex flex-col lg:flex-row text-white gap-8 lg:gap-12">
              <div className="flex gap-2">
                <img src={star} alt="" />
                <div>
                  <h1 className="font-medium text-[#E1FBA6] font-inter text-xs lg:text-sm">
                    NABL certified
                  </h1>
                  <p className="font-inter font-normal text-xs lg:text-sm text-white">
                    In-house labs
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={collection} alt="" />
                <div>
                  <h1 className="font-medium text-[#E1FBA6] font-inter text-xs lg:text-sm">
                    6 AM - 10 PM
                  </h1>
                  <p className="font-inter font-normal text-xs lg:text-sm text-white">
                    60 mins collection
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={clock} alt="" />
                <div>
                  <h1 className="font-medium text-[#E1FBA6] font-inter text-xs lg:text-sm">
                    6 hrs
                  </h1>
                  <p className="font-inter font-normal text-xs lg:text-sm text-white">
                    Report Generation Time
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[999] h-[200px] lg:h-auto w-full lg:w-[30%]">
            <img
              src={females}
              alt="females"
              className="absolute left-0 right-auto lg:left-auto lg:right-0 top-10 lg:-top-32 max-h-none max-w-none w-[90%] lg:w-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

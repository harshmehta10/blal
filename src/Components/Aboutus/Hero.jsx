import React from "react";
import hero2 from "../../assets/images/hero2.png";
import mag from "../../assets/Svg/magni.svg";

const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto py-4 px-8 lg:px-12 bg-[#01635A] h-[600px] flex items-center relative overflow-hidden">
        <div className="flex  flex-col lg:flex-row ">
          <div className="space-y-7">
            <div className="space-y-7">
              <h1 className="text-white font-inter font-semibold text-2xl md:text-3xl lg:text-5xl ">
                Lab Tests/ Blood Tests at Home with Free Sample Collection
              </h1>
              <p className="font-inter font-medium text-sm lg:text-base text-white/60">
                Enjoy the experience of a high-quality diagnostic lab from the
                comfort of your home
              </p>
              <div className="flex text-white gap-12">
                <div>
                  <h1 className="font-bold text-sm lg:text-lg font-inter">
                    NABL certified
                  </h1>
                  <p className="font-medium text-xs lg:text-sm opacity-60 font-inter">
                    In-house labs
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-sm lg:text-lg font-inter">
                    6 AM - 10 PM
                  </h1>
                  <p className="font-medium text-xs lg:text-sm opacity-60 font-inter">
                    60 mins collection
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-sm lg:text-lg font-inter">
                    6 hrs
                  </h1>
                  <p className="font-medium text-xs lg:text-sm opacity-60 font-inter">
                    Report Generation Time
                  </p>
                </div>
              </div>
            </div>
            <div className="flex bg-white max-w-[482px] rounded-[75px] justify-between items-center px-1">
              <img src={mag} alt="" className="px-2" />
              <input
                type="text"
                className="bg-transparent py-4 rounded-[75px]  font-inter placeholder-[#C1C1C1] "
                placeholder="Lorem ipsum dolor..."
              />
              <button
                className="text-white text-base font-inter font-medium bg-[#68B92E] shadow-[inset_-4px_4px_10px_0px_rgba(255,_255,_255,_0.29)] py-3
                     px-8 rounded-[37px]"
              >
                Search
              </button>
            </div>
          </div>
          <div className="relative z-[999] w-full ">
            <img
              src={hero2}
              alt=""
              className="absolute -left-40 -top-16 max-h-none max-w-none  w-[900px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

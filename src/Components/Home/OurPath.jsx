import React from "react";
import journey from "../../assets/images/journey.png";
import smwhite from "../../assets/Svg/smwhiterr.svg";
import elipise from "../../assets/Svg/elepise.svg";

const OurPath = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-8 py-7 space-y-14.5">
        <div
          className="flex justify-center text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="text-[#004039] font-inter font-medium text-40 max-w-[766px]">
            Our Path to Excellence in Healthcare Spanning Cities & Milestones
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6">
          <div className="w-full  lg:w-1/2 ">
            <div className="h-1/2">
              <img
                src={journey}
                alt=""
                className="object-cover w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="bg-[#01635A] space-y-5 px-10 py-7.5 rounded-b-2xl relative h-1/2 overflow-hidden">
              {/* <div className="bg-linear-240 from-[#46BB00]/0 from-0% via-[#46BB00] via-50% opacity-30 to-[#46BB00]/0 to-100%   absolute w-full h-full inset-0"></div> */}
              <div className="">
                <img
                  src={elipise}
                  alt="bgelipse"
                  className="absolute w-full left-0 -bottom-40"
                />
              </div>
              <h1 className=" text-[#E1FBA6] font-inter font-medium text-2xl lg:text-[32px] relative z-50">
                Our Journey
              </h1>
              <p className="max-w-[565px] text-white font-inter font-normal text-sm lg:text-lg relative z-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore quis amet lorem solor quilei
                sit consectrum elit sue lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod
              </p>
              <div className="group flex btn1 hover:!bg-[#01635A] transition-colors duration-500 cursor-pointer  px-4 lg:px-8 py-3 lg:py-4 rounded-xl gap-4 lg:gap-2.5 w-[150px] lg:w-[166px] relative z-50 ">
                <button className="text-white cursor-pointer font-inter font-medium whitespace-nowrap">
                  Learn More
                </button>
                <img
                  src={smwhite}
                  alt="arrow"
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 w-full lg:w-1/2 flex flex-col justify-between">
            <div className="bg-[#01635A] px-10 py-9 rounded-2xl space-y-6 relative overflow-hidden">
              {/* <div className="bg-linear-240 from-[#46BB00]/0 from-0% via-[#46BB00] via-50% opacity-30 to-[#46BB00]/0 to-100%   absolute w-full h-full inset-0"></div> */}

              <div className="">
                <img
                  src={elipise}
                  alt="bgelipse"
                  className="absolute w-full left-0 -bottom-40"
                />
              </div>

              <h1 className="text-[#E1FBA6] font-inter font-medium text-2xl lg:text-[32px] relative z-50">
                A Legacy Of Excellence
              </h1>
              <p className="text-white font-inter font-normal text-sm lg:text-lg max-w-[565px] relative z-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore quis amet lorem solor quilei
                sit consectrum elit sue
              </p>
              <div className="flex flex-col lg:flex-row gap-10 relative z-50">
                <div>
                  <p className="text-[#E1FBA6] font-inter font-bold text-sm  xl:text-base 2xl:text-lg">
                    31+
                  </p>
                  <p className="text-white font-inter font-normal text-sm  xl:text-base 2xl:text-lg">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <p className="text-[#E1FBA6] font-inter font-bold text-sm  xl:text-base 2xl:text-lg">
                    100+
                  </p>
                  <p className="text-white font-inter font-normal text-sm  xl:text-base 2xl:text-lg">
                    Collection Centers
                  </p>
                </div>
                <div>
                  <p className="text-[#E1FBA6] font-inter font-bold text-sm  xl:text-base 2xl:text-lg">
                    1500+
                  </p>
                  <p className="text-white font-inter font-normal text-sm  xl:text-base 2xl:text-lg">
                    Different Tests
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#01635A] relative   px-10 py-9 rounded-2xl  space-y-6 overflow-hidden">
              {/* <div className="bg-linear-240 from-[#46BB00]/0 from-0% via-[#46BB00] via-50% opacity-30 to-[#46BB00]/0 to-100%   absolute w-full h-full inset-0"></div> */}
              <div className="">
                <img
                  src={elipise}
                  alt="bgelipse"
                  className="absolute w-full left-0 -bottom-48"
                />
              </div>
              <h1 className="text-[#E1FBA6] font-inter font-medium text-2xl lg:text-[32px] relative z-50">
                How it works?
              </h1>
              <p className="text-white font-inter font-normal text-sm lg:text-lg max-w-[565px] relative z-50">
                Lorem ipsum dolor sit amet, consectetur adipis elit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 justify-between relative z-50">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#E1FBA6] size-7 rounded-[72px] flex justify-center items-center">
                    <h1 className="text-[#125A2D] font-inter font-medium text-xs  xl:text-base 2xl:text-lg  ">
                      1
                    </h1>
                  </div>
                  <p className="text-white font-inter  font-normal text-sm  xl:text-base 2xl:text-lg ">
                    Select tests
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-[#E1FBA6] size-7 rounded-[72px] flex justify-center items-center">
                    <h1 className="text-[#125A2D] font-inter font-medium text-xs  xl:text-base 2xl:text-lg  ">
                      2
                    </h1>
                  </div>
                  <p className="text-white font-inter  font-normal text-sm  xl:text-base 2xl:text-lg ">
                    Add your details
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-[#E1FBA6] size-7 rounded-[72px] flex justify-center items-center">
                    <h1 className="text-[#125A2D] font-inter font-medium text-sm  xl:text-base 2xl:text-lg ">
                      3
                    </h1>
                  </div>
                  <p className="text-white font-inter  font-normal text-sm  xl:text-base 2xl:text-lg ">
                    Book your slot
                  </p>
                </div>
              </div>

              <div className="group flex btn1 hover:!bg-[#01635A] transition-colors duration-500 cursor-pointer  px-4 lg:px-8 py-3 lg:py-4 rounded-xl gap-4 lg:gap-2.5 w-[150px] lg:w-[166px] relative z-50 ">
                <button className="text-white text-sm lg:text-base cursor-pointer font-inter ">
                  Order now
                </button>
                <img
                  src={smwhite}
                  alt="arrow"
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPath;

import React from "react";
import journey from "../../assets/images/journey.png";
import smwhite from "../../assets/Svg/smwhiterr.svg";

const OurPath = () => {
  return (
    <div>
      <div className=" mx-auto px-8 py-7 space-y-14.5">
        <div className="flex justify-center text-center ">
          <h1 className="text-[#004039] font-inter font-medium text-40 max-w-[766px]">
            Our Path to Excellence in Healthcare Spanning Cities & Milestones
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6">
          <div className="w-full  lg:w-1/2 ">
            <div>
              <img src={journey} alt="" className="object-cover w-full" />
            </div>
            <div className="bg-[#01635A] space-y-5 px-10 py-7.5 rounded-b-2xl">
              <h1 className=" text-[#E1FBA6] font-inter font-medium text-2xl lg:text-[32px]">
                Our Journey
              </h1>
              <p className="max-w-[565px] text-white font-inter font-normal text-sm lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore quis amet lorem solor quilei
                sit consectrum elit sue lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod
              </p>
              <div className="bg-[#68B92E] flex px-8 py-4 rounded-xl gap-2.5 w-[166px]">
                <button className="text-white">Learn More</button>
                <img src={smwhite} alt="" />
              </div>
            </div>
          </div>
          <div className="space-y-6 w-full lg:w-1/2">
            <div className="bg-[#01635A] px-10 py-9 rounded-2xl space-y-6">
              <h1 className="text-[#E1FBA6] font-inter font-medium text-2xl lg:text-[32px]">
                A Legacy Of Excellence
              </h1>
              <p className="text-white font-inter font-normal text-sm lg:text-lg max-w-[565px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore quis amet lorem solor quilei
                sit consectrum elit sue
              </p>
              <div className="flex flex-col lg:flex-row gap-10">
                <div>
                  <p className="text-[#E1FBA6] font-inter font-bold text-sm lg:text-lg">
                    31+
                  </p>
                  <p className="text-white font-inter font-normal text-sm lg:text-lg">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <p className="text-[#E1FBA6] font-inter font-bold text-sm lg:text-lg">
                    100+
                  </p>
                  <p className="text-white font-inter font-normal text-sm lg:text-lg">
                    Collection Centers
                  </p>
                </div>
                <div>
                  <p className="text-[#E1FBA6] font-inter font-bold text-sm lg:text-lg">
                    1500+
                  </p>
                  <p className="text-white font-inter font-normal text-sm lg:text-lg">
                    Different Tests
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#01635A] px-10 py-9 rounded-2xl  space-y-6">
              <h1 className="text-[#E1FBA6] font-inter font-medium text-2xl lg:text-[32px]">
                How it works?
              </h1>
              <p className="text-white font-inter font-normal text-sm lg:text-lg max-w-[565px]">
                Lorem ipsum dolor sit amet, consectetur adipis elit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex gap-2 items-center">
                  <h1 className="text-[#125A2D] font-inter font-medium text-xs lg:text-lg bg-[#E1FBA6] py-1 px-2 rounded-[72px] ">
                    1
                  </h1>
                  <p className="text-white font-inter  font-normal text-sm lg:text-lg">
                    Select tests
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-[#125A2D] font-inter font-medium text-xs lg:text-base bg-[#E1FBA6] py-1 px-2 rounded-[72px]">
                    2
                  </h1>
                  <p className="text-white font-inter  font-normal text-sm lg:text-lg">
                    Add your details
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-[#125A2D] font-inter font-medium text-xs lg:text-base bg-[#E1FBA6] py-1 px-2 rounded-[72px]">
                    3
                  </h1>
                  <p className="text-white font-inter  font-normal text-sm lg:text-lg">
                    Book your slot
                  </p>
                </div>
              </div>
              <div className="flex bg-[#68B92E] px-4 lg:px-8 py-3 lg:py-4 rounded-xl gap-4 lg:gap-2.5 w-[150px] lg:w-[166px]">
                <button className="text-white text-sm lg:text-base">
                  Order now
                </button>
                <img src={smwhite} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPath;

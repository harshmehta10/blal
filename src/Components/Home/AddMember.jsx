import React from "react";
import family from "../../assets/images/family.png";
import yellowright from "../../assets/Svg/yellowright.svg";
import prev from "../../assets/Svg/greenprev.svg";
import next from "../../assets/Svg/greenrght.svg";
import bgflim from "../../assets/Svg/bgflim.svg";
const AddMember = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className=" bg-[#01635A] px-28 rounded-2xl relative py-16 overflow-hidden">
          <div className="bg-gradient-to-br from-[#B7FA36]/0 from-40% to-[#B7FA36] opacity-50 absolute w-full h-full inset-0"></div>
          <div className="w-full h-full absolute z-[999] inset-0 ">
            <img src={bgflim} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col lg:flex-row  items-center ">
            <div className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                <h1 className="font-inter font-bold text-white whitespace-nowrap text-lg lg:text-[32px] ">
                  Add a family Member
                </h1>
                <p className="font-inter font-bold  whitespace-nowrap text-[#E1FBA6] text-40 ">
                  Get 30% OFF
                </p>
              </div>
              <p className="font-inter font-normal text-sm lg:text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur{" "}
              </p>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex py-4 px-4 bg-white/25 rounded-[12px] gap-2 border border-white/15">
                  <p className="font-inter font-bold text-sm lg:text-xl text-white">
                    Use Code:
                  </p>
                  <p className="font-inter font-bold text-sm lg:text-xl text-[#E1FBA6]">
                    FAMILY
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="text-[#E1FBA6] text-xl font-inter font-medium  border-b-2">
                    Book Now
                  </button>
                  <img src={yellowright} alt="" />
                </div>
              </div>
              <p className="text-white text-xs font-inter font-bold">
                on min order value of ₹2000
              </p>
            </div>
            <div className="relative z-[999] w-full hidden lg:block ">
              <img
                src={family}
                alt=""
                className="absolute left-0 -top-44 max-h-none max-w-none  w-[800px] "
              />
            </div>
          </div>
          <div className="cursor-pointer ">
            <img
              src={prev}
              alt=""
              className="px-2.5 py-3 rounded-[203px] bg-gradient-to-b to-[white] absolute left-5  -translate-y-1/2 top-1/2 "
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={next}
              alt=""
              className="px-2.5 py-3 rounded-[203px] bg-gradient-to-b to-[white] absolute right-5  -translate-y-1/2 top-1/2 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember;

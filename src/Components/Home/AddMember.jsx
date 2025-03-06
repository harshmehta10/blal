import React from "react";
import family from "../../assets/images/family.png";
import yellowright from "../../assets/Svg/yellowright.svg";
import prev from "../../assets/Svg/greenprev.svg";
import next from "../../assets/Svg/greenrght.svg";
import bgflim from "../../assets/Svg/bgflim.svg";
const AddMember = () => {
  return (
    <>
      <div className="max-w-screen mx-auto px-8 py-12">
        <div className=" bg-[#01635A] px-20 rounded-2xl relative py-5 overflow-hidden">
          <div className="w-full h-full absolute z-[999] inset-0 ">
            <img src={bgflim} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col lg:flex-row  items-center ">
            <div className="space-y-5">
              <div className="flex flex-col lg:flex-row items-center gap-2.5">
                <h1 className="font-inter font-bold text-white text-[32px] ">
                  Add a family Member
                </h1>
                <p className="font-inter font-bold  text-[#E1FBA6] text-[40px] ">
                  Get 30% OFF
                </p>
              </div>
              <p className="font-inter font-normal text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur{" "}
              </p>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex py-4 px-4 bg-white/25 rounded-[12px] gap-2 border border-white/15">
                  <p className="font-inter font-bold text-xl text-white">
                    Use Code:
                  </p>
                  <p className="font-inter font-bold text-xl text-[#E1FBA6]">
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
            <div className="relative z-[999] w-full  ">
              <img
                src={family}
                alt=""
                className="absolute left-0 -top-44 max-h-none max-w-none  w-[800px] "
              />
            </div>
          </div>

          <img
            src={prev}
            alt=""
            className="px-2.5 py-3 rounded-[203px] bg-gradient-to-b to-[white] absolute left-5 top-44"
          />
          <img
            src={next}
            alt=""
            className="px-2.5 py-3 rounded-[203px] bg-gradient-to-b to-[white] absolute right-5 top-44"
          />
        </div>
      </div>
    </>
  );
};

export default AddMember;

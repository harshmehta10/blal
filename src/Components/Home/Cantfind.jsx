import React from "react";
import whatsapp from "../../assets/Svg/whatsapp.svg";
import doc from "../../assets/images/doc.png";
import bgflim from "../../assets/Svg/bgflim.svg";

const Cantfind = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8 py-8 overflow-hidden">
        <div className="relative  bg-[#01635A] px-10 py-12 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-[#B7FA36]/0 from-40% to-[#B7FA36] opacity-50 absolute w-full h-full inset-0"></div>
          <div className="w-full h-full absolute z-[999] inset-0 ">
            <img src={bgflim} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col lg:flex-row  items-center ">
            <div className="font-inter space-y-9 lg:w-[70%]">
              <div className="space-y-5">
                <h1 className="font-inter font-medium text-2xl lg:text-[40px] text-white">
                  Can’t find what you’re looking for?
                </h1>
                <p className="font-inter font-normal text-sm lg:text-base text-white  lg:max-w-[641px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur{" "}
                </p>
              </div>
              <div className="bg-[#68B92E] flex gap-2.5 px-8 py-4 rounded-xl w-[287px] cursor-pointer relative z-[999]">
                <img
                  src={whatsapp}
                  alt="whatsapp logo"
                  className="cursor-pointer"
                />
                <button className="text-white font-inter font-medium text-sm lg:text-base cursor-pointer">
                  Contact us on Whatsapp
                </button>
              </div>
            </div>

            <div className="relative z-[999] h-[200px] lg:h-auto w-full lg:w-[30%] ">
              <img
                src={doc}
                alt=""
                className="absolute -left-8 lg:-left-20 top-20 lg:-top-36 max-h-none max-w-none w-[300px] lg:w-[500px] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cantfind;

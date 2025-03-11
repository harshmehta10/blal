import React from "react";
import blood from "../../assets/Svg/blood.svg";
import preparation from "../../assets/Svg/preparation.svg";
import sampleshome from "../../assets/Svg/sampleshome.svg";
import tick from "../../assets/Svg/tickresults.svg";
import whitemicro from "../../assets/Svg/whitemicro.svg";
import discount from "../../assets/Svg/discount.svg";

const BookBlood = () => {
  const sample = [
    {
      icon: blood,
      title: "Sample Required",
      para: "Blood",
    },
    {
      icon: blood,
      title: "Gender",
      para: "Both",
    },
    {
      icon: blood,
      title: "Age Group",
      para: "7 Years and above",
    },
    {
      icon: preparation,
      title: "Preperations Required",
      para: "Fasting is not Required",
    },
  ];
  const tests = [
    {
      icon: sampleshome,
      title: "Home Sample",
      para: "collection",
    },
    {
      icon: whitemicro,
      title: "7 tests",
      para: "included",
    },
    {
      icon: tick,
      title: "Results within",
      para: "6 hours",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-[#01635A]  px-5 py-5 rounded-2xl space-y-5">
        <h1 className="text-white font-inter font-medium text-base lg:text-lg  max-w-[431px]">
          Book Blood Group ABO & RH Factor (Blood Grouping) Test at Home in
          Bangalore + Reports in 6 Hours
        </h1>
        <hr className="max-w-[452px] text-white/15" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sample.map((item, index) => (
            <div key={index} className="flex gap-2">
              <img
                src={item.icon}
                alt=""
                className={`${
                  index === 2 ? "p-1.5" : "p-2"
                } bg-white/15 rounded-lg`}
              />
              <div>
                <h1 className="text-[#E1FBA6] font-inter font-medium text-sm">
                  {item.title}
                </h1>
                <p className="text-white font-inter font-normal text-xs">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#46BB00] to-[#3B9D00] rounded-t-xl px-5 py-4.5 space-y-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <p className="text-white/50 font-inter font-semibold text-lg lg:text-2xl line-through">
                  ₹ 500
                </p>
                <p className="text-white font-inter font-semibold text-lg lg:text-2xl">
                  ₹ 350
                </p>
              </div>
              <div className="">
                <button className="bg-[#F1F6EE] px-4 lg:px-6 py-2 lg:py-3 rounded-lg">
                  <p className="text-[#3FA801] font-inter font-semibold text-xs lg:text-base">
                    Add to Cart
                  </p>
                  <img src="" alt="" />
                </button>
              </div>
            </div>
            <hr className="text-[#FFFFFF3D] h-0.5" />
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:justify-between">
              {tests.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div>
                    <img
                      src={item.icon}
                      alt=""
                      className="px-2 py-2 bg-[#FFFFFF3D] rounded-lg"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#E1FBA6] font-inter font-normal text-sm">
                      {item.title}
                    </h1>
                    <p className="text-white font-inter font-normal text-xs">
                      {item.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F1F6EE] rounded-b-xl flex flex-col lg:flex-row items-center justify-center gap-4 py-3.5">
            <div className="flex items-center gap-2">
              <img src={discount} alt="" />
              <p className="font-inter font-semibold text-xs lg:text-sm text-[#4B4B59]">
                20% OFF <span></span>
                <span className="font-inter font-normal text-xs lg:text-sm text-[#4B4B59]">
                  on 1st order above
                </span>{" "}
                ₹500
              </p>
            </div>
            <div className="flex px-2 py-1.5 bg-gradient-to-b from-[#88D16E] to-[#239706] border border-[#CCE0C4] rounded-lg ">
              <p className="text-[#29644A] font-inter font-normal text-xs">
                Use Code:
              </p>
              <p className="text-[#29644A] font-inter font-semibold text-xs">
                BLAL20
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBlood;

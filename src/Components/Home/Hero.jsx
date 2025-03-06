import React from "react";
import bg from "../../assets/images/bg.png";
import mag from "../../assets/Svg/magni.svg";
import book from "../../assets/Svg/book.svg";
import report from "../../assets/Svg/report.svg";
import upload from "../../assets/Svg/upload.svg";
import card from "../../assets/Svg/card.svg";
import arright from "../../assets/Svg/arright.svg";
const Hero = () => {
  const frame = [
    {
      text: "Book Home Collection",
      para: "Book Now",
      icon: book,
      arrow: arright,
    },
    {
      text: "View My Reports",
      para: "View All",
      icon: report,
      arrow: arright,
    },
    {
      text: "Upload Prescription",
      para: "Upload File",
      icon: upload,
      arrow: arright,
    },
    {
      text: "Membership Cards",
      para: "View Details",
      icon: card,
      arrow: arright,
    },
  ];
  return (
    <>
      <div className=" mx-auto py-4 px-12 bg-[#01635A] h-[600px] flex items-center relative">
        <div className="flex  flex-col lg:flex-row ">
          <div className="space-y-7">
            <button className="rounded-[25px] text-white border py-2.5 px-2.5 font-inter  text-xs font-normal ">
              #1 lab in Rajasthan
            </button>
            <div className="space-y-7">
              <h1 className="text-white font-inter font-semibold text-5xl ">
                India’s largest doorstep diagnostic service provider
              </h1>
              <div className="flex text-white f gap-12">
                <div>
                  <h1 className="font-bold text-lg font-inter">NABL</h1>
                  <p className="font-medium text-sm opacity-60 font-inter">
                    Certified Labs
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-lg font-inter">4.8/5</h1>
                  <p className="font-medium text-sm opacity-60 font-inter">
                    Google Rating
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-lg font-inter">400000+</h1>
                  <p className="font-medium text-sm opacity-60 font-inter">
                    Customers
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
              src={bg}
              alt=""
              className="absolute -left-40 -top-28 max-h-none max-w-none  w-[1000px] "
            />
          </div>
        </div>

        <div className=" absolute z-[999] left-16 -bottom-14 bg-transparent backdrop-blur-[52px] py-5 px-5 rounded-[12px]  ">
          {/* <div className="w-full h-full absolute inset-0 bg-white rounded-[12px] z-0 blur-2xl"></div> */}
          <div className="grid grid-cols-4 gap-10  relative z-[999] ">
            {frame.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white py-6 px-7 rounded-[7px] border border-[#68B92E]"
              >
                <img src={item.icon} alt="" />
                <div>
                  <h1 className="text-base font-inter font-medium text-[#1E1E2F]">
                    {item.text}
                  </h1>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-inter font-medium  text-[#4B4B59]">
                      {item.para}
                    </p>
                    <img src={item.arrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

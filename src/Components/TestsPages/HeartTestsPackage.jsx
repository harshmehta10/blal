import React from "react";
import dropdown from "../../assets/Svg/bluedropdown.svg";
import whitemicro from "../../assets/Svg/whitemicro.svg";
import tickresults from "../../assets/Svg/tickresults.svg";
import monika from "../../assets/images/monika.png";
import saksham from "../../assets/images/saksham.png";
import young from "../../assets/images/young.png";
import redlady from "../../assets/images/redlady.png";
import neck from "../../assets/images/neck.png";
import older1 from "../../assets/images/older1.png";
import older2 from "../../assets/images/older2.png";

const HeartTestsPackage = () => {
  const body = [
    {
      photo: monika,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: saksham,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: young,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: redlady,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: neck,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: older1,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: monika,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
    {
      photo: older2,
      title: "Carcinoembryonic Antigen",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        { icon: whitemicro, review: "7 tests", remain: "included" },
        { icon: tickresults, review: "Results within", remain: "6 Hours" },
      ],
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-medium text-40">
          Heart Tests/ Packages
        </h1>
        <button className="border border-[#CCCCCC] py-3 px-4 flex items-center gap-8 rounded-lg">
          <p className="text-[#1E1E2F] font-inter font-normal text-sm lg:text-base">
            Packages
          </p>
          <img src={dropdown} alt="dropdown icon" />
        </button>
      </div>

      <div className="space-y-6 mt-8">
        {/* 4-column grid for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {body.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow">
              {/* Top portion: white background with image + hover overlay */}
              <div className="relative bg-[#F1F6EE] group h-[186px] ">
                <img src={item.photo} alt="photos" className="" />

                {/* Hover text overlay (only over the image container) */}
                <div className="absolute inset-0 bg-[#01635A] bg-opacity-70 flex items-center justify-center text-center px-5 py-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-inter font-normal text-[#FFFFFFB2] text-sm lg:text-base">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Bottom portion: gradient background */}
              <div className="space-y-5 bg-gradient-to-b from-[#01635A] to-[#3B9D00] px-6 py-5 relative z-50">
                {/* Title + Pricing */}
                <div className="flex justify-between">
                  <p className="text-white font-inter max-w-[98px] text-sm lg:text-base font-medium">
                    {item.title}
                  </p>
                  <div className="space-y-1 text-right">
                    <div className="flex gap-2">
                      <p className="font-inter font-semibold line-through text-[#FFFFFF80] text-sm lg:text-base">
                        {item.beforeprice}
                      </p>
                      <p className="font-inter font-semibold text-white text-sm lg:text-base">
                        {item.afterprice}
                      </p>
                    </div>
                    <p className="border border-[#E1FBA6] text-[#E1FBA6] px-2 py-1 rounded-lg bg-[#FFFFFF1A] inline-block text-xs font-inter">
                      {item.discount}
                    </p>
                  </div>
                </div>

                <hr className="text-[#FFFFFF5E]" />

                {/* Additional Info (tests, hours) */}
                <div className="flex justify-between items-center">
                  {item.others.map((other, i) => (
                    <div key={i} className="flex gap-2">
                      <img
                        src={other.icon}
                        alt="icons"
                        className="p-2 bg-[#FFFFFF3D] rounded-lg"
                      />
                      <div>
                        <p className="text-[#E1FBA6] font-inter font-normal text-xs lg:text-sm">
                          {other.review}
                        </p>
                        <p className="text-white font-inter font-normal text-xs">
                          {other.remain}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="text-[#FFFFFF5E]" />

                {/* Buttons */}
                <div className="flex items-center justify-between">
                  <button className="border border-[#F6F6F6] text-white py-2 px-3.5 lg:px-4.5 font-inter font-medium text-xs lg:text-sm rounded-xl">
                    View Test Details
                  </button>
                  <button className="bg-[#46BB00] text-white font-inter font-medium text-xs lg:text-sm py-2 px-3.5 rounded-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View All Tests" button at the bottom */}
        <div className="flex justify-center">
          <button className="btn1 text-white font-inter font-medium text-sm py-3 px-6 rounded-xl cursor-pointer">
            View All Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeartTestsPackage;

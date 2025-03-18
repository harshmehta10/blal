import React from "react";
import whitemicro from "../../assets/Svg/whitemicro.svg";
import tickresults from "../../assets/Svg/tickresults.svg";

const Fullbody = () => {
  const body = [
    {
      title: "Full Body Checkup",
      beforeprice: "₹ 500",
      afterprice: "₹ 350",
      discount: "20% off",
      others: [
        {
          icon: whitemicro,
          review: "7 tests ",
          remain: "included",
        },
        {
          icon: tickresults,
          review: "Results within ",
          remain: "6 Hours",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-b from-[#01635A] to-[#3B9D00] px-6 py-5 rounded-xl cursor-pointer">
        {body.map((item, index) => (
          <div key={index} className="space-y-5">
            <div className="flex justify-between">
              <div>
                <p className="text-white font-inter max-w-[98px] text-base font-medium">
                  {item.title}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex gap-2">
                  <p className="font-inter font-semibold line-through text-[#FFFFFF80] text-base">
                    {item.beforeprice}
                  </p>
                  <p className="font-inter font-semibold  text-white text-base">
                    {item.afterprice}
                  </p>
                </div>
                <div>
                  <p className="border border-[#E1FBA6] text-[#E1FBA6] px-2 py-1 rounded-lg bg-[#FFFFFF1A] font-inter">
                    {item.discount}
                  </p>
                </div>
              </div>
            </div>
            <hr className="text-[#FFFFFF5E]" />
            <div className="flex justify-between items-center">
              {item.others.map((items, i) => (
                <div key={i} className="flex gap-2">
                  <img
                    src={items.icon}
                    alt=""
                    className="p-2 bg-[#FFFFFF3D] rounded-lg"
                  />
                  <div>
                    <p className="text-[#E1FBA6] font-inter font-normal text-sm">
                      {items.review}
                    </p>
                    <p className="text-white font-inter font-normal text-xs">
                      {items.remain}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="text-[#FFFFFF5E]" />
            <div className="flex  items-center justify-between">
              <button className="border border-[#F6F6F6] text-white py-2 px-4.5 font-inter font-medium text-sm rounded-xl">
                View Test Details
              </button>
              <button className="btn1  text-white font-inter font-medium text-sm py-2 px-3.5 rounded-xl">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fullbody;

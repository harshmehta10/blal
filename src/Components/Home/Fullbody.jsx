import React from "react";
import dropdown from "../../assets/Svg/dropdown.svg";
import vital from "../../assets/Svg/vitalpackage.svg";
import complete from "../../assets/Svg/completepackage.svg";
import premium from "../../assets/Svg/premiumpackage.svg";
import arrowright from "../../assets/Svg/rightwhitearr.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vector from "../../assets/Svg/vector.svg";
import dot from "../../assets/Svg/dot.svg";
import prev from "../../assets/Svg/prev.svg";
import next from "../../assets/Svg/next.svg";

const Fullbody = () => {
  const Checkup = [
    {
      icon: complete,
      title: "Complete Suraksha Package",
      para: "11 Tests Included",
      beforeprice: "₹500",
      afterprice: "₹350",
      discount: "20% off",
      btn: "View Package Details",
      cart: "Add to Cart",
      arrow: arrowright,
      bullet: dot,
    },
    {
      icon: premium,
      title: "Premium Suraksha Package",
      para: "11 Tests Included",
      beforeprice: "₹500",
      afterprice: "₹350",
      discount: "20% off",
      btn: "View Package Details",
      cart: "Add to Cart",
      arrow: arrowright,
      bullet: dot,
    },
    {
      icon: vital,
      title: "Vital Suraksha Package",
      para: "11 Tests Included",
      beforeprice: "₹500",
      afterprice: "₹350",
      discount: "20% off",
      btn: "View Package Details",
      cart: "Add to Cart",
      arrow: arrowright,
      bullet: dot,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" mx-auto px-8 py-16 space-y-10 overflow-hidden">
        <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
          <h1 className="font-inter font-medium text-xl lg:text-[40px] text-[#004039] ">
            Full Body Checkup Packages
          </h1>
          <div className="flex border border-[#004039] py-3 px-4 rounded-[8px] lg:gap-5 justify-between">
            <button className="text-[#004039] font-inter font-normal text-sm lg:text-base">
              Suraksha Packages
            </button>
            <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="flex  gap-5">
          {Checkup.map((item, index) => (
            <div key={index} className=" rounded-[12px]  border">
              <div className="relative bg-[F1F6EE] w-[440px]">
                <img src={vector} alt="" className="absolute inset-8 left-14" />
                <div className="relative z-[999] h-[250px] ">
                  <img src={item.icon} alt="" className="absolute top-5 " />
                </div>
              </div>
              <div className="bg-[#01635A] py-6 space-y-6 rounded-b-[12px] px-4 relative z-[999]">
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <h1 className="font-inter text-white text-base font-medium">
                      {item.title}
                    </h1>
                    <div className="flex gap-2">
                      <p className="font-inter font-semibold text-base text-white opacity-50 line-through">
                        {item.beforeprice}
                      </p>
                      <p className="font-inter font-semibold text-base text-white">
                        {item.afterprice}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="flex gap-2 items-center">
                      <img src={item.bullet} alt="" className="" />
                      <p className="text-[#E1FBA6] text-base font-inter font-normal">
                        {item.para}
                      </p>
                    </div>
                    <p className="text-[#E1FBA6] text-xs border border-[#E1FBA6] py-1 px-2 rounded-[8px]">
                      {item.discount}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between">
                    <div className="flex px-2.5 py-2 gap-2.5 border border-white rounded-[8px]">
                      <button className="text-white font-inter text-base font-medium ">
                        {item.btn}
                      </button>
                      <img src={item.arrow} alt="" />
                    </div>
                    <div className="flex gap-2.5 bg-[#68B92E] rounded-[8px] py-2 px-5 items-center">
                      <button className="font-inter font-medium text-white text-base">
                        {item.cart}
                      </button>
                      <img src={item.arrow} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="hidden lg:block"></div>
          <button className="text-white bg-[#68B92E] py-4 px-8 rounded-[12px] text-xs lg:text-base">
            View All Packages
          </button>
          <div className="flex gap-5 lg:gap-8">
            <img src={prev} alt="" />
            <img src={next} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fullbody;

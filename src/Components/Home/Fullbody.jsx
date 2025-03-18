import React, { useState, useRef, useEffect } from "react";
import dropdown from "../../assets/Svg/dropdown.svg";
import vital from "../../assets/Svg/vitalpackage.svg";
import complete from "../../assets/Svg/completepackage.svg";
import premium from "../../assets/Svg/premiumpackage.svg";
import arrowright from "../../assets/Svg/rightwhitearr.svg";
import vector from "../../assets/Svg/vector.svg";
import dot from "../../assets/Svg/dot.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fullbody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const keywords = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"];
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [focusedIndex, setFocusedIndex] = useState(null);
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
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjusted for two items; update if you add more tests
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-10 py-32  space-y-10 overflow-hidden">
        <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
          <h1
            className="font-inter font-medium text-xl lg:text-[40px] text-[#004039]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Full Body Checkup Packages
          </h1>
          <div
            className="relative inline-block z-[999]"
            ref={dropdownRef}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="flex border border-[#004039] py-3 px-4 rounded-[8px] lg:gap-5 justify-between cursor-pointer"
              onClick={toggleDropdown}
            >
              <button className="text-[#004039] font-inter font-normal text-sm lg:text-base">
                Suraksha Packages
              </button>
              <img
                src={dropdown}
                alt="dropdown icon"
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isOpen && (
              <div className="absolute mt-2 w-full bg-white border border-[#004039] rounded-[8px] shadow-lg">
                <ul className="py-2">
                  {keywords.map((keyword, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 h-full">
          {Checkup.map((item, index) => (
            <div
              key={index}
              // tabIndex={0} // Makes the div focusable
              onMouseEnter={() => setFocusedIndex(index)}
              onMouseLeave={() => setFocusedIndex(null)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              className={`max-w-md h-full rounded-xl transition-all duration-300 transform overflow-hidden cursor-pointer ${
                focusedIndex === index
                  ? "scale-105"
                  : focusedIndex !== null
                  ? "filter blur-xs scale-95"
                  : ""
              }`}
            >
              <div className="relative bg-[#F1F6EE]  lg:h-[210px] xl:h-[250px] border border-[#00000014] border-b-0 rounded-t-xl overflow-hidden">
                <img
                  src={vector}
                  alt="vector"
                  className="absolute inset-0 left-1/2 -translate-x-1/2"
                />
                <div className="h-[250px] rounded-t-xl">
                  <img
                    src={item.icon}
                    alt=""
                    className="absolute left-1/2 -translate-x-1/2 top-8 "
                  />
                </div>
              </div>
              <div className="bg-[#01635A] py-6 space-y-6 rounded-b-[12px] px-4 relative z-[999]">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h1 className="font-inter text-white text-sm lg:text-base font-medium">
                      {item.title}
                    </h1>
                    <div className="flex gap-2">
                      <p className="font-inter font-semibold text-sm lg:text-base text-white opacity-50 line-through">
                        {item.beforeprice}
                      </p>
                      <p className="font-inter font-semibold text-sm lg:text-base text-white">
                        {item.afterprice}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <img src={item.bullet} alt="" />
                      <p className="text-[#E1FBA6] text-sm lg:text-base font-inter font-normal">
                        {item.para}
                      </p>
                    </div>
                    <p className="text-[#E1FBA6] text-xs border border-[#E1FBA6] py-1 px-2 rounded-[8px] font-inter">
                      {item.discount}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between gap-6">
                    <div className="flex px-2.5 py-2 gap-2.5 border border-white rounded-lg group cursor-pointer">
                      <button className=" text-white font-inter text-xs lg:text-sm xl:text-base font-medium cursor-pointer ">
                        {item.btn}
                      </button>
                      <img
                        src={item.arrow}
                        alt="arrow"
                        className="group-hover:translate-x-0.5 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="flex gap-2.5 btn1 rounded-lg py-2 px-5 items-center group cursor-pointer">
                      <button className="font-inter font-medium text-white text-xs lg:text-sm xl:text-base cursor-pointer">
                        {item.cart}
                      </button>
                      <img
                        src={item.arrow}
                        alt="arrow"
                        className="group-hover:translate-x-1 transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center justify-center">
          <button className=" btn1 hover:!bg-[#01635A] transition-colors duration-500 py-4 px-8 font-inter rounded-xl cursor-pointer">
            View All Packages
          </button>

          {/* Arrow controls positioned to the right */}
          {/* <div className="absolute right-0 flex gap-5 lg:gap-8">
            <div
              onClick={() => sliderRef.current.slickPrev()}
              className="cursor-pointer"
            >
              <img src={prev} alt="prev arrow" className="w-10" />
            </div>
            <div
              onClick={() => sliderRef.current.slickNext()}
              className="cursor-pointer"
            >
              <img src={next} alt="next arrow" className="w-10" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Fullbody;

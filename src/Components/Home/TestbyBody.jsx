import React, { useRef } from "react";
import kidney from "../../assets/Svg/kidney.svg";
import heart from "../../assets/Svg/heart.svg";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from "../../assets/Svg/prev.svg";
import next from "../../assets/Svg/next.svg";

const TestbyBody = () => {
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
  const test = [
    {
      id: 1,
      icon: heart,
      para: "Heart",
    },
    {
      id: 2,
      icon: kidney,
      para: "Kidney",
    },
    {
      id: 3,
      icon: heart,
      para: "Heart",
    },
    {
      id: 4,
      icon: kidney,
      para: "kidney",
    },
    {
      id: 5,
      icon: heart,
      para: "Heart",
    },
    {
      id: 6,
      icon: kidney,
      para: "kidney",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-8 py-7 overflow-x-hidden space-y-5">
        <h1 className="text-[#004039] font-inter font-medium text-40">
          Tests by Body Parts
        </h1>
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {test.map((testItem, index) => (
              <div key={index} className="px-2">
                <div
                  className={` ${
                    index % 2 === 0 ? "py-7.5 px-8.5 " : "py-7 px-8.5"
                  } bg-[#F1F6EE] border border-[#DEE2DB]  flex flex-col items-center justify-center rounded-xl`}
                >
                  <img
                    src={testItem.icon}
                    alt={testItem.para}
                    className={`${
                      index % 2 === 0 ? "px-6 py-6 " : "px-9 py-7.5"
                    } bg-gradient-to-b to-[#E1F1D600] from-[#AED495] rounded-[198px]`}
                  />
                  <h1 className="font-inter font-normal text-xl mt-4">
                    {testItem.para}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-between ">
          <div className="hidden lg:block"></div>
          <div>
            <Link to="/tet">
              <button className="bg-[#68B92E] py-4 px-8 text-white font-medium rounded-xl">
                View All Tests
              </button>
            </Link>
          </div>
          <div className="flex gap-5 lg:gap-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestbyBody;

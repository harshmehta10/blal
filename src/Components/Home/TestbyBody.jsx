import React, { useRef, useState } from "react";
import kidney from "../../assets/Svg/kidney.svg";
import heart from "../../assets/Svg/heart.svg";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from "../../assets/Svg/prev.svg";
import next from "../../assets/Svg/next.svg";

const TestbyBody = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
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
      <div className="max-w-screen-2xl mx-auto px-8 py-20 overflow-x-hidden space-y-14">
        <h1
          className="text-[#004039] font-inter font-medium text-40"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Tests by Body Parts
        </h1>
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {test.map((testItem, index) => (
              <div
                key={index}
                tabIndex={0} // Makes the div focusable
                onMouseEnter={() => setFocusedIndex(index)}
                onMouseLeave={() => setFocusedIndex(null)}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                className={`px-2 transition-all duration-300 transform overflow-hidden ${
                  focusedIndex === index
                    ? "scale-100"
                    : focusedIndex !== null
                    ? "filter blur-xs scale-90"
                    : ""
                }`}
              >
                <div
                  className="
                    py-9 px-8.5
                   bg-[#F1F6EE] border border-[#DEE2DB]  flex flex-col items-center justify-center rounded-xl cursor-pointer"
                >
                  <div className="bg-gradient-to-b to-[#E1F1D600] from-[#AED495] size-32 rounded-full flex justify-center items-center">
                    <img
                      src={testItem.icon}
                      alt={testItem.para}
                      className="size-20"
                    />
                  </div>
                  <h1 className="font-inter font-normal  lg:text-lg xl:text-xl mt-4">
                    {testItem.para}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="relative flex items-center lg:justify-center">
          <Link
            to="/tet"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
          >
            <button className="btn1 hover:!bg-[#01635A] transition-colors duration-500 py-4 px-8 text-white font-inter font-medium rounded-xl cursor-pointer">
              View All Tests
            </button>
          </Link>

          {/* Arrow controls positioned to the right */}
          <div className="absolute right-0 flex gap-5 lg:gap-8">
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

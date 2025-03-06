import React, { useRef } from "react";
import dibites from "../../assets/Svg/Dibeties.svg";
import thyroid from "../../assets/Svg/thyroid.svg";
import { Link } from "react-router"; // using react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from "../../assets/Svg/prev.svg";
import next from "../../assets/Svg/next.svg";

const TestbyMedical = () => {
  // Create a ref to the slider instance
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

  // Data array for tests (each test represents one slide)
  const tests = [
    { id: 1, image: dibites, title: "Diabetes" },
    { id: 2, image: thyroid, title: "Thyroid" },
    { id: 3, image: dibites, title: "Diabetes" },
    { id: 4, image: thyroid, title: "Thyroid" },
    { id: 5, image: dibites, title: "Diabetes" },
    { id: 6, image: thyroid, title: "Thyroid" },
    { id: 7, image: dibites, title: "Diabetes" },
    { id: 8, image: thyroid, title: "Thyroid" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-7 overflow-x-hidden space-y-5">
      <h1 className="text-[#004039] font-inter font-medium text-40">
        Tests by Medical Conditions
      </h1>
      <div className="mt-8">
        <Slider ref={sliderRef} {...settings}>
          {tests.map((testItem, index) => (
            <div key={index} className="px-2">
              <div
                className={`${
                  index % 2 === 0 ? "py-5 px-8.5" : "py-7.5 px-8.5"
                } bg-[#F1F6EE] border border-[#DEE2DB] flex flex-col items-center justify-center rounded-xl`}
              >
                <img
                  src={testItem.image}
                  alt={testItem.title}
                  className={`${
                    index % 2 === 0 ? "px-9 py-7.5" : "px-6 py-6"
                  } bg-gradient-to-b from-[#AED495] to-[#E1F1D600] rounded-[198px]`}
                />
                <h1 className="font-inter font-normal text-xl mt-4">
                  {testItem.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden lg:block"></div>
        <div>
          <Link to="/test">
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
  );
};

export default TestbyMedical;

import React, { useRef, useState } from "react";
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
  const [focusedIndex, setFocusedIndex] = useState(null);

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
    <div className="max-w-screen-2xl mx-auto px-8 py-20 overflow-x-hidden space-y-14">
      <h1
        className="text-[#004039] font-inter font-medium text-40"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Tests by Medical Conditions
      </h1>
      <div className="mt-8">
        <Slider ref={sliderRef} {...settings}>
          {tests.map((testItem, index) => (
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
                className={`${
                  index % 2 === 0 ? "py-5 px-8.5" : "py-7.5 px-8.5"
                } bg-[#F1F6EE] border border-[#DEE2DB] flex flex-col items-center justify-center rounded-xl cursor-pointer`}
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
      <div className="relative flex items-center lg:justify-center">
        <Link
          to="/test"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "instant" })
          }
        >
          <button className="btn1 hover:!bg-[#01635A] transition-colors duration-500 py-4 px-8 font-inter rounded-xl cursor-pointer">
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
  );
};

export default TestbyMedical;

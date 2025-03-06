import React, { useRef, useState, useEffect } from "react";
import prev from "../../assets/Svg/smgreenprev.svg";
import next from "../../assets/Svg/smgreennext.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestGrid from "./TestGrid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Item = ({ item, selected }) => {
  const ref = useRef();

  useEffect(() => {
    if (selected) {
      ref.current.scrollIntoView({
        block: "nearest",
        inline: "end",
        behavior: "smooth",
      });
    }
  }, [selected]);

  return (
    <div
      ref={ref}
      className={`py-3 px-4 rounded-lg ${
        selected
          ? "bg-gradient-to-r from-[#01635A] to-[#01635A] text-[#E1FBA6]"
          : "border border-[#CCCCCC]"
      }`}
    >
      <p className="whitespace-nowrap font-inter font-normal">{item}</p>
    </div>
  );
};

const Overview = () => {
  const settings = {
    // centerMode: true,
    infinite: false,
    slidesToShow: 5,
    speed: 500,
    // variableWidth: true,
  };

  const ref = useRef();

  const [step, setStep] = useState(0);

  const items = [
    "Overview",
    "Price in Bangalore",
    "Reasons",
    "Parameters",
    "Preparation & Precautions",
  ];

  const disablePrev = step === 0;
  const disableNext = step === items.length - 1;

  const onPrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const onNext = () => {
    if (step < items.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="">
      <TestGrid />
      <div className="bg-white border border-[#DEE2DB] rounded-xl px-8 py-8 space-y-8 lg:space-y-10">
        {/* <div className="slider-container">
          <Slider {...settings}>
            <div className="bg-gradient-to-r from-[#01635A] to-[#01635A] py-3 px-4 rounded-lg">
              <p className="whitespace-nowrap text-[#E1FBA6] font-inter font-normal">
                Overview
              </p>
            </div>

            <div className="py-3 px-4 border border-[#CCCCCC] rounded-lg">
              <p className="whitespace-nowrap text-[#1E1E2F] font-inter font-normal">
                Price in Bangalore
              </p>
            </div>

            <div className="py-3 px-4 border border-[#CCCCCC] rounded-lg">
              <p className="whitespace-nowrap text-[#1E1E2F] font-inter font-normal">
                Reasons
              </p>
            </div>

            <div className="py-3 px-4 border border-[#CCCCCC] rounded-lg">
              <p className="whitespace-nowrap text-[#1E1E2F] font-inter font-normal">
                Parameters
              </p>
            </div>

            <div className="py-3 px-4 border border-[#CCCCCC] rounded-lg opacity-50">
              <p className="whitespace-nowrap text-[#1E1E2F] font-inter font-normal">
                Preparation & Precautions
              </p>
            </div>
          </Slider>
        </div> */}

        <div className="flex justify-between items-center space-x-4">
          <button
            onClick={onPrev}
            disabled={disablePrev}
            className="disabled:opacity-50 cursor-pointer"
          >
            <img src={prev} alt="prev" />
          </button>

          <div
            id="car"
            ref={ref}
            className="flex items-center space-x-3 overflow-auto"
          >
            {items.map((item, index) => (
              <Item key={item} item={item} selected={index === step} />
            ))}
          </div>
          <button
            onClick={onNext}
            disabled={disableNext}
            className="disabled:opacity-50 cursor-pointer"
          >
            <img src={next} alt="next" />
          </button>
        </div>

        <div className="divide-y space-y-5 ">
          <div className="space-y-5 py-5">
            <h1 className="font-inter font-medium text-lg lg:text-2xl">
              Overview
            </h1>
            <p className="text-[#7C7C7C] font-inter font-normal text-sm lg:text-base">
              The lipid profile test, also referred to as the total cholesterol
              test, measures the quantity and types of fats present in the
              bloodstream. It measures low-density lipoprotein (LDL),
              high-density lipoprotein (HDL), and triglycerides.Excessive lipids
              (cholesterol and triglycerides) in your bloodstream can result in
              accumulation within blood vessels and arteries, leading to damage
              and elevating the risk of cardiovascular problems. A lipid profile
              test in Bangalore is commonly performed to detect cardiovascular
              diseases like heart disease and stroke, as well as to evaluate
              cholesterol and triglyceride levels.
            </p>
          </div>
          <div className="space-y-5">
            <h1 className="font-inter font-medium text-2xl">
              Lipid profile test cost
            </h1>
            <p className="text-[#7C7C7C] font-inter font-normal text-base">
              The lipid profile test price in Bangalore is ₹ 550. The
              cholesterol test price includes the fastest free home sample
              collection within 60 minutes of booking, and the reports are
              available in 6 hours. There are no additional charges for home
              sample collection—it's completely free. So book a lipid profile
              test near me now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

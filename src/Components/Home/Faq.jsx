import { useState } from "react";
import React from "react";
import plus from "../../assets/Svg/plus.svg";
import cross from "../../assets/Svg/cross.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Questions = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-8 py-8 space-y-8 lg:space-y-14.5">
        <div className="flex justify-center">
          <h1 className="text-[#004039] font-inter font-medium text-40">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="space-y-6 w-auto lg:w-[1054px] mx-auto">
          {Questions.map((item, index) => (
            <div
              key={index}
              className={`border border-[#D9D9D9] rounded-[18px] p-6 relative overflow-hidden transition-colors duration-500 ${
                openIndex === index
                  ? "animate-fill bg-gradient-to-b from-[#46BB00] to-[#3B9D00]"
                  : "bg-white"
              }`}
            >
              <div
                className="flex items-center gap-5 lg:justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h1
                  className={`font-inter font-normal text-sm lg:text-lg ${
                    openIndex === index ? "text-white" : "text-[#1E1E2F]"
                  }`}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </h1>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-all duration-500 group ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <rect
                    x="18"
                    y="8"
                    width="2"
                    height="18"
                    rx="1"
                    transform="rotate(90 18 8)"
                    fill="#004039"
                    className={` transition-all duration-500 ${
                      openIndex === index ? "fill-white" : ""
                    }`}
                  />
                  <rect
                    x="10"
                    y="18"
                    width="2"
                    height="18"
                    rx="1"
                    transform="rotate(-180 10 18)"
                    fill="#004039"
                    className={`transition-all duration-500 ${
                      openIndex === index ? "fill-white" : ""
                    }`}
                  />
                </svg>

                {/* <img
                  src={plus}
                  alt="Toggle"
                  className={`transition-all duration-500 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                /> */}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`text-xs lg:text-base font-inter font-normal mt-4 ${
                    openIndex === index ? "text-white" : "text-[#4B4B59]"
                  }`}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

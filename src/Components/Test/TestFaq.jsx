import { useState } from "react";
import React from "react";
import plus from "../../assets/Svg/plus.svg";
import cross from "../../assets/Svg/cross.svg";

const TestFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Questions = [1, 2, 3, 4, 5];
  return (
    <div className=" mx-auto px-8 py-8  bg-white rounded-xl border border-[#DEE2DB]">
      <div className=" space-y-10">
        <div>
          <h1 className="font-inter font-medium text-2xl ">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="space-y-5">
          {Questions.map((item, index) => (
            <div
              key={index}
              className="border border-[#D9D9D9] rounded-[18px] p-6"
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h1 className="font-inter font-normal text-lg text-[#1E1E2F]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </h1>
                <img
                  src={openIndex === index ? cross : plus}
                  alt="Toggle"
                  className="transition-opacity duration-500"
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base text-[#4B4B59] font-inter font-normal mt-4">
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

export default TestFaq;

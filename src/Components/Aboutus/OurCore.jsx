import React from "react";
import testtube from "../../assets/Svg/testtube.svg";

const OurCore = () => {
  const test = [1, 2, 3, 4];
  return (
    <div className="bg-[#F1F6EE]">
      <div className="max-w-screen-2xl mx-auto px-12 py-12">
        <div className="flex flex-col justify-center items-center space-y-7">
          <h1 className="font-inter font-medium text-40">
            Our Core Values, Vision and Mission
          </h1>
          <p className="text-[#97979A] text-sm lg:text-base font-inter font-normal lg:text-center max-w-[950px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore Duis aute irurereprehenderit voluptate
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
            {test.map((item, idx) => (
              <div
                key={idx}
                className="bg-white flex flex-col justify-center px-5 py-5 border border-[#DEE2DB] rounded-xl space-y-4"
              >
                <div className="p-5 bg-[#F1F6EE] rounded-[10px] border border-[#DEE2DB0F] w-20 ">
                  <img src={testtube} alt="testtube" className="w-full" />
                </div>
                <p className="text-[#1E1E2F] font-inter font-normal text-base lg:text-lg">
                  Lorem Ipsum dolor Sit
                </p>
                <p className="text-[#97979A] text-sm lg:text-base font-inter font-normal">
                  Duis aute irure dolor reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu Lorem ipsum dolor sit
                  amet, consectetur Duis aute irure dolor reprehenderit in
                  voluptate velit
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCore;

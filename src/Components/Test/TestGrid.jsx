import React from "react";
import micro from "../../assets/Svg/greenmicro.svg";
import doctor from "../../assets/Svg/doctor.svg";
import certified from "../../assets/Svg/certified.svg";
import clock from "../../assets/Svg/clock.svg";

const TestGrid = () => {
  const square = [
    {
      id: 1,
      icon: micro,
      para: "10,000+ ",
      title: "Tests Done",
    },
    {
      id: 2,
      icon: doctor,
      para: "Trusted By ",
      title: "Doctors",
    },
    {
      id: 3,
      icon: certified,
      para: "NABL Certified ",
      title: "Labs",
    },
    {
      id: 4,
      icon: clock,
      para: "Fastest",
      title: "Turnaround",
    },
  ];
  return (
    <div>
      <div className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 ">
          {square.map((item, index) => (
            <div
              key={index}
              className="flex py-4 lg:py-6 px-2 lg:px-4 bg-white gap-3 border border-[#DEE2DB] rounded-xl"
            >
              <div>
                <img src={item.icon} alt="" />
              </div>
              <div>
                <h1 className="text-[#4B4B59] font-inter font-medium text-xs">
                  {item.para}
                </h1>
                <p className="text-[#1E1E2F] font-inter font-medium text-sm lg:text-base">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestGrid;

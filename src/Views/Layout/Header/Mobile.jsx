import React from "react";
import whitedropdown from "../../../assets/Svg/whitedropdown.svg";
const Mobile = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-[#00594F] to-[#004039]  text-white font-inter font-medium text-[13px] flex py-2.5 px-4 rounded-[8px] gap-3.5  ">
        <div className="flex gap-9 items-center">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {/* Location Dropdown */}
          <div className="relative inline-block text-left">
            <div
              className="flex gap-2 group cursor-pointer"
              onClick={toggleStateDropdown}
            >
              <img src={location} alt="location icon" />
              <h1 className="text-[#1E1E2F] font-inter font-medium text-sm">
                {selectedState}
              </h1>
              <img
                src={dropdown}
                alt="dropdown"
                className={`transition-all duration-300 ${
                  stateDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {stateDropdownOpen && (
              <div className="absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg">
                <div className="py-1">
                  {states.map((state, index) => (
                    <div
                      key={index}
                      onClick={() => handleStateClick(state)}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {state}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Quick links section (currently commented out) */}
        </div>
        <img src={whitedropdown} alt="" />
      </div>
    </div>
  );
};

export default Mobile;

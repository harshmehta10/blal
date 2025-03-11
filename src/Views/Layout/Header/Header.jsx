import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import logo from "../../../assets/Svg/logo.svg";
import location from "../../../assets/Svg/locationheader.svg";
import dropdown from "../../../assets/Svg/dropdown.svg";
import whitedropdown from "../../../assets/Svg/whitedropdown.svg";
import findlabs from "../../../assets/Svg/findlabs.svg";
import box from "../../../assets/Svg/box.svg";
import microscope from "../../../assets/Svg/microscope.svg";
import phone from "../../../assets/Svg/phoneheader.svg";
import cart from "../../../assets/Svg/cart.svg";

const Header = () => {
  // Quick links data
  const head = [
    {
      text: ["Find Nearby Labs", "Packages", "Tests"],
      icon: [findlabs, box, microscope],
    },
  ];

  // State Dropdown for location
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("Ahmedabad");
  const states = ["Ahmedabad", "Mumbai", "Delhi", "Bangalore", "Chennai"];

  const toggleStateDropdown = () => {
    setStateDropdownOpen((prev) => !prev);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    setStateDropdownOpen(false);
  };

  // Logout Dropdown for user profile
  const [logoutDropdownOpen, setLogoutDropdownOpen] = useState(false);
  const logoutDropdownRef = useRef(null);

  const toggleLogoutDropdown = () => {
    setLogoutDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  // Close logout dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        logoutDropdownRef.current &&
        !logoutDropdownRef.current.contains(event.target)
      ) {
        setLogoutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto  py-4 px-12">
        <nav className="flex justify-between items-center">
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
          <div className="hidden lg:flex items-center gap-6">
            <div>
              {head.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {item.text.map((textItem, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 group cursor-pointer"
                    >
                      <img
                        src={item.icon[i]}
                        alt={textItem}
                        className="w-6 h-6 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
                      />
                      <h1 className="text-[#1E1E2F] font-inter font-medium text-sm transition-all duration-300 group-hover:text-[#3EA103]">
                        {textItem}
                      </h1>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="border border-[#3EA103] flex py-2 px-4 rounded-[8px] group cursor-pointer hover:bg-[#3EA103] transition-all duration-300 ease-in-out">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.39469 1.47221L3.34535 0.860228C4.23508 0.287412 5.41142 0.510465 6.09306 1.38128L7.45039 3.11622C8.04191 3.87148 8.11098 4.92884 7.62119 5.72958L6.2603 7.95764C6.65282 8.9663 7.27655 9.89515 8.13244 10.7439C8.95042 11.5679 9.92538 12.2194 10.9996 12.6598L13 11.3346C13.7579 10.8336 14.7506 10.9092 15.4633 11.5221L17.1233 12.9499C17.953 13.6628 18.1695 14.8949 17.6317 15.8328L17.055 16.8381C16.4812 17.8386 15.4363 18.4272 14.31 18.3823C11.6524 18.2771 8.78775 16.6132 5.71509 13.3908C2.63797 10.1634 1.04824 7.14893 0.944993 4.35171C0.901685 3.17454 1.45389 2.07845 2.39663 1.47169"
                  fill="url(#paint0_linear_2_1381)"
                  fill-opacity="0.72"
                  className="group-hover:fill-white transition-all duration-300 ease-in-out"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_1381"
                    x1="6.75972"
                    y1="-0.156527"
                    x2="11.9555"
                    y2="19.1565"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#74CC3F" />
                    <stop offset="1" stop-color="#3DA202" />
                  </linearGradient>
                </defs>
              </svg>

              {/* <img src={phone} alt="phone" /> */}
              <h1 className="font-inter font-medium text-[13px] text-[#3EA103] group-hover:text-white transition-all duration-300 ease-in-out">
                +91 1122334455
              </h1>
            </div>
            {/* Logout Dropdown */}
            <div className="relative inline-block" ref={logoutDropdownRef}>
              <div
                className="bg-gradient-to-tr from-[#00594F] to-[#004039] to-80% shadow-[inset_-4px_4px_10px_0px_rgba(255,_255,_255,_0.29)] text-white font-inter font-medium text-[13px] flex py-2.5 px-4 rounded-[8px] gap-3.5 cursor-pointer"
                onClick={toggleLogoutDropdown}
              >
                <h1 className="font-inter font-medium text-xs">Himanshu</h1>
                <img
                  src={whitedropdown}
                  alt="dropdown icon"
                  className={`transition-transform duration-300 ${
                    logoutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {logoutDropdownOpen && (
                <div className="absolute right-0 mt-2  bg-white rounded-md  overflow-hidden z-20">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 font-inter font-medium text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-tr from-[#46BB00] to-[#3B9D00] to-80% shadow-[inset_-4px_4px_10px_0px_rgba(255,_255,_255,_0.29)] py-2.5 px-3 rounded-[8px] cursor-pointer">
              <img src={cart} alt="cart" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

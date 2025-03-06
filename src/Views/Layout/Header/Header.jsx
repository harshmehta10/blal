import React from "react";
import logo from "../../../assets/Svg/logo.svg";
import location from "../../../assets/Svg/locationheader.svg";
import dropdown from "../../../assets/Svg/dropdown.svg";
import whitedropdown from "../../../assets/Svg/whitedropdown.svg";
import findlabs from "../../../assets/Svg/findlabs.svg";
import box from "../../../assets/Svg/box.svg";
import microscope from "../../../assets/Svg/microscope.svg";
import phone from "../../../assets/Svg/phoneheader.svg";
import cart from "../../../assets/Svg/cart.svg";
import { Link } from "react-router";

const Header = () => {
  const head = [
    {
      text: ["Find Nearby Labs", "Packages", "Tests"],
      icon: [findlabs, box, microscope],
    },
  ];
  return (
    <div>
      <div className=" mx-auto border border-[#DADADA] py-4 px-20">
        <nav className="flex justify-between items-center">
          <div className="flex gap-9 items-center">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="flex gap-2">
              <img src={location} alt="" />
              <h1 className="text-[#1E1E2F] font-inter font-medium text-sm">
                Ahmedabad
              </h1>
              <img src={dropdown} alt="" />
            </div>
            <div className="hidden lg:flex gap-2 ">
              <h1 className="font-inter text-[#1E1E2F]  font-medium text-sm">
                Quick Links
              </h1>
              <img src={dropdown} alt="" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div>
              {head.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {item.text.map((textItem, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <img
                        src={item.icon[i]}
                        alt={textItem}
                        className="w-6 h-6"
                      />
                      <h1 className="text-[#1E1E2F] font-inter font-medium text-sm">
                        {textItem}
                      </h1>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="border border-[#3EA103] flex py-2 px-4 rounded-[8px]">
              <img src={phone} alt="" />
              <h1 className="font-inter font-medium text-[13px] text-[#3EA103]">
                +91 1122334455
              </h1>
            </div>
            <div className="bg-gradient-to-tr from-[#00594F] to-[#004039] to-80% shadow-[inset_-4px_4px_10px_0px_rgba(255,_255,_255,_0.29)]  text-white font-inter font-medium text-[13px] flex py-2.5 px-4 rounded-[8px] gap-3.5  ">
              <h1>Himanshu</h1>
              <img src={whitedropdown} alt="" />
            </div>
            <div className="bg-gradient-to-tr from-[#46BB00] to-[#3B9D00] to-80% shadow-[inset_-4px_4px_10px_0px_rgba(255,_255,_255,_0.29)] py-2.5 px-3 rounded-[8px]">
              <img src={cart} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

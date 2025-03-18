import React, { useState } from "react";
import logo from "../../../assets/Svg/footerlogo.svg";
import facebook from "../../../assets/Svg/facebook.svg";
import instagram from "../../../assets/Svg/instagram.svg";
import x from "../../../assets/Svg/x.svg";
import linkedin from "../../../assets/Svg/linkdin.svg";
import youtube from "../../../assets/Svg/youtube.svg";
import apple from "../../../assets/Svg/appledownload.svg";
import google from "../../../assets/Svg/googleplay.svg";
import dropdowngreen from "../../../assets/Svg/greendropdown.svg";
import { Link } from "react-router";

const MobileFooter = () => {
  const social = [facebook, instagram, linkedin, youtube, x];
  const platform = [apple, google];
  const start = [
    {
      title: "About Us",
      para: [
        "Company Profile",
        "Awards & Accreditations",
        "Milestones",
        "Career",
        "Blogs",
      ],
    },
    {
      title: "Useful Links",
      para: [
        "Health Packages",
        "Test Menu",
        "Find a Center",
        "Privacy & Payment Policy",
        "Terms & Conditions",
        "Sitemap",
      ],
    },
    {
      title: "Doctors",
      para: "Health Bulletin",
    },
    {
      title: "Patients",
      para: "Download your Report",
    },
  ];
  // State to keep track of which dropdown is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the dropdown for the clicked index
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#01635A]">
      <div className="px-6 py-7 space-y-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-2.5">
          {social.map((item, index) => (
            <div key={index} className="flex gap-2.5">
              <img src={item} alt="socials" className="bg-[#FFFFFF26] p-4" />
            </div>
          ))}
        </div>
        <div className="flex gap-2.5">
          {platform.map((items, index) => (
            <div key={index} className="flex gap-2.5">
              <img src={items} alt="" />
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          {start.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleToggle(index)}
                className={`flex justify-between items-center cursor-pointer ${
                  index === 3
                    ? "border-b-[#FFFFFF12] border-t-[#FFFFFF12] border-r-0 border-l-0"
                    : "border-t-[#FFFFFF12] border-b-0 border-r-0 border-l-0"
                } border  py-2`}
              >
                {index === 0 ? (
                  <Link
                    to="/aboutus"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant",
                      })
                    }
                  >
                    <h1 className="text-[#E1FBA6] font-inter font-medium text-base">
                      {item.title}
                    </h1>
                  </Link>
                ) : (
                  <h1 className="text-[#E1FBA6] font-inter font-medium text-base">
                    {item.title}
                  </h1>
                )}
                <img src={dropdowngreen} alt="dropdown" />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-1">
                  {Array.isArray(item.para) ? (
                    item.para.map((text, i) => (
                      <p
                        key={i}
                        className="text-white font-inter font-normal text-sm"
                      >
                        {text}
                      </p>
                    ))
                  ) : (
                    <p className="text-white font-inter font-normal text-sm">
                      {item.para}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <p className="text-[#FFFFFF70] font-inter font-normal">
            © Copyright 2025. All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;

import React from "react";
import logo from "../../../assets/Svg/footerlogo.svg";
import facebook from "../../../assets/Svg/facebook.svg";
import instagram from "../../../assets/Svg/instagram.svg";
import x from "../../../assets/Svg/x.svg";
import linkedin from "../../../assets/Svg/linkdin.svg";
import youtube from "../../../assets/Svg/youtube.svg";
import apple from "../../../assets/Svg/appledownload.svg";
import google from "../../../assets/Svg/googleplay.svg";
import dropdowngreen from "../../../assets/Svg/greendropdown.svg";

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

  return (
    <div>
      <div className=" px-8 py-7">
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
        <div className=" grid grid-cols-2 ">
          {start.map((items, index) => (
            <div key={index} className="flex">
              <h1 className="text-[#1E1E2F] font-medium text-base">
                {items.title}
                <img src={dropdowngreen} alt="" />
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;

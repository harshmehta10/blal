import React from "react";
import location from "../../../assets/Svg/Location.svg";
import phone from "../../../assets/Svg/Phone.svg";
import mail from "../../../assets/Svg/Mail.svg";
import logo from "../../../assets/Svg/footerlogo.svg";
import facebook from "../../../assets/Svg/facebook.svg";
import instagram from "../../../assets/Svg/instagram.svg";
import x from "../../../assets/Svg/x.svg";
import linkedin from "../../../assets/Svg/linkdin.svg";
import youtube from "../../../assets/Svg/youtube.svg";
import apple from "../../../assets/Svg/appledownload.svg";
import google from "../../../assets/Svg/googleplay.svg";
import award1 from "../../../assets/Svg/award1.svg";
import award2 from "../../../assets/Svg/award2.svg";
import award3 from "../../../assets/Svg/award3.svg";
import award4 from "../../../assets/Svg/award4.svg";
import award5 from "../../../assets/Svg/award5.svg";
import { Link } from "react-router";
import elipise from "../../../assets/Svg/elepise.svg";

const Footerpc = () => {
  const contact = [
    {
      icon: location,
      text: "Dr. B. Lal Clinical Laboratory Pvt. Ltd.6-E, Malviya Industrial Area, Jaipur 302017",
    },
    {
      icon: phone,
      text: "+91 9166125555",
    },
    {
      icon: mail,
      text: "customercare@blallab.com",
    },
  ];
  const about = [
    {
      heading: "About Us",
      content: [
        "Company Profile",
        "Awards & Accreditations",
        "Milestones",
        "Career",
        "Blogs",
      ],
    },
  ];
  const usefull = [
    {
      heading: "Useful Links",
      content: [
        "Health Packages",
        "Test Menu",
        "Find a Center",
        "Privacy & Payment Policy",
        "Terms & Conditions",
        "Sitemap",
      ],
    },
  ];
  const start = [
    {
      icon: logo,
      social: [facebook, instagram, linkedin, youtube, x],
      platform: [apple, google],
      text: "Awards & Recognition",
      awards: [award1, award2, award3, award4, award5],
    },
  ];
  return (
    <div className="bg-[#01635A] overflow-hidden">
      <footer className="max-w-screen-2xl mx-auto pt-20 pb-6 lg:px-8 relative z-[999]">
        <div className="flex lg:gap-20 xl:gap-32 justify-between">
          <div className="space-y-4 pb-5">
            {start.map((item, index) => (
              <div key={index} className="space-y-4">
                <img
                  src={item.icon}
                  alt="logo"
                  className="hover:scale-105 duration-300 transition-all cursor-pointer"
                />

                <div className="flex gap-3 ">
                  {item.social.map((social, index) => (
                    <img
                      key={index}
                      src={social}
                      alt="social"
                      className="py-3 px-3 rounded-[8px] bg-white/10 hover:scale-110 duration-300 transition-all cursor-pointer"
                    />
                  ))}
                </div>
                <div className="flex flex-row gap-3">
                  {item.platform.map((platform, index) => (
                    <img
                      key={index}
                      src={platform}
                      alt="platform"
                      className="hover:scale-105 duration-300 transition-all cursor-pointer"
                    />
                  ))}
                </div>
                <p className="text-[#E1FBA6] font-inter font-medium text-base">
                  {item.text}
                </p>
                <div className="flex gap-5">
                  {item.awards.map((award, index) => (
                    <img
                      key={index}
                      src={award}
                      alt="award"
                      className="hover:scale-110 duration-300 transition-all cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex  lg:gap-12 xl:gap-24">
            <div>
              {about.map((item, index) => (
                <div key={index} className="space-y-6 font-inter">
                  <div>
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
                        {item.heading}
                      </h1>
                    </Link>
                  </div>
                  <ul className="space-y-4 ">
                    {item.content.map((content, index) => (
                      <li
                        key={index}
                        className="hover:underline font-inter font-normal text-xs text-white cursor-pointer"
                      >
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {usefull.map((item, index) => (
                <div key={index} className="space-y-6 font-inter">
                  <h1 className="text-[#E1FBA6] font-medium text-base cursor-pointer">
                    {item.heading}
                  </h1>
                  <ul className="text-white space-y-4 font-normal text-xs">
                    {item.content.map((content, index) => (
                      <li
                        key={index}
                        className="hover:underline font-inter font-normal text-xs text-white cursor-pointer"
                      >
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-12 font-inter">
              <div className="space-y-4">
                <h1 className="text-[#E1FBA6] font-inter font-medium text-base cursor-pointer">
                  Doctors
                </h1>
                <p className="text-white font-inter font-normal text-xs hover:underline cursor-pointer">
                  Health Bulletin
                </p>
              </div>
              <div className="space-y-4">
                <h1 className="text-[#E1FBA6] font-inter font-normal text-base cursor-pointer">
                  Patients
                </h1>
                <p className="text-white font-inter font-normal text-xs cursor-pointer hover:underline">
                  Download your Report
                </p>
              </div>
            </div>

            <div className="space-y-8 ">
              <h1 className="text-[#E1FBA6] font-inter font-medium text-base cursor-pointer">
                Contact Us
              </h1>
              <div className="space-y-5 ">
                {contact.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="group-hover:scale-120 transition-all duration-300"
                    />
                    <p className="text-white font-inter font-normal text-xs group-hover:underline cursor-pointer max-w-[185px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex justify-center border border-t-[#FFFFFF12] py-5 relative  z-50">
        <h1 className="font-inter text-white/20 text-xs">
          © Copyright 2025. All Rights Reserved{" "}
        </h1>
        <div className="">
          <img
            src={elipise}
            alt="bgelipse"
            className="absolute w-full left-1/2 -translate-x-1/2 bottom-[-500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footerpc;

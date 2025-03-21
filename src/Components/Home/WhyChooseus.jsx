import React, { useState } from "react";
import bgflim from "../../assets/Svg/bgflim.svg";
import chooseus from "../../assets/images/chooseus.png";
import whitemicro from "../../assets/Svg/whitemicro.svg";
import whatsapp from "../../assets/Svg/whatsapp.svg";
import mac from "../../assets/images/mac.png";
import patient1 from "../../assets/Svg/patient1.svg";
import patient2 from "../../assets/Svg/patient2.svg";
import patient3 from "../../assets/Svg/patient3.svg";
import prev from "../../assets/Svg/prevblack.svg";
import next from "../../assets/Svg/nextblack.svg";
import doc1 from "../../assets/images/homedoc1.jpg";
import doc2 from "../../assets/images/homedoc2.jpg";

const WhyChooseus = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const us = [1, 2, 3, 4, 5, 6, 7, 8];
  const patient = [
    {
      icon: patient1,
      title: "Patient Name",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      icon: patient2,
      title: "Patient Name",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      icon: patient3,
      title: "Patient Name",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];
  const doctor = [mac, doc1, doc2];
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-screen-2xl mx-auto px-8 py-8 overflow-hidden space-y-20">
        <div className="space-y-10 lg:space-y-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-0">
            <h1 className="font-inter font-medium text-40 text-[#004039] max-w-[517px]">
              Ut enim ad minim veniam, nostrud exercitation laboris & ullamco{" "}
            </h1>
            <p className="text-[#4B4B59] font-inter font-normal text-sm lg:text-lg max-w-[616px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit elit sed do eiusmod.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
            {/* First Child */}
            <div
              className="flex-1 space-y-6 flex flex-col justify-between lg:w-1/3 order-last lg:order-first"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              {patient.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex py-5 pr-2.5 pl-6 gap-6 rounded-lg cursor-pointer ${
                    selectedIndex === index
                      ? "bg-[#68B92E]/5 border border-[#68B92E]"
                      : "bg-white"
                  }`}
                >
                  <img src={item.icon} alt="" />
                  <div className="space-y-2">
                    <h1 className="font-inter font-semibold text-sm lg:text-lg">
                      {item.title}
                    </h1>
                    <p className="text-[#4B4B59] font-inter text-xs lg:text-[15px] font-normal max-w-[200px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Doctor Image */}
            <div className="relative flex lg:w-2/3 order-first lg:order-last h-[450px]">
              {doctor[selectedIndex] && (
                <img
                  src={doctor[selectedIndex]}
                  alt="Doctor"
                  className="w-full h-full object-cover rounded-2xl "
                />
              )}
            </div>
          </div>
        </div>

        {/* next section */}
        <div className="bg-[#01635A] relative px-8 py-10 space-y-14 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-[#B7FA36]/0 from-40% to-[#B7FA36] opacity-50 absolute w-full h-full inset-0"></div>
          <div className="w-full h-full absolute z-50 inset-0 ">
            <img src={bgflim} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col lg:flex-row relative z-50">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-white font-inter font-medium text-40">
                  Why Choose Us?
                </h1>
                <p className="font-inter font-normal text-sm lg:text-base text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 relative z-50">
                {us.map((items, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={whitemicro}
                      alt="whitemicro"
                      className="py-4 px-4 rounded-full bg-white/20"
                    />
                    <div>
                      <h1 className="text-[#E1FBA6] font-inter text-sm lg:text-base max-w-[128px] whitespace-nowrap">
                        Lorem Ipsum dolor
                      </h1>
                      <p className="text-white font-inter text-sm lg:text-base whitespace-nowrap">
                        iSit amet quis alqn
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#68B92E] cursor-pointer flex gap-2 lg:gap-2.5 px-6 lg:px-8 py-4 rounded-xl w-[250px] lg:w-[287px] relative z-50 ">
                <img src={whatsapp} alt="whatsapp logo" />
                <button className="text-white font-inter font-medium text-sm lg:text-base cursor-pointer">
                  Contact us on Whatsapp
                </button>
              </div>
            </div>

            <div
              className="relative z-[999] w-full h-[300px] lg:h-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={chooseus}
                alt=""
                className="absolute -left-40 lg:-left-40 xl:-left-24 top-10 lg:top-8  max-h-none max-w-none  h-[300px] lg:h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;

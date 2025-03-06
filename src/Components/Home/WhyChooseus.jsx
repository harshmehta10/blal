import React from "react";
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

const WhyChooseus = () => {
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
  return (
    <div className="bg-[#F9F9F9]">
      <div className=" mx-auto px-8 py-8 overflow-hidden space-y-20">
        <div className="space-y-20">
          <div className="flex items-center justify-between">
            <h1 className="font-inter font-medium text-[40px] text-[#004039] max-w-[517px]">
              Ut enim ad minim veniam, nostrud exercitation laboris & ullamco{" "}
            </h1>
            <p className="text-[#4B4B59] font-inter font-normal text-lg max-w-[616px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit elit sed do eiusmod.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="space-y-6 ">
              {patient.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-[#68B92E]/5 py-5 pr-2.5 pl-6 border border-[#68B92E] gap-6 rounded-lg"
                >
                  <img src={item.icon} alt="" />
                  <div className="space-y-2">
                    <h1 className="font-inter font-semibold text-lg">
                      {item.title}
                    </h1>
                    <p className="text-[#4B4B59] font-inter text-[15px] font-normal max-w-[200px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img src={mac} alt="" />
              <div className="flex absolute bottom-5 right-5 gap-5">
                <img
                  src={prev}
                  alt=""
                  className="px-2.5 py-4 rounded-full bg-white "
                />
                <img
                  src={next}
                  alt=""
                  className="px-2.5 py-4 rounded-full bg-white "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#01635A] relative px-8 py-10 space-y-14 rounded-2xl overflow-hidden">
          <div className="w-full h-full absolute z-[999] inset-0 ">
            <img src={bgflim} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-white font-inter font-medium text-[40px]">
                  Why Choose Us?
                </h1>
                <p className="font-inter font-normal text-base text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {us.map((items, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={whitemicro}
                      alt=""
                      className="py-4 px-4 rounded-full bg-white/20"
                    />
                    <div>
                      <h1 className="text-[#E1FBA6]">Lorem Ipsum dolor</h1>
                      <p className="text-white">iSit amet quis alqn</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-[999] w-full ">
              <img
                src={chooseus}
                alt=""
                className="absolute -left-40 top-8 max-h-none max-w-none  w-[850px] "
              />
            </div>
          </div>
          <div className="bg-[#68B92E] flex gap-2.5 px-8 py-4 rounded-xl w-[287px]">
            <img src={whatsapp} alt="whatsapp logo" />
            <button className="text-white font-inter font-medium text-base">
              Contact us on Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;

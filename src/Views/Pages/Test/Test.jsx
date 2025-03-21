import React from "react";
import Cantfind from "../../../Components/Home/Cantfind";
import Overview from "../../../Components/Test/Overview";
import TestFaq from "../../../Components/Test/TestFaq";
import BloodCount from "../../../Components/Test/BloodCount";
import BookBlood from "../../../Components/Test/BookBlood";
import Fullbody from "../../../Components/Test/Fullbody";
import { div } from "framer-motion/client";

const Test = () => {
  return (
    <div className=" bg-[#F1F6EE]  ">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full  mx-auto  px-8">
          <div className="py-4 max-w-[570px] space-y-6">
            <BookBlood />
            <TestFaq />
          </div>
          <div className="max-w-[726px] py-4 space-y-6">
            <BloodCount />
            <Overview />
            <div className="space-y-5">
              <h1 className="font-inter font-medium text-2xl">
                Frequently Booked Together
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Fullbody />
                <Fullbody />
                <Fullbody />
                <Fullbody />
              </div>
            </div>
          </div>
        </div>
        <Cantfind />
      </div>
    </div>
  );
};

export default Test;

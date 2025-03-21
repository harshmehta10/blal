import React from "react";
import brockly from "../../assets/images/brockly.png";

const Blogs = () => {
  const arr = [
    {
      icon: brockly,
      title: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do",
      review: "Medically Reviewed by:",
      doc: "Dr. Aastha Goel",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod quis...",
      date: "Nov 12th 2023",
    },
    {
      icon: brockly,
      title: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do",
      review: "Medically Reviewed by:",
      doc: "Dr. Aastha Goel",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod quis...",
      date: "Nov 12th 2023",
    },
    {
      icon: brockly,
      title: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do",
      review: "Medically Reviewed by:",
      doc: "Dr. Aastha Goel",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod quis...",
      date: "Nov 12th 2023",
    },
    {
      icon: brockly,
      title: "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do",
      review: "Medically Reviewed by:",
      doc: "Dr. Aastha Goel",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod quis...",
      date: "Nov 12th 2023",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8 py-7 space-y-14">
        <div className="flex flex-col items-center justify-center space-y-14 ">
          <h1
            className="text-[#004039] font-inter font-medium text-40 text-center max-w-[766px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Blogs ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </h1>
          <div className="flex justify-center gap-3">
            <button className="text-[#E1FBA6] text-xs lg:text-base font-inter font-normal px-4 py-3 rounded-lg bg-[#01635A] cursor-pointer">
              Recent
            </button>
            <button className="text-[#1E1E2F] text-xs lg:text-base font-inter font-normal px-4 py-3 rounded-lg border border-[#004039] cursor-pointer">
              Most Popular
            </button>
            <button className="text-[#1E1E2F] text-xs lg:text-base font-inter font-normal px-4 py-3 rounded-lg border border-[#004039] cursor-pointer">
              Trending
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {arr.map((item, index) => (
            <div key={index} className="">
              <div>
                <img
                  src={item.icon}
                  alt=""
                  className="object-cover w-full rounded-t-xl"
                />
              </div>
              <div className="border border-[#00000014] space-y-5 py-5 px-4 rounded-b-xl shadow-xl">
                <h1 className="font-inter text-[#1E1E2F] font-medium text-base">
                  {item.title}
                </h1>
                <div className="flex items-center">
                  <p className="font-inter font-normal text-xs">
                    {item.review}
                  </p>
                  <p className="text-[#68B92E] text-xs font-inter font-medium ">
                    {item.doc}
                  </p>
                </div>
                <p className="font-inter text-[#4B4B59] text-sm font-normal">
                  {item.para}
                </p>
                <button className="text-[#68B92E] bg-[#68B92E]/10 border border-[#68B92E]/14 text-xs font-inter font-normal px-3 py-1">
                  {item.date}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center">
          <button className="btn1  hover:!bg-[#01635A] transition-all duration-500 font-inter text-base py-4 px-8 rounded-xl cursor-pointer">
            <p>View All Blogs</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;

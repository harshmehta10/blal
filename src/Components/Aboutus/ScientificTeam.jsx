import React from "react";
import linkdin from "../../assets/Svg/whitelinkdin.svg";
import saksham from "../../assets/images/saksham.png";

const ScientificTeam = () => {
  const doc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-12 py-12 space-y-10">
        <div className="flex flex-col justify-center items-center space-y-7">
          <h1 className="font-inter font-medium text-40">Scientific Team</h1>
          <p className="text-[#97979A] text-sm lg:text-base font-inter font-normal text-center max-w-[950px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore Duis aute
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {doc.map((items, index) => (
            <div
              key={index}
              className="overflow-hidden border border-[#00000014] rounded-xl"
            >
              {/* 
                Top section with image 
                - 'group' and 'relative' are on this container
                - so the overlay only appears on hover of this section
              */}
              <div className="relative bg-[#F1F6EE] rounded-t-xl group">
                <img src={saksham} alt="saksham" className="w-full" />

                {/* Hover text overlay (only over the image container) */}
                <div className="absolute inset-0 bg-[#01635A] bg-opacity-70 flex items-center justify-center text-center px-5 py-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-inter font-normal text-[#FFFFFFB2] text-sm sm:text-base">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Bottom section with name, position, etc. */}
              <div className="bg-[#01635A] rounded-b-xl px-5 py-5 space-y-5">
                <div className="flex justify-between items-center">
                  <p className="font-inter font-medium text-base lg:text-lg text-white">
                    Dr. Monika Shashank
                  </p>
                  <img src={linkdin} alt="LinkedIn" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white font-inter font-normal text-xs">
                    Medical Director Ph.D
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScientificTeam;

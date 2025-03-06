import { React, useState } from "react";
import dropdown from "../../assets/Svg/greendropdown.svg";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const BloodCount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = [
    { id: 1, name: "HEMOGLOBIN" },
    { id: 2, name: "PCV" },
    { id: 3, name: "RBC COUNT" },
    { id: 4, name: "MCV" },
    { id: 5, name: "MCH" },
    { id: 6, name: "MCHC" },
    { id: 7, name: "R.D.W*" },
    { id: 8, name: "TOTAL LEUCOCYTE COUNT (TLC)" },
    {
      id: 9,
      name: "DIFFERENTIAL LEUCOCYTIC COUNT (DLC)",
      child: [
        "NEUTROPHILS",
        "LYMPHOCYTES",
        "EOSINOPHILS",
        "MONOCYTES*",
        "BASOPHILS*",
        "BLASTS*",
        "PRO-MYELOCYTES*",
        "MYELOCYTES*",
        "META-MYELOCYTE*",
        "BANDS*",
        "PROLYMPHOCYTES*",
        "ATYPICAL CELLS*",
        "NRBC S/100 WBC*",
        "CORRECTED TLC*",
      ],
    },
    {
      id: 10,
      name: "ABSOLUTE LEUCOCYTE COUNT",
      smallchild: [
        "NEUTROPHILS",
        "LYMPHOCYTES",
        "EOSINOPHILS",
        "MONOCYTES",
        "BASOPHILS (Optional)*",
        "PLATELET COUNT",
      ],
    },
  ];
  return (
    <div>
      <div className="px-8 py-9  bg-white border border-[#DEE2DB] rounded-xl space-y-10 ">
        <h1 className="font-inter font-medium text-2xl">
          Complete Blood Count (CBC)
        </h1>
        <div className="w-full">
          {/* Clickable header (Text + Icon) */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-[#01433B] text-xl font-inter font-semibold">
              Test(s) Included (28)
            </p>
            <motion.img
              src={dropdown}
              alt="Toggle dropdown"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Smooth dropdown animation */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              isOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="space-y-1 px-4 mt-2">
              {count.map((item, index) => (
                <li key={index} className="list-disc marker:text-[#7C7C7C]">
                  <h2 className="text-[#7C7C7C] text-base font-inter font-normal">
                    {item.name}
                  </h2>

                  {item.child && (
                    <ul className="pl-6 space-y-1 py-1">
                      {item.child.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className="list-disc marker:text-[#7C7C7C]"
                        >
                          <p className="text-[#7C7C7C] text-base font-inter font-normal">
                            {child}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.smallchild && (
                    <ul className="pl-6 space-y-1 py-1">
                      {item.smallchild.map((smallchild, smallChildIndex) => (
                        <li
                          key={smallChildIndex}
                          className="list-disc marker:text-[#7C7C7C]"
                        >
                          <p className="text-[#7C7C7C] text-base font-inter font-normal">
                            {smallchild}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="space-y-4">
          <hr className="text-[#EDEDED]" />
          <p className="text-[#7C7C7C] text-base font-inter font-normal">
            *Optional Tests: Testing of these is conditional depending on
            results of other tests
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodCount;

import React, { useState } from "react";
import Fullbody from "../Test/Fullbody";
import { Link } from "react-router";

const LabTests = () => {
  // Pagination setup
  const totalTests = 60;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalTests / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Example test data (replace with actual API data)
  const testData = Array.from({ length: totalTests }, (_, i) => i + 1);

  // Current items for this page
  const currentItems = testData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar: Filters */}
        <div className="w-full lg:w-1/4 bg-white border rounded-md p-4 h-1/2 space-y-5">
          <h2 className="text-xl font-semibold mb-4 font-inter">Filters</h2>

          {/* Search box */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Tests, Checkups..."
              className="w-full px-3 py-2 border rounded focus:outline-none font-inter"
            />
          </div>

          {/* Body Parts */}
          <div className="">
            <h3 className="text-base font-medium mb-2 font-inter">
              Body Parts
            </h3>
            <div className="overflow-y-scroll custom-scrollbar max-h-48">
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="heart1" className="bg-[#01635A]" />
                <label
                  htmlFor="heart"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Heart Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="heart2" className="" />
                <label
                  htmlFor="heart"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Heart Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="heart3" className="" />
                <label
                  htmlFor="heart"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Heart Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="heart4" className="" />
                <label
                  htmlFor="heart"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Heart Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="kidney" className="" />
                <label
                  htmlFor="kidney"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Kidney Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="liver" className="" />
                <label
                  htmlFor="liver"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Liver Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="stomach" className="" />
                <label
                  htmlFor="stomach"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Stomach Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="muscle" className="" />
                <label
                  htmlFor="muscle"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Muscle Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="thyroid" className="" />
                <label
                  htmlFor="thyroid"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Thyroid Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="thyroid" className="" />
                <label
                  htmlFor="thyroid"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Brain Test
                </label>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <input type="checkbox" id="thyroid" className="" />
                <label
                  htmlFor="thyroid"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Joints Test
                </label>
              </div>
            </div>
          </div>

          {/* Health Conditions */}
          <div className="">
            <h3 className="text-md font-medium mb-2 font-inter">
              Health Conditions
            </h3>
            <div className="overflow-y-scroll custom-scrollbar max-h-48">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="autoimmune" className="mr-2" />
                <label
                  htmlFor="autoimmune"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Autoimmune Disorder
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="hypertension" className="mr-2" />
                <label
                  htmlFor="hypertension"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Hypertension
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="hypersensitive" className="mr-2" />
                <label
                  htmlFor="hypersensitive"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Hypersensitive
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="heart-diseases" className="mr-2" />
                <label
                  htmlFor="heart-diseases"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Heart Diseases
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="infectious1"
                  className="mr-2 border border-[#DEE2DB] font-inter"
                />
                <label
                  htmlFor="infectious"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Infectious
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="infectious2"
                  className="mr-2 border border-[#DEE2DB] "
                />
                <label
                  htmlFor="infectious"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Infectious
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="infectious3"
                  className="mr-2 border border-[#DEE2DB]"
                />
                <label
                  htmlFor="infectious4"
                  className="font-inter font-normal text-base text-[#7C7C7C]"
                >
                  Infectious
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Lab Tests + Cards + Pagination */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold font-inter">Lab Tests</h2>
          <p className="text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, totalTests)} of {totalTests}{" "}
            tests
          </p>

          {/* Grid of Test Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {currentItems.map((_, index) => (
              <Link
                to="/testspage"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
                }
              >
                <Fullbody key={index} />
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {/* Previous Page */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              ◀
            </button>

            {/* Page Numbers (show first 15-16 pages + "..." ) */}
            {[...Array(totalPages)].slice(0, 15).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-green-500 text-white font-inter"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Ellipsis (only if there are more pages) */}
            {totalPages > 15 && (
              <button className="px-3 py-1 bg-gray-200" disabled>
                ...
              </button>
            )}

            {/* Next Page */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTests;

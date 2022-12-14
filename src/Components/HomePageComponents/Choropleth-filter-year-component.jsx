import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
// The current years in the GEO_DATA file - hard coded for now
const currentUsedYears = [2021, 2020, 2019, 2018];
//
//
function FilterYear(params) {
  //
  const { choroplethYear, setChoroplethYear } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  //
  const handleMapYearClick = (e) => {
    console.log("The year has been clicked.. year is:", e.target.dataset.tag);
    const yearSelected = e.target.dataset.tag;
    setChoroplethYear(yearSelected);
    setIsOpen(!isOpen);
  };
  //
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  return (
    <div className="absolute top-0 left-20 inline-block text-left z-[2000]">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-1 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            Year: {choroplethYear}
            <FaAngleDown className="text-base ml-1" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-left absolute mt-2 w-28 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {currentUsedYears.map((year) => {
                return (
                  <span
                    onClick={handleMapYearClick}
                    data-tag={year}
                    className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                    role="menuitem"
                    key={year}
                  >
                    {year}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
//
export default FilterYear;
// <span
//                 data-tag="An Giang"
//                 className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                 role="menuitem"
//               >
//                 An Giang
//               </span>
//               <span
//                 data-tag="Bac Kan"
//                 className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                 role="menuitem"
//               >
//                 Bac Kan
//               </span>
//               <span
//                 data-tag="Tay Ninh"
//                 className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                 role="menuitem"
//               >
//                 Tay Ninh
//               </span>

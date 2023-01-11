import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
//
//
const currentChoices = [
  "Environment Score",
  "Air Quality Score",
  "Deforestation Score",
  "Weather Score",
];
//
function AxisToggle({ setXAxis, xAxis }) {
  //
  //  const { choroplethYear, setChoroplethYear } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  //
  const handleMapYearClick = (e) => {
    // console.log("e.target.dataset.tag", e.target.dataset.tag);

    // const yearSelected = e.target.dataset.tag;
    // setChoroplethYear(yearSelected);
    let newAxisValue;
    if (e.target.dataset.tag === "Air Quality Score") {
      newAxisValue = "Air Quality Score";
    } else if (e.target.dataset.tag === "Deforestation Score") {
      newAxisValue = "Deforestation Score";
    } else if (e.target.dataset.tag === "Weather Score") {
      newAxisValue = "Weather Score";
    } else if (e.target.dataset.tag === "Environment Score") {
      newAxisValue = "Environment Score";
    }

    setXAxis(newAxisValue);
    setIsOpen(!isOpen);
  };
  //
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  return (
    <div className="absolute top-0 left-60 inline-block text-left z-[2000]">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-1 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            {xAxis}
            <FaAngleDown className="text-base ml-1" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-left absolute mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {currentChoices.map((choice) => {
                return (
                  <span
                    onClick={handleMapYearClick}
                    data-tag={choice}
                    className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                    role="menuitem"
                    key={choice}
                  >
                    {choice}
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
export default AxisToggle;

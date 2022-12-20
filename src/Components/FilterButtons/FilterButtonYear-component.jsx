import React, { useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";

const FilterButtonYear = () => {
  //
  const { chosenYear, setChosenYear } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);

  //
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  const handleYearClick = (e) => {
    console.log("The year has been clicked.. year is:", e.target.dataset.tag);
    setChosenYear(e.target.dataset.tag);
    setIsOpen(!isOpen);
  };
  //
  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            {chosenYear ? chosenYear : "Select Year"}
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
              <span
                onClick={handleYearClick}
                data-tag="2018"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                2018
              </span>
              <span
                onClick={handleYearClick}
                data-tag="2019"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                2019
              </span>
              <span
                onClick={handleYearClick}
                data-tag="2020"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                2020
              </span>
              <span
                onClick={handleYearClick}
                data-tag="2021"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                2021
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButtonYear;

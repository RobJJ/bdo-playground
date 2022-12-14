import React, { useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";

const FilterButtonProvince = () => {
  //
  const { chosenProvince, setChosenProvince } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);

  //
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  const handleProvinceClick = (e) => {
    console.log(
      "The province has been clicked.. province is:",
      e.target.dataset.tag
    );
    setChosenProvince(e.target.dataset.tag);
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
            {chosenProvince ? chosenProvince : "Select Province"}
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
                onClick={handleProvinceClick}
                data-tag="An Giang"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                An Giang
              </span>
              <span
                onClick={handleProvinceClick}
                data-tag="Bac Kan"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                Bac Kan
              </span>
              <span
                onClick={handleProvinceClick}
                data-tag="Tay Ninh"
                className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                role="menuitem"
              >
                Tay Ninh
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButtonProvince;

import React, { useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";

const FilterButtonClearAll = () => {
  //
  const { setChosenYear, setChosenProvince } = useGlobalContext();
  //
  const handleClearFilter = () => {
    console.log("Clearing filters");
    setChosenYear(false);
    setChosenProvince(false);
  };
  //   const handleProvinceClick = (e) => {
  //     console.log(
  //       "The province has been clicked.. province is:",
  //       e.target.dataset.tag
  //     );
  //     setChosenProvince(e.target.dataset.tag);
  //     setIsOpen(!isOpen);
  //   };
  //
  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={handleClearFilter}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            Clear Filters
          </button>
        </span>
      </div>
    </div>
  );
};

export default FilterButtonClearAll;

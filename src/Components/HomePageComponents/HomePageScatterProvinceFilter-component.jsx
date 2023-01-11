import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { JSON_DATA } from "../../RegionData/JSON_DATA";
//
//
const listOfProvinces = [];
const zoneTotalData = JSON_DATA.filter(
  (obj) => obj.ZONE === "total" && obj.YEAR === 2021
);

zoneTotalData.forEach((obj) => {
  const provinceName = obj.PROVINCE;
  const isIncluded = listOfProvinces.includes(provinceName);
  if (!isIncluded) {
    listOfProvinces.push(provinceName);
  } else return;
});
// console.log(listOfProvinces);
//
//
//
//
//
function ProvinceToggle({ setXAxis, xAxis }) {
  //
  //  const { choroplethYear, setChoroplethYear } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  //
  const handleMapYearClick = (e) => {
    // console.log("e.target.dataset.tag", e.target.dataset.tag);

    // const yearSelected = e.target.dataset.tag;

    setIsOpen(!isOpen);
  };
  //
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  return (
    <div className="absolute top-0 left-[460px] inline-block text-left z-[2000]">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-1 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            Provinces
            <FaAngleDown className="text-base ml-1" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-left absolute mt-2 w-44 h-56 rounded-md shadow-lg overflow-auto scrollbar-none">
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {listOfProvinces.map((province) => {
                return (
                  <span
                    onClick={handleMapYearClick}
                    data-tag={province}
                    className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                    role="menuitem"
                    key={province}
                  >
                    {province}
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
export default ProvinceToggle;

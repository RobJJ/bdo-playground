import React from "react";
import { MAP_COLORS } from "./HomePAgeChoroplethVietnam-component";
//
// console.log("is this first?? TOP");
const mapColorsLength = MAP_COLORS.length;
const mapColorRangeGrades = [0, 15, 25, 35, 45, 55, 65, 75, 100];
//
//
function ChoroLegend(params) {
  //
  // console.log("or is this first?? In component");
  //
  //
  return (
    <div className="absolute bottom-0 left-0 bg-[#f5f5f5] rounded-lg flex flex-col z-[2000] m-1">
      <div className=" flex flex-col p-1 ">
        {MAP_COLORS.map((ele, idx, arr) => {
          let colorUsed = MAP_COLORS[mapColorsLength - idx - 1].color;
          // console.log("Index:", idx, "Color:", colorUsed);
          return (
            <div key={ele.color} className="flex gap-2 ">
              <span
                style={{ background: `${colorUsed}` }}
                className={` w-[15px] h-[15px]  `}
              ></span>
              <span>{`${mapColorRangeGrades[idx]}-${
                mapColorRangeGrades[idx + 1]
              }`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//
export default ChoroLegend;

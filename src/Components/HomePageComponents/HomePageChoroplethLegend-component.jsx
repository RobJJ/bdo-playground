import React from "react";
import { MAP_COLORS } from "./HomePAgeChoroplethVietnam-component";
//
//
const mapColorsLength = MAP_COLORS.length;
const mapColorRangeGrades = [0, 15, 25, 35, 45, 55, 65, 75, 100];
//
//
function ChoroLegend(params) {
  //

  //
  return (
    <div className="absolute bottom-0 left-0 flex z-[2000] m-1">
      <div className="bg-[#f5f5f5] flex flex-col p-1 rounded-lg">
        {MAP_COLORS.map((ele, idx, arr) => {
          let colorUsed = MAP_COLORS[mapColorsLength - idx - 1].color;
          console.log("Index:", idx, "Color:", colorUsed);
          return (
            <div key={ele.color} className="flex gap-2">
              <span className={` w-[15px] h-[15px] bg-[${colorUsed}] `}></span>
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

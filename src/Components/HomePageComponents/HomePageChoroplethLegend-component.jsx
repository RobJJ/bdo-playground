import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
import { MAP_COLORS_ENV } from "./HomePAgeChoroplethVietnam-component";
import { MAP_COLORS_ECON } from "./HomePAgeChoroplethVietnam-component";
//
// console.log("is this first?? TOP");
const mapColorsLength = MAP_COLORS_ENV.length;
const mapColorRangeGrades = [0, 15, 25, 35, 45, 55, 65, 75, 100];
//
//
function ChoroLegend(params) {
  //
  const { layerType } = useGlobalContext();
  const [colorSchemeToUse, setColorSchemeToUse] = useState([...MAP_COLORS_ENV]);
  useEffect(() => {
    if (layerType === "env") {
      setColorSchemeToUse([...MAP_COLORS_ENV]);
    }
    if (layerType === "econ") {
      setColorSchemeToUse([...MAP_COLORS_ECON]);
    }
    return;
  }, [layerType]);
  // console.log("or is this first?? In component");
  //
  //
  return (
    <div className="absolute bottom-0 left-0 bg-[#f5f5f5] rounded-lg flex flex-col z-[2000] m-1">
      <div className=" flex flex-col p-1 ">
        {colorSchemeToUse.map((ele, idx, arr) => {
          let colorUsed = colorSchemeToUse[mapColorsLength - idx - 1].color;
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

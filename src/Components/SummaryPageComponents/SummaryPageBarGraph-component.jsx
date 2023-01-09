import React from "react";
import { FaUmbrella, FaCloud, FaTree, FaGripLines } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import "remixicon/fonts/remixicon.css";

// const icons = {
//   air: <FaCloud className="w-1/6" />,
//   weather: <FaUmbrella className="w-1/6" />,
//   deforestation: <FaTree className="w-1/6" />,
//   economic: <BsGraphUp className="w-1/6" />,
//   // total: <FaTree className="w-1/6" />,
// };

//
const icons = {
  weather: <i class="ri-umbrella-line"></i>,
  deforestation: <i class="ri-plant-line"></i>,
  air: <i class="ri-cloud-line"></i>,
  economic: <i class="ri-line-chart-line"></i>,
};
//
const colorChart = {
  weather: "#8884d8",
  deforestation: "#ffc658",
  air: "#82ca9d",
  economic: "#00bfff",
};
//
//
const BarWithShadedRegion = ({ label, icon, scoreLabel, data }) => {
  // props data is all 'total' data for that district
  //

  // taking props data and filtering for 2021...
  // this will not be needed if we filter the data on the parent
  const district2021 = data.filter((dataObj) => {
    if (dataObj.YEAR === 2021 && dataObj.ZONE === "total") {
      return dataObj;
    }
  });
  const score = Math.round(district2021[0][`${scoreLabel}`]);
  //
  const style = {
    width: `${score}%`,
    backgroundColor: `${colorChart[icon]}`,
    transition: "width 0.8s ease-in-out",
  };

  return (
    <div className="flex gap-5 items-center  w-full max-w-[680px] ">
      <div className="w-3/12 text-right font-bold flex-none text-sm">
        {label}
      </div>
      <span className="text-3xl flex items-center">{icons[`${icon}`]}</span>

      <div className="relative w-full h-4 bg-gray-300 mr-5">
        <div className="h-full" style={style} />
        <div className="absolute top-0 w-full h-4 flex items-center">
          {[...Array(10)].map((piece, idx) => {
            return (
              <span
                className={`w-[10%] h-full ${
                  idx < 9 ? "border-r-2 border-white" : null
                }`}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BarWithShadedRegion;

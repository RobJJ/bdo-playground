import React from "react";
import { FaUmbrella, FaCloud, FaTree, FaGripLines } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const icons = {
  air: <FaCloud className="w-1/6" />,
  weather: <FaUmbrella className="w-1/6" />,
  deforestation: <FaTree className="w-1/6" />,
  economic: <BsGraphUp className="w-1/6" />,
  total: <FaTree className="w-1/6" />,
};

const BarWithShadedRegion = ({ label, icon, scoreLabel, percentage, data }) => {
  //
  const district2021 = data.filter((dataObj) => {
    if (dataObj.YEAR === 2021 && dataObj.ZONE === "total") {
      return dataObj;
    }
  });
  const score = Math.round(district2021[0][`${scoreLabel}`]);
  //
  const style = {
    width: `${score}%`,
    backgroundColor: "#8884d8",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div className="flex items-center bg-blue-200">
      <div className="w-2/6 font-bold">{label}</div>
      {icons[`${icon}`]}
      <div className="ml-auto w-full h-6 bg-gray-300">
        <div className="h-full rounded-xl" style={style} />
      </div>
    </div>
  );
};

export default BarWithShadedRegion;

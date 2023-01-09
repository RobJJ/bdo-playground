import React from "react";
//
function CustomTooltipLineChart({ payload, active }) {
  //
  //   console.log("Payload: ", payload);
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#f5f5f5] p-2 rounded-lg pointer-events-auto">
        <h2 className="underline font-semibold">{payload[0].payload.YEAR}</h2>
        <div className="flex text-sm">
          <span className="mr-1">{payload[0].name}: </span>
          <span>{payload[0].value}</span>
        </div>
        <div className="flex text-sm">
          <span className="mr-1">{payload[1].name}: </span>
          <span>{payload[1].value}</span>
        </div>
        <div className="flex text-sm">
          <span className="mr-1">{payload[2].name}: </span>
          <span>{payload[2].value}</span>
        </div>
        <div className="flex text-sm">
          <span className="mr-1">{payload[3].name}: </span>
          <span>{payload[3].value}</span>
        </div>
      </div>
    );
  }

  return null;
}
//
export default CustomTooltipLineChart;

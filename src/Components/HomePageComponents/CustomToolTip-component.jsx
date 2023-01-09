import React, { useEffect, useState } from "react";
//
//
function CustomTooltip({ active, payload, label, data }) {
  //
  //   console.log(active);
  // console.log("Data: ", data);
  // console.log("Payload: ", payload);
  // console.log("Active: ", active);

  //
  const randomTestFunc = () => {
    console.log("You clicked this button inside the tooltip!!");
  };
  //

  //   console.log("Custom tooltip:payload: ", payload);
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg pointer-events-auto">
        <h2 className="underline font-semibold mb-1">
          {payload[0].payload.District}
        </h2>
        <p className="text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="text-sm">{`${payload[1].name} : ${payload[1].value}`}</p>
        <span className="text-sm text-slate-400">
          Click district to learn more
        </span>
      </div>
    );
  }

  return null;
}
//
export default CustomTooltip;
//
// There is a ton of customisation available with the tooltip. You can pretty much get anything you need out of the custom tooltip component.
// tryy onMouseOut event to close the tooltip ??
//
// Old buttons that were present in tooltip
//  <button
//           type="button"
//           onClick={randomTestFunc}
//           className="bg-white p-1 rounded-full"
//         >
//           More Info
//         </button>
//         <button
//           type="button"
//           className="bg-white rounded-full p-1"
//           value={"Boobs"}
//         >
//           Close Me
//     </button>

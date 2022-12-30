import React, { useEffect, useState } from "react";
//
//
function CustomTooltip({ active, payload, label, data }) {
  //
  //   console.log(active);

  //
  const randomTestFunc = () => {
    console.log("You clicked this button inside the tooltip!!");
  };
  //

  //   console.log("Custom tooltip:payload: ", payload);
  if (active && payload && payload.length) {
    return (
      <div className="bg-blue-200 p-5 rounded-lg pointer-events-auto">
        <p className="underline">{data}</p>
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        <p>{`${payload[1].name} : ${payload[1].value}`}</p>
        <button
          type="button"
          onClick={randomTestFunc}
          className="bg-white p-1 rounded-full"
        >
          More Info
        </button>
        <button
          type="button"
          className="bg-white rounded-full p-1"
          value={"Boobs"}
        >
          Close Me
        </button>
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

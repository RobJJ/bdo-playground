import React from "react";
import { LayersControl, Marker, Popup, Pane } from "react-leaflet";
import L from "leaflet";
//

function ChoroControl(params) {
  //
  const testing = () => {
    console.log("working??");
  };
  return (
    <button
      onClick={testing}
      className="z-[2000] absolute top-0 right-0 text-xl p-2 m-2 bg-white rounded-lg border-black border-2"
    >
      <div>Hello</div>
    </button>
  );
}
//
export default ChoroControl;

import React from "react";
import { LayersControl, Marker, Popup, Pane } from "react-leaflet";
import L from "leaflet";
//

function MapTypeToggle({ toggle, current }) {
  //
  const handleToggleChoice = () => {
    if (current === "map") {
      toggle("scatter");
    }
    if (current === "scatter") {
      toggle("map");
    }
  };

  return (
    <button
      onClick={handleToggleChoice}
      className="z-[2000] absolute top-0 right-0 text-xl p-2 m-2 bg-white rounded-lg border-black border-2"
    >
      <div>Toggle</div>
    </button>
  );
}
//
export default MapTypeToggle;

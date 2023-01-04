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
    <div className="flex absolute top-0 right-0">
      <button
        onClick={handleToggleChoice}
        className={`${
          current === "map" ? "bg-slate-500 text-white" : "bg-white"
        } z-[2000] text-lg p-1`}
      >
        Regional Map
      </button>
      <button
        onClick={handleToggleChoice}
        className={`${
          current === "scatter" ? "bg-slate-500 text-white" : "bg-white"
        } z-[2000] text-lg p-1`}
      >
        Scatter Map
      </button>
    </div>
  );
}
//
export default MapTypeToggle;

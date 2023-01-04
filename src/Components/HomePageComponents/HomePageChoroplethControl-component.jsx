import React from "react";
import { LayersControl, Marker, Popup, Pane } from "react-leaflet";
import L from "leaflet";
//

function MapTypeToggle({ toggle, current }) {
  //
  const handleToggleChoice = (e) => {
    let selected = e.target.dataset.tag;
    if (current === "map" && selected === "scatter") {
      toggle("scatter");
    }
    if (current === "scatter" && selected === "map") {
      toggle("map");
    }
  };

  return (
    <div className="flex absolute top-0 right-0 rounded-lg z-[2000] ">
      <button
        onClick={handleToggleChoice}
        data-tag="map"
        className={`${
          current === "map" ? "bg-slate-500 text-white" : "bg-[#f5f5f5]"
        } z-[2000] text-base p-1 rounded-l-lg`}
      >
        Regional Map
      </button>
      <button
        onClick={handleToggleChoice}
        data-tag="scatter"
        className={`${
          current === "scatter" ? "bg-slate-500 text-white" : "bg-[#f5f5f5]"
        } z-[2000] text-base p-1 rounded-r-lg`}
      >
        Scatter Map
      </button>
    </div>
  );
}
//
export default MapTypeToggle;

import React from "react";
//
function RefreshMap({ changeZoom }) {
  //
  //

  //
  return (
    <div
      onClick={changeZoom}
      className="absolute bottom-7 right-5 z-[2000] bg-[#f5f5f5] rounded-lg p-1 flex items-center gap-1"
    >
      <span className="flex text-base">
        <i class="ri-refresh-line"></i>
      </span>

      <span className="flex text-sm">Refresh Map</span>
    </div>
  );
}
//
export default RefreshMap;

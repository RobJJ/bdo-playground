import React from "react";
//
function RefreshMap({ changeZoom }) {
  //
  //   function handleRefresh(e) {
  //     console.log("qweqwe");
  //     zoomFunc(20);
  //   }
  //
  return (
    <div className="absolute bottom-7 right-5 z-[2000] bg-[#f5f5f5] rounded-lg p-1">
      <button onClick={changeZoom}>Refresh Map</button>
    </div>
  );
}
//
export default RefreshMap;
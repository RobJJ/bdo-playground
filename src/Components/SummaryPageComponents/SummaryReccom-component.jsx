import React from "react";
import icon from "../RemixIcons/download-2-line.svg";
import RecommendationCard from "./SummaryReccomItems-component";

//
function Recommendations(params) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full  text-lg font-semibold p-1 flex justify-between items-center">
        <h2>RECOMMENDATIONS</h2>
        <span className="text-xl">
          <i class="ri-download-2-line"></i>
        </span>
      </div>
      <div className="w-full h-full bg-red-200 flex flex-col">
        <RecommendationCard iconType="air" />
      </div>
    </div>
  );
}
//
export default Recommendations;

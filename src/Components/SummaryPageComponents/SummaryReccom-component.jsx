import React from "react";
import icon from "../RemixIcons/download-2-line.svg";
import RecommendationCard from "./SummaryReccomItems-component";

//
function Recommendations(params) {
  return (
    <div className="w-full h-full flex flex-col overflow-auto">
      <div className="w-full  text-lg font-semibold p-2 flex justify-between items-center">
        <h2>RECOMMENDATIONS</h2>
        <span className="text-xl">
          <i class="ri-download-2-line"></i>
        </span>
      </div>
      <div className="w-full h-full p-2 flex flex-col overflow-auto scrollbar-none">
        <RecommendationCard iconType="air" />
        <RecommendationCard iconType="forest" />
        <RecommendationCard iconType="weather" />
        <RecommendationCard iconType="econ" />
      </div>
    </div>
  );
}
//
export default Recommendations;

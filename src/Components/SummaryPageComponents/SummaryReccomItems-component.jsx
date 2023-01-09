import React from "react";
import "remixicon/fonts/remixicon.css";
//
const icons = {
  weather: <i class="ri-umbrella-line"></i>,
  forest: <i class="ri-plant-line"></i>,
  air: <i class="ri-cloud-line"></i>,
  econ: <i class="ri-line-chart-line"></i>,
};
function RecommendationCard({ iconType }) {
  return (
    <div className="w-full flex justify-between items-center gap-4 border-b border-slate-400 p-2">
      <span className="text-3xl">
        <i class="ri-plant-line"></i>
      </span>
      <span className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam
        odit recusandae distinctio reprehenderit qui provident, nam quae
        accusamus laborum consequuntur aliquam omnis autem quam nobis eos
        blanditiis magnam non.
      </span>
    </div>
  );
}
//
export default RecommendationCard;

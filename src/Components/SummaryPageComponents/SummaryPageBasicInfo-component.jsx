import React from "react";
import BasicInfoCard from "../HomePageComponents/BasicInfoCard-component";
//
function SummaryBasicInfo(params) {
  return (
    <div className=" flex flex-col w-full h-full p-2 gap-3">
      <h2 className="text-lg font-semibold">DISTRICT - PROVINCE INFO</h2>
      <div className="w-full flex flex-wrap gap-2 items-start overflow-auto scrollbar-none">
        <BasicInfoCard label={"Regional population"} info={"1,358,700"} />
        <BasicInfoCard label={"Rural population"} info={"900,000 (85%)"} />
        <BasicInfoCard label={"Urban population"} info={"487,200 (3%)"} />
        <BasicInfoCard label={"Regional Priority"} info={"1st/320"} />
        <BasicInfoCard label={"Total population"} info={"8,724,100"} />
      </div>
    </div>
  );
}
//
export default SummaryBasicInfo;

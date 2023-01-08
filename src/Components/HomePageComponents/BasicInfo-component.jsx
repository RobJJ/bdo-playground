import React from "react";
import BasicInfoCard from "./BasicInfoCard-component";
//
function BasicInfoHome(params) {
  return (
    <div className=" w-full h-full flex flex-col p-1 gap-2">
      <h2 className="w-full text-center  font-semibold text-lg justify-self-start">
        VIETNAM-WIDE SUMMARY
      </h2>
      <div className="w-full flex items-start flex-wrap gap-2">
        <BasicInfoCard label={"Total population"} info={"98,800,000"} />
        <BasicInfoCard label={"Urban population"} info={"75,100,000 (75%)"} />
        <BasicInfoCard label={"Rural population"} info={"24,700,000 (25%)"} />
        <BasicInfoCard label={"Best performer"} info={"Binh Duong"} />
        <BasicInfoCard label={"Worst performer"} info={"An Giang"} />
      </div>
    </div>
  );
}
//
//
export default BasicInfoHome;

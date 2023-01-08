import React from "react";
//
//
function BasicInfoCard({ label, info }) {
  return (
    <div className="bg-slate-200 flex flex-col px-2 py-1 rounded-lg min-w-min min-h-min">
      <span className="">{info}</span>
      <span className="text-sm text-slate-500">{label}</span>
    </div>
  );
}
//
//
export default BasicInfoCard;

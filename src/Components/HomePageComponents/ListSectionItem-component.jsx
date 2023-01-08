import React from "react";
import ListSectionItemBar from "./ListSectionItemBar-component";
//
//
function ListSectionItem({ data, idx }) {
  // bring in the scores for the district for that year!
  //
  return (
    <div className="w-full flex  text-center border-b-2 border-slate-300">
      <span className="w-1/12 border-r-2 border-slate-300">{idx + 1}</span>
      <span className="w-3/12 border-r-2 border-slate-300">
        {data.DISTRICT}
      </span>
      <span className="w-4/12 border-r-2 border-slate-300">
        {/* Economic section */}
        <ListSectionItemBar value={data.ECON_SCORE} type={"eco"} />
      </span>
      <span className="w-4/12 ">
        {/* Environmental section */}
        <ListSectionItemBar value={data.ENVR_SCORE} type={"env"} />
      </span>
    </div>
  );
}
//
export default ListSectionItem;

import React from "react";
import ListSectionItemBar from "./ListSectionItemBar-component";
//
//
function ListSectionItem(params) {
  return (
    <div className="w-full flex  text-center border-b-2 border-slate-300">
      <span className="w-1/12 border-r-2 border-slate-300">1</span>
      <span className="w-3/12 border-r-2 border-slate-300">An Giang</span>
      <span className="w-4/12 border-r-2 border-slate-300">
        <ListSectionItemBar value={55} type={"eco"} />
      </span>
      <span className="w-4/12 ">
        <ListSectionItemBar value={25} type={"env"} />
      </span>
    </div>
  );
}
//
export default ListSectionItem;

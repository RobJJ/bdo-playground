import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import ListSectionItem from "./ListSectionItem-component";
//
//
function ListSection(params) {
  return (
    <div className=" w-full h-full flex flex-col">
      <section className="w-full bg-red-200 flex">
        <div className="w-1/2">Vietnam : Districts : 2021 </div>
        <div className="w-1/2">Search bar</div>
      </section>
      {/* TABLE DISTRICT SECTION */}
      <section className="w-full h-full bg-red-300 flex flex-col overflow-auto">
        <div className="w-full flex text-center border-t-2 border-b-2 border-black ">
          <span className="w-1/12  border-r-2 border-black">No</span>
          <span className="w-3/12  border-r-2 border-black">District</span>
          <span className="w-4/12 border-r-2 border-black">Economic</span>
          <span className="w-4/12 ">Environmental</span>
        </div>
        <div className="w-full h-full overflow-auto scrollbar-none">
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
          <ListSectionItem />
        </div>
      </section>
    </div>
  );
}
//
export default ListSection;

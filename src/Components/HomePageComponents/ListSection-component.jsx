import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
//
//
function ListSection(params) {
  return (
    <div className="bg-red-100 w-full h-full flex flex-col">
      <section className="w-full bg-red-200 flex">
        <div className="w-1/2">Vietnam : Districts : 2021 </div>
        <div className="w-1/2">Search bar</div>
      </section>
      <section className="w-full h-full">Data</section>
    </div>
  );
}
//
export default ListSection;

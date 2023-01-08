import React, { useState, useEffect } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useGlobalContext } from "../../Context-Reducer/Context";
import ListSectionItem from "./ListSectionItem-component";
import { JSON_DATA } from "../../RegionData/JSON_DATA";
//
// Bring in JSON data and filter for zone 'total'
const zoneTotalData = JSON_DATA.filter((obj) => obj.ZONE === "total");
const defaultTotalData2021 = zoneTotalData.filter((obj) => obj.YEAR === 2021);
// console.log("From List: ", defaultTotalData2021);
//
function ListSection(params) {
  //
  const [yearDataTotal, setYearDataTotal] = useState(defaultTotalData2021);
  const { choroplethYear } = useGlobalContext();
  //
  useEffect(() => {
    // get new data for selected year
    const newTotalDataYear = zoneTotalData.filter(
      (obj) => obj.YEAR === choroplethYear
    );
    // update the data we will use in List Component
    setYearDataTotal(newTotalDataYear);
  }, [choroplethYear]);

  //
  return (
    <div className=" w-full h-full flex flex-col">
      <section className="w-full bg-red-200 flex p-1 text-center">
        <div className="w-1/2 flex justify-start items-center gap-2 pl-5">
          <span>
            <FaMapMarkedAlt fill="rgb(2 132 199)" className="text-xl" />
          </span>
          <span className=" font-semibold">Vietnam : </span>
          <span className="font-semibold">{choroplethYear}</span>
        </div>
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
          {yearDataTotal.map((district, idx) => {
            return <ListSectionItem data={district} key={idx} idx={idx} />;
          })}
        </div>
      </section>
    </div>
  );
}
//
export default ListSection;

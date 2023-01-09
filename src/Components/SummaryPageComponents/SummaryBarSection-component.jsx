import React from "react";
import BarYearFilter from "./SummaryBarSectionYearFilter-component";
import BarWithShadedRegion from "./SummaryPageBarGraph-component";
//
//
function BarChartSection({ data }) {
  // props is 'total' data for specific district
  //
  // create state var for year, default 2021.
  // pass this setter to the filter component that is rendered next to header
  // the filter sets the year and then triggers the useEFfect
  // the useEffect changes the data for this page
  //
  return (
    <div className="w-full h-full  flex flex-col ">
      <div className=" w-full font-semibold text-lg p-2 pl-4 mt-4 flex justify-between items-center">
        <h2>HEADER SECTION - SCORE INDICATORS</h2>
        <div className="mr-5">
          <BarYearFilter />
        </div>
      </div>
      <section className=" w-full h-full flex flex-col gap-2 p-2 ">
        <div className=" flex flex-col w-full h-full p-5 justify-center items-center gap-2">
          <BarWithShadedRegion
            label="Air Quality Score"
            scoreLabel="AIR_SCORE"
            icon="air"
            //   percentage={87}
            data={data}
          />
          <BarWithShadedRegion
            label="Extreme Weather Score"
            scoreLabel="TEMP_SCORE"
            icon="weather"
            //   percentage={87}
            data={data}
          />
          <BarWithShadedRegion
            label="Deforestation Score"
            scoreLabel="FOREST_SCORE"
            icon="deforestation"
            //   percentage={87}
            data={data}
          />
          <BarWithShadedRegion
            label="Economic Score"
            scoreLabel="ECON_SCORE"
            icon="economic"
            //   percentage={87}
            data={data}
          />
        </div>
      </section>
    </div>
  );
}
//
//
export default BarChartSection;
//  <BarWithShadedRegion />
//         <BarWithShadedRegion />
// <BarWithShadedRegion
//             label="Deforestation"
//             scoreLabel="FOREST_SCORE"
//             icon="deforestation"
//             percentage={22}
//             data={districtData}
//           />
//           <BarWithShadedRegion
//             label="Economic"
//             scoreLabel="ECON_SCORE"
//             icon="economic"
//             percentage={87}
//             data={districtData}
//           />

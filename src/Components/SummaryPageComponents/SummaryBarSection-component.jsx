import React from "react";
import BarWithShadedRegion from "./SummaryPageBarGraph-component";
//
//
function BarChartSection({ data }) {
  return (
    <div className="w-full h-full bg-red-100 flex flex-col">
      <h2 className="bg-red-200 w-full font-semibold text-lg p-2 pl-4">
        HEADER SECTION - SCORE INDICATORS
      </h2>
      <section className=" w-full h-full flex flex-col gap-2 p-2">
        <div className="bg-pink-200 w-full h-full p-5">
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

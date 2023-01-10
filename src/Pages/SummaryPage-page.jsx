import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BarChartSection from "../Components/SummaryPageComponents/SummaryBarSection-component";
import BarWithShadedRegion from "../Components/SummaryPageComponents/SummaryPageBarGraph-component";
import SummaryBasicInfo from "../Components/SummaryPageComponents/SummaryPageBasicInfo-component";
import LineGraph from "../Components/SummaryPageComponents/SummaryPageLineGraph-component";
import Recommendations from "../Components/SummaryPageComponents/SummaryReccom-component";
import { useGlobalContext } from "../Context-Reducer/Context";
import { JSON_DATA } from "../RegionData/JSON_DATA";
//
function SummaryPage(params) {
  //
  console.log("summary Page rendered!");
  //
  const { district } = useParams();
  //
  //
  // collection of yearly data for this specific district
  const districtData = JSON_DATA.filter(
    (obj) => obj.ZONE === "total" && obj.DISTRICT === district
  );
  const districtData2021 = districtData.filter((obj) => obj.YEAR === 2021);
  // console.log(districtData);
  //
  //
  return (
    <div className=" w-full h-full p-2 flex gap-2 overflow-auto">
      <section className="w-4/6 h-full  flex flex-col gap-2 p-2">
        {/* VISUAL DATA SECTION - LINE GRAPH */}
        <div className="bg-white w-full h-4/6 rounded-lg shadow-xl p-2 flex">
          <LineGraph summaryData={districtData} />
        </div>
        {/* VISUAL DATA SECTION - BAR GRAPH const rounded = Math.round(float * 100) / 100; */}
        <div className="bg-white w-full h-2/6 rounded-lg shadow-xl p-1 ">
          <BarChartSection data={districtData} data2021={districtData2021} />
        </div>
      </section>
      <section className="w-2/6 h-full  p-2 flex flex-col gap-2 overflow-auto">
        <div className="w-full h-2/6 bg-white shadow-xl rounded-lg p-2">
          <SummaryBasicInfo />
        </div>
        <div className="w-full h-full bg-white shadow-xl rounded-lg p-1 flex overflow-auto">
          <Recommendations />
        </div>
      </section>
    </div>
  );
}
//
export default SummaryPage;

//
//{regionData.map((regionObj) => {
//   if (regionObj.DISTRICT === district) {
//     const { GEOGRAPHIC_REGION, PROVINCE, DISTRICT } = regionObj;
//     return (
//       <div key={district} className="bg-blue-100 flex flex-col">
//         <span>Region: {GEOGRAPHIC_REGION}</span>
//         <span>Province: {PROVINCE}</span>
//         <span>District: {DISTRICT}</span>
//       </div>
//     );
//   }
//   return;
// })}

// Taken from basic info section
// {
//   districtData && (
//     <div key={district} className="bg-blue-100 flex flex-col">
//       <span>Region: {districtData[0].GEOGRAPHIC_REGION}</span>
//       <span>Province: {districtData[0].PROVINCE}</span>
//       <span>District: {districtData[0].DISTRICT}</span>
//     </div>
//   );
// }
// <h2 className="underline">
//             {districtData[0].DISTRICT} - Score Indicators 2021
//           </h2>
//           <BarWithShadedRegion
//             label="Air Quality"
//             scoreLabel="AIR_SCORE"
//             icon="air"
//             percentage={75}
//             data={districtData}
//           />
//           <BarWithShadedRegion
//             label="Weather"
//             scoreLabel="TEMP_SCORE"
//             icon="weather"
//             percentage={55}
//             data={districtData}
//           />
//           <BarWithShadedRegion
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

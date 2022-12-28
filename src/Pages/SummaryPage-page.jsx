import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BarWithShadedRegion from "../Components/SummaryPageComponents/SummaryPageBarGraph-component";
import LineGraph from "../Components/SummaryPageComponents/SummaryPageLineGraph-component";
import { useGlobalContext } from "../Context-Reducer/Context";
//
function SummaryPage(params) {
  //
  console.log("summary Page rendered!");
  //
  const { district } = useParams();
  const { regionData } = useGlobalContext();
  // Create var with filtered data based off district param
  // Lets use it for the summaryPage. Performance?
  const districtData = regionData.filter(
    (regionObj) => regionObj.DISTRICT === district
  );
  //
  return (
    <div className="bg-blue-100 w-full h-full p-2 flex gap-2">
      <section className="w-4/6 h-full bg-blue-200 flex flex-col gap-2 p-2">
        {/* VISUAL DATA SECTION - LINE GRAPH */}
        <div className="bg-white w-full h-4/6 rounded-lg shadow-lg p-2 flex">
          <LineGraph summaryData={districtData} />
        </div>
        {/* VISUAL DATA SECTION - BAR GRAPH const rounded = Math.round(float * 100) / 100; */}
        <div className="bg-white w-full h-2/6 rounded-lg shadow-lg p-2 flex flex-col gap-1 text-center">
          <h2 className="underline">
            {districtData[0].DISTRICT} - Score Indicators 2021
          </h2>
          <BarWithShadedRegion
            label="Air Quality"
            scoreLabel="AIR_SCORE"
            icon="air"
            percentage={75}
            data={districtData}
          />
          <BarWithShadedRegion
            label="Weather"
            scoreLabel="TEMP_SCORE"
            icon="weather"
            percentage={55}
            data={districtData}
          />
          <BarWithShadedRegion
            label="Deforestation"
            scoreLabel="FOREST_SCORE"
            icon="deforestation"
            percentage={22}
            data={districtData}
          />
          <BarWithShadedRegion
            label="Economic"
            scoreLabel="ECON_SCORE"
            icon="economic"
            percentage={87}
            data={districtData}
          />
          <BarWithShadedRegion
            label="Total"
            scoreLabel="ENVR_SCORE"
            icon="total"
            percentage={65}
            data={districtData}
          />
        </div>
      </section>
      <section className="w-2/6 h-full bg-blue-200 p-2 flex flex-col gap-2">
        <div className="w-full h-2/6 bg-white shadow-lg rounded-lg p-2">
          {districtData && (
            <div key={district} className="bg-blue-100 flex flex-col">
              <span>Region: {districtData[0].GEOGRAPHIC_REGION}</span>
              <span>Province: {districtData[0].PROVINCE}</span>
              <span>District: {districtData[0].DISTRICT}</span>
            </div>
          )}
        </div>
        <div className="w-full h-full bg-white shadow-lg rounded-lg p-2">
          <h2>Recommendation Cards</h2>
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

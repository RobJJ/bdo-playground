import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
function SummaryPage(params) {
  //
  const { district } = useParams();
  const { regionData } = useGlobalContext();
  //
  return (
    <div className="bg-blue-100 w-full h-full p-2 flex gap-2">
      <section className="w-4/6 h-full bg-blue-200 flex flex-col gap-2 p-2">
        {/* VISUAL DATA SECTION - LINE GRAPH */}
        <div className="bg-white w-full h-4/6 rounded-lg shadow-lg p-2">
          <h2>Your data rendered</h2>
          {regionData.map((regionObj) => {
            if (regionObj.DISTRICT === district) {
              const { GEOGRAPHIC_REGION, PROVINCE, DISTRICT } = regionObj;
              return (
                <div key={district} className="bg-blue-100 flex flex-col">
                  <span>Region: {GEOGRAPHIC_REGION}</span>
                  <span>Province: {PROVINCE}</span>
                  <span>District: {DISTRICT}</span>
                </div>
              );
            }
          })}
        </div>
        {/* VISUAL DATA SECTION - BAR GRAPH */}
        <div className="bg-white w-full h-2/6 rounded-lg shadow-lg p-2">
          Bar score section
        </div>
      </section>
      <section className="w-2/6 h-full bg-blue-200 p-2">
        <div className="w-full h-full bg-white shadow-lg rounded-lg p-2">
          Info and recommendation section
        </div>
      </section>
    </div>
  );
}
//
export default SummaryPage;

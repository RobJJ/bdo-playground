import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarYearFilter from "./SummaryBarSectionYearFilter-component";
import BarWithShadedRegion from "./SummaryPageBarGraph-component";
//
const defaultYearBarChart = 2021;

//
function BarChartSection({ data, data2021 }) {
  //
  const url = useParams();
  //
  // create state var for year, default 2021.
  const [barChartYear, setBarChartYear] = useState(defaultYearBarChart);
  const [specificYearData, setSpecficYearData] = useState(data2021);
  // pass this setter to the filter component that is rendered next to header
  // the filter sets the year and then triggers the useEFfect
  // the useEffect changes the data for this page
  useEffect(() => {
    const newDataForNewYear = data.filter((dataObj) => {
      if (dataObj.YEAR === Number(barChartYear) && dataObj.ZONE === "total") {
        return dataObj;
      }
    });
    setSpecficYearData(newDataForNewYear);
  }, [barChartYear, url]);
  //
  //
  return (
    <div className="w-full h-full  flex flex-col ">
      <div className=" w-full font-semibold text-lg p-2 pl-4 mt-2 flex justify-between items-center">
        <h2>{data[0].DISTRICT.toUpperCase()} - SCORE INDICATORS</h2>
        <div className="mr-5">
          <BarYearFilter
            chosenYear={barChartYear}
            setChosenYear={setBarChartYear}
          />
        </div>
      </div>
      <section className=" w-full h-full flex flex-col gap-2 p-2 overflow-auto ">
        <div className=" flex flex-col w-full h-full p-5 justify-center items-center gap-2 overflow-auto scrollbar-none">
          <BarWithShadedRegion
            label="Air Quality Score"
            scoreLabel="AIR_SCORE"
            icon="air"
            //   percentage={87}
            data={specificYearData}
          />
          <BarWithShadedRegion
            label="Extreme Weather Score"
            scoreLabel="TEMP_SCORE"
            icon="weather"
            //   percentage={87}
            data={specificYearData}
          />
          <BarWithShadedRegion
            label="Deforestation Score"
            scoreLabel="FOREST_SCORE"
            icon="deforestation"
            //   percentage={87}
            data={specificYearData}
          />
          <BarWithShadedRegion
            label="Economic Score"
            scoreLabel="ECON_SCORE"
            icon="economic"
            //   percentage={87}
            data={specificYearData}
          />
        </div>
      </section>
    </div>
  );
}
//
//
export default BarChartSection;
//
//
// This section could be handled much better. Should pass the data into each individual one but reather create a component that renders the four item so you only have to pass the data once ?

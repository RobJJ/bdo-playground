import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltipLineChart from "./CustomTooltipLineChart-component";

const LineGraph = ({ summaryData }) => {
  // props summaryData is all 'total' data for that district
  //
  // Using the url change to rerender the graph. Quick fix....
  const url = useParams();
  // console.log("url here", url);
  const [filteredData, setFilteredData] = useState();
  //
  useEffect(() => {
    // Properties used for the input data for graph
    const selectedProperties = [
      "YEAR",
      "AIR_SCORE",
      "TEMP_SCORE",
      "FOREST_SCORE",
      "ECON_SCORE",
    ];
    // On initial load, set filteredData to the 'total' values
    // Then map through this to create the data for the chart
    const totalValues = summaryData
      .filter((dataObj) => dataObj.ZONE === "total")
      .map((item) => {
        const newObj = {};
        selectedProperties.forEach((prop) => {
          newObj[prop] = Math.round(item[prop]);
        });
        return newObj;
      });
    // console.log("From useEffect.. totalValues: ", totalValues);
    setFilteredData(totalValues);
  }, [url]);

  //
  // const data = [
  //   { year: 2018, "Air Quality": 50, Weather: 75, Deforestation: 25 },
  //   { year: 2019, "Air Quality": 60, Weather: 80, Deforestation: 30 },
  //   { year: 2020, "Air Quality": 70, Weather: 85, Deforestation: 35 },
  //   { year: 2021, "Air Quality": 80, Weather: 90, Deforestation: 40 },
  // ];
  //
  // console.log(summaryData);
  //
  // Custom values for the Legend
  const legendPayload = [
    { value: "Air Quality", color: "#82ca9d", type: "line" },
    { value: "Weather", color: "#8884d8", type: "line" },
    { value: "Deforestation", color: "#ffc658", type: "line" },
    { value: "Economic", color: "#00bfff", type: "line" },
  ];
  //
  return (
    <div className="flex flex-col items-center w-full h-full bg-white p-2">
      <h2 className="text-lg   font-bold text-gray-700 ">
        {summaryData[0].DISTRICT.toUpperCase()} - SCORE OVER TIME
      </h2>
      <ResponsiveContainer className="w-4/6">
        <LineChart
          className="bg-white font-mono flex"
          data={filteredData}
          margin={{
            top: 15,
            right: 5,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="YEAR"
            // tickLine={false}
            dy={10}
            // height={40}
            // angle={-45}
            // textAnchor="middle"
            // padding={{ left: 50 }}
          />
          <YAxis domain={[0, 100]} dx={-10} />
          <Tooltip content={<CustomTooltipLineChart />} />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            horrizontalAlign="center"
            align="right"
            wrapperStyle={{ paddingLeft: "10px" }}
            payload={legendPayload}
            iconType="plainline"
          />
          <Line
            type="monotone"
            dataKey="AIR_SCORE"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Air Quality"
          />
          <Line
            type="monotone"
            dataKey="TEMP_SCORE"
            stroke="#8884d8"
            strokeWidth={2}
            name="Weather"
          />
          <Line
            type="monotone"
            dataKey="FOREST_SCORE"
            stroke="#ffc658"
            strokeWidth={2}
            name="Deforestation"
          />
          <Line
            type="monotone"
            dataKey="ECON_SCORE"
            stroke="#00bfff"
            strokeWidth={2}
            name="Economic"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;

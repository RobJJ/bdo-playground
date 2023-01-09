import React, { useState, useEffect } from "react";
import CustomTooltip from "./CustomToolTip-component";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceArea,
  Dot,
} from "recharts";
import MapTypeToggle from "./HomePageChoroplethControl-component";
import TestDiv from "./HomePageScatterTest-component";
import { JSON_DATA } from "../../RegionData/JSON_DATA"; // green earth data

const dataOld = [
  { "Environment Score": 10.52, "Economic Score": 20.87, z: "boob" },
  { "Environment Score": 20, "Economic Score": 80, z: "qq" },
  { "Environment Score": 40, "Economic Score": 60, z: "ww" },
  { "Environment Score": 60, "Economic Score": 70, z: "ee" },
  { "Environment Score": 80, "Economic Score": 50, z: "rr" },
  { "Environment Score": 92, "Economic Score": 40, z: "tt" },
];
// 2021 total data filtered
const data2021ZoneTotal = JSON_DATA.filter(
  (obj) => obj.YEAR === 2021 && obj.ZONE === "total"
);
// An array of the Districts: 2021: total
const ALL_DISTRCITS = [];
data2021ZoneTotal.forEach((obj) => {
  const isIncluded = ALL_DISTRCITS.find(
    (data) => data.DISTRICT === obj.DISTRICT
  );
  if (!isIncluded) {
    ALL_DISTRCITS.push({ ...obj });
  } else return;
});
// console.log(ALL_DISTRCITS);
//
const districtDataForScatter = ALL_DISTRCITS.map((district) => {
  return {
    "Environment Score": Math.round(district.ENVR_SCORE),
    "Economic Score": Math.round(district.ECON_SCORE),
    District: district.DISTRICT,
    Province: district.PROVINCE,
  };
});
// console.log(districtDataForScatter);
//
console.log("called each time??");
// Custom dot for ScatterGraph
const RenderDot = ({ cx, cy }) => {
  return <Dot cx={cx} cy={cy} fill="blue" r={2} />;
};
//
// Main Component
const ScatterGraph = ({ toggle, current }) => {
  //
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(districtDataForScatter);
    }, 1000);
  }, []);
  //
  function handleMouseOver(e) {
    console.log("hey you moused over me bitch!");
  }
  //
  return (
    <div className="flex flex-col gap-2 h-full w-full items-center ">
      {/* Header with Toggle */}
      <div className=" relative w-full">
        <h2 className="underline text-center">
          District Data Vietnam: 2021: Total
        </h2>
        <MapTypeToggle current={current} toggle={toggle} />
      </div>
      {/* <TestDiv /> */}
      {/* Scatter Graph Section */}

      <ResponsiveContainer className="w-full h-full">
        <ScatterChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 15,
          }}
          cursor="pointer"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{
              value: "Environmental score",
              position: "insideBottom",
              offset: -10,
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            type="number"
            dataKey="Environment Score"
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />

          <YAxis
            label={{
              value: "Economic Score",
              angle: -90,
              position: "insideLeft",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            dataKey="Economic Score"
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <Tooltip
            // cursor={{ stroke: "red", strokeWidth: 2 }}

            content={<CustomTooltip data={"District Data"} />}
            // trigger="click"
            // trigger={booleanTest ? "click" : null}
          />
          <ReferenceArea
            x1={0}
            x2={50}
            y1={0}
            y2={50}
            // stroke="#FF0000"
            strokeOpacity={0.3}
            fillOpacity={0.2}
            fill="#FF0000"
          />
          <ReferenceArea
            x1={0}
            x2={50}
            y1={50}
            y2={100}
            // stroke="#FF7300"
            strokeOpacity={0.3}
            fillOpacity={0.2}
            fill="#FF7300"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={0}
            y2={50}
            // stroke="#FF7300"
            strokeOpacity={0.3}
            fillOpacity={0.2}
            fill="#FF7300"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={50}
            y2={100}
            // stroke="#008000"
            strokeOpacity={0.3}
            fillOpacity={0.2}
            fill="#008000"
          />

          <Scatter
            fill="#8884d8"
            shape={<RenderDot />}
            onMouseOver={handleMouseOver}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterGraph;
//
// Old Tooltip
// <Tooltip
//   wrapperStyle={{ border: "1px solid black" }}
//   contentStyle={{ backgroundColor: "rgba(201, 218, 255)" }}
//   separator=": "
// />;

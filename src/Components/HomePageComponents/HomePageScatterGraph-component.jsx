import React, { useState } from "react";
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
} from "recharts";

const data = [
  { "Environment Score": 10, "Economic Score": 20, z: "boob" },
  { "Environment Score": 20, "Economic Score": 80, z: "qq" },
  { "Environment Score": 40, "Economic Score": 60, z: "ww" },
  { "Environment Score": 60, "Economic Score": 70, z: "ee" },
  { "Environment Score": 80, "Economic Score": 50, z: "rr" },
  { "Environment Score": 100, "Economic Score": 40, z: "tt" },
];

const ScatterGraph = () => {
  //

  //
  return (
    <div className="flex flex-col gap-2 h-full w-full items-center">
      <h2 className="underline">Scatter Graph Vietnam</h2>

      <ResponsiveContainer className="w-full h-full">
        <ScatterChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{
              value: "Environmental score",
              position: "insideBottom",
              offset: -10,
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
            }}
            dataKey="Economic Score"
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <Tooltip
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
          <Scatter fill="#8884d8" />
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

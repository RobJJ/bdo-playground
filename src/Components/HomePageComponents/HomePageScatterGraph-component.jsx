import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 10, y: 20, z: "boob" },
  { x: 20, y: 80, z: "qq" },
  { x: 40, y: 60, z: "ww" },
  { x: 60, y: 70, z: "ee" },
  { x: 80, y: 50, z: "rr" },
  { x: 100, y: 40, z: "tt" },
];

const ScatterGraph = () => {
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
            dataKey="x"
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />

          <YAxis
            label={{
              value: "Economic Score",
              angle: -90,
              position: "insideLeft",
            }}
            dataKey="y"
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />

          <Tooltip />
          <Scatter fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterGraph;

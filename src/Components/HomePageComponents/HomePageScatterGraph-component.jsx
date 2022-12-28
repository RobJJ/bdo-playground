import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, Label } from "recharts";

const data = [
  { x: 20, y: 80 },
  { x: 40, y: 60 },
  { x: 60, y: 70 },
  { x: 80, y: 50 },
  { x: 100, y: 40 },
];

const ScatterGraph = () => {
  return (
    <ScatterChart width={600} height={500} data={data}>
      <XAxis
        dataKey="x"
        label={{
          value: "Environmental score",
          position: "insideBottom",
          offset: -5,
        }}
      />

      <YAxis
        label={{ value: "Economic Score", angle: -90, position: "insideLeft" }}
        dataKey="y"
        ticks={[0, 20, 40, 60, 80, 100]}
      />

      <Tooltip />
      <Scatter dataKey="y" fill="#8884d8" />
    </ScatterChart>
  );
};

export default ScatterGraph;

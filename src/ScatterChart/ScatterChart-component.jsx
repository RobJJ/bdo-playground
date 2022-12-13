import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const testData = [
  {
    DISTRICT: "Thoai Son",
    ECON_SCORE: 58.6890243902439,
    ENVR_SCORE: 21.46341463414634,
    FOREST_SCORE: 1.829268292682927,
    AIR_SCORE: 46.40243902439025,
    TEMP_SCORE: 16.158536585365855,
  },
];

const ScatterVisual = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="ECON_SCORE" name="economic" unit="%" />
        <YAxis
          type="number"
          dataKey="ENVR_SCORE"
          name="environmental"
          unit="%"
        />
        <Scatter name="A school" data={testData} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterVisual;

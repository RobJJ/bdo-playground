import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

const BarGraph = () => {
  return (
    <div>
      <BarChart
        width={600}
        height={300}
        data={testData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="DISTRICT" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Bar dataKey="ECON_SCORE" fill="#8884d8" />
        <Bar dataKey="ENVR_SCORE" fill="#82ca9d" />
        <Bar dataKey="FOREST_SCORE" fill="#ffc658" />
        <Bar dataKey="AIR_SCORE" fill="#d88c8c" />
        <Bar dataKey="TEMP_SCORE" fill="#d88cc8" />
      </BarChart>
    </div>
  );
};

export default BarGraph;

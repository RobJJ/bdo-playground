import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TestLineChart = ({ data }) => {
  const { PROVINCE, DISTRICT } = data[0];
  return (
    <div>
      <h1>
        {PROVINCE} - {DISTRICT}
      </h1>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="YEAR" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ECON_SCORE"
          stroke="#ff0000"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="ENVR_SCORE"
          stroke="#0000ff"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="FOREST_SCORE"
          stroke="#ffa500"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default TestLineChart;

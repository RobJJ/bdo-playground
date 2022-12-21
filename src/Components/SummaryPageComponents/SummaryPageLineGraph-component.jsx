import React from "react";
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

const LineGraph = () => {
  const data = [
    { year: 2018, line1: 50, line2: 75, line3: 25 },
    { year: 2019, line1: 60, line2: 80, line3: 30 },
    { year: 2020, line1: 70, line2: 85, line3: 35 },
    { year: 2021, line1: 80, line2: 90, line3: 40 },
  ];
  //

  return (
    <div className="flex flex-col items-center w-full h-full bg-red-100 p-5">
      <h2 className="text-2xl font-bold text-gray-700 underline">Line Graph</h2>
      <ResponsiveContainer className="w-4/6">
        <LineChart
          className="bg-slate-100 font-mono flex"
          data={data}
          margin={{
            top: 15,
            right: 5,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            horrizontalAlign="center"
            align="right"
            wrapperStyle={{ paddingLeft: "10px" }}
          />
          <Line type="monotone" dataKey="line1" stroke="#82ca9d" />
          <Line type="monotone" dataKey="line2" stroke="#8884d8" />
          <Line type="monotone" dataKey="line3" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;

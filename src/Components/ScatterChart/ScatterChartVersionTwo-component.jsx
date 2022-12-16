import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ScatterVisualization = ({ data }) => {
  // create an array of unique years in the data to use as options in the filter
  const years = [...new Set(data.map((datum) => datum.YEAR))];

  // state to track the selected year in the filter
  const [selectedYear, setSelectedYear] = React.useState(null);

  // filter the data by the selected year
  const filteredData = data.filter(
    (datum) => !selectedYear || datum.YEAR === selectedYear
  );

  return (
    <div>
      <ScatterChart
        width={400}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="ECON_SCORE" name="Economic Score" />
        <YAxis type="number" dataKey="ENVR_SCORE" name="Environmental Score" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Environmental Score"
          data={filteredData}
          fill="#00AAAE"
        />
      </ScatterChart>
      <div>
        <label>Filter by year:</label>
        <select onChange={(event) => setSelectedYear(event.target.value)}>
          <option value="">All years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ScatterVisualization;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
import FilterButton from "../Components/FilterButton/FilterButton-component";
import { v4 as uuidv4 } from "uuid";
//
//
function HomePage(params) {
  console.log("HomePage Rendered!");
  //
  const { regionData, tabAddFunc, chosenYear } = useGlobalContext();
  const [filteredData, setFilteredData] = useState(regionData);
  //
  useEffect(() => {
    if (!chosenYear) return;
    // Filter the data based on year chosen
    const newFilteredData = regionData.filter(
      (dataObj) => dataObj.YEAR === Number(chosenYear)
    );
    // Refresh the data used for the component
    setFilteredData(newFilteredData);
  }, [chosenYear]);
  //
  return (
    <section className="bg-blue-100 w-full h-full p-2 flex smlr:flex-col gap-1 overflow-auto">
      {/* Graphs area */}
      <div className="bg-blue-200 w-4/6 smlr:w-full smlr:h-4/6 p-2 flex">
        <div className="w-full h-full bg-white rounded-lg shadow-lg p-2 overflow-auto">
          <h2 className="underline mb-5">
            Creating some random district names here
          </h2>
          <div className="bg-red-100 flex flex-col gap-2 text-blue-500 overflow-auto">
            {filteredData.map((regionObj) => {
              const { PROVINCE, DISTRICT, YEAR, ZONE } = regionObj;
              return (
                <Link
                  key={uuidv4()}
                  to={`summary/${DISTRICT}`}
                  onClick={() => tabAddFunc(DISTRICT)}
                >
                  {PROVINCE} : {DISTRICT} : {YEAR} : {ZONE}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Info area */}
      <div className="bg-blue-200 w-2/6 h-full smlr:w-full smlr:h-2/6 p-2 flex flex-col smlr:flex-row gap-2">
        <div className="bg-white w-full h-2/6 smlr:h-full smlr:w-2/6 rounded-lg shadow-lg p-2">
          Basic Info
        </div>
        <div className="bg-white w-full h-4/6 smlr:h-full smlr:w-4/6 rounded-lg shadow-lg p-2">
          <FilterButton />
        </div>
      </div>
    </section>
  );
}
//
export default HomePage;

// When we render the link and fire the click event, we could pass the full object. Keep this in mind for later if this make it easier to render the summary component from the tabBar and not filter it

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
import FilterButtonYear from "../Components/FilterButtons/FilterButtonYear-component";
import { v4 as uuidv4 } from "uuid";
import FilterButtonProvince from "../Components/FilterButtons/FilterButtonProvince-component";
import FilterButtonClearAll from "../Components/FilterButtons/FilterButtonClearAll-component";
import ScatterGraph from "../Components/HomePageComponents/HomePageScatterGraph-component";
import VietnamMap from "../Components/HomePageComponents/HomePageChoropleth-component";
import BasicInfoHome from "../Components/HomePageComponents/BasicInfo-component";
//
//
function HomePage(params) {
  //
  const { regionData, tabAddFunc, chosenYear, chosenProvince } =
    useGlobalContext();
  const [filteredData, setFilteredData] = useState(regionData);
  // users current graph - default: map
  const [currentPage, setCurrentPage] = useState("map");
  //
  const toggleMapChoice = (type) => {
    setCurrentPage(type);
  };
  // useEffect(() => {
  //   if (!chosenYear && !chosenProvince) {
  //     setFilteredData(regionData);
  //   }
  //   // Set newFilteredData to all available Data
  //   let newFilteredData = regionData;
  //   // Filter the data based on year chosen option exists
  //   if (chosenYear) {
  //     newFilteredData = newFilteredData.filter(
  //       (dataObj) => dataObj.YEAR === Number(chosenYear)
  //     );
  //   }
  //   if (chosenProvince) {
  //     newFilteredData = newFilteredData.filter(
  //       (dataObj) =>
  //         dataObj.PROVINCE.split(" ").join("") ===
  //         chosenProvince.split(" ").join("")
  //     );
  //   }
  //   // Refresh the data used for the component
  //   setFilteredData(newFilteredData);
  // }, [chosenYear, chosenProvince]);
  //
  return (
    <section className="bg-blue-100 w-full h-full p-2 flex smlr:flex-col gap-1 overflow-auto">
      <div className="bg-blue-200 w-4/6 smlr:w-full smlr:h-4/6 p-2 flex gap-2">
        {/* Graphs area */}
        <div className="w-full bg-white rounded-lg shadow-lg p-2">
          {/*<ScatterGraph /> or <VietnamMap /> rendered based on choice*/}
          {currentPage === "map" && (
            <VietnamMap current={currentPage} toggle={toggleMapChoice} />
          )}
          {currentPage === "scatter" && (
            <ScatterGraph current={currentPage} toggle={toggleMapChoice} />
          )}
        </div>
      </div>
      {/* Info area - 2 pieces */}
      <div className="bg-blue-200 w-2/6 h-full smlr:w-full smlr:h-2/6 p-2 flex flex-col smlr:flex-row gap-2">
        <div className="bg-white w-full h-2/6 smlr:h-full smlr:w-2/6 rounded-lg shadow-lg p-1">
          <BasicInfoHome />
        </div>
        <div className="bg-white w-full h-4/6 smlr:h-full smlr:w-4/6 rounded-lg shadow-lg p-2">
          List section
        </div>
      </div>
    </section>
  );
}
//
export default HomePage;

// When we render the link and fire the click event, we could pass the full object. Keep this in mind for later if this make it easier to render the summary component from the tabBar and not filter it

//REMOVED FROM HOMEPAGE
// <div className=" h-full bg-white rounded-lg shadow-lg p-2 overflow-auto">
//   <h2 className="underline mb-5">Creating some random district names here</h2>
//   <div className="bg-red-100 flex flex-col gap-2 text-blue-500 overflow-auto">
//     {filteredData.map((regionObj) => {
//       const { PROVINCE, DISTRICT, YEAR, ZONE } = regionObj;
//       return (
//         <Link
//           key={uuidv4()}
//           to={`summary/${DISTRICT}`}
//           onClick={() => tabAddFunc(DISTRICT)}
//         >
//           {PROVINCE} : {DISTRICT} : {YEAR} : {ZONE}
//         </Link>
//       );
//     })}
//   </div>
// </div>;
//
// remove buttons from testing homePAge
// <FilterButtonYear />
//           <FilterButtonProvince />
//           <FilterButtonClearAll />

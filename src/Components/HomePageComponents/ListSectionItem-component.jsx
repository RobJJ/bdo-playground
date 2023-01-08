import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
import ListSectionItemBar from "./ListSectionItemBar-component";
//
//
function ListSectionItem({ data, idx }) {
  const { tabAddFunc } = useGlobalContext();
  // bring in the scores for the district for that year!
  //
  return (
    <div className="w-full flex  text-center border-b-2 border-slate-300">
      <span className="w-1/12 border-r-2 border-slate-300">{idx + 1}</span>
      <Link
        className="w-3/12 border-r-2 border-slate-300"
        onClick={() => tabAddFunc(data.DISTRICT)}
        to={`summary/${data.DISTRICT}`}
      >
        {data.DISTRICT}
      </Link>
      <span className="w-4/12 border-r-2 border-slate-300">
        {/* Economic section */}
        <ListSectionItemBar value={data.ECON_SCORE} type={"eco"} />
      </span>
      <span className="w-4/12 ">
        {/* Environmental section */}
        <ListSectionItemBar value={data.ENVR_SCORE} type={"env"} />
      </span>
    </div>
  );
}
//
export default ListSectionItem;
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

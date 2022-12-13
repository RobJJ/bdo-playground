import React from "react";
import ScoreBar from "./ScoreBar-component";
//
function RegionalList(params) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      {/* HEADER - 3 columns */}
      <section className="bg-slate-300 w-full flex text-center underline">
        <div className="w-1/3">Region</div>
        <div className="w-1/3">Economic</div>
        <div className="w-1/3">Environmental</div>
      </section>
      {/* CONTENT - 3 columns */}
      <section className="w-full h-full bg-slate-300 flex flex-col gap-2">
        {/* for each object in the array, create this */}
        <div className="flex gap-1 text-center">
          <div className="w-1/3 bg-orange-200">Hanoi</div>
          <div className="w-1/3 bg-orange-200 flex">
            <ScoreBar score={50} />
          </div>
          <div className="w-1/3 bg-orange-200">Score</div>
        </div>
        <div className="flex gap-1 text-center">
          <div className="w-1/3 bg-orange-200">HCMC</div>
          <div className="w-1/3 bg-orange-200 flex">
            <ScoreBar score={35} />
          </div>
          <div className="w-1/3 bg-orange-200">Score</div>
        </div>
      </section>
    </div>
  );
}
//
export default RegionalList;

import React from "react";
//
function HomePage(params) {
  return (
    <section className="bg-blue-100 w-full h-full p-2 flex smlr:flex-col gap-1">
      {/* Graphs area */}
      <div className="bg-blue-200 w-4/6 smlr:w-full smlr:h-4/6 p-2 flex">
        <div className="w-full h-full bg-white rounded-lg shadow-lg p-2">
          Map Content here
        </div>
      </div>
      {/* Info area */}
      <div className="bg-blue-200 w-2/6 h-full smlr:w-full smlr:h-2/6 p-2 flex flex-col smlr:flex-row gap-2">
        <div className="bg-white w-full h-2/6 smlr:h-full smlr:w-2/6 rounded-lg shadow-lg p-2">
          Basic Info
        </div>
        <div className="bg-white w-full h-4/6 smlr:h-full smlr:w-4/6 rounded-lg shadow-lg p-2">
          Province/Region List
        </div>
      </div>
    </section>
  );
}
//
export default HomePage;

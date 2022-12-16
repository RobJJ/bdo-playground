import React from "react";
//
function HomePage(params) {
  return (
    <section className="bg-blue-100 w-full h-full p-2 flex smlr:flex-col gap-1">
      {/* Graphs area */}
      <div className="bg-blue-200 w-4/6 smlr:w-full smlr:h-4/6 p-2 flex">
        <div className="w-full h-full bg-red-200">Map Content here</div>
      </div>
      {/* Info area */}
      <div className="bg-blue-200 w-2/6 h-full smlr:w-full smlr:h-2/6 p-2 flex flex-col smlr:flex-row gap-2">
        <div className="bg-red-200 w-full h-2/6 smlr:h-full smlr:w-2/6">
          Basic Info
        </div>
        <div className="bg-red-200 w-full h-4/6 smlr:h-full smlr:w-4/6">
          Province/Region List
        </div>
      </div>
    </section>
  );
}
//
export default HomePage;

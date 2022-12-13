import React from "react";
import PopulationDensityMap from "./VietnamMap/VietnamMap-component";
//
//
function App() {
  //
  //
  return (
    <div className="w-screen h-screen p-2 bg-[#f5f5f5] flex flex-col">
      {/* TabBar */}
      <section className="bg-slate-300 w-full">
        TabBar - routing ability for the outlet below
      </section>
      {/* Content Area - 2 main areas : graph and info - Top level display 1/2 */}
      <section className="bg-blue-100 w-full h-full p-2 flex smlr:flex-col gap-1">
        {/* Graphs area */}
        <div className="bg-blue-200 w-4/6 smlr:w-full smlr:h-4/6 p-2 flex">
          <div className="w-full h-full bg-red-200">Map Content here</div>
        </div>
        {/* Info area */}
        <div className="bg-blue-200 w-2/6 h-full smlr:w-full smlr:h-2/6 p-2 flex flex-col gap-2">
          <div className="bg-red-200 w-full h-2/6">Basic Info</div>
          <div className="bg-red-200 w-full h-4/6">Regional List</div>
        </div>
      </section>
    </div>
  );
}

export default App;

// The TabBar is going to be a fixed feature of the display... It will be a router component
// smlr media query triggers the styles when the screen gets smaller than 1200px. Usually the user will be on a large screen, but its a nice feature for smaller use cases

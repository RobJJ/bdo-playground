import React from "react";
import TabBar from "./Components/TabBar/TabBar-component";
import HomePage from "./Pages/HomePage-page";
import SummaryPage from "./Pages/SummaryPage-page";

//
//
function App() {
  //
  //
  return (
    <div className="w-screen h-screen p-2 bg-[#f5f5f5] flex flex-col">
      {/* TabBar */}
      <TabBar />
      {/* Content HOME PAGE - 2 main areas : graph and info - Top level display 1/2 */}
      {/*<SummaryPage />*/}
      <HomePage />
    </div>
  );
}

export default App;

// The TabBar is going to be a fixed feature of the display... It will be a router component
// smlr media query triggers the styles when the screen gets smaller than 1200px. Usually the user will be on a large screen, but its a nice feature for smaller use cases

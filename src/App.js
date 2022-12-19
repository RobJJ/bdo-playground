import React from "react";
import TabBar from "./Components/TabBar/TabBar-component";
import HomePage from "./Pages/HomePage-page";
import SummaryPage from "./Pages/SummaryPage-page";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//
//
function App() {
  //
  //
  return (
    <div className="w-screen h-screen p-2 bg-[#f5f5f5] flex flex-col">
      {/* TabBar is constant - lives outside the routes */}
      <TabBar />
      {/* Routes to render */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="summary/:district" element={<SummaryPage />} />
      </Routes>
      {/* End of routes */}
    </div>
  );
}

export default App;
// <SummaryPage />

// The TabBar is going to be a fixed feature of the display... It will be a router component
// smlr media query triggers the styles when the screen gets smaller than 1200px. Usually the user will be on a large screen, but its a nice feature for smaller use cases

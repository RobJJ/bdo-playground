import React from "react";
//
function TabBar(params) {
  return (
    <div className="bg-slate-300 w-full p-2">
      <div className="w-full bg-white rounded-lg shadow-lg flex p-1">
        {/*Home NAV - fixed here. reroutes to homepage */}
        <span className="p-1 border-2 border-black rounded-lg">HOME PAGE</span>
      </div>
      {/* This section will loop over tabBar state array */}
    </div>
  );
}
//
export default TabBar;
//
// **** NOTES ****
//
// Dont make the HOME button part of the tabBarState. We want it to be a fixed button that just routes a user back to the HomePage page.

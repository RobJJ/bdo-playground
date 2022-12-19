import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function TabBar(params) {
  //
  const { tabBarState } = useGlobalContext();
  //
  return (
    <div className="bg-slate-300 w-full p-2">
      <div className="w-full bg-white rounded-lg shadow-lg flex p-1">
        {/*Home NAV - fixed here. reroutes to homepage */}
        <Link to="/" className="p-1 border-2 border-black rounded-lg">
          HOME PAGE
        </Link>
        {tabBarState.map((district) => {
          return (
            <div
              key={district.name}
              className="p-1 border-2 border-black rounded-lg"
            >
              <Link to={`summary/${district.name}`}>{district.name}</Link>
            </div>
          );
        })}
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function TabBar(params) {
  //
  const { tabBarState, dispatch } = useGlobalContext();
  const navigate = useNavigate();
  //
  const removeTabDistrict = (districtName) => {
    console.log("The del button has been clicked!");
    // remove the district from the tabBarState
    dispatch({ type: "REMOVE_DISTRICT_FROM_TABBAR", payload: districtName });
    // Navigate the user back to HOMEPAGE
    navigate("/");
  };
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
              className="p-1 border-2 border-black rounded-lg flex gap-2"
            >
              <Link to={`summary/${district.name}`}>{district.name}</Link>
              <span
                onClick={() => removeTabDistrict(district.name)}
                className="bg-red-300 cursor-pointer"
              >
                {" "}
                x{" "}
              </span>
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

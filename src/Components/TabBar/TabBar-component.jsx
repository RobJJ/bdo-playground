import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
import "remixicon/fonts/remixicon.css";
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
  // function handleHoverOver(e) {
  //   // console.log(e.target);
  //   e.target.classList.add("scale-95");
  //   e.target.classList.add("shadow-[0_0_10px_#333]");
  // }
  // function handleHoverOut(e) {
  //   // console.log(e.target);
  //   e.target.classList.remove("scale-95");
  //   e.target.classList.remove("shadow-[0_0_10px_#333]");
  // }
  //
  //
  return (
    <div className=" w-full  p-2">
      <div className="w-full flex p-1 pb-2 gap-1 border-b-2 border-black">
        {/*Home NAV - fixed here. reroutes to homepage */}

        <Link
          to="/"
          className="bg-white border-2 border-black rounded-lg  px-2 flex gap-1 items-center font-semibold"
        >
          <span className="text-blue-600 text-xl flex">
            <i class="ri-home-4-line"></i>
          </span>

          <span>HOME PAGE</span>
        </Link>

        {tabBarState.map((district) => {
          return (
            <div
              key={district.name}
              className="bg-white border-2 border-black rounded-lg flex items-center gap-1 px-2 font-semibold"
            >
              <Link to={`summary/${district.name}`}>{district.name}</Link>
              <span
                onClick={() => removeTabDistrict(district.name)}
                className=" cursor-pointer text-red-500 text-xl flex "
              >
                <i class="ri-close-line"></i>
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

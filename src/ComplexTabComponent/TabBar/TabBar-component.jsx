import React from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function TabBar(params) {
  //
  const { tabList, setTabList } = useGlobalContext();
  //
  return (
    <div className="bg-blue-100 flex flex-col p-5">
      {/* TABBAR - list of tabs */}
      <div className="bg-blue-200 text-xl flex gap-2">
        <span className="bg-blue-400 p-2">HOME</span>
        <span className="bg-blue-400 p-2">DaNang</span>
        <span className="bg-blue-400 p-2">Hanoi</span>
      </div>
      {/* DISPLAY AREA - shows context of current tab */}
      <div>
        <h2>Country:</h2>
        <h2>City:</h2>
        <h2>Location:</h2>
      </div>
    </div>
  );
}
//
export default TabBar;
//

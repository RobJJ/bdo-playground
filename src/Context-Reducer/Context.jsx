import React, { useContext, useState, useReducer } from "react";
import reducer from "./Reducer";
import { testDataBDO } from "../RegionData/TestData";
//
//
const initialState = {
  tabBarState: [],
};
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(reducer, initialState);
  const [regionData, setRegionData] = useState(testDataBDO);
  //
  const tabAddFunc = (districtName) => {
    console.log(
      "A district from the homePage has been clicked. It should now be added to the tabBar!"
    );
    dispatch({ type: "ADD_TAB_TO_STATE", payload: districtName });
  };
  return (
    <AppContext.Provider
      value={{ ...state, regionData, setRegionData, tabAddFunc }}
    >
      {children}
    </AppContext.Provider>
  );
};
//
//
//
//
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

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
  // This chosenYear variable is for the filter button (testing)
  const [chosenYear, setChosenYear] = useState(false);
  //
  //
  const tabAddFunc = (districtName) => {
    // Do check to see if distrcit is already in tabBar state
    const districtAlreadyExists = state.tabBarState.some(
      (districtObj) => districtObj.name === districtName
    );
    if (districtAlreadyExists) return;
    dispatch({ type: "ADD_TAB_TO_STATE", payload: districtName });
  };

  //
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        regionData,
        setRegionData,
        tabAddFunc,
        chosenYear,
        setChosenYear,
      }}
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

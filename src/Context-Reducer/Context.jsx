import React, { useContext, useState, useReducer } from "react";

import reducer from "./Reducer";
import { testDataBDO } from "../RegionData/TestData";
//
//
const initialState = {
  tabBarState: [],
};
const defaultChoroplethYear = 2021;
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(reducer, initialState);
  const [choroplethYear, setChoroplethYear] = useState(defaultChoroplethYear);
  const [searchedLetters, setSearchedLetters] = useState("");
  const [provinceData, setProvinceData] = useState(null);
  //
  // Old stuff here
  // const [regionData, setRegionData] = useState(testDataBDO);
  // const [chosenYear, setChosenYear] = useState(false);
  // const [chosenProvince, setChosenProvince] = useState(false);
  //
  // A layerType for environment vs economic choice
  const [layerType, setLayerType] = useState("env");
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
        tabAddFunc,
        layerType,
        setLayerType,
        choroplethYear,
        setChoroplethYear,
        searchedLetters,
        setSearchedLetters,
        provinceData,
        setProvinceData,
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

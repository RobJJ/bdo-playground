import React, { useContext, useState, useReducer } from "react";
import reducer from "./Reducer";
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
  //
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
//
//
//
//
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

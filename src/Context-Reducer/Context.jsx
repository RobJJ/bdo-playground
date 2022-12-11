import React, { useContext, useState } from "react";
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  //
  const [tabList, setTabList] = useState([]);
  //
  return (
    <AppContext.Provider value={{ tabList, setTabList }}>
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

import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import data from "./centres-vaccination.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [vaccineData, setVaccineData] = useState(data.features);
  return (
    <AppContext.Provider value={{ vaccineData }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

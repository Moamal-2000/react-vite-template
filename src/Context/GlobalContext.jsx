import { useContext, useState } from "react";

const { createContext } = require("react");

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [number, setNumber] = useState(0);

  const state = { number, setNumber };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);

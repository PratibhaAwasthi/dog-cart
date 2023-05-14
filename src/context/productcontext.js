import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Name">{children}</AppContext.Provider>;
};

export { AppProvider };

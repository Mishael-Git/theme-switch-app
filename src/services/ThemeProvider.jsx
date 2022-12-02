import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [changeTheme, setChangeTheme] = useState(false);
  const handleColorChange = () => {
    setChangeTheme((prevColor) => !prevColor);
  };

  const value = { handleColorChange, changeTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  if (!ThemeContext) throw Error("provider the provider on the app component") && toast.error("provider the provider on the app component");
  return useContext(ThemeContext);
};

export { ThemeProvider, useThemeContext };

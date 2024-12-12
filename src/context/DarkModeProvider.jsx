import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
const DarkModeContext = createContext();
export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

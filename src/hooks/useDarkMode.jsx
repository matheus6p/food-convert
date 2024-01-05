/* eslint-disable react/prop-types */
import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme)
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(ThemeContext);
}

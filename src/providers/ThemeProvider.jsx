import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleThemeHandler = () => {
    setTheme(!theme);
  };

  const getThemeCtx = () => ({
    theme,
    toggleThemeHandler,
  });

  return (
    <ThemeContext.Provider value={getThemeCtx()}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

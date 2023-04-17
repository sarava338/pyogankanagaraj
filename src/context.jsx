import React, { createContext, useState } from "react";

const dark_mode = "./assets/dark_mode.png";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  
  const elements = "body, p, a, button, input, textarea";


  if (theme) {
    document.querySelectorAll(elements).forEach((e) => {
      e.style.backgroundColor = "#121212";
      e.style.color = "white";
    });
  } else {
    document.querySelectorAll(elements).forEach((e) => {
      e.style.backgroundColor = "white";
      e.style.color = "#121212";
    });
  }

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext };
export { ThemeProvider };

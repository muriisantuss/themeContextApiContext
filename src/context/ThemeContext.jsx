import { createContext, useState } from "react";

// Criamos o contexto
export const ThemeContext = createContext();

// Provider para gerenciar o estado do tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const changeToRedMode = () => {
    document.body.style.backgroundColor = "red";
    setTheme("red");
  };

  const changeToDarkMode = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setTheme("dark");
  };

  const changeToLightMode = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    setTheme("light");
  };

  const toggleTheme = () => {
    if (theme === "light") {
      changeToRedMode();
    } else if (theme === "red") {
      changeToDarkMode();
    } else {
      changeToLightMode();
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

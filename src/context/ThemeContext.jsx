import { createContext, useState } from "react";

// Criamos o contexto
export const ThemeContext = createContext();

// Provider para gerenciar o estado do tema
export function ThemeProvider({ children }) {
  const [isRedMode, setIsRedMode] = useState(false);

  const toggleTheme = () => {
    if (isRedMode) {
      document.body.style.backgroundColor = "";
    } else {
      document.body.style.backgroundColor = "red";
    }
    setIsRedMode(!isRedMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

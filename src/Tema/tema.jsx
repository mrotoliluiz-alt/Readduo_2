import { createContext, useContext, useEffect, useState } from "react";
import styles from "./index.css";

const ThemeContext = createContext(null);
const STORAGE_KEY = "readduo-theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "system"
  );

  useEffect(() => {
    const root = document.documentElement;

    const aplicarEscuro = (ativo) => {
      root.classList.toggle("dark", ativo);
    };

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      aplicarEscuro(media.matches);

      const listener = (e) => aplicarEscuro(e.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }

    aplicarEscuro(theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme precisa estar dentro de um ThemeProvider");
  }
  return context;
}
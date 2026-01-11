import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState(() => {
    if (localStorage.theme) {
      return localStorage.theme === "dark";
    }
    return prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

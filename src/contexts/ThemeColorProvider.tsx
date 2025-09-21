import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./contexts";

interface ThemeColorProvideProps {
  children: React.ReactNode;
}
export default function ThemeColorProvide({
  children,
}: ThemeColorProvideProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? (saved as Theme) : "light";
  });

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

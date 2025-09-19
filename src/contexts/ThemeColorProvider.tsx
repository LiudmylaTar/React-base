import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./contexts";

interface ThemeColorProvideProps {
  children: React.ReactNode;
}
export default function ThemeColorProvide({
  children,
}: ThemeColorProvideProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

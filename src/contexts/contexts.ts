import { createContext } from "react";

export type Theme = "light" | "dark" | "colorful";

export interface ThemeContextType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeTheme: () => {},
});

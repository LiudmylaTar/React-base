import { useContext } from "react";
import { ThemeContext, type Theme } from "../../contexts/contexts";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("ThemeSwitcher must be used within ThemeColorProvider");
  }

  const { theme, changeTheme } = ctx;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };

  return (
    <select
      name="theme"
      className="selector"
      value={theme}
      onChange={handleChange}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="colorful">Colorful</option>
    </select>
  );
}

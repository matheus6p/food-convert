import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon } from "@phosphor-icons/react";

export function ThemeSwitcher() {
  const {theme, setTheme} = useDarkMode();

  return (
    <div className="absolute right-0 top-0 pr-6 pt-5 cursor-pointer">
    {theme === "light" ? (
      <button type="button" onClick={() => setTheme("dark")}>
        <Moon size={32} color="#333333" />
      </button>
    ) : (
      <button type="button" onClick={() => setTheme("light")}>
        <Sun size={32} color="#ffffff" />
      </button>
    )}
  </div>
  )
}
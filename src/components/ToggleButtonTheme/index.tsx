"use client";
import { SunMoonIcon } from "lucide-react";

type ToggleButtonThemeProps = { width?: number };

export const ToggleButtonTheme: React.FC<ToggleButtonThemeProps> = ({
  width = 25,
}) => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    html.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center px-6 py-2
        bg-white dark:bg-gray-800
        text-gray-800 dark:text-white
        border border-gray-300 dark:border-gray-700
        rounded-full
        shadow-md dark:shadow-lg
        transition-all duration-200 ease-in-out
        hover:bg-gray-100 dark:hover:bg-gray-700
        active:scale-95 active:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
    >
      <SunMoonIcon size={width} />
    </button>
  );
};

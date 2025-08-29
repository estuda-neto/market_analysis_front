"use client";

import { SunMoonIcon } from "lucide-react";
import styles from "./tglbutton.module.css";

type ToggleButtonThemeProps = {
  width?: number;
};

export const ToggleButtonTheme: React.FC<ToggleButtonThemeProps> = ({ width = 25 }) => {
  const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  const newTheme = !isDark ? "dark" : "light";

  html.classList.toggle("dark", !isDark);
  localStorage.setItem("theme", newTheme);
  document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; 
};

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      <SunMoonIcon size={width} />
    </button>
  );
};

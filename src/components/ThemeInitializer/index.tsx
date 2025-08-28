"use client";

import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.classList.toggle("dark", saved === "dark");
  }
}, []);

  return null;
}

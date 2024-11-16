"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme(); // Fixed typo from 'theam'
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Return null on initial render

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
